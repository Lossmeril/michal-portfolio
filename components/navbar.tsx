"use client";

import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const links = [
  ["/", "Home"],
  ["/projects", "Projects"],
  ["/portfolio", "Portfolio"],
  ["/filmography", "Filmography"],
  ["/skills", "Skills"],
  ["/contact", "Contact"],
];

interface MobileMenuProps {
  active: boolean;
  menuToggle: Dispatch<SetStateAction<boolean>>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ active, menuToggle }) => {
  const handleMenuClose = () => {
    menuToggle(false);
  };

  return (
    <nav
      className="pb-12 list-none w-screen h-screen bg-black text-white absolute top-0 left-0 z-10 mobile-menu"
      style={{
        left: !active ? "-100vw" : "0",
        transition: "all ease-in-out 1s",
      }}
    >
      <div
        className="absolute top-12 right-12 cursor-pointer"
        onClick={() => handleMenuClose()}
      >
        <IoMdClose size={24} />
      </div>
      <ul className="flex flex-col gap-12 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
        {links.map((link) => (
          <Link
            key={link[0]}
            href={link[0]}
            className="link"
            onClick={() => handleMenuClose()}
          >
            <li>{link[1]}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

const Navbar = () => {
  const [mobileNavActive, setMobileNav] = useState(false);

  const handleMenuOpen = () => {
    setMobileNav(true);
  };

  return (
    <>
      <nav className="hidden md:block pb-12 list-none">
        <ul className="flex flex-row gap-12">
          {links.map((link) => (
            <Link key={link[0]} href={link[0]} className="link">
              <li>{link[1]}</li>
            </Link>
          ))}
        </ul>
      </nav>
      <div className="inline-block md:hidden pb-12">
        <div onClick={() => handleMenuOpen()}>
          <GiHamburgerMenu size={32} className="cursor-pointer" />
        </div>
        <MobileMenu active={mobileNavActive} menuToggle={setMobileNav} />
      </div>
    </>
  );
};

export default Navbar;
