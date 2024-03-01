import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  console.log("isLoggedIn:", isLoggedIn);
  console.log("isRefreshing:", isRefreshing);

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
