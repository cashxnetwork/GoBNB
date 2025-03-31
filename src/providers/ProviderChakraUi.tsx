import { ChakraProvider, StyleFunctionProps, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { ReactNode } from "react";

const chakraCustomTheme = extendTheme({
    styles: {
        global: (props: StyleFunctionProps) => ({
            body: {
                bg: mode("white", "black")(props),
                transition: "background-color 1s ease, color 1s ease"
            }
        })
    },
    config: {
        initialColorMode: "dark",
        useSystemColorMode: true
    },
    colors: {
        brand: {
            bsc: "yellow.500"
        }
    }
});

export const ProviderChakraUi = ({ children }: { children: ReactNode }) => {
    return <ChakraProvider theme={chakraCustomTheme}>{children}</ChakraProvider>;
};
