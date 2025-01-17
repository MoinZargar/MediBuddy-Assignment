import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export default function CategoryTab({ categories }: { categories: string[] }) {
   return (
       <div className="relative pb-4">
           <ScrollArea className="w-full whitespace-nowrap">
               <div className="flex space-x-2 pb-4">
                   {categories.map((category) => (
                       <button
                           key={category}
                           className={`
                               flex-shrink-0
                               rounded-full 
                               px-6 
                               py-3 
                               text-sm 
                               whitespace-nowrap
                               bg-white 
                               text-[#050A4E] 
                               border 
                               border-gray-300 
                               font-bold
                           `}
                       >
                           {category}
                       </button>
                   ))}
               </div>
               <ScrollBar 
                   orientation="horizontal" 
                   className="flex h-3 bg-gray-200 rounded-full cursor-pointer !select-none opacity-100" 
                   
               />
           </ScrollArea>
       </div>
   )
}