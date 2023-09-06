import React from "react";
import { Link } from "react-router-dom";

import NavLinks from "./NavLinks";
import SideMenu from "./SideMenu";

function Navbar() {
    return (
        <nav className={"z-10 sticky top-0 bg-stone-50 border-b-2 border-orange-200"}>
            <div className={"max-w-screen-xl h-[72px] flex flex-wrap items-center justify-between mx-auto py-4 px-16"}>
                <Link to={"/"} className={"block items-center transition text-2xl font-semibold py-2 md:hover:text-orange-500 md:hover:-translate-y-1 md:p-0"}>
                    Leo Ding
                </Link>
                <NavLinks />
                <SideMenu />
            </div>
        </nav>
    );
}

export default Navbar;
