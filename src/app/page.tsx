export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-7xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        {/* ── Left: sticky on desktop ── */}
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-bright sm:text-5xl">
              David Suh
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-bright sm:text-xl">
              Software Developer
            </h2>
            <p className="mt-4 max-w-xs leading-normal text-muted">
              One-line tagline goes here.
            </p>

            <nav className="hidden lg:block" aria-label="In-page jump links">
              <ul className="mt-16 w-max">
                {["about", "experience", "projects"].map((id) => (
                  <li key={id}>
                    <a className="group flex items-center py-3" href={`#${id}`}>
                      <span className="mr-4 h-px w-8 bg-muted transition-all group-hover:w-16 group-hover:bg-bright" />
                      <span className="text-xs font-bold uppercase tracking-widest text-muted group-hover:text-bright">
                        {id}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <ul className="mt-8 flex items-center gap-5" aria-label="Social media">
            <li className="text-xs text-muted">Social icons go here</li>
          </ul>
        </header>

        {/* ── Right: scrolling content ── */}
        <main className="pt-24 lg:w-1/2 lg:py-24">
          <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-bright lg:sr-only">
              About
            </h2>
            <p className="mb-4">First paragraph of the intro.</p>
            <p className="mb-4">Second paragraph.</p>
          </section>

          <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-bright lg:sr-only">
              Experience
            </h2>
            <p>Experience cards go here</p>
          </section>

          <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-bright lg:sr-only">
              Projects
            </h2>
            <p>Project cards go here</p>
          </section>
        </main>
      </div>
    </div>
  );
}