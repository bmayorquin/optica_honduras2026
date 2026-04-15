'use client';

import Image from "next/image";
import Link from "next/link"; // Importación correcta para navegación
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export default function Home() {
  const [cantidadCarrito, setCantidadCarrito] = useState(0);
  const [usuarioLogueado, setUsuarioLogueado] = useState(false);
  const router = useRouter();

  const marcas = [
    "/marcas/marca1.png", "/marcas/marca2.png", "/marcas/marca3.png",
    "/marcas/marca4.png", "/marcas/marca5.png", "/marcas/marca6.png",
    "/marcas/marca7.png", "/marcas/marca8.png", "/marcas/marca9.png",
    "/marcas/marca10.png", "/marcas/marca11.png", "/marcas/marca12.png",
    "/marcas/marca13.png"
  ];

  const videos = [
    "/videos/video1.mp4", "/videos/video2.mp4", "/videos/video3.mp4",
    "/videos/video4.mp4", "/videos/video5.mp4", "/videos/video6.mp4"
  ];

  useEffect(() => {
    // Importar flowbite solo en el cliente para evitar errores de compilación
    import("flowbite");

    // Sincronizar carrito
    const carrito = JSON.parse(localStorage.getItem("carrito") || "[]");
    setCantidadCarrito(carrito.reduce((acc, p) => acc + (p.cantidad || 1), 0));
    
    // Verificar sesión de usuario
    const usuario = localStorage.getItem("usuario");
    if (usuario) {
      setUsuarioLogueado(true);
    }
  }, []);

  // Función para manejar rutas protegidas
  const manejarNavegacion = (e, ruta, esProtegida) => {
    if (esProtegida) {
      e.preventDefault();
      if (!usuarioLogueado) {
        alert("Por seguridad, inicia sesión para acceder a esta sección.");
        router.push("/login");
      } else {
        router.push(ruta);
      }
    }
  };

  return (
    <main className="min-h-screen bg-white">

      {/* ------------------ Header ------------------ */}
      <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-300 px-4 py-3 md:py-4">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-start">
            <Image src="/logovector.png" alt="Logo" width={140} height={100} className="w-28 md:w-36" />
            <div className="border-l pl-4 border-gray-200">
              <a href="https://wa.me/50487954789" target="_blank" className="flex items-center gap-2 font-bold text-xs md:text-sm hover:text-red-600 transition">
                <FaWhatsapp className="text-green-500 text-lg" /> 8795-4789
              </a>
            </div>
          </div>

          <nav className="flex overflow-x-auto w-full md:w-auto no-scrollbar py-2 gap-2 md:gap-4 justify-start md:justify-center border-t md:border-t-0 border-gray-100">
            {[
              { href: "/", label: "Inicio", protected: false },
              { href: "/appointment", label: "Citas", protected: false },
              { href: "/catalog", label: "Catálogo", protected: true },
              { href: "/services", label: "Servicios", protected: false },
              { href: "/horario", label: "Horarios", protected: false },
              { href: "/contact", label: "Contacto", protected: false },
            ].map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                onClick={(e) => manejarNavegacion(e, item.href, item.protected)}
                className="whitespace-nowrap px-3 py-1 text-xs md:text-sm font-bold text-gray-700 hover:text-red-600 uppercase transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5 sm:gap-6">
            {usuarioLogueado ? (
              <Link href="/mi-cuenta" className="text-xs md:text-sm font-bold text-red-600 hover:text-black transition">Mi Cuenta</Link>
            ) : (
              <Link href="/login" className="text-xs md:text-sm font-bold text-red-600 hover:text-black transition uppercase">Ingresar</Link>
            )}
            <button 
              onClick={(e) => manejarNavegacion(e, "/carrito", true)}
              className="relative cursor-pointer group bg-transparent border-none"
            >
              <AiOutlineShoppingCart className="text-3xl text-gray-800 group-hover:text-red-600 transition" />
              {cantidadCarrito > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-md">
                  {cantidadCarrito}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ------------------ Hero Section ------------------ */}
      <div className="max-w-[1440px] mx-auto px-6 mt-8 md:mt-12 mb-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-10">
          {/* Carrusel Imágenes (Aumentado a 450px de ancho) */}
          <div className="w-full max-w-[480px] lg:w-[420px]">
            <div className="rounded-2xl overflow-hidden shadow-2xl h-[350px] md:h-[450px]">
              <Swiper spaceBetween={0} slidesPerView={1} loop autoplay={{ delay: 3000 }} modules={[Autoplay]} className="h-full">
                {["/promos/optica1.jpg","/promos/optica2.jpg","/promos/optica3.jpg"].map((src, idx) => (
                  <SwiperSlide key={idx}>
                    <Image src={src} alt="Promoción" width={400} height={500} className="w-full h-full object-cover" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className="flex-grow flex flex-col justify-center text-center lg:text-left space-y-6 md:space-y-8">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <h2 className="text-3xl md:text-5xl font-black text-red-600 uppercase leading-tight">
                Miradas que <br className="hidden md:block" /> inspiran confianza
              </h2>
              <p className="text-base md:text-xl text-gray-600 mt-4">
                Inicia sesión para descubrir lentes pensados para resaltar tu estilo y cuidar tu salud visual.
              </p>
            </div>
            <button 
              onClick={(e) => manejarNavegacion(e, "/catalog", true)}
              className="inline-block w-full md:max-w-xs py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition shadow-xl uppercase tracking-widest text-center"
            >
              Ver catálogo
            </button>
          </div>

          <div className="w-full max-w-[400px] lg:w-[350px] flex flex-col">
            <h3 className="text-center font-bold text-gray-400 mb-4 uppercase tracking-[0.2em] text-xs">Experiencia Unilen</h3>
            <div className="rounded-2xl overflow-hidden shadow-2xl h-[350px] md:h-[450px] bg-black">
              <Swiper autoplay={{ delay: 6000 }} pagination={{ clickable: true }} modules={[Autoplay, Pagination]} className="h-full">
                {videos.map((videoSrc, index) => (
                  <SwiperSlide key={index}>
                    <video src={videoSrc} autoPlay muted loop playsInline className="w-full h-full object-cover" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------ Marcas ------------------ */}
      <div className="py-12 bg-gray-50 border-y border-gray-100">
        <h2 className="text-xl font-bold mb-8 text-center uppercase tracking-widest text-gray-400">Nuestras Marcas</h2>
        <div className="overflow-hidden relative">
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {marcas.concat(marcas).map((marca, idx) => (
              <div key={idx} className="flex-shrink-0 w-32 md:w-44 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition">
                <Image src={marca} alt="Marca" width={140} height={70} className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ------------------ Footer (Horarios y Más) ------------------ */}
      <footer className="w-full py-16 bg-white border-t border-gray-100 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-12 text-black">
          
          <div className="lg:col-span-1">
            <Image src="/logovector.png" alt="Logo Unilen" width={130} height={60} />
            <p className="mt-4 text-sm text-gray-500">Comprometidos con tu claridad.</p>
          </div>

          <div>
            <h4 className="font-bold mb-4 uppercase text-xs tracking-widest">Síguenos</h4>
            <div className="flex flex-col gap-3">
               <a href="#" className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600"><FaFacebookF /> Facebook</a>
               <a href="#" className="flex items-center gap-2 text-sm text-gray-600 hover:text-pink-600"><FaInstagram /> Instagram</a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 uppercase text-xs tracking-widest">Legal</h4>
            <div className="flex flex-col gap-3 text-sm text-gray-600">
              <Link href="/terminos-y-condiciones">Términos</Link>
              <Link href="/politica-privacidad">Privacidad</Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 uppercase text-xs tracking-widest">Cuenta</h4>
            <div className="flex flex-col gap-3 text-sm text-gray-600">
              <Link href="/mi-cuenta">Mi cuenta</Link>  
              <Link href="/registro">Registrarme</Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 uppercase text-xs tracking-widest">Info</h4>
            <div className="flex flex-col gap-3 text-sm text-gray-600">
              <Link href="/innovacion-y-respuestas">Tecnología</Link>
              <Link href="/innovacion-y-respuestas">Centro de Conocimiento</Link>
            </div>
          </div>

        </div>
      </footer>

      <style jsx>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { display: inline-flex; animation: marquee 35s linear infinite; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </main>
  );
}