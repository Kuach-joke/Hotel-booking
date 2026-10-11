import { useEffect, useId, useRef, useState } from 'react'
import { navigation, type NavItem } from '../../data/stay'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { AppBar } from './AppBar'
import { Header } from './Header'
import { Sidebar } from './Sidebar'
import { BookingCards } from '../../features/BookingCards'
import { InfoCards } from '../../features/InfoCards'

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

export function PageShell() {
  const isDesktop = useMediaQuery('(min-width: 64rem)')
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState('your-stay')
  const sidebarRef = useRef<HTMLElement>(null)
  const mainRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const restoreFocus = useRef(false)
  const titleId = useId()
  const drawerOpen = open && !isDesktop

  const closeDrawer = (shouldRestoreFocus: boolean) => {
    restoreFocus.current = shouldRestoreFocus
    setOpen(false)
  }

  useEffect(() => {
    if (isDesktop) setOpen(false)
  }, [isDesktop])

  useEffect(() => {
    const sidebar = sidebarRef.current
    const main = mainRef.current
    if (sidebar) {
      if (drawerOpen || isDesktop) sidebar.removeAttribute('inert')
      else sidebar.setAttribute('inert', '')
    }
    if (main) {
      if (drawerOpen) main.setAttribute('inert', '')
      else main.removeAttribute('inert')
    }
    if (!drawerOpen && restoreFocus.current) {
      restoreFocus.current = false
      menuButtonRef.current?.focus()
    }
  }, [drawerOpen, isDesktop])

  useEffect(() => {
    if (!drawerOpen) return

    const sidebar = sidebarRef.current
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const focusables = () =>
      Array.from(sidebar?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? []).filter(
        (element) => !element.hasAttribute('disabled'),
      )

    focusables()[0]?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        restoreFocus.current = true
        setOpen(false)
        return
      }

      if (event.key !== 'Tab') return
      const items = focusables()
      const first = items[0]
      const last = items[items.length - 1]
      if (!first || !last) return

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [drawerOpen])

  const navigate = (item: NavItem) => {
    setActiveId(item.id)
    const target = document.querySelector(item.href)
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (item.id === 'around-town' && !isDesktop) {
      target?.scrollIntoView({ block: 'nearest', behavior: prefersReduced ? 'auto' : 'smooth' })
      return
    }

    setOpen(false)
    if (target instanceof HTMLElement) {
      target.scrollIntoView({ block: 'start', behavior: prefersReduced ? 'auto' : 'smooth' })
    }
  }

  return (
    <div className="page">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <button
        type="button"
        className="overlay"
        data-open={drawerOpen ? 'true' : 'false'}
        aria-label="Close navigation"
        tabIndex={drawerOpen ? 0 : -1}
        onClick={() => closeDrawer(true)}
      />
      <Sidebar
        ref={sidebarRef}
        items={navigation}
        activeId={activeId}
        open={drawerOpen || isDesktop}
        dialog={drawerOpen}
        titleId={titleId}
        onNavigate={navigate}
        onClose={() => closeDrawer(true)}
      />
      <div ref={mainRef} className="main-column">
        <AppBar
          ref={menuButtonRef}
          expanded={drawerOpen}
          controls={titleId}
          onToggle={() => setOpen((value) => !value)}
        />
        <main id="main" className="main-inner">
          <Header />
          <BookingCards />
          <InfoCards />
        </main>
      </div>
    </div>
  )
}
