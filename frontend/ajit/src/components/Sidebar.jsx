import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  LayoutDashboard,
  BookOpen,
  FileQuestion,
  Users,
  ClipboardList,
  LogOut,
} from "lucide-react";

const Sidebar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: LayoutDashboard,
    },
    {
      name: "Manage Tests",
      path: "/admin/tests",
      icon: BookOpen,
    },
    {
      name: "Manage Questions",
      path: "/admin/questions",
      icon: FileQuestion,
    },
    {
      name: "Students",
      path: "/admin/students",
      icon: Users,
    },
    {
      name: "Results",
      path: "/admin/results",
      icon: ClipboardList,
    },
  ];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside className="admin-sidebar">
      <div className="sidebar-logo">
        <BookOpen size={25} />
        <span>TestMaster</span>
      </div>

      <p className="sidebar-heading">ADMIN MENU</p>

      <div className="sidebar-menu">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/admin"}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active" : ""}`
              }
            >
              <Icon size={19} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </div>

      <button className="sidebar-logout" onClick={handleLogout}>
        <LogOut size={19} />
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;