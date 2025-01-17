import { FeedbackSectionType } from "../types/feedback"
import FeedbackCard from "./FeedbackCard"

interface FeedbackSectionProps {
    content: FeedbackSectionType
}
export default function FeedbackSection({ content }: FeedbackSectionProps) {
    
    return (
        <section className="w-full py-12 text-justify">
            <h2 className="text-2xl font-bold text-[#050A4E] mb-6">
                {content.title}
            </h2>

            <div className="flex flex-wrap lg:flex-nowrap gap-4 justify-between">
                {content.props.map((testimonial, index) => (
                    <FeedbackCard key={index} testimonial={testimonial} />
                ))}
            </div>
        </section>
    )
}