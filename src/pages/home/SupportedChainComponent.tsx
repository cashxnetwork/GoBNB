import { HStack, Image, VStack } from "@chakra-ui/react";
import { PageWrapper } from "../../components/PageWrapper";
import { CenterComponent, HeadingComponent } from "../../components/Ui";
import LottieBNBLogo from "../../assets/lottie/bnb2.json";
import LottieUSDTLogo from "../../assets/lottie/usdt.json";
import Lottie from "lottie-react";

export const SupportedChainComponent = () => {
  const supprtedChains = [
    {
      name: "Binance Smart Chain",
      logo: "/token-icons/bnb.svg",
      lottie: LottieBNBLogo
    }
  ];

  const supportedCurrency = [
    {
      name: "USDT",
      logo: "/token-icons/bnb.svg",
      lottie: LottieUSDTLogo
    }
  ];
  return (
    <PageWrapper
      style={{
        spacing: 10
      }}
    >
      <VStack>
        <HeadingComponent
          heading="Supported by the"
          gradientHeading="BEST"
        ></HeadingComponent>
        <HStack spacing={[2, 5, 10]}>
          {supprtedChains?.map((object, key) => {
            return (
              <CenterComponent
                key={key}
                style={{
                  maxW: 150,
                  flex: 1,
                  p: 0
                }}
              >
                {object?.lottie && (
                  <Lottie animationData={object?.lottie}></Lottie>
                )}
              </CenterComponent>
            );
          })}

          {supportedCurrency?.map((object, key) => {
            return (
              <CenterComponent
                key={key}
                style={{
                  maxW: 150,
                  flex: 1,
                  p: 0
                }}
              >
                <VStack>
                  {object?.lottie && (
                    <Lottie animationData={object?.lottie}></Lottie>
                  )}
                </VStack>
              </CenterComponent>
            );
          })}
        </HStack>
      </VStack>
    </PageWrapper>
  );
};
