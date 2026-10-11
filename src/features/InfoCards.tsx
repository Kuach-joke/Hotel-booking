import { useState } from 'react'
import iconKey from '../assets/images/icon-key.svg'
import iconWifi from '../assets/images/icon-wifi.svg'
import iconBreakfast from '../assets/images/icon-breakfast.svg'
import { infoCards, type InfoTone } from '../data/stay'
import { Card } from '../components/ui/Card'
import { Icon } from '../components/ui/Icon'

const toneStyles = {
  terracotta: { tile: 'bg-terracotta-600', text: 'text-terracotta-600' },
  blue: { tile: 'bg-blue-500', text: 'text-blue-500' },
  rose: { tile: 'bg-rose-500', text: 'text-rose-500' },
} as const

export function InfoCards() {
  return (
    <section className="info-grid" aria-label="Stay details">
      <DetailCard
        tone={infoCards.arrival.tone}
        icon={iconKey}
        iconWidth={24}
        iconHeight={25}
        index={infoCards.arrival.index}
        label={infoCards.arrival.label}
        title={infoCards.arrival.title}
        meta={infoCards.arrival.meta}
        body={infoCards.arrival.body}
      />
      <WifiCard />
      <DetailCard
        id="breakfast"
        tone={infoCards.breakfast.tone}
        icon={iconBreakfast}
        iconWidth={24}
        iconHeight={24}
        index={infoCards.breakfast.index}
        label={infoCards.breakfast.label}
        title={infoCards.breakfast.title}
        meta={infoCards.breakfast.meta}
        body={infoCards.breakfast.body}
      />
    </section>
  )
}

function DetailCard({
  id,
  tone,
  icon,
  iconWidth,
  iconHeight,
  index,
  label,
  title,
  meta,
  body,
}: {
  id?: string
  tone: InfoTone
  icon: string
  iconWidth: number
  iconHeight: number
  index: string
  label: string
  title: string
  meta: string
  body: string
}) {
  return (
    <Card id={id} className="scroll-mt-28">
      <CardHeading
        tone={tone}
        icon={icon}
        iconWidth={iconWidth}
        iconHeight={iconHeight}
        index={index}
        label={label}
      />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="m-0 font-serif text-2xl leading-[1.4] font-normal tracking-[-0.2px] text-neutral-900">
            {title}
          </h3>
          <p className="m-0 text-xs leading-[1.2] tracking-[0.4px] text-neutral-600">{meta}</p>
        </div>
        <p className="m-0 text-sm leading-[1.4] text-neutral-700">{body}</p>
      </div>
    </Card>
  )
}

function WifiCard() {
  const wifi = infoCards.wifi
  const [copied, setCopied] = useState(false)

  const copyPassword = async () => {
    try {
      await navigator.clipboard.writeText(wifi.password)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <Card>
      <CardHeading
        tone={wifi.tone}
        icon={iconWifi}
        iconWidth={24}
        iconHeight={24}
        index={wifi.index}
        label={wifi.label}
      />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="m-0 font-serif text-2xl leading-[1.4] font-normal tracking-[-0.2px] text-neutral-900">
            {wifi.title}
          </h3>
          <p className="m-0 text-xs leading-[1.2] tracking-[0.4px] text-neutral-600">{wifi.meta}</p>
        </div>
        <div className="flex flex-col gap-1">
          <div className="wifi-row">
            <span className="font-mono tracking-[2px] text-neutral-600 uppercase">
              {wifi.networkLabel}
            </span>
            <span className="tracking-[0.4px] text-neutral-900">{wifi.network}</span>
          </div>
          <div className="wifi-row">
            <span className="font-mono tracking-[2px] text-neutral-600 uppercase">
              {wifi.passwordLabel}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="tracking-[0.4px] text-neutral-900">{wifi.password}</span>
              <button
                type="button"
                className="copy-button"
                onClick={copyPassword}
                aria-label={copied ? wifi.copiedLabel : `Copy Wi-Fi password ${wifi.password}`}
              >
                {copied ? wifi.copiedLabel : wifi.copyLabel}
              </button>
            </span>
          </div>
          <p className="sr-only" aria-live="polite">
            {copied ? 'Password copied to clipboard.' : ''}
          </p>
        </div>
      </div>
    </Card>
  )
}

function CardHeading({
  tone,
  icon,
  iconWidth,
  iconHeight,
  index,
  label,
}: {
  tone: InfoTone
  icon: string
  iconWidth: number
  iconHeight: number
  index: string
  label: string
}) {
  return (
    <div className="flex items-center gap-2.5">
      <span className={`icon-tile ${toneStyles[tone].tile}`}>
        <Icon src={icon} width={iconWidth} height={iconHeight} />
      </span>
      <p
        className={`m-0 flex-1 font-mono text-sm leading-[1.4] font-medium tracking-[2px] uppercase ${toneStyles[tone].text}`}
      >
        {label}
      </p>
      <p
        className={`m-0 font-serif text-2xl leading-[1.4] font-normal tracking-[-0.2px] ${toneStyles[tone].text}`}
      >
        {index}
      </p>
    </div>
  )
}
