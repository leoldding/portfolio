import React from 'react';
import { Link } from 'react-router-dom';

function ProjectCard(props) {
    return (
        <div className={"py-2 md:w-1/3"}>
            <Link to={props.link}
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                  className={"block md:w-11/12 h-52 bg-orange-200 rounded-md transition duration-300 hover:bg-orange-400 hover:-translate-y-1 overflow-hidden"}>
                <div className={"px-4"}>
                    <h2 className={"text-lg md:text-2xl py-2"}>{props.title}</h2>
                    <p className={"text-xs md:text-sm py-2"}>{props.description}</p>
                </div>
            </Link>
        </div>
    )
}

export default ProjectCard
