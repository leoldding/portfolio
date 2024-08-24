import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className={"max-w-screen-xl min-h-[calc(100%-110px)] mx-auto md:my-auto px-16 py-4 items-center justify-center flex flex-col flex-col-reverse md:flex-row"}>
            <div className={"pr-4"}>
                <h1 className={"text-lg sm:text-3xl md:text-4xl pb-6 font-bold italic"}>
                    Hello, I'm Leo Ding!
                </h1>
                <h2 className={"text-md sm:text-lg md:text-2xl pb-6"}>
                    I am an
                    <div className={"inline italic text-purple-600"}> NYU </div>
                    graduate with a degree in
                    <div className={"inline font-bold italic bg-orange-200 mx-1 px-1"}>Computer Science</div>
                    and
                    <div className={"inline font-bold italic bg-orange-200 ml-1 px-1"}>Data Science</div>.
                </h2>
                <h2 className={"text-md sm:text-lg md:text-2xl pb-6"}>
                    I enjoy learning about technology and am interested in becoming a
                    <div className={"inline font-bold italic bg-orange-200 ml-1 px-1"}>Software Engineer</div>.
                </h2>
                <h2 className={"text-md sm:text-md md:text-xl"}>
                    Certifications:
                </h2>
                <ul className={"text-md sm:text-md md:text-xl pb-6 list-disc"}>
                    <li><div className={"inline font-bold italic bg-orange-200 px-1"}>Certified Kubernetes Administrator </div></li>
                    <li><div className={"inline font-bold italic bg-orange-200 px-1"}>AWS Certified Developer Associate </div></li>
                    <li><div className={"inline font-bold italic bg-orange-200 px-1"}>AWS Certified Cloud Practitioner </div></li>
                </ul>
                <div className={"pt-2 md:pt-3"}>
                    <Link to={"/projects"}>
                        <button className={"text-md md:text-2xl text-white p-2 md:p-3 rounded-md bg-orange-500 transition duration-300 md:hover:bg-orange-400 md:hover:-translate-x-1 md:hover:-translate-y-1"}>
                            Check out my projects!
                        </button>
                    </Link>
                </div>
            </div>
            <div className={"w-40 h-40 sm:w-60 sm:h-60 md:w-96 md:h-96 overflow-clip rounded-full border-orange-400 border-4 mx-auto mb-8 md:mx-8 md:my-auto flex-grow-0 flex-shrink-0 inline-block"}>
                <img className={"w-full h-auto self-center"}
                    src={process.env.PUBLIC_URL + "profile.jpg"}
                    alt={"profile"} />
            </div>
        </div>
    );
}

export default Home;
