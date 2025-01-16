import { MapPin, Wallet, ShoppingCart } from 'lucide-react'

export default function Header() {
  return (
    <header className="px-4 py-3 flex items-center justify-between bg-white">
      <div className="flex-1">
        <div className="flex items-center gap-1">
          <h1 className="text-[#2E3742] text-xl font-semibold flex items-center gap-1">
            Billekahalli
            <MapPin className="w-5 h-5 text-[#2E3742]" />
          </h1>
        </div>
        <p className="text-[#2E3742]/70 text-sm truncate max-w-[250px]">
          Sarvabhoumanagar Billekahalli
        </p>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <Wallet className="w-5 h-5 text-[#2E3742]" />
          <span className="text-[#2E3742] font-medium">4529</span>
        </div>
        
        <div className="relative">
          <ShoppingCart className="w-6 h-6 text-[#2E3742]" />
          <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            1
          </span>
        </div>
      </div>
    </header>
  )
}

