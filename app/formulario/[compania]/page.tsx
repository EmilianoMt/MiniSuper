import FormularioRecarga from "@/Components/FormularioRecarga";
import hacerRecargaTelcel from "@/actions/telcel/create";
import hacerRecargaMovistar from "@/actions/movistar/create";
import hacerRecargaAT from "@/actions/AT&T/create";

export default async function FormularioPage({ params }: { params: { compania: string } }) {
  const { compania } = await params;

  const companias: any = {
    telcel: { operador: 'Telcel', logo: '/telcel.png', hacerRecarga: hacerRecargaTelcel },
    att: { operador: 'AT&T', logo: '/att.png', hacerRecarga: hacerRecargaAT },
    movistar: { operador: 'Movistar', logo: '/movistar.png', hacerRecarga: hacerRecargaMovistar },
  };

  const datosCompania = companias[compania];

  if (!datosCompania) {
    return <div>Compañía no encontrada</div>;
  }

  return (
    <FormularioRecarga operador={datosCompania.operador} logo={datosCompania.logo} hacerRecarga={datosCompania.hacerRecarga} />
  );
}