import { orderSteps } from '../data/content'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function OrderSteps() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="How bulk ordering works"
          title="From enquiry to delivery in four steps"
          description="No online checkout, no guesswork – just a direct conversation with our wholesale team."
        />
        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {orderSteps.map(({ title, description, icon: Icon }, i) => (
            <li key={title}>
              <Reveal delay={i * 90} className="relative h-full rounded-3xl border border-ink-900/10 p-7">
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl bg-ink-900 text-lime-400">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <span className="font-display text-5xl font-extrabold text-ink-900/10">0{i + 1}</span>
                </div>
                <h3 className="mt-6 text-2xl font-bold uppercase">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-900/60">{description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
