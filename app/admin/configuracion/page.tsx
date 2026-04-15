"use client";

import { useState } from "react";
import { FaStore, FaBell, FaShieldAlt, FaSave, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export default function ConfiguracionAdmin() {
  const [guardando, setGuardando] = useState(false);

  const handleSave = () => {
    setGuardando(true);
    // Simulación de guardado
    setTimeout(() => {
      setGuardando(false);
      alert("Configuración actualizada correctamente");
    }, 1500);
  };

  return (
    <div className="max-w-4xl space-y-8 animate-in fade-in duration-500">
      
      {/* CABECERA */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black text-slate-800 uppercase tracking-tighter">Configuración</h1>
          <p className="text-slate-500 font-medium">Gestiona los detalles generales de Unilen Óptica</p>
        </div>
        <button 
          onClick={handleSave}
          disabled={guardando}
          className="bg-red-600 text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-red-700 transition flex items-center gap-2 shadow-lg disabled:bg-gray-400"
        >
          {guardando ? "Guardando..." : <><FaSave /> Guardar Cambios</>}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* COLUMNA IZQUIERDA: NAVEGACIÓN RÁPIDA */}
        <div className="space-y-2">
          <button className="w-full flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border-l-4 border-red-600 font-bold text-slate-800">
            <FaStore className="text-red-600" /> Datos de la Tienda
          </button>
          <button className="w-full flex items-center gap-3 p-4 hover:bg-white rounded-2xl transition text-slate-400 font-bold">
            <FaBell /> Notificaciones
          </button>
          <button className="w-full flex items-center gap-3 p-4 hover:bg-white rounded-2xl transition text-slate-400 font-bold">
            <FaShieldAlt /> Seguridad
          </button>
        </div>

        {/* COLUMNA DERECHA: FORMULARIOS */}
        <div className="md:col-span-2 space-y-6">
          
          {/* SECCIÓN 1: PERFIL DE NEGOCIO */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-6">
            <h3 className="font-black text-slate-800 uppercase text-sm border-b pb-4">Perfil del Negocio</h3>
            
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase">Nombre Comercial</label>
                <input type="text" defaultValue="Unilen Óptica" className="w-full mt-1 p-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-red-200 outline-none transition font-bold text-slate-700" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">WhatsApp de Ventas</label>
                  <div className="relative">
                    <FaWhatsapp className="absolute left-3 top-4 text-green-500" />
                    <input type="text" defaultValue="+504 9999-9999" className="w-full mt-1 p-3 pl-10 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-red-200 outline-none transition font-bold text-slate-700" />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">ISV (%)</label>
                  <input type="number" defaultValue="15" className="w-full mt-1 p-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-red-200 outline-none transition font-bold text-slate-700" />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase">Dirección Física</label>
                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-3 top-4 text-red-500" />
                  <input type="text" defaultValue="Centro Comercial, Tegucigalpa, Honduras" className="w-full mt-1 p-3 pl-10 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-red-200 outline-none transition font-bold text-slate-700" />
                </div>
              </div>
            </div>
          </div>

          {/* SECCIÓN 2: ESTADO DE LA TIENDA */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-black text-slate-800 uppercase text-sm">Modo Mantenimiento</h3>
                <p className="text-xs text-slate-400">Desactiva las compras para el público temporalmente.</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
              </label>
            </div>
          </div>

          {/* SECCIÓN 3: MONEDA */}
          <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-xl">
             <h3 className="font-black uppercase text-xs text-red-500 mb-4">Ajustes de Moneda</h3>
             <select className="w-full bg-slate-800 border border-slate-700 p-3 rounded-xl font-bold outline-none">
                <option>Lempira (L.) - Honduras</option>
                <option>Dólar (USD) - $</option>
             </select>
             <p className="mt-4 text-[10px] text-slate-500 italic uppercase">Esto afectará todos los precios mostrados en el catálogo.</p>
          </div>

        </div>
      </div>
    </div>
  );
}