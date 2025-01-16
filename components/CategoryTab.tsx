import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export default function CategoryTab({ categories }: { categories: string[] }) {
    return (
        <div>
            <ScrollArea className="w-full">
                <div className="flex gap-2 pb-4">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`
                rounded-full px-6 py-3 text-sm whitespace-nowrap
                bg-white text-[#050A4E]"
            
              `}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <ScrollBar orientation="horizontal" className="invisible" />
            </ScrollArea>
        </div>
    )
}