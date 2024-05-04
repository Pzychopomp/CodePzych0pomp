// src/components/NavigationBar.tsx

import React from "react";
import Link from "next/link";

function NavigationBar() {
  return (
    <div className="navbar fixed navigation-bar fixed top-0 left-0 right-0 z-10 flex justify-between bg-transparent text-white py-4 px-8 w-full" style={{ marginBottom: '20px' }}>
      <div className="flex items-center">
        <Link href="#home"><span className="mx-4">Home</span></Link>
        <Link href="#about"><span className="mx-4">About</span></Link>
        <Link href="#skills"><span className="mx-4">Skills</span></Link>
        <Link href="#projects"><span className="mx-4">Projects</span></Link>
      </div>
      <div className="flex items-center static w-auto rounded-xl border p-4">
        <Link href="#contact"><span className="text-white">Contact Me</span></Link>
        <div style={{ flex: '1' }}></div>
      </div>
    </div>
  );
}

export default NavigationBar;
