import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Video: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Navbar />

      <div className="flex items-start justify-center">
        {/* Sidebar */}
        <div className="w-full sm:w-1/2 lg:w-1/4 rounded-lg bg-gray-900 h-[calc(100vh-4rem)] mt-8 fixed top-16 left-0 p-4 overflow-y-auto">
          <h1 className="text-2xl font-bold text-center my-4 text-gray-200">
            Daftar Materi
          </h1>
          {[
            "1. Laravel",
            "2. React Native",
            "3. Vue.js",
            "4. Tailwind CSS",
            "5. JavaScript",
            "6. Python",
          ].map((materi) => (
            <button
              key={materi}
              type="button"
              className="bg-gray-800 px-6 text-left mt-2 py-3 rounded-lg font-semibold text-gray-200 shadow-md transition duration-300 ease-in-out transform hover:bg-gray-700 hover:scale-105 hover:text-white w-full"
            >
              {materi}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="w-full sm:ml-[50%] lg:ml-[25%] p-4 space-y-8 mt-20">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Video Pembelajaran
            </h2>
            <video
              className="w-full h-auto rounded-lg"
              controls
              src="https://www.w3schools.com/html/mov_bbb.mp4"
            ></video>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-white">Komentar</h2>
              <button className="bg-green-500 px-4 py-2 rounded-lg font-semibold text-white shadow-md transition duration-300 ease-in-out transform hover:bg-green-600 hover:rotate-3 hover:scale-105">
                Upload Tugas
              </button>
            </div>

            <textarea
              className="w-full h-20 p-4 border border-gray-600 rounded-lg shadow-sm text-gray-200 bg-gray-900/50 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none mb-4"
              placeholder="Tambahkan komentar..."
            ></textarea>
            <div className="flex justify-end gap-4">
              <button className="bg-blue-500 px-4 py-2 rounded-lg font-semibold text-white shadow-md transition duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105">
                Upload Komentar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
