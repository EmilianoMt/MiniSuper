import { API_MOVISTAR, API_TELCEL } from "@/actions/Constants/constants";
import TablaTransacciones from "@/Components/TablaTransacciones";
import Link from "next/link";

export default async function HistorialRecargas() {
  const recargasTelcel = await fetch(`${API_TELCEL}/transacciones`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const responseRecargasT = await recargasTelcel.json();

  const recargasMovistar = await fetch(`${API_MOVISTAR}/transacciones`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const responseRecargasM = await recargasMovistar.json();

  const DatosEstandarizados = (data: any, source: string) => {
    return data.map((item: any) => ({
      id: item.id || item._id,
      fecha: item.fecha || item.fecha_hora,
      compañia: item.compañia || item.conpañia,
      monto: item.monto,
      numeroCliente: item.numeroCliente || item.numero_cliente,
      estado: item.estado,
      source: source,
    }));
  };

  const EstandarRecargasT = DatosEstandarizados(responseRecargasT, "Telcel");
  const EstandarRecargasM = DatosEstandarizados(responseRecargasM, "Movistar");

  const responseRecargas = EstandarRecargasT.concat(EstandarRecargasM);

  return (
    <div className="flex flex-col items-center w-screen h-screen bg-slate-100">
      <div className="flex justify-center w-full flex-grow-0 p-8">
        <h1 className="font-kodschasan text-5xl font-bold text-[#7474A0] mb-8">
          Historial de recargas
        </h1>
      </div>
      <div className="flex flex-grow-0 w-[90%]">
        <TablaTransacciones transacciones={responseRecargas} />
      </div>
      <Link href="/" className="flex p-8">
        <button
          type="button"
          className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600"
        >
          Regresar
        </button>
      </Link>
    </div>
  );
}
