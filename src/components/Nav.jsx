import { hamburger } from "../assets/icons";
import { navLinks } from "../assets/constants";
import { headerLogo } from "../assets/images";

import React from "react";

const Nav = () => {
  return (
    <header className=" absolute padding-x py-8  w-full z-20">
      <nav className="flex gap-6 justify-between items-center max-container">
        <img src={headerLogo} className="shrink-1" alt="Loog" width={129} height={29} />
        <ul className=" shrink-1 lg:flex hidden justify-between gap-16">
          {navLinks.map((item) => (
            <li key={item} className="">
              {" "}
              <a className="shrink-1 font-montserrat whitespace-nowrap text-lg text-slate-gray" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="shrink-1 whitespace-nowrap gap-1 lg:flex hidden text-lg font-montserrat">
            <a className="flex-1" href="/">Sign in </a>
            /
            <a className="flex-1" href="/"> Browse</a>
        </div>
        <img className="max-lg:block hidden" src={hamburger} alt="hamburger" width={25} height={25}/>
      </nav>
    </header>
  );
};

export default Nav;
