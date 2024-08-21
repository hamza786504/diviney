import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
export default function register() {
  return (
    <div class="flex  items-center justify-center  bg-gradient-to-tr from-[#fcd2da] via-[#d4d2fc] to-[#daf3fc]">
      <div class="w-[500px] bg-white rounded-3xl shadow-lg p-8">
        <h1 class="text-3xl font-bold text-center text-black">Diviney</h1>
        <p class="mt-2 text-center text-[#4a5568]">Register to continue</p>

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
            <img src="./images/login/google-icon.svg" alt="google icon" />
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
  );
}
