import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <NavLink className="site-logo" to="/">
        #VANLIFE
      </NavLink>
      <nav>
        <NavLink
          to="host"
          className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          Home
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          About
        </NavLink>
        <NavLink
          to="vans"
          className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          Vans
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
