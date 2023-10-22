"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

import portrait from "@/public/portrait.png";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem]">
      <div className="flex items-center justify-center">
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
      </div>
      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hi, I&apos;m Fredrik! Currently working as a junior web developer at
        Canvas Consulting. I am driven by building robust and fast applications
        through maintainable and efficient code. I have a solid and broad
        background as, among other things, a{" "}
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
      <div>
        <Link href="#contact">
          Contact me <BsArrowRight />
        </Link>
      </div>
    </section>
  );
}
