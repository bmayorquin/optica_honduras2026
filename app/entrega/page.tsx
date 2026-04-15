"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaTruck, FaStore } from "react-icons/fa";

export default function EntregaPage() {
  const router = useRouter();
  // Se agrega <string | null> para definir el tipo de estado
  const [opcionEntrega, setOpcionEntrega] = useState<string | null>(null);

  // Se agrega : string al parámetro para evitar el error de compilación
  const seleccionarEntrega = (opcion: string) => {
    setOpcionEntrega(opcion);
    localStorage.setItem("tipoEntrega", opcion);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6">
      {/* Barra de progreso */}
      <div className="flex justify-center items-center mb-10">
        {["CARRITO", "TIPO DE ENTREGA", "FORMA DE PAGO", "CONFIRMACIÓN"].map(
          (nombre, index) => {
            const numero = index + 1;
            const activo = numero === 2;
            return (
              <React.Fragment key={numero}>
                <div className="flex items-center">
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full font-bold transition ${
                      activo
                        ? "bg-red-600 text-white scale-110 shadow-lg"
                        : "bg-gray-300 text-white"
                    }`}
                  >
                    {numero}
                  </div>
                  <span
                    className={`ml-2 font-semibold ${
                      activo ? "text-red-600" : "text-gray-500"
                    }`}
                  >
                    {nombre}
                  </span>
                </div>
                {numero < 4 && (
                  <div className="w-16 h-1 bg-gray-300 mx-2"></div>
                )}
              </React.Fragment>
            );
          }
        )}
      </div>

      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Selecciona tu tipo de entrega
      </h1>

      <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Tarjeta domicilio */}
        <div
          onClick={() => seleccionarEntrega("domicilio")}
          className={`cursor-pointer p-6 rounded-xl shadow-lg flex flex-col items-center transition transform hover:scale-105 ${
            opcionEntrega === "domicilio"
              ? "bg-red-600 text-white"
              : "bg-white text-gray-700"
          }`}
        >
          <FaTruck className="text-5xl mb-4" />
          <h2 className="text-xl font-bold">Entrega a domicilio</h2>
          <p className="text-sm mt-2 text-center">
            Recibe tu pedido directamente en tu casa.
          </p>
        </div>

        {/* Tarjeta tienda */}
        <div
          onClick={() => seleccionarEntrega("tienda")}
          className={`cursor-pointer p-6 rounded-xl shadow-lg flex flex-col items-center transition transform hover:scale-105 ${
            opcionEntrega === "tienda"
              ? "bg-red-600 text-white"
              : "bg-white text-gray-700"
          }`}
        >
          <FaStore className="text-5xl mb-4" />
          <h2 className="text-xl font-bold">Recoger en tienda</h2>
          <p className="text-sm mt-2 text-center">
            Pasa por la tienda y recoge tu pedido.
          </p>
        </div>
      </div>

      {/* Botones navegación */}
      <div className="flex justify-between mt-10 max-w-2xl mx-auto">
        <button
          onClick={() => router.push("/carrito")}
          className="bg-gray-300 px-6 py-2 rounded hover:bg-red-600 hover:text-white transition"
        >
          Atrás
        </button>
        <button
          onClick={() => router.push("/pago")}
          disabled={!opcionEntrega}
          className={`px-6 py-2 rounded transition ${
            opcionEntrega
              ? "bg-green-600 text-white hover:bg-black"
              : "bg-gray-400 text-white cursor-not-allowed"
          }`}
        >
          Continuar
        </button>
      </div>
    </main>
  );
}