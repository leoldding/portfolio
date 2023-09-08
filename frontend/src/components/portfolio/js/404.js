import React from "react";
import { Link } from "react-router-dom";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

function NotFound() {
    return (
        <div className={"w-full h-[calc(100%-110px)] flex flex-col items-center justify-center space-y-12"}>
            <h1 className={"bg-gradient-to-br from-orange-100 to-orange-600 text-transparent bg-clip-text text-8xl md:text-9xl italic"}>
                404
            </h1>
            <p className={"text-lg md:text-2xl bg-gradient-to-br from-orange-100 to-orange-600 text-transparent bg-clip-text"}>
                PAGE NOT FOUND
                <SentimentVeryDissatisfiedIcon className={"pb-1 text-orange-500"} />
            </p>
            <Link to={"/"} className={"text-white text-md md:text-xl"}>
                <div className={"bg-orange-200 rounded-md"}>
                    <div className={"p-4 rounded-md bg-gradient-to-br from-orange-100 to-orange-600 transition duration-300 md:hover:-translate-y-1 md:hover:-translate-x-1"}>
                            Go Home
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default NotFound;
