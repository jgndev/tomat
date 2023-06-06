import React, {useState} from 'react';

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <nav className="flex justify-between items-center p-4">
            <div>
                {/* Tomato logo */}
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#18181b" viewBox="0 0 16 16">
                    <path
                        d="M8 0a5.5 5.5 0 0 0-4.78 3.352 1.494 1.494 0 0 0-.22.724c-.02.61.372 1.183.95 1.372A6.476 6.476 0 0 0 4.5 6c0 1.566-.392 3.02-1.06 4.246A1.5 1.5 0 0 0 4.056 13h7.888a1.5 1.5 0 0 0 1.615-2.754A6.476 6.476 0 0 0 11.5 6c0-.392-.018-.78-.053-1.161.542-.185.908-.744.94-1.336a1.496 1.496 0 0 0-.22-.724A5.5 5.5 0 0 0 8 0z"/>
                    <path
                        d="M8 3.5c-.9 0-1.75-.216-2.501-.6A2.953 2.953 0 0 0 8 1.5a2.953 2.953 0 0 0 2.501 1.4C9.75 3.284 8.9 3.5 8 3.5z"/>
                </svg>
            </div>
            <div>
                <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setIsModalOpen(true)}>
                    Settings
                </button>
            </div>
            {isModalOpen && (
                <div
                    className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded">
                        <h2 className="text-lg mb-4">Settings</h2>
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
