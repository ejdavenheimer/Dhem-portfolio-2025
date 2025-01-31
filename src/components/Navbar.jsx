import React from 'react';

function Navbar() {
  return (
    <nav className="fixed top-0 p-4 bg-white/10 backdrop-blur-md text-white w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="font-titles text-lg md:text-xl font-bold flex items-center text-primary-green">
          {/* Logo DHEM */}
          DHEM
        </a>

        <ul className="flex space-x-6 md:space-x-8">
          <li><a href="#" className="hover:text-gray-400 font-body text-base md:text-lg text-gray-900">Inicio</a></li>
          <li><a href="#" className="hover:text-gray-400 font-body text-base md:text-lg text-gray-900">Proyectos</a></li>
          <li><a href="#" className="hover:text-gray-400 font-body text-base md:text-lg text-gray-900">Habilidades</a></li>
          <li><a href="#" className="hover:text-gray-400 font-body text-base md:text-lg text-gray-900">Contacto</a></li>
        </ul>

        <a href="#" className="bg-primary-green  hover:bg-green-600 text-white font-body text-base md:text-lg py-2 px-4 rounded-lg inline-flex items-center">
          <i className="fa-solid fa-eye mr-2"></i>
          Ver CV
        </a>
      </div>
    </nav>
  );
}

export default Navbar;