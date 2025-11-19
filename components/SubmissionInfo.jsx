"use client";

import { motion } from "framer-motion";
import { Calendar, FileWarning, FileType, Globe } from "lucide-react";

export default function SubmissionInfo() {
  const items = [
    {
      label: "Deadline",
      value: "December 30th",
      sub: "11:59 PM EST",
      icon: Calendar,
    },
    {
      label: "Word Limit",
      value: "2,000 Words",
      sub: "Maximum excluding title",
      icon: FileWarning,
    },
    {
      label: "Format",
      value: "PDF / DOCX",
      sub: "12pt serif font",
      icon: FileType,
    },
    {
      label: "Eligibility",
      value: "International",
      sub: "Open worldwide (18+)",
      icon: Globe,
    },
  ];

  return (
    <section
      id="details"
      className="bg-[#2B2B2B] text-[#FAF7F2] py-28 px-6 md:px-12 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">

        <div className="mb-20">
          <span className="font-sans text-[0.75rem] tracking-[0.25em] uppercase text-[#C7B9A8] block mb-3">
             — Submission Details
          </span>

          <h2 className="font-serif text-4xl md:text-5xl leading-tight text-white">
            Everything you need to know.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  
                  <div className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 border border-white/10">
                    <Icon className="w-5 h-5 text-[#FAF7F2]" />
                  </div>

                  <span className="font-sans text-xs tracking-[0.18em] uppercase text-[#C7B9A8]">
                    {item.label}
                  </span>
                </div>

                <div>
                  <p className="font-serif text-3xl text-white">{item.value}</p>
                  <p className="font-sans text-sm text-white/60 mt-1">
                    {item.sub}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
