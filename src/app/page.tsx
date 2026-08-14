import { profile } from "@/content/profile";
import Nav from "@/components/Nav";
import Socials from "@/components/Socials";
import ArrowIcon from "@/components/ArrowIcon";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-7xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        {/* ── Left: sticky on desktop ── */}
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-bright sm:text-5xl">
              {profile.name}
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-bright sm:text-xl">
              {profile.title}
            </h2>
            <p className="mt-4 max-w-xs leading-normal text-muted">
              {profile.tagline}
            </p>
            <p className="mt-6 text-sm text-muted/80">
              {profile.status}
            </p>

            <Nav />
          </div>

          <Socials />
        </header>

        {/* ── Right: scrolling content ── */}
        <main className="pt-24 lg:w-1/2 lg:py-24">
          <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-bright lg:sr-only">
              About
            </h2>
            <About />
          </section>

                    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-bright lg:sr-only">
              Experience
            </h2>
            <Experience />
            <div className="mt-12">
              <a
                className="group/link inline-flex items-baseline text-base font-semibold leading-tight text-bright"
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="View Full Résumé (opens in a new tab)"
              >
                <span>
                  View Full{" "}
                  <span className="inline-block">
                    Résumé
                    <ArrowIcon />
                  </span>
                </span>
              </a>
            </div>
          </section>

          <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-bright lg:sr-only">
              Projects
            </h2>
            <Projects />
          </section>
        </main>
      </div>
    </div>
  );
}