import { useState } from "react";

const RegistrationForm = () => {

  // Separate states (IMPORTANT)
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!username || !email || !password) {
      setError("All fields are required");
      return;
    }

    setError("");

    console.log({
      username,
      email,
      password
    });

    // Reset form
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-6 max-w-md mx-auto">

      <h2 className="text-xl mb-4">
        Registration Form
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Username */}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
        />

        {error && (
          <p className="text-red-500">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded w-full"
        >
          Register
        </button>

      </form>

    </div>
  );
};

export default RegistrationForm;