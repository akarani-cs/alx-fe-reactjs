// src/components/Profile.jsx
import { Link, Outlet } from "react-router-dom"

function Profile() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Profile Page</h2>
      
      <nav className="flex gap-4 mt-3 border-b pb-2">
        <Link to="details" className="text-blue-600 hover:underline">
          Profile Details
        </Link>
        <Link to="settings" className="text-blue-600 hover:underline">
          Profile Settings
        </Link>
      </nav>

      {/* Nested Routes will render here */}
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  )
}

export default Profile
