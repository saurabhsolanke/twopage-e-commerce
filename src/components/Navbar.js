import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className="flex w-full flex-col justify-between rounded-lg bg-white px-6 py-5 shadow-lg dark:bg-zinc-900 dark:shadow-black/5 lg:flex-row lg:items-center">
            <div className="flex items-center justify-between w-full lg:w-auto">
                <div className="flex items-center text-lg font-bold text-gray-700 dark:text-zinc-500">
                    <span className="px-2 text-3xl"><a href="/"> e-commerce </a> </span>
                </div>
                <button className="block lg:hidden" onClick={toggleMenu}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-700 dark:text-zinc-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>
            <div className={`${isMenuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}
       overflow-hidden transition-all duration-300 ease-in-out lg:max-h-full lg:opacity-100 lg:block`}>
                <ul className="flex flex-col gap-2 font-medium text-gray-700 dark:text-zinc-400 lg:flex-row lg:gap-4">
                    <li><a href="/" className="text-sky-700">Home</a></li>
                    <li> <a href="https://saurabhsolanke.com/" className="hover:text-sky-700">  About </a> </li>
                    <li> <a href="mailto:saurabh.solanke@gmail.com" className="hover:text-sky-700"> Contact</a> </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;