import {useEffect, useState} from "react";

interface TimerProps {
    initialMinutes: number;
    initialSeconds: number;
}

function Timer({initialMinutes, initialSeconds}: TimerProps) {

    const [minutes, setMinutes] = useState(initialMinutes);
    // const [displayMinutes, setDisplayMinutes] = useState('');
    const [seconds, setSeconds] = useState(initialSeconds);
    // const [displaySeconds, setDisplaySeconds] = useState('');
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timer;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => {
                    if (seconds > 0) {
                        document.title = `${minutes}:${seconds < 10 ? `0${seconds - 1}` : seconds - 1} - Remaining`;
                        return seconds - 1;
                    } else {
                        setMinutes(minutes => {
                            if (minutes > 0) {
                                document.title = `${minutes - 1}:59 - Remaining`;
                                return minutes - 1;
                            } else {
                                clearInterval(interval);
                                document.title = "00:00 - Time's up!";
                                return minutes;
                            }
                        });
                        return 59;
                    }
                });
            }, 1000);
        } else {
            document.title = `${minutes}:${seconds < 10 ? `0${seconds}` : seconds} - Paused`;
        }
        return () => {
            clearInterval(interval);
            // document.title = 'Tomat Timer';
        }
    }, [isActive, minutes, seconds]);

    const toggleIsActive = () => {
        setIsActive(!isActive);
    }

    const resetTimer = () => {
        setIsActive(false);
        setMinutes(initialMinutes);
        setSeconds(initialSeconds);
    }


    return (
        <div className="grid place-content-center place-items-center">
            {minutes === 0 && seconds === 0
                ? null
                : <h1 className="font-bold text-black text-[160pt]">
                    {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                  </h1>
            }
            <div className="flex space-x-4">
                <button className="w-[140px] px-4 py-3 text-white bg-black rounded-sm"
                        onClick={toggleIsActive}>{isActive ? 'Pause' : 'Start'}</button>
                <button className="w-[140px] px-4 py-3 text-white bg-black rounded-sm"
                        onClick={resetTimer}>Reset</button>
            </div>
        </div>
    )

}

export default Timer;