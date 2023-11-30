import { aboutMeImages, links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type Carousel = typeof aboutMeImages;

export type Theme = "light" | "dark";
