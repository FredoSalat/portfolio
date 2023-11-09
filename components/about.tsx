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
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      {/* <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={portrait}
              alt="Fredrik portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            ✌️
          </motion.span>
        </div>
      </div> */}
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
