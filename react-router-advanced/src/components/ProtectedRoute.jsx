import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

  const isAuthenticated = true; // change to false to test

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;