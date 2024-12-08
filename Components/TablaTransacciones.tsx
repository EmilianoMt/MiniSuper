"use client";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";

interface Transaccion {
  id: string;
  fecha: string;
  compañia: string;
  monto: number;
  numeroCliente: string;
  estado: string[];
}

interface TablaTransaccionesProps {
  transacciones: Transaccion[];
}

const columns = [
  { key: "fecha", label: "Fecha y hora" },
  { key: "compañia", label: "Operador" },
  { key: "monto", label: "Monto" },
  { key: "numeroCliente", label: "Número" },
  { key: "estado", label: "Estado" },
];

export default function TablaTransacciones({ transacciones }: TablaTransaccionesProps) {
  const formatFechaHora = (fechaHora: string) => {
    const date = new Date(fechaHora);
    const fecha = date.toISOString().split('T')[0];
    const hora = date.toTimeString().split(' ')[0].substring(0, 5);
    return `${fecha}, ${hora}`;
  };

  return (
    <Table aria-label="Historial de recargas">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn className="text-black text-md font-bold" key={column.key}>
            {column.label}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={transacciones}>
        {(item:any) => (
          <TableRow className="text-gray-500" key={item.id}>
            {(columnKey) => (
              <TableCell>
                {columnKey === "fecha"
                  ? formatFechaHora(item[columnKey])
                  : item[columnKey]}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}