'use client'
import { Search } from 'lucide-react'

interface SearchBarProps {
  placeholder?: string
  className?: string
}

export default function SearchBar({ 
  placeholder = "Find lab tests, diagnostics centres",
  className = ""
}: SearchBarProps) {
  return (
    <div className={`relative w-full  mx-auto ${className}`}>
      <div className="relative rounded-full bg-white border border-[#4D5C6F]/30"> {/* Added border for darker boundaries by default */}
        <input
          type="search"
          placeholder={placeholder}
          className="w-full px-6 py-4 rounded-full text-[#4D5C6F] placeholder:text-[#4D5C6F]/60 focus:outline-none focus:ring-2 focus:ring-[#4D5C6F]/10 text-lg"
        />
        <div className="absolute right-6 top-1/2 -translate-y-1/2">
          <Search className="w-5 h-5 text-[#4D5C6F]" />
        </div>
      </div>
    </div>
  )
}