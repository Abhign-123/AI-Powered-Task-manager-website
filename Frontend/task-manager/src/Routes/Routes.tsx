import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";
import Homepage from "../Pages/Homepage";
import Dashboard from "../Pages/Dashboard";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import ManageTasks from "../Pages/ManageTasks";
import AiTaskAssistant from "../Pages/AiTaskAssistant";

const ProtectedRoute = ({ element }: { element: React.ReactNode }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? element : <Navigate to="/" replace />;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/managetasks" element={<ProtectedRoute element={<ManageTasks />} />} />
      <Route path="/aitaskassistant" element={<ProtectedRoute element={<AiTaskAssistant />} />} />
    </Routes>
  )
}

export default AppRoutes

