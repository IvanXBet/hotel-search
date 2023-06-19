import { Route, Routes } from "react-router-dom";
import { Login } from "./Login/Login";

export const Routing = () => {
  return (
    <Routes>
      {/* <Route path='/' element={<HomePage />} /> */}
      <Route path="/" element={<Login />} />
    </Routes>
  );
};
