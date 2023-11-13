"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="flex flex-col sm:h-screen sm:min-h-[840px] max-w-[70rem] scroll-mt-[100rem] items-center justify-center sm:md-0 mb-10 gap-2"
    >
      <motion.p
        className="mb-10 mt-4 px-4 text-4xl font-medium !leading-[1.5] sm:text-6xl sm:!leading-[1.4]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hi, I&apos;m Fredrik! I work as a web developer at Canvas Consulting. I
        have a solid and broad background as, among other things, a{" "}
        <a
          className="underline font-bold"
          href="https://www.aimedtech.com/"
          target="_blank"
        >
          founder
        </a>
        &nbsp;in the role of COO and user researcher at{" "}
        <span className="font-bold">Spotify</span>.
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:hover:text-white"
          href="/CV.pdf"
          download
        >
          Download CV
          <HiDownload className="opacity-60 group-hover:translate-y-0.5 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-[#0077B5] flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-[#0077B5] "
          href="https://www.linkedin.com/in/fredrik-marthinsen/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.30rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-[#171515] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-white"
          href="https://github.com/FredoSalat"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
