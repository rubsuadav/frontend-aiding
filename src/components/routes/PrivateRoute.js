import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "./authContext";

export default function PublicRoute() {
  const { isAuthenticated } = useAuthContext();

  if (!isAuthenticated || localStorage.getItem("role") !== "admin") {
    return <Navigate to="/base/login" />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}
