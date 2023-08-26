import React from 'react';
import ProjectCard from './ProjectCard.js';

function Projects() {
    return (
        <div className={"max-w-screen-xl px-16 py-4 mx-auto"}>
            <h1 className={"text-2xl md:text-4xl pb-4"}>
                Projects
            </h1>
            <div className={"flex flex-col md:flex-row flex-wrap"}>
                <ProjectCard link={"https://github.com/leoldding"}
                             title={"Project 1"}
                             description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} />
                <ProjectCard link={"https://github.com/leoldding"}
                             title={"Project 2"}
                             description={"Description"} />
                <ProjectCard link={"https://github.com/leoldding"}
                             title={"Project 3"}
                             description={"Description"} />
                <ProjectCard link={"https://github.com/leoldding"}
                             title={"Project 4"}
                             description={"Description"} />
            </div>
        </div>
    );
}

export default Projects;
