"use client";

import Link from "next/link";
import { Moon, X, Menu } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white flex justify-center">
      {/* Border Wrapper */}
      <div className="flex flex-col bg-customGray w-full py-4 px-20 rounded-lg border border-white/30 mx-auto">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-xl font-bold">AI-ZK-TEC</h1>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex space-x-6">
            <Link href="/">Home</Link>
            <Link href="/data-rights">Data Rights</Link>
            <Link href="/compliance">Compliance</Link>
            <Link href="/audit">Audit</Link>
          </div>

          {/* Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 rounded-md border border-white/30 bg-black hover:bg-gray-800">
              <Moon className="w-6 h-6 text-white" />
            </button>
            <button className="bg-black px-4 py-2 rounded border border-white/30 hover:bg-gray-800">
              Connect
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col mt-4 space-y-4">
            <div className="flex flex-col space-y-2">
              <Link href="/" className="py-2 px-3 hover:bg-gray-800 rounded">
                Home
              </Link>
              <Link
                href="/data-rights"
                className="py-2 px-3 hover:bg-gray-800 rounded"
              >
                Data Rights
              </Link>
              <Link
                href="/compliance"
                className="py-2 px-3 hover:bg-gray-800 rounded"
              >
                Compliance
              </Link>
              <Link
                href="/audit"
                className="py-2 px-3 hover:bg-gray-800 rounded"
              >
                Audit
              </Link>
            </div>
            <div className="flex items-center space-x-4 pt-2 border-t border-white/10">
              <button className="p-2 rounded-md border border-white/30 bg-black hover:bg-gray-800">
                <Moon className="w-6 h-6 text-white" />
              </button>
              <button className="bg-black px-4 py-2 rounded border border-white/30 hover:bg-gray-800">
                Connect
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
