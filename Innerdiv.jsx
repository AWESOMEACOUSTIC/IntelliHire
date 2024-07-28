import * as React from "react";
import Q from "../components/Q";
import V from "../components/V";
import Chathistory from "../components/Chathistory";
function Inner() {
    return (
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[64%] max-md:w-full max-md:ml-0">
            <div className="justify-end items-center bg-slate-900 flex grow flex-col w-full mx-auto pt-8 pb-4 px-5 rounded-3xl max-md:max-w-full max-md:mt-9">
                <div className="bg-slate-900 self-stretch rounded-2xl max-md:max-w-full max-md:mr-2.5">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <Q />
                        <V />
                    </div>
                </div>
                <div className="justify-center items-center bg-slate-800 self-center flex w-[573px] max-w-full flex-col mt-7 px-5 py-11 rounded-[34px]">
                    <div className="justify-center text-white text-center text-sm self-center max-w-[568px]">
                        Transcription Here
                    </div>
                </div>
                <div className="justify-center items-center bg-red-500 self-center flex w-[42px] max-w-full flex-col mt-7 pl-3 pr-3 py-2.5 rounded-lg">
                    <div className="bg-white self-stretch flex w-full h-[18px] flex-col rounded-[50px]" />
                </div>
            </div>
        </div>
        <div className="flex flex-col items-stretch w-[36%] max-h-[626px] ml-5 max-md:w-full max-md:ml-0 overflow-y-scroll">
            <Chathistory/>
        </div>
    </div>



    );
}
export default Inner;