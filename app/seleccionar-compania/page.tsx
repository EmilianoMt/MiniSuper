"use client";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function SeleccionarCompania() {
  const router = useRouter();

  const handleCompaniaClick = (compania: any) => {
    router.push(`/formulario/${compania}`);
  };

  const handleClick = (compania: any) => {
    router.push(`/saldo/${compania}`);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#E9E9E9] p-4 font-sans">
      <h1 className="font-kodschasan text-5xl  font-bold text-[#7474A0] mb-8">
        Selecciona la compañía a recargar
      </h1>

      <div className="grid grid-cols-3 gap-8 mb-8 pb-14">
        <div className="flex flex-col">
          <button onClick={() => handleCompaniaClick("telcel")}>
            <img
              src="/telcel.png"
              alt="Telcel"
              className="w-72 h-52 object-contain rounded-lg"
            />
          </button>
          <Button
            onClick={() => handleClick("telcel")}
            className="text-white bg-[#2B217A]"
          >
            Consultar saldo
          </Button>
        </div>
        <div className="flex flex-col">
          <button onClick={() => handleCompaniaClick("att")}>
            <img
              src="/att.png"
              alt="AT&T"
              className="w-72 h-52 object-contain rounded-lg"
            />
          </button>
          <Button
            onClick={() => handleClick("att")}
            className="text-white bg-[#BBD6E9]"
          >
            Consultar saldo
          </Button>
        </div>
        <div className="flex flex-col">
          <button onClick={() => handleCompaniaClick("movistar")}>
            <img
              src="/movistar.png"
              alt="Movistar"
              className="w-72 h-52 object-contain rounded-lg"
            />
          </button>
          <Button
              onClick={() => handleClick("movistar")}
              className="text-white bg-[#49C64D]"
            >
              Consultar saldo
            </Button>
        </div>
      </div>

      <button
        className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600"
        onClick={() => router.push("/")}
      >
        Regresar
      </button>
    </div>
  );
}
