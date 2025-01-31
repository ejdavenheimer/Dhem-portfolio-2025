import React from 'react';

function Hero() {
    return (
        <section className="bg-transparent pt-32 pb-20 px-4">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 mb-10 md:mb-0">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-blue mb-4 font-titles">
                        Desarrollador Full Stack
                    </h1>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary-green mb-6 font-body">
                        Emerson Davenheimer
                    </h2>
                    <div className="flex space-x-4">
                        <a
                            href="#" // Reemplaza # con la URL de contacto
                            className="bg-primary-green hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg inline-flex items-center"
                        >
                            Contáctame
                        </a>
                        <a
                            href="#" // Reemplaza # con la URL de tu GitHub
                            className="bg-gray-700 hover:bg-gray-800 text-white font-medium py-2 px-4 rounded-lg inline-flex items-center"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="mr-2"
                            >
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                            </svg>
                            GitHub
                        </a>
                        <a
                            href="#" // Reemplaza # con la URL de tu LinkedIn
                            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg inline-flex items-center"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="mr-2"
                            >
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <path d="M22 6l-10 7-10-7" />
                                <path d="M2 17h20" />
                            </svg>
                            LinkedIn
                        </a>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    {/* Espacio para la imagen */}
                    <div className="bg-gray-300 h-64 md:h-96"></div>
                </div>
            </div>
        </section>
    );
}

export default Hero;