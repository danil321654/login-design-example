import { routes } from "consts";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components";

export const App = () => (
  <Layout>
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} {...route} />
      ))}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  </Layout>
);
