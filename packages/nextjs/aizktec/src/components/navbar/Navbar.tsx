"use client";

import Link from 'next/link';
import { Moon, X, Menu, Sun } from "lucide-react";
import React, { useState } from 'react';
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="dark:bg-black bg-white flex justify-center p-4 transition-colors">
      {/* Border Wrapper */}
      <div className="flex flex-col dark:bg-black bg-white w-full p-4 rounded-lg border dark:border-white/30 border-black/30 max-w-4xl mx-auto">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-xl font-bold">AI-ZK-TEC</h1>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:opacity-80">Home</Link>
            <Link href="/data-rights" className="hover:opacity-80">Data Rights</Link>
            <Link href="/compliance" className="hover:opacity-80">Compliance</Link>
            <Link href="/audit" className="hover:opacity-80">Audit</Link>
          </div>

          {/* Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button variant="outline">
              Connect
            </Button>
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
          <div className="md:hidden mt-4 flex flex-col space-y-4">
            <Link href="/" className="hover:opacity-80">Home</Link>
            <Link href="/data-rights" className="hover:opacity-80">Data Rights</Link>
            <Link href="/compliance" className="hover:opacity-80">Compliance</Link>
            <Link href="/audit" className="hover:opacity-80">Audit</Link>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
              <Button variant="outline">
                Connect
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
