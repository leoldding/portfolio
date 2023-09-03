import React from "react";

function ProjectTag(props) {
    return (
        <div className={"rounded-full transition duration-300 md:group-hover:bg-orange-300 bg-orange-500 mx-1 my-0.5 px-2 py-1"}>{props.text}</div>
    );
}

export default ProjectTag;
