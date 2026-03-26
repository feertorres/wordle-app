import React from 'react'

const WIDE_KEYS = ['Enter', 'Backspace'];

export const Key = ({ onClick, buttonKey }) => {
    const isWide = WIDE_KEYS.includes(buttonKey);
    const label = buttonKey === 'Backspace' ? '⌫' : buttonKey;

    return (
        <button
            className={`
                flex items-center justify-center min-w-0
                h-14 rounded font-bold uppercase text-white text-sm
                bg-[#818384] hover:bg-[#9a9b9c] active:bg-[#6a6b6c]
                transition-colors duration-100 cursor-pointer select-none
                mx-[3px]
                ${isWide ? 'flex-[1.5] text-xs' : 'flex-1'}
            `}
            onClick={() => onClick(buttonKey)}
        >
            {label}
        </button>
    )
}
