import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../commponents/Navbar";
import axios from "axios";
import api from "../utils/Api";

const Course = () => {
  const dataId = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true); // State untuk loading
  const isLoggedIn = localStorage.getItem("token");
  const [dataCategory, setDataCategory] = useState({
    title: "",
    description: "",
  });

  const truncateDescription = (
    description: string,
    wordLimit: number
  ): string => {
    const words = description.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : description;
  };

  useEffect(() => {
    if (isLoggedIn) {
      setIsLoading(true); // Set loading ke true sebelum request
      axios
        .request({
          url: api + `category/${dataId.id}/course`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${isLoggedIn}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          setData(res.data.data);
          setDataCategory({
            title: res.data.title,
            description: res.data.description,
          });
          setIsLoading(false); // Set loading ke false setelah request selesai
        })
        .catch((err) => {
          console.error(err);
          setIsLoading(false); // Set loading ke false meskipun request gagal
        });
    }
  }, [isLoggedIn, dataId.id]);

  return (
    <>
      <div className="bg-white">
        <Navbar></Navbar>

        <div className="mt-20 lg:mt-24 lg:px-28">
          <div className="bg-white max-h-content p-4 md:p-8">
            <div className="w-full flex flex-col lg:flex-row items-center">
              <div className="w-full text-center lg:text-left">
                <h1 className="font-bold text-slate-800 text-lg md:text-2xl">
                  {dataCategory.title}
                </h1>
                <p className="text-base font-medium mt-2">
                  {dataCategory.description}
                </p>
                <div className="mt-10">
                  <button
                    onClick={() => {
                      setTimeout(() => {
                        navigate(`/e-learning/`);
                      }, 1500);
                    }}
                    className="bg-cyan-500 text-white px-4 py-3 rounded-lg mt-3"
                  >
                    Kembali
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="px-4 md:px-8 mt-8 lg:px-28">
          {isLoading ? ( // Tampilkan loading saat request berjalan
            <p className="text-center text-lg mt-24">Loading...</p>
          ) : data.length ? ( // Tampilkan data jika tersedia
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((item, index) => (
                  <Link to={`/e-learning/${item.id}/course-detail`}>
                    <div className="bg-slate-50 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                      <h2 className="text-lg font-semibold text-gray-800 text-center">
                        {item.name}
                      </h2>
                      <div className="mt-4 text-gray-600 text-sm">
                        <p>{truncateDescription(item.description, 20)}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <p className="text-center justify-center text-lg mt-24">
              Data belum tersedia
            </p>
          )}
        </main>
      </div>
    </>
  );
};

export default Course;
