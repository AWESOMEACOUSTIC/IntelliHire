import * as React from "react";
import Skuyxz from "../assets/Skuyxz.jpg";
import Host from "../assets/Host.jpg";
function History() {
    return (

        <div>
            <div className="justify-end items-start bg-slate-900 flex grow flex-col w-full mx-auto pt-8 px-5 rounded-2xl border-[6px] border-solid border-black max-md:max-w-full max-md:mt-9">
                <div className="items-center bg-slate-950 self-center flex w-[411px] max-w-full flex-col pl-3.5 pr-5 py-6 rounded-xl">
                    <div className="flex w-[239px] max-w-full items-start gap-1.5 self-start">
                        <img loading="lazy" 
                        srcSet={Skuyxz} 
                        alt="image"
                        className="aspect-[0.96] object-cover object-center w-[52px] justify-center items-center overflow-hidden self-stretch max-w-full" />
                        <div className="justify-center text-white text-sm self-center -mr-0.5 my-auto">
                            How you doing?
                        </div>
                    </div>
                </div>
                <div className="items-center bg-slate-950 self-center flex w-[411px] max-w-full flex-col mt-8 pl-3.5 pr-5 py-6 rounded-xl">
                    <div className="flex w-[181px] max-w-full items-start gap-1.5 self-start">
                        <img loading="lazy" 
                        srcSet={Host}
                        alt="host"
                        className="aspect-[0.96] object-cover object-center w-[52px] justify-end items-center overflow-hidden self-stretch max-w-full" />
                        <div className="justify-center text-white text-sm self-center mr-0 my-auto">
                            I am doing great bot!
                        </div>
                    </div>
                </div>
                <div className="items-center bg-slate-950 self-center flex w-[411px] max-w-full flex-col mt-8 pl-3.5 pr-5 py-6 rounded-xl">
                    <div className="flex w-[239px] max-w-full items-start gap-1.5 self-start">
                        <img loading="lazy" 
                        srcSet={Skuyxz} 
                        alt="image"
                        className="aspect-[0.96] object-cover object-center w-[52px] justify-center items-center overflow-hidden self-stretch max-w-full" />
                        <div className="justify-center text-white text-sm self-center -mr-0.5 my-auto">
                            Tell me something about yourself
                        </div>
                    </div>
                </div>
                <div className="items-center bg-slate-950 self-center flex w-[411px] max-w-full flex-col mt-8 pl-3.5 pr-5 py-6 rounded-xl">
                    <div className="flex w-[181px] max-w-full items-start gap-1.5 self-start">
                        <img loading="lazy" srcSet={Host}
                        alt="host" 
                        className="aspect-[0.96] object-cover object-center w-[52px] justify-end items-center overflow-hidden self-stretch max-w-full" />
                        <div className="justify-center text-white text-sm self-center -mr-1 my-auto">
                             Sure!
                        </div>
                    </div>
                </div>
                <div className="items-center bg-slate-950 self-center flex w-[411px] max-w-full grow flex-col mt-8 pl-3.5 pr-5 pt-6 pb-1 rounded-xl">
                    <div className="flex w-[239px] max-w-full items-start gap-1.5 self-start">
                        <img loading="lazy" srcSet={Skuyxz} 
                        alt="image" 
                        className="aspect-[0.96] object-cover object-center w-[52px] justify-center items-center overflow-hidden self-stretch max-w-full" />
                        <div className="justify-center text-white text-sm self-center -mr-1 my-auto">
                            Great
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
}
export default History;

