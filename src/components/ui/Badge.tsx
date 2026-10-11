type BadgeProps = {
  value: string
}

export function Badge({ value }: BadgeProps) {
  return (
    <span className="inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-terracotta-600 font-serif text-[10px] leading-[1.4] tracking-[1px] text-neutral-100 uppercase">
      {value}
    </span>
  )
}
