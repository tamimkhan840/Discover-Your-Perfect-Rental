import { useState } from "react";
import { RiUser3Line } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import Logo from "../images/logo-02.png";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className="w-full bg-slate-50 shadow">
            <div className="container mx-auto flex justify-between items-center py-3 px-4 md:px-8">
                {/* Logo */}
                <div className="w-28">
                    <img src={Logo} alt="Logo" className="cursor-pointer" />
                </div>

                {/* Navigation Menu */}
                <nav
                    className={`absolute top-16 left-0 w-full bg-white shadow-lg transform transition-transform duration-300 z-20 md:static md:w-auto md:bg-transparent md:shadow-none md:translate-x-0 ${
                        menuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                >
                    <ul className="flex flex-col items-center md:flex-row md:gap-6">
                        <li className="py-2 md:py-0">
                            <a
                                href="#"
                                className="text-lg text-gray-700 hover:text-red-600 transition"
                            >
                                Home
                            </a>
                        </li>
                        <li className="py-2 md:py-0">
                            <a
                                href="#"
                                className="text-lg text-gray-700 hover:text-red-600 transition"
                            >
                                Rentals
                            </a>
                        </li>
                        <li className="py-2 md:py-0">
                            <a
                                href="#"
                                className="text-lg text-gray-700 hover:text-red-600 transition"
                            >
                                Categories
                            </a>
                        </li>
                        <li className="py-2 md:py-0">
                            <a
                                href="#"
                                className="text-lg text-gray-700 hover:text-red-600 transition"
                            >
                                About Us
                            </a>
                        </li>
                        <li className="py-2 md:py-0">
                            <a
                                href="#"
                                className="text-lg text-gray-700 hover:text-red-600 transition"
                            >
                                Contact
                            </a>
                        </li>
                        <li className="py-2 md:py-0">
                            <a
                                href="#"
                                className="text-lg text-gray-700 hover:text-red-600 transition"
                            >
                                Blog
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* User and Post Listing */}
                <div className="hidden md:flex items-center gap-4">
                    <div className="flex items-center text-red-700 text-lg">
                        <RiUser3Line />
                        <span className="ml-2">Sign in</span>
                    </div>
                    <button className="btn btn-error text-lg px-4 py-2 rounded-full shadow-lg">
                        + Post Listing
                    </button>
                </div>

                {/* Hamburger Button */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-2xl text-gray-700"
                    >
                        {menuOpen ? <IoClose /> : <FiMenu />}
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
