import ArrowIcon from "@/components/ArrowIcon";
import { experience } from "@/content/experience";

export default function Experience() {
  return (
    <ol className="group/list">
      {experience.map((job) => (
        <li key={`${job.org}-${job.period}`} className="mb-12">
          <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:opacity-100!">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-navy-light/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

            <header
              className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted sm:col-span-2"
              aria-label={job.periodLabel ?? job.period}
            >
              {job.period}
            </header>

            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-bright">
                {job.orgUrl ? (
                  <a
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-bright hover:text-accent focus-visible:text-accent"
                    href={job.orgUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${job.role} at ${job.org} (opens in a new tab)`}
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                    <span>
                      {job.role} ·{" "}
                      <span className="inline-block">
                        {job.org}
                        <ArrowIcon />
                      </span>
                    </span>
                  </a>
                ) : (
                  <span>
                    {job.role} · {job.org}
                  </span>
                )}
              </h3>

              <p className="mt-2 text-sm leading-normal">{job.description}</p>

              {job.skills && (
                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                  {job.skills.map((skill) => (
                    <li key={skill} className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
                        {skill}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}