import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
// import Content from "../commponents/Content";
// import Learning from "../commponents/Learning";
// import Footer from "../commponents/Footer";
// import Accordion from "../commponents/Accordion";
// import Card from "../commponents/Card";
import Register from "../pages/Register";
import ContentLearning from "../commponents/ContentLearning";
import Elearning from "../pages/Elearning";
import Profile from "../pages/Profile";
import { AuthProvider } from "../auth/AuthContext";
import withAuthProtection from "../hoc/withAuthProtection";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Video from "../commponents/Video";
import Course from "../pages/Course";
import Inrolment from "../pages/Inrolment";
const ProtectedLogin = withAuthProtection(Login);

function RouterHandler() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/e-learning" element={<Elearning />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/e-learning/:id/course" element={<Course />} />
        <Route path="contact" element={<Contact />} />
        <Route path="video" element={<Video />} />
        <Route path="/e-learning/:id/daftar-course" element={<Inrolment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default RouterHandler;
