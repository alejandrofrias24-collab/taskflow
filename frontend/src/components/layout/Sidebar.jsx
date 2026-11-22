import {
  FaChartPie,
  FaProjectDiagram,
  FaTasks,
  FaBell,
  FaUser
} from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";
import { usePermissions } from "../../hooks/usePermissions";

export default function Sidebar() {
  const location = useLocation();
  const { isAdmin } = usePermissions();

  const isActive = (path) =>
    location.pathname === path ? "active" : "";

  return (
    <aside className="sidebar">

      <div className="logo">
        <span className="brand-mark">T</span>
        <h2>TaskFlow</h2>
      </div>

      <nav>
        <span className="sidebar-section-label">MENÚ</span>

        <Link
          to="/"
          className={isActive("/")}
        >
          <FaChartPie />
          Dashboard
        </Link>

        <Link
          to="/projects"
          className={isActive("/projects")}
        >
          <FaProjectDiagram />
          Proyectos
        </Link>

        <Link
          to="/tasks"
          className={isActive("/tasks")}
        >
          <FaTasks />
          Tareas
        </Link>

        <Link
          to="/notifications"
          className={isActive("/notifications")}
        >
          <FaBell />
          Notificaciones
        </Link>

        <Link
          to="/profile"
          className={isActive("/profile")}
        >
          <FaUser />
          Perfil
        </Link>
             
             {
               isAdmin && (

               <Link
              to="/users"
                           >
                      Usuarios
                        </Link>

 )
}

      </nav>

    </aside>
  );
}
