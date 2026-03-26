import React from 'react'
import useWord from '../hooks/useWord';
import useWords from '../hooks/useWords';

export const Statistics = ({ wins = 0, played = 0, word }) => {
    const { parseTimer } = useWord();
    const { currentWordIndex } = useWords();
    const { minutes, seconds } = parseTimer();

    const pad = (n) => String(parseInt(n)).padStart(2, '0');

    return (
        <div className="text-white">
            <div className="flex flex-row justify-around text-center mb-6">
                <div>
                    <p className="text-4xl font-bold">{played}</p>
                    <p className="text-xs text-[#818384] uppercase tracking-wider mt-1">Jugadas</p>
                </div>
                <div>
                    <p className="text-4xl font-bold">{wins}</p>
                    <p className="text-xs text-[#818384] uppercase tracking-wider mt-1">Victorias</p>
                </div>
            </div>

            <hr className="border-[#3a3a3c] mb-4" />

            <div className="flex flex-col items-center gap-2">
                {currentWordIndex === 5 && (
                    <p className="text-sm text-[#d7dadc]">
                        La palabra era: <b className="text-[#e91e63]">{word?.toUpperCase()}</b>
                    </p>
                )}
                <p className="text-xs text-[#818384] uppercase tracking-wider">Siguiente palabra en</p>
                <p className="text-3xl font-bold tracking-widest">{pad(minutes)}:{pad(seconds)}</p>
            </div>
        </div>
    )
}
