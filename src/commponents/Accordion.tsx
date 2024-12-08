import React, { useState } from "react";

interface AccordionItemProps {
  question: string;
  answer: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 max-md:px-3.5">
      <div
        className={`w-full border rounded-lg overflow-hidden ${
          isOpen ? "shadow-md bg-gray-100" : "bg-white"
        }`}
      >
        {/* Button yang terintegrasi dengan card */}
        <button
          className="w-full text-left flex items-center justify-between p-4 font-medium text-gray-800 hover:bg-gray-50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{question}</span>
          <span>{isOpen ? "▲" : "▼"}</span>
        </button>

        {/* Konten Jawaban */}
        {isOpen && (
          <div className="p-4 bg-white border-t">
            <p className="text-gray-600">{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Accordion: React.FC = () => {
  const faqData = [
    {
      question: "Apa itu E-Lope?",
      answer:
        "E-Lope adalah singkatan dari Effective Learning Online Platform for Everyone. Platform ini dirancang untuk mendukung pembelajaran yang efektif, fleksibel, dan dapat diakses oleh semua orang kapan saja dan di mana saja.",
    },
    {
      question: "Siapa yang bisa menggunakan E-Lope?",
      answer:
        "E-Lope dirancang untuk semua orang, mulai dari pelajar, mahasiswa, profesional, hingga siapa saja yang ingin meningkatkan keterampilan dan pengetahuan mereka melalui pembelajaran online.",
    },
    {
      question: "Apa saja fitur utama yang disediakan oleh E-Lope?",
      answer: `
        - Kelas Online Terstruktur: Materi pembelajaran yang disusun oleh para ahli.
        - Interaksi Real-Time: Fitur tanya-jawab dan diskusi langsung dengan pengajar.
        - Fleksibilitas Akses: Dapat diakses melalui komputer atau perangkat mobile.
      `,
    },
    {
      question: "Bagaimana cara mendaftar di E-Lope?",
      answer:
        "Pendaftaran dapat dilakukan melalui: Mengunjungi situs resmi E-Lope. \n2. Klik tombol 'Daftar'. \n3. Isi formulir pendaftaran dengan informasi yang diperlukan. \n4. Verifikasi email Anda, dan akun akan langsung aktif.",
    },
    {
      question: "Apakah E-Lope gratis?",
      answer: `E-Lope menyediakan dua jenis akses:
        Akses Gratis: Memberikan akses ke materi dasar dan kursus tertentu tanpa biaya.`,
    },
  ];

  return (
    <div className="max-w-4xl mb-20 mx-auto lg:mt-4">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
        Yang Sering Ditanyakan
      </h2>
      {faqData.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
};

export default Accordion;
