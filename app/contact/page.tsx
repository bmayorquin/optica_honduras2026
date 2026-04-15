"use client";

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default function Contact() {
  const router = useRouter();

  return (
    <main className="min-h-screen p-10 bg-gray-200">

      {/* Botón regresar */}
      <div className="mb-6">
        <button
          onClick={() => router.back()}
          className="bg-gray-300 hover:bg-red-600 text-black hover:text-white py-2 px-4 rounded transition"
        >
           Volver
        </button>
      </div>

      <h1 className="text-4xl font-bold mb-8 text-center">
        Contáctanos
      </h1>

      {/* Información de contacto */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

        {/* Teléfono */}
        <div className="group flex flex-col items-center bg-white p-6 rounded-lg shadow 
                        hover:shadow-xl hover:-translate-y-2 
                        hover:border-b-4 hover:border-red-600
                        transition-all duration-300">
          <FaPhone className="text-3xl text-black mb-3 group-hover:text-red-600 transition" />
          <h2 className="font-semibold text-xl mb-1 group-hover:text-red-600 transition">
            Teléfono
          </h2>
          <a href="tel:+50487954789" className="text-gray-700 group-hover:text-red-600 transition">
            +504 8795-4789
          </a>
        </div>

        {/* WhatsApp */}
        <div className="group flex flex-col items-center bg-white p-6 rounded-lg shadow 
                        hover:shadow-xl hover:-translate-y-2 
                        hover:border-b-4 hover:border-red-600
                        transition-all duration-300">
          <FaWhatsapp className="text-3xl text-black mb-3 group-hover:text-red-600 transition" />
          <h2 className="font-semibold text-xl mb-1 group-hover:text-red-600 transition">
            WhatsApp
          </h2>
          <a
            href="https://wa.me/50487954789"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 group-hover:text-red-600 transition"
          >
            Chatea con nosotros
          </a>
        </div>

        {/* Correo */}
        <div className="group flex flex-col items-center bg-white p-6 rounded-lg shadow 
                        hover:shadow-xl hover:-translate-y-2 
                        hover:border-b-4 hover:border-red-600
                        transition-all duration-300">
          <FaEnvelope className="text-3xl text-black mb-3 group-hover:text-red-600 transition" />
          <h2 className="font-semibold text-xl mb-1 group-hover:text-red-600 transition">
            Correo
          </h2>
          <a
            href="mailto:contacto@unilenoptica.com"
            className="text-gray-700 group-hover:text-red-600 transition"
          >
            contacto@unilenoptica.com
          </a>
        </div>

        {/* Dirección */}
        <div className="group flex flex-col items-center bg-white p-6 rounded-lg shadow 
                        hover:shadow-xl hover:-translate-y-2 
                        hover:border-b-4 hover:border-red-600
                        transition-all duration-300">
          <FaMapMarkerAlt className="text-3xl text-black mb-3 group-hover:text-red-600 transition" />
          <h2 className="font-semibold text-xl mb-1 group-hover:text-red-600 transition">
            Dirección
          </h2>
          <p className="text-gray-700 text-center">
            Calle Principal #123, Tegucigalpa, Honduras
          </p>
        </div>

        {/* Horario */}
        <div className="group flex flex-col items-center bg-white p-6 rounded-lg shadow 
                        hover:shadow-xl hover:-translate-y-2 
                        hover:border-b-4 hover:border-red-600
                        transition-all duration-300">
          <h2 className="font-semibold text-xl mb-1 group-hover:text-red-600 transition">
            Horario
          </h2>
          <p className="text-gray-700 text-center">
            Lunes a Viernes: 8:00 AM – 6:00 PM
          </p>
          <p className="text-gray-700 text-center">
            Sábado: 9:00 AM – 2:00 PM
          </p>
        </div>
      </div>

      {/* Formulario */}
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow 
                      hover:shadow-xl hover:border-b-4 hover:border-red-600
                      transition-all duration-300 mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Envíanos un mensaje
        </h2>

        <form className="grid grid-cols-1 gap-6">
          <input
            type="text"
            placeholder="Nombre completo"
            className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
          />

          <input
            type="email"
            placeholder="Correo electrónico"
            className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
          />

          <input
            type="tel"
            placeholder="Teléfono (opcional)"
            className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
          />

          <textarea
            placeholder="Mensaje"
            rows={4}
            className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
          ></textarea>

          <button
            type="submit"
            className="bg-red-600 text-white py-3 rounded hover:bg-black hover:scale-105 transition duration-300 font-semibold"
          >
            Enviar
          </button>
        </form>
      </div>

      {/* Redes sociales */}
      <div className="flex justify-center gap-8 mb-12 text-3xl">
        <a
          href="https://www.facebook.com/UnilenOptica"
          target="_blank"
          rel="noreferrer"
          className="text-black hover:text-red-600 transition"
        >
          <FaFacebookF />
        </a>

        <a
          href="https://www.instagram.com/UnilenOptica"
          target="_blank"
          rel="noreferrer"
          className="text-black hover:text-red-600 transition"
        >
          <FaInstagram />
        </a>

        <a
          href="https://twitter.com/UnilenOptica"
          target="_blank"
          rel="noreferrer"
          className="text-black hover:text-red-600 transition"
        >
          <FaTwitter />
        </a>
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