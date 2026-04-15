"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function RegistroPage() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Por favor ingresa tu correo y contraseña.");
      return;
    }

    if (password !== confirmPassword) {
      setError("❌ Las contraseñas no coinciden.");
      return;
    }

    // Guardamos el usuario en localStorage (ejemplo simple)
    localStorage.setItem("usuario", email);

    // Redirigir a Mi Cuenta
    router.push("/mi-cuenta");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center text-red-600 mb-6">
          Registro de Usuario
        </h1>

        {/* Mensaje de error centrado */}
        {error && (
          <div className="mb-4 text-center text-red-600 font-semibold bg-red-100 border border-red-400 rounded-lg px-4 py-2">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
            required
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
            required
          />

          <input
            type="password"
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
            required
          />

          <button
            type="submit"
            className="bg-red-600 text-white font-semibold rounded-lg px-4 py-2 hover:bg-red-700 transition"
          >
            Registrarme
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          ¿Ya tienes cuenta?{" "}
          <a href="/login" className="text-red-600 hover:underline">
            Inicia sesión aquí
          </a>
        </p>
      </div>

      {/* Logo en la parte inferior */}
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