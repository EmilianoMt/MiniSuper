"use server";
import { API_TELCEL } from "../Constants/constants";

export default async function buscarUsuarioTelcel(numero: Number) {
  const response = await fetch(`${API_TELCEL}/clientes/saldo`, {
    method: "POST",
    headers:{
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ numero, }),
  });
  
  const data = await response.json();
  console.log(data);
  
 
  return data.saldo;
}
