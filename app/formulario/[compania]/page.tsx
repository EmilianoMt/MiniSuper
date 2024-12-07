import FormularioRecarga from "@/Components/FormularioRecarga";

export default async function FormularioPage({ params }: { params: { compania: string } }) {
  const { compania } = await params;

  const companias: any = {
    telcel: { operador: 'Telcel', logo: '/telcel.png' },
    att: { operador: 'AT&T', logo: '/att.png' },
    movistar: { operador: 'Movistar', logo: '/movistar.png' },
  };

  const datosCompania = companias[compania];

  if (!datosCompania) {
    return <div>Compañía no encontrada</div>;
  }

  return (
    <FormularioRecarga operador={datosCompania.operador} logo={datosCompania.logo} />
  );
}