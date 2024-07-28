import * as React from "react";
import Rouhead from "../components/Rouhead";
import Innerdiv from "../components/Innerdiv";

function InterviewComponent() {
    return (
        <main className="bg-slate-950 flex flex-col">
            <div>
                <Rouhead />
            </div>
            <section className="self-center w-full max-w-[1324px] mt-8 px-5 max-md:max-w-full">
                <div>
                    <Innerdiv />
                </div>
            </section>
            <div className="text-stone-50 text-sm self-center 
                            justify-center items-center bg-gray-800 ml-0 w-[120px] max-w-full mt-6 mb-11 pl-4 pr-3.5 py-3 
                            rounded-xl border-[0.4px] border-solid border-zinc-50 whitespace-nowrap max-md:mb-10">
                <button>Stop Interview</button>
            </div>
        </main>
    );
}
export default InterviewComponent;