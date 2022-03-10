import { useEffect, useState } from "react";
import { useBetween } from "use-between";

const EMPTY_ARRAY = [];

const useWords = ( onWordFinish ) => {
    const [words, setWords] = useState([]);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        console.log(words);
    }, [words])

    const getWord = (index) => {
        return words[index] || EMPTY_ARRAY;
    }

    const nextWord = () => {
        setCurrentWordIndex(currentWordIndex + 1);
    }

    const addChar = (char, position) => {
        const currentWord = getWord(currentWordIndex);
        if (currentWord.length > 5) return
        if (currentWord.length === 5 && char !== 'Enter') return
        const aux = [...currentWord];
        aux.splice(position || (currentWord.length +1), 1, char);
        setWord(aux, currentWordIndex);
    }

    const removeChar = (position) => {
        const currentWord = getWord(currentWordIndex);
        if (currentWord.length === 0) return
        const aux = [...currentWord];
        aux.splice(position || (currentWord.length - 1), 1);
        setWord(aux, currentWordIndex);
    }

    const setWord = (word, index) => {
        setWords((state) => {
            const aux = [...state];
            aux[index] = word;
            return aux;
        })
    }

    return {
        words, setWords, setWord, currentWordIndex, nextWord, getWord, addChar, removeChar
    }
}

export default () => useBetween(useWords)