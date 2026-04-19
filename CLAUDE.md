# MailLighter — site et hébergement de l'add-in Outlook

Site Astro publié sur GitHub Pages (domaine `maillighter.com`). Le dossier `public/` est recopié tel quel à la racine du site à la build : tout fichier sous `public/x` est servi à `https://maillighter.com/x`.

Ce dépôt héberge **aussi** les fichiers statiques de l'add-in Outlook MailLighter (manifeste + pages taskpane/commands + icônes + locales). Ces fichiers sont référencés **uniquement** depuis `public/manifest.xml`, jamais importés depuis le code TypeScript/Astro du site.

## Nettoyage et fichiers orphelins

Lorsqu'on nettoie le projet ou qu'on cherche des fichiers orphelins (fichiers non atteints par une chaîne d'imports depuis `src/`), `public/manifest.xml` doit être traité comme **une seconde racine de référence**, au même titre que `src/` et les pages Astro.

Avant toute suppression de fichier sous `public/` :

1. **Parser `public/manifest.xml`** et extraire toutes les URL et chemins qu'il contient, en particulier via les attributs :
   - `DefaultValue` (notamment sur `SourceLocation`, `Url`, `IconUrl`, `HighResolutionIconUrl`, `SupportUrl`)
   - `resid` résolus via `<Resources>` → `bt:Url` / `bt:Image` / `bt:ShortString` / `bt:LongString`
   - toute URL `https://maillighter.com/...` → la mapper vers le chemin `public/...` correspondant.
2. **Respecter `public/.orphanignore`** (format glob, type `.gitignore`). Tout fichier matchant un de ses patterns est considéré comme vivant.
3. **Ne jamais supprimer** `public/manifest.xml` ni un fichier qu'il référence, ni un fichier matchant `.orphanignore`, sans confirmation explicite de l'utilisateur.

Les icônes de l'add-in seront placées sous `public/addin/assets/` (couvert par `addin/**` dans `.orphanignore`). Il n'y a pas de dossier `public/images/` destiné à l'add-in.

## Soumission AppSource (contexte)

Le produit vise un listing Microsoft AppSource. Contraintes à garder en tête lors de modifications du manifeste ou de l'arborescence `public/addin/` :

- toutes les URL du manifeste doivent être en **HTTPS** et pointer vers des domaines déclarés dans `<AppDomains>` ;
- icônes requises aux tailles **16, 32, 64, 80, 128** au minimum ;
- `manifest.xml` doit passer `npx office-addin-manifest validate public/manifest.xml` avant soumission.
