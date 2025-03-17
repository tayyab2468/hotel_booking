"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [open, setopen] = useState(false);

    return (
        <div>
            <nav className="bg-black text-white px-6 flex items-center h-20 w-full">
                <div className="text-2xl font-bold ml-4 md:mr-8">Booking Web</div>
                
                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center font-sans justify-center space-x-12 ml-auto mr-10">
                <li><Link href="/" className="hover:text-green-300">Home</Link></li>
               
               

                <Link href="/hotel">Hotels</Link>
<Link href="/about">About</Link>
<Link href="/booking">Booking</Link>
<Link href="/contact">Contact</Link>

                </ul>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-2xl ml-auto" onClick={() => setopen(!open)}>
                    {open ? <FaTimes /> : <FaBars />}
                </button>
            </nav>

            {/* Mobile Menu with Click Outside to Close */}
            {open && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-start pt-20"
                    onClick={() => setopen(false)}
                >
                    <div 
                        className="bg-black text-white shadow-md py-6 px-6 z-50 flex flex-col space-y-6 md:hidden font-Poppins items-center w-3/4 max-w-sm rounded-lg"
                        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
                    >
                        <Link className="text-lg block" onClick={() => setopen(false)} href="/">Home</Link>
                        <Link className="text-lg block" onClick={() => setopen(false)} href="/hotel">Hotels</Link>
                        <Link className="text-lg block" onClick={() => setopen(false)} href="/about">About</Link>
                        <Link className="text-lg block" onClick={() => setopen(false)} href="/contact">Contact</Link>
                        <Link className="text-lg block" onClick={() => setopen(false)} href="/booking">Booking</Link>
                       

                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
