import { Navigate } from "react-router-dom";
import { getUserCookie } from "../utils/cookies";

const ProtectAuthRoute = ({ children }) => {
  const user = getUserCookie(); // get user from cookies instead of localStorage

  if (user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectAuthRoute;
