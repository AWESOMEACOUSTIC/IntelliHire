import React from 'react';
import Editor from "../components/Editor";
function Coding() {
  return (
    <div className="flex flex-col items-stretch w-[67%] ml-5 max-md:w-full max-md:ml-0">
      <div className="text-white text-sm font-semibold leading-4 tracking-wider max-w-[1027px] max-h-[700px] justify-center items-center grow pl-2 pr-5 pt-3.5 pb-[765px] border-l-white border-l border-solid self-start max-md:max-w-full max-md:pb-2.5">
       <Editor/>
        </div>
    </div>

  );
}

export default Coding;
