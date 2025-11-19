"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, UploadCloud, CheckCircle2 } from "lucide-react";

export default function SubmitModal({ isOpen, onClose }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-md z-[60]"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.25 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                       w-[92%] max-w-md 
                       bg-[#FAF7F2] rounded-xl 
                       shadow-[0_10px_40px_rgba(0,0,0,0.15)] 
                       p-6 md:p-8 z-[70] 
                       border border-[#1C1C1C]/10"
          >

            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 hover:bg-[#E8E1D8] rounded-full transition cursor-pointer"
            >
              <X className="w-5 h-5 text-[#1C1C1C]" />
            </button>

            {isSuccess ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-[#E4F5E9] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-[#4C7A59]" />
                </div>

                <h2 className="font-serif text-2xl mb-2 text-[#1C1C1C]">
                  Submission Received
                </h2>

                <p className="font-sans text-[#1C1C1C]/60 text-sm mb-5">
                  Thank you for submitting your piece.
                </p>

                <button
                  onClick={onClose}
                  className="font-sans text-[#7A6A58] border-b border-[#7A6A58] pb-[1px] cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="text-center mb-2">
                  <h2 className="font-serif text-3xl text-[#1C1C1C]">Submit Entry</h2>
                  <p className="font-sans text-[10px] text-[#1C1C1C]/40 tracking-[0.25em] mt-1">
                    THE PAPERWEIGHT
                  </p>
                </div>

  
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-sans uppercase tracking-[0.22em] text-[#1C1C1C]/60">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Jane Doe"
                    className="
                      w-full bg-transparent 
                      border-b border-[#1C1C1C]/25 
                      py-2 
                      font-serif text-lg 
                      placeholder:text-[#1C1C1C]/40 
                      focus:border-[#7A6A58] 
                      outline-none transition
                    "
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-sans uppercase tracking-[0.22em] text-[#1C1C1C]/60">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="jane@email.com"
                    className="
                      w-full bg-transparent 
                      border-b border-[#1C1C1C]/25 
                      py-2 
                      font-serif text-lg 
                      placeholder:text-[#1C1C1C]/40 
                      focus:border-[#7A6A58] 
                      outline-none transition
                    "
                  />
                </div>

                <div className="relative">
                  <label
                    className="
                      block border-2 border-dashed border-[#1C1C1C]/15 
                      rounded-lg p-5 text-center 
                      hover:border-[#7A6A58]/40 transition cursor-pointer
                    "
                  >
                    <input
                      type="file"
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    <UploadCloud className="w-8 h-8 mx-auto mb-2 text-[#1C1C1C]/30" />
                    <p className="font-sans text-xs text-[#1C1C1C]/50">
                      Upload PDF / DOCX
                    </p>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    w-full bg-[#1C1C1C] text-[#FAF7F2] 
                    font-sans py-3 rounded-full 
                    text-sm tracking-wide 
                    hover:bg-[#7A6A58] 
                    transition disabled:opacity-50
                    cursor-pointer
                  "
                >
                  {isSubmitting ? "Processing..." : "Submit Application"}
                </button>
              </form>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
