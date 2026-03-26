import React, { useEffect, useRef, useState } from 'react'
import { Input } from '../components/Input';
import { CHAR_STATUS, verifyWord } from '../helpers/verifyWord';

const COLOR_MAP = {
    [CHAR_STATUS.OK]:        '#e91e63',
    [CHAR_STATUS.CONTAINS]:  '#ff6f00',
    [CHAR_STATUS.INCORRECT]: '#37474f',
}

const REVEAL_DELAY_MS = 350;
const BACKSPACE_KEY = 8;
const ENTER_KEY = 13;

export const CodeInput = ({ word, onEnterKey, currentWord = [], onWordChange, isActive }) => {
    const [wordStatus, setWordStatus] = useState([]);
    const [revealedColors, setRevealedColors] = useState([]);
    const [disabledInput, setDisabledInput] = useState(false);
    const fakeData = Array.from({ length: 5 });
    const inputsRef = useRef([]);
    const prevWordLengthRef = useRef(0);

    useEffect(() => {
        if (currentWord.length === 0) {
            setWordStatus([]);
            setRevealedColors([]);
            setDisabledInput(false);
        }
    }, [currentWord])

    useEffect(() => {
        if (currentWord.length > 5 && currentWord.at(-1) === 'Enter') {
            setDisabledInput(true);
            currentWord.pop();
            const wordToCompare = currentWord.join('');
            setWordStatus(verifyWord(word, wordToCompare));
        }
    }, [currentWord.length])

    useEffect(() => {
        if (!wordStatus.length) return;

        // Stagger the color reveal so each cell flips one after another
        wordStatus.forEach((status, i) => {
            setTimeout(() => {
                setRevealedColors(prev => {
                    const next = [...prev];
                    next[i] = COLOR_MAP[status];
                    return next;
                });
            }, i * REVEAL_DELAY_MS);
        });

        // Notify parent after all cells have been revealed
        const totalDelay = (wordStatus.length - 1) * REVEAL_DELAY_MS + 500;
        setTimeout(() => onEnterKey(wordStatus), totalDelay);
    }, [wordStatus])

    useEffect(() => {
        if (isActive) {
            inputsRef.current[0].focus();
        }
    }, [isActive])

    // Advance focus when a character is added via the on-screen keyboard
    useEffect(() => {
        const prevLen = prevWordLengthRef.current;
        prevWordLengthRef.current = currentWord.length;

        if (isActive && currentWord.length > prevLen && currentWord.length < 5) {
            inputsRef.current[currentWord.length]?.focus();
        }
    }, [currentWord.length])

    const handleInputRef = (ref) => {
        if (ref && inputsRef.current.length < 5) {
            inputsRef.current.push(ref);
        }
    }

    const onChange = (e) => {
        if (e.target.value !== '' && Number(e.target.id) <= 4) {
            inputsRef.current[Number(e.target?.id) + 1]?.focus();
            if (currentWord.length <= 5) {
                onWordChange(e.target.value, e.target?.id)
            }
        }
    }

    const onKeyDown = (e) => {
        if (e.keyCode === BACKSPACE_KEY) {
            inputsRef.current[Number(e.target.id)].value = '';
            if (Number(e.target.id)) {
                inputsRef.current[Number(e.target.id) - 1].focus();
            }
            onWordChange(null, e.target.id);
        }
        if (e.keyCode === ENTER_KEY) {
            onWordChange('Enter');
        }
    }

    return (
        <div className="flex flex-row">
            {fakeData.map((_, index) => (
                <Input
                    key={index}
                    ref={handleInputRef}
                    onChange={onChange}
                    index={index}
                    onKeyDown={onKeyDown}
                    value={currentWord[index] || ''}
                    disabled={disabledInput}
                    revealColor={revealedColors[index]}
                    className={`input-${index}`}
                />
            ))}
        </div>
    )
}
