import { Img } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Logo = () => {
    return <Img src={"/projectLogo.png"} as={Link} to="/"></Img>;
};
