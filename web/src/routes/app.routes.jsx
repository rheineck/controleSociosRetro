import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Associates } from "../pages/Associates";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/associates" element={<Associates />} />a
    </Routes>
  )
}