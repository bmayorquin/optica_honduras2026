"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid"; // Genera token único

interface Producto {
  id: string;
  nombre: string;
  precio: number;
  cantidad: number;
}

export default function PagoInteractivo() {
  const router = useRouter();
  const [productos, setProductos] = useState<Producto[]>([]);
  const [metodoPago, setMetodoPago] = useState("tarjeta");
  const [numero, setNumero] = useState("");
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [cvv, setCvv] = useState("");
  const [focusCvv, setFocusCvv] = useState(false);
  const [tipoTarjeta, setTipoTarjeta] = useState("");

  const [banco, setBanco] = useState("");
  const [comprobante, setComprobante] = useState<File | null>(null);
  const [tokenCompra, setTokenCompra] = useState("");

  // Cargar carrito
  useEffect(() => {
    const stored = localStorage.getItem("carrito");
    if (stored) setProductos(JSON.parse(stored));
  }, []);

  // Validaciones
  const detectarTipoTarjeta = (num: string) => {
    const limpio = num.replace(/\D/g, "");
    if (/^4/.test(limpio)) return "Visa";
    if (/^5[1-5]/.test(limpio)) return "MasterCard";
    if (/^3[47]/.test(limpio)) return "Amex";
    return "";
  };
  const formatearNumero = (val: string) => {
    const limpio = val.replace(/\D/g, "").slice(0, 16);
    setTipoTarjeta(detectarTipoTarjeta(limpio));
    return limpio.replace(/(\d{4})(?=\d)/g, "$1 ");
  };
  const manejarNombre = (val: string) => val.replace(/[^a-zA-Z\s]/g, "").slice(0, 26);
  const formatearFecha = (val: string) => {
    const limpio = val.replace(/\D/g, "").slice(0, 4);
    return limpio.length > 2 ? limpio.slice(0, 2) + "/" + limpio.slice(2) : limpio;
  };
  const formatearCvv = (val: string) => val.replace(/\D/g, "").slice(0, tipoTarjeta === "Amex" ? 4 : 3);
  const validarFecha = (valor: string) => {
    const [mesStr, anioStr] = valor.split("/");
    if (!mesStr || !anioStr) return false;
    const mes = parseInt(mesStr, 10);
    const anio = parseInt(anioStr, 10) + 2000;
    const fechaActual = new Date();
    const fechaInput = new Date(anio, mes - 1);
    return fechaInput >= new Date(fechaActual.getFullYear(), fechaActual.getMonth());
  };

  const total = productos.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

  const tarjetaCompleta =
    numero.replace(/\s/g, "").length >= 15 &&
    nombre.length >= 3 &&
    fecha.length === 5 &&
    validarFecha(fecha) &&
    cvv.length === (tipoTarjeta === "Amex" ? 4 : 3);

  const transferenciaCompleta = banco !== "" && comprobante !== null;
  const contraEntregaCompleta = comprobante !== null;

  const puedeContinuar =
    (metodoPago === "tarjeta" && tarjetaCompleta) ||
    (metodoPago === "transferencia" && transferenciaCompleta) ||
    (metodoPago === "contraEntrega" && contraEntregaCompleta);

  const mostrarNumero = numero.padEnd(19, "#");
  const mostrarNombre = nombre || "NOMBRE APELLIDO";
  const mostrarFecha = fecha || "MM/YY";
  const mostrarCvv = cvv || "CVV";

  const finalizarCompra = () => {
    if (!puedeContinuar) {
      alert("Complete correctamente los datos");
      return;
    }
    const token = uuidv4();
    setTokenCompra(token);
    localStorage.setItem(
      "ultimoPago",
      JSON.stringify({ token, metodoPago, total, productos })
    );
    localStorage.removeItem("carrito");
    router.push("/confirmar");
  };

  // Mostrar número de cuenta según el banco
  const cuentasBancarias: { [key: string]: string } = {
    "Banco Atlántida": "Cuenta: 1234567890 - Ópticas Unilen",
    "Banco Ficohsa": "Cuenta: 0987654321 - Ópticas Unilen",
    "Banco BAC": "Cuenta: 1122334455 - Ópticas Unilen",
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6 flex flex-col md:flex-row justify-center items-start gap-10">
      {/* Tarjeta interactiva */}
      {metodoPago === "tarjeta" && (
        <div className="w-full md:w-96 mt-20 flex justify-center">
          <div className="perspective-1000 w-96 h-56 relative">
            <div
              className="w-full h-full rounded-2xl shadow-xl transform transition-transform duration-700"
              style={{
                transformStyle: "preserve-3d",
                transform: focusCvv ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              {/* Front */}
              <div className="absolute w-full h-full backface-hidden bg-red-600 text-white rounded-2xl p-6 flex flex-col justify-between relative">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-lg">Óptica</span>
                  <Image src="/logovector.png" alt="Unilen" width={70} height={70} />
                </div>
                <div className="text-lg font-mono tracking-widest">{mostrarNumero}</div>
                <div className="flex justify-between items-center mt-4">
                  <div>{mostrarNombre.toUpperCase()}</div>
                  <div>{mostrarFecha}</div>
                </div>
              </div>
              {/* Back */}
              <div className="absolute w-full h-full backface-hidden bg-gray-800 text-white rounded-2xl p-6 transform rotate-y-180 flex flex-col justify-center">
                <div className="bg-black h-8 w-full mb-4"></div>
                <div className="flex justify-end pr-4 mb-4">
                  <div className="bg-white text-black px-2 py-1 rounded w-20 text-center">{mostrarCvv}</div>
                </div>
                <p className="text-center text-sm text-yellow-300 font-semibold">
                  🎉 ¡Gracias por escoger Ópticas Unilen!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Formulario */}
      <div className="flex flex-col gap-6 w-full max-w-md">
        <div className="bg-white p-6 rounded-2xl shadow-xl flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">Forma de Pago</h1>

          <div className="flex gap-4 justify-around mb-4">
            <button
              className={`px-4 py-2 rounded-lg ${metodoPago === "tarjeta" ? "bg-red-600 text-white" : "bg-gray-200"}`}
              onClick={() => setMetodoPago("tarjeta")}
            >Tarjeta</button>
            <button
              className={`px-4 py-2 rounded-lg ${metodoPago === "transferencia" ? "bg-red-600 text-white" : "bg-gray-200"}`}
              onClick={() => setMetodoPago("transferencia")}
            >Transferencia</button>
            <button
              className={`px-4 py-2 rounded-lg ${metodoPago === "contraEntrega" ? "bg-red-600 text-white" : "bg-gray-200"}`}
              onClick={() => setMetodoPago("contraEntrega")}
            >Pago contra entrega</button>
          </div>

          {/* Formulario dinámico */}
          {metodoPago === "tarjeta" && (
            <div className="flex flex-col gap-3">
              <input type="text" placeholder="Número de tarjeta" value={numero} onChange={(e) => setNumero(formatearNumero(e.target.value))} className="border rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-red-400 transition"/>
              <input type="text" placeholder="Nombre del titular" value={nombre} onChange={(e) => setNombre(manejarNombre(e.target.value))} className="border rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-red-400 transition"/>
              <input type="text" placeholder="Fecha MM/YY" value={fecha} onChange={(e) => setFecha(formatearFecha(e.target.value))} className={`border rounded-lg px-4 py-3 w-full focus:ring-2 ${fecha && !validarFecha(fecha) ? "ring-red-600" : "ring-red-400"} transition`} maxLength={5}/>
              <input type="text" placeholder="CVV" value={cvv} onChange={(e) => setCvv(formatearCvv(e.target.value))} onFocus={() => setFocusCvv(true)} onBlur={() => setFocusCvv(false)} className="border rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-red-400 transition"/>
            </div>
          )}

          {metodoPago === "transferencia" && (
            <div className="flex flex-col gap-3">
              <label>Seleccione banco:</label>
              <select value={banco} onChange={(e) => setBanco(e.target.value)} className="border rounded-lg px-4 py-2 w-full">
                <option value="">-- Seleccione --</option>
                <option value="Banco Atlántida">Banco Atlántida</option>
                <option value="Banco Ficohsa">Banco Ficohsa</option>
                <option value="Banco BAC">Banco BAC</option>
              </select>

              {/* Mostrar cuenta solo si banco está seleccionado */}
              {banco && (
                <p className="bg-gray-200 p-3 rounded font-mono text-gray-800">
                  {cuentasBancarias[banco]}
                </p>
              )}

              <label>Subir comprobante de pago:</label>
              <input
                type="file"
                accept="image/*,application/pdf"
                onChange={(e) => e.target.files && setComprobante(e.target.files[0])}
                className="border rounded-lg px-4 py-2"
                disabled={!banco} // No permite subir antes de seleccionar banco
              />
              {!comprobante && <p className="text-red-600 text-sm">⚠️ Debe subir el comprobante antes de continuar</p>}
            </div>
          )}

          {metodoPago === "contraEntrega" && (
            <div className="flex flex-col gap-3">
              <label>Subir comprobante de pago:</label>
              <input
                type="file"
                accept="image/*,application/pdf"
                onChange={(e) => e.target.files && setComprobante(e.target.files[0])}
                className="border rounded-lg px-4 py-2"
              />
              {!comprobante && <p className="text-red-600 text-sm">⚠️ Debe subir el comprobante antes de continuar</p>}
            </div>
          )}

          <button
            onClick={finalizarCompra}
            className={`px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105 ${puedeContinuar ? "bg-red-600 text-white hover:bg-red-800" : "bg-gray-400 text-gray-700 cursor-not-allowed"}`}
            disabled={!puedeContinuar}
          >
            Continuar
          </button>
        </div>

        {/* Resumen de compra */}
<div className="bg-white p-6 rounded-2xl shadow-xl">
  <h2 className="font-bold text-lg mb-4">Resumen de compra</h2>

  {productos.map((p) => (
    <div key={p.id} className="flex justify-between items-center mb-2">
      <div>
        {p.nombre} x {p.cantidad}
      </div>

      <div className="flex items-center gap-3">
        <span>
          L.
          {(p.precio * p.cantidad).toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </span>
      </div>
    </div>
  ))}

  <div className="flex justify-between font-bold mt-4 border-t pt-2">
    <span>Total</span>

    <span>
      L.
      {total.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}
    </span>
  </div>
</div>
      </div>
    </main>
  );
}