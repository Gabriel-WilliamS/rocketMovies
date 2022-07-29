import { Routes, Route } from "react-router-dom";
import { SignIn, SignUp } from "../pages";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
    </Routes>
  );
}
