import React from "react";
import { Link } from "react-router-dom";
import { GitHub, OpenInNew } from "@mui/icons-material";
import ProjectTag from "./ProjectTag";

function ProjectCard(props) {

    const tagList = props.tags ? props.tags.map(tag => {return <li key={tag}><ProjectTag text={tag} /></li>}) : <div />

    return (
        <div className={"py-2 " + (props.featured ? "md:w-1/2" : "md:w-1/3")}>
            <div className={"group block mx-auto w-[98%] bg-orange-300 rounded-md transition duration-300 md:hover:-translate-y-1 md:hover:bg-orange-500"}>
                <div className={"flex flex-col space-y-4 justify-between px-6 py-4 min-h-[13rem] "}>
                    <div className={"flex flex-row items-center justify-between grow-0"}>
                        <h2 className={"text-lg md:text-2xl"}>{props.title}</h2>
                        <ul className={"flex flex-row space-x-4"}>
                            <li className={(props.github ? "" : "hidden")}>
                                <Link to={props.github}
                                      target={"_blank"}
                                      rel={"noopener noreferrer"}
                                      className={"block transition duration-300 md:hover:-translate-y-1"} >
                                    <GitHub />
                                </Link>
                            </li>
                            <li className={(props.website ? "" : "hidden")}>
                                <Link to={props.website}
                                      target={"_blank"}
                                      rel={"noopener noreferrer"}
                                      className={"block transition duration-300 md:hover:-translate-y-1"}>
                                    <OpenInNew />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <p className={"text-xs md:text-sm grow"}>{props.description}</p>
                    <div className={"w-[calc(100%+0.5rem)] -translate-x-1 grow-0"}>
                        <ul className={"flex flex-row flex-wrap items-center text-xxs md:text-xs"}>
                            {tagList}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
