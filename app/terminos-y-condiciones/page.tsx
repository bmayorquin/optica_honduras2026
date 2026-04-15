"use client";

import Image from "next/image";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-gray-100">

      {/* HERO */}
      <section className="bg-red-600 text-white text-center py-16 px-6">
        <h2 className="text-4xl font-bold mb-4">
          Términos y Condiciones
        </h2>
        <p className="max-w-2xl mx-auto text-lg">
          Al utilizar el sitio web y los servicios de Unilen Óptica, aceptas las
          siguientes condiciones que regulan el uso de nuestra plataforma y
          la compra de productos ópticos.
        </p>
      </section>

      {/* CONTENIDO */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">

        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-red-600 mb-3">
            Información general
          </h3>
          <p className="text-gray-600">
            El contenido de esta aplicación tiene carácter informativo.
            El cliente que utiliza la plataforma de Unilen Óptica reconoce
            y acepta las condiciones y limitaciones de uso del sistema.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-red-600 mb-3">
            Propiedad intelectual
          </h3>
          <p className="text-gray-600">
            Todo el contenido del sitio web incluyendo diseño, imágenes,
            logotipos, código y textos pertenece a Unilen Óptica y está
            protegido por derechos de propiedad intelectual.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-red-600 mb-3">
            Uso de la plataforma
          </h3>
          <p className="text-gray-600">
            La navegación por nuestra tienda online implica la aceptación
            de los términos y condiciones. Unilen Óptica puede modificar
            estos términos en cualquier momento.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-red-600 mb-3">
            Responsabilidad
          </h3>
          <p className="text-gray-600">
            Unilen Óptica no se hace responsable por daños causados por
            fallas técnicas externas, interrupciones del servicio o
            uso indebido de la plataforma.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-red-600 mb-3">
            Privacidad de datos
          </h3>
          <p className="text-gray-600">
            Los datos personales proporcionados por los clientes se
            utilizarán únicamente para procesar pedidos, mejorar el
            servicio y enviar información sobre promociones.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-red-600 mb-3">
            Pagos y precios
          </h3>
          <p className="text-gray-600">
            Todos los precios están indicados en Lempiras e incluyen
            impuestos. Los métodos de pago aceptados son tarjeta de
            crédito, débito o pago en tienda.
          </p>
        </div>

      </section>

      {/* SUCURSALES */}
      <section className="bg-white py-12">
        <h2 className="text-3xl font-bold text-center text-black mb-8">
          Nuestras Sucursales
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 px-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow text-center">
            <h3 className="font-bold text-red-600">Tegucigalpa</h3>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow text-center">
            <h3 className="font-bold text-red-600">San Pedro Sula</h3>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow text-center">
            <h3 className="font-bold text-red-600">Choloma</h3>
          </div>
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