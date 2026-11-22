import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { AuthProvider, useAuth } from "./context/AuthContext";

import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";

import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentDashboard from "./pages/StudentDashboard";
import TestPage from "./pages/TestPage";
import ResultPage from "./pages/ResultPage";
import ResultHistory from "./pages/ResultHistory";
import NotFound from "./pages/NotFound";

import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageTests from "./pages/admin/ManageTests";
import ManageQuestions from "./pages/admin/ManageQuestions";
import Students from "./pages/admin/Students";
import Results from "./pages/admin/Results";

function RoleRedirect() {
const { user } = useAuth();

if (!user) {
return <Navigate to="/login" replace />;
}

if (user.role === "admin") {
return <Navigate to="/admin" replace />;
}

return <Navigate to="/dashboard" replace />;
}

function AppRoutes() {
return (
<Routes>
<Route element={<MainLayout />}>
<Route path="/" element={<Home />} />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />

    <Route element={<ProtectedRoute />}>
      <Route path="/dashboard" element={<StudentDashboard />} />
      <Route path="/test/:id" element={<TestPage />} />
      <Route path="/result/:id" element={<ResultPage />} />
      <Route path="/history" element={<ResultHistory />} />
    </Route>
  </Route>

  <Route element={<AdminRoute />}>
    <Route path="/admin" element={<AdminLayout />}>
      <Route index element={<AdminDashboard />} />
      <Route path="tests" element={<ManageTests />} />
      <Route path="questions" element={<ManageQuestions />} />
      <Route path="students" element={<Students />} />
      <Route path="results" element={<Results />} />
    </Route>
  </Route>

  <Route path="/redirect" element={<RoleRedirect />} />

  <Route path="*" element={<NotFound />} />
</Routes>

);
}

function App() {
return (
<BrowserRouter>
<AuthProvider>
<AppRoutes />
</AuthProvider>
</BrowserRouter>
);
}

export default App;