import Image from 'next/image'
import { steps } from '../lib/workflowData'

export default function WorkFlow() {
    return(
        <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-[#1A1F36] mb-8">
          How it Works?
        </h2>
        
        <div className="space-y-8 md:space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <Image
                  src={step.icon}
                  alt=""
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
              </div>
              <p className="text-[#4D5C6F] text-lg leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    )
}