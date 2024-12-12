import { Link, useNavigate } from "react-router-dom";
import Navbar from "../commponents/Navbar";
import axios from "axios";
import api from "../utils/Api";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
// import { IconEye, IconEyeOff } from "@tabler/icons-react";

const UbahPassword = () => {
  const navigate = useNavigate();
  const [old_password, setOldPassword] = useState("");
  const [new_password, setNewPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  // const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      old_password,
      new_password,
      confirm_password,
    };

    const token = localStorage.getItem("token");
    axios
      .request({
        url: api + "settings/change-password",
        data: data,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
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

  // const tooglePassword = () => {
  //   setShowPassword((prev) => !prev);
  // };

  return (
    <>
      <Navbar />

      <>
        <div className="lg:mt-20 min-h-screen mt-10 bg-gray-50 flex flex-col items-center py-8 px-4 lg:px-16">
          <div className="max-w-5xl w-[600px] bg-white shadow-md rounded-lg p-6 lg:p-12">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-semibold text-gray-800">
                Ubah Password
              </h1>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              <div className="w-full lg:w-1/2">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h2 className="text-lg font-medium mb-4">Navigasi Profil</h2>
                  <ul className="space-y-4">
                    <li>
                      <Link
                        to="/profile"
                        className="block text-gray-700 hover:text-cyan-500 hover:underline"
                      >
                        Profil Saya
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/ubah-password"
                        className="block text-cyan-500 font-medium hover:underline"
                      >
                        Ubah Password
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-6">
                    <div className="w-full">
                      <label className="block text-gray-700 mb-2">
                        Password Lama
                      </label>
                      <input
                        type="password"
                        className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                        value={old_password}
                        onChange={(e) => setOldPassword(e.target.value)}
                        placeholder="Masukan password lama"
                      />

                      {/* <button type="button" onClick={tooglePassword}>
                        {showPassword ? (
                          <IconEyeOff></IconEyeOff>
                        ) : (
                          <IconEye></IconEye>
                        )}
                      </button> */}
                    </div>
                    <div className="w-full">
                      <label className="block text-gray-700 mb-2">
                        Password Baru
                      </label>
                      <input
                        type="password"
                        className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                        value={new_password}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Masukan Password baru"
                      />
                    </div>
                    <div className="w-full">
                      <label className="block text-gray-700 mb-2">
                        Konfirmasi Password
                      </label>
                      <input
                        type="password"
                        className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                        value={confirm_password}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Konfirmasi Password baru"
                      />
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="submit"
                      className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition"
                    >
                      Update Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </>
    </>
  );
};

export default UbahPassword;
