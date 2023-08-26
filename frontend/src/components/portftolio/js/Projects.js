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
                             description={"Description"} />
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
