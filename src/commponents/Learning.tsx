import { useState } from "react";

const Learning = () => {
  // Data materi dan gambar
  const materials = [
    {
      id: 1,
      title: "Fleksibilitas Waktu dan Lokasi",
      image: "/headers/head-laptop.png",
      description: "Pengguna dapat belajar kapan saja dan di mana saja melalui perangkat desktop atau mobile.",
    },
    {
      id: 2,
      title: "Personalisasi Pembelajaran",
      image: "/headers/head-kursi.png",
      description:
        "Sistem memberikan rekomendasi kursus berdasarkan minat dan kebutuhan pengguna, membantu mereka fokus pada materi yang relevan.",
    },
    {
      id: 3,
      title: "Interaktivitas dan Kolaborasi",
      image: "/headers/head-orang.png",
      description:
        "Pengguna dapat berpartisipasi dalam forum diskusi, mengajukan pertanyaan kepada instruktur, dan bekerja sama dengan sesama pelajar.",
    },
    {
      id: 4,
      title: "Evaluasi dan Penghargaan",
      image: "/headers/head-papan.png",
      description:
        "Dengan kuis, tes, dan tugas, pengguna dapat mengevaluasi kemajuan mereka.",
    },
  ];

  // State untuk materi yang dipilih
  const [selectedMaterial, setSelectedMaterial] = useState(materials[0]);

  return (
    <div className="p-8 min-h-screen w-full flex flex-col items-center justify-center bg-gray-50">
      <div className="w-full max-w-6xl text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Tujuan <span className="text-cyan-500">E-</span>Lope
        </h2>
      </div>

      {/* Responsiveness untuk berbagai platform */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Bagian Kiri: Daftar Materi */}
        <div className="lg:block hidden mt-6">
          <ul className="space-y-6">
            {materials.map((material) => (
              <li key={material.id}>
                <button
                  onClick={() => setSelectedMaterial(material)}
                  className={`w-full text-left px-6 py-4 rounded-lg font-medium shadow transition ${
                    selectedMaterial.id === material.id
                      ? "bg-cyan-500 text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  <span className="block text-lg font-bold">
                    {material.title}
                  </span>
                  <span className="block text-sm text-gray-600">
                    {material.description}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Bagian Kanan: Gambar dan Detail Materi (Desktop) */}
        <div className="lg:flex mt-20 lg:flex-col lg:items-center text-center hidden">
          <img
            src={selectedMaterial.image}
            alt={selectedMaterial.title}
            className="max-w-full h-64 object-contain mb-4"
          />
          <h3 className="text-lg font-bold text-gray-800">
            {selectedMaterial.title}
          </h3>
          <p className="text-gray-600 mt-2">{selectedMaterial.description}</p>
          <button
            onClick={() =>
              alert(`Selengkapnya tentang ${selectedMaterial.title}`)
            }
            className="mt-4 px-6 py-2 bg-cyan-500 text-white rounded-lg shadow hover:bg-cyan-600 transition"
          >
            Lihat Selengkapnya
          </button>
        </div>

        {/* Mobile View: Scrollable Horizontal Cards */}
        <div className="block lg:hidden">
          <div className="flex space-x-4 overflow-x-scroll scrollbar-hide">
            {materials.map((material) => (
              <div
                key={material.id}
                className={`min-w-[250px] bg-white shadow rounded-lg p-4 ${
                  selectedMaterial.id === material.id &&
                  "border border-cyan-500"
                }`}
              >
                <button
                  onClick={() => setSelectedMaterial(material)}
                  className="w-full text-left"
                >
                  <div className="flex flex-col items-center">
                    <img
                      src={material.image}
                      alt={material.title}
                      className="w-full h-40 object-contain mb-4"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">
                        {material.title}
                      </h3>
                      <p className="text-gray-600 mt-2 text-sm">
                        {material.description}
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learning;
