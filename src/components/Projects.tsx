import Image from "next/image";

import ArrowIcon from "@/components/ArrowIcon";
import { projects } from "@/content/projects";

export default function Projects() {
  return (
    <ol className="group/list">
      {projects.map((project) => (
        <li key={project.title} className="mb-12">
          <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:opacity-100!">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-navy-light/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              width={200}
              height={200}
              className="z-10 aspect-square rounded-xl border-3 border-muted/10 object-cover object-top transition group-hover:border-muted/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
            />

            <div className="z-10 sm:order-2 sm:col-span-6">
              <h3>
                <a
                  className="group/link inline-flex items-baseline text-base font-medium leading-tight text-bright hover:text-accent focus-visible:text-accent"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${project.title} (opens in a new tab)`}
                >
                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                  <span className="inline-block">
                    {project.title}
                    <ArrowIcon />
                  </span>
                </a>
              </h3>

              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted">
                {project.kind} · {project.period}
              </p>

              <p className="mt-2 text-sm leading-normal">{project.description}</p>

              <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                {project.skills.map((skill) => (
                  <li key={skill} className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
                      {skill}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}