import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span class="font-mono text-sm md:text-5xl">
            <span class="text-white">DatTran</span>
            <span class="text-cyan-400">.Dev</span>
          </span>
      </div>
    </footer>
  );
};

export default Footer;
