import { createHashRouter } from "react-router";
import { AppLayout } from "../components/layout/AppLayout";
import { AccountPage } from "../pages/AccountPage";
import { LoginPage } from "../pages/LoginPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { PlannerPage } from "../pages/PlannerPage";
import { RegisterPage } from "../pages/RegisterPage";
import { PATHS } from "./paths";

export const router = createHashRouter([
  {
    element: <AppLayout />,
    children: [
      { path: PATHS.home, element: <PlannerPage /> },
      { path: PATHS.login, element: <LoginPage /> },
      { path: PATHS.register, element: <RegisterPage /> },
      { path: PATHS.account, element: <AccountPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
