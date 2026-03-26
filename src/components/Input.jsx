import React, { forwardRef } from 'react'

export const Input = forwardRef(({ onChange, onKeyDown, index, value, disabled, revealColor, className }, ref) => {
    return (
        <div className="p-[3px]">
            <input
                disabled={disabled}
                value={value}
                onKeyDown={onKeyDown}
                onChange={onChange}
                ref={ref}
                type="text"
                id={index}
                maxLength={1}
                style={revealColor ? { '--reveal-color': revealColor } : {}}
                className={`
                    block w-14 h-14 border-2 rounded text-center outline-none
                    text-white font-bold text-2xl uppercase
                    bg-[#121213] transition-colors
                    ${revealColor
                        ? 'cell-flip border-transparent'
                        : value
                            ? 'border-[#999] cell-pop'
                            : 'border-[#3a3a3c]'
                    }
                    focus:border-[#999]
                    ${className}
                `}
            />
        </div>
    )
})
