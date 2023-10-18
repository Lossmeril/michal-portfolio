"use client";

import Link from "next/link";
import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

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
      className="pb-12 list-none w-screen h-screen bg-black text-white absolute top-0 left-0 z-10"
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
        <Link href="/" className="link" onClick={() => handleMenuClose()}>
          <li>Home</li>
        </Link>
        <li>Projects</li>
        <Link
          href="/portfolio"
          className="link"
          onClick={() => handleMenuClose()}
        >
          <li>Portfolio</li>
        </Link>
        <li>Filmography</li>
        <li>Skills</li>
        <li>Contact</li>
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
          <Link href="/" className="link">
            <li>Home</li>
          </Link>
          <li>Projects</li>
          <Link href="/portfolio" className="link">
            <li>Portfolio</li>
          </Link>
          <li>Filmography</li>
          <li>Skills</li>
          <li>Contact</li>
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
