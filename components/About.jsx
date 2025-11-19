"use client";

import { motion } from "framer-motion";
import { BookOpen, PenTool } from "lucide-react";
import Image from "next/image";

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  return (
    <section id="about" className="w-full py-20 px-6 md:px-12 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

        <div className="lg:col-span-5 lg:sticky lg:top-24 h-[60vh] lg:h-[75vh] relative">
          <div className="absolute inset-0 bg-[#1C1C1C]/10 -translate-x-4 translate-y-4 rounded-sm" />

          <div className="relative h-full w-full overflow-hidden rounded-sm">
            <Image
              src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2573&auto=format&fit=crop"
              alt="Minimalist writing desk"
              fill
              className="object-cover transition duration-700 ease-out"
              priority
            />
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-10">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="will-change-transform"
          >
           

            <h2 className="font-serif text-4xl md:text-5xl text-[#1C1C1C] leading-tight">
              Reclaiming the art of <br /> the written word.
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="font-sans text-[#3C3C3C] leading-relaxed text-[1.05rem] md:text-lg space-y-7"
          >
            <p>
              <span className="float-left text-7xl font-serif text-[#1C1C1C] mr-4 mt-[-10px] leading-none">
                T
              </span>
              he Paperweight Challenge was created from a simple truth: in a world 
              of rapid consumption and endless scrolling, the slow craft of writing 
              is more essential than ever. We look for stories that hold attention, 
              narratives that silence the noise, even if only for a moment.
            </p>

            <p>
              This year's theme, <span className="font-serif italic">“Silence”</span>, invites writers to explore the meanings hidden 
              between words. Whether through fiction, essays, or experimental prose, 
              we want to read how you interpret the quiet moments that shape our lives.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="grid grid-cols-1 sm:grid-cols-2 gap-7 mt-10 pt-8 border-t border-[#1C1C1C]/10"
          >
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-[#F0ECE6]">
                <PenTool className="w-5 h-5 text-[#7A6A58]" />
              </div>

              <div>
                <h4 className="font-serif text-lg text-[#1C1C1C]">Creative Freedom</h4>
                <p className="text-sm text-[#555] mt-1">
                  Open to all genres and narrative forms—your voice, your style.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-[#F0ECE6]">
                <BookOpen className="w-5 h-5 text-[#7A6A58]" />
              </div>

              <div>
                <h4 className="font-serif text-lg text-[#1C1C1C]">Global Publication</h4>
                <p className="text-sm text-[#555] mt-1">
                  Selected works will be printed in our international anthology.
                </p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
