import axios from "axios";
import { useState, useEffect } from "react";
import api from "../utils/Api";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const CardGrid = () => {
  // Data untuk card
  const [dataCard, setDataCard] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Tambahkan loading state
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

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
        console.error("Error fetching data:", error);
        setIsLoading(false); // Matikan loading meskipun gagal
      });
  }, []);

  const handleClick = (id) => {
    if (token) {
      axios
        .request({
          url: api + `course-category/${id}/enrolment`,
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((response) => {
          console.log(response.data);
          toast.success(response.data.message, {
            position: "top-right",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          setTimeout(() => {
            navigate(`/e-learning/${id}/course`);
          }, 1500);
        })
        .catch((err) => {
          toast.error(err.message, {
            position: "top-right",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    } else {
      toast.error("Maaf Anda Belum Login", {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  };

  return (
    <div className="bg-gray-50 py-10 px-4 lg:px-28">
      <ToastContainer />
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
        Daftar Materi
      </h1>

      {isLoading ? (
        <p className="text-center text-lg">Loading...</p> // Pesan loading
      ) : dataCard.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dataCard.map((data, index) => (
            <button
              onClick={() => {
                handleClick(data.id);
              }}
              key={index}
              className="block"
            >
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <img
                  src={`${data.image}`}
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
            </button>
          ))}
        </div>
      ) : (
        <p className="text-center text-lg">Data belum tersedia</p> // Pesan jika data kosong
      )}
    </div>
  );
};

export default CardGrid;
