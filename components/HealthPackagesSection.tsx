import type { HealthCheckupSection } from "../types/health-checkup"
import PackageCarousel from "./PackageCarousel"
import CategoryTab from "./CategoryTab"

interface HealthCheckupSectionProps {
  content: HealthCheckupSection
}

export default function HealthPackagesSection({ content }: HealthCheckupSectionProps) {
  const categories = Object.values(content.categories)[0]
  const packages = content.props[0].packages;
  return (
    <section className="w-full bg-[#E8F2FE] px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[22px] font-bold text-[#050A4E]">
          {content.heading}
        </h2>
        <a 
          href="#" 
          className="text-[#050A4E] text-base font-bold"
        >
          View All
        </a>
      </div>
       <CategoryTab categories={categories} />
      <PackageCarousel packages={packages} />
    </section>
  )
}
