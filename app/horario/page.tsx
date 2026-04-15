"use client";

import React from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Horarios() {
  const router = useRouter();

  const tiendas = [
    {
      id: 1,
      nombre: "Unilen - Tegucigalpa Centro",
      direccion: "Av. Ramón Ernesto Cruz, Tegucigalpa",
      horario: "Lunes a Viernes: 9:00 AM – 5:00 PM",
    },
    {
      id: 2,
      nombre: "Unilen - Multiplaza Tegucigalpa",
      direccion: "Centro Comercial Multiplaza",
      horario:
        "Lunes a Sábado: 10:00 AM – 8:00 PM | Domingo: 11:00 AM – 7:00 PM",
    },
    {
      id: 3,
      nombre: "Unilen - San Pedro Sula",
      direccion: "Barrio Guamilito, San Pedro Sula",
      horario:
        "Lunes a Viernes: 8:00 AM – 5:00 PM | Sábado: 8:00 AM – 2:00 PM",
    },
    {
      id: 4,
      nombre: "Unilen - La Ceiba",
      direccion: "Centro de La Ceiba, Atlántida",
      horario: "Lunes a Sábado: 9:00 AM – 6:00 PM",
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
      <h1 className="text-4xl font-bold mb-10 text-center">
        Horarios de Nuestras Tiendas
      </h1>

      {/* Grid de tiendas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {tiendas.map((tienda) => (
          <div
            key={tienda.id}
            className="group bg-white p-6 rounded-lg shadow 
                       hover:shadow-xl 
                       hover:-translate-y-2 
                       hover:border-b-4 
                       hover:border-red-600 
                       transition-all duration-300"
          >
            <h2 className="text-xl font-semibold mb-4 text-center group-hover:text-red-600 transition">
              {tienda.nombre}
            </h2>

            <div className="flex items-center gap-3 mb-3 text-gray-700">
              <FaMapMarkerAlt className="text-red-600" />
              <p>{tienda.direccion}</p>
            </div>

            <div className="flex items-start gap-3 text-gray-700">
              <FaClock className="text-red-600 mt-1" />
              <p>{tienda.horario}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Logo */}
      <div className="flex justify-center mt-16">
        <Image
          src="/logovector.png"
          alt="Logo de Unilen"
          width={250}
          height={140}
          className="object-contain"
        />
      </div>
    </main>
  );
}