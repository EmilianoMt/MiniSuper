"use server";
import { redirect } from "next/navigation";
import { API_MOVISTAR } from "../Constants/constants";


export default async function hacerRecarga(numero_cliente: Number, monto: Number) {
  const response = await fetch(`${API_MOVISTAR}/transacciones`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ numero_cliente, monto }),
  });
  console.log(await response.json());
  
  // if (response.status === 201) {
  //   redirect("/seleccionar-compania");
  // }
  return;
}