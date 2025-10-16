"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { menus } from "../../../constants";
import { ChevronDownIcon, MenuIcon, SearchIcon, X } from "lucide-react";
import Image from "next/image";
import { Search } from "../parts/Search";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const dropdownRefs = useRef<(HTMLLIElement | null)[]>([]);
  const pathname = usePathname()

  const isBlogDetail =
    pathname.startsWith("/blog/") && pathname !== "/blog";

  const handleMenuClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        openIndex !== null &&
        dropdownRefs.current[openIndex] &&
        !dropdownRefs.current[openIndex]?.contains(event.target as Node)
      ) {
        setOpenIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openIndex]);

  return (
    <nav
      // className={`py-5 fixed left-0 right-0 top-0 w-full z-10 ${isBlogDetail && '!text-black'} ${
      //   isScrolled && !searchOpen ? "bg-white text-black" : searchOpen ? "bg-[#0062e0]" : "bg-white lg:bg-transparent text-black lg:text-white"
      // }`}
       className={`py-5 fixed left-0 right-0 top-0 w-full z-10 bg-white text-black lg:bg-white text-black"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <Image src={'/images/logo.png'} alt="Logo" width={210} height={210} className="object-contain" />
          </Link>

          <ul className={`absolute left-0 right-0 bg-white h-max text-primary p-8 gap-y-5 transition-transform duration-200 -z-[3] ${menuOpen ? 'translate-y-0 top-20' : '-translate-y-full top-0'} lg:translate-y-0 lg:z-0 lg:text-inherit lg:p-0 lg:h-auto lg:bg-transparent lg:static flex flex-col lg:flex-row lg:items-center gap-x-7`}>
            {menus.map((menu, id) => (
              <li
                key={id}
                ref={(el) => {
                  dropdownRefs.current[id] = el;
                }}
              >
                {menu.subMenu ? (
                  <div className="relative">
                    <span
                      className="flex items-center gap-x-1 cursor-pointer"
                      onClick={() => handleMenuClick(id)}
                    >
                      {menu.label} <ChevronDownIcon size={20} />
                    </span>
                    {openIndex === id && (
                      <div className="absolute z-[5] top-8 bg-white text-black rounded-md left-0 w-max shadow-md outline outline-1 outline-neutral-300 overflow-hidden">
                        {menu.subMenu.map((m, id) => (
                          <Link
                            href={m.link}
                            className="flex items-center gap-x-2 py-2 px-4 transition duration-200 hover:bg-slate-100"
                            key={id}
                            onClick={() =>setOpenIndex(null)}
                          >
                            {m.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link href={menu.link} className={`transition duration-200 ${isScrolled && !searchOpen ? 'hover:text-neutral-600' : ''}`}>
                    {menu.label}
                  </Link>
                )}
              </li>
            ))}
            <li onClick={() => setSearchOpen(!searchOpen)} className="cursor-pointer hidden lg:block">
              <SearchIcon size={18} />
            </li>
            <li>
              <div className="flex items-center mt-10 lg:mt-0 justify-end lg:justify-start text-black lg:text-inherit">
                <span className="px-2">EN</span>
                <span className="px-2">ID</span>
              </div>
            </li>
          </ul>

          {/* Mobile Menu */}
          <div className="flex lg:hidden items-center gap-x-5">
            <div onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X /> : <MenuIcon />}
            </div>
            <div onClick={() => setSearchOpen(!searchOpen)}>
              <SearchIcon size={20} />
            </div>
          </div>
        </div>
      </div>
      {searchOpen && <Search setSearchOpen={setSearchOpen} />}
    </nav>
  );
}
