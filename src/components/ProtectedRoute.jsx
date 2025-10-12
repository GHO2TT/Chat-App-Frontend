import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user")); // get user from localStorage or context

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
