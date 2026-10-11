import type { HTMLAttributes } from 'react'

type CardProps = HTMLAttributes<HTMLElement> & {
  as?: 'article' | 'section' | 'div'
}

export function Card({ as: Tag = 'article', className = '', children, ...props }: CardProps) {
  return (
    <Tag className={`info-card ${className}`.trim()} {...props}>
      {children}
    </Tag>
  )
}
