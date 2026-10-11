import { guest } from '../../data/stay'
import { downloadStayCalendar } from '../../lib/calendar'
import { Button } from '../ui/Button'

export function Header() {
  return (
    <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-col gap-1">
        <p className="eyebrow">{guest.status}</p>
        <h1 className="greeting">
          Bienvenue, <em>{guest.firstName}.</em>
        </h1>
      </div>
      <div className="no-print flex flex-wrap gap-4">
        <Button variant="secondary" className="flex-1 md:flex-none" onClick={() => window.print()}>
          Print receipt
        </Button>
        <Button variant="primary" className="flex-1 md:flex-none" onClick={downloadStayCalendar}>
          Add to calendar
        </Button>
      </div>
    </header>
  )
}
