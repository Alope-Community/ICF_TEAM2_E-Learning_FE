import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Video: React.FC = () => {
  const navigate = useNavigate();

  const items = [
    {
      title: "Kemana Kita Akan Deploy",
      time: "2:47",
      locked: false,
      route: "../",
    },
    {
      title: "Setup Version Control",
      time: "5:00",
      locked: true,
      route: "../",
    },
    {
      title: "Deploy Ke Share Hosting",
      time: "15:08",
      locked: true,
      route: "../",
    },
    {
      title: "VPS, Forge, Custom Domain Dan SSL",
      time: "19:41",
      locked: true,
      route: "../",
    },
    { title: "Last But Not Least", time: "6:00", locked: true, route: "/last" },
    {
      title: "Inertia Vite on Production",
      time: "14:20",
      locked: true,
      route: "/vite-production",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Navbar></Navbar>

      {/* Main Content */}
      <main className="px-4 md:px-8 mt-8">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <aside className="hidden md:block bg-gray-100 rounded-lg p-4 md:w-1/4 md:mr-4">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Deploy Laravel Ke Server
            </h2>
            <ul className="space-y-2">
              {items.map((item, index) => (
                <li
                  key={index}
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    item.locked ? "bg-gray-300" : "bg-cyan-500 text-white"
                  }`}
                >
                  <span>{item.title}</span>
                  <span>{item.time}</span>
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
      </main>
    </div>
  );
};

export default Video;
