import { useState } from "react";

const RegistrationForm = () => {

  // Form state
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  // Error state
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.username || !formData.email || !formData.password) {
      setError("All fields are required");
      return;
    }

    // If valid
    setError("");

    console.log("Form Submitted:", formData);

    // Reset form
    setFormData({
      username: "",
      email: "",
      password: ""
    });
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
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        {/* Error Message */}
        {error && (
          <p className="text-red-500">
            {error}
          </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
        >
          Register
        </button>

      </form>

    </div>
  );
};

export default RegistrationForm;