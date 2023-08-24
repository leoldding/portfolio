import React from 'react';
import profile from './../../../assets/profile.jpg'

function Home() {
    return (
        <div className={"max-w-screen-xl px-6 md:px-16 py-8 md:py-32 mx-auto flex flex-col md:flex-row"}>
            <div className={"my-auto pr-4"}>
                <h1 className={"text-3xl md:text-4xl pb-6 font-bold italic"}>
                    Hello, I'm Leo Ding!
                </h1>
                <h2 className={"text-lg md:text-2xl pb-6"}>
                    I am an
                    <div className={"inline italic text-purple-600"}> NYU </div>
                    graduate with a degree in
                    <div className={"inline font-bold italic bg-orange-200 mx-1 px-1"}>Computer Science</div>
                    and
                    <div className={"inline font-bold italic bg-orange-200 ml-1 px-1"}>Data Science</div>.
                </h2>
                <h2 className={"text-lg md:text-2xl pb-6"}>
                    I enjoy learning about technology and am interested in becoming a
                    <div className={"inline font-bold italic bg-orange-200 ml-1 px-1"}>Backend Engineer</div>.
                </h2>
            </div>
            <div className={"w-56 h-56 md:w-96 md:h-96 overflow-clip rounded-full border-orange-400 border-4 mx-auto md:my-auto flex-grow-0 flex-shrink-0 inline-block"}>
                <img className={"transition duration-300 w-full h-auto self-center scale-125 -translate-y-16"}
                     src={profile}
                     alt={"profile"} />
            </div>
        </div>

    );
}

export default Home;
