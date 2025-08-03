import { useState } from 'react'
import './App.css'
import Search from "./components/Search";
import { getGitHubUser } from "./services/githubService";


function App() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

 const handleSearch = async (username) => {
    setLoading(true);
    setError("");
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch {
      setError("User not found or API error");
    } finally {
      setLoading(false);
    }
  };


  return (
    <>

     <div style={{ padding: "1rem" }}>
      <h1>GitHub User Search</h1>
      <Search onSearch={handleSearch} />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {userData && (
        <div style={{ marginTop: "1rem" }}>
          <img src={userData.avatar_url} alt={userData.login} width="100" />
          <h2>{userData.login}</h2>
          <p>{userData.bio || "No bio available"}</p>
          <p>
            <a href={userData.html_url} target="_blank" rel="noreferrer">
              View Profile
            </a>
          </p>
        </div>
      )}
    </div>


    </>
  )
}

export default App
