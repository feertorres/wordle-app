import React from 'react'

export const Tutorial = () => {
  return (
    <div>
        <div>
            Adivina la palabra oculta en cinco intentos.

            Cada intento debe ser una palabra válida de 5 letras.

            Después de cada intento el color de las letras cambia para mostrar qué tan cerca estás de acertar la palabra.
        </div>
        <p>Ejemplos</p>
        <div className="flex flex-row">
            <input className="focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-400 rounded-md w-12 h-12 border text-center bg-lime-500" value="G" disabled/>
            <input className="focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-400 rounded-md w-12 h-12 border text-center" value="A" disabled/>
            <input className="focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-400 rounded-md w-12 h-12 border text-center" value="T" disabled/>
            <input className="focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-400 rounded-md w-12 h-12 border text-center" value="O" disabled/>
            <input className="focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-400 rounded-md w-12 h-12 border text-center" value="S" disabled/>
        </div>
        <p>La letra G está en la palabra y en la posición correcta.</p>
        <div className="flex flex-row">
            <input className="focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-400 rounded-md w-12 h-12 border text-center" value="V" disabled/>
            <input className="focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-400 rounded-md w-12 h-12 border text-center" value="O" disabled/>
            <input className="focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-400 rounded-md w-12 h-12 border text-center bg-yellow-300" value="C" disabled/>
            <input className="focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-400 rounded-md w-12 h-12 border text-center" value="A" disabled/>
            <input className="focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-400 rounded-md w-12 h-12 border text-center" value="L" disabled/>
        </div>
        <p>La letra C está en la palabra pero en la posición incorrecta.</p>
        <div className="flex flex-row">
            <input className="focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-400 rounded-md w-12 h-12 border text-center" value="C" disabled/>
            <input className="focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-400 rounded-md w-12 h-12 border text-center" value="A" disabled/>
            <input className="focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-400 rounded-md w-12 h-12 border text-center" value="N" disabled/>
            <input className="focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-400 rounded-md w-12 h-12 border text-center" value="T" disabled/>
            <input className="focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-400 rounded-md w-12 h-12 border text-center bg-neutral-400" value="O" disabled/>
        </div>
        <p>La letra O no está en la palabra.</p>
        <p>Puede haber letras repetidas. Las pistas son independientes para cada letra.</p>
        <p>¡Una palabra nueva cada 5 minutos!</p>
    </div>
  )
}