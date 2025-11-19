"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CallToAction({ onOpenModal }) {
  return (
    <section className="bg-[#2B2B2B] text-[#FAF7F2] py-24 px-6 md:px-12 flex flex-col items-center text-center relative overflow-hidden">

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[420px] h-[420px] bg-[#2B2B2B]/5 blur-xl rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 max-w-3xl"
      >
        
        <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-8 text-white">
          The blank page <br /> is waiting.
        </h2>

        <p className="text-white/70 text-lg md:text-xl font-sans mb-12 max-w-xl mx-auto leading-relaxed">
          Join thousands of writers shaping modern literature.  
          Submissions close on December 30th.
        </p>

        <motion.button
          onClick={onOpenModal}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="group inline-flex items-center gap-4 bg-[#FAF7F2] text-[#1C1C1C] px-10 py-4 rounded-full font-sans text-lg font-medium transition-all duration-300 hover:bg-[#E8E1D8] cursor-pointer"
        >
          <span>Submit Your Entry</span>
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </motion.button>

        <p className="mt-8 text-white/30 text-xs uppercase tracking-[0.2em]">
          No Entry Fee Required
        </p>
      </motion.div>
    </section>
  );
}
