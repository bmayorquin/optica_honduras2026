"use client";

import { useState } from "react";
import { FaUserCircle, FaEnvelope, FaHistory, FaStar, FaSearch, FaUserPlus } from "react-icons/fa";

export default function UsuariosAdmin() {
  const [usuarios] = useState([
    { id: 1, nombre: "Juan Pérez", email: "juan@email.com", compras: 5, totalGastado: 12500, tipo: "Frecuente", ultimaCita: "12/03/2024" },
    { id: 2, nombre: "María López", email: "m.lopez@email.com", compras: 1, totalGastado: 3500, tipo: "Nuevo", ultimaCita: "05/05/2024" },
    { id: 3, nombre: "Roberto Sosa", email: "robert_sosa@email.com", compras: 12, totalGastado: 34200, tipo: "VIP", ultimaCita: "10/01/2024" },
  ]);

  const [busqueda, setBusqueda] = useState("");

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      
      {/* CABECERA */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Directorio de Clientes</h1>
          <p className="text-slate-500 font-medium text-sm">Gestiona la base de datos y expedientes de Unilen</p>
        </div>
        <button className="bg-slate-900 text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-red-600 transition-all flex items-center gap-2 shadow-xl">
          <FaUserPlus /> Registrar Nuevo Cliente
        </button>
      </div>

      {/* BUSCADOR Y FILTROS */}
      <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 relative">
        <FaSearch className="absolute left-8 top-1/2 -translate-y-1/2 text-slate-400" />
        <input 
          type="text" 
          placeholder="Buscar cliente por nombre o correo..." 
          className="w-full pl-12 pr-4 py-3 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-red-100 outline-none font-bold text-slate-700"
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      {/* LISTA DE USUARIOS (Cards Estilo Directorio) */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {usuarios
          .filter(u => u.nombre.toLowerCase().includes(busqueda.toLowerCase()))
          .map((user) => (
          <div key={user.id} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:border-red-200 transition-all group">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-red-50 group-hover:text-red-500 transition-colors">
                  <FaUserCircle size={32} />
                </div>
                <div>
                  <h3 className="font-black text-slate-800 uppercase leading-none">{user.nombre}</h3>
                  <div className="flex items-center gap-1 text-slate-400 mt-1">
                    <FaEnvelope className="text-[10px]" />
                    <span className="text-xs font-medium">{user.email}</span>
                  </div>
                </div>
              </div>
              <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter ${
                user.tipo === 'VIP' ? 'bg-amber-100 text-amber-600' :
                user.tipo === 'Frecuente' ? 'bg-blue-100 text-blue-600' :
                'bg-slate-100 text-slate-600'
              }`}>
                {user.tipo}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-50">
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Compras</p>
                <div className="flex items-center gap-2 mt-1">
                   <FaHistory className="text-slate-300 text-xs" />
                   <p className="font-black text-slate-700">{user.compras} <span className="text-[10px] text-slate-400">pedidos</span></p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Inversión Total</p>
                <p className="font-black text-red-600 mt-1 text-lg">L. {user.totalGastado.toLocaleString()}</p>
              </div>
            </div>

            <div className="mt-6 flex gap-2">
               <button className="flex-grow bg-slate-50 hover:bg-slate-900 hover:text-white text-slate-600 py-3 rounded-xl text-[10px] font-black uppercase transition-all flex items-center justify-center gap-2">
                 <FaStar /> Ver Expediente
               </button>
               <button className="px-4 bg-slate-50 hover:bg-green-100 text-slate-400 hover:text-green-600 py-3 rounded-xl transition-all">
                  <FaEnvelope />
               </button>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER DE ESTADÍSTICA RÁPIDA */}
      <div className="bg-slate-900 rounded-3xl p-6 flex flex-wrap justify-around items-center text-white shadow-xl">
          <div className="text-center">
              <p className="text-[10px] font-bold text-slate-400 uppercase">Clientes VIP</p>
              <p className="text-2xl font-black text-amber-500">
                {usuarios.filter(u => u.tipo === "VIP").length}
              </p>
          </div>
          <div className="h-10 w-px bg-slate-800 hidden md:block"></div>
          <div className="text-center">
              <p className="text-[10px] font-bold text-slate-400 uppercase">Ticket Promedio</p>
              <p className="text-2xl font-black text-white">L. 16,733</p>
          </div>
          <div className="h-10 w-px bg-slate-800 hidden md:block"></div>
          <div className="text-center">
              <p className="text-[10px] font-bold text-slate-400 uppercase">Nuevos este mes</p>
              <p className="text-2xl font-black text-red-500">+12</p>
          </div>
      </div>

    </div>
  );
}