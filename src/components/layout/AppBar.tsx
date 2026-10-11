import { forwardRef } from 'react'
import logo from '../../assets/images/logo.svg'
import iconMenu from '../../assets/images/icon-menu.svg'
import { Icon } from '../ui/Icon'

type AppBarProps = {
  expanded: boolean
  controls: string
  onToggle: () => void
}

export const AppBar = forwardRef<HTMLButtonElement, AppBarProps>(function AppBar(
  { expanded, controls, onToggle },
  ref,
) {
  return (
    <header className="app-bar">
      <img src={logo} width={107} height={42} alt="Maison Soleil" />
      <button
        ref={ref}
        type="button"
        className="icon-button"
        aria-expanded={expanded}
        aria-controls={controls}
        aria-label={expanded ? 'Close menu' : 'Open menu'}
        onClick={onToggle}
      >
        <Icon src={iconMenu} width={20} height={20} />
      </button>
    </header>
  )
})
