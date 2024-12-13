import React, { useContext, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import withAuthProtection from "../hoc/withAuthProtection";
// import { AuthContext } from "../auth/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  // const { login } = useContext(AuthContext);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/auth/login",
        {
          email,
          password,
        }
      );
      const token = response.data.data.token;

      toast.success(response.data.message, {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      localStorage.setItem("token", token);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Login gagal!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.error(err);
    }
  };

  const tooglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div className="flex w-full py-6 justify-center h-screen lg:gap-28 items-center">
      {/* Left Side */}
      <div className="hidden lg:flex h-full w-full mx-10 bg-gradient-to-tr rounded-xl bg-white border-2 shadow-lg items-center justify-center">
        <div className="text-gray-700 text-center">
          <img
            src="/headers/login.png"
            alt="Illustration"
            className="mx-auto w-full ml-6"
          />
          <h1 className="text-4xl font-bold mt-5">Selamat Datang</h1>
          <p className="mt-3">Masuk ke E-Lope dan kelola akun Anda</p>
          <p className="text-gray-600 mt-3">
            Kembali Ke{" "}
            <span
              className="text-cyan-500 hover:underline cursor-pointer"
              onClick={() => navigate("/")}
            >
              Halaman Utama
            </span>
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="lg:mr-52 lg:px-0  py-6 px-6  w-full">
        <div>
          <h3 className="text-2xl font-semibold text-gray-700 mb-2">
            Masuk ke <span className="text-cyan-500">E-</span>Lope
          </h3>
          <p className="mb-8 text-slate-600 ">
            Silahkan masukan informasi akun kamu.
          </p>
          <div className="items-center content-center">
            <form className="item-center justify-center" onSubmit={handleLogin}>
              <div className="mb-5">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Masukkan email"
                  className="peer w-full px-4 py-3 border rounded-lg focus:ring-1 focus:ring-cyan-500 focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4 focus-within:ring-cyan-500 flex items-center gap-3 peer w-full px-4 py-3 border rounded-lg focus:ring-1 focus:ring-cyan-500 focus:outline-none">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukkan password"
                  className="w-full outline-none "
                  required
                />
                <button type="button" onClick={tooglePassword}>
                  {/* <IconEye></IconEye> */}{" "}
                  {showPassword ? (
                    <IconEyeOff></IconEyeOff>
                  ) : (
                    <IconEye></IconEye>
                  )}
                </button>
              </div>
              <button
                type="submit"
                className="w-full bg-cyan-500 text-white py-3 rounded-lg hover:bg-cyan-600 transition"
              >
                Masuk
              </button>
            </form>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Belum punya akun?{" "}
              <span
                className="text-cyan-500 hover:underline cursor-pointer"
                onClick={() => navigate("/register")}
              >
                Daftar sekarang
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default Login;
