import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';

import fondo from './assets/images/fondo.png'
import r1 from './assets/images/R1.png'
import mainIMG from './assets/images/bonsaving_main.png'

function Project() {
  return (
    <div className='w-full relative bg-hueso'>
        <div className='absolute w-full h-full z-0 overflow-clip'>
            <img className='w-full h-full object-cover invert' src={fondo} alt="" />
        </div>  

        <div id='top' className='col-span-8 w-full h-16 flex absolute bg-gradient-to-b from-gradienteI to-gradienteF/0 opacity-50 z-10'>
        </div>

        <div className='w-full h-auto relative'>
            <img className='absolute top-10 left-16 h-10 z-10' src={r1} alt="R1" />

            <div className='absolute top-10 right-16 flex items-center justify-center w-28 h-10 bg-charcoal rounded-2xl z-10'>
                <p className='text-lg font-medium text-white'>Menú</p>
            </div>

            <div className='w-full h-screen relative overflow-hidden'>
                <img src={mainIMG} alt="" className='w-full h-full absolute object-cover z-0' />
                
                <div className='w-full h-full flex flex-row items-end justify-between p-16'>
                    <div className='flex flex-col'>
                        <p className='text-white text-6xl md:text-9xl font-bold z-20'>BonSaving</p>
                        <em className='text-white text-7xl z-20'>Diseño UI</em>
                    </div>
                    <div className='flex z-20'>
                        <h1 className='text-white text-4xl font-thin z-20'>Hackathon</h1>
                        <i className="bi bi-info-circle"></i>
                    </div>
                </div>
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

            </div>
        </div>

        <div className='w-full h-auto sm:h-auto relative flex flex-col'>
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

export default Project