import { Package } from "@/types/health-checkup"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Home, Plus, Minus } from 'lucide-react'

interface PackageCardProps {
  package: Package
}

export default function PackageCard({ package: pkg }: PackageCardProps) {
  if (pkg.packageType !== "HealthChecks") {
    return null;
  }
  return (
    <Card className="w-full bg-white shadow-sm hover:shadow-md transition-shadow h-96 pt-4">
      <CardHeader className="p-4 pb-0">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-bold text-[#050A4E]">{pkg.packageDisplayName}</h3>
        </div>
      </CardHeader>
      <CardContent className="p-4 space-y-4 h-80">
        <div className="flex items-center gap-2 text-[#4C57B9]">
          <Clock className="w-4 h-4" />
          <span className="text-sm text-[#050A4E]">{pkg.reportsTatText}</span>
        </div>

        <div className="space-y-2">
          <div className="font-semibold text-[#050A4E]">{pkg.testCount} Tests</div>
          <ul className="space-y-1">
            {pkg.testsSummary.map((test, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-start">
                <span className="mr-2">•</span>
                {test}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4 bg-[#F8FAFC] p-3 rounded-lg">
          <div>
            <div className="text-sm font-medium text-[#050A4E]">Fasting</div>
            <div className="text-sm ">{pkg.fastingHoursText}</div>
          </div>
          <div>
            <div className="text-sm font-medium text-[#050A4E]">Available</div>
            <div className="flex items-center gap-1 text-sm ">
              <Home className="w-4 h-4" />
              <span>{pkg.currentVisitType === "HomeVisit" ? "Home" : "Center"}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold">₹ {pkg.price}</span>
            {pkg.priceRange > pkg.price && (
              <span className="text-sm text-gray-500 line-through">₹ {pkg.priceRange}</span>
            )}
          </div>
          <div className="flex items-center border rounded-lg">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 rounded-none border-r text-[#1778F2]"
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="w-8 text-center text-[#1778F2]">1</span>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 rounded-none border-l text-[#1778F2]"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {pkg.discountInfo.coupon && (
          <div className="text-xs text-[#4C57B9] bg-[#EEF4FF] p-2 rounded text-center">
            Use code {pkg.discountInfo.coupon} for additional discount
          </div>
        )}
      </CardContent>
    </Card>
  )
}
