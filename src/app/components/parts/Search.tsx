import { X } from "lucide-react";
import React from "react";

type SearchProps = {
  setSearchOpen: (open: boolean) => void;
};

export function Search({ setSearchOpen }: SearchProps) {
  return (
    <div className="fixed -z-[2] inset-0 w-screen h-screen bg-white mt-[5.5rem]">
      {/* <div className="h-24 bg-primary" /> */}
      <div className="container">
        <div className="flex items-center justify-between mt-5 border-b border-b-slate-200">
          <input
            type="text"
            placeholder="Halo, mau cari apa?"
            className="w-full py-4 text-black text-3xl placeholder:text-3xl focus:border-none focus:outline-none"
          />
          <X
            className="text-primary cursor-pointer"
            onClick={() => setSearchOpen(false)}
          />
        </div>
      </div>
    </div>
  );
}
