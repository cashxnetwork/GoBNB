// SPDX-License-Identifier: MIT

pragma solidity ^0.8.26;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IUniswapRouter {
    function addLiquidity(
        address tokenA,
        address tokenB,
        uint256 amountADesired,
        uint256 amountBDesired,
        uint256 amountAMin,
        uint256 amountBMin,
        address to,
        uint256 deadline
    ) external returns (uint256 amountA, uint256 amountB, uint256 liquidity);
}

interface AggregatorV3Interface {
    function latestAnswer() external view returns (uint256);

    function decimals() external view returns (uint8);
}

struct UpgradeStruct {
    uint8 id;
    uint256 valueToUpgradeInUSD;
}

struct RefereeStruct {
    address referee;
    address assignedTo;
}

struct TeamStruct {
    address teamMember;
    uint8 level;
}

struct AccountStruct {
    address self;
    address parent;
    address referrer;
    address[] referee;
    RefereeStruct[] refereeAssigned;
    TeamStruct[] team;
    uint256 selfBusinessInUSD;
    uint256 upgradedValueInUSD;
    // UpgradeStruct upgradeId;
    uint8 upgradeId;
    uint256 directBusinessInUSD;
    uint256 teamBusinessInUSD;
    uint256 referralRewardsInUSD;
    uint256 weeklyRewardsInUSD;
    uint256 upgradeRewardsInUSD;
    uint256 userRandomIndex;
    uint256 timestampJoined;
}

contract RegistrationUpgradeable is
    Initializable,
    OwnableUpgradeable,
    UUPSUpgradeable
{
    address[] private _users;
    address[] private _randomUserList;

    uint256 private _totalRegistrationValueInUSD;
    uint256 private _referralPaidInUSD;
    uint256 private _randomRewardsPaidInUSD;
    uint256 private _weeklyRewardsPaidInUSD;

    address private _teamWallet;
    uint8 private _teamWalletRate;

    uint256 private _valueToCreateLiquidityInWei;
    uint8 private _liquidityCreateRate;

    uint256 private _weeklyRewardValueInWei;
    uint8 private _weeklyRewardRate;
    uint256 private _weeklyRewardTimestamp;

    // uint8[] private _levelRates;
    uint8 private _levelRatesFixed;
    uint8 private _levelsToCount;
    uint256 private _refereeLimit;

    address private _defaultReferrer;
    uint256 private _registrationValueInUSD;

    address private _liquidityWallet;

    address[] private _supportedChainLinkOracleAddress;

    mapping(address => AccountStruct) private _mappingAccounts;
    mapping(uint8 => UpgradeStruct) private _mappingUpgrade;
    mapping(address => bool) private _mappingOracle;

    event Registration(
        address by,
        address to,
        address user,
        uint256 valueInWei
    );

    event RegistrationAssigned(address by, address to, address user);

    event ReferrerAdded(address by, address user);
    event ReferrerNoAdded(string reason);

    event ParentAdded(address by, address to, address user);

    event TeamAddressAdded(address to, address user, uint32 level);

    event ReferralRewardsPaid(
        address to,
        address user,
        uint256 valueInWei,
        uint32 level
    );

    event UpgradeRewardPaid(address to, address by, uint256 valueInWei);
    event UpgradeRewardNotPaid(string reason);

    event WeeklyRewardPaid(address to, uint256 valueInWei);
    event WeeklyRewardNotPaid(string reason);

    event TeamWalletRewardPaid(address to, uint256 valueInWei);

    event AddedToRandomList(address user);
    event RemovedFromRandomList(address user);
    event DefaultReferrerUpdated(address defaultReferrer);

    receive() external payable {}

    function initialize() public initializer {
        _setDefaultReferrer(0xCEf5767039FA6a66016b802546F123E0c3Ddedc2);
        _supportedChainLinkOracleAddress.push(
            0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE
        );
        _supportedChainLinkOracleAddress.push(
            0x9c85f470f9ba23dFC4fE9531933C2ce2c1739c39
        );
        _mappingOracle[0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE] = true;
        _mappingOracle[0x9c85f470f9ba23dFC4fE9531933C2ce2c1739c39] = true;
        _registrationValueInUSD = 25e18;

        _levelRatesFixed = 60;
        _levelsToCount = 8;
        _refereeLimit = 2;

        _teamWallet = 0x554F58fcfCEf95F82c8CF6eD9E51E5c79E341481; // need to change
        _teamWalletRate = 20;

        _liquidityWallet = 0x3d7263AFa42C9d47c13cfCdcDc72A131077E5618; // yet to decide
        _liquidityCreateRate = 16;

        _weeklyRewardRate = 4;
        _weeklyRewardTimestamp = block.timestamp;

        uint256[7] memory _valueToUpgradeInDecimals = [
            uint256(20e18),
            uint256(30e18),
            uint256(50e18),
            uint256(180e18),
            uint256(400e18),
            uint256(740e18),
            uint256(1470e18)
        ];

        for (uint8 i; i < _valueToUpgradeInDecimals.length; ++i) {
            _mappingUpgrade[i] = UpgradeStruct(
                i + 1,
                _valueToUpgradeInDecimals[i]
            );
        }

        __Ownable_init(msg.sender);
        __UUPSUpgradeable_init();
    }

    function _setDefaultReferrer(address user_) private {
        AccountStruct storage userAccount = _mappingAccounts[user_];
        if (userAccount.self == address(0)) {
            userAccount.self = user_;
            _users.push(user_);
        }
        if (userAccount.selfBusinessInUSD == 0)
            userAccount.selfBusinessInUSD = 100000 * 10 ** 18;
        if (userAccount.timestampJoined == 0)
            userAccount.timestampJoined = block.timestamp;
        if (userAccount.userRandomIndex == 0) {
            _randomUserList.push(user_);
            userAccount.userRandomIndex = _randomUserList.length;
        }
        _defaultReferrer = user_;
        emit DefaultReferrerUpdated(user_);
    }

    function setDefaultReferrer(address defaultReferrer_) external onlyOwner {
        _setDefaultReferrer(defaultReferrer_);
    }

    function updateUpgradePlans(
        uint256[] calldata _valueToUpgradeInDecimals
    ) external onlyOwner {
        for (uint8 i; i < _valueToUpgradeInDecimals.length; ++i) {
            _mappingUpgrade[i] = UpgradeStruct(
                i + 1,
                _valueToUpgradeInDecimals[i] * 10 ** 18
            );
        }
    }

    function _getUpgradePlansCount() private view returns (uint8 count) {
        for (uint8 i; i < 50; i++) {
            if (_mappingUpgrade[i].id == 0) break;
            count++;
        }
    }

    function getUpgradePlans()
        external
        view
        returns (UpgradeStruct[] memory upgradePlans, uint8 upgradePlansCount)
    {
        upgradePlansCount = _getUpgradePlansCount();
        UpgradeStruct[] memory plansAccount = new UpgradeStruct[](
            upgradePlansCount
        );

        for (uint8 i; i < upgradePlansCount; ++i) {
            plansAccount[i] = _mappingUpgrade[i];
        }

        upgradePlans = plansAccount;
    }

    function getUpgradePlansById(
        uint8 _id
    ) external view returns (UpgradeStruct memory) {
        return _mappingUpgrade[_id];
    }

    function _getRandomReferrer() private view returns (address) {
        uint256 randomHash = uint256(
            keccak256(
                abi.encodePacked(
                    block.timestamp,
                    block.prevrandao,
                    blockhash(block.number - 1)
                )
            )
        );

        uint256 randomIndex = randomHash % _randomUserList.length;
        return _randomUserList[randomIndex];
    }

    // function _hasReferrer(
    //     address referrer_
    // ) private pure returns (bool hasReferrer) {
    //     if (referrer_ != address(0)) hasReferrer = true;
    // }

    function _isRefereeLimitReached(
        uint256 refereeLength_,
        uint256 refereeLimit_
    ) private pure returns (bool reached) {
        if (refereeLength_ == refereeLimit_ || refereeLength_ > refereeLimit_)
            reached = true;
    }

    function _isUserInRandomList(
        uint256 userRandomeIndex_
    ) private pure returns (bool inRandomList) {
        if (userRandomeIndex_ > 0) inRandomList = true;
    }

    function _addToRandomList(AccountStruct storage _userAccount) private {
        require(
            _userAccount.userRandomIndex == 0,
            "User is already in random list"
        );

        _randomUserList.push(_userAccount.self);
        _userAccount.userRandomIndex = _randomUserList.length;
        emit AddedToRandomList(_userAccount.self);
    }

    function _removeFromRandomList(AccountStruct storage _userAccount) private {
        require(_userAccount.userRandomIndex > 0, "User is not in random list");
        _randomUserList[_userAccount.userRandomIndex - 1] = _randomUserList[
            _randomUserList.length - 1
        ];

        _randomUserList.pop();

        _userAccount.userRandomIndex = 0;
        emit RemovedFromRandomList(_userAccount.self);
    }

    function _addUpline(
        address referrer_,
        AccountStruct storage _userAccount
    ) private {
        _userAccount.referrer = referrer_;
        emit ReferrerAdded(referrer_, _userAccount.self);
    }

    function _addReferrer(
        address _referrer,
        address _referee,
        uint256 refereeLimit_,
        uint256 levelsToCount_,
        uint256 valueInUSD_
    ) private {
        AccountStruct storage userAccount = _mappingAccounts[_referee];
        require(_referrer != _referee, "You cannot refer yourself.");

        AccountStruct storage referrerAccount;

        if (_referrer == address(0)) {
            referrerAccount = _mappingAccounts[_defaultReferrer];
        } else {
            referrerAccount = _mappingAccounts[_referrer];
        }

        bool isReferrerLimitReached = _isRefereeLimitReached(
            referrerAccount.referee.length,
            refereeLimit_
        );

        if (isReferrerLimitReached) {
            if (_isUserInRandomList(referrerAccount.userRandomIndex)) {
                _removeFromRandomList(referrerAccount);
            }

            AccountStruct storage randomAccount = _mappingAccounts[
                _getRandomReferrer()
            ];

            require(
                randomAccount.self != address(0),
                "No random referrer found"
            );

            _addUpline(randomAccount.self, userAccount);

            emit RegistrationAssigned(
                referrerAccount.self,
                randomAccount.self,
                _referee
            );

            referrerAccount.refereeAssigned.push(
                RefereeStruct({
                    referee: _referee,
                    assignedTo: randomAccount.self
                })
            );

            randomAccount.referee.push(_referee);

            if (
                _isRefereeLimitReached(
                    randomAccount.referee.length,
                    refereeLimit_
                )
            ) {
                _removeFromRandomList(randomAccount);
            }
        } else {
            _addUpline(referrerAccount.self, userAccount);
            referrerAccount.referee.push(_referee);

            if (
                _isRefereeLimitReached(
                    referrerAccount.referee.length,
                    refereeLimit_
                )
            ) {
                _removeFromRandomList(referrerAccount);
            }
        }

        if (userAccount.parent == address(0)) {
            userAccount.parent = referrerAccount.self;
            emit ParentAdded(
                userAccount.parent,
                userAccount.referrer,
                _referee
            );
        }

        for (uint8 i; i < levelsToCount_; i++) {
            if (userAccount.referrer == address(0)) {
                break;
            }

            if (userAccount.self == userAccount.referrer) break;

            referrerAccount = _mappingAccounts[userAccount.referrer];

            referrerAccount.team.push(
                TeamStruct({teamMember: _referee, level: i + 1})
            );

            referrerAccount.teamBusinessInUSD += valueInUSD_;

            emit TeamAddressAdded(referrerAccount.self, _referee, i + 1);

            userAccount = referrerAccount;
        }
    }

    function _distributeReferral(
        AccountStruct storage userAccount_,
        uint8 levelRates_
    ) private {}

    function _registrationNative(
        address _referrer,
        address _referee,
        uint256 _msgValueInUSD,
        uint256 _msgValue
    ) private {
        require(
            _msgValueInUSD >= (_registrationValueInUSD * 97) / 100,
            "Value is less then registration value."
        );

        uint8 levelRates = _levelRatesFixed;
        uint8 levelsToCount = _levelsToCount;

        AccountStruct storage userAccount = _mappingAccounts[_referee];
        AccountStruct storage referrerAccount = _mappingAccounts[_referrer];

        require(userAccount.selfBusinessInUSD == 0, "User already registered");
        require(referrerAccount.selfBusinessInUSD > 0, "Referrer Not Active");

        if (userAccount.self == address(0)) {
            userAccount.self = _referee;
            _users.push(_referee);
        }

        if (referrerAccount.self == address(0)) {
            referrerAccount.self = _referrer;
            _users.push(_referrer);
        }

        uint256 refereeLimit_ = _refereeLimit;

        if (userAccount.referrer == address(0)) {
            _addReferrer(
                _referrer,
                _referee,
                refereeLimit_,
                levelsToCount,
                _msgValueInUSD
            );
        } else {
            emit ReferrerNoAdded("User Already have referrer set.");
        }

        _addToRandomList(userAccount);

        emit Registration(
            userAccount.parent,
            userAccount.referrer,
            userAccount.self,
            _msgValueInUSD
        );

        uint256 referralValueInWei = (_msgValue * levelRates) / 100;
        uint256 referrealValueInUSD = (_msgValueInUSD * levelRates) / 100;
        AccountStruct storage parentAccount = _mappingAccounts[
            userAccount.parent
        ];

        if (parentAccount.self != address(0)) {
            payable(parentAccount.self).transfer(referralValueInWei);
            emit ReferralRewardsPaid(
                parentAccount.self,
                _referee,
                referralValueInWei,
                1
            );

            parentAccount.referralRewardsInUSD += referrealValueInUSD;
            _referralPaidInUSD += referrealValueInUSD;
            parentAccount.directBusinessInUSD += _msgValueInUSD;
        }

        uint256 teamValue = (_msgValue * _teamWalletRate) / 100;
        payable(_teamWallet).transfer(teamValue);
        emit TeamWalletRewardPaid(_teamWallet, teamValue);

        uint256 liquidityValue = (_msgValue * _liquidityCreateRate) / 100;
        payable(_liquidityWallet).transfer(liquidityValue);
        _valueToCreateLiquidityInWei += liquidityValue;

        userAccount.selfBusinessInUSD += _msgValueInUSD;
        userAccount.timestampJoined = block.timestamp;

        _weeklyRewardValueInWei += (_msgValue * _weeklyRewardRate) / 100;
        _totalRegistrationValueInUSD += _msgValueInUSD;
    }

    function registrationNative(
        address _referrer,
        address _chainLinkOracleAddress
    ) external payable {
        require(_referrer != address(0), "Zero Address cannot be the referrer");
        require(
            _mappingOracle[_chainLinkOracleAddress] == true,
            "Currency You selected not supported"
        );

        uint256 msgValue = msg.value;
        uint256 priceInUSD = _priceInUSDWei(_chainLinkOracleAddress);
        uint256 _msgValueInUSD = _valueToUSD(msgValue, priceInUSD);
        _registrationNative(_referrer, msg.sender, _msgValueInUSD, msgValue);
    }

    function registrationAnyNative(
        address userAddress_,
        address _referrer,
        address _chainLinkOracleAddress
    ) external payable {
        require(_referrer != address(0), "Zero Address cannot be the referrer");
        require(
            _mappingOracle[_chainLinkOracleAddress] == true,
            "Currency You selected not supported"
        );

        uint256 msgValue = msg.value;
        uint256 priceInUSD = _priceInUSDWei(_chainLinkOracleAddress);
        uint256 _msgValueInUSD = _valueToUSD(msgValue, priceInUSD);
        _registrationNative(_referrer, userAddress_, _msgValueInUSD, msgValue);
    }

    function _upgradeIdNative(
        uint256 _msgValue,
        uint256 _msgValueInUSD,
        address _userAddress
    ) private {
        AccountStruct storage userAccount = _mappingAccounts[_userAddress];
        UpgradeStruct memory ugradeIdAccount = _mappingUpgrade[
            userAccount.upgradeId
        ];

        require(
            ugradeIdAccount.valueToUpgradeInUSD > 0,
            "You have upgraded all levels."
        );

        require(
            _msgValueInUSD > (ugradeIdAccount.valueToUpgradeInUSD * 95) / 100 ||
                _msgValueInUSD <
                (ugradeIdAccount.valueToUpgradeInUSD * 105) / 100,
            "Value should be equal to upgrade value"
        );

        userAccount.upgradedValueInUSD += _msgValueInUSD;
        userAccount.upgradeId = ugradeIdAccount.id;

        uint8 userUpgradeId = userAccount.upgradeId;

        for (uint i; i <= userUpgradeId; ++i) {
            AccountStruct storage referrerAccount = _mappingAccounts[
                userAccount.referrer
            ];

            if (i == userUpgradeId - 1) {
                if (
                    (referrerAccount.upgradeId > userUpgradeId ||
                        referrerAccount.upgradeId == userUpgradeId) &&
                    referrerAccount.self != address(0)
                ) {
                    referrerAccount.upgradeRewardsInUSD += _msgValueInUSD;
                    payable(referrerAccount.self).transfer(_msgValue);
                    emit UpgradeRewardPaid(
                        referrerAccount.self,
                        _userAddress,
                        _msgValue
                    );
                } else {
                    emit UpgradeRewardNotPaid(
                        "Upline has not upgraded. Amount transfered to liquidity wallet."
                    );

                    address liquidityWallet = _liquidityWallet;
                    payable(liquidityWallet).transfer(_msgValue);
                    emit UpgradeRewardPaid(
                        liquidityWallet,
                        _userAddress,
                        _msgValue
                    );
                }

                break;
            }

            userAccount = referrerAccount;
        }
    }

    function upgradeAccountNative(
        address _chainLinkOracleAddress
    ) external payable {
        require(
            _mappingOracle[_chainLinkOracleAddress] == true,
            "Currency not supported"
        );
        uint256 msgValue = msg.value;
        uint256 msgValueInUSD = _valueToUSD(
            msgValue,
            _priceInUSDWei(_chainLinkOracleAddress)
        );
        _upgradeIdNative(msgValue, msgValueInUSD, msg.sender);
    }

    function getUserCurrentUpgradeLevel(
        address _userAddress
    ) external view returns (uint8 level, uint256 totalUpgradeValueInUSD) {
        AccountStruct memory userAccount = _mappingAccounts[_userAddress];
        if (userAccount.upgradeId > 0) {
            level = userAccount.upgradeId;
        }

        totalUpgradeValueInUSD = userAccount.upgradedValueInUSD;
    }

    function getAllUsers() external view returns (address[] memory) {
        return _users;
    }

    function getRandomUserList() external view returns (address[] memory) {
        return _randomUserList;
    }

    function getContractDefaults()
        external
        view
        returns (
            address teamWallet,
            uint256 teamWalletRate,
            address liquidityWallet,
            uint256 liquidityCreationrate,
            address defaultReferrer,
            uint256 registrationValueInUSD
        )
    {
        teamWallet = _teamWallet;
        teamWalletRate = _teamWalletRate;
        liquidityWallet = _liquidityWallet;
        liquidityCreationrate = _liquidityCreateRate;
        defaultReferrer = _defaultReferrer;
        registrationValueInUSD = _registrationValueInUSD;
    }

    function getRegistrationsStats()
        external
        view
        returns (
            uint32 totalUser,
            uint256 totalRegistrationValueInUSD,
            uint256 totalReferralPaidInUSD,
            uint256 totalWeeklyRewardsPaidInUSD
        )
    {
        totalUser = uint32(_users.length);
        totalRegistrationValueInUSD = _totalRegistrationValueInUSD;
        totalReferralPaidInUSD = _referralPaidInUSD;
        totalWeeklyRewardsPaidInUSD = _weeklyRewardsPaidInUSD;
    }

    function getWeeklyRewardToBeDistributed()
        external
        view
        returns (uint256 _rewardValue, uint256 _remianingTime, uint256 _endTime)
    {
        _rewardValue = _weeklyRewardValueInWei;
        _endTime = _weeklyRewardTimestamp + 7 days;
        uint256 _currentTime = block.timestamp;
        if (_endTime > _currentTime) {
            _remianingTime = _endTime - _currentTime;
        }
    }

    function distributeWeeklyReward(address _chainLinkOracleAddress) external {
        require(
            _mappingOracle[_chainLinkOracleAddress] == true,
            "Currency not supported"
        );
        uint256 weeklyRewardValueInWei = _weeklyRewardValueInWei;
        uint256 weeklyRewardValueInUSD = _valueToUSD(
            weeklyRewardValueInWei,
            _priceInUSDWei(_chainLinkOracleAddress)
        );
        uint256 weeklyCounterEndTime = _weeklyRewardTimestamp + 7 days;
        uint256 _currentTime = block.timestamp;
        // require(
        //     _currentTime >= weeklyCounterEndTime,
        //     "Weekly time is not over yet."
        // );

        require(_weeklyRewardValueInWei > 0, "No rewards to distribute");

        address[] memory allUsers = _users;
        uint256 randomHash = uint256(
            keccak256(
                abi.encodePacked(
                    block.timestamp,
                    block.prevrandao,
                    blockhash(block.number - 1)
                )
            )
        );

        uint256 randomIndex = randomHash % allUsers.length;
        address globalAddress = allUsers[randomIndex];

        if (globalAddress != address(0)) {
            AccountStruct storage globalAddressAccount = _mappingAccounts[
                globalAddress
            ];
            globalAddressAccount.weeklyRewardsInUSD += weeklyRewardValueInUSD;
            payable(globalAddress).transfer(weeklyRewardValueInWei);

            delete _weeklyRewardValueInWei;
            _weeklyRewardTimestamp = block.timestamp;
            _weeklyRewardsPaidInUSD += weeklyRewardValueInUSD;
            emit WeeklyRewardPaid(globalAddress, weeklyRewardValueInUSD);
        } else {
            emit WeeklyRewardNotPaid(
                "Random address was zero address. Please try again"
            );
        }
    }

    function getUserAccount(
        address _userAddress
    ) external view returns (AccountStruct memory) {
        return _mappingAccounts[_userAddress];
    }

    function getUserTeam(
        address _userAddress
    )
        external
        view
        returns (
            address referrer,
            address[] memory referees,
            uint256 refereeCount,
            RefereeStruct[] memory refereeAssigned,
            uint256 refereeAssignedCount,
            TeamStruct[] memory team,
            uint256 teamCount
        )
    {
        AccountStruct memory userAccount = _mappingAccounts[_userAddress];
        referrer = userAccount.referrer;
        referees = userAccount.referee;
        refereeCount = userAccount.referee.length;
        refereeAssigned = userAccount.refereeAssigned;
        refereeAssignedCount = userAccount.refereeAssigned.length;
        team = userAccount.team;
        teamCount = userAccount.team.length;
    }

    function getUserBusiness(
        address _userAddress
    )
        external
        view
        returns (
            uint256 selfBusinessInUSD,
            uint256 directBusinessInUSD,
            uint256 teamBusinessInUSD,
            uint256 totalBusinessInUSD
        )
    {
        AccountStruct memory userAccount = _mappingAccounts[_userAddress];
        selfBusinessInUSD = userAccount.selfBusinessInUSD;
        directBusinessInUSD = userAccount.directBusinessInUSD;
        teamBusinessInUSD = userAccount.teamBusinessInUSD;
        totalBusinessInUSD =
            userAccount.teamBusinessInUSD +
            userAccount.selfBusinessInUSD;
    }

    function getUserRewards(
        address _userAddress
    )
        external
        view
        returns (
            uint256 referralRewardInUSD,
            uint256 weeklyRewardInUSD,
            uint256 upgradeRewardsInUSD,
            uint256 totalRewards
        )
    {
        AccountStruct memory userAccount = _mappingAccounts[_userAddress];
        referralRewardInUSD = userAccount.referralRewardsInUSD;
        weeklyRewardInUSD = userAccount.weeklyRewardsInUSD;
        upgradeRewardsInUSD = userAccount.upgradeRewardsInUSD;
        totalRewards =
            referralRewardInUSD +
            weeklyRewardInUSD +
            upgradeRewardsInUSD;
    }

    function getNativePriceInUSD(
        address _chainLinkOracleAddress
    ) external view returns (uint256) {
        return _priceInUSDWei(_chainLinkOracleAddress);
    }

    function needNativeToRegister(
        address _chainLinkOracleAddress
    ) external view returns (uint256) {
        require(
            _mappingOracle[_chainLinkOracleAddress] == true,
            "Please check the chainLinkOracleAddress or not supported"
        );
        return
            (_registrationValueInUSD * 10 ** 18) /
            _priceInUSDWei(_chainLinkOracleAddress);
    }

    function getSupportedChainLinkOracleAddress()
        external
        view
        returns (address[] memory)
    {
        return _supportedChainLinkOracleAddress;
    }

    function setChainLinkOracleAddress(
        address _chainLinkOracleAddress,
        bool _status
    ) external onlyOwner {
        bool status = _mappingOracle[_chainLinkOracleAddress];
        require(status != _status, "Status already set");
        _mappingOracle[_chainLinkOracleAddress] = _status;

        if (_status == true) {
            _supportedChainLinkOracleAddress.push(_chainLinkOracleAddress);
        } else {
            address[]
                memory chainLinkAddresses = _supportedChainLinkOracleAddress;
            uint256 addressCount = chainLinkAddresses.length;

            for (uint256 i; i < addressCount; ++i) {
                if (chainLinkAddresses[i] == _chainLinkOracleAddress) {
                    _supportedChainLinkOracleAddress[i] = chainLinkAddresses[
                        addressCount - 1
                    ];
                    _supportedChainLinkOracleAddress.pop();
                }
            }
        }
    }

    function checkIfChainLinkOracleAddressSupporeted(
        address _chainLinkOracleAddress
    ) external view returns (bool) {
        return _mappingOracle[_chainLinkOracleAddress];
    }

    function _priceInUSDWei(
        address _chainLinkOracleAddress
    ) private view returns (uint256) {
        AggregatorV3Interface aggregator = AggregatorV3Interface(
            _chainLinkOracleAddress
        );

        return
            _convertToDecimals(
                aggregator.latestAnswer(),
                aggregator.decimals(),
                18
            );
    }

    function _valueToUSD(
        uint256 _valueInWei,
        uint256 _priceInWei
    ) private pure returns (uint256) {
        return (_valueInWei * _priceInWei) / 10 ** 18;
    }

    function _convertToDecimals(
        uint256 _value,
        uint256 _from,
        uint256 _to
    ) private pure returns (uint256) {
        return (_value * 10 ** _to) / 10 ** _from;
    }

    function _authorizeUpgrade(
        address newImplementation
    ) internal override onlyOwner {}
}
