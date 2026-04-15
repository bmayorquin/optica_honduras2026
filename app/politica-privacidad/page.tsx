"use client";

import Image from "next/image";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function PoliticaPrivacidadPage() {
  return (
    <main className="min-h-screen bg-gray-100">

      {/* HERO */}
      <section className="bg-red-600 text-white text-center py-16 px-6">
        <h2 className="text-4xl font-bold mb-4">
          Política de Privacidad
        </h2>
        <p className="max-w-2xl mx-auto text-lg">
          En Unilen Óptica respetamos tu privacidad. Esta política detalla cómo
          recopilamos, usamos y protegemos tus datos personales al utilizar nuestra plataforma.
        </p>
      </section>

      {/* CONTENIDO */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">

        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-red-600 mb-3">
            Información que recopilamos
          </h3>
          <p className="text-gray-600">
            Recopilamos información personal que nos proporcionas directamente,
            como tu nombre, correo electrónico, número de teléfono y datos de pago
            al realizar compras o registrarte en nuestra plataforma.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-red-600 mb-3">
            Uso de la información
          </h3>
          <p className="text-gray-600">
            La información recopilada se utiliza para procesar pedidos,
            mejorar la experiencia del usuario, enviar promociones y mantener
            comunicación relevante sobre nuestros productos y servicios.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-red-600 mb-3">
            Protección de datos
          </h3>
          <p className="text-gray-600">
            Implementamos medidas de seguridad técnicas y organizativas
            para proteger tus datos personales contra accesos no autorizados,
            pérdidas, alteraciones o divulgación.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-red-600 mb-3">
            Compartir información
          </h3>
          <p className="text-gray-600">
            No vendemos, alquilamos ni compartimos tus datos personales con terceros
            fuera de lo necesario para procesar pedidos o cumplir con la ley.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-red-600 mb-3">
            Cookies y tecnologías similares
          </h3>
          <p className="text-gray-600">
            Utilizamos cookies para mejorar la navegación y personalizar contenido.
            Puedes administrar tu consentimiento en cualquier momento desde tu navegador.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-red-600 mb-3">
            Derechos del usuario
          </h3>
          <p className="text-gray-600">
            Puedes solicitar acceso, corrección o eliminación de tus datos personales
            contactándonos directamente a través de nuestros canales oficiales.
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
            <h3 className="font-bold text-red-600 text-2xl">Tegucigalpa</h3>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow text-center">
            <h3 className="font-bold text-red-600 text-2xl">San Pedro Sula</h3>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow text-center">
            <h3 className="font-bold text-red-600 text-2xl">Choloma</h3>
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