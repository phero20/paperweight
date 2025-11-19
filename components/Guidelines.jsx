"use client";

import { motion } from "framer-motion";
import { FileText, Clock, Shield, AlertCircle, Type, CheckCircle2 } from "lucide-react";

const guidelines = [
  {
    id: "01",
    icon: FileText,
    title: "Originality is Paramount",
    desc: "Submissions must be entirely unpublished. We seek new work, new perspectives, and authentic storytelling."
  },
  {
    id: "02",
    icon: Clock,
    title: "Firm Deadline",
    desc: "Entries close at 11:59 PM EST on December 30th. Late submissions are automatically declined."
  },
  {
    id: "03",
    icon: Type,
    title: "Formatting Standards",
    desc: "12pt Garamond or Times New Roman, double-spaced, with one-inch margins on all sides."
  },
  {
    id: "04",
    icon: Shield,
    title: "Blind Judging",
    desc: "Your name should appear only in the submission form. Manuscripts must remain anonymous."
  },
  {
    id: "05",
    icon: AlertCircle,
    title: "Word Count",
    desc: "Flash fiction under 1,000 words; short stories up to 2,000. Exceeding limits leads to disqualification."
  },
  {
    id: "06",
    icon: CheckCircle2,
    title: "Eligibility",
    desc: "Open to writers worldwide, ages 18+. Simultaneous submissions allowed with immediate notice."
  }
];

export default function Guidelines() {
  return (
    <section id="guidelines" className="py-20 px-6 md:px-12 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto">

        <div className="mb-20">
         

          <h2 className="font-serif text-4xl md:text-5xl text-[#1C1C1C] leading-tight">
            Guidelines & Requirements
          </h2>

          <p className="text-[#4B4B4B] font-sans text-base mt-3 max-w-xl leading-relaxed">
            Please review the rules carefully. These standards ensure fairness, clarity, 
            and a smooth review process for all participants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {guidelines.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="
                group 
                bg-white 
                border border-[#1C1C1C]/10 
                p-10 
                rounded-lg 
                shadow-sm
                hover:shadow-md 
                hover:border-[#7A6A58] 
                transition-all duration-300
                cursor-default
                "
              >
                
                <div className="flex items-start justify-between mb-8">
                  
                  <div className="p-3 rounded-full bg-[#FAF7F2] text-[#1C1C1C] group-hover:text-[#7A6A58] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                 
                </div>

                <h3 className="font-serif text-xl text-[#1C1C1C] mb-4 group-hover:text-[#7A6A58] transition-colors">
                  {item.title}
                </h3>

                <p className="font-sans text-[#555] text-sm leading-relaxed">
                  {item.desc}
                </p>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
