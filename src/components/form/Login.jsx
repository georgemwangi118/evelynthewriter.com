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
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="w-full mx-auto">
        {/* Email Address */}
        <div className="mb-4 flex items-center">
          <label htmlFor="email" className="w-1/4 pr-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 rounded w-full flex-grow"
            placeholder="Email"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-4 flex items-center">
          <label htmlFor="password" className="w-1/4 pr-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border p-2 rounded w-full flex-grow"
            required
          />
        </div>

        {/* Login Button */}
        <div className="mb-4">
          <button
            type="submit"
            className="bg-yellow-500 text-black p-2 rounded hover:bg-yellow-600 transition duration-300 w-1/2"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
