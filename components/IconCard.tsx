import Image from 'next/image'
import Link from 'next/link'
import type { IconProps } from '../types/icon'

interface IconCardProps {
  icon: IconProps
}

export function IconCard({ icon }: IconCardProps) {
    return (
      <Link 
        href={icon.deeplink}
        className="flex flex-col items-center gap-2 group cursor-pointer"
      >
        <div className="relative w-24 h-24 flex items-center justify-center rounded-full bg-[#F5F7FF]">
          <div className="w-12 h-12 flex items-center justify-center">
            <img 
              src={icon.iconUrl} 
              alt={icon.iconText}
              className="w-full h-full object-contain transition-transform group-hover:scale-110"
            />
          </div>
          {icon.iconTag && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              {icon.iconTag}
            </span>
          )}
        </div>
        <span className="text-center text-[#050A4E] text-sm font-bold leading-tight max-w-[100px]">
          {icon.iconText}
        </span>
      </Link>
    )
}

