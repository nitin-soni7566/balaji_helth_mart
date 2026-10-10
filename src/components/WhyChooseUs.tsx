import { reasons } from '../data/content'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function WhyChooseUs() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 py-20 text-white sm:py-28">
      <div className="absolute bottom-0 left-1/2 -z-10 h-80 w-[800px] -translate-x-1/2 rounded-full bg-lime-400/10 blur-[120px]" />
      <div className="container-x">
        <SectionHeading
          tone="dark"
          eyebrow="Why choose us"
          title={
            <>
              A supply partner built for <span className="text-lime-400">business buyers</span>
            </>
          }
          description="We focus on what matters to gyms, retailers and distributors: genuine stock, fair wholesale pricing and dependable supply."
        />
        <ul className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ title, description, icon: Icon }, i) => (
            <li key={title} className="bg-ink-950">
              <Reveal delay={(i % 3) * 90} className="group h-full p-8 transition hover:bg-ink-900 sm:p-10">
                <span className="grid size-12 place-items-center rounded-2xl bg-white/5 text-lime-400 ring-1 ring-white/10 transition group-hover:bg-lime-400 group-hover:text-ink-950">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-2xl font-bold uppercase">{title}</h3>
                <p className="mt-2 leading-relaxed text-white/60">{description}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
