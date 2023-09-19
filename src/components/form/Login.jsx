import { useState } from "react";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log("Login Data:", formData);
  };
  return (
    <div className="mx-auto max-w-md">
      <form onSubmit={handleSubmit} className="w-full mx-auto">
        {/* Email Address */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 rounded w-full focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Email"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border p-2 rounded w-full focus:outline-none focus:ring focus:border-blue-300"
            required
            placeholder="Password"
          />
        </div>

        {/* Login Button */}
        <div className="mb-4 w-full">
          <button
            type="submit"
            className="bg-yellow-500 text-black p-2 rounded hover:bg-yellow-600 transition duration-300 w-full text-sm"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
