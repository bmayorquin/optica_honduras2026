'use client';

import Image from "next/image";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function InnovacionPage() {
  return (
    <main className="min-h-screen bg-gray-100">

      {/* HERO */}
      <section className="bg-red-600 text-white text-center py-16 px-6">
        <h2 className="text-4xl font-bold mb-4">
          Innovación y Respuestas
        </h2>
        <p className="max-w-2xl mx-auto text-lg">
          Conoce nuestras iniciativas, alianzas estratégicas y respuestas a las preguntas más frecuentes de nuestros clientes.
        </p>
      </section>

      {/* CONTENIDO / CARDS */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">

        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-red-600 mb-3">
            Tecnología
          </h3>
          <p className="text-gray-600 mb-2">
            Implementamos herramientas digitales de vanguardia en nuestros servicios ópticos, incluyendo sistemas de diagnóstico avanzado y software para seguimiento de pedidos.
          </p>
          <p className="text-gray-600">
            Nuestro equipo utiliza tecnologías innovadoras para garantizar precisión en la fabricación de lentes y eficiencia en la atención al cliente, ofreciendo una experiencia más rápida y confiable.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-red-600 mb-3">
            Alianzas
          </h3>
          <p className="text-gray-600 mb-2">
            Contamos con alianzas estratégicas con marcas líderes del sector óptico para ofrecer productos de alta calidad y promociones exclusivas a nuestros clientes.
          </p>
          <p className="text-gray-600">
            Estas colaboraciones nos permiten mantenernos actualizados en tendencias, tecnologías y garantizar la disponibilidad de los mejores productos del mercado.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-red-600 mb-3">
            Preguntas Frecuentes
          </h3>
          <p className="text-gray-600 mb-2">
            Aquí resolvemos las dudas más comunes de nuestros clientes sobre productos, servicios, envíos, pagos y garantías.
          </p>
          <p className="text-gray-600">
            Nuestro objetivo es brindar claridad y seguridad en cada compra, asegurando que cada cliente conozca todas las opciones disponibles y políticas de la tienda.
          </p>
        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-red-200 text-white py-10 px-6 mt-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-6">

          <div className="flex items-center gap-4">
            <Image
              src="/logovector.png"
              alt="Unilen"
              width={140}
              height={60}
            />
            <p className="text-2xl font-bold">
              © {new Date().getFullYear()} Unilen Óptica
            </p>
          </div>

          <div className="flex gap-6 items-center text-4xl font-extrabold">
            <a href="https://wa.me/50487954789" className="text-green-500">
              <FaWhatsapp />
            </a>
            <a href="https://www.facebook.com/UnilenOptica/?locale=es_LA" className="text-blue-700">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/UnilenOptica/" className="text-pink-500">
              <FaInstagram />
            </a>
            <a href="https://twitter.com/UnilenOptica" className="text-blue-400">
              <FaTwitter />
            </a>
          </div>

          <div className="text-2xl font-bold text-center">
            Tel: 8795-4789
          </div>

        </div>
      </footer>

    </main>
  );
}