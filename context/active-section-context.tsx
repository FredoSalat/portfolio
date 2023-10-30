"use client";

import { links } from "@/lib/data";
import { useState } from "react";

type SectionName = (typeof links)[number]["name"];

export default function ActiveSectionContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  return children;
}
