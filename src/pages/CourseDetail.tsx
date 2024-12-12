import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../commponents/Navbar";
import axios from "axios";
import api from "../utils/Api";

const CourseCategory = () => {
  const dataId = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State untuk loading
  const isLoggedIn = localStorage.getItem("token");
  const navigate = useNavigate();
  // untuk tugas Dan Komentar
  const [task, setTask] = useState();
  const [discusion, setDiscusion] = useState([]);

  if (isLoggedIn) {
    useEffect(() => {
      setIsLoading(true); // Set loading ke true sebelum request
      axios
        .request({
          url: api + `category/${dataId.id}/course-detail`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${isLoggedIn}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          setData(res.data.course);
          setTask(res.data.task);
          setDiscusion(res.data.discussion);
          setIsLoading(false); // Set loading ke false setelah request selesai
        })
        .catch((err) => {
          setIsLoading(false); // Set loading ke false meskipun request gagal
        });
    }, [isLoggedIn, dataId.id]);
  } else {
    navigate("/e-learning/");
  }

  useEffect;
  return (
    <>
      <div className="bg-white">
        <Navbar></Navbar>

        {/* Main Content */}
        <main className="px-4 md:px-8 mt-8 lg:px-28">
          {isLoading ? ( // Tampilkan loading saat request berjalan
            <p className="text-center text-lg mt-24">Loading...</p>
          ) : data.id ? ( // Tampilkan data jika tersedia
            <>
              <main className="px-8 lg:flex-row py-10 mt-10 lg:mt-24 gap-8">
                <div className="w-full lg:w-full bg-white shadow-lg rounded-lg py-5">
                  <div className="items-start ml-5">
                    <div className="text-xl text-semi-bold text-slate-800">
                      {data.name}
                    </div>
                    <div className="text-sm text-semi-bold text-slate-700">
                      {data.description}
                    </div>
                    <button
                      onClick={() => {
                        navigate(-1);
                      }}
                      className="bg-cyan-500 text-white px-2 py-2 rounded-lg mt-3"
                      data-aos="fade-up"
                    >
                      Kembali
                    </button>
                  </div>
                </div>

                <div className="w-full lg:w-full bg-white shadow-lg rounded-lg py-6">
                  <div className="lg:h-[px-400px] h-[300px] rounded-lg mx-5">
                    <iframe
                      className="w-full lg:h-[300px] h-[300px] rounded-lg"
                      src="https://www.youtube.com/embed/sAHcNLKWaa4"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </main>

              {/* Tugas Dan Komentar */}
              <main className="flex flex-col px-8 lg:flex-row py-10 mt-10 lg:mt-10 gap-8">
                {/* Diskusi Card */}
                <div className="w-full lg:w-1/2 bg-white shadow-lg rounded-lg p-6">
                  <h2 className="text-xl font-semibold mb-6 text-gray-800">
                    Diskusi
                  </h2>

                  {/* Comment Form */}
                  <form>
                    <div className="mt-5">
                      <div className="items-start">
                        <label
                          htmlFor="comment"
                          className="block text-sm text-gray-700 mb-2"
                        >
                          Masukkan Pendapat Anda
                        </label>
                        <textarea
                          id="comment"
                          placeholder="Tulis komentar Anda di sini"
                          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                          rows={4}
                          required
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="bg-cyan-500 text-white px-4 py-2 rounded-lg mt-5"
                      data-aos="fade-up"
                    >
                      Kirim Komentar
                    </button>
                  </form>

                  {/* Displaying the list of comments */}
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Komentar Terbaru
                    </h3>
                    <div className="mt-3">
                      {/* Example Comment */}
                      <div className="bg-gray-100 p-4 rounded-lg shadow-sm mb-4">
                        <p className="text-sm font-medium text-gray-700">
                          John Doe
                        </p>
                        <p className="text-sm text-gray-600 mt-2">
                          Komentar pertama saya! Ini adalah diskusi yang sangat
                          menarik.
                        </p>
                      </div>

                      {/* Another example comment */}
                      <div className="bg-gray-100 p-4 rounded-lg shadow-sm mb-4">
                        <p className="text-sm font-medium text-gray-700">
                          Jane Smith
                        </p>
                        <p className="text-sm text-gray-600 mt-2">
                          Komentar kedua saya! Saya sangat setuju dengan
                          pandangan ini.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tugas Card */}
                <div className="w-full lg:w-1/2 bg-white shadow-lg rounded-lg p-6">
                  <h2 className="text-xl font-semibold mb-6 text-gray-800">
                    Tugas
                  </h2>
                  {task[0] ? (
                    <>
                      <p className="text-sm font-medium text-gray-700">
                        {task[0].task}
                      </p>
                      <form action="">
                        <div className="mt-5">
                          <div className="items-start">
                            <label
                              htmlFor="name"
                              className="block text-sm text-gray-700 mb-2"
                            >
                              Masukkan File Berbentuk Pdf.
                            </label>
                            <input
                              type="file"
                              id="name"
                              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                              required
                            />
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="bg-cyan-500 text-white px-2 py-2 rounded-lg mt-5"
                          data-aos="fade-up"
                        >
                          Upload Tugas
                        </button>
                      </form>
                    </>
                  ) : (
                    <>
                      <p className="text-sm font-medium text-gray-700">
                        Belum Ada Tugas
                      </p>
                    </>
                  )}
                </div>
              </main>
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

export default CourseCategory;