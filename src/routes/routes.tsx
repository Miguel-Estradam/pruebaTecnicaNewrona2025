import { ReactNode } from "react";
import LoginPage from "../modules/auth/pages/LoginPage";
import OperariosPage from "../modules/dashboard/pages/OperariosPage";
import UsersPage from "../modules/dashboard/pages/UsersPage";

export type Route = {
  path: string;
  component: ReactNode;
  icon?: ReactNode;
  title: string;
};

type Routes = {
  auth: Route[];
  dashboard: Route[];
};

export const routes: Routes = {
  auth: [
    {
      path: "/login",
      component: <LoginPage />,
      title: "Login",
    },
  ],
  dashboard: [
    {
      path: "/",
      component: <OperariosPage />,
      title: "Operarios",
    },
    {
      path: "/users",
      component: <UsersPage />,
      title: "Usuarios",
    },
  ],
};
