"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function MiCuentaPage() {
  const [usuario, setUsuario] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("usuario");
    if (storedUser) {
      try {
        const parsed = JSON.parse(storedUser);
        setUsuario(parsed.email || storedUser);
      } catch {
        setUsuario(storedUser);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("usuario");
    router.push("/"); // redirige al Home
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-6">Mi Cuenta</h1>

        {usuario ? (
          <p className="text-lg text-gray-700 mb-6">
            Bienvenido, <span className="font-semibold">{usuario}</span> 👋
          </p>
        ) : (
          <p className="text-lg text-gray-700 mb-6">
            No has iniciado sesión.{" "}
            <a href="/login" className="text-red-600 hover:underline">
              Inicia aquí
            </a>.
          </p>
        )}

        <div className="flex flex-col gap-4">
          <a
            href="/catalog"
            className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Ir al catálogo
          </a>

          {usuario && (
            <button
              onClick={handleLogout}
              className="px-6 py-3 bg-gray-300 text-black rounded-lg hover:bg-red-600 hover:text-white transition"
            >
              Cerrar sesión
            </button>
          )}
        </div>
      </div>

      <div className="mt-10">
        <Image
          src="/logovector.png"
          alt="Logo Unilen Óptica"
          width={160}
          height={80}
          className="object-contain"
        />
      </div>
    </main>
  );
}