"use client";

import { motion } from "framer-motion";

import SectionHeading from "@/components/section-heading";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a driven, ambitious person who always strives to create value
        through quality. I have a previous professional background as a
        <span className="font-medium"> User Researcher at Spotify</span>
        <span className="font-medium">
          and as the co-founder of a MedTech start-up
        </span>
        . I hold a
        <span className="font-medium">
          master&apos;s degree in Computer Science
        </span>
        specializing in Immersive Technologies at Stockholm University with the
        <span className="font-medium"> highest achievable GPA.</span>
      </p>
      <p className="mb-3">
        My previous experience has given me a solid knowledge of processes and
        methods for solving problems and{" "}
        <span className="font-medium">
          creating business and user value in complex industries.
        </span>{" "}
        I strive to use my proven ability to use systematic processes,
        communicate, and collaborate to create value by producing maintainable
        and efficient code.
      </p>
      <p className="mb-3">
        I am especially interested in everything web-based and the cutting-edge
        technologies around it, as well as in AI and its application in vital
        industries.
      </p>
      <p>
        In my spare time, you can find me on hiking trails, ski slopes, or the
        streets of Berlin.
      </p>
    </motion.section>
  );
}
