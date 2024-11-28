import {React, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';

import ParallaxImage from './components/ParallaxImage.tsx'

// =============== ASSETS ===============
import fondo from './assets/images/fondo.png'
import r1 from './assets/images/R1.png'
import isaac from './assets/images/IsaacPng.png'
import bonsaving from './assets/images/BonSaving_Home.png'
import zafre from './assets/images/Zafre_Home.jpg'
import f1 from './assets/images/F1_Home.png'

import ai from './assets/images/ai.png'
import figma from './assets/images/figma.png'
import pr from './assets/images/pr.png'
import ps from './assets/images/ps.png'
import ae from './assets/images/ae.png'
// import r1 from './assets/images/.png'

function Home() {
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

        <div className='w-full h-screen relative grid grid-cols-8 content-between p-16 lg:p-20'>
            <div id='top' className='col-span-8 w-full h-16 flex'>
            </div>

            <img className='absolute top-10 left-16 h-10' src={r1} alt="R1" />

            <div className='absolute top-10 right-16 flex items-center justify-center w-28 h-10 bg-charcoal rounded-2xl'>
                <p className='text-lg font-medium text-white'>Menú</p>
            </div>

            <div className='col-start-1 col-end-9 sm:col-start-3 sm:col-end-7  px-6 py-3 z-10'>
                <p className='text-2xl sm:text-4xl text-center font-bold'>"El poder no se determina por el tamaño, ¡sino por el tamaño de tu corazón y tus sueños!"</p>
                <p className='text-md sm:text-lg font-medium text-right'>Monkey D. Luffy</p>
            </div>


            <div className='col-start-1 col-end-9 md:col-start-1 md:col-end-7 z-10'>
                <h2 className='text-3xl sm:text-5xl font-bold'>Hola! Que gusto verte</h2>
                <h1 className='text-2xl sm:text-3xl font-medium'>Soy Isaac Rodríguez. Soy Diseñador gráfico y UX-UI</h1>
            </div>
        </div>

        <div className='w-full h-auto relative grid grid-cols-4 sm:grid-cols-8 content-center items-center gap-10 p-16 lg:p-20'>

            <div className='col-span-4 z-10'>
                <p className='text-2xl font-medium '>Soy Diseñador gráfico y UX-UI con base en la CDMX, entusiasmado por dar vida a ideas creativas. Disfruto colaborar con equipos multidisciplinarios para lograr resultados sorprendentes. Mi objetivo es crear diseños que no solo sean visualmente atractivos, sino también efectivos.</p>
            </div>
            <div className='col-span-4 relative'>
                <img src={isaac} alt="" />
            </div>
        </div>

        <div className='h-[200vh] sm:h-screen relative'>
            <div className='w-full h-screen sm:h-1/2 relative grid grid-cols-4 sm:grid-cols-8 content-center items-center overflow-hidden'>
                <ParallaxImage src={bonsaving} alt="BonSaving" />

                <div className="col-span-8 sm:col-start-5 sm:col-end-8 bg-gradient-to-r from-white to-glassF my-10 px-8">
                    <div className="flex flex-col items-end justify-center backdrop-blur-sm bg-white/30 border border-white/30 rounded-lg p-6 shadow-lg max-w-sm">
                        <div className='w-full flex flex-col items-start'>
                            <h2 className="text-charcoal text-4xl font-extrabold mb-1">BonSaving</h2>
                            <p className="text-charcoal text-xl font-medium mb-4">
                                Diseño UI
                            </p>
                            <div className='flex h-10 space-x-4'>
                                <img className='object-fit w-10' src={ai} alt="" />
                                <img className='object-fit w-10' src={figma} alt="" />
                            </div>
                        </div>

                        <div className='flex items-end mt-5'>
                            <button className='h-10 flex items-center justify-center bg-charcoal rounded-xl px-5 py-2'>
                                <a className='text-white' href="#">Ver proyecto</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full h-screen sm:h-1/2 relative grid grid-cols-4 sm:grid-cols-8 content-center items-center overflow-hidden'>
                <ParallaxImage src={zafre} alt="ZafreMX" />

                <div className="col-span-8 sm:col-start-5 sm:col-end-8 bg-gradient-to-r from-white to-glassF my-10 px-8">
                    <div className="flex flex-col items-end justify-center backdrop-blur-sm bg-white/30 border border-white/30 rounded-lg p-6 shadow-lg max-w-sm">
                        <div className='w-full flex flex-col items-start'>
                            <h2 className="text-charcoal text-4xl font-extrabold mb-1">ZafreMX</h2>
                            <p className="text-charcoal text-xl font-medium mb-4">
                                Identidad de marca
                            </p>
                            <div className='flex h-10 space-x-4'>
                                <img className='object-fit w-10' src={ai} alt="" />
                                <img className='object-fit w-10 invert' src={ps} alt="" />
                                <img className='object-fit w-10 invert' src={pr} alt="" />
                                <img className='object-fit w-10 invert' src={ae} alt="" />
                            </div>
                        </div>

                        <div className='flex items-end mt-5'>
                            <button className='h-10 flex items-center justify-center bg-charcoal rounded-xl px-5 py-2'>
                                <a className='text-white' href="#">Ver proyecto</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='h-screen sm:min-h-screen relative'>
            <div className='w-full h-screen sm:h-1/2 relative grid grid-cols-4 sm:grid-cols-8 content-center items-center overflow-hidden'>
                <ParallaxImage src={f1} alt="Pilotos muy Mexas" />

                <div className="col-span-8 sm:col-start-5 sm:col-end-8 bg-gradient-to-r from-white to-glassF my-10 px-8">
                    <div className="flex flex-col items-end justify-center backdrop-blur-sm bg-white/30 border border-white/30 rounded-lg p-6 shadow-lg max-w-sm">
                        <div className='w-full flex flex-col items-start'>
                            <h2 className="text-charcoal text-4xl font-extrabold mb-1">Pilotos muy Mexas</h2>
                            <p className="text-charcoal text-xl font-medium mb-4">
                                Diseño de personaje
                            </p>
                            <div className='flex h-10 space-x-4'>
                                <img className='object-fit w-10' src={ai} alt="" />
                                <img className='object-fit w-10 invert' src={ps} alt="" />
                            </div>
                        </div>

                        <div className='flex items-end mt-5'>
                            <button className='h-10 flex items-center justify-center bg-charcoal rounded-xl px-5 py-2'>
                                <a className='text-white' href="#">Ver proyecto</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full h-screen sm:h-1/2 relative flex flex-col'>
                <div className='flex items-center justify-between h-[70%] w-full px-6'>
                    <h4 className="group flex items-center text-5xl font-extrabold cursor-pointer transition-all duration-500 ease-in-out">
                        {/* Flecha que aparece al hacer hover */}
                        <span className="inline-block transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-in-out mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                        {/* Enlace a la pantalla de Projects */}
                        <Link to="/projects" className="text-black">
                            Proyectos
                        </Link>
                    </h4>

                    <a href="#top" className='w-20 h-20 flex items-center justify-center bg-charcoal rounded-full text-white'>top</a>
                </div>
                <div className='flex items-center justify-between h-[30%] w-full bg-charcoal text-hueso px-10'>
                    <a href="https://www.linkedin.com/in/isaacrrm/">LinkedIn</a>
                    <a href="">isaacrr.mata@gmail.com</a>
                    <p>2024</p>
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default Home