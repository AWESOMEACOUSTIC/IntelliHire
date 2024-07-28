import * as React from "react";
import Skuyxz from "../assets/Skuyxz.jpg";

function Question() {
    return (
        <div>
            <div className="text-stone-300 text-center text-lg font-bold justify-center items-center bg-slate-950 w-[76px] max-w-full ml-3.5 pl-0.5 pr-px py-0.5 self-start whitespace-nowrap max-md:ml-2.5">
                Question:
              </div>
              <div className="justify-center items-center border self-center flex w-[449px] max-w-full flex-col mt-5 pt-10 pb-14 px-5 border-solid border-teal-400">
                <div className="text-white text-center text-lg font-bold self-center">Ai reply</div>
              </div>
              <div className="w-[439px] max-w-full mt-5 self-end max-md:mr-px">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[12%] max-md:w-full max-md:ml-0">
                    <img
                      loading="lazy"
                      srcSet= {Skuyxz} className="aspect-[0.96] object-cover object-center w-[52px] justify-center items-center overflow-hidden max-w-full mt-1.5 max-md:mt-7"
                      alt="Image"
                    />
                  </div>
                  <div className="flex flex-col items-stretch w-[88%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="flex grow flex-col max-md:mt-5">
                      <div className="text-gray-400 text-xs justify-center items-center bg-slate-950 w-20 max-w-full pr-0.5 py-1 self-start whitespace-nowrap">
                        Interviewer Bot
                      </div>
                      <div className="text-gray-400 text-lg font-semibold max-w-full justify-end items-center bg-slate-950 w-[367px] grow mt-1.5 pr-5 pt-1 pb-44 self-start max-md:pb-2.5">
                        Write a javascript function called reverstring that takes a string as input and returns the reverse of that string. Do not use any built-in reverse functions.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </div>
    );
}
export default Question;