import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center p-6">
      <h1 className="text-7xl font-bold text-orange-500">404</h1>
      <p className="text-2xl mt-4 text-gray-800">Página no encontrada</p>
      <p className="mt-2 text-gray-600">La URL que intentaste visitar no existe.</p>
      <Link
        to="/"
        className="mt-6 inline-block bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition"
      >
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;