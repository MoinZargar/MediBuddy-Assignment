'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import type { BannerSection } from '../types/banner'

interface BannerSectionProps {
  content: BannerSection
}

export default function BannerSection({ content }: BannerSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const activeBanners = content.props
    .filter(banner => banner.isActive)

  const totalSlides = Math.ceil(activeBanners.length / 3)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides)
    }, 3000)

    return () => clearInterval(timer)
  }, [totalSlides])

  return (
    <section className="py-8 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0 flex flex-col lg:flex-row gap-4">
                {activeBanners.slice(slideIndex * 3, slideIndex * 3 + 3).map((banner, index) => (
                  <Link 
                    key={index}
                    href={banner.deeplink}
                    className="block flex-1 relative aspect-[2.5/1] rounded-xl overflow-hidden mb-4 lg:mb-0"
                  >
                    <img
                      src={banner.bannerUrl }
                      alt={`Banner ${slideIndex * 3 + index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

