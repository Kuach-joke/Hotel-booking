import { forwardRef } from 'react'
import logo from '../../assets/images/logo.svg'
import iconClose from '../../assets/images/icon-close.svg'
import iconBed from '../../assets/images/icon-bed.svg'
import iconHouse from '../../assets/images/icon-house.svg'
import iconPin from '../../assets/images/icon-pin.svg'
import iconBreakfast from '../../assets/images/icon-breakfast-outline.svg'
import iconMail from '../../assets/images/icon-mail.svg'
import { property, type NavIcon, type NavItem } from '../../data/stay'
import { Badge } from '../ui/Badge'
import { Icon } from '../ui/Icon'
import { WeatherWidget } from '../../features/WeatherWidget'

const icons: Record<NavIcon, string> = {
  bed: iconBed,
  house: iconHouse,
  pin: iconPin,
  breakfast: iconBreakfast,
  mail: iconMail,
}

type SidebarProps = {
  items: NavItem[]
  activeId: string
  open: boolean
  dialog: boolean
  titleId: string
  onNavigate: (item: NavItem) => void
  onClose: () => void
}

export const Sidebar = forwardRef<HTMLElement, SidebarProps>(function Sidebar(
  { items, activeId, open, dialog, titleId, onNavigate, onClose },
  ref,
) {
  return (
    <aside
      ref={ref}
      id={titleId}
      className="sidebar no-print"
      data-open={open ? 'true' : 'false'}
      aria-hidden={dialog ? undefined : open ? undefined : true}
      role={dialog ? 'dialog' : undefined}
      aria-modal={dialog ? true : undefined}
      aria-label="Stay navigation"
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-3">
          <img src={logo} width={107} height={42} alt="Maison Soleil" />
          <button
            type="button"
            className="icon-button drawer-only"
            data-close="true"
            aria-label="Close menu"
            onClick={onClose}
          >
            <Icon src={iconClose} width={20} height={20} />
          </button>
        </div>
        <div className="h-px bg-neutral-400" />
        <nav aria-label="Stay" className="flex flex-col gap-0.5">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              className="menu-item"
              aria-current={item.id === activeId ? 'page' : undefined}
              onClick={() => onNavigate(item)}
            >
              <Icon src={icons[item.icon]} width={20} height={20} className="shrink-0" />
              <span className="min-w-0 flex-1">{item.label}</span>
              {item.badge ? <Badge value={item.badge} /> : null}
            </button>
          ))}
        </nav>
      </div>
      <div className="mt-8 flex flex-col gap-5">
        <WeatherWidget />
        <div className="meta-list">
          <p className="m-0">{property.established}</p>
          <p className="m-0">{property.address}</p>
          <p className="m-0">{property.copyright}</p>
        </div>
      </div>
    </aside>
  )
})
