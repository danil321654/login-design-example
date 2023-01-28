import { routes } from "consts";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Layout } from "./components";

export const App = () => {
  const { pathname } = useLocation();
  const [, ...startPathName] = pathname.split("/").reverse();
  const rightPath = startPathName.reverse().join("/");
  return (
    <Layout>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
        <Route
          path="*"
          element={<Navigate to={`${rightPath}/login`} replace />}
        />
      </Routes>
    </Layout>
  );
};
