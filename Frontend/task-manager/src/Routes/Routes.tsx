import { Routes, Route } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import Dashboard from "../Pages/Dashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/dashboard" element={<Dashboard />} />  
    </Routes>
  )
}

export default AppRoutes

