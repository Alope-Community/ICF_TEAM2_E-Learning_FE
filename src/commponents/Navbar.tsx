import { IconMenu2, IconX } from "@tabler/icons-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../utils/Api";
import { useAuth } from "../auth/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  function openMenu() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  const token = localStorage.getItem("token");
  const [isLoggedIn] = useState({
    token: token ? token : null,
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const navigate = useNavigate();
  const { clearToken } = useAuth();

  const [profile, setProfile] = useState({
    name: "",
    email: "",
  });

  if (isLoggedIn.token) {
    useEffect(() => {
      axios
        .request({
          url: api + "settings/profile",
          method: "GET",
          headers: {
            Authorization: `Bearer ${isLoggedIn.token}`,
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
        .catch(() => {
          return null;
        });
    }, [isLoggedIn.token]);
  }
  // console.log(isLoggedIn);

  const handleLogout = () => {
    axios
      .request({
        url: api + "auth/logout",
        method: "GET",
        headers: {
          Authorization: `Bearer ${isLoggedIn.token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((response) => {
        // console.log(response);
        toast.success("Log out Berhasil !", {
          position: "top-right",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        clearToken();
        localStorage.removeItem("token");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      })
      .catch((error) => {
        toast.error(error.response?.data?.message, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <section>
      <ToastContainer />

      <div
        id="nav"
        className="w-full lg:px-28 py-3 flex items-center justify-between backdrop-blur-lg fixed top-0 z-50 "
      >
        <div className="flex ml-4 opacity-100 items-center gap-3">
          <img
            src="/img/lope.png"
            alt=""
            className="w-10 rounded-full lg:w-16"
          />
          <h1 className="font-bold whitespace-nowrap text-cyan-500 lg:text-3xl text-2xl">
            E-<span className="text-black">Lope</span>
          </h1>
        </div>
        <div className="items-center flex">
          <div className="hidden lg:flex items-center gap-14 mt-2 text-zinc-900 font-semibold">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "text-zinc-800 after:content-[''] after:bottom-0 after:h-[5px] after:bg-cyan-500 after:absolute after:rounded-full relative pb-2 hover:after:w-[5px] active:after:w-[15px] after:transition-all after:duration-500 after:left-1/2 after:-translate-x-1/2 after:w-full after:left-0 after:right-0 after:transition-all after:duration-500"
                  : "text-zinc-800  after:content-[''] after:bottom-0 after:h-[5px] after:bg-yelloe-400 after:absolute after:rounded-full relative pb-2 hover:after:w-[5px] active:after:w-[15px] after:transition-all after:duration-500 after:left-1/2 after:-translate-x-1/2"
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/e-learning"}
              className={({ isActive }) =>
                isActive
                  ? "text-zinc-800 after:content-[''] after:bottom-0 after:h-[5px] after:bg-cyan-500 after:absolute after:rounded-full relative pb-2 hover:after:w-[5px] active:after:w-[15px] after:transition-all after:duration-500 after:left-1/2 after:-translate-x-1/2 after:w-full after:left-0 after:right-0 after:transition-all after:duration-500"
                  : "text-zinc-800  after:content-[''] after:bottom-0 after:h-[5px] after:bg-yelloe-400 after:absolute after:rounded-full relative pb-2 hover:after:w-[5px] active:after:w-[15px] after:transition-all after:duration-500 after:left-1/2 after:-translate-x-1/2"
              }
            >
              E-learning
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                isActive
                  ? "text-zinc-800 after:content-[''] after:bottom-0 after:h-[5px] after:bg-cyan-500 after:absolute after:rounded-full relative pb-2 hover:after:w-[5px] active:after:w-[15px] after:transition-all after:duration-500 after:left-1/2 after:-translate-x-1/2 after:w-full after:left-0 after:right-0 after:transition-all after:duration-500"
                  : "text-zinc-800  after:content-[''] after:bottom-0 after:h-[5px] after:bg-yelloe-400 after:absolute after:rounded-full relative pb-2 hover:after:w-[5px] active:after:w-[15px] after:transition-all after:duration-500 after:left-1/2 after:-translate-x-1/2"
              }
            >
              Contact
            </NavLink>
          </div>
          {isLoggedIn.token ? (
            <div className="relative ml-36">
              <button
                onClick={toggleDropdown}
                className="lg:flex items-center hidden justify-center w-10 h-10 rounded-full bg-gray-300 text-black font-bold"
              >
                {profile.name.charAt(0)}
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg py-2 w-48">
                  <div className="px-4 py-2 border-b">
                    <h4 className="font-bold text-gray-800">{profile.name}</h4>
                    <p className="text-sm text-gray-500 truncate">
                      {profile.email}
                    </p>
                  </div>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Profil
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="lg:ml-32">
              <Link
                to="/login"
                className="lg:flex hidden bg-cyan-500 py-2.5 px-5 rounded-lg font-bold text-white whitespace-nowrap"
              >
                Sign-In
              </Link>
            </div>
          )}
        </div>

        {/* tampilan mobile */}
        <div className="relative lg:hidden mt-2 px-12">
          {isOpen ? (
            <>
              <button onClick={openMenu} className="text-black  ">
                <IconX></IconX>
              </button>
              <div className="top-8 absolute right-2 bg-white z-20 border border-zinc-400 rounded-lg shadow-lg px-3 py-2">
                {isLoggedIn.token ? (
                  <div className="border-b-2 pb-3 flex items-center gap-4">
                    <button className="lg:flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 text-black font-bold">
                      {profile.name.charAt(0)}
                    </button>
                    <div className="flex flex-col items-start">
                      <h4 className="font-bold text-gray-800">
                        {profile.name}
                      </h4>
                      <p className="text-ss">{profile.email}</p>
                    </div>
                  </div>
                ) : (
                  <div className="border-b-2 pb-3 flex items-center gap-4"></div>
                )}
                <div className="flex flex-col justify-center items-center gap-2 py-2 px-4">
                  <NavLink to="/" className="text-zinc-800">
                    Home
                  </NavLink>
                  <NavLink to="/e-learning" className="text-zinc-800">
                    E-Learning
                  </NavLink>
                  <NavLink to="/contact" className="text-zinc-800">
                    Contact
                  </NavLink>

                  {isLoggedIn ? (
                    <>
                      <NavLink to="/profile" className="text-zinc-800">
                        Profile
                      </NavLink>
                      <button
                        onClick={handleLogout}
                        className="bg-cyan-500 py-2 px-5 rounded-lg font-bold text-white whitespace-nowrap"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <Link
                      to="/login"
                      className="bg-cyan-500 py-2 px-5 rounded-lg font-bold text-white whitespace-nowrap"
                    >
                      Sign-In
                    </Link>
                  )}
                </div>
              </div>
            </>
          ) : (
            <button onClick={openMenu} className="text-black ">
              <IconMenu2></IconMenu2>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
