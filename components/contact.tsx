import React from "react";
import SectionHeading from "./section-heading";

export default function Contact() {
  return (
    <section id="contact" className="scroll">
      <SectionHeading>Contact me</SectionHeading>
      <p>
        Please contact me directly at{" "}
        <a className="underline" href="mailto:fredrik.marthinsens@gmail.com">
          fredrik.marthinsens@gmail.com
        </a>{" "}
        or through this form.
      </p>
    </section>
  );
}
