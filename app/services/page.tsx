"use client";

import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Services() {
  const router = useRouter();

  const servicios = [
    {
      nombre: "Examen de la vista completo",
      descripcion:
        "Examen completo de la vista con mediciones precisas, detección de posibles problemas visuales y recomendaciones personalizadas para garantizar tu comodidad, salud ocular y calidad de visión a largo plazo.",
    },
    {
      nombre: "Lentes de contacto",
      descripcion:
        "Adaptación y venta de lentes según tu graduación y estilo de vida, con instrucciones de uso para comodidad y salud ocular.",
    },
    {
      nombre: "Armazones y gafas",
      descripcion:
        "Venta de armazones modernos y de marca, cómodos y adaptados a tu estilo.",
    },
    {
      nombre: "Lentes oftálmicos",
      descripcion:
        "Lentes antirreflejantes, fotocromáticos y polarizados para proteger tus ojos y mejorar la visión.",
    },
    {
      nombre: "Reparación y ajuste de gafas",
      descripcion:
        "Ajuste de armazones y reemplazo de piezas para mantener tus gafas cómodas, funcionales y duraderas.",
    },
    {
      nombre: "Accesorios",
      descripcion:
        "Venta de estuches, paños, limpiadores y otros accesorios para mantener tus gafas en perfecto estado.",
    },
  ];

  return (
    <main className="min-h-screen p-10 bg-gray-200">
      
      {/* Botón de volver */}
      <div className="mb-6">
        <button
          onClick={() => router.back()}
          className="bg-gray-300 hover:bg-red-600 text-black hover:text-white py-2 px-4 rounded transition"
        >
           Volver
        </button>
      </div>

      {/* Título */}
      <h1 className="text-4xl font-bold mb-8 text-center">
        Nuestros Servicios
      </h1>

      {/* Grid de servicios */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicios.map((servicio) => (
          <div
            key={servicio.nombre}
            className="group bg-white p-6 rounded-lg shadow 
                       hover:shadow-xl 
                       hover:-translate-y-2 
                       hover:border-b-4 
                       hover:border-red-600 
                       transition-all duration-300 text-center"
          >
            <div className="flex flex-col items-center gap-3 mb-4">
              <FaCheckCircle className="text-2xl text-black group-hover:text-red-600 transition" />
              <h2 className="text-xl font-semibold group-hover:text-red-600 transition">
                {servicio.nombre}
              </h2>
            </div>

            <p className="text-gray-700">{servicio.descripcion}</p>
          </div>
        ))}
      </div>

      {/* Logo */}
      <div className="flex justify-center mt-12">
        <Image
          src="/logovector.png"
          alt="Logo de la Óptica"
          width={250}
          height={140}
          className="object-contain"
        />
      </div>
    </main>
  );
}