"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [esRegistro, setEsRegistro] = useState(false);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [registroExitoso, setRegistroExitoso] = useState(false);

  // --- VALIDACIONES ---
  
  const validarEmail = (correo: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const parteLocal = correo.split("@")[0] || "";
    return regex.test(correo) && parteLocal.length >= 3 && parteLocal.length <= 30;
  };

  const validarNombre = (nom: string) => {
    const limpio = nom.trim();
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return limpio.length >= 3 && limpio.length <= 30 && regex.test(limpio);
  };

  // Corrección del error: Añadido tipo ': string' a pass
  const validarPassword = (pass: string) => {
    return (
      pass.length >= 8 &&
      /[A-Z]/.test(pass) &&
      /[a-z]/.test(pass) &&
      /[0-9]/.test(pass) &&
      /[!@#$%^&*(),.?":{}|<>]/.test(pass)
    );
  };

  // El formulario es válido si el email y password están bien. 
  // El nombre solo se valida si esRegistro es true.
  const formValido = 
    validarEmail(email) && 
    validarPassword(password) && 
    (esRegistro ? validarNombre(nombre) : true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formValido) {
      alert("Por favor revisa los datos introducidos.");
      return;
    }

    // Simulación de guardado
    localStorage.setItem("usuario", JSON.stringify({ nombre, email }));

    if (esRegistro) {
      setRegistroExitoso(true);
      setTimeout(() => {
        setRegistroExitoso(false);
        router.push("/mi-cuenta");
      }, 2000);
    } else {
      router.push("/mi-cuenta");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center text-red-600 mb-6 uppercase">
          {esRegistro ? "Crear una Cuenta" : "Iniciar Sesión"}
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          {/* NOMBRE: Solo se muestra en Registro */}
          {esRegistro && (
            <input
              type="text"
              placeholder="Nombre completo"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="border rounded-lg px-4 py-2 focus:outline-red-500"
            />
          )}

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-lg px-4 py-2 focus:outline-red-500"
          />

          {/* PASSWORD */}
          <div className="relative">
            <input
              type={mostrarPassword ? "text" : "password"}
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded-lg px-4 py-2 w-full pr-10 focus:outline-red-500"
            />
            <button
              type="button"
              onClick={() => setMostrarPassword(!mostrarPassword)}
              className="absolute right-3 top-2 text-xl"
            >
              {mostrarPassword ? "🙈" : "👁️"}
            </button>
          </div>

          {/* FEEDBACK DE PASSWORD */}
          {password.length > 0 && (
            <div
              className={`text-xs mt-1 font-medium transition-all duration-300 ${
                validarPassword(password) ? "text-green-600" : "text-red-500"
              }`}
            >
              {validarPassword(password)
                ? "✔ Contraseña segura"
                : "✖ Mínimo 8 caracteres, mayúscula, minúscula, número y símbolo."}
            </div>
          )}

          <button
            type="submit"
            disabled={!formValido}
            className="bg-red-600 text-white py-3 rounded-lg font-bold uppercase disabled:bg-gray-300 transition-colors"
          >
            {esRegistro ? "Registrarme" : "Acceder"}
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          {esRegistro ? "¿Ya tienes cuenta?" : "¿No tienes cuenta?"}{" "}
          <button
            type="button"
            className="text-red-600 font-bold cursor-pointer hover:underline"
            onClick={() => setEsRegistro(!esRegistro)}
          >
            {esRegistro ? "Inicia Sesión" : "Regístrate aquí"}
          </button>
        </p>
      </div>

      {/* MODAL ÉXITO REGISTRO */}
      {registroExitoso && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-10 text-center animate-pop shadow-2xl">
            <div className="text-green-500 text-6xl mb-3 animate-bounce">
              ✔
            </div>
            <h2 className="text-xl font-bold">¡Cuenta creada con éxito!</h2>
            <p className="text-gray-500 mt-2">Redirigiendo...</p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes pop {
          0% { transform: scale(0.6); opacity: 0; }
          60% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); }
        }
        .animate-pop {
          animation: pop 0.4s ease-out;
        }
      `}</style>
    </main>
  );
}