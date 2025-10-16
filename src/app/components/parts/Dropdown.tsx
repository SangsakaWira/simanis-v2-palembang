"use client";

import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface DropdownProps {
  label: string;
  items: { label: string; href: string }[];
}

export default function Dropdown({ label, items }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex justify-center gap-x-2 w-full rounded-md bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-600 focus:outline-none"
      >
        {label}
        <ChevronDownIcon size={20} />
      </button>

      {open && (
        <div className="absolute left-0 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5">
          <div className="bg-blue-500">
            {items.map((item, id) => (
              <Link
                key={id}
                href={item.href}
                className="block px-4 py-1 text-sm text-white transition duration-300 hover:bg-blue-600"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
