import React from 'react';

import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
const NavBar = () => {
  const [toggle, setToggle] = React.useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img className="w-[124px] h-[32px]" src={logo} alt="hoobank logo" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white  ${
              index === navLinks.lenght - 1 ? 'mr-0' : 'mr-10'
            }`}
          >
            <a href={nav.id}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          className="w-[28px] h-[28px] object-contain"
          src={toggle ? close : menu}
          alt="menu"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-[16px] text-white  ${
                  index === navLinks.lenght - 1 ? 'mr-0' : 'mr-10'
                }`}
              >
                <a href={nav.id}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
