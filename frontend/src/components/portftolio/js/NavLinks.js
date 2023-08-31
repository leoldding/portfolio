import React from 'react';
import { Link } from "react-router-dom";
import { GitHub, LinkedIn } from "@mui/icons-material";

function NavLinks() {
    return (
        <div className={"hidden md:block w-auto"}>
            <ul className={"flex flex-row font-medium space-x-8"}>
                <li>
                    <Link to={"/projects"} className={"transition duration-300 block hover:text-orange-500 hover:-translate-y-1 p-0"}>Projects</Link>
                </li>
                <li>
                    <Link
                        to={"https://github.com/leoldding"}
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                        sx={{marginLeft: 2}}
                        className={"transition duration-300 block md:hover:text-orange-500 md:hover:-translate-y-1 p-0"}
                    >
                        <GitHub />
                    </Link>
                </li>
                <li>
                    <Link
                        to={"https://www.linkedin.com/in/leo-ding"}
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                        sx={{marginLeft: 1}}
                        className={"transition duration-300 block md:hover:text-orange-500 md:hover:-translate-y-1 p-0"}
                    >
                        <LinkedIn />
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default NavLinks;
