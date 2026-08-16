  import { Routes, Route, Navigate, Outlet } from "react-router-dom";
  import { useAuth } from "../hooks/useAuth";
  import Homepage from "../Pages/Homepage";
  import Dashboard from "../Pages/Dashboard";
  import SignIn from "../Pages/SignIn";
  import SignUp from "../Pages/SignUp";
  import ManageTasks from "../Pages/ManageTasks";
  import AiTaskAssistant from "../Pages/AiTaskAssistant";
  import { TaskProvider } from "../context/TaskContext";
  import Profile from "../Pages/Profile";

  const ProtectedRoute = ({ element }: { element: React.ReactNode }) => {
    const { isLoggedIn, loading } = useAuth();

  //   console.log("ProtectedRoute:", {
  //   isLoggedIn,
  //   loading,
  //   path: window.location.pathname
  // });

    if (loading) {
    return null;
  }

    return isLoggedIn ? element : <Navigate to="/" replace />;
  };

  const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<TaskProvider><Outlet /></TaskProvider>}>
          <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
          <Route path="/managetasks" element={<ProtectedRoute element={<ManageTasks />} />} />
        </Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/aitaskassistant" element={<ProtectedRoute element={<AiTaskAssistant />} />} />
      </Routes>
    )
  }

  export default AppRoutes