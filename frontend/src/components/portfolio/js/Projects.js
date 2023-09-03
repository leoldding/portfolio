import React from "react";

import ProjectCard from "./ProjectCard.js";

function Projects() {
    return (
        <div className={"max-w-screen-xl px-16 py-4 mx-auto"}>
            <h1 className={"text-2xl md:text-4xl pb-4"}>
                Featured Projects
            </h1>
            <div className={"flex flex-col md:flex-row flex-wrap mb-4 md:mb-8"}>
                <ProjectCard title={"Coffee Status"}
                             website={"https://coffee.leoding.com"}
                             github={"https://github.com/leoldding/coffeeStatusV3"}
                             description={"A web app that shows if I am currently doing work at the coffee shop I frequent. Admin authentication required to change displayed status. WebSockets used for realtime updates."}
                             tags={["Golang", "PostgreSQL", "Docker", "AWS", "ReactJS", "Nginx"]}
                             featured={true} />
                <ProjectCard title={"Chat Room"}
                             website={"https://chat.leoding.com"}
                             github={"https://github.com/leoldding/chatAppV2"}
                             description={"Description"}
                             tags={["Golang", "Docker", "AWS", "ReactJS", "Nginx"]}
                             featured={true} />
            </div>
            <h1 className={"text-2xl md:text-4xl pb-4"}>
                Other Projects
            </h1>
            <div className={"flex flex-col md:flex-row flex-wrap"}>
                <ProjectCard title={"Media Sentiment Analysis"}
                             github={"https://github.com/leoldding/media-sentiment-analysis"}
                             description={"Description"}
                             tags={["Python", "Pandas", "scikit-learn"]} />
                <ProjectCard title={"Soccer Analytics"}
                             github={"https://github.com/leoldding/soccer-analytics"}
                             description={"Description"}
                             tags={["Java", "SQL", "Spark", "Hadoop", "Hive", "Impala"]} />
            </div>
        </div>
    );
}

export default Projects;
