import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import solenergi1 from "@/public/solenergi-1.png";
import solenergi2 from "@/public/solenergi-2.png";
import solenergi3 from "@/public/solenergi-3.png";

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
    imageUrl: solenergi1,
    url: "https://solenergiteamet.se/",
  },
  {
    title: "Personal training",
    description: "Building a landing page for ",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: solenergi2,
    url: "https://solenergiteamet.se/",
  },
  {
    title: "What to eat?",
    description:
      "Building a full stack application matching the ingredients in your fridge with recipes tailored to your taste",
    tags: ["React", "Next.js", "Prisma", "Tailwind"],
    imageUrl: solenergi3,
    url: "https://solenergiteamet.se/",
  },
  {
    title: "E-commerce",
    description: "Built a dashboard and e-commerce platform",
    tags: ["React", "Next.js", "Prisma", "Tailwind"],
    imageUrl: solenergi3,
    url: "https://solenergiteamet.se/",
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
