import Footer from "../commponents/Footer";
import Navbar from "../commponents/Navbar";

const Contact = () => {
  return (
    <>
        <Navbar></Navbar>
      <div className="bg-gray-50 min-h-screen flex items-center justify-center px-4 py-10">
        <div className="max-w-4xl w-full bg-white lg:w-1/2 lg:mt-10 mt-6 shadow-lg rounded-lg p-8">
          {/* Header */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-6">
            Bergabung Menjadi Mentor Alope!
          </h1>
          <p className="text-gray-600 text-center mb-10">
            Apakah Anda memiliki keahlian khusus dan ingin berbagi ilmu? Jadilah
            bagian dari mentor kami dengan mengisi formulir berikut.
          </p>

          {/* Form */}
          <form className="space-y-6">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Nama Lengkap
              </label>
              <input
                type="text"
                id="name"
                placeholder="Masukkan nama lengkap Anda"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Masukkan alamat email Anda"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                required
              />
            </div>

            {/* Message Input */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Pesan
              </label>
              <textarea
                id="message"
                placeholder="Ceritakan sedikit tentang keahlian Anda dan alasan ingin bergabung..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 h-32 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-cyan-500 text-white font-medium px-4 py-3 rounded-lg hover:bg-cyan-600 transition duration-300"
              >
                Kirim Formulir
              </button>
            </div>
          </form>

          {/* Contact Info */}
          <div className="mt-10 text-center">
            <p className="text-gray-600 text-sm">
              Jika Anda memiliki pertanyaan, hubungi kami melalui{" "}
              <a
                href="mailto:support@example.com"
                className="text-cyan-500 font-medium hover:underline"
              >
                support@example.com
              </a>{" "}
              atau telepon{" "}
              <a
                href="tel:+628123456789"
                className="text-cyan-500 font-medium hover:underline"
              >
                +62 812-3456-789
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Contact;
