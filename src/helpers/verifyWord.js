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
            if (word.charAt(i) === element) {
                return aux.push(CHAR_STATUS.OK)
            }
            if (word.includes(element)) {
                return aux.push(CHAR_STATUS.CONTAINS)
            }
            return aux.push(CHAR_STATUS.INCORRECT)
        });
        return (aux);
    }
}