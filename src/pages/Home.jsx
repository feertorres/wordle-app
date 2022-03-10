import {useEffect, useState} from 'react'
import { getWord } from '../helpers/getWords';
import {WordInput} from '../components/WordInput';
import {Modal} from '../components/Modal';
import { Tutorial } from '../components/Tutorial';
import { Statistics } from '../components/Statistics';
import { Keyboard } from '../components/Keyboard';

import { QuestionMarkCircleIcon } from '@heroicons/react/solid';
import { ChartSquareBarIcon } from '@heroicons/react/solid';

export const Home = () => {
    const [randomWord, setRandomWord] = useState('');
    const [showModalFinish, setShowModalFinish] = useState(true);

    useEffect(() => {
        setRandomWord(getWord())
    }, [])

    const handleGameFinish = () => {
        setShowModalFinish(true);
        console.log('finish');
    }

    const handleKeyClick = (key) => {
        console.log(key);
    }

  return (
    <div className="flex flex-col items-center my-40">
        <div>
            <Modal title={'Cómo jugar'} openModal={showModalFinish} closeModal={setShowModalFinish}>
                <Statistics/>
            </Modal>
        </div>
        <div className="flex flex-row rounded-lg bg-slate-200">
            <QuestionMarkCircleIcon className="m-1 w-[25px]" />
            <div className="m-1">WORDLE + {randomWord}</div>
            <ChartSquareBarIcon className="m-1 w-[25px]" />
            <div className="m-1">toggle</div>
        </div>

        <div>
            <WordInput word={randomWord} onGameFinish={handleGameFinish}  />
        </div>

        <div>
            <Keyboard onKeyClick={handleKeyClick} />
        </div>
    </div>
  )
}
