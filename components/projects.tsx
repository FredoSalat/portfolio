import React from "react";

import { projectsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import Project from "@/components/project";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28">
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
