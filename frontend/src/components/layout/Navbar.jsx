import {
  FaSearch,
  FaBell
} from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="navbar">

      <div className="navbar-left">

        <div className="search-box">

          <FaSearch />

          <input
            type="text"
            placeholder="Buscar..."
          />

        </div>

      </div>

      <div className="navbar-right">

        <button
          className="notification-btn"
        >
          <FaBell />
          <span>3</span>
        </button>

        <div className="user-info">

          <img
            src="https://i.pravatar.cc/40"
            alt="usuario"
          />

          <div>
            <h4>Alejandro</h4>
            <small>Administrador</small>
          </div>

        </div>

      </div>

    </header>
  );
}