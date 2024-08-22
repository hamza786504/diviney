import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <header className="bg-white shadow-sm flex py-4 px-4 sm:px-10 tracking-wide relative z-50">
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-5 w-full">
          <a href="/">
            <h2 className="font-semibold">Divincy</h2>
          </a>
          <div className="hidden lg:flex relative bg-[#F8F8F8] min-h-[40px] border-[#D6D6D9] border rounded-3xl">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search"
              className="bg-transparent px-5 outline-none text-black placeholder-black lg:w-[400px] min-h-[40px]"
            />
            <button
              type="button"
              className="border-none bg-transparent absolute top-1/2 right-3 -translate-y-1/2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </div>
          <div className="flex max-lg:ml-auto space-x-3">
            <button
              onClick={() => setShowSignUp(true)}
              className="block px-4 md:px-6 py-2.5 text-sm font-semibold bg-custom-gradient rounded-3xl text-white transition-all ease-in-out duration-300 hover:bg-gray-100"
            >
              Sign Up
            </button>
            <button
              onClick={() => setShowLogin(true)}
              className="block px-4 md:px-6 py-2.5 text-sm font-semibold border-gradient rounded-full bg-white text-dark transition-all ease-in-out duration-300 gradientBorder"
            >
              Login
            </button>
          </div>
        </div>
      </header>
      <div className="m-3 lg:hidden relative bg-[#F8F8F8] min-h-[40px] border-[#D6D6D9] border rounded-3xl">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search"
          className="bg-transparent px-5 outline-none text-black placeholder-black lg:w-[400px] min-h-[40px]"
        />
        <button
          type="button"
          className="border-none bg-transparent absolute top-1/2 right-3 -translate-y-1/2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-5 "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>

      {showSignUp && (
        <div className="popup">
          <div className="popup-content">
            <div class="flex  opacity items-center justify-center min-h-screen  ">
              <div class="w-[500px] bg-white rounded-3xl shadow-lg p-8">
                <button onClick={() => setShowSignUp(false)}>
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
                <h1 class="text-3xl font-bold text-center text-black">
                  Diviney
                </h1>
                <p class="mt-2 text-center text-[#4a5568]">
                  Register to continue
                </p>

                <form class="mt-8 space-y-4">
                  <div>
                    <label class="sr-only" for="email">
                      Enter names
                    </label>
                    <div class="relative">
                      <input
                        placeholder="Enter name"
                        class="w-full px-9 py-3 bg-[#f7fafc] rounded-lg border border-[#e2e8f0] text-[#2d3748] placeholder-[#a0aec0] focus:ring-2 focus:ring-[#4299e1] focus:outline-none"
                      />
                      <i class="fas fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-[#a0aec0]"></i>
                    </div>
                  </div>

                  <div>
                    <label class="sr-only" for="email">
                      Email address
                    </label>
                    <div class="relative">
                      <input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        class="w-full px-9 py-3 bg-[#f7fafc] rounded-lg border border-[#e2e8f0] text-[#2d3748] placeholder-[#a0aec0] focus:ring-2 focus:ring-[#4299e1] focus:outline-none"
                      />
                      <i class="fas fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-[#a0aec0]"></i>
                    </div>
                  </div>

                  <div>
                    <label class="sr-only" for="password">
                      Password
                    </label>
                    <div class="relative">
                      <input
                        id="password"
                        type="password"
                        placeholder="Password"
                        class="w-full px-9 py-3 bg-[#f7fafc] rounded-lg border border-[#e2e8f0] text-[#2d3748] placeholder-[#a0aec0] focus:ring-2 focus:ring-[#4299e1] focus:outline-none"
                      />
                      <i class="fas fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-[#a0aec0]"></i>
                    </div>
                  </div>

                  <div>
                    <label class="sr-only" for="password">
                      Confirm Password
                    </label>
                    <div class="relative">
                      <input
                        id="password"
                        type="password"
                        placeholder=" Confirm Password"
                        class="w-full px-9 py-3 bg-[#f7fafc] rounded-lg border border-[#e2e8f0] text-[#2d3748] placeholder-[#a0aec0] focus:ring-2 focus:ring-[#4299e1] focus:outline-none"
                      />
                      <i class="fas fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-[#a0aec0]"></i>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      class="w-full py-3 text-white rounded-full bg-gradient-to-r from-[#fc4a7a] via-[#7c70f8] to-[#02d7e0] hover:opacity-90"
                    >
                      Log in
                    </button>
                  </div>
                </form>

                <div class="relative flex items-center justify-center mt-6">
                  <div class="absolute w-full h-[1px] bg-[#e2e8f0]"></div>
                  <p class="relative z-10 bg-white px-2 text-[#4a5568]">
                    Or continue with
                  </p>
                </div>

                <div class="mt-6 space-y-3">
                  <button class="w-full py-3 text-black bg-white border border-[#e2e8f0] rounded-lg flex items-center justify-center space-x-3 hover:bg-[#f7fafc]">
                    <img
                      src="./images/login/google-icon.svg"
                      alt="google icon"
                    />
                    <span>Continue with Google</span>
                  </button>

                  <button class="w-full py-3 text-black bg-white border border-[#e2e8f0] rounded-lg flex items-center justify-center space-x-3 hover:bg-[#f7fafc]">
                    <img src="./images/login/apple.svg" alt="google icon" />

                    <span>Continue with Apple</span>
                  </button>
                </div>

                <p class="mt-6 text-center text-[#4a5568]">
                  Don’t have an account?{" "}
                  <a href="#" class="gradient-text hover:underline">
                    Register here
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {showLogin && (
        <div className="popup">
          <div className="popup-content">
            <div class="flex   items-center justify-center min-h-screen ">
              <div class="w-[500px] bg-white rounded-3xl shadow-lg p-8">
                <button onClick={() => setShowLogin(false)}>
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
                <h1 class="text-3xl font-bold text-center text-black">
                  Diviney
                </h1>
                <p class="mt-2 text-center text-[#4a5568]">
                  Log in to continue
                </p>

                <form class="mt-8 space-y-4">
                  <div>
                    <label class="sr-only" for="email">
                      Email address
                    </label>
                    <div class="relative">
                      <input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        class="w-full px-9 py-3 bg-[#f7fafc] rounded-lg border border-[#e2e8f0] text-[#2d3748] placeholder-[#a0aec0] focus:ring-2 focus:ring-[#4299e1] focus:outline-none"
                      />
                      <i class="fas fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-[#a0aec0]"></i>
                    </div>
                  </div>

                  <div>
                    <label class="sr-only" for="password">
                      Password
                    </label>
                    <div class="relative">
                      <input
                        id="password"
                        type="password"
                        placeholder="Password"
                        class="w-full px-9 py-3 bg-[#f7fafc] rounded-lg border border-[#e2e8f0] text-[#2d3748] placeholder-[#a0aec0] focus:ring-2 focus:ring-[#4299e1] focus:outline-none"
                      />
                      <i class="fas fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-[#a0aec0]"></i>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      class="w-full py-3 text-white rounded-full bg-gradient-to-r from-[#fc4a7a] via-[#7c70f8] to-[#02d7e0] hover:opacity-90"
                    >
                      Log in
                    </button>
                  </div>
                </form>

                <div class="relative flex items-center justify-center mt-6">
                  <div class="absolute w-full h-[1px] bg-[#e2e8f0]"></div>
                  <p class="relative z-10 bg-white px-2 text-[#4a5568]">
                    Or continue with
                  </p>
                </div>

                <div class="mt-6 space-y-3">
                  <button class="w-full py-3 text-black bg-white border border-[#e2e8f0] rounded-lg flex items-center justify-center space-x-3 hover:bg-[#f7fafc]">
                    <img
                      src="./images/login/google-icon.svg"
                      alt="google icon"
                    />
                    <span>Continue with Google</span>
                  </button>

                  <button class="w-full py-3 text-black bg-white border border-[#e2e8f0] rounded-lg flex items-center justify-center space-x-3 hover:bg-[#f7fafc]">
                    <img src="./images/login/apple.svg" alt="google icon" />

                    <span>Continue with Apple</span>
                  </button>
                </div>

                <p class="mt-6 text-center text-[#4a5568]">
                  Don’t have an account?{" "}
                  <a href="#" class="gradient-text hover:underline">
                    Register here
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
