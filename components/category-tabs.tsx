"use client";

export function CategoryTabs<T extends string>({
  categories,
  active,
  onChange,
  allLabel = "Tout",
  getLabel = (category) => String(category)
}: {
  categories: T[];
  active: T | "Tout";
  onChange: (category: T | "Tout") => void;
  allLabel?: string;
  getLabel?: (category: T) => string;
}) {
  return (
    <div className="-mx-4 mb-5 flex gap-2 overflow-x-auto px-4 pb-2 md:mx-0 md:px-0">
      {(["Tout", ...categories] as Array<T | "Tout">).map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onChange(category)}
          className={`h-12 shrink-0 rounded-lg px-4 text-sm font-black ${
            active === category ? "bg-cocoa text-cream shadow-button" : "border border-cocoa/10 bg-white text-cocoa"
          }`}
        >
          {category === "Tout" ? allLabel : getLabel(category)}
        </button>
      ))}
    </div>
  );
}
