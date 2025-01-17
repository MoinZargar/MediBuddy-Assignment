'use client'

import { ChevronRight, Check, ChevronLeft } from 'lucide-react'
import { Booking } from '../types/booking'
import { BookingData } from '../lib/bookingData'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from '@/components/ui/carousel'

export default function ActiveBookingSection() {
    return (
        <section className="py-8 font-['Lexend_Deca']">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-[#050A4E]">
                        Your Active Bookings
                    </h2>
                    <a href="#" className="text-blue-500 hover:underline">
                        View All
                    </a>
                </div>

                <div className="relative">
                    <Carousel
                        opts={{
                            align: 'start',
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4">
                            {BookingData.map((booking) => (
                                <CarouselItem key={booking.id} className="pl-4 lg:basis-1/3">
                                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                        <div className="mb-4">
                                            <div>
                                                <h3 className="text-lg font-semibold text-[#050A4E]">
                                                    {booking.patientName}
                                                </h3>
                                                <div className="flex items-center gap-2 text-green-600 mt-1">
                                                    <Check className="w-5 h-5" />
                                                    <span className="font-bold text-base text-lg">Appointment Confirmed</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-[#F8F9FF] rounded-lg p-4">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <div className="text-[#050A4E] font-semibold">
                                                        {booking.date}
                                                    </div>
                                                    <div className="text-gray-500 text-sm">
                                                        {booking.day}
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="text-[#050A4E] font-semibold">
                                                        {booking.time}<span className="text-xs ml-1">AM</span>
                                                    </div>
                                                    <div className="text-gray-500 text-sm">
                                                        {booking.serviceType}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-2 text-blue-500">
                                                {booking.testCount} Lab Tests
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="lg:hidden">
                            <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg" />
                            <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg" />

                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    )
}