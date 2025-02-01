import React from 'react';

function Navbar() {
  return (
    <nav className="fixed top-0 p-4 bg-white/10 backdrop-blur-md text-white w-full z-10">
      <div className="container flex justify-between items-center  md:px-10">
        <a
          href="#"
          className="font-titles text-lg md:text-xl font-bold flex items-center text-primary-green z-10"
        >
          DHEM
        </a>

        <ul className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex space-x-6 md:space-x-8">
          <li>
            <a href="#" className="hover:text-gray-400 font-body text-base md:text-lg text-gray-900">
              Inicio
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400 font-body text-base md:text-lg text-gray-900">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400 font-body text-base md:text-lg text-gray-900">
              Habilidades
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400 font-body text-base md:text-lg text-gray-900">
              Contacto
            </a>
          </li>
        </ul>

        <div className="flex items-center space-x-4 z-10">
          <a
            href="TU_LINKEDIN_URL"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <i className="fab fa-linkedin text-lg md:text-xl"></i>
          </a>
          <a
            href="TU_GITHUB_URL"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <i className="fab fa-github text-lg md:text-xl"></i>
          </a>
          <a
            href="#"
            className="bg-primary-green hover:bg-green-600 text-white font-body text-sm md:text-base py-2 px-4 rounded-lg inline-flex items-center"
          >
            Ver Curriculum
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;