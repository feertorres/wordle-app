import { Key } from "./Key";
import useWords from '../hooks/useWords';

const FIRST_ROW  = ['q','w','e','r','t','y','u','i','o','p'];
const SECOND_ROW = ['a','s','d','f','g','h','j','k','l','ñ'];
const THIRD_ROW  = ['Enter','z','x','c','v','b','n','m','Backspace'];

export const Keyboard = () => {
    const { addChar, removeChar } = useWords();

    const handlePressKey = (char) => {
        if (char === 'Backspace') {
            removeChar();
        } else {
            addChar(char);
        }
    }

    return (
        <div className="w-full max-w-[500px] px-2 bg-[#121213]">
            {[FIRST_ROW, SECOND_ROW, THIRD_ROW].map((row, index) => (
                <div key={index} className="flex flex-row w-full mb-[6px]">
                    {row.map((key) => (
                        <Key buttonKey={key} key={key} onClick={handlePressKey} />
                    ))}
                </div>
            ))}
        </div>
    )
}
