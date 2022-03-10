import React from 'react'
import useWord from '../hooks/useWord';
import useWords from '../hooks/useWords';

export const Statistics = ({wins = 0, played = 0, word }) => {
  const { parseTimer } = useWord();
  const { currentWordIndex } = useWords();
  const {minutes , seconds} = parseTimer();

  return (
    <div>
        <div className="flex flex-row justify-around text-center">
            <div>
                <p>{played}</p>
                <p>Jugadas</p>
            </div>
            <div>
            <p>{wins}</p>
            <p>Victorias</p>
            </div>
        </div>
        <div className="flex flex-col items-center">
          {
            currentWordIndex === 5 && <p>La palabra era: <b>{word}</b></p>
          }
            <p>Siguiente palabra</p>
            <p>{minutes}:{parseInt(seconds)}</p>
        </div>
    </div>
  )
}