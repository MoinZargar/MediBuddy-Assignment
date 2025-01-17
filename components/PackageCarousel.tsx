
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Package } from "../types/health-checkup"
import PackageCard from "./PackageCard"

interface PackageCarouselProps {
  packages: Package[]
}

export default function PackageCarousel({ packages }: PackageCarouselProps) {
  return (
      <Carousel
          opts={{
              align: "start",
              loop: true,
          }}
          className="w-full"
      >
          <CarouselContent className="-ml-2 md:-ml-4">
              {packages.map((pkg) => (
                  <CarouselItem 
                      key={pkg.packageId} 
                      className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                  >
                      <div className="h-full"> {/* Added wrapper div */}
                          <PackageCard package={pkg} />
                      </div>
                  </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 flex carousel-arrow" />
          <CarouselNext className="absolute right-0 flex carousel-arrow" />
      </Carousel>
  )
}