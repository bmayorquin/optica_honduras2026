"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MdDelete } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";

export default function CarritoPage() {
  const router = useRouter();
  const [carrito, setCarrito] = useState([]);
  const [paso] = useState(1);

  useEffect(() => {
    const storedCart = localStorage.getItem("carrito");
    if (storedCart) setCarrito(JSON.parse(storedCart));
  }, []);

  const eliminarItem = (id) => {
    const nuevoCarrito = carrito.filter((p) => p.id !== id);
    setCarrito(nuevoCarrito);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
  };

  const total = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

  const formatoLempiras = (valor) =>
    valor.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  return (
    <main className="min-h-screen bg-white pb-16">

      {/* Header */}
<div className="bg-red-600 text-white py-6 shadow-md">
  <h1 className="text-3xl font-bold text-center flex items-center justify-center gap-3">
    <BsCart3 className="text-3xl" />
    Tu Carrito de Compras
  </h1>
</div>

      {/* Barra progreso */}
      <div className="flex justify-center items-center mb-10 mt-8">
        {["CARRITO", "ENTREGA", "PAGO", "CONFIRMAR"].map((nombre, index) => {
          const numero = index + 1;
          const activo = paso === numero;

          return (
            <React.Fragment key={numero}>
              <div className="flex items-center">
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full font-bold ${
                    activo
                      ? "bg-red-600 text-white"
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
        })}
      </div>

      {carrito.length === 0 ? (
        <div className="text-center mt-20 text-gray-500">
          <p className="text-lg">Tu carrito está vacío</p>

          <Link href="/">
            <span className="text-red-600 underline cursor-pointer">
              Volver al catálogo
            </span>
          </Link>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto px-4">

          {/* Productos */}
          <div className="space-y-4">

            {carrito.map((p) => (
              <div
                key={p.id}
                className="flex items-center justify-between bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition p-4"
              >
                <div className="flex items-center gap-4">

                  {/* Imagen del lente */}
                  <Image
                    src={p.imagen}
                    alt={p.nombre}
                    width={90}
                    height={90}
                    className="rounded-lg border"
                  />

                  <div>
                    <p className="font-bold text-lg">{p.nombre}</p>

                    <p className="text-sm text-gray-500">
                      Marca: {p.marca}
                    </p>

                    <p className="text-sm text-gray-500">
                      Categoría: {p.categoria || "N/A"}
                    </p>

                    <p className="text-sm">
                      Precio: L.{formatoLempiras(p.precio)}
                    </p>

                    <p className="text-sm font-semibold text-black">
                      Cantidad: {p.cantidad}
                    </p>
                  </div>
                </div>

                <div className="text-right">

                  <p className="font-bold text-red-600 text-lg">
                    L.{formatoLempiras(p.precio * p.cantidad)}
                  </p>

                  <button
                    onClick={() => eliminarItem(p.id)}
                    className="mt-2 bg-red-600 hover:bg-black text-white p-2 rounded-full transition"
                  >
                    <MdDelete className="text-xl" />
                  </button>

                </div>
              </div>
            ))}

          </div>

          {/* Total */}
          <div className="bg-black text-white mt-8 p-6 rounded-xl shadow-lg flex justify-between items-center">

            <div>
              <p className="text-gray-300">Total a pagar</p>
              <p className="text-3xl font-bold text-red-500">
                L.{formatoLempiras(total)}
              </p>
            </div>

            <div className="flex gap-4">

              <button
                onClick={() => router.push("/")}
                className="bg-gray-200 text-black px-6 py-2 rounded hover:bg-red-600 hover:text-white transition"
              >
                Seguir comprando
              </button>

              <button
                onClick={() => router.push("/entrega")}
                className="bg-red-600 px-8 py-3 rounded-lg hover:bg-white hover:text-black font-semibold transition"
              >
                Continuar 
              </button>

            </div>

          </div>

        </div>
      )}
    </main>
  );
}