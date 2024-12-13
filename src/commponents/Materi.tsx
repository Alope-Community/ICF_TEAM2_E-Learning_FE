import React from "react";

const Materi = () => {
  return (
    <>
      <div className="bg-gray-50 py-16 px-4 md:px-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 text-center mb-12">
          Berbagai Program MySkill
        </h2>

        <div className="gap-8 lg:gap-16 md:grid-cols-2 items-center">
          {/* Program E-learning */}
          <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left md:space-x-8 space-y-6 md:space-y-0">
            {/* Gambar */}
            <div className="flex-shrink-0 w-full md:w-auto">
              <img
                src="/headers/head-laptop.png" // Ganti dengan URL gambar E-learning
                alt="E-learning"
                className="max-w-full w-full md:w-80"
              />
            </div>

            {/* Konten */}
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                E-learning
              </h3>
              <p className="text-gray-600 mb-4 font-semibold text-sm">
                Pelajari Ratusan Skill Sekali Bayar. Praktik dan Bersertifikat:
              </p>
              <ul className="text-left space-y-2 mb-6 text-sm">
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">✔</span>
                  <span>
                    Belajar fleksibel via Video Materi, Bahan Bacaan, Project,
                    dan Studi Kasus
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">✔</span>
                  <span>
                    Praktikal & Actionable. Bertahap dari level Dasar hingga
                    Lanjut
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">✔</span>
                  <span>
                    Grup Komunitas Diskusi Lifetime. Kelas Gratis Tiap Bulannya
                  </span>
                </li>
              </ul>
              <button className="bg-cyan-500 text-white px-4 py-2 rounded-lg text-lg hover:bg-cyan-500">
                Lihat Ratusan Materi
              </button>
            </div>
          </div>

          <div className="flex flex-col-reverse md:flex-row items-center justify-center text-center md:text-left md:space-x-8 space-y-6 md:space-y-0">
            {/* Konten */}
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                E-learning
              </h3>
              <p className="text-gray-600 mb-4 font-semibold text-sm">
                Pelajari Ratusan Skill Sekali Bayar. Praktik dan Bersertifikat:
              </p>
              <ul className="text-left space-y-2 mb-6 text-sm">
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">✔</span>
                  <span>
                    Belajar fleksibel via Video Materi, Bahan Bacaan, Project,
                    dan Studi Kasus
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">✔</span>
                  <span>
                    Praktikal & Actionable. Bertahap dari level Dasar hingga
                    Lanjut
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">✔</span>
                  <span>
                    Grup Komunitas Diskusi Lifetime. Kelas Gratis Tiap Bulannya
                  </span>
                </li>
              </ul>
              <button className="bg-cyan-500 text-white px-4 py-2 rounded-lg text-lg hover:bg-cyan-500">
                Lihat Ratusan Materi
              </button>
            </div>

            {/* Gambar */}
            <div className="flex-shrink-0 w-full md:w-auto">
              <img
                src="/headers/head-meja.png" // Ganti dengan URL gambar E-learning
                alt="E-learning"
                className="max-w-full w-full md:w-80"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Materi;
