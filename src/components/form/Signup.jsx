import { useState } from "react";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    countryCode: "US",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or validation here
    console.log(formData);
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="w-full mx-auto">
        {/* Email Address */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email Address
          </label>

          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 rounded w-full focus:outline-none focus:ring focus:border-blue-300"
            required
            placeholder="your email"
          />
        </div>

        {/* Your Name */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 rounded w-full focus:outline-none focus:ring focus:border-blue-300"
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

        {/* Country Code */}
        <div className="mb-4">
          <label
            htmlFor="phoneCountry"
            className="w-full pr-2 block text-gray-700 text-sm  font-bold"
          >
            Phone
          </label>
          <select
            id="phoneCountry"
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            className="border p-2 rounded w-full appearance-none"
          >
            <option value="US">United States (+1)</option>
            <option value="CA">Canada (+1)</option>
            {/* Add more country options as needed */}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M12.293 7.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L10 9.586l2.293-2.293z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {/* Phone Number */}
          <div className="mb-4">
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="  border p-2 rounded w-full"
              required
              placeholder="(eg 201555555)"
            />
          </div>
        </div>

        {/* Sign Up Button */}
        <div className="w-full mb-4">
          <button
            type="submit"
            className="bg-yellow-500 text-black p-2 rounded hover:bg-yellow-600 transition duration-300 w-full text-sm"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
