import { FAQSection } from '../types/faq';
import FaqItem from './FaqItem';

interface FaqSectionProps {
    content: FAQSection;
}
export default function FaqSection({ content }: FaqSectionProps) {

    return (
        <section className="py-12">
            <div className="container mx-auto px-4 flex flex-col items-center">
                <h2 className="text-2xl font-bold text-[#050A4E] mb-8">
                    {content.title}
                </h2>

                <div className="max-w-3xl w-full">
                    {content.props.map((item) => (
                        <FaqItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    )
}