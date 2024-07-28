import * as React from 'react';

function Transcription() {
  return (
    <div>
      <div className="justify-center items-center self-stretch flex flex-col px-5 py-7 border-l-neutral-100 border-r-neutral-100 border-y-neutral-100 border-t border-solid border-b border-l border-r max-md:max-w-full">
        <div className="text-white text-lg font-semibold self-center whitespace-nowrap">Transcription Here</div>
      </div>
      <div className="self-center flex w-[370px] max-w-full items-start justify-between gap-5 mt-11 max-md:mt-10 ml-10">
        <div className="border flex h-[41px] flex-col flex-1 border-solid border-teal-400 " >
          <button className="text-white text-lg font-semibold self-center whitespace-nowrap">
            button-1
          </button>
        </div>
        <div className="border flex h-[41px] flex-col flex-1 border-solid border-teal-500 text-white" > 
          <button className="text-white text-lg font-semibold self-center whitespace-nowrap">
            button-2
          </button>
         </div>
      </div>
    </div>
  );
}

export default Transcription;
