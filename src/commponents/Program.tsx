import React from "react";

const Program = () => {

  


  return (
    <>
      <div className="mt-20 lg:px-20">
        <div className="bg-white  p-4 md:p-8">
          {/* Header */}
          <div className="w-full flex flex-col lg:flex-row items-center">
            {/* Gambar Header (disembunyikan di mobile) */}
            <div className="hidden lg:flex lg:w-1/2 justify-center mb-8 lg:mb-0">
              <img
                src="/headers/head-orang.png"
                className="w-3/4 mr-36 lg:w-3/5"
                alt="Header"
              />
            </div>

            {/* Konten Header */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="font-bold text-slate-800 text-lg md:text-2xl">
                Kuasai Ratusan Skill, Bangun Portfolio & Bersertifikat.
              </h1>
              <p className="text-base font-medium mt-2">
                Akses semua materi sekali bayar. Lebih dari sekadar nonton
                rekaman. Belajar fleksibel via • Video Materi • Case Study &
                Praktik • Bahan Bacaan • Komunitas.
              </p>
              <button className="bg-cyan-500 text-white px-4 py-3 rounded-lg mt-3">
                Lihat semua materi secara gratis
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Program;
