"use server";
import { redirect } from "next/navigation";
import { API_TELCEL } from "../Constants/constants";

export default async function hacerRecarga(numeroCliente: Number, monto: Number) {
  const response = await fetch(`${API_TELCEL}/transacciones`, {
    method: "POST",
    headers:{
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ numeroCliente, monto }),
  });
  console.log(numeroCliente, monto);
  
  console.log(await response.json());
  
  // if (response.status === 201) {
  //   // redirect("/seleccionar-compania");
  // }
  return;
}
