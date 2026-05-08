import { ImageIcon } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

export function ImagePlaceholder({
  ratio = 16 / 9,
  label,
  className,
  rounded = "lg",
}: {
  ratio?: number;
  label?: string;
  className?: string;
  rounded?: "none" | "md" | "lg" | "xl" | "full";
}) {
  const roundedClass = {
    none: "",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  }[rounded];

  return (
    <AspectRatio
      ratio={ratio}
      className={cn(
        "flex items-center justify-center overflow-hidden bg-muted text-muted-foreground ring-1 ring-foreground/10",
        "[background-image:repeating-linear-gradient(45deg,transparent,transparent_10px,color-mix(in_oklab,var(--foreground)_3%,transparent)_10px,color-mix(in_oklab,var(--foreground)_3%,transparent)_20px)]",
        roundedClass,
        className,
      )}
      aria-label={label ?? "Image placeholder"}
      role="img"
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <ImageIcon className="size-6 opacity-60" />
        {label ? (
          <span className="text-xs font-medium uppercase tracking-wide opacity-70">
            {label}
          </span>
        ) : null}
      </div>
    </AspectRatio>
  );
}
