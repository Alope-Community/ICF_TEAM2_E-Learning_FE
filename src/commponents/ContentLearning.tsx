import React from "react";

const ContentLearning: React.FC = () => {
  return (
    <div className="lg:mt-44 mt-28 justify-center flex flex-wrap items-center px-6 lg:px-20">
      {/* Konten */}
      <div className=" w-full self-center lg:w-1/2 text-zinc-950">
        <h1 className="text-base font-semibold md:text-xl lg:text-2xl">
          Platform Belajar Online Terbaik
        </h1>
        <h2 className="font-medium text-lg mb-4 mt-2 lg:text-2xl">
          Tingkatkan kemampuan Anda kapan saja, di mana saja!
        </h2>
        <p className="font-medium leading-relaxed mb-8 text-zinc-950 lg:text-lg">
          Dengan platform e-learning kami, Anda dapat mengakses berbagai materi
          pelajaran, kursus online, dan mentor ahli yang siap membantu Anda
          mencapai tujuan belajar.
        </p>
        <a
          href="#courses"
          className="text-base font-semibold text-primary text-white bg-cyan-500 py-3 px-8 rounded-full hover:shadow-lg hover:bg-primary hover:text-white transition duration-300 ease-in-out"
        >
          Jelajahi Kursus
        </a>
      </div>
      {/* Gambar Ilustrasi */}
      <div className="hidden lg:block lg:w-1/2 lg:pl-10">
        <img
          src="/img/uniku.png"
          alt="E-Learning Illustration"
          className="w-1/2 mx-auto lg:ml-auto"
        />
      </div>
    </div>
  );
};

export default ContentLearning;
