// import React from "react";
// import ContentLearning from "../commponents/ContentLearning";
import Navbar from "../commponents/Navbar";
import Content from "../commponents/Content";
import Program from "../commponents/Program";
import Footer from "../commponents/Footer";
import CardGrid from "../commponents/CardGrid";

const Elearning = () => {
  return (
    <>
      <Navbar></Navbar>
      {/* <Content
        contentHead="E-learning"
        subContent=""
        description="Akses semua materi. Lebih dari sekadar nonton rekaman. Belajar fleksibel via • Video Materi • Case Study & Praktik  • Komunitas."
        imageSrc="/headers/head-learning.png"
        // sizeImg=""
        idSection="#cource"
        buttonLink=""
        textButton="Lihat Selengkapnya"
      ></Content> */}
      <Program />
      <CardGrid></CardGrid>
      <Footer />
    </>
  );
};

export default Elearning;
