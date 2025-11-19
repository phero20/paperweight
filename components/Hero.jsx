"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

export default function Hero({ onOpenModal }) {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#FAF7F2]">
      
      <div className="z-10 text-center px-6 max-w-4xl pt-16">

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-sans text-[#7A6A58] tracking-[0.25em] uppercase text-[0.75rem] mb-5"
        >
          The 2025 Annual Prose Challenge
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-[3rem] md:text-[4.2rem] lg:text-[5rem] font-semibold text-[#1C1C1C] leading-[1.05]"
        >
          The Paperweight.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-6 font-sans text-[1.05rem] md:text-lg text-[#3C3C3C] max-w-xl mx-auto leading-relaxed"
        >
          An open invitation to storytellers, poets, and dreamers.
          <br className="hidden md:block"/>
          Submit your manuscript before December 30th.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onOpenModal}
            className="px-8 py-3 rounded-full bg-[#1C1C1C] text-white font-sans text-base font-medium hover:bg-[#7A6A58] transition-colors duration-300 cursor-pointer"
          >
            Start Writing
          </button>

          <Link
            href="#guidelines"
            className="px-8 py-3 rounded-full border border-[#1C1C1C]/40 font-sans text-base text-[#1C1C1C] hover:bg-[#1C1C1C]/5 transition duration-300"
          >
            Read Guidelines
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ delay: 1.3, duration: 1 }}
        className="absolute bottom-10"
      >
        <Link href="#about">
          <ArrowDown className="w-6 h-6 text-[#1C1C1C]/40 animate-bounce" />
        </Link>
      </motion.div>
    </section>
  );
}
