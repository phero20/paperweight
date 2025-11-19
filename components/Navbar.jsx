"use client";

import { useState, useEffect } from "react";
import { Menu, X, PenTool } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PaperweightNavbar({ onOpenModal }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationLinks = [
    { name: "The Challenge", href: "#about" },
    { name: "Guidelines", href: "#guidelines" },
    { name: "Details", href: "#details" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl transition-all duration-300 ${isScrolled
          ? "bg-[#FAF7F2]/95 border-b border-[#1C1C1C]/10 py-4 shadow-sm"
          : "bg-[#FAF7F2] py-6"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">


            <a href="/" className="flex items-center gap-2 group">
              <PenTool className="w-6 h-6 text-[#1C1C1C] group-hover:text-[#7A6A58] transition-colors" />
              <span className="font-serif text-2xl tracking-tight text-[#1C1C1C]">
                The Paperweight.
              </span>
            </a>


            <div className="hidden md:flex items-center gap-10">
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-sans text-sm tracking-wide text-[#3C3C3C] hover:text-[#1C1C1C] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="hidden md:block">
              <button
                onClick={onOpenModal}
                className="px-6 py-2.5 rounded-full bg-[#1C1C1C] text-[#FAF7F2] text-sm font-sans tracking-wide hover:bg-[#7A6A58] transition cursor-pointer"
              >
                Submit Entry
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 hover:bg-[#E8E1D8] rounded transition"
            >
              <Menu className="w-6 h-6 text-[#1C1C1C]" />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] md:hidden"
          >

            <motion.div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />


            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.28 }}
              className="
          absolute right-0 top-0 
          h-full w-full 
          bg-[#FAF7F2] shadow-2xl 
          flex flex-col
        "
            >


              <div className="
          flex items-center justify-between 
          px-6 py-5 
          border-b border-[#1C1C1C]/10 
          bg-[#FAF7F2]/90 backdrop-blur-sm
        ">
                <a href="/" className="flex items-center gap-2">
                  <PenTool className="w-6 h-6 text-[#1C1C1C]" />
                  <span className="font-serif text-xl text-[#1C1C1C] tracking-tight">
                    The Paperweight.
                  </span>
                </a>

                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-[#E8E1D8] rounded transition"
                >
                  <X className="w-6 h-6 text-[#1C1C1C]" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-6 py-10">
                <ul className="flex flex-col gap-3">
                  {navigationLinks.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="
                    block w-full 
                    px-4 py-3 
                    text-lg font-sans 
                    text-[#1C1C1C] 
                    rounded-lg
                    hover:bg-[#E8E1D8] 
                    transition-colors
                  "
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>


              <div className="
          px-6 py-6 
          border-t border-[#1C1C1C]/10 
          bg-[#FAF7F2] 
          backdrop-blur-xl
        ">
                <button
                  onClick={() => {
                    onOpenModal?.();
                    setIsMobileMenuOpen(false);
                  }}
                  className="
              w-full py-3.5 
              rounded-full 
              bg-[#1C1C1C] text-[#FAF7F2] 
              text-sm font-sans tracking-wide 
              hover:bg-[#7A6A58] 
              transition
            "
                >
                  Submit Entry
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
}
