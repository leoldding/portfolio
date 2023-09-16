import React, { useState, useEffect } from "react";
import { NewtonsCradle } from "@uiball/loaders";

function Loader() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setLoaded(true), 2000);
        return () => clearTimeout(timeout)
    }, []);

    return (
        <div test-id={"loader"} className={"fixed top-0 left-0 z-20 bg-stone-50 w-screen h-screen flex justify-center items-center " + loaded ? "hidden" : "static"}>
            <NewtonsCradle
                size={80}
                speed={1.5}
                color="black"
            />
        </div>
    );
}


export default Loader;
