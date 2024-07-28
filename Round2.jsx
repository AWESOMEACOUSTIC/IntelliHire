import * as React from "react";
import Rouhead from "./Rouhead";
import Rouquestion from "./Rouquestion";
import Transcription from "./Transcription";
import Coding from "./Coding";

function Round() {
  return (
    <main className="bg-slate-950 flex flex-col overflow-y-hidden">
      <div>
        <Rouhead />
      </div>
      <section className="self-stretch z-[1] w-full px-5 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <div className="flex flex-col mt-3.5 max-md:max-w-full">
              <Rouquestion />
            </div>
            <div>
              <Transcription />
            </div>
          </div>
          <div>
            < Coding />
          </div>
        </div>
      </section>
    </main>
  );
}
export default Round;