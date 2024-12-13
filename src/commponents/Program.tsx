import React from "react";

const Program = () => {

  


  return (
    <>
      <div className="mt-20 lg:px-20">
        <div className="bg-white min-h-screen p-4 md:p-8">
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

          {/* Testimoni Section */}
          <div className="mt-12 lg:px-5">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-700 text-center">
              Daftar Materi Unggulan
            </h2>

            {/* Scrollable Section */}
            <div className="mt-8 overflow-x-auto scrollbar-hide">
              <div className="flex gap-6 w-max flex-nowrap">
                {[
                  {
                    image: "/headers/head-meja.png",
                    name: "Latifah NH Putri",
                    role: "HRD",
                    story: "Diterima Kerja Sebagai HRD",
                  },
                  {
                    image: "/headers/head-laptop.png",
                    name: "Muhammad Rizqullah",
                    role: "Marketing Intern",
                    story: "Lolos 12 Tempat Magang",
                  },
                  {
                    image: "/headers/head-kursi.png",
                    name: "Siti Mustika Ayu",
                    role: "Data Analyst",
                    story: "Diterima Jadi Data Analyst",
                  },
                  {
                    image: "/headers/head-papan.png",
                    name: "Bram Arya Setiawan",
                    role: "Magang BUMN",
                    story: "Diterima Magang BUMN",
                  },
                  {
                    image: "/headers/home.png",
                    name: "Rindi Agustiana",
                    role: "Copywriter",
                    story: "Diterima Jadi Copywriter",
                  },
                ].map((testi, index) => (
                  <div
                    key={index}
                    className="min-w-[250px] md:min-w-[300px] bg-slate-100 shadow-md rounded-lg p-6 text-center flex-shrink-0"
                  >
                    {/* Gambar */}
                    <img
                      src={testi.image}
                      alt={testi.name}
                      className="w-24 h-24 mx-auto rounded-full mb-4"
                    />
                    {/* Konten */}
                    <p className="text-teal-600 font-bold">{testi.story}</p>
                    <p className="mt-2 text-gray-600">{testi.name}</p>
                    <p className="text-gray-500 text-sm">{testi.role}</p>
                    <button className="mt-4 bg-cyan-500 text-white px-4 py-2 rounded">
                      Lihat Materi
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Program;
