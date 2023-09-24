import { Outlet } from "react-router-dom";

import Navber from "../header/navber/Navber";

Outlet;

const Mainlayout = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default Mainlayout;
