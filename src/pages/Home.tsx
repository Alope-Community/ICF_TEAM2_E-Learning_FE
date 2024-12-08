import { ToastContainer } from "react-toastify";
import Accordion from "../commponents/Accordion";
import Content from "../commponents/Content";
import Footer from "../commponents/Footer";
import Learning from "../commponents/Learning";
import Navbar from "../commponents/Navbar";
import Materi from "../commponents/Materi";

const Home = () => {
  return (
    <div>
      <div>
        <ToastContainer></ToastContainer>
        <Navbar></Navbar>
        <Content
          contentHead="E-lope"
          subContent="Efecctive Learning Online Platform For Everyone"
          description="Sebuah platform pembelajaran online yang dirancang dengan baik untuk memastikan setiaporang bisa belajar secara efektif,kapan pun,dimana pun mereka mau."
          imageSrc="/img/lope.png"
          idSection="#cource"
          buttonLink=""
          textButton="Lihat Selengkapnya"
        ></Content>
        <Materi></Materi>
        <Learning></Learning>
        <Accordion></Accordion>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
