export type NavIcon = 'bed' | 'house' | 'pin' | 'breakfast' | 'mail'

export type NavItem = {
  id: string
  label: string
  href: string
  icon: NavIcon
  badge?: string
}

export type LineItem = {
  label: string
  amount: string
  muted?: boolean
}

export type InfoTone = 'terracotta' | 'blue' | 'rose'

export const guest = {
  firstName: 'Lucia',
  status: 'Booking · Confirmed',
} as const

export const property = {
  name: 'Maison Soleil',
  established: 'Est. 1987',
  address: 'Maison Soleil · 12 Rue des Oliviers · Cassis',
  copyright: '© 2026 Maison Soleil',
  street: '12 Rue des Oliviers',
  city: 'Cassis',
} as const

export const navigation: NavItem[] = [
  { id: 'your-stay', label: 'Your stay', href: '#your-stay', icon: 'bed', badge: '1' },
  { id: 'the-house', label: 'The house', href: '#the-house', icon: 'house' },
  { id: 'around-town', label: 'Around town', href: '#around-town', icon: 'pin' },
  { id: 'breakfast', label: 'Breakfast', href: '#breakfast', icon: 'breakfast' },
  { id: 'messages', label: 'Messages', href: '#messages', icon: 'mail' },
]

export const weather = {
  place: 'Today in Cassis',
  temperature: '27°',
  summary: 'Sunny · light breeze',
} as const

export const receipt = {
  label: 'Receipt',
  title: 'Your stay',
  number: '№\u00a0MS-2026',
  code: '0421-AH',
  checkIn: {
    label: 'Check in',
    date: '25 Apr',
    weekday: 'Saturday',
    time: '15:00',
  },
  checkOut: {
    label: 'Check out',
    date: '29 Apr',
    weekday: 'Wednesday',
    time: '11:00',
  },
  items: [
    { label: 'Room · La Garrigue × 4 nights', amount: '€ 620.00' },
    { label: 'Breakfast × 2 guests', amount: '€ 96.00' },
    { label: 'Tourist tax', amount: '€ 14.40', muted: true },
  ] satisfies LineItem[],
  totalLabel: 'Total paid',
  total: '€ 730.40',
  payment: 'Paid · Wise · GBP',
} as const

export const welcome = {
  eyebrow: 'Welcome card',
  greeting: 'A note from your host,',
  host: 'Margaux.',
  body: "We're so glad you're coming. The shutters will be open, the lemonade cold, and the cat - Poivre - pretending not to notice you.",
  roomLabel: 'Room',
  room: 'La Garrigue',
} as const

export const calendarEvent = {
  start: '20260425T150000',
  end: '20260429T110000',
  summary: 'Stay at Maison Soleil — La Garrigue',
  location: 'Maison Soleil, 12 Rue des Oliviers, Cassis',
  description:
    'Check-in Saturday 25 April at 15:00. Check-out Wednesday 29 April at 11:00. Room La Garrigue.',
  filename: 'maison-soleil-stay.ics',
} as const

export type WifiRow = {
  label: string
  value: string
}

export const infoCards = {
  arrival: {
    id: 'arrival',
    index: '01',
    label: 'Arrival',
    title: 'Check-in from 15:00',
    meta: 'Sat, 25 April',
    body: "Ring the brass bell by the blue door. If we're at the market, the key is in the terracotta pot by the olive tree.",
    tone: 'terracotta' as const,
  },
  wifi: {
    id: 'wifi',
    index: '02',
    label: 'Wifi',
    title: 'Le Soleil · Guest',
    meta: 'Password below',
    tone: 'blue' as const,
    networkLabel: 'Network',
    network: 'Le Soleil · Guest',
    passwordLabel: 'Password',
    password: 'soleil-2026',
    copyLabel: 'Copy',
    copiedLabel: 'Copied',
  },
  breakfast: {
    id: 'breakfast',
    index: '03',
    label: 'Breakfast',
    title: 'Served 8 – 10:30',
    meta: 'On the terrace',
    body: 'Fresh figs, Marseille honey, pain au levain, and espresso. Gluten-free option? Leave a note the night before.',
    tone: 'rose' as const,
  },
} as const

export const fanHint = 'hover to fan'
