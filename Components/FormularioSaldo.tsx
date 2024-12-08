"use client";
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Input,
  Button,
  Link,
  Alert,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function FormularioSaldo({
  logo,
  operador,
  buscarUsuario,
}: {
  logo: string;
  operador: string;
  buscarUsuario: (numero: number) => Promise<number>;
}) {
  const router = useRouter();

  const [numero, setNumero] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertVisibleUser, setAlertVisibleUser] = useState(false);
  const [saldo, setSaldo] = useState<number | null>(null);

  const handleNumeroChange = (e: any) => {
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setNumero(value);
    }
  };

  const handleAceptar = async () => {
    if (numero !== null) {
      const saldo = await buscarUsuario(Number(numero));
      setSaldo(saldo);
      console.log(saldo);
      if (saldo === undefined) {
        setAlertVisibleUser(true);
        setTimeout(() => {
            setAlertVisible(false);
            router.push("/seleccionar-compania");
          }, 4000);
      }else{
        setAlertVisible(true);
        setTimeout(() => {
          setAlertVisible(false);
          router.push("/seleccionar-compania");
        }, 8000);
      }
     
    }
  };

  return (
    <div className="flex flex-col items-center">
      {alertVisible && (
        <div className="flex items-center justify-center w-[70vh] pb-5">
          <Alert
            description={`Tu saldo es de ${saldo}`}
            title="Saldo consultado"
            color="success"
            variant="faded"
          />
        </div>
      )}

      {alertVisibleUser && (
        <div className="flex items-center justify-center w-[70vh] pb-5">
          <Alert
            description="El usuario no fue encontrado"
            title="Usuario no encontrado"
            color="danger"
            variant="faded"
          />
        </div>
      )}
      <Card className="w-[70vh]">
        <CardHeader className="flex flex-col items-center">
          <img
            src={logo}
            alt={operador}
            className="w-72 h-52 object-contain rounded-lg"
          />
          <h1 className="font-kodschasan text-5xl font-bold text-center text-black">
            {operador}
          </h1>
        </CardHeader>
        <Divider />
        <CardBody className="flex items-center">
          <div className="flex flex-col items-center w-[50vh]">
            <Input
              type="tel"
              label="Número de teléfono"
              value={numero}
              required
              className="mb-4"
              onChange={handleNumeroChange}
            />
            <div className="flex gap-3">
              <Button color="primary" onClick={handleAceptar}>
                Aceptar
              </Button>
              <Link href="/seleccionar-compania">
                <Button color="danger">Regresar</Button>
              </Link>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
