"use client";
import { useRouter } from "next/navigation";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-backgroundPurple font-sans">
      <div className=" flex flex-grow-0 justify-center items-center gap-5 pb-10 ">
        <AiOutlineShoppingCart size="200" />
      </div>
      <div className="flex items-center gap-5">
        <button
          className="font-kodschasan text-xl px-6 py-3 rounded-lg bg-buttonBlue text-white border border-white hover:bg-opacity-90 transition"
          onClick={() => router.push("/seleccionar-compania")}
        >
          Hacer Recarga
        </button>
        <button
          className="font-kodschasan text-xl px-6 py-3 rounded-lg bg-buttonBlue text-white border border-white hover:bg-opacity-90 transition"
          onClick={() => router.push("/historial-recargas")}
        >
          Historial de recargas
        </button>
      </div>
    </div>
  );
}
