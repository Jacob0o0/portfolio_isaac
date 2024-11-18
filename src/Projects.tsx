import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';

import ParallaxImage from './components/ParallaxImage.tsx'

// =============== ASSETS ===============
import fondo from './assets/images/fondo.png'
import r1 from './assets/images/R1.png'
import isaac from './assets/images/IsaacPng.png'
import bonsaving from './assets/images/bonsaving_p.png'
import kachi from './assets/images/kachi_p.png'
import conexxion from './assets/images/conexxion_p.png'
import poketrash from './assets/images/poketrash_p.png'
import zafre from './assets/images/zafre_p.png'
import sinergia from './assets/images/sinergia_p.png'
import f1 from './assets/images/f1_p.png'
import caballeros from './assets/images/caballeros_p.png'
// import r1 from './assets/images/.png'

const projectsUI = [
    {
      title: 'BON SAVING',
      subtitle: 'Diseño UI',
      image: bonsaving
    },
    {
      title: 'CONEXXIÓN',
      subtitle: 'Diseño UX-UI',
      image: conexxion
    },
    {
      title: 'POKETRASH',
      subtitle: 'Diseño UX-UI',
      image: poketrash
    },
    {
      title: 'KACHI',
      subtitle: 'Diseño UX-UI',
      image: kachi,
      locked: true
    }
  ];

  const projectsDisenio = [
    {
      title: 'ZAFRE MX',
      subtitle: 'Branding',
      image: zafre
    },
    {
      title: 'SINERGIA',
      subtitle: 'Branding',
      image: sinergia
    },
    {
      title: 'PILOTOS MUY MEXAS',
      subtitle: 'Diseño de personajes',
      image: f1
    },
    {
      title: 'CABALLEROS POR LA SALUD',
      subtitle: 'Branding / Campaña social',
      image: caballeros,
      locked: false
    }
  ];

function Projects() {
    const [isLoading, setIsLoading] = useState(true); // Estado para el loading screen

    useEffect(() => {
        // Simula un retraso de 2 segundos para la pantalla de carga
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="w-full h-screen flex items-center justify-center bg-hueso">
                <div className="flex flex-col items-center justify-center">
                    <div className="w-12 h-12 bg-charcoal rounded-full animate-pulse-custom"></div>
                    <p className="mt-4 text-xl font-bold">Cargando...</p>
                </div>
            </div>
        );
    }

  return (
    <div className='w-full relative bg-hueso'>
        <div className='absolute w-full h-full z-0 overflow-clip'>
            <img className='w-full h-full object-cover invert' src={fondo} alt="" />
        </div>  

        <div id='top' className='col-span-8 w-full h-16 flex absolute bg-gradient-to-b from-gradienteI to-gradienteF/0 opacity-50 z-10'>
        </div>

        <div className='w-full h-auto relative p-16'>
            <div id='top' className='col-span-8 w-full h-64 flex'>
            </div>

            <img className='absolute top-10 left-16 h-10' src={r1} alt="R1" />

            <div className='absolute top-10 right-16 flex items-center justify-center w-28 h-10 bg-charcoal rounded-2xl'>
                <p className='text-lg font-medium text-white'>Menú</p>
            </div>


            <div className='mb-10 z-10'>
                <h1 className='text-5xl sm:text-7xl font-bold'>Proyectos</h1>
            </div>
            <div className="z-10 space-x-5">
                {/* Botón UX-UI */}
                <button className="border border-black rounded-full px-6 py-1 text-lg font-medium hover:bg-gray-100 transition-all duration-300">
                    UX-UI
                </button>
                
                {/* Botón GRÁFICO */}
                <button className="border border-black rounded-full px-6 py-1 text-lg font-medium hover:bg-gray-100 transition-all duration-300">
                    GRÁFICO
                </button>
            </div>

            <div className='flex flex-col items-center justify-center mt-10'>
                <h2 className='font-medium text-xl'>UX - UI</h2>

                <div className="w-full mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {projectsUI.map((project, index) => (
                    <div key={index} className="relative overflow-hidden">
                        <img
                        src={project.image}
                        alt={project.title}
                        className={`w-full h-52 object-cover rounded-lg ${project.locked ? 'opacity-50' : ''}`}
                        />
                        {project.locked && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-lock-fill text-white" viewBox="0 0 16 16">
                                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"/>
                            </svg>
                        </div>
                        )}
                        <div className="p-4">
                        <h3 className="text-xl font-bold">{project.title}</h3>
                        <p className="text-gray-600">{project.subtitle}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>

            <h2 className='font-medium text-xl mt-10 text-center'>GRÁFICO</h2>

            <div className="w-full mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {projectsDisenio.map((project, index) => (
                <div key={index} className="relative overflow-hidden">
                    <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-52 object-cover rounded-lg ${project.locked ? 'opacity-50' : ''}`}
                    />
                    {project.locked && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 17v-1m-6 4v-4a4 4 0 118 0v4M6 11V9a6 6 0 1112 0v2" />
                        </svg>
                    </div>
                    )}
                    <div className="p-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-gray-600">{project.subtitle}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>

        <div className='w-full h-screen sm:h-auto relative flex flex-col'>
            <div className='flex items-center justify-between h-32 w-full px-6 mb-10'>
                <h4 className="group flex items-center text-5xl font-extrabold cursor-pointer transition-all duration-500 ease-in-out">
                    {/* Flecha que aparece al hacer hover */}
                    <span className="inline-block transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-in-out mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </span>
                    {/* Enlace a la pantalla de Projects */}
                    <Link to="/projects" className="text-black">
                        Acerca de mí
                    </Link>
                </h4>

                <a href="#top" className='w-20 h-20 flex items-center justify-center bg-charcoal rounded-full text-white'>top</a>
            </div>
            <div className='flex items-center justify-between h-32 w-full bg-charcoal text-hueso px-10'>
                <a href="https://www.linkedin.com/in/isaacrrm/">LinkedIn</a>
                <a href="">isaacrr.mata@gmail.com</a>
                <p>2024</p>
            </div>
        </div>
    </div>
  )
}

export default Projects