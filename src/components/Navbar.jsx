import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <header className="bg-primary text-white px-8 py-2">
      <nav className="flex justify-between items-center">
        <h2 className="capitalize font-lora text-2xl">amar english school</h2>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <AiOutlineSearch size={27} />
            <span className="font-lexend font-light text-sm">Search</span>
          </div>
          <GiHamburgerMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
