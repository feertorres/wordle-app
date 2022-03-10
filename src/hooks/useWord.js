import { useEffect, useRef, useState } from "react"
import { getWord } from "../helpers/getWords";
import dayjs from 'dayjs';
import useWords from "./useWords";

const useWord = () => {
    const [word, setWord] = useState(localStorage.getItem('word'));
    const [lastWordTime, setLastWordTime] = useState(localStorage.getItem('lastWordTime'));
    const [timer, setTimer] = useState(0);
    const firstWord = useRef(true);
    const { setWords, setCurrentWordIndex } = useWords();

    useEffect(() => {
        if (!word) {
            setWord(getWord());
            firstWord.current = false;
        }
    }, [word])

    useEffect(() => {
        if (lastWordTime) {
            const next = dayjs(lastWordTime).add(5, 'minute');
            const now = dayjs();
            setTimer(next.diff(now));
        }
    }, [lastWordTime])


    useEffect(() => {
        if (!firstWord.current) {
            localStorage.setItem('word', word);
            localStorage.setItem('lastWordTime', dayjs());
            setLastWordTime(dayjs());
        }
    }, [word])

    useEffect(() => {
        const interval = setInterval(() => {
            setWord(null);
            setWords([]);
            setCurrentWordIndex(0);
        }, timer)
        return () => {
            clearInterval(interval);
        }
    }, [timer])

    const parseTimer = () => {
        const minutes = Math.floor((timer / 1000) / 60);
        const seconds = (timer / 1000) % 60;
        return {minutes, seconds}
    }

  return {word, timer, parseTimer}
}

export default useWord