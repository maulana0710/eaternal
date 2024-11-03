
import { cn } from "@/lib/utils"

import { Card } from "./ui/card"

type CardProps = React.ComponentProps<typeof Card>

export function CardComponent({ className, children, ...props }: CardProps) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      {children}
    </Card>
  )
}
