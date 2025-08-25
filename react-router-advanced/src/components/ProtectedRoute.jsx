import { Navigate } from "react-router-dom"

function ProtectedRoute({ isAuthenticated, redirectTo = "/login", children }) {
  if (!isAuthenticated) {
    return <Navigate to={redirectTo} replace />
  }
  return children
}

export default ProtectedRoute
