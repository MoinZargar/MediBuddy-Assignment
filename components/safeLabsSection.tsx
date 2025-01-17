import { features } from '../lib/safeLabsData'
import Image from 'next/image'

export default function SafeLabsSection() {
    return(
        <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-[#050A4E] mb-8">
          100% Safe & Secure Lab Tests
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-[#F2F5FF] rounded-xl p-6 flex flex-col items-center text-center shadow-md"
            >
              <div className="mb-4">
                <Image
                  src={feature.icon || "/placeholder.svg"}
                  alt=""
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
              </div>
              <p className="text-[#050A4E] text-lg font-medium">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    )
}