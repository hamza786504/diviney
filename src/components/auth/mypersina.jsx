import React from "react";

export default function mypersina() {
  return (
    <div class="popup-bg popup h-screen flex items-center justify-center">
      <div class="w-[350px] bg-white rounded-lg shadow-lg p-6">
        <h1 class="text-lg font-semibold text-gray-800">My Persona</h1>
        <div class="mt-4">
          <div class="flex p-2 rounded-md items-center bg-gradient-to-r from-[#ff5e7b99] to-[#4f6eff6e] hover:from-[#ff5e7b] hover:to-[#4f6eff]">
            <i class="fas fa-info-circle "></i>
            <p class="ml-2 text-sm  ">
              Figure will remember your persona information to improve their
              conversations with you
            </p>
          </div>
          <img
            src="./images/home/image.png"
            alt="Profile Picture"
            class="w-16 h-16 rounded-full my-3"
          />
          <div class=" flex-1">
            <input
              type="text"
              placeholder="Display name"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700"
              maxlength="25"
            />
            <span className="flex justify-end text-gray-700">0/25</span>
          </div>

          <div class="mt-4">
            <input
              type="text"
              placeholder="Background"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700"
              maxlength="250"
            />
            <span className="flex justify-end text-gray-700">0/25</span>
          </div>
          <div class="mt-4 flex items-center">
            <input
              type="checkbox"
              id="default"
              class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label for="default" class="ml-2 text-sm text-gray-700">
              Make default for new chats
            </label>
          </div>
          <button class="mt-6 w-full py-2 bg-gradient-to-r from-[#ff5e7b99] to-[#4f6eff6e] text-white font-semibold rounded-lg">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
