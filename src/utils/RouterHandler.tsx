import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Elearning from "../pages/Elearning";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Course from "../pages/Course";
import CourseCategory from "../pages/CourseDetail";
import UbahPassword from "../pages/UbahPassword";

function RouterHandler() {
  const token = localStorage.getItem("token");
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/ubah-password" element={<UbahPassword />} />
      <Route path="/e-learning" element={<Elearning />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/e-learning/:id/course" element={<Course />} />
      <Route
        path="/e-learning/:id/course-detail"
        element={<CourseCategory />}
      />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
      <Route
        path="*"
        element={<Navigate to={token ? "/" : "/login"} replace />}
      />
    </Routes>
  );
}

export default RouterHandler;
