'use client';

import { useRouter } from 'next/navigation';
<link href="https://fonts.googleapis.com/css2?family=Kodchasan:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-backgroundPurple font-sans">
      {/* Ícono del carrito */}
      <div className="mb-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-28 w-28 text-white" // Tamaño más grande del ícono
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5} // Líneas más delgadas
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5H3m4 8l1.5 6h9l1.5-6M9 21a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2z"
          />
        </svg>
      </div>


      <div className="flex space-x-4">
        <button
          className="px-6 py-3 rounded-lg bg-buttonBlue text-white border border-white hover:bg-opacity-90 transition"
          onClick={() => router.push('/seleccionar-compania')}
        >
          Hacer Recarga
        </button>
        <button
          className="px-6 py-3 rounded-lg bg-buttonBlue text-white border border-white hover:bg-opacity-90 transition"
          onClick={() => router.push('/realizar-venta')}
        >
          Realizar venta
        </button>
      </div>
    </div>
  );
}

