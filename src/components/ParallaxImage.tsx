import React, { useState } from 'react';

const ParallaxImage = ({ src, alt }) => {
    const [offsetX, setOffsetX] = useState(0);
    const [offsetY, setOffsetY] = useState(0);

    const handleMouseMove = (event) => {
        const { clientX, clientY, currentTarget } = event;
        const { width, height } = currentTarget.getBoundingClientRect();

        // Calcular el centro del contenedor
        const centerX = width / 2;
        const centerY = height / 2;

        // Calcular la distancia del cursor al centro del contenedor
        const offsetX = (clientX - centerX) / width;
        const offsetY = (clientY - centerY) / height;

        // Limitar el desplazamiento máximo y ajustar el efecto
        const maxOffset = 15; // Ajusta este valor para el efecto deseado
        setOffsetX(Math.min(Math.max(offsetX * maxOffset, -maxOffset), maxOffset));
        setOffsetY(Math.min(Math.max(offsetY * maxOffset, -maxOffset), maxOffset));
    };

    return (
        <div
            className='absolute w-full h-full overflow-hidden'
            onMouseMove={handleMouseMove}
        >
            <img
                className='w-full h-full object-cover'
                src={src}
                alt={alt}
                style={{
                    transform: `scale(1.1) translate(${offsetX}px, ${offsetY}px)`,
                    transition: 'transform 0.1s ease-out',
                }}
            />
        </div>
    );
};

export default ParallaxImage;
