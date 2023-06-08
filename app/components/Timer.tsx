import {useEffect, useState} from "react";
import type {TimerProps} from "~/interfaces/timerProps";

function Timer({initialMinutes, initialSeconds}: TimerProps) {

    const [minutes, setMinutes] = useState(initialMinutes);
    const [seconds, setSeconds] = useState(initialSeconds);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds((seconds) => {
                    if (seconds > 0) {
                        document.title = `${minutes < 10 ? `0${minutes}` : minutes}:${(seconds - 1) < 10 ? `0${seconds - 1}` : seconds - 1} - Remaining`;
                        return seconds - 1;
                    } else if (minutes > 0) {
                        document.title = `${(minutes - 1) < 10 ? `0${minutes - 1}` : minutes - 1}:59 - Remaining`;
                        setMinutes(minutes - 1);
                        return 59;
                    } else {
                        clearInterval(interval);
                        document.title = "00:00 - Time's up!";
                        return 0;
                    }
                });
            }, 1000);
        } else {
            document.title = `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds} - Paused`;
        }
        return () => {
            clearInterval(interval);
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
            <h1 className="my-14 font-mono font-bold text-black text-[180pt]">
                {`${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}
            </h1>
            <div className="flex space-x-4">
                <button
                    className="w-[150px] flex items-center px-4 py-3 text-white bg-black rounded-md"
                    onClick={toggleIsActive}>
                    {isActive
                        ?
                            // Timer is active, show pause icon
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                className="mr-4"
                                viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M9 16h2V8H9v8Zm4 0h2V8h-2v8Zm-1 6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/>
                            </svg>
                        :
                            // Timer is not active, show play icon
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                className="mr-4"
                                viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="m9.5 16.5l7-4.5l-7-4.5v9ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/>
                            </svg>
                    }
                    <span>{isActive ? 'Pause' : 'Start'}</span>
                </button>
                <button
                    className="w-[150px] flex items-center px-4 py-3 text-white bg-black rounded-md"
                    onClick={resetTimer}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32" height="32"
                        className="mr-4"
                        viewBox="0 0 24 24">
                        <g
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2">
                            <path
                                d="M10 2h4m-2 12v-4m-8 3a8 8 0 0 1 8-7a8 8 0 1 1-5.3 14L4 17.6"/>
                            <path
                                d="M9 17H4v5"/>
                        </g>
                    </svg>
                    <span>Reset</span>
                </button>
            </div>
        </div>
    )
}

export default Timer;
