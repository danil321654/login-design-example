import { Auth } from "pages";

export const routes = [
  { path: "/login", element: <Auth variant="login" /> },
  { path: "/register", element: <Auth variant="register" /> },
];
