import React, {useState} from 'react';

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);

    const handleFocusIncrement = () => {

    }

    const handleFocusDecrement = () => {

    }

    return (
        <nav className="flex justify-between items-center p-4">
            <div>
                {/* Tomato Logo */}
                <a href="/" aria-label="Home - Tomat">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-zinc-900"
                        width="32"
                        height="32"
                        viewBox="0 0 48 48">
                        <mask id="ipTTomato0">
                            <g
                                fill="none"
                                stroke="#fff"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="4">
                                <path
                                    fill="#555"
                                    d="M24 44c11.046 0 20-7.387 20-16.5c0-6.442-4.475-11.799-11-14.516L29.5 14.5L30 20l-6.5-2l-6.5 2v-5.5l-3-1.516C8.022 15.837 4 21.393 4 27.5C4 36.613 12.954 44 24 44Z"/>
                                <path
                                    d="m23.5 4l3.809 5.117L36 9.91l-6.337 4.573L31.5 21l-8-3l-8 3l1.837-6.517L11 9.91l8.691-.793L23.5 4Z"/>
                            </g>
                        </mask>
                        <path
                            fill="currentColor"
                            d="M0 0h48v48H0z"
                            mask="url(#ipTTomato0)"/>
                    </svg>
                </a>
            </div>
            <div>
                <button className="px-4 py-2 text-zinc-900" onClick={() => setIsModalOpen(true)}>
                    {/*Settings Icon*/}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24">
                        <path
                            fill="currentColor"
                            d="m9.25 22l-.4-3.2q-.325-.125-.613-.3t-.562-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.337v-.674q0-.163.025-.338L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375t.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3t.562.375l2.975-1.25l2.75 4.75l-2.575 1.95q.025.175.025.338v.674q0 .163-.05.338l2.575 1.95l-2.75 4.75l-2.95-1.25q-.275.2-.575.375t-.6.3l-.4 3.2h-5.5Zm2.8-6.5q1.45 0 2.475-1.025T15.55 12q0-1.45-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12q0 1.45 1.012 2.475T12.05 15.5Z"/>
                    </svg>
                </button>
            </div>
            {isModalOpen && (
                <div
                    className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-70">
                    <div className="w-[30rem] bg-white p-4 rounded-md shadow-lg">
                        <h2 className="font-semibold text-center text-3xl mb-4">Tomat Settings</h2>

                        {/*Focus Time Settings*/}
                        <div className="my-4 flex justify-start items-center space-x-2 text-zinc-700">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="m10.95 16.55l5.65-5.65l-1.425-1.425L10.95 13.7l-2.125-2.125L7.4 13l3.55 3.55ZM12 22q-1.875 0-3.512-.713t-2.85-1.924q-1.213-1.213-1.925-2.85T3 13q0-1.875.713-3.513t1.924-2.85q1.213-1.212 2.85-1.924T12 4q1.875 0 3.513.713t2.85 1.925q1.212 1.212 1.925 2.85T21 13q0 1.875-.713 3.513t-1.924 2.85q-1.213 1.212-2.85 1.925T12 22ZM5.6 2.35L7 3.75L2.75 8l-1.4-1.4L5.6 2.35Zm12.8 0l4.25 4.25l-1.4 1.4L17 3.75l1.4-1.4Z"/>
                            </svg>
                            <h2 className="font-semibold text-zinc-700">Time (minutes)</h2>
                        </div>

                        <div className="grid grid-cols-3">
                            <div className="flex flex-col mb-4 w-[24rem]">
                                <span className="text-sm">Focus</span>
                                <input
                                    className="no-spinners w-[6rem] py-1 px-3 font-mono text-white bg-black border border-zinc-300 rounded-md"
                                    type="number"
                                    value="25"/>
                            </div>
                            <div className="flex flex-col mb-4 w-[24rem]">
                                <span className="text-sm">Short Break</span>
                                <input
                                    className="no-spinners w-[6rem] py-1 px-3 font-mono text-white bg-black border border-zinc-300 rounded-md"
                                    type="number"
                                    value="5"/>
                            </div>
                            <div className="flex flex-col mb-4 w-[24rem]">
                                <span className="text-sm">Long Break</span>
                                <input
                                    className="no-spinners w-[6rem] py-1 px-3 font-mono text-white bg-black border border-zinc-300 rounded-md"
                                    type="number"
                                    value="15"/>
                            </div>
                        </div>

                        <hr/>

                        <div className="mt-4 flex justify-start items-center space-x-2 text-zinc-700">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M11 18q-2.9 0-4.95-2.05T4 11V5q0-.825.588-1.413T6 3h12.5q1.45 0 2.475 1.025T22 6.5q0 1.45-1.025 2.475T18.5 10H18v1q0 2.9-2.05 4.95T11 18ZM6 8h10V5H6v3Zm12 0h.5q.625 0 1.063-.438T20 6.5q0-.625-.438-1.063T18.5 5H18v3ZM4 21v-2h16v2H4Z"/>
                            </svg>
                            <h2 className="font-semibold text-zinc-700">Long Break Interval</h2>
                        </div>


                        {/*Long Break Interval*/}
                        <div className="mt-2">
                            <span className="text-sm">Focus sessions between long breaks</span>
                            <div className="mb-4 w-[24rem]">
                                <input
                                    className="no-spinners w-[6rem] py-1 px-3 font-mono text-white bg-black border border-zinc-300 rounded-md"
                                    type="number"
                                    value="4"/>
                            </div>
                        </div>

                        <hr/>

                        <div className="mt-4 flex justify-start items-center space-x-2 text-zinc-700">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M23 12c0-6.075-4.925-11-11-11S1 5.925 1 12s4.925 11 11 11s11-4.925 11-11zM10.707 6.707a1 1 0 0 0-1.414-1.414l-2 2a1 1 0 0 0 0 1.414l2 2a1 1 0 0 0 1.414-1.414L10.414 9H14a1 1 0 0 1 1 1v1a1 1 0 1 0 2 0v-1a3 3 0 0 0-3-3h-3.586l.293-.293zM9 13a1 1 0 1 0-2 0v1a3 3 0 0 0 3 3h3.586l-.293.293a1 1 0 0 0 1.414 1.414l2-2a1 1 0 0 0 0-1.414l-2-2a1 1 0 0 0-1.414 1.414l.293.293H10a1 1 0 0 1-1-1v-1z"
                                    clipRule="evenodd"/>
                            </svg>
                            <h2 className="font-semibold text-zinc-700">Auto-Start Settings</h2>
                        </div>

                        {/*Toggle Auto-Start Focus*/}
                        <div className="my-4">
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer"/>
                                <div
                                    className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                <span className="ml-3 text-sm font-medium">
                                    Auto-Start Focus
                                </span>
                            </label>
                        </div>

                        {/*Toggle Auto-Start Breaks*/}
                        <div className="my-4">
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer"/>
                                <div
                                    className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                <span className="ml-3 text-sm font-medium">
                                    Auto-Start Breaks
                                </span>
                            </label>
                        </div>


                        <div className="flex justify-end">
                            <button className="w-[5rem] px-4 py-2 bg-blue-500 text-white rounded"
                                    onClick={() => setIsModalOpen(false)}>
                                OK
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
