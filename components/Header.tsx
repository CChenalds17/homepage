"use client";

import { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiXMark } from "react-icons/hi2";

interface NavLink {
    name: string;
    link: string;
}

export default function Header() {
    const links: NavLink[] = [
        { name: 'Music', link: '/music'},
    ];

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="shadow-sm shadow-gray-700 w-full top-0 left-0">
          <div className="md:px-72 py-6 px-7 md:flex justify-between items-center">

            <div className="flex text-3xl cursor-pointer items-center gap-2">
              <span className="font-semibold hover:opacity-65 hover:scale-105 transition-all duration-300">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  Charlie Chen
                </Link>
              </span>
            </div>
    
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="w-7 h-7 absolute right-8 top-9 cursor-pointer md:hidden hover:opacity-65 hover:scale-125 transition-all duration-200"
            >
              {isOpen ? <HiXMark /> : <RxHamburgerMenu />}
            </div>
    
            <ul
              className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static left-0
                w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                  isOpen ? 'top-22' : 'top-[-490px]'
                }`}
            >
              {links.map((link) => (
                <li
                  key={link.name}
                  className="font-semibold my-7 md:my-0 md:ml-8 hover:opacity-65 hover:scale-110 transition-all duration-300"
                >
                  <Link href={link.link} onClick={() => setIsOpen(false)}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
}