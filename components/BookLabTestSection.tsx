import type { HealthCheckupSection } from "../types/health-checkup"
import CategoryTab from "./CategoryTab"
import LabTestCard from "./LabTestCard"

interface HealthCheckupSectionProps {
  content: HealthCheckupSection
}

export default function BookLabTestSection({ content }: HealthCheckupSectionProps) {
    const categories = Object.values(content.categories)[0]
    const packages = content.props[0].packages;
  return (
    <section className="w-full px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[22px] font-bold text-[#050A4E]">
          Book Popular Lab Tests
        </h2>
        <a 
          href="#" 
          className="text-[#050A4E] text-base font-bold"
        >
          View All
        </a>
      </div>
       <CategoryTab categories={categories} />
        <div className="flex flex-wrap gap-4 flex-1">
            {packages.filter(labTest => labTest.packageType === "Investigation").map((labTest, index) => (
            <div key={index} className="w-full">
                <LabTestCard labTest={labTest} />
            </div>
            ))}

        </div>
    </section>
  )
}