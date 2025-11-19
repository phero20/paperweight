"use client"; // Use Client Component to handle State

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Guidelines from "@/components/Guidelines";
import SubmissionInfo from "@/components/SubmissionInfo";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import SubmitModal from "@/components/SubmitModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  return (
    <main className="bg-[#FDFBF7] min-h-screen w-full overflow-x-hidden selection:bg-[#8B0000] selection:text-white">
      <Navbar onOpenModal={openModal} />
      <div onClick={(e) => {
        if (e.target.closest('a[href="#submit"]')) {
          e.preventDefault();
          openModal();
        }
      }}>
      <Hero  onOpenModal={openModal} />
      </div>
      <About />
      <Guidelines />
      <SubmissionInfo />
      <CallToAction onOpenModal={openModal} />
      <Footer />
      <SubmitModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}