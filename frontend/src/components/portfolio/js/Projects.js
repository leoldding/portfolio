import React from "react";

import ProjectCard from "./ProjectCard.js";

function Projects() {
    return (
        <div className={"max-w-screen-xl px-16 py-4 mx-auto"}>
            <h1 className={"text-2xl md:text-4xl pb-4"}>
                Featured Projects
            </h1>
            <div className={"flex flex-col md:flex-row flex-wrap mb-4 md:mb-8"}>
                <ProjectCard link={"https://coffee.leoding.com"}
                             title={"Coffee Status"}
                             description={"A web app which shows if I am currently doing work at the coffee shop I frequent. Admin authentication required to change displayed status. WebSockets used for realtime updates."}
                             featured={true}
                             cardId={1}/>
                <ProjectCard link={"https://github.com/leoldding"}
                             title={"Project 2"}
                             description={"Description"}
                             featured={true} />
            </div>
            <h1 className={"text-2xl md:text-4xl pb-4"}>
                Other Projects
            </h1>
            <div className={"flex flex-col md:flex-row flex-wrap"}>
                <ProjectCard link={"https://github.com/leoldding"}
                             title={"Project 3"}
                             description={"Description"} />
                <ProjectCard link={"https://github.com/leoldding"}
                             title={"Project 4"}
                             description={"Description"} />
                <ProjectCard link={"https://github.com/leoldding"}
                             title={"Project 5"}
                             description={"Description"} />
                <ProjectCard link={"https://github.com/leoldding"}
                             title={"Project 6"}
                             description={"Description"} />
            </div>
        </div>
    );
}

export default Projects;
