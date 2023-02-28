import  AuthPage  from "../pages/auth/index";

export const routes = [
    {
      component: AuthPage,
      exact: true,
      strict: true,
      path: '/login'
    }
];