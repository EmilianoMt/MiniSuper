"use server";
import { redirect } from "next/navigation";
import { API_ATT } from "../Constants/constants";

export default async function hacerRecarga(numero_cliente: number, monto: number): Promise<any> {
  try {
    const response = await fetch(`${API_ATT}/recargar`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        numero: numero_cliente, // Campo esperado por la API
        cantidad: monto,        // Campo esperado por la API
      }),
    });

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      return data; // Devuelve la respuesta en caso de éxito
    } else {
      console.error("Error en la recarga:", data.mensaje);
      return { error: data.mensaje }; // Manejo de errores
    }
  } catch (error) {
    console.error("Error al hacer la recarga:", error);
    return { error: "Error al conectar con el servidor" };
  }
}
