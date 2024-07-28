const Card = () => {
  

  return (
    <div className="border-4 border-[color:var(--Stroke-Color,#EFF0F6)] flex w-full max-w-[260px] grow items-start justify-between gap-px mx-auto pl-5 pr-2.5 py-5 rounded-3xl border-solid max-md:mt-8 shadow-md hover:bg-slate-200">
            <div className="flex flex-col self-start">
                <span className="text-lg font-bold tracking-normal self-stretch">
                    Total Candidates
                </span>
                <p className="justify-center text-fuchsia-800 text-2xl font-bold self-stretch mt-3.5">
                    4,209
                </p>
                <div className="self-stretch flex items-start justify-between gap-1.5 mt-8 max-md:mt-10">
                    <div className="bg-indigo-600 self-stretch flex w-3 h-2 flex-col grow shrink-0 basis-auto mt-1 rounded" />
                    <div className="text-white text-opacity-50 text-xs font-medium leading-3 self-stretch">
                        <span className="font-bold text-black text-opacity-70">
                            62%
                        </span>
                        <span className="font-bold text-white text-opacity-70">
                            {" "}
                        </span>
                        <span className="font-bold text-black text-opacity-80">
                            New
                        </span>
                    </div>
                </div>
                <div className="self-stretch flex items-start justify-between gap-1.5 mt-3.5">
                    <div className="flex flex-col w-4 self-start">
                        <div className="bg-indigo-400 self-stretch flex w-full h-2 mt-1 flex-col rounded" />
                        <div className="bg-neutral-400 self-stretch flex w-full h-2 flex-col mt-3 rounded" />
                    </div>
                    <div className="flex flex-col self-start">
                        <div className="text-white text-opacity-50 text-xs font-medium leading-3 mr-5 self-stretch">
                            <span className="font-bold text-black text-opacity-70">
                                13%
                            </span>
                            <span className="font-medium text-white text-opacity-70">
                                {" "}
                            </span>
                            <span className="font-bold text-orange-800 ">
                                Rejected
                            </span>
                        </div>
                        <div className="text-white text-opacity-50 text-xs font-medium leading-3 self-stretch mt-2">
                            <span className="font-bold text-black text-opacity-70">
                                23%{" "}
                            </span>
                            <span className="font-bold text-green-800">
                                Accepted
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fdc126f-9547-4ca3-97ed-2c4d670b1e8c?apiKey=6153720106a04a3a88ff7425a6bd679e&"
                    className="aspect-square object-contain object-center w-full overflow-hidden  mt-12 max-md:mt-10"
                />
            </div>
        </div>
  );
};

export default Card;
