import { receipt } from '../data/stay'
import iconBarcode from '../assets/images/icon-barcode.svg'

export function ReceiptCard() {
  return (
    <article className="receipt" aria-label="Stay receipt">
      <div className="receipt-lines" aria-hidden="true" />
      <header className="relative flex items-start justify-between gap-4 border-b border-dashed border-neutral-400 pb-3">
        <div className="min-w-0">
          <p className="m-0 font-mono text-[10px] leading-[1.4] tracking-[1px] text-neutral-600 uppercase">
            {receipt.label}
          </p>
          <h2 className="m-0 font-serif text-xl leading-[1.4] font-normal tracking-[-0.1px] text-neutral-900">
            {receipt.title}
          </h2>
        </div>
        <p className="m-0 text-right font-mono text-[10px] leading-[1.4] tracking-[1px] text-neutral-600 uppercase">
          {receipt.number}
          <br />
          {receipt.code}
        </p>
      </header>

      <div className="relative flex items-start justify-center gap-6 px-2 sm:gap-16 sm:px-5">
        <DateBlock
          label={receipt.checkIn.label}
          date={receipt.checkIn.date}
          weekday={receipt.checkIn.weekday}
          time={receipt.checkIn.time}
        />
        <DateBlock
          label={receipt.checkOut.label}
          date={receipt.checkOut.date}
          weekday={receipt.checkOut.weekday}
          time={receipt.checkOut.time}
        />
      </div>

      <ul className="relative m-0 flex list-none flex-col gap-2 border-t border-dashed border-neutral-400 p-0 pt-3">
        {receipt.items.map((item) => (
          <li
            key={item.label}
            className={`flex items-baseline justify-between gap-3 text-sm leading-[1.4] ${
              item.muted ? 'text-neutral-700' : 'text-neutral-900'
            }`}
          >
            <span>{item.label}</span>
            <span className="shrink-0 font-mono text-xs leading-[1.4]">{item.amount}</span>
          </li>
        ))}
      </ul>

      <div className="relative flex items-center justify-between gap-4 border-t border-neutral-600 pt-3">
        <p className="m-0 font-mono text-xs leading-[1.4] tracking-[2px] text-neutral-600 uppercase">
          {receipt.totalLabel}
        </p>
        <p className="m-0 font-serif text-2xl leading-[1.4] font-normal tracking-[-0.2px] text-neutral-900">
          {receipt.total}
        </p>
      </div>

      <footer className="relative flex items-center justify-between gap-4">
        <p className="m-0 font-mono text-[10px] leading-[1.4] tracking-[1px] text-neutral-600 uppercase">
          {receipt.payment}
        </p>
        <img src={iconBarcode} width={93} height={28} alt="" />
      </footer>
    </article>
  )
}

function DateBlock({
  label,
  date,
  weekday,
  time,
}: {
  label: string
  date: string
  weekday: string
  time: string
}) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <p className="m-0 font-mono text-[10px] leading-[1.4] tracking-[1px] text-neutral-600 uppercase">
        {label}
      </p>
      <p className="m-0 font-serif text-[2rem] leading-[1.2] font-normal tracking-[-0.25px] whitespace-nowrap text-neutral-900">
        {date}
      </p>
      <p className="m-0 text-xs leading-[1.2] tracking-[0.4px] text-neutral-700">
        {weekday} · {time}
      </p>
    </div>
  )
}
