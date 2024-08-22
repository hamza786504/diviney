import React, { useState } from "react";

const AuthForm = ({ type, showForm, setShowForm }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (type === "signup") {
      if (!formData.name) newErrors.name = "Name is required";
    }
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.confirmPassword)
      newErrors.confirmPassword = "confrim Password is required";
    if (type === "signup" && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords not match";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="popup popup-bg" style={{ display: showForm ? "block" : "none" }}>
      <div className="popup-content">
        <div className="flex items-center justify-center ">
          <div className="w-[500px] bg-white rounded-3xl shadow-lg p-8">
            <button onClick={() => setShowForm(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
            <h1 className="text-3xl font-bold text-center text-black">
              Diviney
            </h1>
            <p className="mt-2 text-center text-[#4a5568]">
              {type === "signup"
                ? "Register to continue"
                : "Log in to continue"}
            </p>

            <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
              {type === "signup" && (
                <div>
                  <label className="sr-only" htmlFor="name">
                    Enter names
                  </label>
                  <div className="relative">
                    <input
                      id="name"
                      placeholder="Enter name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-9 py-3 bg-[#f7fafc] rounded-lg border border-[#e2e8f0] text-[#2d3748] placeholder-[#a0aec0] focus:ring-2 focus:ring-[#4299e1] focus:outline-none"
                    />
                    {errors.name && (
                      <p className="text-red-500">{errors.name}</p>
                    )}
                  </div>
                </div>
              )}

              <div>
                <label className="sr-only" htmlFor="email">
                  Email address
                </label>
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-9 py-3 bg-[#f7fafc] rounded-lg border border-[#e2e8f0] text-[#2d3748] placeholder-[#a0aec0] focus:ring-2 focus:ring-[#4299e1] focus:outline-none"
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="password">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-9 py-3 bg-[#f7fafc] rounded-lg border border-[#e2e8f0] text-[#2d3748] placeholder-[#a0aec0] focus:ring-2 focus:ring-[#4299e1] focus:outline-none"
                  />
                  {errors.password && (
                    <p className="text-red-500">{errors.password}</p>
                  )}
                </div>
              </div>

              {type === "signup" && (
                <div>
                  <label className="sr-only" htmlFor="confirmPassword">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm Password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="w-full px-9 py-3 bg-[#f7fafc] rounded-lg border border-[#e2e8f0] text-[#2d3748] placeholder-[#a0aec0] focus:ring-2 focus:ring-[#4299e1] focus:outline-none"
                    />
                    {errors.confirmPassword && (
                      <p className="text-red-500">{errors.confirmPassword}</p>
                    )}
                  </div>
                </div>
              )}

              <div>
                <button
                  type="submit"
                  className="w-full py-3 text-white rounded-full bg-gradient-to-r from-[#fc4a7a] via-[#7c70f8] to-[#02d7e0] hover:opacity-90"
                >
                  {type === "signup" ? "Register" : "Log in"}
                </button>
              </div>
            </form>

            <div className="relative flex items-center justify-center mt-6">
              <div className="absolute w-full h-[1px] bg-[#e2e8f0]"></div>
              <p className="relative z-10 bg-white px-2 text-[#4a5568]">
                Or continue with
              </p>
            </div>

            <div className="mt-6 space-y-3">
              <button className="w-full py-3 text-black bg-white border border-[#e2e8f0] rounded-lg flex items-center justify-center space-x-3 hover:bg-[#f7fafc]">
                <img src="./images/login/google-icon.svg" alt="google icon" />
                <span>Continue with Google</span>
              </button>

              <button className="w-full py-3 text-black bg-white border border-[#e2e8f0] rounded-lg flex items-center justify-center space-x-3 hover:bg-[#f7fafc]">
                <img src="./images/login/apple.svg" alt="apple icon" />
                <span>Continue with Apple</span>
              </button>
            </div>

            <p className="mt-6 text-center text-[#4a5568]">
              {type === "signup" ? (
                <>
                  Already have an account?{" "}
                  <a href="#" className="gradient-text hover:underline">
                    Log in here
                  </a>
                </>
              ) : (
                <>
                  Don’t have an account?{" "}
                  <a href="#" className="gradient-text hover:underline">
                    Register here
                  </a>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
