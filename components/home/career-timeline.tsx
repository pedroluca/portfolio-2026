import {
  academicCareer,
  professionalCareer,
  timelineItems,
  type CareerEntry,
  type TimelineItem,
} from '@/data/career'

const MONTHS = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']

function formatPeriod({ start, end, isEvent }: TimelineItem) {
  const startLabel = `${MONTHS[start[1]]}. ${start[0]}`
  if (end) return `${startLabel} — ${MONTHS[end[1]]}. ${end[0]}`
  return isEvent ? startLabel : `${startLabel} — Presente`
}

function TimelineEntry({ item }: { item: TimelineItem }) {
  return (
    <div>
      <h4 className='text-base leading-snug font-semibold text-black dark:text-white'>{item.title}</h4>
      <p className={`text-xs ${item.side === 'professional' ? 'text-blue-400' : 'text-violet-400'}`}>{item.place}</p>
      <p className='mt-0.5 text-xs text-zinc-400 dark:text-zinc-500'>{formatPeriod(item)}</p>
    </div>
  )
}

function CareerCard({ title, place, period }: CareerEntry) {
  return (
    <div>
      <h4 className='text-base leading-snug font-semibold text-black dark:text-white'>{title}</h4>
      <p className='mt-0.5 text-sm text-blue-400'>{place}</p>
      <p className='mt-0.5 text-xs text-zinc-400 dark:text-zinc-500'>{period}</p>
    </div>
  )
}

function CareerList({ title, entries }: { title: string; entries: CareerEntry[] }) {
  return (
    <section className='flex flex-col gap-5'>
      <h3 className='text-2xl font-semibold'>{title}</h3>
      {entries.map((entry) => (
        <CareerCard key={entry.title} {...entry} />
      ))}
    </section>
  )
}

const columnLabelClassName = 'text-sm font-semibold tracking-wide text-zinc-500 uppercase dark:text-zinc-400'

export function CareerTimeline() {
  // Anos com itens, do mais recente pro mais antigo
  const years = [...new Set(timelineItems.map((item) => item.start[0]))].sort((a, b) => b - a)

  const itemsOf = (side: TimelineItem['side'], year: number) =>
    timelineItems
      .filter((item) => item.side === side && item.start[0] === year)
      .sort((a, b) => b.start[1] - a.start[1])

  return (
    <div className='mt-8'>
      {/* Mobile: listas empilhadas */}
      <div className='flex flex-col gap-10 sm:hidden'>
        <CareerList title='Carreira Profissional' entries={professionalCareer} />
        <CareerList title='Carreira Acadêmica' entries={academicCareer} />
      </div>

      {/* Desktop: timeline agrupada por ano */}
      <div className='hidden flex-col sm:flex'>
        <h3 className='mb-4 w-full text-center text-lg font-semibold tracking-wide text-zinc-500 uppercase dark:text-zinc-400'>
          Experiência
        </h3>

        <div className='mb-2 flex items-center'>
          <div className='flex-1 pr-8 text-right'>
            <span className={columnLabelClassName}>Profissional</span>
          </div>
          <div className='w-20 shrink-0' />
          <div className='flex-1 pl-8'>
            <span className={columnLabelClassName}>Acadêmica</span>
          </div>
        </div>

        {years.map((year, index) => (
          <div key={year} className='flex items-stretch'>
            <div className='flex flex-1 flex-col items-end gap-3 py-5 pr-8 text-right'>
              {itemsOf('professional', year).map((item) => (
                <TimelineEntry key={item.id} item={item} />
              ))}
            </div>

            <div className='flex w-20 shrink-0 flex-col items-center'>
              {index > 0 && <div className='min-h-3 w-px flex-1 bg-zinc-300 dark:bg-zinc-700' />}
              <div className='z-10 rounded-full bg-white px-3 py-1 text-sm font-semibold text-zinc-600 shadow-xs ring-1 ring-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:shadow-none dark:ring-zinc-700'>
                {year}
              </div>
              {index < years.length - 1 && <div className='min-h-3 w-px flex-1 bg-zinc-300 dark:bg-zinc-700' />}
            </div>

            <div className='flex flex-1 flex-col gap-3 py-5 pl-8'>
              {itemsOf('academic', year).map((item) => (
                <TimelineEntry key={item.id} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
