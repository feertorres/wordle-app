import React from 'react'

export const Tutorial = () => {
  return (
    <div>
        <div className='text-left'>
            <p className='my-3 mx-1'>Adivina la palabra oculta en cinco intentos.</p>
            <p className='my-3 mx-1'>Cada intento debe ser una palabra válida de 5 letras.</p>
            <p className='my-3 mx-1'>Después de cada intento el color de las letras cambia para mostrar qué tan cerca estás de acertar la palabra.</p>
        </div>
        <p className='text-left font-bold'>Ejemplos</p>
        <div className="flex flex-row justify-center">
            <input className="text-2xl my-3 mx-1 block border-gray-400 rounded-md w-12 h-12 border text-center bg-lime-500" value="G" disabled/>
            <input className="text-2xl my-3 mx-1 block border-gray-400 rounded-md w-12 h-12 border text-center" value="A" disabled/>
            <input className="text-2xl my-3 mx-1 block border-gray-400 rounded-md w-12 h-12 border text-center" value="T" disabled/>
            <input className="text-2xl my-3 mx-1 block border-gray-400 rounded-md w-12 h-12 border text-center" value="O" disabled/>
            <input className="text-2xl my-3 mx-1 block border-gray-400 rounded-md w-12 h-12 border text-center" value="S" disabled/>
        </div>
        <p className='text-left my-3 mx-1'>La letra <b>G</b> está en la palabra y en la posición correcta.</p>
        <div className="flex flex-row justify-center">
            <input className="text-2xl my-3 mx-1 block border-gray-400 rounded-md w-12 h-12 border text-center" value="V" disabled/>
            <input className="text-2xl my-3 mx-1 block border-gray-400 rounded-md w-12 h-12 border text-center" value="O" disabled/>
            <input className="text-2xl my-3 mx-1 block border-gray-400 rounded-md w-12 h-12 border text-center bg-yellow-300" value="C" disabled/>
            <input className="text-2xl my-3 mx-1 block border-gray-400 rounded-md w-12 h-12 border text-center" value="A" disabled/>
            <input className="text-2xl my-3 mx-1 block border-gray-400 rounded-md w-12 h-12 border text-center" value="L" disabled/>
        </div>
        <p className='text-left my-3 mx-1'>La letra <b>C</b> está en la palabra pero en la posición incorrecta.</p>
        <div className="flex flex-row justify-center">
            <input className="text-2xl my-3 mx-1 block border-gray-400 rounded-md w-12 h-12 border text-center" value="C" disabled/>
            <input className="text-2xl my-3 mx-1 block border-gray-400 rounded-md w-12 h-12 border text-center" value="A" disabled/>
            <input className="text-2xl my-3 mx-1 block border-gray-400 rounded-md w-12 h-12 border text-center" value="N" disabled/>
            <input className="text-2xl my-3 mx-1 block border-gray-400 rounded-md w-12 h-12 border text-center" value="T" disabled/>
            <input className="text-2xl my-3 mx-1 block border-gray-400 rounded-md w-12 h-12 border text-center bg-neutral-400" value="O" disabled/>
        </div>
        <p className='text-left my-3 mx-1'>La letra <b>O</b> no está en la palabra.</p>
        <p className='text-left my-3 mx-1'>Puede haber letras repetidas. Las pistas son independientes para cada letra.</p>
        <p>¡Una palabra nueva cada 5 minutos!</p>
    </div>
  )
}