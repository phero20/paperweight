"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2B2B2B] border-t border-white/10 py-6 px-6 md:px-12 text-[#FAF7F2]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
        
        <div className="space-y-2">
          <h3 className="font-serif text-2xl tracking-tight">
            The Paperweight.
          </h3>
          <p className="text-white/40 text-sm font-sans">
            Celebrating the art of storytelling since 2025.
          </p>
        </div>

        <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm font-sans text-white/60">
          <Link 
            href="#" 
            className="hover:text-[#E8E1D8] transition-colors duration-300"
          >
            Instagram
          </Link>
          <Link 
            href="#" 
            className="hover:text-[#E8E1D8] transition-colors duration-300"
          >
            Twitter
          </Link>
          <Link 
            href="#" 
            className="hover:text-[#E8E1D8] transition-colors duration-300"
          >
            Contact
          </Link>
        </div>

        <p className="text-white/30 text-xs font-sans tracking-wide">
          © 2025 The Paperweight. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
