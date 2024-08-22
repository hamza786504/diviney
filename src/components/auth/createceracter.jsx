import React from "react";

export default function createceracter() {
  return (
    <div class="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#fc466b] via-[#3f5efb] to-[#23a6d5]">
      <div class="bg-white rounded-xl shadow-lg p-6 w-[350px] md:w-[400px] lg:w-[450px]">
        <div class="flex items-center mb-4">
          <h1 class="text-lg font-semibold ml-3">Create your Figure</h1>

          <button class="ml-auto text-gray-400 hover:text-gray-600">
            <i class="fas fa-times"></i>
          </button>
        </div>

        <form>
          <img
            src="./images/home/image.png"
            alt="User Avatar"
            class="w-16 h-16 mb-2 rounded-full object-cover"
          />
          <input
            type="text"
            placeholder="Name of Figure"
            class="w-full mb-3 p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <select class="w-full mb-3 p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none">
            <option>Select Category</option>
          </select>
          <input
            type="text"
            placeholder="Main Contributions"
            class="w-full mb-3 p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Brief Biography"
            class="w-full mb-3 p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Any Tags"
            class="w-full mb-4 p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button
            type="submit"
            class="w-full p-3 text-white rounded-lg bg-gradient-to-r from-[#fc466b] to-[#3f5efb] hover:from-[#ff5e7b] hover:to-[#4f6eff]"
          >
            Create Figure
          </button>
        </form>
      </div>
    </div>
  );
}
