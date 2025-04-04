import { Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const Logo = () => {
    const navigateTo = useNavigate();
    return (
        <Image
            src={"/projectLogo.png"}
            onClick={() => navigateTo("/")}
            cursor={"pointer"}
        ></Image>
    );
};
