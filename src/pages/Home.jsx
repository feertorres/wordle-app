import { useEffect, useState } from 'react'
import { WordInput } from '../components/WordInput';
import { Modal } from '../components/Modal';
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
    const { word } = useWord();

    useEffect(() => {
        if (!localStorage.getItem('isFirstTime') && !JSON.parse(localStorage.getItem('isFirstTime'))) {
            localStorage.setItem('isFirstTime', true);
            setIsFirstTime(true);
        } else {
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

    return (
        <div className="flex flex-col min-h-screen bg-[#121213]">
            <Modal title={'Cómo jugar'} textButton={'¡Jugar!'} openModal={isFirstTime} closeModal={() => setIsFirstTime(false)}>
                <Tutorial />
            </Modal>
            <Modal title={'Estadísticas'} textButton={'Aceptar'} openModal={showStatistics} closeModal={() => setshowStatistics(false)}>
                <Statistics word={word} played={playedGames} wins={wins} />
            </Modal>

            <header className="w-full border-b border-[#3a3a3c]">
                <div className="max-w-lg mx-auto flex items-center justify-between px-4 py-3">
                    <QuestionMarkCircleIcon
                        className="w-7 h-7 text-[#818384] cursor-pointer hover:text-[#e91e63] transition-colors duration-150"
                        onClick={() => setIsFirstTime(true)}
                    />
                    <h1 className="text-2xl font-bold tracking-[0.2em] text-white uppercase">Wordle</h1>
                    <ChartSquareBarIcon
                        className="w-7 h-7 text-[#818384] cursor-pointer hover:text-[#e91e63] transition-colors duration-150"
                        onClick={() => setshowStatistics(true)}
                    />
                </div>
            </header>

            <main className="flex flex-col items-center w-full pt-6 pb-4 gap-6">
                <WordInput word={word} onGameFinish={onGameFinish} onGameOver={onGameOver} />
                <Keyboard />
            </main>
        </div>
    )
}
