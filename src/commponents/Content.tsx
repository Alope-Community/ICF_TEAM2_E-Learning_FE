import React from "react";

interface ContentProps {
  contentHead: string; // Judul utama
  subContent: string; // Sub judul
  description: string; // Deskripsi
  idSection: string; // ID untuk elemen section
  textButton: string; // Teks pada tombol
  buttonLink: string; // URL tujuan tombol
  imageSrc?: string; // URL gambar (opsional)
}

const Content: React.FC<ContentProps> = ({
  contentHead,
  subContent,
  description,
  idSection,
  textButton,
  buttonLink,
  imageSrc,
}) => {
  return (
    <section
      id={idSection}
      className="lg:mt-32 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed", // Parallax effect
      }}
    >
      <div className="lg:mt-32 mt-24 gap-14 justify-center flex flex-wrap items-center px-6 lg:px-20">
        {/* Konten Teks */}
        <div className="w-full self-center lg:w-1/2 text-zinc-950">
          <h1 className="text-2xl font-semibold md:text-xl lg:text-2xl ">
            {contentHead}
          </h1>
          <h2 className="font-medium text-lg mb-4 mt-2 lg:text-xl">
            {subContent}
          </h2>
          <p className="font-medium leading-relaxed mb-8 text-zinc-950 lg:text-lg">
            {description}
          </p>
          <a
            href={buttonLink}
            className="text-base font-semibold text-white bg-cyan-500 py-3 px-8 rounded-full hover:shadow-lg hover:bg-primary hover:text-white transition duration-300 ease-in-out"
          >
            {textButton}
          </a>
        </div>
        {/* Gambar Ilustrasi */}
        {imageSrc && (
          <div className="hidden lg:block lg:w-1/3 lg:pl-10">
            <img
              src={imageSrc}
              alt="E-Learning Illustration"
              className="w-full mx-auto lg:ml-auto"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Content;
