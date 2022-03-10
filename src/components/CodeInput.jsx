import React, { useEffect, useRef, useState } from 'react'
import { Input } from '../components/Input';
import { CHAR_STATUS, verifyWord } from '../helpers/verifyWord';

const COLOR_MAP = {
    [CHAR_STATUS.OK]: 'bg-lime-500',
    [CHAR_STATUS.CONTAINS]: 'bg-yellow-300',
    [CHAR_STATUS.INCORRECT]: 'bg-neutral-400',
}

export const CodeInput = ({ word, onEnterKey, position, currentWord = [], onWordChange, isActive }) => {
    const [wordStatus, setWordStatus] = useState([]);
    const [disabledInput, setDisabledInput] = useState(false);
    const fakeData = Array.from({ length: 5 });
    const inputsRef = useRef([]);

    const BACKSPACE_KEY = 8;
    const LEFT_ARROW_KEY = 37;
    const RIGHT_ARROW_KEY = 39;
    const ENTER_KEY = 13;

    useEffect(() => {
        debugger;
        if (currentWord.length > 5 && currentWord.at(-1) === 'Enter') {
            setDisabledInput(true);
            currentWord.pop();
            const wordToCompare = currentWord.join('');
            setWordStatus(verifyWord(word, wordToCompare));
        }
    }, [currentWord.length])
    

    useEffect(() => {
        wordStatus.length && onEnterKey(wordStatus);
    }, [wordStatus])

    useEffect(() => {
        if (isActive) {
            inputsRef.current[0].focus();
        }
    }, [isActive])

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
        // if (e.keyCode === LEFT_ARROW_KEY) {
        //     inputsRef.current[Number(e.target.id) - 1].focus();
        // }
        // if (e.keyCode === RIGHT_ARROW_KEY) {
        //     inputsRef.current[Number(e.target.id) + 1].focus();
        // }
        if (e.keyCode === ENTER_KEY) {
            onWordChange('Enter');
        }
    }

    return (
        <div className="flex flex-row">
            {
                fakeData.map((input, index) => <Input key={index} ref={handleInputRef} onChange={onChange} index={index} onKeyDown={onKeyDown} value={currentWord[index] || ''} disabled={disabledInput} customClass={COLOR_MAP[wordStatus[index]]} className={`input-${index}`} />)
            }
        </div>
    )
}