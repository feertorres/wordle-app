import {useEffect, useState} from 'react'
import {WordInput} from '../components/WordInput';
import {Modal} from '../components/Modal';
import { Tutorial } from '../components/Tutorial';
import { Statistics } from '../components/Statistics';
import { Keyboard } from '../components/Keyboard';
import useWord from '../hooks/useWord';

import { QuestionMarkCircleIcon } from '@heroicons/react/solid';
import { ChartSquareBarIcon } from '@heroicons/react/solid';

export const Home = () => {
    const [isFirstTime, setIsFirstTime] = useState(false);
    const [showStatistics, setshowStatistics] = useState(false);
    const [playedGames, setPlayedGames] = useState(0);
    const [wins, setWins] = useState(0);
    const { word, timer } = useWord();
    
    useEffect(() => {
        if (!localStorage.getItem('isFirstTime') && !JSON.parse(localStorage.getItem('isFirstTime'))) {
            localStorage.setItem('isFirstTime', true);
            setIsFirstTime(true);
        }else{
            setIsFirstTime(false);
        }
    }, [])
    
    const onGameFinish = () => {
        setshowStatistics(true);
        setPlayedGames(playedGames + 1);
        setWins(wins + 1);
    }

    const onGameOver = () => {
        setshowStatistics(true);
        setPlayedGames(playedGames + 1);
    }

    const handleCloseTutorialModal = () => {
        setIsFirstTime(false);
    }

    const handleCloseStatisticsModal = () => {
        setshowStatistics(false);
    }

  return (
    <div className="flex flex-col items-center my-40">
        <div>
            <Modal title={'Cómo jugar'} textButton={'¡Jugar!'} openModal={isFirstTime} closeModal={handleCloseTutorialModal}>
                <Tutorial/>
            </Modal>
        </div>

        <div>
            <Modal title={'Estadísticas'} textButton={'Aceptar'} openModal={showStatistics} closeModal={handleCloseStatisticsModal}>
                <Statistics word={word} played={playedGames} wins={wins} />
            </Modal>
        </div>

        <div className="flex flex-row rounded-lg bg-slate-200 m-3">
            <QuestionMarkCircleIcon className="m-1 w-[25px]" onClick={()=>setIsFirstTime(true)} />
            <div className="m-1">WORDLE</div>
            <ChartSquareBarIcon className="m-1 w-[25px]" onClick={()=>setshowStatistics(true)}/>
        </div>

        <div>
            <WordInput word={word} onGameFinish={onGameFinish} onGameOver={onGameOver} />
        </div>

        <div>
            <Keyboard />
        </div>
    </div>
  )
}
