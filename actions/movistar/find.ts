"use server";
import { API_MOVISTAR } from "../Constants/constants";


export default async function buscarUsuarioMovistar(numero: Number,) {
  console.log(numero);

  const response = await fetch(`${API_MOVISTAR}/clientes/saldo`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({numero}),
  });
  
  const data = await response.json();
  
  return data.saldo;
}