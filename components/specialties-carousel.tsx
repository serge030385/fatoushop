"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { MessageCircle } from "lucide-react";
import { formatTry, whatsappUrl } from "@/lib/format";
import { commonsImage } from "@/lib/media";
import { useI18n } from "@/lib/i18n";

const specialties = [
  {
    id: "ndole",
    priceTry: 320,
    imageUrl: commonsImage("Plat de Ndolè avec Plantains Tapés Frits +Poisson Frit.jpg"),
    imageAlt: "Ndolè camerounais avec poisson et plantain"
  },
  {
    id: "poisson-braise",
    priceTry: 420,
    imageUrl: commonsImage("Le poisson braisé.jpg"),
    imageAlt: "Poisson braisé africain"
  },
  {
    id: "poulet-dg",
    priceTry: 350,
    imageUrl: commonsImage("Poulet DG.JPG"),
    imageAlt: "Poulet DG camerounais"
  },
  {
    id: "plantain-frit",
    priceTry: 95,
    imageUrl: commonsImage("Fried plantains.jpg"),
    imageAlt: "Plantain frit doré"
  },
  {
    id: "riz-arachide",
    priceTry: 270,
    imageUrl: commonsImage("Peanut sauce with rice.jpg"),
    imageAlt: "Riz sauce arachide africain"
  },
  {
    id: "attieke-poisson",
    priceTry: 390,
    imageUrl: commonsImage("Attiéké-poisson.jpg"),
    imageAlt: "Attiéké poisson africain"
  },
  {
    id: "grillades-africaines",
    priceTry: 310,
    imageUrl: commonsImage("Brochette de viande africaine.jpg"),
    imageAlt: "Grillades africaines en brochettes"
  },
  {
    id: "alloco",
    priceTry: 140,
    imageUrl: commonsImage("Fried plantain alloco.jpg"),
    imageAlt: "Alloco plantain frit"
  },
  {
    id: "mafe",
    priceTry: 290,
    imageUrl: commonsImage("Maafé.jpg"),
    imageAlt: "Mafé sauce arachide"
  }
] as const;

export function SpecialtiesCarousel() {
  const { t, language } = useI18n();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setActive((current) => {
        const next = (current + 1) % specialties.length;
        scrollToCard(next);
        return next;
      });
    }, 3600);
    return () => window.clearInterval(timer);
  }, [paused]);

  function scrollToCard(index: number) {
    const scroller = scrollerRef.current;
    const card = scroller?.children.item(index) as HTMLElement | null;
    if (!scroller || !card) return;
    scroller.scrollTo({ left: card.offsetLeft - 16, behavior: "smooth" });
  }

  function selectCard(index: number) {
    setActive(index);
    scrollToCard(index);
  }

  return (
    <section className="px-4 py-8 md:px-6 md:py-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-palm">FatouShop</p>
            <h2 className="mt-2 text-3xl font-black tracking-normal text-cocoa md:text-5xl">
              {t.pages.home.specialtiesTitle}
            </h2>
          </div>
          <div className="hidden gap-2 md:flex">
            {specialties.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => selectCard(index)}
                className={`h-2.5 rounded-full transition-all ${active === index ? "w-8 bg-orange" : "w-2.5 bg-cocoa/20"}`}
                aria-label={`${t.pages.home.specialtiesGoTo} ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div
          ref={scrollerRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onScroll={(event) => {
            const target = event.currentTarget;
            const width = target.firstElementChild?.clientWidth || 1;
            setActive(Math.round(target.scrollLeft / width) % specialties.length);
          }}
          className="-mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-3 scroll-smooth [scrollbar-width:none] md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden"
        >
          {specialties.map((item) => {
            const copy = t.pages.home.specialties[item.id];
            const orderMessage = `${t.whatsappMessages.order}\n${t.whatsappMessages.dishLabel}: ${copy.name}`;
            return (
              <article
                key={item.id}
                className="min-h-[28rem] w-[84%] flex-none snap-start overflow-hidden rounded-lg border border-cocoa/10 bg-white shadow-soft sm:w-[48%] lg:w-[31.5%]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-cocoa via-earth to-orange">
                  {!failedImages[item.id] ? (
                    <Image
                      src={item.imageUrl}
                      alt={item.imageAlt}
                      fill
                      unoptimized
                      sizes="(max-width: 640px) 84vw, (max-width: 1024px) 48vw, 32vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      onError={() => setFailedImages((current) => ({ ...current, [item.id]: true }))}
                    />
                  ) : (
                    <div className="absolute inset-0 grid place-items-center text-6xl">
                      <div className="absolute inset-0 afro-pattern opacity-25" />
                      <span className="relative" role="img" aria-label={item.imageAlt}>🍽️</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-cocoa/45 to-transparent" />
                </div>
                <div className="space-y-3 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-black text-cocoa">{copy.name}</h3>
                    <p className="shrink-0 text-lg font-black text-palm">{formatTry(item.priceTry, language)}</p>
                  </div>
                  <p className="min-h-16 text-sm leading-6 text-charcoal/70">{copy.description}</p>
                  <a
                    href={whatsappUrl(orderMessage)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-cocoa px-4 font-black text-cream shadow-button"
                  >
                    <MessageCircle className="h-5 w-5" />
                    {t.pages.home.specialtiesOrder}
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
