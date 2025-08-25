import { BrowserRouter as Router, Routes, Route, Link, Navigate, Outlet, useParams } from "react-router-dom"
import { useState } from "react"
import "./App.css"

// ----- Example Pages -----
function Home() {
  return <h2>Home Page</h2>
}

function About() {
  return <h2>About Page</h2>
}

function Contact() {
  return <h2>Contact Page</h2>
}

// ----- Profile with Nested Routes -----
function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>
      <nav className="flex gap-4 mt-2">
        <Link to="details">Profile Details</Link>
        <Link to="settings">Profile Settings</Link>
      </nav>
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  )
}

function ProfileDetails() {
  return <h3>Here are your profile details</h3>
}

function ProfileSettings() {
  return <h3>Here you can update your settings</h3>
}

// ----- Blog + Dynamic Routing -----
function Blog() {
  const posts = [
    { id: 1, title: "First Post" },
    { id: 2, title: "Second Post" },
    { id: 3, title: "Third Post" },
  ]

  return (
    <div>
      <h2>Blog</h2>
      <ul className="list-disc pl-5">
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function BlogPost() {
  const { postId } = useParams()
  return (
    <div>
      <h3>Blog Post #{postId}</h3>
      <p>This is the content for blog post with ID: {postId}</p>
    </div>
  )
}

// ----- Authentication Simulation -----
function Login({ setIsAuthenticated }) {
  return (
    <div>
      <h2>Login Page</h2>
      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() => setIsAuthenticated(true)}
      >
        Click to Log In
      </button>
    </div>
  )
}

// ----- Protected Route Wrapper -----
function ProtectedRoute({ isAuthenticated, redirectTo = "/login", children }) {
  if (!isAuthenticated) {
    return <Navigate to={redirectTo} replace />
  }
  return children
}

function NotFound() {
  return <h2>404 - Page Not Found</h2>
}

// ----- Main App -----
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <Router>
      <div className="App">
        {/* Navigation */}
        <nav className="flex gap-4 p-4 bg-gray-200">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/blog">Blog</Link>
          {!isAuthenticated ? (
            <Link to="/login">Login</Link>
          ) : (
            <button
              onClick={() => setIsAuthenticated(false)}
              className="bg-red-600 text-white px-2 py-1 rounded"
            >
              Logout
            </button>
          )}
        </nav>

        {/* Routes */}
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:postId" element={<BlogPost />} />

            {/* Protected Profile Routes */}
            <Route
              path="/profile"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Profile />
                </ProtectedRoute>
              }
            >
              <Route path="details" element={<ProfileDetails />} />
              <Route path="settings" element={<ProfileSettings />} />
            </Route>

            {/* Login */}
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />

            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
