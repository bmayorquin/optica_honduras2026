"use client";

import { useState } from "react";
import { FaBox, FaArrowTrendUp, FaWallet, FaCircleCheck } from "react-icons/fa6"; // Asegúrate de tener react-icons

export default function ProductosAdmin() {
  const [productos] = useState([
    { id: 1, nombre: "Ray-Ban Aviator", categoria: "Sol", precio: 3500, stockInicial: 20 },
    { id: 2, nombre: "Oakley Holbrook", categoria: "Deportivo", precio: 4200, stockInicial: 15 },
    { id: 3, nombre: "Vogue Essentials", categoria: "Oftalmico", precio: 2800, stockInicial: 10 },
  ]);

  const [pedidos] = useState([
    { id: 101, productoId: 1, cantidad: 3, metodo: "Transferencia", total: 10500, fecha: "2024-05-20" },
    { id: 102, productoId: 2, cantidad: 1, metodo: "Contra Entrega", total: 4200, fecha: "2024-05-21" },
    { id: 103, productoId: 1, cantidad: 1, metodo: "Depósito", total: 3500, fecha: "2024-05-22" },
  ]);

  const calcularVentas = (id: number) => {
    return pedidos
      .filter(p => p.productoId === id)
      .reduce((acc, curr) => acc + curr.cantidad, 0);
  };

  return (
    <div className="p-2 space-y-10 animate-in fade-in duration-700">
      
      {/* HEADER DINÁMICO */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter">INVENTARIO INTELIGENTE</h1>
          <p className="text-slate-500 font-medium">Monitoreo de existencias y flujo de caja en tiempo real</p>
        </div>
        <div className="flex gap-2">
          <div className="bg-white px-4 py-2 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3">
             <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center"><FaArrowTrendUp /></div>
             <div>
               <p className="text-[10px] uppercase font-bold text-slate-400">Ventas Totales</p>
               <p className="text-lg font-black text-slate-800">L. {pedidos.reduce((a,b) => a + b.total, 0).toLocaleString()}</p>
             </div>
          </div>
        </div>
      </div>

      {/* SECCIÓN 1: TARJETAS DE PRODUCTOS (REEMPLAZA TABLA SIMPLE) */}
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {productos.map((prod) => {
            const vendidos = calcularVentas(prod.id);
            const disponible = prod.stockInicial - vendidos;
            const porcentaje = (disponible / prod.stockInicial) * 100;

            return (
              <div key={prod.id} className="bg-white rounded-3xl p-6 shadow-xl shadow-slate-200/50 border border-slate-50 relative overflow-hidden group hover:border-red-200 transition-all">
                <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-bl-full -mr-8 -mt-8 group-hover:bg-red-50 transition-colors" />
                
                <div className="relative">
                  <span className="text-[10px] font-black bg-slate-800 text-white px-3 py-1 rounded-full uppercase tracking-widest">
                    {prod.categoria}
                  </span>
                  <h3 className="text-xl font-black text-slate-800 mt-3">{prod.nombre}</h3>
                  
                  <div className="mt-6 flex justify-between items-end">
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase">En Tienda</p>
                      <p className={`text-4xl font-black ${disponible < 5 ? 'text-red-500' : 'text-slate-800'}`}>
                        {disponible}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-slate-400 uppercase">Vendido</p>
                      <p className="text-xl font-bold text-blue-600">{vendidos} <span className="text-[10px]">unid.</span></p>
                    </div>
                  </div>

                  {/* Barra de progreso de Stock */}
                  <div className="w-full h-2 bg-slate-100 rounded-full mt-4 overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-1000 ${disponible < 5 ? 'bg-red-500' : 'bg-green-500'}`}
                      style={{ width: `${porcentaje}%` }}
                    />
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-slate-50 flex justify-between items-center">
                     <p className="text-sm font-bold text-slate-800">Valor Generado:</p>
                     <p className="font-black text-green-600 italic">L. {(vendidos * prod.precio).toLocaleString()}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECCIÓN 2: MÉTODOS DE PAGO Y PEDIDOS */}
      <section className="grid grid-cols-1 xl:grid-cols-4 gap-8">
        
        {/* Columna Izquierda: Métodos de Pago */}
        <div className="xl:col-span-1 space-y-4">
          <h2 className="text-xl font-black text-slate-800 uppercase flex items-center gap-2">
            <FaWallet className="text-red-600" /> Flujo de Caja
          </h2>
          {["Transferencia", "Depósito", "Contra Entrega"].map((metodo) => {
            const monto = pedidos.filter(p => p.metodo === metodo).reduce((acc, curr) => acc + curr.total, 0);
            return (
              <div key={metodo} className="bg-slate-900 p-5 rounded-2xl text-white border-b-4 border-red-600 shadow-lg">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{metodo}</p>
                <p className="text-2xl font-black mt-1">L. {monto.toLocaleString()}</p>
              </div>
            );
          })}
        </div>

        {/* Columna Derecha: Tabla de Pedidos Minimalista */}
        <div className="xl:col-span-3">
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden">
            <div className="p-6 border-b border-slate-50 flex justify-between items-center bg-slate-50/50">
               <h2 className="font-black text-slate-800 uppercase flex items-center gap-2">
                 <FaCircleCheck className="text-green-500" /> Últimas Transacciones
               </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-50">
                    <th className="p-6 text-left">Referencia</th>
                    <th className="p-6 text-left">Método</th>
                    <th className="p-6 text-left">Monto</th>
                    <th className="p-6 text-center">Estado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {pedidos.map((ped) => (
                    <tr key={ped.id} className="hover:bg-slate-50/80 transition-colors group">
                      <td className="p-6">
                        <p className="font-bold text-slate-700">#UNILEN-{ped.id}</p>
                        <p className="text-[10px] text-slate-400">{ped.fecha}</p>
                      </td>
                      <td className="p-6">
                        <span className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase ${
                          ped.metodo === 'Transferencia' ? 'bg-indigo-50 text-indigo-600' :
                          ped.metodo === 'Depósito' ? 'bg-cyan-50 text-cyan-600' :
                          'bg-amber-50 text-amber-600'
                        }`}>
                          {ped.metodo}
                        </span>
                      </td>
                      <td className="p-6 font-black text-slate-800 text-lg">L. {ped.total.toLocaleString()}</td>
                      <td className="p-6 text-center">
                        <div className="flex justify-center items-center gap-1 text-green-500 font-bold text-[10px] uppercase">
                          <FaCircleCheck /> Verificado
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}