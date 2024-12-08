import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
        {/* Logo */}
        <header className="absolute top-4 left-8">
          <p className="text-2xl font-bold">
            <span className="text-cyan-500">E-</span>
            Lope
          </p>
        </header>

        {/* Content */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold mb-4">
            404 - Halaman Tidak Ditemukan
          </h1>
          <p className="text-lg mb-6">
            Hmm, halaman yang kamu tuju tidak ditemukan. Silahkan pastikan
            kembali URL halaman yang kamu tuju dan coba lagi.
          </p>

          <button
            onClick={() => navigate("/")}
            className="bg-cyan-500 text-white px-6 py-2 rounded-lg text-lg hover:bg-cyan-600"
          >
            Kembali ke Awal
          </button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
