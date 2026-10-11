import { weather } from '../data/stay'
import iconWeather from '../assets/images/icon-weather.svg'

export function WeatherWidget() {
  return (
    <section id="around-town" className="weather scroll-mt-6" aria-label="Weather in Cassis">
      <p className="relative z-10 m-0 font-mono text-[10px] leading-[1.4] tracking-[1px] text-neutral-700 uppercase">
        {weather.place}
      </p>
      <p className="relative z-10 m-0 mt-1.5 font-serif text-[2rem] leading-[1.2] font-normal tracking-[-0.25px] text-neutral-900">
        {weather.temperature}
      </p>
      <p className="relative z-10 m-0 mt-1.5 text-xs leading-[1.2] tracking-[0.4px] text-neutral-700">
        {weather.summary}
      </p>
      <img className="weather-icon" src={iconWeather} width={80} height={80} alt="" />
    </section>
  )
}
