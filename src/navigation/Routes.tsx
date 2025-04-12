import { createHashRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/home";
import RegistrationPage from "../pages/registration/RegistrationPage";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
// import User from '../pages/user/User';
// import Dashboard from '../pages/user/dashboard/Dashboard';
// import Team from '../pages/user/team/Team';
// import { Staking } from '../pages/user/staking/Staking';
import { AboutUs } from "../pages/home/AboutUs/AboutUs";
import { Roadmap } from "../pages/home/Roadmap/Roadmap";
import { Tokenomics } from "../pages/home/Tokenomics/Tokenomics";
import User from "../pages/user/User";
import Dashboard from "../pages/user/dashboard/Dashboard";
import Team from "../pages/user/team/Team";
import { RegisterForSomeoneElse } from "../pages/registration/RegisterForSomeoneElse";

export const RoutesConfig = createHashRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: "about-us",
        element: <AboutUs></AboutUs>
      },
      {
        path: "tokenomics",
        element: <Tokenomics></Tokenomics>
      },
      {
        path: "roadmap",
        element: <Roadmap></Roadmap>
      },
      {
        path: "registration/:referrerAddress?",
        element: (
          <ProtectedRoute>
            <RegistrationPage></RegistrationPage>
          </ProtectedRoute>
        )
      },
      {
        path: "registration-your-friend/:referrerAddress?",
        element: (
          <ProtectedRoute>
            <RegisterForSomeoneElse></RegisterForSomeoneElse>
          </ProtectedRoute>
        )
      },
      {
        path: "/user",
        element: (
          <ProtectedRoute>
            <User></User>
          </ProtectedRoute>
        ),
        children: [
          // {
          //   index: true,
          //   element: <Dashboard></Dashboard>,
          // },
          {
            index: true,
            path: "dashboard/:userAddress?",
            element: <Dashboard></Dashboard>
          },
          // {
          //   path: 'dashboard',
          //   element: <Dashboard></Dashboard>,
          // },
          {
            path: "team/:userAddress?",
            element: <Team></Team>
          }
          // {
          //   path: 'staking',
          //   element: <Staking></Staking>,
          // },
          // {
          //   path: 'staking/:userAddress',
          //   element: <Staking></Staking>,
          // },
        ]
      }
    ]
  }
]);
