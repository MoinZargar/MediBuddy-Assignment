import React from 'react';
import { Card } from "@/components/ui/card";
import { MapPin } from 'lucide-react';
import { UserTestimonial } from "../types/feedback";

const StarRating = ({ rating }: { rating: number }) => {
    return (
        <div className="flex gap-1">
            {[...Array(rating)].map((_, i) => (
                <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
};


interface FeedbackCardProps {
    testimonial: UserTestimonial;
}
export default function FeedbackCard({ testimonial }: FeedbackCardProps) {
    return (
        <Card className="lg:flex-1 w-full lg:w-0 p-4 bg-white rounded-xl">
            <div className="space-y-2 mb-3">
                <StarRating rating={testimonial.rating} />
                <div className="flex items-center text-gray-500 text-sm gap-2">
                    <span>{testimonial.days}</span>
                    <span>•</span>
                    <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>Bangalore</span>
                    </div>
                </div>
            </div>

            <p className="text-gray-700 mb-4 line-clamp-3">
                "{testimonial.content}"
            </p>

            <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-medium">
                        {testimonial.name.charAt(0)}
                    </span>
                </div>
                <span className="font-medium text-gray-900">{testimonial.name}</span>
            </div>
        </Card>

    )
}