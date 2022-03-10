import React from 'react'

export const Key = ({onClick, buttonKey}) => {

    const handleClick = () => {
        onClick(buttonKey);
    }

  return (
    <button className='focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-400 rounded-md w-12 h-12 border text-center mx-1 my-1' onClick={handleClick}>{buttonKey}</button>
  )
}
