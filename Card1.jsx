const Card2 = () => {
  

    return (
      <div className="border-4 border-[color:var(--Stroke-Color,#EFF0F6)] flex w-full max-w-[260px] grow items-start justify-between gap-px mx-auto pl-5 pr-2.5 py-5 rounded-3xl border-solid max-md:mt-8 shadow-md hover:bg-slate-200">
              <div className="flex flex-col self-start">
                  <span className="text-black text-xl font-bold tracking-normal self-stretch">
                      Stage-2
                  </span>
                  <div className="self-stretch flex items-start justify-between gap-1.5 mt-16 pt-6">
                      <div className="flex flex-col w-4 self-start pt-1">
                          <div className="bg-indigo-400 self-stretch flex w-full h-2 flex-col rounded" />
                          <div className="bg-neutral-400 self-stretch flex w-full h-2 flex-col mt-3 rounded" />
                      </div>
                      <div className="flex flex-col self-start">
                          <div className=" text-xs font-medium leading-3 self-stretch">
                              <span className="font-bold text-black text-opacity-70">
                                  60%
                              </span>
                              <span className="font-medium text-white text-opacity-70">
                                  {" "}
                              </span>
                              <span className="font-bold text-orange-800">
                                  Rejected
                              </span>
                          </div>
                          <div className=" text-xs font-medium leading-3 self-stretch mt-2">
                              <span className="font-bold text-black text-opacity-70">
                                  40%{" "}
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
  
  export default Card2;
  