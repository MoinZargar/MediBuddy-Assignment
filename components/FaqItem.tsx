'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Plus, Minus } from 'lucide-react'
import type { FAQSection, FAQItem } from '../types/faq'


export default function FaqItem({ item }: { item: FAQItem }) {
    const [isExpanded, setIsExpanded] = useState(item.isExpanded)
   
    return (
        <div className="border-b border-gray-200">
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full flex items-center justify-between py-6 text-left"
            >
                <h3 className="text-lg text-[#1A1F36] font-medium pr-8">
                    {item.question}
                </h3>
                <span className="flex-shrink-0 text-gray-400">
                    {isExpanded ? (
                        <Minus className="w-6 h-6" />
                    ) : (
                        <Plus className="w-6 h-6" />
                    )}
                </span>
            </button>

            {isExpanded && (
                <div className="pb-6 text-gray-600">
                    {item.answer && <p className="mb-4">{item.answer}</p>}
                    {item.points && (
                        <div className="space-y-4">
                            {item.points.map((point, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    {point.img && (
                                        <div className="flex-shrink-0">
                                            <Image
                                                src={point.img || "/placeholder.svg"}
                                                alt=""
                                                width={24}
                                                height={24}
                                                className="w-6 h-6"
                                            />
                                        </div>
                                    )}
                                    <p className="text-[#4D5C6F]">{point.pnt}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}