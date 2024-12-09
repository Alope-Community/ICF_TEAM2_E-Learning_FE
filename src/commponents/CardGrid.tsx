import axios from "axios";
import { useState, useEffect } from "react";
import api from "../utils/Api";
import { Link, useNavigate } from "react-router-dom";

const CardGrid = () => {
  // Data untuk card
  const [dataCard, setDataCard] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Tambahkan loading state
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .request({
        url: api + "course-category",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((response) => {
        setDataCard(response.data.data || []); // Pastikan dataCard selalu array
        setIsLoading(false); // Matikan loading setelah data diambil
      })
      .catch((error) => {
        if (error.code == 403) {
          return navigate("/dafter-course");
        }
        console.error("Error fetching data:", error);
        setIsLoading(false); // Matikan loading meskipun gagal
      });
  }, []); // Dependency array kosong agar hanya dijalankan sekali

  return (
    <div className="bg-gray-50 py-10 px-4 lg:px-28">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
        Daftar Materi
      </h1>

      {isLoading ? (
        <p className="text-center text-lg">Loading...</p> // Pesan loading
      ) : dataCard.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dataCard.map((data, index) => (
            <Link
              to={`/e-learning/${data.id}/course`}
              key={index}
              className="block"
            >
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <img
                  src={data.image}
                  alt={data.name}
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h2 className="text-lg font-semibold text-gray-800 text-center">
                  {data.name}
                </h2>
                <div className="mt-4 text-gray-600 text-sm">
                  <p>{data.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-lg">Data belum tersedia</p> // Pesan jika data kosong
      )}
    </div>
  );
};

export default CardGrid;
