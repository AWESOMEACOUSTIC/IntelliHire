import React from 'react'

const Stat1 = () => {
    return (

        <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <div className="border-2 border-[color:var(--Stroke-Color,#EFF0F6)] bg-slate-100 shadow-lg grow w-full mx-auto pl-7 pr-9 pt-2.5 pb-12 rounded-3xl border-solid max-md:max-w-full max-md:mt-8 max-md:px-5">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[82%] max-md:w-full max-md:ml-0">
                        <div className="flex flex-col max-md:mt-6">
                            <div className="justify-center text-black text-opacity-50 text-md font-bold leading-5 self-stretch">
                                Lowest Engagement
                            </div>
                            <div className="self-stretch flex grow flex-col w-full mt-11 pl-16 max-md:mt-10 max-md:pl-5">
                                <div className="text-black text-sm font-semibold leading-5 self-stretch">
                                    Stage-3
                                </div>
                                <div className="opacity-70 self-stretch flex w-full grow flex-col mt-2.5 pr-16 rounded-[100px] max-md:pr-5">
                                    <div className="items-start bg-[linear-gradient(153deg,#FFBF1A_10.36%,#FF4080_84.64%)] self-stretch flex w-full h-2.5 flex-col rounded-[100px]" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[18%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="text-black text-opacity-30 text-sm font-semibold leading-5 mt-20 whitespace-nowrap max-md:mt-10">
                            <span className="text-black text-opacity-70 ">
                                34%{" "}
                            </span>
                            <span className="text-black text-opacity-30">
                                Participation
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Stat1;