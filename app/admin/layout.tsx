"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { 
  FaHome, FaUsers, FaBoxOpen, FaClipboardList, FaCog, FaSignOutAlt, FaPowerOff 
} from "react-icons/fa";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // 1. Lógica de Seguridad
  useEffect(() => {
    const checkAuth = () => {
      const role = localStorage.getItem("userRole");
      
      // Si estamos en la página de login, no verificamos nada
      if (pathname === "/admin/login") {
        setIsAuthorized(false); 
        setIsLoading(false);
        return;
      }

      // Si no hay rol y no es login, para afuera
      if (role !== "admin") {
        router.replace("/admin/login");
      } else {
        setIsAuthorized(true);
      }
      setIsLoading(false);
    };

    checkAuth();
  }, [pathname, router]);

  // 2. MIENTRAS CARGA: Pantalla de espera (Evita parpadeos)
  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // 3. SI ES LOGIN: Solo mostramos el formulario (Sin Sidebar)
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  // 4. SI NO ESTÁ AUTORIZADO: No mostramos nada (el useEffect ya está redireccionando)
  if (!isAuthorized) return null;

  // 5. PANEL COMPLETO (Sidebar + Contenido)
  const menuItems = [
    { name: "Inicio", href: "/admin", icon: <FaHome /> },
    { name: "Usuarios", href: "/admin/usuarios", icon: <FaUsers /> },
    { name: "Productos", href: "/admin/productos", icon: <FaBoxOpen /> },
    { name: "Pedidos", href: "/admin/pedidos", icon: <FaClipboardList /> },
    { name: "Configuración", href: "/admin/configuracion", icon: <FaCog /> },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-64 bg-slate-900 text-white flex flex-col fixed h-full z-50">
        <div className="p-6 border-b border-slate-800">
          <h1 className="text-xl font-black text-red-600 uppercase">Unilen Admin</h1>
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Panel de Control</p>
        </div>

        <nav className="flex-grow p-4 space-y-2 mt-4">
          {menuItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                pathname === item.href ? "bg-red-600 text-white shadow-lg" : "text-gray-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {item.icon}
              <span className="font-bold text-sm">{item.name}</span>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button 
            onClick={() => { localStorage.removeItem("userRole"); router.push("/admin/login"); }}
            className="w-full flex items-center gap-3 px-4 py-3 bg-slate-800/50 text-red-400 hover:bg-red-600 hover:text-white rounded-xl transition-all font-black text-xs uppercase"
          >
            <FaPowerOff /> Cerrar Sesión
          </button>
        </div>
      </aside>

      <main className="flex-grow ml-64 min-h-screen">
        <header className="bg-white h-16 border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-40">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
            Admin / {menuItems.find(i => i.href === pathname)?.name || "Panel"}
          </span>
          <div className="w-8 h-8 bg-red-600 rounded-lg shadow-lg shadow-red-200"></div>
        </header>
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}