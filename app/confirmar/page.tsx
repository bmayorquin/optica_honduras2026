"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BsCheckCircle } from "react-icons/bs";

interface Producto {
  nombre: string;
  cantidad: number;
  precio: number;
}

export default function ConfirmacionHome() {
  const router = useRouter();
  const [codigo, setCodigo] = useState("");
  const [productos, setProductos] = useState<Producto[]>([]);
  const [mostrarModal, setMostrarModal] = useState(true);
  const [confeti, setConfeti] = useState(false);

  // Generar token aleatorio
  const generarToken = () => Math.random().toString(36).substring(2, 10).toUpperCase();

  useEffect(() => {
    const carrito = localStorage.getItem("carrito");
    if (carrito) setProductos(JSON.parse(carrito));

    const token = generarToken();
    setCodigo(token);
    localStorage.setItem("codigoCompra", token);

    // Activar confeti al montar modal
    setConfeti(true);
    const timer = setTimeout(() => setConfeti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const total = productos.reduce((acc, p) => acc + p.precio * p.cantidad, 0).toFixed(2);

  const volverAlHome = () => {
    localStorage.removeItem("carrito"); // Limpia el carrito
    router.push("/"); // Redirige al home
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 to-red-300 p-6">

      {/* Modal */}
      {mostrarModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 flex flex-col items-center relative animate-fadeIn">

            {/* Confeti */}
            {confeti && (
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(50)].map((_, i) => (
                  <span
                    key={i}
                    className={`confeti absolute w-2 h-2 rounded-full bg-${["red","yellow","green","blue","pink"][i%5]}-400`}
                    style={{
                      left: Math.random() * 100 + "%",
                      animationDelay: `${Math.random() * 2}s`,
                      animationDuration: `${2 + Math.random() * 2}s`,
                    }}
                  ></span>
                ))}
              </div>
            )}

            <BsCheckCircle className="text-green-500 text-6xl mb-4 animate-bounce" />
            <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">¡Compra confirmada!</h1>
            <p className="text-gray-600 mb-6 text-center">
              Gracias por escoger <span className="font-semibold">Ópticas Unilen</span>
            </p>

            <div className="bg-red-50 rounded-lg p-4 w-full text-center mb-4">
              <p className="text-gray-700 font-semibold">Tu código de compra es:</p>
              <p className="text-red-600 font-bold text-xl mt-1">{codigo}</p>
              <p className="text-red-700 font-mono mt-3 text-base">
    Presente este código en la sucursal para validar su compra
  </p>


            </div>

            {productos.length > 0 && (
              <div className="w-full mb-4">
                <h2 className="font-semibold text-gray-800 mb-2">Resumen de compra:</h2>
                <div className="divide-y divide-gray-200 border rounded-lg overflow-hidden">
                  {productos.map((p, idx) => (
                    <div key={idx} className="flex justify-between p-3 bg-white hover:bg-red-50 transition">
                      <span>{p.nombre} x {p.cantidad}</span>
                      <span>L.{(p.precio * p.cantidad).toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="flex justify-between p-3 font-bold bg-red-100">
                    <span>Total</span>
                    <span>L.{total}</span>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={volverAlHome}
              className="mt-4 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition transform hover:scale-105"
            >
              Volver al inicio
            </button>

            <div className="mt-6 flex items-center gap-2">
              <img src="/logovector.png" alt="Unilen" className="w-24 h-24 object-contain" />
            </div>
          </div>
        </div>
      )}

      {/* Confeti animaciones */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-bounce {
          animation: bounce 1s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .confeti {
          animation-name: confeti-fall;
          animation-timing-function: linear;
        }
        @keyframes confeti-fall {
          0% { transform: translateY(0px) rotate(0deg); opacity:1; }
          100% { transform: translateY(300px) rotate(360deg); opacity:0; }
        }
      `}</style>
    </main>
  );
}