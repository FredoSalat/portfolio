"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import SectionHeading from "@/components/section-heading";
import { useSectionInView } from "@/lib/hooks";
import portrait from "@/public/portrait-3.jpg";

export default function About() {
  const { ref } = useSectionInView("About", 0.5);

  return (
    <motion.section
      ref={ref}
      className="flex flex-col  lg:flex-row mb-28 sm:max-w-[60rem] max-w-[30rem]  leading-8 sm:mb-40 scroll-mt-28 p-5 text-left font-regular text-lg"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <div className="w-1/2">
        <SectionHeading>About me</SectionHeading>

        <p className="mb-2">
          I am a driven, ambitious person who always strives to create value
          through quality.
        </p>
        <p className="mb-2">
          Previously, I was a User Researcher at Spotify and Co-founder of a
          Series A MedTech start-up. I hold a master&apos;s degree in Computer
          Science specializing in Immersive Technologies at Stockholm University
          with the highest achievable GPA.
        </p>
        <p className="mb-2">
          I am especially interested in everything web-based and the
          cutting-edge technologies around it, as well as in AI and its
          application in vital industries.
        </p>
        <p className="mb-2">
          I am especially interested in everything web-based and the
          cutting-edge technologies around it, as well as in AI and its
          application in vital industries.
        </p>
        <p>
          In my spare time, you can find me on hiking trails, ski slopes, or
          running the streets of Berlin.
        </p>
      </div>
      <div className=" flex items-center justify-center mt-10"></div>
    </motion.section>
  );
}
