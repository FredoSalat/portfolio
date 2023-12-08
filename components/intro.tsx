"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

import portrait from "@/public/images/portrait.jpg";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="flex flex-col md:h-screen lg:min-h-[900px] md:min-h-[1100px] sm:min-h-[1000px] sm:max-w-[70rem] scroll-mt-[100rem] justify-center sm:mb-0 mb-10 gap-2"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col"
      >
        <Image
          src={portrait}
          alt="Fredrik portrait"
          width="200"
          height="200"
          quality="95"
          priority={true}
          className="w-[200px] h-[200px] object-contain border-[0.35rem] shadow-xl rounded-full border-white mx-auto mb-10 md:hidden"
        />

        <div className="px-4">
          <div className="flex items-end gap-6">
            <p className="introMainHeader">
              Hi, I&apos;m Fredrik! <br /> Junior Web Developer.
            </p>

            <Image
              src={portrait}
              alt="Fredrik portrait"
              width="200"
              height="200"
              quality="95"
              priority={true}
              className="w-[170px] h-[170px] lg:w-[210px] lg:h-[210px] object-fill border-[0.35rem] shadow-xl rounded-full border-white hidden md:block"
            />
          </div>

          <p className="introMainHeader mb-10">
            I&apos;m all about building user-friendly web applications.
          </p>

          <p className="font-normal text-[1.2rem] sm:text-3xl !leading-[1.5] sm:!leading-[1.4] mb-10">
            My educational background in Computer Science and previous roles as
            Founder and User Researcher have led me to pivot to Web Development.
            For the past 1.5 years, I have been learning TypeScript, React and
            Next.js.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-regular"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none  hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:hover:text-white"
          href="/CV-Fredrik-Marthinsen.pdf"
          download
        >
          Download CV
          <HiDownload className="opacity-60 group-hover:translate-y-0.5 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-[#0077B5] flex items-center gap-2 rounded-full  hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-[#0077B5] "
          href="https://www.linkedin.com/in/fredrik-marthinsen/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.286rem] rounded-full hover:scale-[1.15] hover:text-[#171515] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-white"
          href="https://github.com/FredoSalat"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
