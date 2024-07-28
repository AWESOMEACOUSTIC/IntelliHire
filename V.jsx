import * as React from "react";

function Video() {
    return (
        <div className="flex flex-col items-stretch w-[49%] ml-5 max-md:w-full max-md:ml-0">
            <div className="bg-slate-800 flex w-[365px] max-w-full grow flex-col mx-auto pt-48 pb-48 px-5 max-md:mt-2.5">
                <div className="justify-center text-white text-center text-sm self-center mb-0 max-md:mb-2.5">
                    Video Here
                </div>
            </div>
        </div>

    );
}
export default Video;