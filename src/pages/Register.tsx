import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import api from "../utils/Api";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      name,
      email,
      password,
    };

    axios
      .request({
        url: api + "auth/register",
        method: "POST",
        data: data,
        headers: {
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
          progress: undefined,
        });

        setTimeout(() => {
          navigate("/login");
        }, 1000);
      })
      .catch((err) => {
        // console.log();
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
            <form
              className="item-center justify-center"
              onSubmit={handleSubmit}
            >
              <div className="mb-5">
                <input
                  type="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Masukkan Nama"
                  className="peer w-full px-4 py-3 border rounded-lg focus:ring-1 focus:ring-cyan-500 focus:outline-none"
                  required
                />
              </div>
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
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukkan password"
                  className="w-full outline-none "
                  required
                />
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
                onClick={() => navigate("/login")}
              >
                Login
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

export default Register;
