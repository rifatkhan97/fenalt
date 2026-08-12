# FENALT — EDITORIAL PROGRESS LOG

**Last Updated**: August 12, 2026  
**Phase**: Phase 1 Complete — Review in Progress  
**Next Action**: Awaiting editorial approval before Phase 2 begins

---

> [!IMPORTANT]
> This file must be updated every time articles are created, revised, merged, rejected, or deployed.  
> Do NOT create Phase 2 articles until Phase 1 articles have been approved and this file is updated.

---

## DEPLOYMENT STATUS: PHASE 1

| Layer | Status |
|---|---|
| **Written & committed locally** | ✅ All 20 articles |
| **Build passes** (`npm run build`) | ✅ 96 static pages, 0 errors |
| **TypeScript passes** | ✅ No type errors |
| **Committed to Git** | ✅ Staged (not yet committed as of last session) |
| **Pushed to GitHub** | ⚠️ Unconfirmed — user pushed prior batches; Phase 1 not confirmed pushed |
| **Deployed to production (fenalt.com)** | ❌ NOT CONFIRMED — do not describe as "published" or "live" |

> [!WARNING]
> `git status` as of August 12, 2026 showed `app/learn/` as **Untracked files** and `app/resources/page.tsx` + `app/sitemap.ts` as modified but not staged. These changes have NOT been committed or pushed yet.

---

## PHASE 1 — COMPLETED ARTICLES (20/20)

| # | Article | URL | Status | Build | Bug |
|---|---|---|---|---|---|
| 1 (roadmap #1) | How Clothing Manufacturing Works | `/learn/how-clothing-manufacturing-works` | REVIEW | ✅ | None |
| 2 (roadmap #21) | What Is a Tech Pack | `/learn/what-is-a-tech-pack` | REVIEW | ✅ | None |
| 3 (roadmap #4) | Clothing Manufacturer vs Sourcing Agent | `/learn/clothing-manufacturer-vs-sourcing-agent` | REVIEW | ✅ | None |
| 4 (roadmap #33) | What Does GSM Mean in Clothing | `/learn/what-does-gsm-mean-in-clothing` | REVIEW | ✅ | None |
| 5 (roadmap #78) | What Is AQL in Apparel Quality Control | `/learn/what-is-aql-in-apparel-quality-control` | REVIEW | ✅ | None |
| 6 (roadmap #61) | What Does Low MOQ Mean | `/learn/what-does-low-moq-mean` | REVIEW | ✅ | None |
| 7 (roadmap #11) | What Is a Clothing Sample | `/learn/what-is-a-clothing-sample` | REVIEW | ✅ | None |
| 8 (roadmap #5) | How to Choose a Clothing Manufacturer | `/learn/how-to-choose-a-clothing-manufacturer` | REVIEW | ✅ | None |
| 9 (roadmap #81) | How to Find a Reliable Clothing Manufacturer | `/learn/how-to-find-a-reliable-clothing-manufacturer` | REVIEW | ✅ | None |
| 10 (roadmap #82) | Questions to Ask an Apparel Manufacturer | `/learn/questions-to-ask-an-apparel-manufacturer` | REVIEW | ✅ | None |
| 11 (roadmap #86) | Manufacturer Due Diligence Checklist | `/learn/clothing-manufacturer-due-diligence-checklist` | REVIEW | ✅ | ⚠️ **CRITICAL: `breadcrumbsJsonLd` declared after return — variable hoisting issue. Fix required.** |
| 12 (roadmap #6) | What a Manufacturer Needs From a Brand | `/learn/what-a-clothing-manufacturer-needs-from-a-brand` | REVIEW | ✅ | None |
| 13 (roadmap #65) | Startups Prepare for First Production Run | `/learn/startups-prepare-for-first-production-run` | REVIEW | ✅ | None |
| 14 (roadmap #100) | Overseas Production Checklist | `/learn/overseas-apparel-production-checklist` | REVIEW | ✅ | None |
| 15 (roadmap #52) | What Makes High-Quality Streetwear | `/learn/what-makes-high-quality-streetwear` | REVIEW | ✅ | None |
| 16 (roadmap #53) | Heavyweight Streetwear Fabrics Explained | `/learn/heavyweight-streetwear-fabrics-explained` | REVIEW | ✅ | None |
| 17 (roadmap #57) | Puff Print vs Screen Print for Streetwear | `/learn/puff-print-vs-screen-print-streetwear` | REVIEW | ✅ | None |
| 18 (roadmap #30) | Common Tech Pack Mistakes | `/learn/tech-pack-mistakes` | REVIEW | ✅ | None |
| 19 (roadmap #85) | How to Evaluate an Overseas Manufacturer | `/learn/how-to-evaluate-an-overseas-clothing-manufacturer` | REVIEW | ✅ | None |
| 20 (roadmap #9) | Clothing Manufacturing Timeline | `/learn/clothing-manufacturing-timeline` | REVIEW | ✅ | None |

---

## PHASE 1 — ISSUES REQUIRING FIXES

### BUG-001 — CRITICAL: `breadcrumbsJsonLd` variable scoping
- **File**: `app/learn/clothing-manufacturer-due-diligence-checklist/page.tsx`
- **Issue**: `breadcrumbsJsonLd` is declared as a module-level `const` **after** the `export default function` block. In JavaScript, `const` is not hoisted, so this variable is referenced inside the function body before its declaration (temporal dead zone). The build passes because Next.js/TypeScript compilation hoists module-level declarations, but this is an anti-pattern and semantically incorrect.
- **Fix**: Move `breadcrumbsJsonLd` declaration to inside the component function, before the return statement, consistent with all other articles.
- **Priority**: HIGH — fix before committing

### ISSUE-002 — MINOR: Inconsistent canonical URL format
- **Issue**: Some articles use `alternates: { canonical: "..." }` and some use `alternates: { canonical: "..." }` nested inside `alternates: {}`. All are functionally correct as Next.js accepts both patterns, but the format is inconsistent across articles.
- **Fix**: Standardise to the flat `alternates: { canonical: "..." }` pattern in next Phase 2 batch template.
- **Priority**: LOW

### ISSUE-003 — RECOMMENDATION: Article #6 missing startup-specific section
- **Context**: Roadmap decision specifies that #69 (What Does a Clothing Manufacturer Need From a Startup?) should be MERGED into #6. Currently #6 is generic. A startup-specific section should be added before Phase 2 begins.
- **Fix**: Add a "What startups specifically need to know" callout section to `what-a-clothing-manufacturer-needs-from-a-brand/page.tsx`.
- **Priority**: MEDIUM

### ISSUE-004 — RECOMMENDATION: `how-to-choose-a-clothing-manufacturer` internal link points to non-existent page
- **File**: `app/learn/how-to-choose-a-clothing-manufacturer/page.tsx`
- **Issue**: Contains a link to `/learn/clothing-manufacturer-due-diligence-checklist` — this page EXISTS. Also links to `/learn/warning-signs-of-poor-apparel-manufacturer` which does NOT exist yet (roadmap #89, PLANNED).
- **Status**: Link to non-existent page is acceptable for PLANNED content — standard forward-linking practice. But should be tracked.
- **Priority**: LOW — monitor; fix when #89 is created

### ISSUE-005 — FORWARD LINKS TO UNBUILT PAGES (across multiple articles)
- Multiple articles contain `<Link>` elements to `/learn/` URLs that have not yet been built (e.g. `/learn/types-of-apparel-samples`, `/learn/how-many-units-for-new-fashion-brand`, `/learn/low-moq-vs-bulk-manufacturing`, etc.).
- In Next.js, these will not 404 from link components alone — they will 404 when a user tries to navigate to them. This is expected and acceptable for PLANNED content.
- **Fix**: As each article is built, internal links from existing articles pointing to it will activate correctly.
- **Priority**: ACCEPTABLE — track per batch

---

## PHASE 1 — ARTICLES REQUIRING REVISION

| Article | Issue | Priority | Status |
|---|---|---|---|
| Due Diligence Checklist | `breadcrumbsJsonLd` variable declared after return — BUG-001 | HIGH | PENDING FIX |
| What a Manufacturer Needs From a Brand | Missing startup merge content (ISSUE-003) | MEDIUM | PENDING |

---

## PHASE 1 — MERGED ARTICLES

| Roadmap # | Title | Merged Into | Status |
|---|---|---|---|
| 20 | Apparel Product Development: A Beginner's Guide | #7 (`/learn/apparel-production-process-explained`) | MERGED — content to be incorporated when #7 is created |
| 59 | How to Build a Small Streetwear Collection | #51 (`/learn/how-to-manufacture-a-streetwear-collection`) | MERGED — content to be incorporated when #51 is created |
| 69 | What Does a Clothing Manufacturer Need From a Startup? | #6 (`/learn/what-a-clothing-manufacturer-needs-from-a-brand`) | PARTIALLY MERGED — startup section to be added |
| 96 | Apparel Sourcing in Bangladesh: A Beginner's Guide | #91 (`/learn/how-apparel-manufacturing-in-bangladesh-works`) | MERGED — content to be incorporated when #91 is created |

---

## PHASE 1 — REJECTED ARTICLES

| Roadmap # | Title | Reason |
|---|---|---|
| 67 | Clothing Manufacturing for Small Fashion Brands | Adequately covered by existing commercial pages |
| 92 | Why Fashion Brands Source Clothing From Bangladesh | Substantially covered by `/why-manufacture-apparel-in-bangladesh` |
| 93 | Bangladesh vs China for Apparel Manufacturing | Exact duplicate of `/bangladesh-vs-china-garment-manufacturing` |
| 94 | Bangladesh vs Vietnam for Apparel Manufacturing | Exact duplicate of `/bangladesh-vs-vietnam-garment-manufacturing` |

---

## PHASE 2 — NEXT BATCH (NOT STARTED)

**Phase 2 is BLOCKED until:**
1. ☐ Phase 1 editorial review completed and approved by site owner
2. ☐ BUG-001 fixed (breadcrumbsJsonLd in checklist page)
3. ☐ Phase 1 committed and pushed to GitHub
4. ☐ Production deployment confirmed (or conscious decision that REVIEW is sufficient to proceed)
5. ☐ ISSUE-003 resolved (startup merge into #6)

**Recommended Phase 2 articles** (in approximate priority order, subject to editorial approval):
- #8: What Happens Between a Tech Pack and Bulk Production
- #22: What Should Be Included in a Clothing Tech Pack
- #26: Points of Measure in Garment Manufacturing
- #51: How to Manufacture a Streetwear Collection (incorporating #59 merge)
- #60: Common Streetwear Manufacturing Mistakes
- #63: How Many Units Should a New Fashion Brand Produce
- #64: Low MOQ vs Bulk Manufacturing
- #66: How to Reduce Risk When Launching a Clothing Collection
- #70: How to Scale Clothing Production
- #71: Apparel Quality Control Explained
- #72: What Should Be Checked During Clothing Production
- #75: Final Inspection for Finished Garments
- #76: Common Clothing Quality Problems
- #80: How to Reduce Defects in Apparel Production
- #84: What Should Be Included in an Apparel Manufacturing Quote
- #87: Direct Manufacturer vs Sourcing Agent
- #89: Warning Signs of a Poor Apparel Manufacturing Partner
- #98: What Happens After Clothing Is Manufactured Overseas

---

## AUDIT LOG

| Date | Action | Notes |
|---|---|---|
| 2026-08-12 | Phase 1 articles created (1–20) | All 20 articles written and built |
| 2026-08-12 | Sitemap updated | 20 `/learn/` routes added to `app/sitemap.ts` |
| 2026-08-12 | Resources page updated | Educational Library section added |
| 2026-08-12 | Build verified | `npm run build` — 96 pages, 0 errors |
| 2026-08-12 | Phase 1 audit completed | 1 bug found (BUG-001), 4 issues logged |
| 2026-08-12 | Roadmap saved to `/docs/editorial_roadmap.md` | Count reconciled: CREATE=88, MERGE=4, REJECT=4 |
| 2026-08-12 | Progress log created | `/docs/editorial_progress.md` |
