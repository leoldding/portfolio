import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Close, Home, Code, GitHub, LinkedIn } from "@mui/icons-material";

function SideMenu() {
    const [blur, setBlur] = useState("backdrop-blur-none");
    const [position, setPosition] = useState("translate-x-full");
    const handleSideMenu = (e) => {
        if (e && e.stopPropagation) {
            e.stopPropagation();
        }
        if (blur === "backdrop-blur-none" && position === "translate-x-full") {
            setBlur("backdrop-blur");
            setPosition("translate-x-0");
        } else {
            setBlur("backdrop-blur-none");
            setPosition("translate-x-full");
        }
    };

    return (
        <div className={"md:hidden"}>
            <button type={"button"}
                onClick={handleSideMenu}
                aria-expanded={"false"}>
                <Menu className={"pb-1"} />
            </button>
            <div className={`${blur} ${position} fixed top-0 right-0 h-screen w-screen transition duration-200`}
                 onClick={handleSideMenu}>
                <div className={"z-20 fixed top-0 right-0 bg-orange-400 h-screen w-2/3 flex flex-col font-medium items-center"}
                     onClick={(e) => e.stopPropagation()}>
                    <Close className={"mt-4 mr-4 mb-8 ml-auto"} onClick={handleSideMenu} />
                    <ul className={"text-xl space-y-10"}>
                        <li>
                            <Link to={"/"} onClick={handleSideMenu}>
                                <Home className={"pb-1"} /> Home
                            </Link>
                        </li>
                        <li>
                            <Link to={"/projects"} onClick={handleSideMenu}>
                                <Code className={"pb-1"}/> Projects
                            </Link>
                        </li>
                        <li>
                            <Link to={"https://github.com/leoldding"}
                                  target={"_blank"}
                                  rel={"noopener noreferrer"}
                                  onClick={handleSideMenu}>
                                <GitHub className={"pb-1"}/> Github
                            </Link>
                        </li>
                        <li>
                            <Link to={"https://linkedin.com/in/leo-ding"}
                                  target={"_blank"}
                                  rel={"noopener noreferrer"}
                                  onClick={handleSideMenu}>
                                <LinkedIn className={"pb-1"}/> LinkedIn
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SideMenu;
