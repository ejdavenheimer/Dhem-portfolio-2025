import React, { useRef, useState, useEffect } from 'react';

function Hero() {
  const emailRef = useRef(null);
  const [isCopied, setIsCopied] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const navHeight = document.querySelector('nav').offsetHeight;
    setNavbarHeight(navHeight);

    const handleResize = () => {
      const navbarHeight = document.querySelector('nav').offsetHeight;
      setNavbarHeight(navbarHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(emailRef.current.innerText)
      .then(() => {
        setIsCopied(true);
        setShowTooltip(true);
        setTimeout(() => {
          setIsCopied(false);
          setShowTooltip(false);
        }, 2000);
      })
      .catch(err => {
        console.error('Error al copiar: ', err);
      });
  };

  return (
    <>
      <nav className="fixed top-0 bg-white/10 backdrop-blur-md text-white w-full z-10">
        {/* ... (Contenido del Navbar, no cambia) */}
      </nav>

      <section className="bg-transparent px-4 md:px-10 lg:px-20" style={{ paddingTop: navbarHeight + "px" }}>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center" style={{ minHeight: `calc(100vh - ${navbarHeight}px)` }}>
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-blue mb-4 font-titles">
              Desarrollador Full Stack
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary-green mb-6 font-body">
              Emerson Davenheimer
            </h2>
            <div className="flex items-stretch border w-80 border-gray-800 rounded-l-md bg-gray-700 relative">
              <label
                htmlFor="email"
                className="text-gray-300 font-bold px-2 py-1 whitespace-nowrap rounded-l border-r border-gray-800 bg-gray-600 flex items-center"
              >
                Contáctame
              </label>
              <span
                ref={emailRef}
                className="text-gray-50 px-2 py-1 select-all flex-grow"
                id="email"
              >
                ejdavenheimer@gmail.com
              </span>
              <button
                onClick={copyEmailToClipboard}
                className="py-1 px-2 rounded-r-md bg-gray-500 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-blue relative"
                title={isCopied ? "Copiado!" : "Copiar correo"}
              >
                {!isCopied && <i className="fa-regular fa-copy text-gray-300" />}
                {isCopied && <i className="fas fa-check text-gray-800" />}
                {showTooltip && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 bg-gray-800 text-white px-2 py-1 rounded-md text-sm pointer-events-none whitespace-nowrap">
                    ¡Copiado!
                  </div>
                )}
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/4 absolute bottom-0 right-0 md:static flex justify-end">
            <img
              src="./src/assets/images/me.png"
              alt="Emerson Davenheimer"
              className="w-full md:w-auto rounded-lg shadow-lg object-contain"
              style={{ maxHeight: `calc(100vh - ${navbarHeight}px - 100px)` }}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;