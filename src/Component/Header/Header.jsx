import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4 fixed w-full z-10">
            <nav className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">My Portfolio</div>
                <ul className="flex space-x-4">
                    <li>
                        <Link
                            to="/about"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer hover:text-gray-400"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/skill"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer hover:text-gray-400"
                        >
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link
                            to=""
                            smooth={true}
                            duration={500}
                            className="cursor-pointer hover:text-gray-400"
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/education"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer hover:text-gray-400"
                        >
                            Education
                        </Link>
                    </li>
                    <li>
                        <Link
                            to=""
                            smooth={true}
                            duration={500}
                            className="cursor-pointer hover:text-gray-400"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
