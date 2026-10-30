import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Photo } from "@/lib/media";

interface MediaProps {
  photo?: Photo;
  alt: string;
  // Aplat de bleu affiché sous la photo ou à sa place.
  tone: string;
  sizes: string;
  className?: string;
  fit?: string;
}

// Emplacement d'image : la photo si elle existe, sinon l'aplat de bleu. Le zoom lent suit le survol du parent .group.
export function Media({ photo, alt, tone, sizes, className, fit = "object-cover" }: MediaProps) {
  return (
    <div
      className={cn("relative overflow-hidden", className)}
      {...(photo ? {} : { role: "img", "aria-label": alt })}
    >
      <div
        className={cn(
          "absolute inset-0 transition-transform duration-1200 ease-haeven group-hover:scale-105 group-focus-visible:scale-105",
          tone,
        )}
      >
        {photo ? <Image src={photo.src} width={photo.width} height={photo.height} alt={alt} sizes={sizes} className={cn("size-full", fit)} style={{ objectPosition: photo.position }} /> : null}
      </div>
    </div>
  );
}
