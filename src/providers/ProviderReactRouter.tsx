import { RouterProvider } from "react-router-dom";
import { RoutesConfig } from "../navigation/Routes";

export const ProviderReactRouter = () => {
    return <RouterProvider router={RoutesConfig}></RouterProvider>;
};
