"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import SectionHeading from "@/components/section-heading";
import { useSectionInView } from "@/lib/hooks";
import portrait from "@/public/portrait.png";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="flex flex-col bg-gray-100 rounded-lg sm:flex-row mb-28 sm:max-w-[60rem] max-w-[30rem] text-center leading-8 sm:mb-40 sm:mt-40 scroll-mt-28 shadow-md p-5 dark:bg-white/10"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <div className="sm:w-6/12">
        <SectionHeading>About me</SectionHeading>
        <p className="mb-3">
          I am a driven, ambitious person who always strives to create value
          through quality. I have a previous professional background as a User
          Researcher at Spotify and as the co-founder of a MedTech start-up . I
          hold a master&apos;s degree in Computer Science specializing in
          Immersive Technologies at Stockholm University with the highest
          achievable GPA.
        </p>
        <p className="mb-3">
          My previous experience has given me a solid knowledge of processes and
          methods for solving problems and creating business and user value in
          complex industries. I strive to use my proven ability to use
          systematic processes, communicate, and collaborate to create value by
          producing maintainable and efficient code.
        </p>
        <p className="mb-3">
          I am especially interested in everything web-based and the
          cutting-edge technologies around it, as well as in AI and its
          application in vital industries.
        </p>
        <p>
          In my spare time, you can find me on hiking trails, ski slopes, or the
          streets of Berlin.
        </p>
      </div>
      <div className="sm:w-6/12 flex items-center justify-center mt-10">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.2 }}
        >
          <Image
            src={portrait}
            alt="Fredrik portrait"
            width="350"
            height="350"
            quality="95"
            priority={true}
            className="h-350 w-350 object-cover border-[0.35rem] border-none rounded-full shadow-xl"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
