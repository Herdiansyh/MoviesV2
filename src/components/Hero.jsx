// src/components/Hero.jsx

export default function Hero() {
  return (
    <section
      className="relative h-[500px] flex items-end justify-between p-10 bg-cover bg-center"
      style={{ backgroundImage: "url('/img/after-school-duty.jpg')" }}
    >
      <div className="bg-gradient-to-b from-transparent to-[#1a1a1a] absolute inset-0"></div>
      <div className="relative max-w-md z-10">
        <h1 className="text-3xl mb-2">Duty After School</h1>
        <p className="mb-5 text-sm leading-relaxed">
          Sebuah benda tak dikenal mengambil alih langit dan kehidupan manusia
          di Bumi berubah. Tentara bergantung pada para siswa untuk melawan
          benda misterius.
        </p>
        <div className="flex items-center gap-4">
          <button className="bg-blue-900 lg:px-6 hover:cursor-pointer hover:bg-blue-800 lg:py-3 px-3 py-1 text-sm lg:text-lg  rounded-full text-white">
            Mulai
          </button>
          <button className="bg-gray-700 border hover:cursor-pointer hover:bg-gray-600 border-gray-500 lg:py-3 px-3 py-1 text-sm lg:text-lg rounded-full text-white">
            + Selengkapnya
          </button>
          <span className="border border-white rounded-full lg:px-3 lg:py-2 px-2 py-1 text-sm">
            18+
          </span>
        </div>
      </div>
      <div className="absolute lg:top-105 lg:right-10 top-107 right-8 border border-white rounded-full p-2 flex items-center z-10">
        <img
          src="/img/volume.png"
          alt="Volume control"
          className="lg:w-5 w-4"
        />
      </div>
    </section>
  );
}
