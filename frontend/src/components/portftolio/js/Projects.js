import React from 'react';

function Projects() {
    return (
        <div className={"max-w-screen-xl px-6 md:px-16 py-4 mx-auto"}>
            <h1 className={"text-2xl md:text-4xl pb-4"}>
                Projects
            </h1>
            <ul>
                <li className={"py-2"}>
                    <a
                        href={"https://github.com/leoldding"}
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                        className={"transition duration-300 block max-w-screen-xl hover:bg-neutral-200 dark:hover:bg-neutral-800"}>
                        <div className={"px-3 md:px-8"}>
                            <h2 className={"text-lg md:text-2xl py-2"}>Project 1</h2>
                            <p className={"text-xs md:text-sm py-2"}>Description</p>
                        </div>
                    </a>
                </li><li className={"py-2"}>
                    <a
                        href={"https://github.com/leoldding"}
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                        className={"transition duration-300 block max-w-screen-xl hover:bg-neutral-200 dark:hover:bg-neutral-800"}>
                        <div className={"px-3 md:px-8"}>
                            <h2 className={"text-lg md:text-2xl py-2"}>Project 2</h2>
                            <p className={"text-xs md:text-sm py-2"}>Description</p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Projects;
