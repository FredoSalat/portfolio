import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import solenergi from "@/public/images/solenergi.png";
import whatToEat from "@/public/images/whatToEat.png";

import sarek1 from "@/public/images/sarek-1.jpg";
import sarek2 from "@/public/images/sarek-2.jpg";
import scotland from "@/public/images/scotland.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Fullstack Developer Bootcamp - Integrify",
    location: "Remote",
    description:
      "Covered topics: HTML | CSS | JavaScript | Web Accessibility | TypeScript | React | Redux Toolkit | Material UI | NodeJS | ExpressJS | MongoDB | REST | Cloud - AWS | DevOps.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Master of Science - MS, Computer Science",
    location: "Stockholm University",
    description: "",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2022",
  },
  {
    title: "Co-Founder, COO - AI Medical Technology",
    location: "Stockholm",
    description:
      "AI Medical Technology is an image analysis company that develops AI solutions and applications for healthcare. Worked strategically and executed tasks within R&D, regulatory compliance, clinical research, and business administration to bring the first product to market.",
    icon: React.createElement(CgWorkAlt),
    date: "2020-2021",
  },
  {
    title: "User Researcher - Spotify",
    location: "Stockholm",
    description:
      "Spent the summer in Spotify search with an interdisciplinary team of data scientists, machine learning engineers, and data engineers, trying to understand how 300 million active users could be served a better experience finding and discovering new releases of the artists they love.",
    icon: React.createElement(CgWorkAlt),
    date: "2020",
  },

  {
    title: "User Researcher - YEAY",
    location: "Berlin",
    description:
      "As a part of the product team I was responsible for the end-to-end user research process involving weekly user tests, interviews, surveys and field studies. Adopting my work to a fast moving start-up culture enabled users to be let into discussions and decision making through clear and actionable insights.",
    icon: React.createElement(CgWorkAlt),
    date: "2018",
  },
  {
    title: "Bachelor's degree, Computer Science",
    location: "Stockholm University",
    description: "",
    icon: React.createElement(LuGraduationCap),
    date: "2014-2018",
  },
] as const;

export const projectsData = [
  {
    title: "Solenergiteamet",
    description:
      "Building a full stack customer-facing web application for a company in the solar energy industry.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: solenergi,
    url: "https://solenergiteamet.se/",
  },
  /*   {
    title: "Personal training",
    description:
      "Building a landing page for a personal trainer in order to attract prospective clients",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: solenergi2,
    url: "https://solenergiteamet.se/",
  }, */
  {
    title: "What to eat?",
    description:
      "Building a full stack application matching the ingredients in your fridge with recipes tailored to your taste",
    tags: ["React", "TypeScript", "Next.js", "Prisma", "Tailwind"],
    imageUrl: whatToEat,
    url: "https://github.com/FredoSalat/what-to-eat",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "Python",
  "Framer Motion",
  "Figma",
] as const;

export const aboutMeImages = [
  { alt: "Sarek Hike", image: sarek1 },
  { alt: "Sarek Hike", image: sarek2 },
  { alt: "Scotland Hike", image: scotland },
] as const;
