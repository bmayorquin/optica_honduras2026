"use client";

import { useState } from "react";
import { FaSearch, FaWhatsapp, FaTruck, FaRegClock, FaCheckCircle, FaFilter } from "react-icons/fa";

export default function PedidosAdmin() {
  // Datos simulados de pedidos
  const [pedidos, setPedidos] = useState([
    { id: "1024", cliente: "Carlos Rodriguez", fecha: "20/05/2024", monto: 3500, metodo: "Transferencia", estado: "Pendiente", tel: "50499999999" },
    { id: "1025", cliente: "Elena Flores", fecha: "21/05/2024", monto: 4200, metodo: "Contra Entrega", estado: "Enviado", tel: "50488888888" },
    { id: "1026", cliente: "Marcos Peña", fecha: "22/05/2024", monto: 2800, metodo: "Depósito", estado: "Entregado", tel: "50477777777" },
  ]);

  const [filtro, setFiltro] = useState("");

  // Colores según estado
  const getEstadoEstilo = (estado: string) => {
    switch (estado) {
      case "Entregado": return "bg-green-100 text-green-700 border-green-200";
      case "Enviado": return "bg-blue-100 text-blue-700 border-blue-200";
      case "Pendiente": return "bg-orange-100 text-orange-700 border-orange-200";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      
      {/* HEADER Y BUSCADOR */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
        <div>
          <h1 className="text-2xl font-black text-slate-800 uppercase tracking-tighter">Gestión de Pedidos</h1>
          <p className="text-slate-500 text-xs font-medium uppercase tracking-widest mt-1">Total: {pedidos.length} órdenes</p>
        </div>

        <div className="flex items-center gap-2 flex-grow max-w-md">
          <div className="relative w-full">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
            <input 
              type="text" 
              placeholder="Buscar por cliente o ID..." 
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-red-100 outline-none transition text-sm font-bold"
              onChange={(e) => setFiltro(e.target.value)}
            />
          </div>
          <button className="p-3 bg-slate-100 rounded-2xl text-slate-600 hover:bg-slate-200 transition">
            <FaFilter />
          </button>
        </div>
      </div>

      {/* TABLA DE PEDIDOS */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-50">
                <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">ID Pedido</th>
                <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Cliente</th>
                <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Pago</th>
                <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Total</th>
                <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Estado</th>
                <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {pedidos
                .filter(p => p.cliente.toLowerCase().includes(filtro.toLowerCase()) || p.id.includes(filtro))
                .map((p) => (
                <tr key={p.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="p-6">
                    <span className="font-black text-slate-400 text-xs">#UNILEN-{p.id}</span>
                    <p className="text-[10px] text-slate-400 font-bold mt-1 uppercase">{p.fecha}</p>
                  </td>
                  <td className="p-6 font-bold text-slate-800">{p.cliente}</td>
                  <td className="p-6">
                    <span className="text-[10px] font-black uppercase text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
                      {p.metodo}
                    </span>
                  </td>
                  <td className="p-6 font-black text-slate-900 text-lg">L. {p.monto.toLocaleString()}</td>
                  <td className="p-6">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] font-black uppercase ${getEstadoEstilo(p.estado)}`}>
                      {p.estado === "Pendiente" && <FaRegClock className="animate-spin-slow" />}
                      {p.estado === "Enviado" && <FaTruck />}
                      {p.estado === "Entregado" && <FaCheckCircle />}
                      {p.estado}
                    </div>
                  </td>
                  <td className="p-6">
                    <div className="flex justify-center gap-2">
                      <a 
                        href={`https://wa.me/${p.tel}?text=Hola%20${p.cliente},%20te%20saludamos%20de%20Unilen%20Optica%20referente%20a%20tu%20pedido%20#${p.id}`}
                        target="_blank"
                        className="p-3 bg-green-100 text-green-600 rounded-xl hover:bg-green-600 hover:text-white transition shadow-sm"
                        title="Contactar WhatsApp"
                      >
                        <FaWhatsapp />
                      </a>
                      <button 
                        className="p-3 bg-red-50 text-red-600 rounded-xl hover:bg-red-600 hover:text-white transition shadow-sm"
                        title="Ver detalle"
                      >
                        <FaSearch className="text-xs" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* RESUMEN INFERIOR (Opcional) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-900 p-6 rounded-3xl text-white">
          <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest">En espera</p>
          <p className="text-3xl font-black mt-1">{pedidos.filter(p => p.estado === "Pendiente").length}</p>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">En ruta</p>
          <p className="text-3xl font-black mt-1 text-slate-800">{pedidos.filter(p => p.estado === "Enviado").length}</p>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <p className="text-[10px] font-bold text-green-500 uppercase tracking-widest">Completados</p>
          <p className="text-3xl font-black mt-1 text-slate-800">{pedidos.filter(p => p.estado === "Entregado").length}</p>
        </div>
      </div>

    </div>
  );
}