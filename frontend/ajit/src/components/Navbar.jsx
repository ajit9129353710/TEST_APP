import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { BookOpen, LogOut, User } from "lucide-react";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        <BookOpen size={26} />
        <span>TestMaster</span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>

        {user?.role === "student" && (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/history">My Results</Link>
          </>
        )}

        {user?.role === "admin" && (
          <Link to="/admin">Admin Panel</Link>
        )}
      </div>

      <div className="nav-actions">
        {user ? (
          <>
            <span className="nav-user">
              <User size={17} />
              {user.name}
            </span>

            <button className="logout-btn" onClick={handleLogout}>
              <LogOut size={17} />
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="login-btn">
              Login
            </Link>

            <Link to="/register" className="register-btn">
              Get Started
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;