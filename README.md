# Dovychovat audio kurzy

Jednoduchá Next.js aplikace pro přehrávání zvukových nahrávek rozdělených do kurzů. Domovská stránka nabízí přehled kurzů, po rozkliknutí lze přehrávat jednotlivé MP3 soubory, číst popisky a stahovat je pro offline poslech.

## Jak začít

```bash
npm install
npm run dev
```

Aplikace poběží na adrese [http://localhost:3000](http://localhost:3000). Zdrojové soubory jsou v adresáři `src/app`, data o kurzech v `src/lib/courses.ts`.

## Úprava kurzů a epizod

- Každý kurz je objekt se `slug`, `title`, `description` a polem `lessons`.
- Lekce obsahují `title`, `audioUrl`, volitelný `description` a `duration`.
- Stačí upravit nebo přidat položky v `src/lib/courses.ts` a uložit – díky Hot Reload se změny okamžitě projeví.

Pokud chcete oddělit data do externího souboru (JSON, CMS), můžete místo statického importu načítat data přes API route nebo vlastní datovou vrstvu.

## Kam nahrávat MP3 soubory

Pro několik stovek MB dobře fungují zdarma tyto varianty:

1. **Cloudflare R2 (Free Tier)** – 10 GB úložiště zdarma, generuje veřejné URL. Stačí vytvořit bucket, povolit veřejný přístup a URL vložit do `audioUrl`. 
2. **Supabase Storage (Free Tier)** – 1 GB prostoru, jednoduché webové UI i API. Po vytvoření projektu nastavte veřejný bucket a soubory nahrajte přes jejich dashboard.
3. **GitHub Releases** – pro jednotlivé nahrávky do desítek MB můžete soubory přiložit k Release. GitHub poskytuje přímé odkazy, vhodné spíš pro menší počty souborů.

Pokud potřebujete soubory soukromě, zvažte generování podepsaných URL (Cloudflare/Supabase to umí) a doplnění jednoduché autentizace v Next.js (např. pomocí middleware nebo služby jako Clerk/NextAuth).

## Nasazení

Aplikaci lze snadno nasadit na [Vercel](https://vercel.com/) – stačí připojit Git repozitář. Případně můžete použít Docker či libovolný hosting, který podporuje Node.js (doporučená verze ≥ 18.18).

## Další kroky

- Přidání CMS rozhraní pro pohodlné zadávání kurzů.
- Napojení na privátní úložiště s přístupem přes token.
- Doplnění analytiky nebo jednoduchého „poslední přehraná epizoda“ pomocí localStorage.
