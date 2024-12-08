import React, { useState } from "react";

interface SeriesData {
  id: number;
  image: string;
  title: string;
  description: string;
}

const Card: React.FC = () => {
  const [selectedSeriesId, setSelectedSeriesId] = useState<number>(1);

  const seriesList: SeriesData[] = [
    {
      id: 1,
      image: "/assets/react-image.png", // Ganti dengan path gambar React
      title: "React Series",
      description: "Series ini membahas mengenai React TypeScript.",
    },
    {
      id: 2,
      image: "/assets/laravel-image.png", // Ganti dengan path gambar Laravel
      title: "Laravel Series",
      description: "Series ini membahas mengenai Laravel Framework.",
    },
    {
      id: 3,
      image: "/assets/vue-image.png", // Ganti dengan path gambar Vue
      title: "Vue Series",
      description: "Series ini membahas mengenai Vue 3 dan Composition API.",
    },
    {
      id: 4,
      image: "/assets/angular-image.png", // Ganti dengan path gambar Angular
      title: "Angular Series",
      description: "Series ini membahas mengenai Angular dan RxJS.",
    },
  ];

  // Fungsi untuk mengubah series yang dipilih
  const handleSeriesChange = (id: number) => {
    setSelectedSeriesId(id);
  };

  // Data series yang saat ini dipilih
  const selectedSeries = seriesList.find((series) => series.id === selectedSeriesId);

  return (
    <div className="mt-32 flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Card Utama */}
      <div className="p-6 bg-white rounded-lg shadow-lg text-center w-full max-w-md">
        {selectedSeries && (
          <>
            <img
              src={selectedSeries.image}
              alt={`${selectedSeries.title} Icon`}
              className="w-32 h-32 mx-auto mb-4"
            />
            <h1 className="text-2xl font-bold mb-2">{selectedSeries.title}</h1>
            <p className="text-gray-600 mb-4">{selectedSeries.description}</p>
          </>
        )}
        {/* Tombol untuk memilih series */}
        <div className="flex justify-center flex-wrap gap-4">
          {seriesList.map((series) => (
            <button
              key={series.id}
              onClick={() => handleSeriesChange(series.id)}
              className={`px-4 py-2 rounded ${
                selectedSeriesId === series.id
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-black hover:bg-gray-400"
              }`}
            >
              {series.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
