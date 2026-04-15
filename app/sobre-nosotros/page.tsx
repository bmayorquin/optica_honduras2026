"use client";

import Image from "next/image";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function SobreNosotrosPage() {
  return (
    <main className="min-h-screen bg-gray-100">

      {/* HERO */}
      <section className="bg-red-600 text-white text-center py-16 px-6">
        <h1 className="text-4xl font-bold mb-4">Sobre Nosotros</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Conoce nuestra misión, visión y oportunidades de empleo.
        </p>
      </section>

      {/* Misión */}
      <section id="mision" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-red-600 mb-4 text-center mx-auto">Misión</h2>
        <p className="text-gray-700">
          Nuestra misión es reforzar la autoestima de nuestros pacientes,
          buscando no solo mejorar la visión, sino también transformar la
          manera en que las personas se ven y se sienten consigo mismas.
        </p>
      </section>

      {/* Visión */}
      <section id="vision" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-red-600 mb-4 text-center mx-auto">Visión</h2>
        <p className="text-gray-700">
          Nuestra visión es ser la óptica de referencia en Honduras, 
          ofreciendo productos y servicios innovadores con la mejor atención.
        </p>
      </section>

      {/* Bolsa de Empleo */}
<section id="bolsa" className="max-w-6xl mx-auto px-6 py-12">
  <h2 className="text-3xl font-bold text-red-600 mb-4 text-center mx-auto">Bolsa de Empleo</h2>
  <p className="text-gray-700 mb-6 text-center">
    Si quieres unirte a nuestro equipo, completa el formulario y envíanos tu CV.
  </p>

  <form className="bg-white p-6 rounded-xl shadow-lg grid md:grid-cols-2 gap-6">
    <div className="flex flex-col">
      <label className="font-semibold mb-2">Nombre(s) *</label>
      <input type="text" placeholder="Tu nombre" className="border border-gray-300 rounded p-2"/>
    </div>

    <div className="flex flex-col">
      <label className="font-semibold mb-2">Apellido(s) *</label>
      <input type="text" placeholder="Tus apellidos" className="border border-gray-300 rounded p-2"/>
    </div>

    <div className="flex flex-col">
      <label className="font-semibold mb-2">Email *</label>
      <input type="email" placeholder="correo@ejemplo.com" className="border border-gray-300 rounded p-2"/>
    </div>

    <div className="flex flex-col">
      <label className="font-semibold mb-2">Teléfono / Celular *</label>
      
      <input
        type="tel"
        placeholder=""
        maxLength={8}
        className="border border-gray-300 rounded p-2"
      />
    </div>

    <div className="flex flex-col md:col-span-2">
      <label className="font-semibold mb-2">Dirección</label>
      <input type="text" placeholder="Tu dirección" className="border border-gray-300 rounded p-2"/>
    </div>

    <div className="flex flex-col md:col-span-2">
      <label className="font-semibold mb-2">Información adicional</label>
      <textarea placeholder="Comentarios o información extra" className="border border-gray-300 rounded p-2 h-24"></textarea>
    </div>

    <div className="flex flex-col md:col-span-2">
      <label className="font-semibold mb-2">Envíanos tu Curriculum Vitae (PDF)</label>
      <input
        type="file"
        accept=".pdf"
        className="border border-gray-300 rounded p-2"
      />
    </div>

    <div className="md:col-span-2 flex justify-center">
      <button type="submit" className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
        Enviar
      </button>
    </div>
  </form>

  <p className="text-gray-700 mt-6 text-center">
    O envíanos tu información directamente a: <br/>
    <strong>Email:</strong> contrataciones@unilen.com <br/>
    <strong>Teléfono:</strong> 8795-4789
  </p>
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