import React, { useState } from 'react';
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
        <nav className={"border-b-2 border-stone-300"}>
            <div className={"max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"}>
                <a href={"/"} className={"flex items-center"}>
                    <span className={"block text-2xl text-neutral-900 font-semibold py-2 md:hover:text-cyan-500 md:p-0"}>Leo Ding</span>
                </a>
                <button type={"button"}
                        onClick={handleMenuClick}
                        className={"inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-neutral-500 rounded-lg md:invisible hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200"}
                        aria-controls={"navbar-solid-bg"}
                        aria-expanded={"false"}>
                    <Menu />
                </button>
                <div className={`${menuCard} ${menuFade} transition-opacity duration-500 w-full md:visible md:opacity-100 md:w-auto`}
                     id={"navbar-solid-bg"}>
                    <ul className={"absolute right-4 md:static z-10 flex flex-col font-medium mt-4 rounded-lg bg-neutral-200 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent"}>
                        <li>
                            <a href={"/projects"} className={"block py-2 pl-3 pr-4 text-neutral-900 md:hover:text-cyan-500 md:p-0"}>Projects</a>
                        </li>
                        <li>
                            <a href={"/about"} className={"block py-2 pl-3 pr-4 text-neutral-900 md:hover:text-cyan-500 md:p-0"}>About</a>
                        </li>
                        <li>
                            <a
                                href={"https://github.com/leoldding"}
                                target={"_blank"}
                                rel={"noopener noreferrer"}
                                sx={{marginLeft: 2}}
                                className={"block py-2 pl-3 pr-4 text-neutral-900 md:hover:text-cyan-500 md:p-0"}
                            >
                                <div className={"hidden md:block"}>
                                    <GitHub />
                                </div>
                                <div className={"md:hidden"}>
                                    Github
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                href={"https://www.linkedin.com/in/leo-ding"}
                                target={"_blank"}
                                rel={"noopener noreferrer"}
                                sx={{marginLeft: 1}}
                                className={"block py-2 pl-3 pr-4 text-neutral-900 md:hover:text-cyan-500 md:p-0"}
                            >
                                <div className={"hidden md:block"}>
                                    <LinkedIn />
                                </div>
                                <div className={"md:hidden"}>
                                    LinkedIn
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
