"use client";

import Image from "next/image";
import { useState } from "react";

export function ItemVisual({
  emoji,
  gradient,
  imageUrl,
  imageAlt,
  label,
  className = "",
  aspectClassName = "aspect-[4/3]",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
}: {
  emoji: string;
  gradient: string;
  imageUrl: string;
  imageAlt: string;
  label: string;
  className?: string;
  aspectClassName?: string;
  sizes?: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative grid place-items-center overflow-hidden bg-gradient-to-br ${gradient} ${aspectClassName} ${className}`}>
      {!failed && imageUrl ? (
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          unoptimized
          sizes={sizes}
          className="object-cover transition-transform duration-500 hover:scale-105"
          onError={() => setFailed(true)}
        />
      ) : (
        <>
          <div className="absolute inset-0 afro-pattern opacity-60" />
          <span className="relative text-6xl" role="img" aria-label={label}>
            {emoji}
          </span>
        </>
      )}
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-cocoa/10" />
    </div>
  );
}
