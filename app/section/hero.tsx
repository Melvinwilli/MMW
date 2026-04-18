import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col items-center mt-10">
      <div className="w-44 h-44 rounded-full overflow-hidden">
        <Image
          src="/20.-Profil-WA-Minimalis.webp"
          alt="face"
          width={200}
          height={200}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <h1 className="text-xl sm:text-3xl font-bold mt-5 tracking-tighter">
        👋Melvin🚀
      </h1>
      <p className="text-center w-full max-w-md mt-5">
        Halo, nama saya Marcellino Melvin Willis atau biasa dipanggil Melvin
        saya seorang pelajar yang mengambil jurusan Rekayasa Peragkta Lunak,
        saya suka membuat game, membuat web, dan bermain game online
      </p>
    </div>
  );
}