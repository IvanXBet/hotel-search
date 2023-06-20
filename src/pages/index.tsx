import { Route, Routes } from "react-router-dom";
import { Login } from "./Login/Login";
import { Home } from "./Home/Home";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Login />} />
    </Routes>
  );
};
