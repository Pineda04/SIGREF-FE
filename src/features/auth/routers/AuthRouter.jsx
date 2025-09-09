import { Navigate, Route, Routes } from "react-router";
import { LoginPage } from "../pages";

export const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
