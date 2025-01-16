import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Home, Building2 } from 'lucide-react';
import { Package } from "../types/health-checkup";

interface LabTestCardProps {
  labTest: Package;
}

const LabTestCard = ({ labTest }: LabTestCardProps) => {
  const discountPercentage = Math.round(((labTest.priceRange - labTest.price) / labTest.priceRange) * 100);

  return (
    <Card className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          {/* Left side content */}
          <div className="space-y-3">
            <h3 className="text-[#1A1C1F] font-bold text-lg mb-2">
              {labTest.packageDisplayName}
            </h3>
            
            <div className="flex items-center text-blue-600 mb-2">
              <Clock className="w-4 h-4 mr-1" />
              <span className="text-sm font-bold">{labTest.reportsTatText}</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <Home className="w-4 h-4 text-gray-500 mr-1" />
                <span className="text-sm text-gray-500">Home</span>
              </div>
              <div className="flex items-center">
                <Building2 className="w-4 h-4 text-gray-500 mr-1" />
                <span className="text-sm text-gray-500">Lab</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right side content */}
        <div className="flex flex-col items-end gap-3">
          <div className="bg-green-100 text-green-600 px-2 py-1 rounded-md text-sm font-medium flex items-center mb-1">
            <svg className="w-4 h-4 mr-1" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Cashless
          </div>

          <div className="text-right mb-2">
            <div className="flex items-center justify-end gap-2 mb-1">
              <span className="text-gray-400 text-sm line-through">₹{labTest.priceRange}/-</span>
              <span className="text-green-600 text-sm">{discountPercentage}% OFF</span>
            </div>
            <div>
              <span className="text-[#1A1C1F] font-bold text-lg">₹{labTest.price}/-</span>
              <span className="text-gray-500 text-sm ml-1">Onwards</span>
            </div>
          </div>

          <Button 
            className="bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-colors w-20 rounded-md font-bold"
          >
            Add
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default LabTestCard;