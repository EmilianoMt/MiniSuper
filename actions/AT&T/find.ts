"use server";
import { redirect } from "next/navigation";
import { API_ATT } from "../Constants/constants";

export default async function buscarUsuarioAtt(numero: number) {
  try {
    const response = await fetch(`${API_ATT}/saldo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ numero }), // El número del cliente
    });

    const data = await response.json();
    console.log("Saldo del cliente:", data);

    if (response.ok) {
      return data.saldo; // Devuelve el saldo directamente
    } else {
      console.error("Error al consultar saldo:", data.mensaje);
      return { error: data.mensaje };
    }
  } catch (error) {
    console.error("Error al conectar con el servidor:", error);
    return { error: "Error al conectar con el servidor" };
  }
}

