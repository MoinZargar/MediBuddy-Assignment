import React from 'react';
import { Building2, FlaskConical, MapPin, ShieldCheck } from 'lucide-react';
export default function TrustStats() {
  return (
    <div className="p-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold mb-2">
          <span className="text-gray-900 font-Lexend-Deca">Trusted by </span>
          <span className="text-blue-600 font-Lexend-Deca">20,00,000+</span>
          <br />
          <span className="text-navy-900 font-bold font-Lexend-Deca">Users Every month</span>
        </h2>
        
        <ShieldCheck className="w-12 h-12 text-green-600" />
      </div>

     
      <div className="flex flex-wrap items-start justify-center gap-4 lg:justify-between">
        {/* Diagnostic Centres */}
        <div className="flex items-start gap-3">
          <div className="text-blue-600">
            <Building2 className="w-10 h-10" />
          </div>
          <div>
            <p className="font-bold text-gray-900">200+ Approved</p>
            <p className="text-gray-900">Diagnostic Centres</p>
          </div>
        </div>

        {/* Lab Tests */}
        <div className="flex items-start gap-3">
          <div className="text-blue-600">
            <FlaskConical className="w-10 h-10" />
          </div>
          <div>
            <p className="font-bold text-gray-900">1200+ Lab Tests</p>
            <p className="text-gray-900">Offered</p>
          </div>
        </div>

        {/* Pincodes */}
        <div className="flex items-start gap-3">
          <div className="text-blue-600">
            <MapPin className="w-10 h-10" />
          </div>
          <div>
            <p className="font-bold text-gray-900">1200+ Pincodes</p>
            <p className="text-gray-900">Covered</p>
          </div>
        </div>
      </div>
    </div>
  );
};
