import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../utils/Api";
import { toast, ToastContainer } from "react-toastify";

const Inrolment: React.FC = () => {
  const data = useParams();
  const navigate = useNavigate();
  const [courses, setCourses] = useState();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    axios
      .request({
        url: api + `course-category/${data.id}/enrolment`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((response) => {
        toast.success("Daftar Berhasil", {
          position: "top-right",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        setTimeout(() => {
          navigate(`/e-learning/${data.id}/course`);
        }, 1000);
      })
      .catch((err) => {
        toast.error(err.message, {
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
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <ToastContainer />
        <div className="bg-white rounded-lg shadow-md p-6 max-w-sm w-full md:max-w-md lg:max-w-lg">
          {/* Logo */}
          <div className="text-center">
            <img
              src="/img/lope.png"
              alt="Universitas Kuningan Logo"
              className="mx-auto w-16 h-16"
            />
            <div className="border-t-2">
              <h1 className="text-xl font-bold mt-4">Daftar Course</h1>
              <h2 className="text-lg font-semibold text-cyan-500">E-Lope</h2>
            </div>
          </div>

          {/* Login Form */}
          <div className="mt-6">
            <p className="text-center font-medium text-gray-700">
              Daftar Dengan Akun Anda
            </p>
            <form onSubmit={handleSubmit}>
              <button className="flex items-center justify-center w-full py-3 mt-4 text-gray-700 bg-white-500 hover:bg-slate-100 rounded-lg shadow-md">
                <img
                  src="/img/lope.png"
                  alt="Google Logo"
                  className="w-5 h-5 mr-2"
                />
                <span>E-lope acoount</span>
              </button>
            </form>
          </div>

          {/* Footer */}
          <hr />
          <div className="mt-6 border-t-2 flex justify-center text-sm text-gray-500">
            <div>
              <p className="rounded px-2 py-1 text-center">
                Belum Punya Akun E-lope ?
                <button
                  onClick={() => {
                    navigate("/register");
                  }}
                  className="text-cyan-500"
                >
                  Daftar Sekarang!
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inrolment;
