import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../page/dashboard";

export default function pageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}
