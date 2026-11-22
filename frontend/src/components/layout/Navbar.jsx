import { FaBell, FaLayerGroup } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function Navbar() {
  const { user } = useAuth();
  const name = user?.nombre || user?.email?.split("@")[0] || "Usuario";
  const initials = name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <header className="navbar">
      <div className="navbar-context">
        <FaLayerGroup aria-hidden="true" />
        <span>Espacio de trabajo</span>
        <span className="navbar-separator">/</span>
        <strong>Personal</strong>
      </div>

      <div className="navbar-right">
        <Link
          className="notification-btn"
          to="/notifications"
          aria-label="Abrir notificaciones"
        >
          <FaBell />
        </Link>
        <div className="user-info">
          <span className="user-avatar" aria-hidden="true">{initials || "TU"}</span>
          <div className="user-labels">
            <strong>{name}</strong>
            <small>{user?.rol || "Miembro"}</small>
          </div>
        </div>
      </div>
    </header>
  );
}
