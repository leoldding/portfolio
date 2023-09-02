import React from "react";
import { Link } from "react-router-dom";
import { GitHub, OpenInNew } from "@mui/icons-material";

function ProjectCard(props) {
    return (
        <div className={"py-2 " + (props.featured ? "md:w-1/2" : "md:w-1/3")}>
            <div className={"block mx-auto w-[98%] h-52 bg-orange-300 rounded-md transition duration-300 md:hover:-translate-y-1 md:hover:bg-orange-500"}>
                <div className={"px-6 py-4"}>
                    <div className={"flex flex-row items-center justify-between pb-2"}>
                        <h2 className={"text-lg md:text-2xl"}>{props.title}</h2>
                        <ul className={"flex flex-row space-x-4"}>
                            <li>
                                <Link to={props.github}
                                      target={"_blank"}
                                      rel={"noopener noreferrer"}
                                      className={"block transition duration-300 md:hover:-translate-y-1 " + (props.github ? "" : "hidden")} >
                                    <GitHub />
                                </Link>
                            </li>
                            <li>
                                <Link to={props.website}
                                      target={"_blank"}
                                      rel={"noopener noreferrer"}
                                      className={"block transition duration-300 md:hover:-translate-y-1 " + (props.website ? "" : "hidden")}>
                                    <OpenInNew />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <p className={"text-xs md:text-sm"}>{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
