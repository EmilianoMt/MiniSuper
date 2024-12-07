"use client";
import { useRouter } from "next/navigation";

export default function HistorialRecargas() {
  const router = useRouter();

  return (
    <>
      <h1 className="font-kodschasan text-5xl  font-bold text-[#7474A0] mb-8">
        Historial de recargas
      </h1>
      <button
        className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600"
        onClick={() => router.back()}
      >
        Regresar
      </button>
    </>
  );
}
