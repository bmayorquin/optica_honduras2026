"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaLock, FaUserShield, FaUserPlus, FaArrowLeft, FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

export default function AdminLogin() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState({ type: "", text: "" });
  
  const router = useRouter();

  // Verificar si ya existe un admin creado en el sistema
  const [hasAdmin, setHasAdmin] = useState(false);

  useEffect(() => {
    const savedAdmin = localStorage.getItem("adminCredentials");
    if (savedAdmin) setHasAdmin(true);
  }, []);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMsg({ type: "", text: "" });

    setTimeout(() => {
      if (isRegistering) {
        // --- LÓGICA DE REGISTRO ---
        const newUser = { email, password };
        localStorage.setItem("adminCredentials", JSON.stringify(newUser));
        setMsg({ type: "success", text: "¡Usuario Admin creado con éxito! Ahora puedes entrar." });
        setIsRegistering(false);
        setHasAdmin(true);
      } else {
        // --- LÓGICA DE LOGIN ---
        const savedAdmin = localStorage.getItem("adminCredentials");
        
        // Credenciales por defecto si no ha creado ninguna, o las guardadas
        const creds = savedAdmin ? JSON.parse(savedAdmin) : { email: "admin@unilen.com", password: "unilen2026" };

        if (email === creds.email && password === creds.password) {
          localStorage.setItem("userRole", "admin");
          router.push("/admin");
        } else {
          setMsg({ type: "error", text: "Credenciales incorrectas." });
        }
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden text-slate-900">
      
      {/* Luces de fondo */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-red-900/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-900/10 rounded-full blur-[120px]"></div>

      <div className="w-full max-w-md z-10">
        <div className="bg-white rounded-[3rem] p-10 shadow-2xl border border-white/20">
          
          <div className="text-center mb-8">
            <div className={`w-20 h-20 rounded-3xl flex items-center justify-center text-white mx-auto mb-6 shadow-xl transition-all duration-500 ${isRegistering ? 'bg-blue-600 rotate-12' : 'bg-red-600 -rotate-3'}`}>
              {isRegistering ? <FaUserPlus size={35} /> : <FaUserShield size={35} />}
            </div>
            <h1 className="text-3xl font-black tracking-tighter uppercase">
              {isRegistering ? "Crear Admin" : "Panel Unilen"}
            </h1>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mt-2">
              {isRegistering ? "Configuración de Acceso Inicial" : "Solo personal autorizado"}
            </p>
          </div>

          <form onSubmit={handleAuth} className="space-y-5">
            {msg.text && (
              <div className={`p-4 rounded-2xl flex items-center gap-3 text-xs font-bold uppercase transition-all ${msg.type === 'success' ? 'bg-green-50 text-green-600 border border-green-100' : 'bg-red-50 text-red-600 border border-red-100'}`}>
                {msg.type === 'success' && <FaCheckCircle />}
                {msg.text}
              </div>
            )}

            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase ml-2">Correo Electrónico</label>
              <input 
                type="email" 
                required
                className="w-full bg-slate-50 border border-slate-100 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-red-500/20 font-bold"
                placeholder="ejemplo@unilen.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase ml-2">Contraseña</label>
              <div className="relative">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
                <input 
                  type="password" 
                  required
                  className="w-full bg-slate-50 border border-slate-100 p-4 pl-12 rounded-2xl outline-none focus:ring-2 focus:ring-red-500/20 font-bold"
                  placeholder="••••••••"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl transition-all ${
                isRegistering 
                ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-200' 
                : 'bg-red-600 hover:bg-slate-900 text-white shadow-red-200'
              }`}
            >
              {isLoading ? "Procesando..." : isRegistering ? "Registrar Administrador" : "Iniciar Sesión"}
            </button>
          </form>

          {/* Selector de Modo */}
          <div className="mt-8 pt-6 border-t border-slate-50 text-center">
            <button 
              onClick={() => {
                setIsRegistering(!isRegistering);
                setMsg({ type: "", text: "" });
              }}
              className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-red-600 transition-colors"
            >
              {isRegistering ? "¿Ya tienes cuenta? Entrar" : "¿No tienes cuenta admin? Créala aquí"}
            </button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-slate-500 hover:text-white transition-colors text-[10px] font-black uppercase tracking-[0.4em] flex items-center justify-center gap-2">
            <FaArrowLeft /> Volver a la Óptica
          </Link>
        </div>
      </div>
    </div>
  );
}