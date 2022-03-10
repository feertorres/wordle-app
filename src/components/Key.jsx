import React from 'react'

export const Key = ({onClick, buttonKey}) => {

    const handleClick = () => {
        onClick(buttonKey);
    }

  return (
    <button className='focus:ring-zinc-900 focus:border-zinc-900 block sm:text-sm border-white-400 bg-gray-300 rounded-md w-12 h-12 border text-center mx-1 my-1' onClick={handleClick}>{buttonKey}</button>
  )
}
