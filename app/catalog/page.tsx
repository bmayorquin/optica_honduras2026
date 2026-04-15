'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  marca: string;
  imagen: string;
  cantidad?: number;
}

export default function CatalogPage() {
  const [carrito, setCarrito] = useState<Producto[]>([]);
  const [mensaje, setMensaje] = useState("");
  const [pagina, setPagina] = useState(1);

  const productosPorPagina = 6;

  const productos: Producto[] = [
    { id: 1, nombre: "Lente clásico", precio: 1250, marca: "Armani Exchange", imagen: "/aros/lente1.png" },
    { id: 2, nombre: "Lente moderno", precio: 1875, marca: "Barbie", imagen: "/aros/lente2.png" },
    { id: 3, nombre: "Lente deportivo", precio: 1500, marca: "Oakley", imagen: "/aros/lente3.png" },
    { id: 4, nombre: "Lente elegante", precio: 2000, marca: "Ray-Ban", imagen: "/aros/lente4.png" },
    { id: 5, nombre: "Lente juvenil", precio: 1375, marca: "Prada", imagen: "/aros/lente5.png" },
    { id: 6, nombre: "Lente premium", precio: 2500, marca: "Dolce & Gabbana", imagen: "/aros/lente6.png" },
    { id: 7, nombre: "Lente casual", precio: 1300, marca: "MICHAEL KORS", imagen: "/aros/lente7.png" },
  ];

  useEffect(() => {
    const storedCart = localStorage.getItem("carrito");
    if (storedCart) setCarrito(JSON.parse(storedCart));
  }, []);

  const agregarAlCarrito = (producto: Producto) => {
    const existe = carrito.find((p) => p.id === producto.id);

    let nuevoCarrito: Producto[];

    if (existe) {
      nuevoCarrito = carrito.map((p) =>
        p.id === producto.id
          ? { ...p, cantidad: (p.cantidad || 0) + 1 }
          : p
      );
    } else {
      nuevoCarrito = [...carrito, { ...producto, cantidad: 1 }];
    }

    setCarrito(nuevoCarrito);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));

    setMensaje(`✅ "${producto.nombre}" agregado al carrito`);
    setTimeout(() => setMensaje(""), 2000);
  };

  const totalItems = carrito.reduce(
    (total, p) => total + (p.cantidad || 0),
    0
  );

  const indiceUltimo = pagina * productosPorPagina;
  const indicePrimero = indiceUltimo - productosPorPagina;
  const productosPagina = productos.slice(indicePrimero, indiceUltimo);
  const totalPaginas = Math.ceil(productos.length / productosPorPagina);

  return (
    <main className="min-h-screen bg-gray-200 p-8">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">

        <button
          onClick={() => window.location.href = "/"}
          className="bg-black text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          ⬅ Inicio
        </button>

        <button
          onClick={() => window.location.href = "/carrito"}
          className="bg-red-600 text-white px-4 py-2 rounded font-semibold hover:bg-black transition"
        >
          🛒 {totalItems}
        </button>

      </div>

      <h1 className="text-4xl font-bold text-center mb-8">
        Catálogo de Lentes
      </h1>

      {/* MENSAJE */}
      {mensaje && (
        <div className="fixed top-24 right-6 bg-red-600 text-white px-5 py-3 rounded-lg shadow-xl z-50">
          {mensaje}
        </div>
      )}

      {/* PRODUCTOS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {productosPagina.map((p) => (
          <div
            key={p.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition text-center"
          >

            <Image
              src={p.imagen}
              alt={p.nombre}
              width={150}
              height={150}
              className="mx-auto mb-3"
            />

            <h2 className="font-bold text-lg">{p.nombre}</h2>
            <p className="text-gray-500">{p.marca}</p>
            <p className="text-red-600 font-semibold mt-1">
              Lps {p.precio}
            </p>

            <button
              onClick={() => agregarAlCarrito(p)}
              className="mt-3 w-full bg-red-600 text-white py-2 rounded hover:bg-black transition font-semibold"
            >
              Agregar al carrito
            </button>

          </div>
        ))}

      </div>

      {/* PAGINACIÓN */}
      <div className="flex justify-center gap-3 mt-8">

        <button
          onClick={() => setPagina((prev) => Math.max(prev - 1, 1))}
          className="px-4 py-2 bg-white border rounded hover:bg-red-600 hover:text-white transition"
          disabled={pagina === 1}
        >
          Anterior
        </button>

        <span className="px-4 py-2 font-semibold">
          {pagina} / {totalPaginas}
        </span>

        <button
          onClick={() => setPagina((prev) => Math.min(prev + 1, totalPaginas))}
          className="px-4 py-2 bg-white border rounded hover:bg-red-600 hover:text-white transition"
          disabled={pagina === totalPaginas}
        >
          Siguiente
        </button>

      </div>

    </main>
  );
}