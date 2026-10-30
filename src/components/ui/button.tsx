import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Slot } from "radix-ui"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2.5 rounded-sm font-sans font-normal tracking-[0.04em] whitespace-nowrap transition-colors duration-300 ease-haeven outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-poudre text-anthracite hover:bg-poudre-fonce",
        deep: "bg-bleu-gris text-ivoire hover:bg-bleu-gris-fonce",
        outline: "border border-filet bg-transparent text-foreground hover:bg-bleu-3",
        ghost: "text-inherit hover:bg-bleu-3/60",
      },
      size: {
        default: "min-h-12 px-[30px] text-[15px]",
        sm: "min-h-11 px-5 text-sm",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
