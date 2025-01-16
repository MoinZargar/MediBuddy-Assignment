import React from 'react';
import { Card } from "@/components/ui/card";
import { LifestylePackageSectionType } from '../types/life-style-package';

interface LifestylePackagesProps {
    content: LifestylePackageSectionType;
}
export default function LifestylePackages({content}: LifestylePackagesProps) {
    console.log(content);
    return (
        <div className="w-full">
      
        <h2 className="text-[#050A4E] text-2xl font-bold mb-6">
          {content.title}
        </h2>
  
       
        <div className="flex flex-wrap gap-4">
          {content.props.map((pkg) => (
            <Card 
              key={pkg.value}
              className="flex flex-col items-center justify-center p-6 rounded-2xl hover:shadow-lg transition-shadow cursor-pointer flex-1 min-w-[200px] bg-white"
            >
             
              <div className="w-24 h-24 mb-4 flex items-center justify-center">
                <img 
                  src={pkg.imgSrc} 
                  alt={pkg.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-center text-[#050A4E] font-medium">
                {pkg.title}
              </h3>
            </Card>
          ))}
        </div>
      </div>
    )
}