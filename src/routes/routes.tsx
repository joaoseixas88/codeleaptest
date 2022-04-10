import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import { Main } from "../pages/Main";
import { PrivateRoute } from "./private/Private";
// import { PrivateRoute } from "./private/Private";

function AppRoutes() {
  return (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="main" element={
      <PrivateRoute>
      <Main/>
    </PrivateRoute>
    } />
  </Routes>
  );
}

export default AppRoutes;





