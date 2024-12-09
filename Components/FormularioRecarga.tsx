"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Alert } from "@nextui-org/react";

export default function FormularioRecarga({ logo, operador, hacerRecarga }:{ logo: string, operador: string, hacerRecarga: (numero: number, monto: number) => Promise<void> }) {
  const [numero, setNumero] = useState("");
  const [monto, setMonto] = useState(null);
  const [error, setError] = useState({ numero: false, monto: false });
  const [alertVisible, setAlertVisible] = useState(false);
  const router = useRouter();

  const handleNumeroChange = (e: any) => {
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setNumero(value);
      setError((prev) => ({ ...prev, numero: false }));
    }
  };

  const handleMontoChange = (selectedMonto: any) => {
    setMonto(selectedMonto);
    setError((prev) => ({ ...prev, monto: false }));
  };

  const handleAceptar = async () => {
    if (!numero || !monto) {
      setError({
        numero: !numero,
        monto: !monto,
      });
      return;
    }
    await hacerRecarga(Number(numero), Number(monto));
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);
      router.push('/seleccionar-compania');
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-backgroundGray">
            {alertVisible && (
        <div className="flex items-center justify-center w-[45vh]">
          <Alert
            description="Recarga realizada"
            title="¡Éxito!"
            color="success"
            variant="faded"
          />
        </div>
      )}

      <img
        src={logo}
        alt="Logo"
        className="w-72 object-contain rounded-lg mt-4 mb-12"
      />

      <h2 className="text-8282A9 font-sans text-2xl mt-6">
        Ingresa el número de teléfono a recargar
      </h2>

      <input
        type="text"
        value={numero}
        onChange={handleNumeroChange}
        placeholder="Digite el número celular"
        className={`mt-6 mb-6 p-4 w-full max-w-md border rounded-lg text-xl font-sans text-8282A9 placeholder-8282A9 focus:outline-none focus:ring-2 focus:ring-8282A9 focus:border-8282A9 ${
          error.numero ? "border-red-500" : "border-8282A9"
        }`}
      />

      <h2 className="text-8282A9 font-sans text-2xl mb-6">
        Selecciona el monto a recargar
      </h2>

      <div className="grid grid-cols-5 gap-6 mb-8">
        {[20, 30, 50, 100, 200].map((montoOption) => (
          <button
            key={montoOption}
            onClick={() => handleMontoChange(montoOption)}
            className={`px-6 py-3 rounded-lg font-sans font-medium text-lg border ${
              monto === montoOption
                ? "bg-buttonBlue text-white"
                : error.monto
                ? "border-red-500 bg-white text-8282A9"
                : "bg-white text-8282A9 border-8282A9"
            }`}
          >
            ${montoOption}
          </button>
        ))}
      </div>

      <div className="flex gap-6">
        <button
          onClick={handleAceptar}
          className="bg-buttonBlue text-white px-8 py-3 rounded-lg font-sans font-medium text-lg"
        >
          Aceptar
        </button>
        <button
          className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 font-sans font-medium text-lg"
          onClick={() => router.back()}
        >
          Cancelar
        </button>
      </div>


    </div>
  );
}