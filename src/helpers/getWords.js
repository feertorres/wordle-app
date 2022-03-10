import {words} from '../assets/words';


const filteredWords = words.filter(word => word.length === 5);
const random = Math.floor(Math.random() * filteredWords.length);

export const getWord = () => {
    return filteredWords[random].normalize('NFD').replace(/[\u0300-\u036f]/g, "");
};
