import { NavLink, Outlet } from "react-router-dom";

function HostLayout() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <>
      <nav className="host-nav">
        <NavLink
          to="."
          end
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          DashBoard
        </NavLink>
        <NavLink
          to="income"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Income
        </NavLink>
        <NavLink
          to="vans"
          end
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Vans
        </NavLink>
        <NavLink
          to="reviews"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default HostLayout;
