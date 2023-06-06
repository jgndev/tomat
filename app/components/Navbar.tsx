import React, {useState} from 'react';

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

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
                    className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded">
                        <h2 className="text-lg mb-4">Tomat Settings</h2>
                        <button className="px-4 py-2 bg-red-500 text-white rounded"
                                onClick={() => setIsModalOpen(false)}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
