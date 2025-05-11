import * as React from "react"
import { cn } from "@/lib/utils"

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple"
}

function Accordion({ className, ...props }: AccordionProps) {
  return <div className={cn("accordion", className)} {...props} />
}

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

function AccordionItem({ className, ...props }: AccordionItemProps) {
  return <div className={cn("accordion-item border-b", className)} {...props} />
}

interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function AccordionTrigger({ className, ...props }: AccordionTriggerProps) {
  const [open, setOpen] = React.useState(false)
  return (
    <button
      className={cn(
        "flex items-center justify-between w-full px-4 py-3 bg-white rounded-lg shadow text-lg font-bold text-[#102947] mb-2 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#102947]",
        className
      )}
      aria-expanded={open}
      onClick={() => setOpen((prev) => !prev)}
      {...props}
    >
      <span className="flex-1 text-center">{props.children}</span>
      <svg
        className={cn("ml-2 w-6 h-6 text-[#102947] transition-transform", open ? "rotate-45" : "rotate-0")}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    </button>
  )
}

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {}

function AccordionContent({ className, ...props }: AccordionContentProps) {
  return <div className={cn("accordion-content pb-4 px-2", className)} {...props} />
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent } 