# Rapport SEO FatouShop

Date : 27 octobre 2026. Domaine officiel : https://fatoushop.vercel.app.
Travail effectué sur le projet existant. Aucun push ni déploiement.

## Audit initial

- Le layout utilisait un ancien domaine Vercel dans metadataBase et le JSON-LD.
- Les pages héritaient du même titre et de la même description.
- Absence de canonical par page, sitemap, robots.txt, Open Graph et Twitter Card.
- Pas de noindex dédié à l'administration, au panier et aux confirmations.
- Langues FR/EN/TR gérées côté client par localStorage ; pas d'URL linguistique.
- Hero distante non optimisée, avec plusieurs redirections Wikimedia.
- Carrousel automatique sans gestion de prefers-reduced-motion.
- Aucune configuration de vérification Google Search Console trouvée dans les sources.
  L'existence d'une propriété Search Console dans le compte du propriétaire n'est pas vérifiée.

## Corrections

- Domaine centralisé dans lib/seo.ts et utilisé pour canonical, sitemap,
  robots.txt, JSON-LD, Open Graph, image sociale et Twitter Card.
- Métadonnées françaises uniques sur chacune des huit pages publiques, fournies
  par des layouts serveur : elles existent dans le HTML sans JavaScript client.
- Sitemap natif Next.js, uniquement avec les routes réelles et canoniques.
  Pas de date de modification artificielle ni de page catégorie inventée.
- robots.txt autorise les pages publiques et les ressources nécessaires au rendu.
- Admin, panier, alias panier et confirmations portent noindex, nofollow.
  Ces pages ne sont pas bloquées dans robots.txt afin que Google puisse lire noindex.
  Ce mécanisme n'est pas un contrôle d'accès et ne remplace pas une authentification.
- Aliases /products, /menu et /cart exclus du sitemap ; redirections existantes conservées.
- Un seul établissement identifié par un @id stable : LocalBusiness, Restaurant,
  Store. Ville Izmir, pays TR, téléphone +905317818795 et GPS confirmés conservés.
  Aucune adresse de rue, note, avis, horaire ou offre tarifaire ajouté au JSON-LD.
- BreadcrumbList ajouté aux sept pages publiques internes.
- Hero : même photo, version locale WebP 1280 x 960 de 128 056 octets,
  priorité de chargement conservée, tailles responsive et optimisation Next activées.
- Partage social : JPEG local 1200 x 630 de 103 665 octets, environ 101 Kio.
- Carrousel : optimisation Next activée, chargement différé par défaut,
  arrêt de l'autoplay pour prefers-reduced-motion, suppression du défilement
  animé et des transitions concernées dans ce mode. Pause au focus clavier.
- Défilement corrigé pour tenir compte de l'espacement entre les cartes et
  revenir au début lorsque la fin visible du carrousel est atteinte.
- Vérification Search Console préparée avec GOOGLE_SITE_VERIFICATION, optionnelle.

## Pages indexables

1. https://fatoushop.vercel.app/
2. https://fatoushop.vercel.app/boutique
3. https://fatoushop.vercel.app/restaurant
4. https://fatoushop.vercel.app/menu-camerounais
5. https://fatoushop.vercel.app/bar
6. https://fatoushop.vercel.app/reservation
7. https://fatoushop.vercel.app/contact
8. https://fatoushop.vercel.app/a-propos

Les produits africains et les mèches/perruques sont des catégories de /boutique,
pas des pages autonomes. Le sitemap n'invente donc pas leurs URL.

## Validation

- npm run build : réussi, avec génération de sitemap.xml et robots.txt.
- npm run lint : réussi, sans erreur.
- Tests effectués sur le build de production local, port 3025.
- /sitemap.xml : HTTP 200, XML valide affiché dans le navigateur, huit URL officielles.
- /robots.txt : HTTP 200, sitemap officiel déclaré, pas de blocage CSS/JS/images.
- Image sociale : HTTP 200, image/jpeg, dimensions 1200 x 630.
- Navigateur : titres uniques, un H1 par page publique, descriptions, canonical,
  Open Graph, Twitter Card et JSON-LD vérifiés sur les huit pages publiques.
- Admin, panier et confirmation de test : noindex présent, canonical public absent.
- Aucun hreflang ni URL linguistique annoncée.
- Panier : ajout de Ndolè, passage de 1 à 2 articles (180 à 360 TRY), suppression
  puis panier vide vérifiés. Aucune commande envoyée.
- Langues : affichage FR/EN/TR vérifié, anglais restauré après rechargement.
- Liens WhatsApp de l'accueil : numéro officiel 905317818795 vérifié.
- Hero et neuf images du carrousel : chargement effectif constaté dans le navigateur.
- Vue mobile 390 x 844 : largeur du document 390 px, pas de débordement horizontal.
  Rendu desktop également inspecté.
- prefers-reduced-motion : branchement matchMedia et nettoyage des écouteurs/timers
  revus dans le code ; aucune mesure de terrain des Core Web Vitals effectuée.

## Fichiers créés ou modifiés pour cette correction

- lib/seo.ts
- app/layout.tsx
- app/sitemap.ts
- app/robots.ts
- app/boutique/layout.tsx
- app/restaurant/layout.tsx
- app/menu-camerounais/layout.tsx
- app/bar/layout.tsx
- app/reservation/layout.tsx
- app/contact/layout.tsx
- app/a-propos/layout.tsx
- app/admin/layout.tsx
- app/panier/layout.tsx
- app/cart/layout.tsx
- app/confirmation/layout.tsx
- components/seo-breadcrumbs.tsx
- components/hero-section.tsx
- components/specialties-carousel.tsx
- public/images/ndole-hero.webp
- public/images/fatoushop-social.jpg
- public/images/credits.txt
- .env.example
- SEO-REPORT.md

Les autres modifications déjà présentes dans le répertoire ont été conservées.
Les traductions, données produits, catégories, prix et logique panier/commandes
n'ont pas été modifiés par cette correction.

## Points restant à résoudre

- Ces corrections sont locales et ne sont pas encore publiées. Les URL attendues
  après un futur déploiement sont https://fatoushop.vercel.app/sitemap.xml et
  https://fatoushop.vercel.app/robots.txt.
- Le domaine officiel répondait HTTP 200 pendant l'audit. L'ancien domaine
  tu-es-un-d-veloppeur-full-rho.vercel.app répondait HTTP 404 DEPLOYMENT_NOT_FOUND.
  Aucun domaine Vercel n'a été modifié. Si un autre alias sert le même contenu,
  configurer ultérieurement une redirection permanente 308 vers le domaine officiel.
- Les métadonnées serveur restent françaises. Google ne peut pas découvrir des
  versions EN/TR indépendantes à partir du seul choix localStorage.
- Futur multilingue recommandé : routes /fr, /en, /tr avec contenu et metadata
  rendus dans la langue de chaque URL, canonical propre, hreflang réciproques
  uniquement après publication de toutes les pages traduites, liens de langue
  explorables et sitemap adapté. Prévoir les redirections des anciennes URL.
- Le header desktop était déjà dense : un contrôle visuel à 1280 px montre le
  bouton Commander partiellement hors écran. À traiter lors d'un ajustement UI dédié.
- Les photos secondaires restent externes et dépendent de leur hébergeur.
  Les crédits de la hero locale figurent dans public/images/credits.txt.
- LCP, CLS et INP réels restent à suivre après publication avec les données CrUX
  et Search Console. Aucun score Lighthouse ni gain chiffré n'est annoncé ici.
- L'adresse postale complète et les horaires devront être ajoutés uniquement après
  confirmation. Les témoignages de démonstration existants ne sont pas utilisés
  dans les données structurées ; faire valider leur authenticité avant exploitation.
- Aucun accès confirmé à Google Search Console ; ni propriété validée ni sitemap soumis.

## Google Search Console : étapes manuelles après publication

1. Ajouter une propriété « Préfixe d'URL » : https://fatoushop.vercel.app.
2. Choisir la vérification par balise HTML. Copier uniquement la valeur content
   fournie par Google dans la variable GOOGLE_SITE_VERIFICATION de l'environnement
   de production, puis publier lors du déploiement autorisé suivant. Si une
   vérification existe déjà côté Google, conserver son mécanisme et son jeton.
3. Cliquer sur Vérifier dans Search Console une fois la balise visible en production.
4. Soumettre https://fatoushop.vercel.app/sitemap.xml dans Sitemaps.
5. Inspecter https://fatoushop.vercel.app/ et demander son indexation.
6. Contrôler les rapports Pages et Core Web Vitals. Tester le JSON-LD dans le test
   des résultats enrichis Google et les aperçus sociaux après publication.

Références :
- https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
- https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites

Aucune indexation, position Google ou apparition enrichie n'est garantie.
