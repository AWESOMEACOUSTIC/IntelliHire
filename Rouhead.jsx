import React from "react";

function Header() {
  return (
    <header className="self-stretch flex w-full flex-col pl-4 pr-5 pt-4 pb-6 border-b-white border-b border-solid max-md:max-w-full">
      <h1 className="text-zinc-200 text-center text-xl leading-4 tracking-wider uppercase mt-1">IntelliHire</h1>
      <nav className="bg-slate-950 flex w-[475px] max-w-full items-start justify-between gap-5 mt-9 pl-3.5 pr-5 py-0.5 self-end max-md:flex-wrap">
        <a href="#" className="text-stone-400 text-lg font-semibold">Live Interview</a>
        <a href="#" className="text-stone-300 text-lg font-semibold self-start whitespace-nowrap">Question & Chat History</a>
      </nav>
    </header>
  );
}
export default Header;