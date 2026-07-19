function AdminRoutes() {
  return <h1>Admin Routes</h1>;
}

export default AdminRoutes;
import { Outlet, Link, useNavigate } from "react-router-dom";

export default function AdminLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    navigate("/login");
  };

  return (
    <div className="admin-wrapper" style={{ display: "flex", minHeight: "100vh" }}>
      <aside style={{ width: "250px", background: "#2c3e50", color: "#fff", padding: "1rem" }}>
        <h3>Admin Panel</h3>
        <nav style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <Link to="/admin/dashboard" style={{ color: "#fff" }}>Dashboard</Link>
          <button onClick={handleLogout} style={{ marginTop: "2rem", cursor: "pointer" }}>
            Logout
          </button>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: "2rem", background: "#ecf0f1" }}>
        <Outlet />
      </main>
    </div>
  );
}