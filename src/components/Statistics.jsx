import React from 'react'

export const Statistics = ({wins = 0, played = 0}) => {
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
            <p>siguiente palabra</p>
            <p>4:20</p>
        </div>
    </div>
  )
}