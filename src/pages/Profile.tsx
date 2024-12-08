import Navbar from "../commponents/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import api from "../utils/Api";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
  });
  const isLoggedIn = localStorage.getItem("token")?.toString();
  const navigate = useNavigate();

  if (isLoggedIn) {
    useEffect(() => {
      axios
        .request({
          url: api + "settings/profile",
          method: "GET",
          headers: {
            Authorization: `Bearer ${isLoggedIn}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((response) => {
          // console.log(response);
          setProfile({
            name: response.data.data.name,
            email: response.data.data.email,
          });
        })
        .catch((err) => {
          setTimeout(() => {
            navigate("/");
          }, -100);
        });
    });
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="lg:mt-20 min-h-screen mt-10 bg-gray-50 flex flex-col items-center py-8 px-4 lg:px-16">
        <div className="max-w-5xl w-full bg-white shadow-md rounded-lg p-6 lg:p-12">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold text-gray-800">
              Welcome, {profile.name}
            </h1>
            <p className="text-gray-600">
              Informasi mengenai profil dan preferensi kamu di seluruh layanan
              <span className="font-bold text-cyan-500 ml-1">E-</span>Lope
            </p>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Navigation */}
            <div className="w-full lg:w-1/4">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h2 className="text-lg font-medium mb-4">Navigasi Profil</h2>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="#"
                      className="block text-cyan-500 font-medium hover:underline"
                    >
                      Profil Saya
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block text-gray-700 hover:text-cyan-500 hover:underline"
                    >
                      Kelas yang di ikuti
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Profile Form */}
            <div className="w-full lg:w-3/4">
              <form className="space-y-6">
                {/* Nama & Tanggal Lahir */}
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="w-full">
                    <label className="block text-gray-700 mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                      placeholder="Nama Lengkap"
                      defaultValue={profile.name}
                    />
                  </div>
                  <div className="w-full">
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input
                      type="text"
                      className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                      placeholder="Email"
                      defaultValue={profile.email}
                    />
                  </div>
                </div>

                {/* Gender & No HP */}
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="w-full">
                    <label className="block text-gray-700 mb-2">Gender</label>
                    <select className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-cyan-500 focus:outline-none">
                      <option value="Laki-laki">Laki-laki</option>
                      <option value="Perempuan">Perempuan</option>
                    </select>
                  </div>
                  <div className="w-full">
                    <label className="block text-gray-700 mb-2">No. HP</label>
                    <input
                      type="text"
                      className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                      placeholder="No. HP"
                    />
                  </div>
                </div>

                {/* Peluang & CV */}
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="w-full">
                    <label className="block text-gray-700 mb-2">
                      Peluang yang Dicari
                    </label>
                    <input
                      type="text"
                      className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                      placeholder="Silahkan pilih salah satu atau ketik langsung di sini.."
                    />
                  </div>
                  <div className="w-full">
                    <label className="block text-gray-700 mb-2">
                      Link CV / Profil LinkedIn
                    </label>
                    <input
                      type="text"
                      className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                      placeholder="https://drive.google.com/..."
                    />
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <button
                    type="button"
                    className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition"
                  >
                    Ubah Email
                  </button>
                  <button
                    type="button"
                    className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition"
                  >
                    Ubah Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
