# FatouShop

Site web mobile-first pour **FatouShop**, boutique africaine + restaurant/bar camerounais à Izmir, Turquie.

Le MVP fonctionne sans base de données: les produits, plats, boissons, commandes fictives et disponibilités admin sont gérés localement côté client. La structure est prévue pour remplacer facilement les fichiers locaux par une API ou une intégration future avec **Afro Izmir Hub**.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Données locales de démonstration
- Panier côté client avec `localStorage`
- Traductions FR / EN / TR avec persistance `localStorage`
- WhatsApp via liens `wa.me`
- Aucun paiement en ligne

## Pages

- `/` Accueil
- `/boutique` Boutique
- `/restaurant` Restaurant
- `/menu-camerounais` Menu camerounais
- `/menu` Redirection vers le menu camerounais
- `/bar` Bar & boissons
- `/panier` Commande / panier
- `/cart` Redirection vers le panier
- `/reservation` Réservation
- `/contact` Contact WhatsApp
- `/a-propos` À propos
- `/admin` Admin local simple

## Données locales

Les données MVP sont dans:

- [lib/products.ts](/Users/sergengatchou/Documents/Codex/2026-04-30/tu-es-un-d-veloppeur-full/lib/products.ts)
- [lib/dishes.ts](/Users/sergengatchou/Documents/Codex/2026-04-30/tu-es-un-d-veloppeur-full/lib/dishes.ts)
- [lib/drinks.ts](/Users/sergengatchou/Documents/Codex/2026-04-30/tu-es-un-d-veloppeur-full/lib/drinks.ts)
- [lib/categories.ts](/Users/sergengatchou/Documents/Codex/2026-04-30/tu-es-un-d-veloppeur-full/lib/categories.ts)

Les visuels utilisent des images réalistes référencées depuis Wikimedia Commons avec un fallback local élégant en gradient/emoji si une image distante ne charge pas. Les URLs sont regroupées dans les fichiers de données pour faciliter un remplacement futur par les assets Afro Izmir Hub.

## Traductions

La langue par défaut est le français. Le sélecteur `FR / EN / TR` est visible dans le header et le choix est sauvegardé dans `localStorage`.

Les dictionnaires sont dans:

- [lib/translations/fr.ts](/Users/sergengatchou/Documents/Codex/2026-04-30/tu-es-un-d-veloppeur-full/lib/translations/fr.ts)
- [lib/translations/en.ts](/Users/sergengatchou/Documents/Codex/2026-04-30/tu-es-un-d-veloppeur-full/lib/translations/en.ts)
- [lib/translations/tr.ts](/Users/sergengatchou/Documents/Codex/2026-04-30/tu-es-un-d-veloppeur-full/lib/translations/tr.ts)

La couche i18n et les fallbacks français sont centralisés dans [lib/i18n.ts](/Users/sergengatchou/Documents/Codex/2026-04-30/tu-es-un-d-veloppeur-full/lib/i18n.ts).

## Installation

```bash
npm install
cp .env.example .env.local
npm run dev
```

Ouvrir `http://localhost:3000`.

## Variables d’environnement

```bash
NEXT_PUBLIC_WHATSAPP_NUMBER=905376781196
NEXT_PUBLIC_AFRO_IZMIR_HUB_URL=https://afroizmirhub.example
```

## Déploiement Vercel

1. Pousser le projet sur GitHub.
2. Importer le dépôt dans Vercel.
3. Ajouter `NEXT_PUBLIC_WHATSAPP_NUMBER=905376781196`.
4. Déployer.
5. Vérifier les pages principales et un parcours complet: boutique ou menu, panier, confirmation, WhatsApp.

## Préparation Afro Izmir Hub

La structure sépare clairement:

- Types métier: [lib/types.ts](/Users/sergengatchou/Documents/Codex/2026-04-30/tu-es-un-d-veloppeur-full/lib/types.ts)
- Données locales: `lib/products.ts`, `lib/dishes.ts`, `lib/drinks.ts`
- Formatage et WhatsApp: [lib/format.ts](/Users/sergengatchou/Documents/Codex/2026-04-30/tu-es-un-d-veloppeur-full/lib/format.ts)
- UI réutilisable: [components](/Users/sergengatchou/Documents/Codex/2026-04-30/tu-es-un-d-veloppeur-full/components)

Pour connecter Afro Izmir Hub plus tard, créer une couche `lib/api.ts` qui expose les mêmes formes de données (`Product`, `Dish`, `Drink`) puis remplacer les imports de données locales dans les pages.

## Prochaines améliorations

- Synchroniser produits/plats avec une API Afro Izmir Hub.
- Ajouter authentification admin réelle.
- Persister les commandes dans une base de données.
- Ajouter gestion des horaires et zones de livraison.
- Ajouter upload d’images réelles.
- Envoyer les commandes vers WhatsApp Business ou un CRM.
