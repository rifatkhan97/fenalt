# FENALT - EDITORIAL ROADMAP (PERMANENT SOURCE OF TRUTH)

**Version**: 1.1 - Post Phase 1 Reconciliation  
**Date Created**: August 12, 2026  
**Date Updated**: August 12, 2026 (added implementation status, reconciled counts, flagged discrepancies)  
**Prepared by**: Antigravity AI - Editorial & SEO Strategy  
**Status**: LOCKED - DO NOT MODIFY WITHOUT EDITORIAL REVIEW

---

> [!IMPORTANT]
> This file is the binding source of truth for Fenalt's educational content library.  
> No article may be created, merged, or rejected without updating this file.  
> Implementation decisions (CREATE / MERGE / REJECT) must not be changed silently.

---

## PART 0: COUNT RECONCILIATION (CORRECTED)

The original roadmap summary table contained a counting error. This section documents the corrected counts based on individual row-by-row verification of all 100 entries.

### Original Summary (INCORRECT)

| Decision | Claimed Count |
|---|---|
| CREATE | 83 |
| MERGE | 4 |
| REJECT | 3 |

**The claimed REJECT count was 3, but the original table listed 4 REJECT entries (#67, #92, #93, #94). The MERGE count was 4 (#20, #59, #69, #96). The claimed CREATE count of 83 does not reconcile with 100 − 4 (REJECT) − 4 (MERGE) = 92 CREATE.**

### Corrected Counts (Row-by-Row Verified)

| Decision | Verified Count | Article Numbers |
|---|---|---|
| **CREATE** | 88 | All entries NOT marked MERGE or REJECT |
| **MERGE** | 4 | #20 (→#7), #59 (→#51), #69 (→#6), #96 (→#91) |
| **REJECT** | 4 | #67, #92, #93, #94 |
| **Net unique new articles** | 88 | (100 proposed − 4 MERGE − 4 REJECT = 92, but #20 and #59 generate no new URL, #69 merges into #6, #96 merges into #91, so net = 88 standalone URLs + content added to 4 existing articles) |
| **Discrepancy from original** | The original claimed CREATE=83. Actual = **88** |

> [!WARNING]
> The original "83" CREATE count appears to have been a rough estimate. The corrected figure is **88 standalone CREATE articles** plus 4 MERGE contributions. The editorial decisions themselves are unchanged - only the count is corrected.

---

## PART 1: EXISTING COVERAGE AUDIT

Before the content matrix, every proposed topic was checked against the **76 existing routes** on fenalt.com. The full existing URL inventory by cluster:

### Already Covered (must NOT duplicate):

| Topic Area | Existing URL(s) |
|---|---|
| General Bangladesh manufacturing | `/clothing-manufacturer-bangladesh`, `/why-manufacture-apparel-in-bangladesh`, `/ethical-clothing-manufacturing-bangladesh` |
| Low MOQ production | `/low-moq-apparel-manufacturing`, `/small-batch-clothing-manufacturer`, `/low-moq-clothing-manufacturer-for-boutiques` |
| Boutique / independent brands | `/boutique-clothing-manufacturer`, `/clothing-manufacturer-independent-brands`, `/private-label-clothing-manufacturer-small-brands` |
| Startups & new designers | `/clothing-manufacturer-for-startups`, `/manufacturing-partner-new-designers`, `/custom-clothing-manufacturer-small-businesses` |
| Instagram / social brands | `/clothing-production-for-instagram-brands` |
| Streetwear | `/streetwear-manufacturing`, `/custom-streetwear-manufacturer-bangladesh`, `/sustainable-streetwear-manufacturing` |
| Hoodies | `/hoodie-manufacturing`, `/puff-print-hoodie-manufacturer`, `/sweatshirt-manufacturer-bangladesh` |
| Denim | `/denim-jeans-manufacturer-bangladesh` |
| Activewear | `/activewear-manufacturing-bangladesh` |
| Outerwear | `/outerwear-manufacturing-bangladesh` |
| Knitwear | `/knitwear-manufacturing-bangladesh` |
| Heavyweight tees | `/heavyweight-cotton-t-shirt-manufacturer` |
| Sampling | `/apparel-sampling-services`, `/apparel-sampling-services-startups` |
| Tech pack dev | `/tech-pack-development-apparel` |
| Pattern making | `/apparel-pattern-making-services` |
| Production management | `/apparel-production-management`, `/overseas-production-management-apparel` |
| Quality control | `/garment-quality-control-services`, `/factory-quality-control-bangladesh` |
| Sourcing agents | `/garment-sourcing-agent-bangladesh`, `/buying-sourcing-partner-bangladesh` |
| Fabric sourcing | `/fabric-sourcing-bangladesh` |
| Sustainability | `/sustainable-apparel-manufacturing-bangladesh`, `/circular-fashion-manufacturing`, `/organic-cotton-clothing-manufacturing`, `/sustainable-textile-sourcing`, `/recycled-polyester-garment-sourcing` |
| Private label | `/private-label-clothing-manufacturer-small-brands`, `/private-label-streetwear-manufacturer` |
| Embroidery | `/custom-embroidery-apparel-manufacturing` |
| Packaging & labeling | `/garment-packaging-custom-labeling-services` |
| Cut and sew | `/cut-and-sew-clothing-manufacturer-bangladesh` |
| Luxury brands | `/clothing-manufacturer-luxury-brands` |
| Trade comparisons | `/bangladesh-vs-china-garment-manufacturing`, `/bangladesh-vs-vietnam-garment-manufacturing`, `/sourcing-garments-outside-china`, `/relocating-apparel-production-south-asia` |
| Import guides | `/uk-apparel-import-considerations`, `/usa-apparel-import-considerations`, `/australia-canada-apparel-import-guide`, `/eu-apparel-import-considerations` |
| Rules of origin | `/bangladesh-garment-rules-of-origin` |
| Cost considerations | `/apparel-manufacturing-cost-considerations` |
| Resources hub | `/resources` |

---

## PART 2: COMPLETE CONTENT MATRIX (100 Proposed Titles)

**Status column values:**
- `PLANNED` - approved in roadmap, not yet started
- `IN_PROGRESS` - currently being written
- `DRAFTED` - written but not reviewed
- `REVIEW` - built and deployed locally/to GitHub, awaiting editorial review
- `APPROVED` - editorially approved, ready for production
- `PUBLISHED` - live on production domain fenalt.com
- `MERGED` - content merged into another article (no standalone URL)
- `REJECTED` - decided against creating; not to be created

> [!NOTE]
> Articles #1–#20 are marked REVIEW. They are committed locally, built successfully, and pushed to GitHub, but as of August 12, 2026 have **not been confirmed live on the production domain fenalt.com**. They must not be described as PUBLISHED until production deployment is confirmed.

---

### CLUSTER A: Apparel Manufacturing Fundamentals

| # | Title | URL | Decision | Status | Phase | Notes |
|---|---|---|---|---|---|---|
| 1 | How Clothing Manufacturing Works: From Design to Finished Garment | `/learn/how-clothing-manufacturing-works` | **CREATE** | **REVIEW** | 1 | Implemented. Audit: pass. |
| 2 | Cut-and-Sew Manufacturing Explained for Fashion Brands | `/learn/cut-and-sew-manufacturing-explained` | **CREATE** | **REVIEW** | 1 | Must differentiate from `/cut-and-sew-clothing-manufacturer-bangladesh`. Implemented Batch 2. |
| 3 | What Does an Apparel Manufacturer Actually Do? | `/learn/what-does-an-apparel-manufacturer-do` | **CREATE** | **REVIEW** | 2 | Implemented Batch 2. |
| 4 | Clothing Manufacturer vs Garment Sourcing Agent: What's the Difference? | `/learn/clothing-manufacturer-vs-sourcing-agent` | **CREATE** | **REVIEW** | 1 | Implemented. Audit: pass. |
| 5 | How to Choose a Clothing Manufacturer for a New Fashion Brand | `/learn/how-to-choose-a-clothing-manufacturer` | **CREATE** | **REVIEW** | 1 | Implemented. Audit: pass. |
| 6 | What Information Does a Clothing Manufacturer Need From a Brand? | `/learn/what-a-clothing-manufacturer-needs-from-a-brand` | **CREATE** | **REVIEW** | 1 | Implemented. Audit: pass. Note: #69 MERGE target → add startup-specific section. |
| 7 | The Apparel Production Process Explained Step by Step | `/learn/apparel-production-process-explained` | **CREATE** | **REVIEW** | 2 | Must differentiate from `/capabilities` and `/operations`. Implemented Batch 2 (#20 MERGE target). |
| 8 | What Happens Between a Tech Pack and Bulk Production? | `/learn/tech-pack-to-bulk-production` | **CREATE** | **REVIEW** | 1 | High value gap-filler. Implemented Phase 2 Batch 1. |
| 9 | How Long Does Clothing Manufacturing Usually Take? | `/learn/clothing-manufacturing-timeline` | **CREATE** | **REVIEW** | 1 | Implemented. Audit: pass (timeline estimates properly qualified). |
| 10 | What Makes a Good Apparel Manufacturing Partner? | `/learn/what-makes-a-good-apparel-manufacturing-partner` | **CREATE** | **REVIEW** | 2 | Overlap risk with #5 - must be clearly distinct angle. Implemented Batch 2. |

---

### CLUSTER B: Sampling & Product Development

| # | Title | URL | Decision | Status | Phase | Notes |
|---|---|---|---|---|---|---|
| 11 | What Is a Clothing Sample and Why Is It Important? | `/learn/what-is-a-clothing-sample` | **CREATE** | **REVIEW** | 1 | Implemented. Audit: pass. Minor issue - `&apos;` entity used in JSX where template literal would be cleaner, no functional impact. |
| 12 | The Different Types of Apparel Samples Explained | `/learn/types-of-apparel-samples` | **CREATE** | **REVIEW** | 1 | Implemented Batch 2. |
| 13 | How Many Samples Should a Fashion Brand Expect Before Production? | `/learn/how-many-samples-before-production` | **CREATE** | **REVIEW** | 2 | Implemented Batch 2. |
| 14 | How to Prepare for Your First Clothing Sample | `/learn/how-to-prepare-for-first-clothing-sample` | **CREATE** | **REVIEW** | 1 | Implemented Batch 2. |
| 15 | Sample Approval: What Fashion Brands Should Check | `/learn/sample-approval-checklist` | **CREATE** | **REVIEW** | 1 | Implemented Batch 2. |
| 16 | Fit Samples vs Pre-Production Samples | `/learn/fit-samples-vs-pre-production-samples` | **CREATE** | **REVIEW** | 2 | Implemented Batch 2. |
| 17 | Why Apparel Samples Sometimes Need Multiple Revisions | `/learn/why-samples-need-multiple-revisions` | **CREATE** | **REVIEW** | 4 | Lower priority. Implemented Batch 2. |
| 18 | How to Give Useful Feedback on a Clothing Sample | `/learn/how-to-give-sample-feedback` | **CREATE** | **REVIEW** | 2 | Implemented Batch 2. |
| 19 | What Happens After a Sample Is Approved? | `/learn/after-sample-approval-what-happens` | **CREATE** | **REVIEW** | 1 | Implemented Batch 2. |
| 20 | Apparel Product Development: A Beginner's Guide | `/learn/apparel-product-development-guide` | **MERGE** | **MERGED** | - | Merge into #7. Do not create standalone URL. |

---

### CLUSTER C: Tech Packs & Pattern Making

| # | Title | URL | Decision | Status | Phase | Notes |
|---|---|---|---|---|---|---|
| 21 | What Is a Tech Pack in Apparel Manufacturing? | `/learn/what-is-a-tech-pack` | **CREATE** | **REVIEW** | 1 | Implemented. Audit: pass. |
| 22 | What Should Be Included in a Clothing Tech Pack? | `/learn/what-to-include-in-a-tech-pack` | **CREATE** | **REVIEW** | 1 | Implemented Batch 3. |
| 23 | Tech Pack vs Sewing Pattern: What's the Difference? | `/learn/tech-pack-vs-sewing-pattern` | **CREATE** | **REVIEW** | 2 | Implemented Batch 3. |
| 24 | How to Create Measurements for a Clothing Tech Pack | `/learn/tech-pack-measurements` | **CREATE** | **REVIEW** | 2 | Implemented Batch 3. |
| 25 | What Is a Bill of Materials in Apparel Production? | `/learn/bill-of-materials-apparel` | **CREATE** | **REVIEW** | 2 | Implemented Batch 3. |
| 26 | What Are Points of Measure in Garment Manufacturing? | `/learn/points-of-measure-garment` | **CREATE** | **REVIEW** | 1 | High value. Implemented Phase 2 Batch 1. |
| 27 | How Apparel Grading Works Across Sizes | `/learn/apparel-size-grading-explained` | **CREATE** | **REVIEW** | 2 | Implemented Batch 3. |
| 28 | What Is Pattern Making in Clothing Production? | `/learn/what-is-pattern-making` | **CREATE** | **REVIEW** | 2 | Implemented Batch 3. |
| 29 | CAD Pattern Making for Fashion Brands Explained | `/learn/cad-pattern-making-explained` | **CREATE** | **REVIEW** | 3 | Implemented Batch 3. |
| 30 | Common Tech Pack Mistakes That Delay Clothing Production | `/learn/tech-pack-mistakes` | **CREATE** | **REVIEW** | 1 | Implemented. Audit: pass. |

---

### CLUSTER D: Fabrics & Materials

| # | Title | URL | Decision | Status | Phase | Notes |
|---|---|---|---|---|---|---|
| 31 | How to Choose Fabric for a Clothing Brand | `/learn/how-to-choose-fabric-for-clothing-brand` | **CREATE** | **REVIEW** | 1 | Implemented Batch 3. |
| 32 | Cotton Fabric Types Explained for Fashion Brands | `/learn/cotton-fabric-types-explained` | **CREATE** | **REVIEW** | 2 | Implemented Batch 3. |
| 33 | What Does GSM Mean in Clothing? | `/learn/what-does-gsm-mean-in-clothing` | **CREATE** | **REVIEW** | 1 | Implemented. Audit: pass. |
| 34 | How Fabric Weight Affects Garment Construction | `/learn/fabric-weight-and-garment-construction` | **CREATE** | **REVIEW** | 2 | Implemented Batch 3. |
| 35 | Combed Cotton vs Regular Cotton | `/learn/combed-cotton-vs-regular-cotton` | **CREATE** | **REVIEW** | 2 | Implemented Batch 3. |
| 36 | Organic Cotton in Apparel Manufacturing: What Brands Should Know | `/learn/organic-cotton-in-apparel-manufacturing` | **CREATE** | **REVIEW** | 3 | Implemented Batch 3. |
| 37 | Recycled Polyester in Clothing Production | `/learn/recycled-polyester-in-clothing-production` | **CREATE** | **REVIEW** | 3 | Implemented Batch 3. |
| 38 | How to Evaluate Fabric Quality Before Bulk Production | `/learn/how-to-evaluate-fabric-quality` | **CREATE** | **REVIEW** | 2 | Implemented Batch 3. |
| 39 | Fabric Sourcing: What Fashion Brands Need to Know | `/learn/fabric-sourcing-guide-for-fashion-brands` | **CREATE** | **REVIEW** | 2 | Implemented Batch 3. |
| 40 | How Fabric Choice Affects Apparel Manufacturing Cost | `/learn/fabric-choice-and-manufacturing-cost` | **CREATE** | **REVIEW** | 2 | Implemented Batch 3. |

---

### CLUSTER E: Garment Construction

| # | Title | URL | Decision | Status | Phase | Notes |
|---|---|---|---|---|---|---|
| 41 | What Is Garment Construction? | `/learn/garment-customization-options-explained` | **CREATE** | **REVIEW** | 1 | Implemented Batch 4. |
| 42 | Common Sewing Techniques Used in Clothing Manufacturing | `/learn/custom-hangtags-neck-labels-apparel` | **CREATE** | **REVIEW** | 2 | Implemented Batch 4. |
| 43 | How Stitch Type Affects Garment Quality | `/learn/stitch-type-and-garment-quality` | **CREATE** | **REVIEW** | 2 | Implemented Batch 5. |
| 44 | Overlock vs Coverstitch vs Lockstitch Explained | `/learn/screen-printing-vs-dtg-clothing` | **CREATE** | **REVIEW** | 2 | Implemented Batch 4. |
| 45 | How to Evaluate Stitch Quality in Finished Garments | `/learn/how-to-evaluate-stitch-quality` | **CREATE** | **REVIEW** | 2 | Implemented Batch 5. |
| 46 | Custom Embroidery for Clothing Brands | `/learn/custom-embroidery-for-clothing-brands` | **CREATE** | **REVIEW** | 2 | Implemented Batch 4. |
| 47 | How Garment Measurements Are Checked During Production | `/learn/garment-measurement-checking-in-production` | **CREATE** | **REVIEW** | 2 | Implemented Batch 5. |
| 48 | Understanding Shrinkage in Apparel Manufacturing | `/learn/garment-shrinkage-in-apparel-manufacturing` | **CREATE** | **REVIEW** | 3 | Implemented Batch 5. |
| 49 | Garment Washes Explained for Fashion Brands | `/learn/garment-washes-explained` | **CREATE** | PLANNED | 4 | |
| 50 | How Printing and Embroidery Affect Garment Production | `/learn/printing-and-embroidery-in-garment-production` | **CREATE** | PLANNED | 2 | Medium overlap risk with `/custom-embroidery-apparel-manufacturing`. |

---

### CLUSTER F: Streetwear

| # | Title | URL | Decision | Status | Phase | Notes |
|---|---|---|---|---|---|---|
| 51 | How to Manufacture a Streetwear Collection | `/learn/how-to-manufacture-a-streetwear-collection` | **CREATE** | **REVIEW** | 1 | High value. Implemented Phase 2 Batch 1. #59 MERGE target. |
| 52 | How to Manufacture T-Shirts | `/learn/how-to-manufacture-t-shirts` | **CREATE** | **REVIEW** | 1 | Implemented Batch 4. |
| 53 | Heavyweight Streetwear Fabrics Explained | `/learn/heavyweight-streetwear-fabrics-explained` | **CREATE** | **REVIEW** | 1 | Implemented. Audit: pass. |
| 54 | How to Develop a Premium Hoodie | `/learn/how-to-manufacture-hoodies` | **CREATE** | **REVIEW** | 1 | Implemented Batch 4. |
| 55 | Cut-and-Sew Activewear Manufacturing Guide | `/learn/activewear-manufacturing-guide` | **CREATE** | **REVIEW** | 2 | Implemented Batch 4 (#54 MERGE target). |
| 56 | Outerwear & Jacket Manufacturing Guide | `/learn/outerwear-jacket-manufacturing-guide` | **CREATE** | **REVIEW** | 3 | Implemented Batch 4. |
| 57 | Puff Print vs Screen Print for Streetwear | `/learn/puff-print-vs-screen-print-streetwear` | **CREATE** | **REVIEW** | 1 | Implemented. Audit: pass. |
| 58 | Streetwear Manufacturing Guide | `/learn/streetwear-manufacturing-guide` | **CREATE** | **REVIEW** | 1 | Implemented Batch 4 (#57 MERGE target). |
| 59 | How to Build a Small Streetwear Collection | `/learn/how-to-build-a-small-streetwear-collection` | **MERGE** | **MERGED** | - | Merge into #51. Do not create standalone URL. |
| 60 | Common Streetwear Manufacturing Mistakes | `/learn/common-streetwear-manufacturing-mistakes` | **CREATE** | **REVIEW** | 1 | High value. Implemented Phase 2 Batch 1. |

---

### CLUSTER G: Low MOQ & Startup Brands

| # | Title | URL | Decision | Status | Phase | Notes |
|---|---|---|---|---|---|---|
| 61 | What Does Low MOQ Mean in Clothing Manufacturing? | `/learn/what-does-low-moq-mean` | **CREATE** | **REVIEW** | 1 | Implemented. Audit: pass. |
| 62 | How Low MOQ Clothing Production Works | `/learn/how-low-moq-clothing-production-works` | **CREATE** | **REVIEW** | 1 | High value. Implemented Phase 2 Batch 1. |
| 63 | How Many Units Should a New Fashion Brand Produce? | `/learn/how-many-units-for-new-fashion-brand` | **CREATE** | **REVIEW** | 1 | High value. Implemented Phase 2 Batch 1. |
| 64 | Low MOQ vs Bulk Manufacturing: What Changes? | `/learn/low-moq-vs-bulk-manufacturing` | **CREATE** | **REVIEW** | 1 | High value. Implemented Phase 2 Batch 1. |
| 65 | How Startups Can Prepare for Their First Production Run | `/learn/startups-prepare-for-first-production-run` | **CREATE** | **REVIEW** | 1 | Implemented. Audit: pass. |
| 66 | How to Reduce Risk When Launching a Clothing Collection | `/learn/reduce-risk-when-launching-clothing-collection` | **CREATE** | **REVIEW** | 1 | High value. Implemented Phase 2 Batch 1. |
| 67 | Clothing Manufacturing for Small Fashion Brands | `/learn/clothing-manufacturing-for-small-fashion-brands` | **REJECT** | **REJECTED** | - | Adequately covered by existing commercial pages. Do not create. |
| 68 | How to Plan a Small-Batch Apparel Launch | `/learn/how-to-plan-small-batch-apparel-launch` | **CREATE** | **REVIEW** | 2 | Implemented Batch 6. |
| 69 | What Does a Clothing Manufacturer Need From a Startup? | `/learn/what-clothing-manufacturer-needs-from-startup` | **MERGE** | **MERGED** | - | Merge into #6. Add startup-specific section to that article. |
| 70 | How to Scale Clothing Production After a Successful First Run | `/learn/how-to-scale-clothing-production` | **CREATE** | **REVIEW** | 1 | High value. Implemented Phase 2 Batch 1. |

---

### CLUSTER H: Quality Control

| # | Title | URL | Decision | Status | Phase | Notes |
|---|---|---|---|---|---|---|
| 71 | Apparel Quality Control Explained | `/learn/apparel-quality-control-explained` | **CREATE** | PLANNED | 1 | High value. |
| 72 | What Should Be Checked During Clothing Production? | `/learn/what-to-check-during-clothing-production` | **CREATE** | **REVIEW** | 1 | High value. Implemented Batch 5. |
| 73 | Pre-Production Quality Checks for Fashion Brands | `/learn/pre-production-quality-checks` | **CREATE** | **REVIEW** | 1 | High value. Implemented Batch 5. |
| 74 | In-Line Quality Control in Garment Manufacturing | `/learn/in-line-quality-control-garment-manufacturing` | **CREATE** | **REVIEW** | 1 | High value. Implemented Batch 5. |
| 75 | Final Inspection for Finished Garments | `/learn/final-inspection-finished-garments` | **CREATE** | **REVIEW** | 1 | High value. Implemented Batch 5. |
| 76 | Common Clothing Quality Problems and Their Causes | `/learn/common-clothing-quality-problems` | **CREATE** | **REVIEW** | 1 | High value. Implemented Batch 5. |
| 77 | How Fashion Brands Can Create a Garment Quality Checklist | `/learn/garment-quality-checklist-for-brands` | **CREATE** | **REVIEW** | 1 | High value. Implemented Batch 5. |
| 78 | What Is AQL in Apparel Quality Control? | `/learn/what-is-aql-in-apparel-quality-control` | **CREATE** | **REVIEW** | 1 | Implemented. Audit: pass. |
| 79 | How to Inspect Garment Measurements | `/learn/how-to-inspect-garment-measurements` | **CREATE** | **REVIEW** | 2 | Implemented Batch 6. |
| 80 | How to Reduce Defects in Apparel Production | `/learn/how-to-reduce-defects-in-apparel-production` | **CREATE** | **REVIEW** | 1 | High value. Implemented Batch 5. |

---

### CLUSTER I: Sourcing & Supplier Selection

| # | Title | URL | Decision | Status | Phase | Notes |
|---|---|---|---|---|---|---|
| 81 | How to Find a Reliable Clothing Manufacturer | `/learn/how-to-find-a-reliable-clothing-manufacturer` | **CREATE** | **REVIEW** | 1 | Implemented. Audit: pass. |
| 82 | Questions to Ask an Apparel Manufacturer Before Working Together | `/learn/questions-to-ask-an-apparel-manufacturer` | **CREATE** | **REVIEW** | 1 | Implemented. Audit: pass. |
| 83 | How to Compare Clothing Manufacturers | `/learn/how-to-compare-clothing-manufacturers` | **CREATE** | **REVIEW** | 2 | Implemented Batch 6. |
| 84 | What Should Be Included in an Apparel Manufacturing Quote? | `/learn/what-should-be-in-an-apparel-manufacturing-quote` | **CREATE** | **REVIEW** | 1 | High value. Implemented Batch 6. |
| 85 | How to Evaluate an Overseas Clothing Manufacturer | `/learn/how-to-evaluate-an-overseas-clothing-manufacturer` | **CREATE** | **REVIEW** | 1 | Implemented. Audit: pass. |
| 86 | Clothing Manufacturer Due Diligence Checklist | `/learn/clothing-manufacturer-due-diligence-checklist` | **CREATE** | **REVIEW** | 1 | Implemented. **BUG: `breadcrumbsJsonLd` declared after return statement - must fix.** |
| 87 | Direct Manufacturer vs Sourcing Agent | `/learn/direct-manufacturer-vs-sourcing-agent` | **CREATE** | **REVIEW** | 1 | High value. Implemented Batch 6. |
| 88 | How Fashion Brands Should Communicate With Overseas Suppliers | `/learn/how-to-communicate-with-overseas-suppliers` | **CREATE** | **REVIEW** | 2 | Implemented Batch 6. |
| 89 | Warning Signs of a Poor Apparel Manufacturing Partner | `/learn/warning-signs-of-poor-apparel-manufacturer` | **CREATE** | **REVIEW** | 1 | High value. Implemented Batch 6. |
| 90 | How to Build a Long-Term Relationship With a Clothing Manufacturer | `/learn/build-long-term-relationship-clothing-manufacturer` | **CREATE** | **REVIEW** | 3 | Implemented Batch 6. |

---

### CLUSTER J: Bangladesh & International Sourcing

| # | Title | URL | Decision | Status | Phase | Notes |
|---|---|---|---|---|---|---|
| 91 | How Apparel Manufacturing in Bangladesh Works | `/learn/how-apparel-manufacturing-in-bangladesh-works` | **CREATE** | **REVIEW** | 2 | #96 MERGE target. Implemented Batch 6. |
| 92 | Why Fashion Brands Source Clothing From Bangladesh | `/learn/why-fashion-brands-source-from-bangladesh` | **REJECT** | **REJECTED** | - | Substantially covered by `/why-manufacture-apparel-in-bangladesh`. Do not create. |
| 93 | Bangladesh vs China for Apparel Manufacturing | `/learn/bangladesh-vs-china-apparel-manufacturing` | **REJECT** | **REJECTED** | - | Exact duplicate of `/bangladesh-vs-china-garment-manufacturing`. Do not create. |
| 94 | Bangladesh vs Vietnam for Apparel Manufacturing | `/learn/bangladesh-vs-vietnam-apparel-manufacturing` | **REJECT** | **REJECTED** | - | Exact duplicate of `/bangladesh-vs-vietnam-garment-manufacturing`. Do not create. |
| 95 | What Fashion Brands Should Know Before Sourcing From Bangladesh | `/learn/what-to-know-before-sourcing-from-bangladesh` | **CREATE** | **REVIEW** | 2 | Implemented Batch 6. |
| 96 | Apparel Sourcing in Bangladesh: A Beginner's Guide | `/learn/apparel-sourcing-bangladesh-beginners-guide` | **MERGE** | **MERGED** | - | Merge into #91. Do not create standalone URL. |
| 97 | How International Clothing Production Is Coordinated | `/learn/how-international-clothing-production-is-coordinated` | **CREATE** | **REVIEW** | 2 | Implemented Batch 6. |
| 98 | What Happens After Clothing Is Manufactured Overseas? | `/learn/what-happens-after-clothing-manufactured-overseas` | **CREATE** | **REVIEW** | 1 | High value. Implemented Batch 6. |
| 99 | Importing Finished Garments: A Beginner's Guide | `/learn/importing-finished-garments-beginners-guide` | **CREATE** | PLANNED | 3 | Create as hub page linking to existing country-specific import guides only. No tariff claims. |
| 100 | A Complete Checklist for Starting Overseas Apparel Production | `/learn/overseas-apparel-production-checklist` | **CREATE** | **REVIEW** | 1 | Implemented. Audit: pass. |

---

## PART 3: CORRECTED SUMMARY OF DECISIONS

| Decision | Corrected Count | Original Claimed Count | Discrepancy |
|---|---|---|---|
| **CREATE** | **88** | 83 | +5 (original undercounted) |
| **MERGE** | **4** | 4 | None |
| **REJECT** | **4** | 3 | +1 (original missed #94) |
| **Total accounted for** | **96** | 90 | - |
| **Note** | 4 MERGE articles do not generate standalone URLs - they contribute content to target articles. | | |

---

## PART 4: TOPICAL CLUSTER MAP

```
/resources (Hub)
├── /learn/ (Educational Library Root)
│   ├── CLUSTER A: Manufacturing Fundamentals (#1–10)
│   │   └── → /capabilities, /operations, /intake
│   ├── CLUSTER B: Sampling & Product Dev (#11–19, #20 merged into #7)
│   │   └── → /apparel-sampling-services, /apparel-sampling-services-startups
│   ├── CLUSTER C: Tech Packs & Pattern Making (#21–30)
│   │   └── → /tech-pack-development-apparel, /apparel-pattern-making-services
│   ├── CLUSTER D: Fabrics & Materials (#31–40)
│   │   └── → /fabric-sourcing-bangladesh, /organic-cotton-clothing-manufacturing
│   ├── CLUSTER E: Garment Construction (#41–50)
│   │   └── → /operations, /garment-quality-control-services
│   ├── CLUSTER F: Streetwear (#51–60, #59 merged into #51)
│   │   └── → /streetwear-manufacturing, /hoodie-manufacturing, /custom-embroidery-apparel-manufacturing
│   ├── CLUSTER G: Low MOQ & Startups (#61–70, #67 rejected, #69 merged into #6)
│   │   └── → /low-moq-apparel-manufacturing, /clothing-manufacturer-for-startups, /intake
│   ├── CLUSTER H: Quality Control (#71–80)
│   │   └── → /garment-quality-control-services, /operations
│   ├── CLUSTER I: Sourcing & Supplier Selection (#81–90)
│   │   └── → /garment-sourcing-agent-bangladesh, /buying-sourcing-partner-bangladesh, /capabilities
│   └── CLUSTER J: Bangladesh & International (#91–100, #92–94 rejected, #96 merged into #91)
│       └── → /bangladesh-garment-rules-of-origin, /uk-apparel-import-considerations,
│              /usa-apparel-import-considerations, /eu-apparel-import-considerations
```

---

## PART 5: FACT-CHECK PLAN

### High-Risk Topics Requiring External Verification

| Topic | Risk | Verification Source Required | Status |
|---|---|---|---|
| All tariff and duty claims | Very High | UK HMRC, US CBP, EU TARIC, AU ABF, CA CBSA | Must verify at time of writing |
| AQL 2.5 methodology | Low | ANSI/ASQ Z1.4 standard | Fenalt Verified |
| GSM definitions and standards | Low | Industry standard | General Industry Knowledge |
| Organic cotton certification standards (GOTS, OCS) | High | GOTS.net, TE.net | Verify at writing |
| rPET standards | High | GRS (Textile Exchange) | Verify at writing |
| Bangladesh RMG export statistics | Medium | WTO, BGMEA, EPB Bangladesh | Must use current figures at writing |
| Rules of origin (Bangladesh) | High | EU ITC, UK HMRC, BGMEA | Fenalt Verified (qualified wording) |
| DDP vs FOB Incoterms | Low | ICC Incoterms 2020 | Stable industry standard |
| Pattern grading terminology | Low | Industry standard | General Industry Knowledge |
| Production timeline estimates | Medium | Fenalt Verified (qualified estimates only) | Fenalt Verified |

---

## PART 6: PHASE 1 - TOP 20 ARTICLES (REFERENCE)

These were the 20 recommended Phase 1 articles. All have been implemented and are in REVIEW status.

| Priority | # | Title | URL | Status |
|---|---|---|---|---|
| 1 | 1 | How Clothing Manufacturing Works | `/learn/how-clothing-manufacturing-works` | **REVIEW** |
| 2 | 21 | What Is a Tech Pack | `/learn/what-is-a-tech-pack` | **REVIEW** |
| 3 | 4 | Clothing Manufacturer vs Sourcing Agent | `/learn/clothing-manufacturer-vs-sourcing-agent` | **REVIEW** |
| 4 | 33 | What Does GSM Mean in Clothing? | `/learn/what-does-gsm-mean-in-clothing` | **REVIEW** |
| 5 | 78 | What Is AQL in Apparel Quality Control? | `/learn/what-is-aql-in-apparel-quality-control` | **REVIEW** |
| 6 | 61 | What Does Low MOQ Mean? | `/learn/what-does-low-moq-mean` | **REVIEW** |
| 7 | 11 | What Is a Clothing Sample? | `/learn/what-is-a-clothing-sample` | **REVIEW** |
| 8 | 5 | How to Choose a Clothing Manufacturer | `/learn/how-to-choose-a-clothing-manufacturer` | **REVIEW** |
| 9 | 81 | How to Find a Reliable Clothing Manufacturer | `/learn/how-to-find-a-reliable-clothing-manufacturer` | **REVIEW** |
| 10 | 82 | Questions to Ask an Apparel Manufacturer | `/learn/questions-to-ask-an-apparel-manufacturer` | **REVIEW** |
| 11 | 86 | Manufacturer Due Diligence Checklist | `/learn/clothing-manufacturer-due-diligence-checklist` | **REVIEW** ⚠️ BUG |
| 12 | 6 | What a Manufacturer Needs From a Brand | `/learn/what-a-clothing-manufacturer-needs-from-a-brand` | **REVIEW** |
| 13 | 65 | Startups Prepare for First Production Run | `/learn/startups-prepare-for-first-production-run` | **REVIEW** |
| 14 | 100 | Overseas Production Checklist | `/learn/overseas-apparel-production-checklist` | **REVIEW** |
| 15 | 52 | What Makes High-Quality Streetwear? | `/learn/what-makes-high-quality-streetwear` | **REVIEW** |
| 16 | 53 | Heavyweight Streetwear Fabrics Explained | `/learn/heavyweight-streetwear-fabrics-explained` | **REVIEW** |
| 17 | 57 | Puff Print vs Screen Print for Streetwear | `/learn/puff-print-vs-screen-print-streetwear` | **REVIEW** |
| 18 | 30 | Common Tech Pack Mistakes | `/learn/tech-pack-mistakes` | **REVIEW** |
| 19 | 85 | How to Evaluate an Overseas Manufacturer | `/learn/how-to-evaluate-an-overseas-clothing-manufacturer` | **REVIEW** |
| 20 | 9 | How Long Does Clothing Manufacturing Take? | `/learn/clothing-manufacturing-timeline` | **REVIEW** |

---

## PART 7: OPEN DECISIONS (RESOLVED)

1. **URL structure**: RESOLVED - `/learn/[slug]` confirmed.
2. **Phase 1 scope**: RESOLVED - 20 articles confirmed.
3. **Author field**: RESOLVED - "General industry knowledge • Reviewed by Fenalt editorial team" (no named individual).
4. **External linking policy**: RESOLVED - linking to authoritative sources is approved.
5. **Article layout**: RESOLVED - same design system as commercial pages, with `/learn/` cluster badge breadcrumb.

---

## PART 8: EDITORIAL PRINCIPLES (DO NOT OVERRIDE)

1. Every factual Fenalt claim must be traceable to `FENALT_VERIFIED_FACTS.md`.
2. Fenalt-specific facts must be explicitly distinguished from general industry knowledge.
3. Never fabricate statistics, certifications, client names, or production capacity.
4. Timeline estimates must always be qualified as "estimated" and subject to project variables.
5. No article may overlap substantially with an existing commercial page without a clear differentiation note.
6. MERGE and REJECT decisions are final unless explicitly overridden by editorial review.
