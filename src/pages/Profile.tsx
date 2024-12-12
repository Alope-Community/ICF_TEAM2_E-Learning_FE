import Navbar from "../commponents/Navbar";
import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import api from "../utils/Api";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Profile = () => {
  const [updateProfile, setUpdateProfile] = useState();
  const isLoggedIn = localStorage.getItem("token")?.toString();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: "",
    email: "",
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      name,
      email,
      gender,
      phone,
    };

    axios
      .request({
        url: api + "settings/update-profil",
        data: data,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${isLoggedIn}`,
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
          progress: undefined,
        });

        setTimeout(() => {
          navigate("/profile");
        }, 1000);
      })
      .catch((err) => {
        // console.log(err)
        toast.error(err.response.data.message, {
          position: "top-right",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

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
          setIsLoading(false);
        })
        .catch((err) => {
          navigate("/");
        });
    }, [isLoggedIn]);
  } else {
    navigate("/");
  }

  return (
    <>
      <Navbar></Navbar>
      {isLoading ? (
        <>
          <p className="text-center text-lg">Loading...</p> // Pesan loading
        </>
      ) : (
        <>
          <div className="lg:mt-20 min-h-screen mt-10 bg-gray-50 flex flex-col items-center py-8 px-4 lg:px-16">
            <div className="max-w-5xl w-full bg-white shadow-md rounded-lg p-6 lg:p-12">
              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="text-2xl font-semibold text-gray-800">
                  Welcome, {profile.name}
                </h1>
                <p className="text-gray-600">
                  Informasi mengenai profil dan preferensi kamu di seluruh
                  layanan
                  <span className="font-bold text-cyan-500 ml-1">E-</span>Lope
                </p>
              </div>

              {/* Main Content */}
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar Navigation */}
                <div className="w-full lg:w-1/4">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h2 className="text-lg font-medium mb-4">
                      Navigasi Profil
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          to="/profile"
                          className="block text-cyan-500 font-medium hover:underline"
                        >
                          Profil Saya
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/ubah-password"
                          className="block text-gray-700 hover:text-cyan-500 hover:underline"
                        >
                          Ubah Password
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Profile Form */}
                <div className="w-full lg:w-3/4">
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Nama & Tanggal Lahir */}
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="w-full">
                        <label className="block text-gray-700 mb-2">
                          Nama Lengkap
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                          placeholder="Nama Lengkap"
                          onChange={(e) =>
                            setName(e ? e.target.value : profile.name)
                          }
                          defaultValue={profile.name}
                        />
                      </div>
                      <div className="w-full">
                        <label className="block text-gray-700 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                          placeholder="Email"
                          defaultValue={profile.email}
                        />
                      </div>
                    </div>

                    {/* Gender & No HP */}
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="w-full">
                        <label className="block text-gray-700 mb-2">
                          Gender
                        </label>
                        <select
                          name="gender"
                          className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                          onChange={(e) => setGender(e.target.value)}
                        >
                          <option value="Laki-laki">Laki-laki</option>
                          <option value="Perempuan">Perempuan</option>
                        </select>
                      </div>
                      <div className="w-full">
                        <label className="block text-gray-700 mb-2">
                          No. HP
                        </label>
                        <input
                          type="number"
                          name="phone"
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                          placeholder="No. HP"
                          defaultValue={profile.phone}
                        />
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4">
                      <button
                        type="submit"
                        className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition"
                      >
                        Update Profile
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
