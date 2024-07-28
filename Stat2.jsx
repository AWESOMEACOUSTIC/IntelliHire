import React from 'react'
const Stat2 = () => {
    return (
        <div>
            <div className="border-2 border-[color:var(--Stroke-Color,#EFF0F6)] bg-slate-100  shadow-xl grow w-full mx-auto pl-6 pr-9 pt-2.5 pb-12 rounded-3xl border-solid max-md:max-w-full max-md:mt-8 max-md:px-5">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[82%] max-md:w-full max-md:ml-0">
                        <div className="flex flex-col max-md:mt-6">
                            <div className="justify-center text-black text-opacity-50 text-md font-bold leading-5 self-stretch">
                                Highest Engagement{" "}
                            </div>
                            <div className="self-stretch flex grow flex-col w-full mt-11 pl-16 max-md:mt-10 max-md:pl-5">
                                <div className="text-black text-sm font-semibold leading-5 self-stretch">
                                    Stage-2
                                </div>
                                <div className="opacity-70 self-stretch flex w-full grow flex-col mt-2.5 pr-16 rounded-[100px] max-md:pr-5">
                                    <div className="items-start bg-[linear-gradient(20deg,#2FEA9B_15.5%,#7FDD53_95.5%)] self-stretch flex w-full h-2.5 flex-col rounded-[100px]" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[18%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="text-black text-opacity-30 text-sm font-semibold leading-5 whitespace-nowrap mt-20 max-md:mt-10">
                            <span className="text-black text-opacity-70">
                                54%{" "}
                            </span>
                            <span className="text-black text-opacity-30">
                                Interaction
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stat2