import { welcome } from '../data/stay'
import iconSun from '../assets/images/icon-sun.svg'

export function WelcomeNote() {
  return (
    <article id="the-house" className="welcome-card scroll-mt-28">
      <header className="flex items-start justify-between gap-4 border-t border-dashed border-terracotta-400 pt-4">
        <p className="m-0 pt-0.5 font-mono text-[10px] leading-[1.4] tracking-[1px] text-sun-50 uppercase">
          {welcome.eyebrow}
        </p>
        <img src={iconSun} width={49} height={49} alt="" />
      </header>
      <div className="flex flex-1 flex-col gap-6">
        <div>
          <p className="m-0 font-serif text-xl leading-[1.4] tracking-[-0.1px] text-sun-200 italic">
            {welcome.greeting}
          </p>
          <p className="m-0 mt-2 font-serif text-[2.5rem] leading-[1.2] tracking-[-0.5px] italic">
            {welcome.host}
          </p>
        </div>
        <p className="m-0 text-sm leading-[1.4] text-sun-50">{welcome.body}</p>
      </div>
      <footer className="mt-auto">
        <p className="m-0 font-mono text-[10px] leading-[1.4] tracking-[1px] text-sun-50 uppercase">
          {welcome.roomLabel}
        </p>
        <p className="m-0 mt-1 font-serif text-xl leading-[1.4] font-normal tracking-[-0.1px] not-italic">
          {welcome.room}
        </p>
      </footer>
    </article>
  )
}
