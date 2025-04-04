import { ReactNode } from "react";
import { useParams } from "react-router-dom";
import { useGetUserBusiness } from "../../hooks/ReferralHooks";
import { CheckIfReferrerAddressValid } from "./CheckIfReferrerAddressValid";
import { RegistrationErrorPage } from "./RegistrationErrorPage";

export const CheckReferrerActive = ({
  children,
  check
}: {
  children: ReactNode;
  check: boolean;
}) => {
  const { referrerAddress } = useParams<{ referrerAddress: `0x${string}` }>();
  const referrerBusiness = useGetUserBusiness(referrerAddress);
  const isReferrerActive = referrerBusiness?.data?.[0] > 0;
  // const isReferrerActive = true;

  return (
    <CheckIfReferrerAddressValid check={check}>
      {check ? (
        isReferrerActive ? (
          children
        ) : (
          <RegistrationErrorPage errorReason="Referrer is not active."></RegistrationErrorPage>
        )
      ) : (
        children
      )}
    </CheckIfReferrerAddressValid>
  );
};
