"use client";

import React, { useEffect } from "react";

import { useInView } from "react-intersection-observer";

import SectionHeading from "@/components/section-heading";
import { useActiveSectionContext } from "@/context/active-section-context";
import { projectsData } from "@/lib/data";
import Project from "@/components/project";

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.9,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Projects");
    }
  }, [inView, setActiveSection]);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, item) => (
          <React.Fragment key={item}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
