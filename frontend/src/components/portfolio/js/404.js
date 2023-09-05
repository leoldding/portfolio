import React from "react";
import { Link } from "react-router-dom";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

function NotFound() {
    return (
        <div className={"w-full h-[calc(100%-110px)] bg-gradient-to-b from-orange-100 to-orange-400 flex flex-col items-center justify-center space-y-12"}>
            <h1 className={"text-6xl md:text-8xl italic"}>
                404
            </h1>
            <p className={"text-lg md:text-2xl"}>
                PAGE NOT FOUND
                <SentimentVeryDissatisfiedIcon className={"pb-1"} />
            </p>
            <button className={"p-4 rounded-md border-black border-2 transition duration-300 md:hover:bg-orange-400 md:hover:-translate-y-1"}>
                <Link to={"/"} className={"text-sm md:text-lg"}>
                    Go Home
                </Link>
            </button>
        </div>
    );
}

export default NotFound;
