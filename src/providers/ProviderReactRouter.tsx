import { createHashRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/home/Home";

export const routes = createHashRouter([
    {
        path: "/",
        element: <App />,
        children: [{
            index: true,
            element: <Home />
        }]
    }
]);

export const ProviderReactRouter = () => {
    return <RouterProvider router={routes}></RouterProvider>;
};
