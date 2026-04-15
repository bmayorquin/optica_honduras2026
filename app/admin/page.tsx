"use client";

import { useState, useEffect } from "react";
import { 
  FaMoneyBillWave, 
  FaShoppingBasket, 
  FaUsers, 
  FaExclamationTriangle,
  FaArrowUp,
  FaWhatsapp
} from "react-icons/fa";

export default function AdminDashboard() {
  // Simulación de datos (En un futuro vendrán de tu base de datos)
  const stats = [
    { label: "Ventas del Mes", value: "L. 45,200", icon: <FaMoneyBillWave />, color: "bg-green-500", trend: "+12%" },
    { label: "Pedidos Nuevos", value: "28", icon: <FaShoppingBasket />, color: "bg-blue-500", trend: "+5%" },
    { label: "Clientes Totales", value: "142", icon: <FaUsers />, color: "bg-purple-500", trend: "+18%" },
    { label: "Stock Crítico", value: "3", icon: <FaExclamationTriangle />, color: "bg-red-500", trend: "Revisar" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* --- CABECERA --- */}
      <div>
        <h1 className="text-3xl font-black text-slate-800 uppercase tracking-tighter">Resumen General</h1>
        <p className="text-slate-500 font-medium">Bienvenido de nuevo, aquí está lo que sucede hoy en Unilen.</p>
      </div>

      {/* --- GRID DE ESTADÍSTICAS --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div className={`p-3 rounded-2xl text-white ${stat.color} shadow-lg shadow-${stat.color.split('-')[1]}-200`}>
                {stat.icon}
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded-lg ${stat.label === "Stock Crítico" ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600 flex items-center gap-1"}`}>
                {stat.label !== "Stock Crítico" && <FaArrowUp className="text-[10px]" />} {stat.trend}
              </span>
            </div>
            <div className="mt-4">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
              <p className="text-3xl font-black text-slate-800 mt-1">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* --- ÚLTIMOS PEDIDOS (VISTA RÁPIDA) --- */}
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-6 border-b border-slate-50 flex justify-between items-center">
            <h3 className="font-black text-slate-800 uppercase tracking-tight">Pedidos Recientes</h3>
            <button className="text-red-600 text-xs font-bold hover:underline">Ver todos</button>
          </div>
          <div className="divide-y divide-slate-50">
            {[
              { id: "1024", cliente: "Carlos Rodriguez", monto: "L. 3,500", pago: "Transferencia" },
              { id: "1025", cliente: "Elena Flores", monto: "L. 4,200", pago: "Contra Entrega" },
              { id: "1026", cliente: "Marcos Peña", monto: "L. 2,800", pago: "Depósito" },
            ].map((p) => (
              <div key={p.id} className="p-4 flex items-center justify-between hover:bg-slate-50 transition">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-500 text-xs">
                    #{p.id}
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-sm">{p.cliente}</p>
                    <p className="text-[10px] text-slate-400 uppercase font-bold">{p.pago}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-black text-slate-800">{p.monto}</p>
                  <button className="flex items-center gap-1 text-green-500 text-[10px] font-bold uppercase ml-auto hover:text-green-600">
                    <FaWhatsapp /> Contactar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- ALERTAS DE INVENTARIO --- */}
        <div className="bg-slate-900 rounded-3xl p-6 text-white shadow-xl shadow-slate-200">
          <h3 className="font-black uppercase tracking-tight mb-6 text-red-500">Alertas de Stock</h3>
          <div className="space-y-6">
            {[
              { nombre: "Ray-Ban Aviator", stock: 2 },
              { nombre: "Vogue Essentials", stock: 0 },
              { nombre: "Lente de Contacto Blue", stock: 1 },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="flex justify-between text-sm">
                  <span className="font-bold">{item.nombre}</span>
                  <span className={item.stock === 0 ? "text-red-500" : "text-yellow-500"}>
                    {item.stock === 0 ? "Agotado" : `${item.stock} disp.`}
                  </span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${item.stock === 0 ? "bg-red-600" : "bg-yellow-500"}`} 
                    style={{ width: `${(item.stock / 20) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 bg-white text-slate-900 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-red-600 hover:text-white transition-colors">
            Hacer Pedido a Proveedor
          </button>
        </div>

      </div>
    </div>
  );
}