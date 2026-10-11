import { calendarEvent } from '../data/stay'

function escapeIcs(value: string): string {
  return value
    .replace(/\\/g, '\\\\')
    .replace(/\n/g, '\\n')
    .replace(/,/g, '\\,')
    .replace(/;/g, '\\;')
}

export function buildStayIcs(): string {
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Maison Soleil//Booking Confirmation//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${calendarEvent.start}-la-garrigue@maison-soleil.example`,
    `DTSTAMP:${calendarEvent.start}`,
    `DTSTART:${calendarEvent.start}`,
    `DTEND:${calendarEvent.end}`,
    `SUMMARY:${escapeIcs(calendarEvent.summary)}`,
    `LOCATION:${escapeIcs(calendarEvent.location)}`,
    `DESCRIPTION:${escapeIcs(calendarEvent.description)}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ]
  return lines.join('\r\n')
}

export function downloadStayCalendar(): void {
  const blob = new Blob([buildStayIcs()], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = calendarEvent.filename
  link.rel = 'noopener'
  document.body.appendChild(link)
  link.click()
  link.remove()
  URL.revokeObjectURL(url)
}
