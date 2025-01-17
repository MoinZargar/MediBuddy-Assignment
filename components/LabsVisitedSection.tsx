import { labsData } from "../lib/labsData"
import LabCard from "./LabCard"

export default function LabsVisitedSection() {
    return (
        <section className="w-full px-4 py-6">
            <h2 className="text-2xl font-bold text-[#2E3742] mb-4 py-4">Labs Visited</h2>
            <div className="flex flex-wrap justify-between gap-6">
                {labsData.map((lab, index) => (
                    <LabCard key={index} {...lab} />
                ))}
            </div>
        </section>
    )
}