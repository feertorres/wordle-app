import React from 'react'

const ExampleCell = ({ letter, color }) => (
    <div
        className="w-11 h-11 flex items-center justify-center border-2 rounded font-bold text-xl uppercase text-white mx-[2px]"
        style={color
            ? { backgroundColor: color, borderColor: 'transparent' }
            : { backgroundColor: '#121213', borderColor: '#565758' }
        }
    >
        {letter}
    </div>
)

export const Tutorial = () => {
    return (
        <div className="text-left text-[#d7dadc] text-sm">
            <p className="my-2">Adivina la palabra oculta en cinco intentos.</p>
            <p className="my-2">Cada intento debe ser una palabra válida de 5 letras.</p>
            <p className="my-2">Después de cada intento el color de las letras cambia para mostrar qué tan cerca estás.</p>

            <hr className="border-[#3a3a3c] my-4" />

            <p className="font-bold text-white mb-3">Ejemplos</p>

            <div className="flex flex-row my-3">
                <ExampleCell letter="G" color="#e91e63" />
                <ExampleCell letter="A" />
                <ExampleCell letter="T" />
                <ExampleCell letter="O" />
                <ExampleCell letter="S" />
            </div>
            <p className="my-2">La letra <b className="text-white">G</b> está en la palabra y en la posición correcta.</p>

            <div className="flex flex-row my-3">
                <ExampleCell letter="V" />
                <ExampleCell letter="O" />
                <ExampleCell letter="C" color="#ff6f00" />
                <ExampleCell letter="A" />
                <ExampleCell letter="L" />
            </div>
            <p className="my-2">La letra <b className="text-white">C</b> está en la palabra pero en la posición incorrecta.</p>

            <div className="flex flex-row my-3">
                <ExampleCell letter="C" />
                <ExampleCell letter="A" />
                <ExampleCell letter="N" />
                <ExampleCell letter="T" />
                <ExampleCell letter="O" color="#37474f" />
            </div>
            <p className="my-2">La letra <b className="text-white">O</b> no está en la palabra.</p>

            <hr className="border-[#3a3a3c] my-4" />

            <p className="text-center text-white font-bold">¡Una palabra nueva cada 5 minutos!</p>
        </div>
    )
}
