import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../commponents/Navbar";
import axios, { formToJSON } from "axios";
import api from "../utils/Api";
import { toast, ToastContainer } from "react-toastify";
import Course from "./Course";

const CourseCategory = () => {
  const dataId = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State untuk loading
  const isLoggedIn = localStorage.getItem("token");
  const navigate = useNavigate();
  // untuk tugas Dan Komentar
  const [task, setTask] = useState();
  const [grade, setGrade] = useState();
  const [submited, setSubmited] = useState();
  const [discusion, setDiscusion] = useState([]);
  const [postDiscussion, setPostDiscussion] = useState();

  // For Get data detail course
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
          setGrade(res.data.grade);
          setSubmited(res.data.submited);
          setIsLoading(false); // Set loading ke false setelah request selesai
        })
        .catch((err) => {
          setIsLoading(false); // Set loading ke false meskipun request gagal
        });
    }, [isLoggedIn, dataId.id]);
  } else {
    return navigate("/e-learning/");
  }

  // ForPost Task
  const [file, setFile] = useState(null);
  // for set data diskusi
  const handleChangeDiscusion = (e) => {
    setPostDiscussion(e.target.value);
  };

  // for post data diskusi
  const discussion = async (e) => {
    e.preventDefault();
    let formData = {
      discussion: postDiscussion,
    };
    axios
      .request({
        url: api + `course/${data.id}/discussion`,
        method: "POST",
        data: formData,
        headers: {
          Authorization: `Bearer ${isLoggedIn}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        window.location.reload();
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: "top-right",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      });
  };

  // for post file submited
  const handleFileUpload = async (e) => {
    e.preventDefault();

    if (!file) {
      toast.error("Masukan File", {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }

    const formData = new FormData();
    formData.append("file", file);

    console.log(formData.entries());
    try {
      axios
        .request({
          url: api + `task/${task.id}/submited`,
          method: "POST",
          data: formData,
          headers: {
            Authorization: `Bearer ${isLoggedIn}`,
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          toast.success(res.data.message, {
            position: "top-right",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          window.location.reload();
        })
        .catch((err) => {
          toast.error(err.response.data.message, {
            position: "top-right",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        });
    } catch {}
  };

  return (
    <>
      <div className="bg-white">
        <Navbar></Navbar>

        {/* Main Content */}
        <main className="px-4 md:px-8 mt-8 lg:px-28">
          <ToastContainer />
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
                    >
                      Kembali
                    </button>
                  </div>
                </div>

                <div className="w-full lg:w-full bg-white shadow-lg rounded-lg py-6">
                  <div className="lg:h-[px-400px] h-[300px] rounded-lg mx-5">
                    <iframe
                      className="w-full lg:h-[300px] h-[300px] rounded-lg"
                      src={data.course}
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
                  <form onSubmit={discussion}>
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
                          name="discussion"
                          onChange={handleChangeDiscusion}
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
                    >
                      Kirim Pertanyan
                    </button>
                  </form>

                  {/* Displaying the list of comments */}
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Ajukan Pertanyaan Anda
                    </h3>
                    <div className="mt-3">
                      {discusion.map((item) => (
                        <div
                          key={item.id}
                          className="bg-gray-100 p-4 rounded-lg shadow-sm mb-4"
                        >
                          <p className="text-sm font-medium text-gray-700">
                            {item.user.name}
                          </p>
                          <p className="text-sm text-gray-600 mt-2">
                            {item.discussion}
                          </p>
                          {item.reply ? (
                            <div className="mt-2 bg-white p-2 rounded-lg shadow">
                              <p className="text-sm font-medium text-gray-500">
                                Balasan:
                              </p>
                              <p className="text-sm text-gray-600">
                                {item.reply.message}
                              </p>
                            </div>
                          ) : (
                            <>
                              <div className="mt-2 bg-white p-2 rounded-lg shadow">
                                <p className="text-sm font-medium text-gray-500">
                                  Belum Ada Jawaban
                                </p>
                              </div>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tugas Card */}
                <div className="w-full lg:w-1/2 bg-white shadow-lg rounded-lg p-6">
                  <h2 className="text-xl font-semibold mb-6 text-gray-800">
                    Tugas
                  </h2>
                  {task ? (
                    <>
                      <p className="text-sm font-medium text-gray-700">
                        {task.task}
                      </p>
                      <form onSubmit={handleFileUpload}>
                        <div className="mt-5">
                          <div className="items-start">
                            {submited != null ? (
                              <>
                                <label
                                  htmlFor="name"
                                  className="block text-sm text-gray-700 mb-2"
                                >
                                  Anda Telah Mengumpulkan Dan Mendapatkan Nilai
                                  : {grade ? grade.grade : "Belum Di Nilai"}.
                                </label>
                              </>
                            ) : (
                              <>
                                <label
                                  htmlFor="name"
                                  className="block text-sm text-gray-700 mb-2"
                                >
                                  Masukkan File Berbentuk Pdf.
                                </label>
                                <input
                                  type="file"
                                  name="file"
                                  onChange={(e) => {
                                    const selectedFile = e.target.files[0]; // Ambil file pertama
                                    setFile(selectedFile); // Simpan file ke state
                                  }}
                                  accept="application/pdf"
                                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                                  required
                                />
                              </>
                            )}
                          </div>
                        </div>
                        {submited != null ? (
                          <></>
                        ) : (
                          <>
                            <button
                              type="submit"
                              className="bg-cyan-500 text-white px-2 py-2 rounded-lg mt-5"
                            >
                              Upload Tugas
                            </button>
                          </>
                        )}
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
