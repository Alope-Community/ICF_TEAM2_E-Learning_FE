import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../commponents/Navbar";
import axios from "axios";
import api from "../utils/Api";

const Course = () => {
  const dataId = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State untuk loading
  const isLoggedIn = localStorage.getItem("token");

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
          setData(res.data.data || []);
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

        {/* Main Content */}
        <main className="px-4 md:px-8 mt-8">
          {isLoading ? ( // Tampilkan loading saat request berjalan
            <p className="text-center text-lg mt-24">Loading...</p>
          ) : data.length ? ( // Tampilkan data jika tersedia
            <>
              <div className="flex flex-col md:flex-row">
                {/* Sidebar */}
                <aside className="hidden md:block  bg-gray-100 rounded-lg p-4 md:w-1/4 md:mr-4">
                  <h2 className="text-lg font-semibold text-gray-700 mb-4">
                    {data.title}
                  </h2>
                  <ul className="space-y-2">
                    {data.map((item, index) => (
                      <li
                        key={index}
                        className={`flex items-center justify-between p-3 rounded-lg ${
                          item.name ? "bg-gray-300" : "bg-cyan-500 text-white"
                        }`}
                      >
                        <span>{item.name}</span>
                      </li>
                    ))}
                  </ul>
                </aside>

                {/* Main Content */}
                <section className="flex-1 bg-gray-50 rounded-lg p-4 w-full">
                  <h2 className="text-xl font-semibold mb-4">
                    Kemana Kita Akan Deploy
                  </h2>
                  <div className="bg-black rounded-lg aspect-video mb-4">
                    <video
                      controls
                      className="w-full h-full rounded-lg"
                      poster="/path/to/video-thumbnail.png"
                    >
                      <source src="/path/to/video.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Komentar</h3>
                    <p className="text-gray-600 mb-4">
                      Ada 5 komentar pada episode ini.
                    </p>
                    <textarea
                      className="w-full border border-gray-300 rounded-lg p-2 mb-4"
                      placeholder="Tambahkan komentar"
                    ></textarea>
                    <button className="bg-cyan-500 text-white px-4 py-2 rounded-lg">
                      Kirim
                    </button>
                  </div>
                  <ul className="mt-4 space-y-4">
                    {[
                      {
                        name: "Yandi Novriandi",
                        comment: "Playlist baru lagi bang",
                        time: "3h",
                      },
                      {
                        name: "Irsyad A. Panjaitan",
                        comment: "Iya bang. Gaskeun.",
                        time: "3h",
                      },
                    ].map((comment, index) => (
                      <li key={index} className="bg-gray-100 p-4 rounded-lg">
                        <p className="font-bold">{comment.name}</p>
                        <p className="text-gray-600">{comment.comment}</p>
                        <p className="text-gray-500 text-sm">{comment.time}</p>
                      </li>
                    ))}
                  </ul>
                </section>
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
