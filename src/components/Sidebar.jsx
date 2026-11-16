import { NavLink } from "react-router-dom";

export function Sidebar() {
  return (
    <>
      <nav className="nav flex-column gap-2">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/git-workflow" className="nav-link">
          Git Workflow
        </NavLink>
        <NavLink to="/vite-setup" className="nav-link">
          Vite Setup
        </NavLink>
        <NavLink to="/render-deployments" className="nav-link">
          Render Deployments
        </NavLink>
        <NavLink to="/troubleshooting" className="nav-link">
          Troubleshooting
        </NavLink>
        <NavLink to="/code-snippets" className="nav-link">
          Code Snippets
        </NavLink>
      </nav>
    </>
  );
}
