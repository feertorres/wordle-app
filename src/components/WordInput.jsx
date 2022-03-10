import { useState } from 'react';
import { CodeInput } from '../components/CodeInput';
import { CHAR_STATUS } from '../helpers/verifyWord';
import useWords from '../hooks/useWords';

export const WordInput = ({ word, onGameFinish }) => {
  const { nextWord, currentWordIndex, setWord, getWord, addChar, removeChar } = useWords();

  const handleEnter = (wordStatus) => {
    if (wordStatus.every((status) => status === CHAR_STATUS.OK)) {
      onGameFinish()
    }
    nextWord();
  }

  const handleWordChange = (value, position, index) => {
    if (value) {
      addChar(value, position);
    }else{
      removeChar(position);
    }
  }

  return (
    <div>
      <CodeInput word={word} onEnterKey={handleEnter} position={0} onWordChange={handleWordChange} currentWord={getWord(0)} isActive={currentWordIndex === 0} />
      <CodeInput word={word} onEnterKey={handleEnter} position={1} onWordChange={handleWordChange} currentWord={getWord(1)} isActive={currentWordIndex === 1} />
      <CodeInput word={word} onEnterKey={handleEnter} position={2} onWordChange={handleWordChange} currentWord={getWord(2)} isActive={currentWordIndex === 2} />
      <CodeInput word={word} onEnterKey={handleEnter} position={3} onWordChange={handleWordChange} currentWord={getWord(3)} isActive={currentWordIndex === 3} />
      <CodeInput word={word} onEnterKey={handleEnter} position={4} onWordChange={handleWordChange} currentWord={getWord(4)} isActive={currentWordIndex === 4} />
    </div>
  )
}