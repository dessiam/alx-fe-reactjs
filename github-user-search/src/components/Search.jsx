import { useState } from "react";
import { fetchAdvancedUsers } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);
    setPage(1);

    try {
      const data = await fetchAdvancedUsers({
        username,
        location,
        minRepos,
        page: 1,
      });

      setUsers(data.items);
    } catch (err) {
      setError("Looks like we can't find the user.");
    } finally {
      setLoading(false);
    }
    fetchUserData
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    setLoading(true);

    try {
      const data = await fetchAdvancedUsers({
        username,
        location,
        minRepos,
        page: nextPage,
      });

      setUsers((prev) => [...prev, ...data.items]);
      setPage(nextPage);
    } catch (err) {
      setError("Failed to load more users.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <form
        onSubmit={handleSearch}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
      >
        <input
          type="text"
          placeholder="Username"
          className="border p-2 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Location"
          className="border p-2 rounded"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          type="number"
          placeholder="Min repos"
          className="border p-2 rounded"
          value={minRepos}
          onChange={(e) => setMinRepos(Number(e.target.value))}
        />

        <button
          type="submit"
          className="md:col-span-3 bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && users.length === 0 && !error && (
        <p>No users found.</p>
      )}

      <ul className="space-y-4">
        {users.map((user) => (
          <li
            key={user.id}
            className="flex items-center gap-4 border p-4 rounded"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <p className="font-bold">{user.login}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500"
              >
                View Profile
              </a>
            </div>
          </li>
        ))}
      </ul>

      {users.length > 0 && !loading && (
        <button
          onClick={loadMore}
          className="mt-6 w-full bg-gray-200 py-2 rounded hover:bg-gray-300"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Search;
