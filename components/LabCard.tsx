import {LabCardProps} from '../types/lab-card';
import React from 'react';
import { Card } from "@/components/ui/card";
import { MapPin, Clock } from 'lucide-react';

export default function LabCard ({ name, location, nextSlot, rating, totalRatings, imageSrc }: LabCardProps)  {
    return (
      <Card className="overflow-hidden w-full max-w-md bg-white hover:shadow-lg transition-shadow">
        {/* Lab Image */}
        <div className="w-full h-40 relative">
          <img 
            src={imageSrc} 
            alt={name}
            className="w-full h-full object-fill"
          />
          {/* Rating Badge */}
          <div className="absolute bottom-3 left-3 bg-white rounded-md px-2 py-1 flex items-center gap-1 shadow-sm">
            <svg 
              className="w-4 h-4 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-medium text-sm">{rating}/5</span>
            <span className="text-gray-500 text-sm">({totalRatings} ratings)</span>
          </div>
        </div>
  
        {/* Lab Info */}
        <div className="p-4 space-y-3">
          <h3 className="text-lg font-bold text-[#1A1C1F]">{name}</h3>
          
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{location}</span>
          </div>
  
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{nextSlot}</span>
          </div>
        </div>
      </Card>
    );
  };