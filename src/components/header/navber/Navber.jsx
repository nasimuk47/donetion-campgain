import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Navber = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="flex justify-between items-center mt-2 px-4 bg-[#FFFFFFF2] h-20">
            <h1>
                <img src="Logo.png" alt="" />
            </h1>
            <nav>
                <div className="lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-black-500 underline">
                        <AiOutlineMenu size={24} />
                    </button>
                </div>
                <ul
                    className={`lg:flex ${
                        isMenuOpen ? "block" : "hidden"
                    } lg:block gap-4`}>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                    ? "text-red-500 underline"
                                    : ""
                            }>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Donation"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                    ? "text-red-500 underline"
                                    : ""
                            }>
                            Donation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Statistics"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                    ? "text-red-500 underline"
                                    : ""
                            }>
                            Statistics
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navber;
