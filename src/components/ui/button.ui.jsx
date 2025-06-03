import React from 'react'

const Button = ({ 
    children,
    isUppercase,
    isLowercase,
    isLight,
    fullscreen = false,
    isMobile = false
 }) => {
    return (
        <button className={`
            cursor-pointer
            text-white px-6 py-3 transition shadow-md
            ${isUppercase && 'uppercase'}
            ${isLowercase && 'lowercase'} 
            ${fullscreen && !isMobile ? 'w-full' : 'w-fit'}
            ${isMobile && fullscreen && 'w-full md:w-fit'}
            ${isLight ? ' hover:bg-white hover:text-black border-white border-2' : ' bg-primary hover:bg-secondary'}

        `}>
            {children}
        </button>
    )
}

export default Button