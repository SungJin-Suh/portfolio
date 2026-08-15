import type { ReactNode } from "react";

function InlineLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="font-medium text-bright transition hover:text-accent focus-visible:text-accent"
    >
      {children}
    </a>
  );
}

export default function About() {
  return (
    <>
      <p className="mb-4 leading-relaxed">
        I&apos;m a software developer based in Vancouver, BC. Before transitioning into tech, I spent
        three years teaching high school mathematics, where I learned
        that the hard part is rarely the idea itself — it&apos;s communicating it
        effectively.
      </p>

      <p className="mb-4 leading-relaxed">
        I recently graduated with distinction from{" "}
        <InlineLink href="https://www.bcit.ca/">BCIT</InlineLink>&apos;s Computer
        Systems Technology program, taking the Predictive Analytics option. My
        final project was{" "}
        <span className="font-medium text-bright">
          DineGuide
        </span>
        , a cross-platform Flutter app that helps people with Type 1 diabetes
        find restaurants and menu items matching their nutritional needs. 
        I built the full authentication and profile suite - sign-up, 2FA, password recovery - and
        translated the Figma designs into production Flutter screens.
        After five months of iterative feedback, my team shipped a final build
        approved by our industry sponsor.
      </p>

      <p className="mb-4 leading-relaxed">
        Prior to that, I spent eight months as a Junior Analyst co-op at{" "}
        <InlineLink href="https://www.yorkhouse.ca/">York House School</InlineLink>
        , supporting a 650-student community and a fleet of over 1,000 Apple devices.
        The work I was most proud of wasn&apos;t just clearing tickets, but
        organizing nearly a decade of undocumented scripts scattered across the
        network into a categorized, documented GitHub repository the
        team could actually use.
      </p>

      <p className="mb-4 leading-relaxed">
        I&apos;m currently seeking a new grad role where I can continue working across
        the stack (Flutter/React, Node/Firebase). Outside of work you&apos;ll find me
        playing bass guitar, watching movies, or losing to Minesweeper 😉.
      </p>
    </>
  );
}