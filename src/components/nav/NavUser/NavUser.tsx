import { VStack } from "@chakra-ui/react";
import { jsNumberForAddress } from "react-jazzicon";
import Jazzicon from "react-jazzicon/dist/Jazzicon";
import SocialMediaIcons from "../../../components/SocialMediaIcons";
import { AddressActionButtons } from "../../AddressActionButtons";
import { WalletConnectButton } from "../../WalletConnectButton";
import { CenterComponent } from "../../Ui";
import NavUserMenu from "../NavUserMenu";

function NavUser({
  userAddress,
  onClick
}: {
  userAddress: string;
  onClick?: () => void;
}) {
  return (
    <VStack w="full" flex={1}>
      <CenterComponent>
        <VStack>
          <Jazzicon
            seed={jsNumberForAddress(`${1111}`)}
            diameter={50}
          ></Jazzicon>
          <WalletConnectButton></WalletConnectButton>
          <AddressActionButtons address=""></AddressActionButtons>
        </VStack>
      </CenterComponent>
      <CenterComponent
        style={{
          w: "full",
          flex: 1
        }}
      >
        <VStack>
          <NavUserMenu
            userAddress={userAddress}
            onClick={onClick}
          ></NavUserMenu>
        </VStack>
      </CenterComponent>
      <CenterComponent>
        <SocialMediaIcons />
      </CenterComponent>
    </VStack>
  );
}

export default NavUser;
