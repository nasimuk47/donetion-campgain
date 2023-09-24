import { NavLink } from "react-router-dom";

const Navber = () => {
    return (
        <div className="flex justify-between items-center mt-2 px-4 bg-[#FFFFFFF2] h-20  ">
            <h1>
                <img src="Logo.png" alt="" />
            </h1>
            <nav>
                <ul className="flex gap-4">
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
