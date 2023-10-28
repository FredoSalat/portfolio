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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
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
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
