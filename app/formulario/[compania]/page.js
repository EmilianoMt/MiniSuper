import FormularioRecarga from '@/components/FormularioRecarga';

export default function FormularioPage({ params }) {
  const { compania } = params;


  const companias = {
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
