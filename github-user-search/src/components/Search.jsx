import { useState } from "react";
import { fetchUserData } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const handleSearch = async (e, nextPage = 1) => {
    e?.preventDefault();
    if (!username.trim()) return;

    if (nextPage === 1) {
      setUsers([]); // reset results on new search
    }

    setLoading(true);
    setError("");

    try {
      const data = await fetchUserData({
        username: username.trim(),
        location: location.trim(),
        minRepos,
        page: nextPage,
      });

      setTotalCount(data.total_count);
      setUsers((prev) => [...prev, ...data.items]);
      setPage(nextPage);
    } catch {
      setError("Looks like we can't find any matching users.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* Search Form */}
      <form
        onSubmit={(e) => handleSearch(e, 1)}
        className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 space-y-4"
      >
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
          GitHub Advanced Search
        </h2>

        {/* Username */}
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            GitHub Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="e.g. octocat"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Location */}
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Location
          </label>
          <input
            type="text"
            id="location"
            placeholder="e.g. San Francisco"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Minimum Repositories */}
        <div>
          <label htmlFor="minRepos" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Minimum Public Repositories
          </label>
          <input
            type="number"
            id="minRepos"
            placeholder="e.g. 10"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* Loading */}
      {loading && <p className="mt-4 text-gray-700 dark:text-gray-300">Loading...</p>}

      {/* Error */}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      {/* Results */}
      {users.length > 0 && (
        <div className="mt-6 space-y-4">
          <p className="text-gray-600 dark:text-gray-300">
            Found {totalCount.toLocaleString()} users
          </p>

          {users.map((user) => (
            <div
              key={user.id}
              className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full"
              />
              <div className="ml-4 flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {user.login}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Profile:{" "}
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {user.html_url}
                  </a>
                </p>
                {/* NOTE: location & repos require extra API call per user */}
              </div>
            </div>
          ))}

          {/* Load More Button */}
          {users.length < totalCount && (
            <button
              onClick={(e) => handleSearch(e, page + 1)}
              className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              Load More
            </button>
          )}
        </div>
      )}
    </div>
  );
}
