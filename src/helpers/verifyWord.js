export const CHAR_STATUS = {
    OK: 'OK',
    INCORRECT: 'INCORRECT',
    CONTAINS: 'CONTAINS'
}

export const verifyWord = (word, value) => {
    if (value.length === 5) {
        const writtenWord = value.toLowerCase().split('');
        const aux = [];
        writtenWord.forEach((element, i) => {
            console.log(word.charAt(i) === element);
            if (word.charAt(i) === element) {
                // return aux.push('bg-lime-500') ok
                return aux.push(CHAR_STATUS.OK)
            }
            if (word.includes(element)) {
                // return aux.push('bg-yellow-300') ma o me CONTAINS
                return aux.push(CHAR_STATUS.CONTAINS)
            }
            // return aux.push('bg-neutral-400') incorrect
            return aux.push(CHAR_STATUS.INCORRECT)
        });
        return(aux);
}
}