import Image from "next/image";
import { useState, useEffect } from "react";

export default function PromoCarousel() {
  const images = [
    "/promos/optica1.jpg",
    "/promos/optica2.jpg",
    "/promos/optica3.jpg",
    "/promos/optica4.jpg",
    "/promos/optica5.jpg",
    "/promos/optica6.jpg",
    "/promos/optica7.jpg",
    "/promos/optica8.jpg",
    "/promos/optica9.jpg",
    "/promos/optica10.jpg",
    "/promos/optica11.jpg",
    "/promos/optica12.jpg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // cambia cada 3 segundos
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full max-w-6xl mx-auto border-4 border-red-600 rounded-3xl p-2">
      {/* Imagen principal */}
      <Image
        src={images[current]}
        alt={`Imagen ${current + 1}`}
        width={400}
        height={400}
        className="rounded-2xl object-cover w-full h-[350px]"
      />

      {/* Indicadores circulares */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              current === index ? "bg-red-600" : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}