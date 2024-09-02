import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Associates } from "../pages/Associates";
import { AssociatesRegister } from "../pages/AssociatesRegister";
import { EditAssociates } from "../pages/EditAssociates";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/associates" element={<AssociatesRegister />} />
      <Route path="/associates/new" element={<Associates />} />
      <Route path="/associates/edit" element={<EditAssociates />}/>
    </Routes>
  )
}