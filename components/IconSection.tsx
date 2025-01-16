import type { IconSection } from "../types/icon"
import { IconCard } from './IconCard'

interface IconSectionProps { 
  content: IconSection; 
}

export default function IconSection({ content }: IconSectionProps) {
  return (
   
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-x-8 gap-y-6">
          {content.props.map((icon) => (
            <IconCard key={icon.serviceType} icon={icon} />
          ))}
        </div>
      </div>
    </section>
  )
}