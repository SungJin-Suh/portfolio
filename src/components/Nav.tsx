"use client";

import { useEffect, useState } from "react";

const SECTIONS = ["about", "experience", "projects"];

export default function Nav() {
  const [active, setActive] = useState(SECTIONS[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );

    const elements = SECTIONS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {SECTIONS.map((id) => {
          const isActive = active === id;
          return (
            <li key={id}>
              <a
                className="group flex items-center py-3"
                href={`#${id}`}
                aria-current={isActive ? "true" : undefined}
              >
                <span
                  className={`mr-4 h-px transition-all motion-reduce:transition-none group-hover:w-16 group-hover:bg-bright ${
                    isActive ? "w-16 bg-bright" : "w-8 bg-slate-600"
                  }`}
                />
                <span
                  className={`text-xs font-bold uppercase tracking-widest transition-colors group-hover:text-bright ${
                    isActive ? "text-bright" : "text-slate-500"
                  }`}
                >
                  {id}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}