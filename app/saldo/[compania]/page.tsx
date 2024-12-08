import buscarUsuarioMovistar from "@/actions/movistar/find";
import buscarUsuarioTelcel from "@/actions/telcel/find";
import FormularioSaldo from "@/Components/FormularioSaldo";

export default async function consultarSaldo({
  params,
}: {
  params: { compania: string };
}) {
  const { compania } = await params;

  const companias: any = {
    telcel: {
      operador: "Telcel",
      logo: "/telcel.png",
      buscarUsuario: buscarUsuarioTelcel,
    },
    att: {
      operador: "AT&T",
      logo: "/att.png",
    },
    movistar: {
      operador: "Movistar",
      logo: "/movistar.png",
      buscarUsuario: buscarUsuarioMovistar,
    },
  };
  const datosCompania = companias[compania];

  return (
    <main className="flex justify-center items-center h-screen w-screen bg-slate-100">
      <div className="flex justify-center items-center">
        <FormularioSaldo
          logo={datosCompania.logo}
          operador={datosCompania.operador}
          buscarUsuario={datosCompania.buscarUsuario}
        />
      </div>
    </main>
  );
}
