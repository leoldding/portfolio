import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GitHub, LinkedIn, Menu} from '@mui/icons-material';

function Navbar() {
    const [menuCard, setMenuCard] = useState("invisible");
    const [menuFade, setMenuFade] = useState("opacity-0");

    const handleMenuClick = () => {
        if (menuCard === "invisible") {
            setMenuCard("visible");
            setMenuFade("opacity-100");
        } else {
            setMenuFade("opacity-0");
            setTimeout(() => {
            setMenuCard("invisible")},
                500
            );
        }
    }

    return (
        <nav className={"border-b-2 border-orange-200"}>
            <div className={"max-w-screen-xl h-[72px] flex flex-wrap items-center justify-between mx-auto py-4 px-16"}>
                <Link to={"/"} className={"flex items-center"}>
                    <span className={"transition block text-2xl font-semibold py-2 md:hover:text-orange-500 md:hover:-translate-y-1 md:p-0"}>Leo Ding</span>
                </Link>
                <button type={"button"}
                        onClick={handleMenuClick}
                        className={"inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:invisible hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-200"}
                        aria-controls={"navbar-solid-bg"}
                        aria-expanded={"false"}>
                    <Menu sx={{fontSize:18}}/>
                </button>
                <div className={`${menuCard} ${menuFade} transition-opacity duration-500 w-full md:visible md:opacity-100 md:w-auto`}
                     id={"navbar-solid-bg"}>
                    <ul className={"absolute right-4 md:static z-10 flex flex-col font-medium mt-4 rounded-lg bg-orange-200 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent"}>
                        <li>
                            <Link to={"/projects"} className={"transition duration-300 block py-2 pl-3 pr-4 md:hover:text-orange-500 md:hover:-translate-y-1 md:p-0"}>Projects</Link>
                        </li>
                        <li>
                            <Link to={"/about"} className={"transition duration-300 block py-2 pl-3 pr-4 md:hover:text-orange-500 md:hover:-translate-y-1 md:p-0"}>About</Link>
                        </li>
                        <li>
                            <Link
                                to={"https://github.com/leoldding"}
                                target={"_blank"}
                                rel={"noopener noreferrer"}
                                sx={{marginLeft: 2}}
                                className={"transition duration-300 block py-2 pl-3 pr-4 md:hover:text-orange-500 md:hover:-translate-y-1 md:p-0"}
                            >
                                <div className={"hidden md:block"}>
                                    <GitHub />
                                </div>
                                <div className={"md:hidden"}>
                                    Github
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"https://www.linkedin.com/in/leo-ding"}
                                target={"_blank"}
                                rel={"noopener noreferrer"}
                                sx={{marginLeft: 1}}
                                className={"transition duration-300 block py-2 pl-3 pr-4 md:hover:text-orange-500 md:hover:-translate-y-1 md:p-0"}
                            >
                                <div className={"hidden md:block"}>
                                    <LinkedIn />
                                </div>
                                <div className={"md:hidden"}>
                                    LinkedIn
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
