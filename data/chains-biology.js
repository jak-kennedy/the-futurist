/* =============================================================================
   THE FUTURIST — SUPPLY CHAIN DEEP-DIVES (biology)
   =============================================================================
   Registers chain analyses for three biology technologies. Each entry follows
   the SUPPLY CHAIN DEEP-DIVE shape in _schema.js:
     - exactly 4 tiers, FIXED names, upstream -> downstream
     - 2-4 links per tier; concentration enum single-source|concentrated|diversified
     - at most 1-2 chokepoints per tier
     - exactly 3 ranked topChokepoints
   The "supply chain" here is the research / manufacturing / clinical pipeline
   that produces these therapies. Contested science is flagged honestly.
   Plain JS. No imports/exports. Must pass `node --check`.
   ============================================================================= */

window.FUTURIST_DATA = window.FUTURIST_DATA || [];
window.FUTURIST_CHAINS = window.FUTURIST_CHAINS || {};

/* -----------------------------------------------------------------------------
   LONGEVITY
   The whole field rests on contested biology. Partial cellular reprogramming
   (Yamanaka-factor based) has reversed aging markers in mice and in vitro, but
   no human therapy has shown lifespan extension. Senolytics have early human
   data on specific diseases, not on aging itself. Treat the chain as the tools
   and manufacturing that would be needed IF these therapies reach the clinic.
   --------------------------------------------------------------------------- */
window.FUTURIST_CHAINS["longevity"] = {
  overview:
    "Longevity has no approved aging therapy, so this chain describes the research and clinical-manufacturing pipeline the leading bets would need. The upstream (enzymes, reagents, model organisms) is mature and commoditized. The bottleneck sits in the middle: GMP viral vectors and plasmid DNA to deliver reprogramming factors, where global CDMO capacity is scarce and slot-booked years out. The science itself is the deepest risk; partial reprogramming and senolytics have animal and narrow human data, not proven human lifespan extension.",
  tiers: [
    {
      name: "Raw materials & feedstocks",
      links: [
        {
          item: "Molecular-biology enzymes and reagents",
          role: "cloning, editing, assay chemistry",
          players: "New England Biolabs, Thermo Fisher, Promega, Roche",
          geography: "US and Western Europe; broadly second-sourced",
          concentration: "diversified",
          risk: "Commodity supply with multiple vendors. Spot shortages hit during COVID but no single point of failure.",
          fix: "Multiple qualified suppliers per enzyme; in-house production at large labs."
        },
        {
          item: "Senolytic small-molecule APIs",
          role: "drug substance for clearing senescent cells",
          players: "Generic API makers (dasatinib, fisetin, quercetin); Unity Biotechnology wound down in 2025",
          geography: "API synthesis concentrated in India and China",
          concentration: "concentrated",
          risk: "Most senolytic candidates are repurposed generics or supplements with thin aging-specific human data. Unity's lead program missed its endpoint and the company moved to dissolve in 2025. API itself is not scarce.",
          fix: "Repurposing of off-patent drugs keeps API sourcing easy even if efficacy is unproven."
        },
        {
          item: "Model organisms and human biobanks",
          role: "preclinical testing and aging-biomarker data",
          players: "Jackson Laboratory (mice), UK Biobank, NIA Interventions Testing Program",
          geography: "US and UK dominate aging-cohort data",
          concentration: "concentrated",
          risk: "Aging-relevant cohort data is concentrated in a few biobanks. Mouse-to-human translation in aging is historically poor, which is a scientific risk more than a supply risk.",
          fix: "Expanding biobanks (All of Us, Biobank Japan) broaden the data base."
        }
      ]
    },
    {
      name: "Components & subsystems",
      links: [
        {
          item: "GMP plasmid DNA",
          role: "template for viral vectors and mRNA",
          players: "Aldevron (Danaher), Cobra Biologics/Charles River, VGXI, Nature Technology",
          geography: "US and Europe; long lead times industry-wide",
          concentration: "concentrated",
          chokepoint: true,
          risk: "GMP plasmid is an upstream gate for nearly every vector and mRNA process. Capacity is booked far ahead and lead times run many months, delaying any reprogramming therapy that needs delivery.",
          fix: "Enzymatic / cell-free DNA (doggybone, Touchlight) and new plasmid lines are expanding capacity."
        },
        {
          item: "GMP cell-culture media and serum substitutes",
          role: "growing cells for therapy and testing",
          players: "Thermo Fisher (Gibco), Cytiva (HyClone), Merck, FUJIFILM Irvine",
          geography: "US, Europe, Japan; fetal bovine serum sourced from cattle regions",
          concentration: "concentrated",
          risk: "Animal-origin serum (FBS) carries supply variability, contamination and ethical issues. Chemically defined serum-free media reduce this but are costly and cell-type specific.",
          fix: "Shift to serum-free, chemically defined media; recombinant albumin replaces serum components."
        },
        {
          item: "Reprogramming-factor delivery cargo",
          role: "OSKM factors as mRNA, protein or transgene",
          players: "Academic and company IP (Life Biosciences, Altos Labs, Retro Biosciences, NewLimit, Turn Bio)",
          geography: "US-concentrated research; private and well-funded",
          concentration: "concentrated",
          risk: "Partial reprogramming has reversed aging markers in mice and human cells in vitro, and Life Biosciences' ER-100 became the first such therapy dosed in a human (local eye indication) in June 2026, but systemic dosing, off-target dedifferentiation and cancer risk are unresolved. No approved human product exists.",
          fix: "Chemical reprogramming and tighter inducible control aim to reduce the cancer/teratoma risk."
        }
      ]
    },
    {
      name: "Manufacturing & integration",
      links: [
        {
          item: "GMP viral vector manufacturing (AAV / lentivirus)",
          role: "in vivo delivery of reprogramming factors",
          players: "Lonza, Catalent, WuXi Advanced Therapies, Thermo Fisher (Brammer), Oxford Biomedica",
          geography: "US, Europe, China; capacity scarce globally",
          concentration: "concentrated",
          chokepoint: true,
          risk: "Viral-vector manufacturing is the single most cited bottleneck in cell and gene therapy. Yields are low, batches fail, and CDMO slots are booked years out, which would gate any in vivo reprogramming therapy at scale and cost.",
          fix: "Suspension/producer-cell-line processes, capacity buildouts, and non-viral lipid-nanoparticle delivery aim to relieve the bottleneck."
        },
        {
          item: "Fill-finish and aseptic processing",
          role: "final sterile drug product",
          players: "Catalent, Lonza, Vetter, Recipharm, hospital GMP units",
          geography: "US and Europe weighted; global aseptic capacity tight",
          concentration: "concentrated",
          risk: "Aseptic fill-finish capacity is a shared bottleneck across all biologics. A reprogramming therapy competes with vaccines and antibodies for the same lines.",
          fix: "Modular and isolator-based fill lines expand flexible capacity."
        }
      ]
    },
    {
      name: "Deployment & operations",
      links: [
        {
          item: "Clinical-trial capacity and endpoints",
          role: "proving safety and an aging endpoint",
          players: "FDA, TAME trial (Barzilai), large CROs (IQVIA, ICON)",
          geography: "US and EU regulatory frameworks lead",
          concentration: "concentrated",
          chokepoint: true,
          risk: "Aging is not an approved disease indication, so there is no clear regulatory endpoint. Trials must target specific diseases or surrogate biomarkers; the first reprogramming trials (e.g. ER-100) run through narrow indications like eye disease, not aging itself.",
          fix: "The TAME design and validated aging biomarkers (epigenetic clocks) aim to create a path, though TAME remained only partially funded as of 2026."
        },
        {
          item: "Cold chain and cryologistics",
          role: "shipping cells, vectors and biologics",
          players: "World Courier, Cryoport, Marken (UPS), Thermo Fisher",
          geography: "Global networks; liquid-nitrogen dependent",
          concentration: "diversified",
          risk: "Ultra-cold and cryogenic shipping has redundancy but is sensitive to LN2 supply and customs delays for live biologics.",
          fix: "Validated dry-shipper networks and distributed cryo hubs add redundancy."
        }
      ]
    }
  ],
  topChokepoints: [
    {
      item: "GMP viral-vector manufacturing capacity",
      why: "Every in vivo reprogramming approach needs delivery, and AAV/lentivirus CDMO capacity is the field-wide bottleneck. Low yields, failed batches and multi-year slot backlogs would cap both supply and affordability."
    },
    {
      item: "GMP plasmid DNA",
      why: "Plasmid is the upstream template for vectors and mRNA. Capacity is booked far ahead with long lead times, so it gates the vector step before manufacturing even begins."
    },
    {
      item: "Regulatory endpoint for aging",
      why: "Aging is not an approved indication, so there is no agreed path to demonstrate lifespan extension. Without a defensible endpoint, the science cannot convert into an approved, deployable therapy, which is the binding constraint above any factory."
    }
  ],
  geopolitics:
    "The tooling and reagent layer is US and Western European, with deep redundancy, so embargo risk is low at the bench. The real concentration is in CDMO manufacturing, where the US, Europe and China hold the scarce viral-vector and plasmid capacity; WuXi's role makes US-China biosecurity policy (the proposed BIOSECURE Act) a direct supply variable. Senolytic and small-molecule API synthesis leans on India and China like most generics. The deepest exposure is not geographic but scientific and regulatory: the leading bets are concentrated in a handful of richly funded US firms (Life Biosciences, which dosed the first human in 2026, plus Altos, Retro, NewLimit), and the field would stall worldwide if human reprogramming proves unsafe rather than for any trade reason. Reshoring of vector and plasmid capacity is underway in the US and EU but trails demand."
};

/* -----------------------------------------------------------------------------
   SYNTHETIC BIOLOGY
   The most industrialized of the three chains. Engineering biology runs on
   synthetic DNA, automation, sequencing and fermentation. Two binding
   constraints: single-use bioprocessing consumables (the 2021 shortage) and
   the cost/length ceiling of de novo DNA synthesis.
   --------------------------------------------------------------------------- */
window.FUTURIST_CHAINS["synthetic-biology"] = {
  overview:
    "Synthetic biology is the most industrialized chain of the three: a real design-build-test-learn stack of DNA synthesis, automation, sequencing and fermentation. Upstream DNA synthesis is concentrated in a few vendors and still limited by cost and length. The hardest physical chokepoint is single-use bioprocessing consumables, whose 2021 shortage stalled biomanufacturing worldwide. Sequencing has diversified beyond Illumina, but synthesis and bioprocessing bags remain narrow.",
  tiers: [
    {
      name: "Raw materials & feedstocks",
      links: [
        {
          item: "Phosphoramidites and synthesis reagents",
          role: "chemical building blocks for DNA synthesis",
          players: "Honeywell, Thermo Fisher, Sigma-Aldrich (Merck), LGC Biosearch",
          geography: "US, Europe, Japan; specialty chemical supply",
          concentration: "concentrated",
          risk: "Chemical DNA synthesis depends on high-purity phosphoramidites from a small specialty-chemical base. Purity and supply hiccups ripple into every oligo provider.",
          fix: "Enzymatic synthesis (Ansa, DNA Script, Molecular Assemblies) removes the phosphoramidite dependency entirely."
        },
        {
          item: "Fermentation feedstock (sugars)",
          role: "carbon source for engineered microbes",
          players: "Commodity corn/cane sugar (ADM, Cargill, Brazilian mills)",
          geography: "US, Brazil, EU; commodity agriculture",
          concentration: "diversified",
          risk: "Feedstock is a global commodity with deep markets. Price, not availability, is the variable, and cheap sugar is what makes bioproduced goods cost-competitive.",
          fix: "Alternative feedstocks (CO2, methane, lignocellulose) being developed to decouple from food crops."
        },
        {
          item: "Industrial enzymes",
          role: "catalysts for assembly and processing",
          players: "Novonesis (Novozymes), DSM-Firmenich, BASF, New England Biolabs",
          geography: "Denmark, Netherlands, US; well-established",
          concentration: "diversified",
          risk: "Mature, competitive market with multiple global suppliers. Low single-point risk.",
          fix: "Multiple qualified vendors and in-house enzyme production."
        }
      ]
    },
    {
      name: "Components & subsystems",
      links: [
        {
          item: "Synthetic DNA / oligo synthesis",
          role: "the literal genetic code to build",
          players: "Twist Bioscience, IDT (Danaher), GenScript, Ansa Biotechnologies",
          geography: "US-led; Twist moved synthesis onshore",
          concentration: "concentrated",
          chokepoint: true,
          risk: "De novo DNA is gated by cost, error rate and a length ceiling near a few kilobases per fragment for high quality. Long-construct turnaround is slow and a few vendors dominate, so synthesis throughput caps the whole design-build loop.",
          fix: "Enzymatic synthesis and silicon-chip arrays (Twist) are pushing length up and cost per base down."
        },
        {
          item: "DNA synthesizers and biosecurity screening",
          role: "instruments plus pathogen sequence screening",
          players: "DNA Script (benchtop), Twist, Telesis Bio; IBBIS / IGSC screening consortium",
          geography: "US and Europe; screening is voluntary-leaning",
          concentration: "concentrated",
          risk: "Benchtop synthesizers could let users bypass centralized screening. Sequence screening for hazardous orders is not universally mandated, a biosecurity gap more than a supply gap.",
          fix: "US executive policy and the International Gene Synthesis Consortium are tightening mandatory screening."
        },
        {
          item: "Sequencing instruments and reagents",
          role: "the read step of design-build-test",
          players: "Illumina, Oxford Nanopore, PacBio, Element Biosciences, MGI/BGI",
          geography: "US-led; MGI (China) and Oxford Nanopore (UK) diversify",
          concentration: "diversified",
          risk: "Once near-monopoly, sequencing now has real competition after Illumina patent expiries and new entrants. Reagent lock-in per platform remains, but no single point of failure.",
          fix: "Multiple platforms (short-read, long-read, China-sourced MGI) provide redundancy."
        }
      ]
    },
    {
      name: "Manufacturing & integration",
      links: [
        {
          item: "Single-use bioprocessing bags and assemblies",
          role: "disposable bioreactor and fluid-path consumables",
          players: "Cytiva, Sartorius, Thermo Fisher, Avantor",
          geography: "US and Europe; specialized polymer film",
          concentration: "concentrated",
          chokepoint: true,
          risk: "The 2020-2021 single-use shortage stalled bioprocessing globally; bags, filters and tubing had year-plus lead times. A few suppliers control the specialized multilayer film, so demand spikes (a pandemic, a roll-up of capacity) cascade across the industry.",
          fix: "Capacity expansions, second-sourcing, and stainless-steel hybrid lines reduce single-use dependence."
        },
        {
          item: "Bioreactors and fermentation capacity",
          role: "scale-up vessels for production strains",
          players: "Sartorius, Cytiva, Eppendorf; large-scale CDMOs (Ginkgo, Amyris legacy, Lonza)",
          geography: "US, Europe; large fermentation scarce",
          concentration: "concentrated",
          risk: "Large-scale fermentation capacity (above 100,000 L) is scarce and capital-heavy. Many synbio products died not at the bench but at scale-up economics.",
          fix: "Shared CDMO capacity and modular fermentation buildouts; precision-fermentation entrants adding tanks."
        },
        {
          item: "Lab automation and liquid handlers",
          role: "high-throughput build-and-test foundries",
          players: "Tecan, Hamilton, Beckman Coulter, Opentrons; Ginkgo Bioworks foundry",
          geography: "Switzerland, US; concentrated instrument base",
          concentration: "concentrated",
          risk: "Foundry-scale automation concentrates in a few instrument makers and a few well-capitalized foundries. Ginkgo's model showed throughput is buildable but economics are unproven.",
          fix: "Cheaper open-hardware handlers (Opentrons) lower the entry barrier to automation."
        }
      ]
    },
    {
      name: "Deployment & operations",
      links: [
        {
          item: "Downstream processing and purification",
          role: "recovering and purifying the bioproduct",
          players: "Cytiva, Sartorius, Repligen, Pall (Danaher)",
          geography: "US, Europe; chromatography media concentrated",
          concentration: "concentrated",
          risk: "Purification resins and chromatography media (notably Protein A) are concentrated and costly, often the dominant cost in a biologic process.",
          fix: "Alternative ligands and membrane chromatography reduce resin dependence."
        },
        {
          item: "Regulatory approval and biosafety oversight",
          role: "clearing products for market and environment",
          players: "FDA, USDA, EPA, EMA; EU GMO framework",
          geography: "Stricter in EU; varied globally",
          concentration: "concentrated",
          risk: "Engineered-organism products face fragmented regulation across food, drug and environmental agencies. The EU's GMO rules are a notable market barrier.",
          fix: "Clearer biotech regulatory frameworks and contained-use approvals are emerging."
        }
      ]
    }
  ],
  topChokepoints: [
    {
      item: "Single-use bioprocessing consumables",
      why: "Bags, filters and tubing from a handful of suppliers are the physical bottleneck of biomanufacturing. The 2021 shortage proved a demand spike causes year-plus lead times across the entire industry at once."
    },
    {
      item: "De novo DNA synthesis",
      why: "Cost, error rate and a length ceiling cap how fast designs can be built and tested. A few vendors dominate, so synthesis throughput throttles the whole design-build-test loop."
    },
    {
      item: "Large-scale fermentation capacity",
      why: "Many synbio products are viable at the bench but fail on scale-up economics. Above-100,000-L tank capacity is scarce and capital-heavy, gating the jump from prototype to commodity volume."
    }
  ],
  geopolitics:
    "The synbio stack is heavily US and Western European, which lowers embargo risk but concentrates power in a few firms (Twist, Illumina, Cytiva, Sartorius). DNA synthesis has been deliberately onshored in the US partly for biosecurity, and sequence-screening policy is becoming a national-security lever rather than a trade one. China's MGI/BGI is the main non-Western sequencing alternative and a focus of US export and data-security scrutiny. Single-use consumables are the sharpest geopolitical exposure: a tight Western supplier base means any shock (pandemic demand, plant outage, consolidation) propagates globally with no fast substitute. Feedstock sugar is a deep global commodity, so the upstream is the least politically fragile part of the chain."
};

/* -----------------------------------------------------------------------------
   REGENERATIVE MEDICINE
   Cell and tissue therapies plus xenotransplantation. The binding constraints
   are GMP cell-manufacturing capacity (especially autologous, one batch per
   patient) and recombinant growth factors / cytokines used to expand and
   differentiate cells.
   --------------------------------------------------------------------------- */
window.FUTURIST_CHAINS["regenerative-medicine"] = {
  overview:
    "Regenerative medicine spans cell therapies, engineered tissue and xenotransplantation, and its chain is the GMP biomanufacturing pipeline behind them. Cell sources and biomaterials are increasingly available, but two things bind: GMP cell-manufacturing capacity (autologous therapies are one bespoke batch per patient) and recombinant growth factors / cytokines that every expansion and differentiation protocol consumes. Cold chain and cryopreservation add operational fragility because living cells cannot wait. Xenotransplantation adds a unique upstream: designated-pathogen-free gene-edited pig facilities held by two players.",
  tiers: [
    {
      name: "Raw materials & feedstocks",
      links: [
        {
          item: "Cell sources (iPSC lines, donor cells)",
          role: "starting material for therapy",
          players: "FUJIFILM Cellular Dynamics, Allele, NYSCF, Ncardia; allogeneic donor tissue banks",
          geography: "US, Japan, Europe; clinical-grade lines scarce",
          concentration: "concentrated",
          risk: "GMP/clinical-grade iPSC lines with clean provenance and HLA characterization are limited. Autologous starting material varies patient to patient, hurting consistency.",
          fix: "HLA-haplobanks and universal hypoimmunogenic (gene-edited) iPSC lines aim to standardize allogeneic supply."
        },
        {
          item: "Pathogen-free gene-edited source pigs (xeno)",
          role: "organs and cells for xenotransplantation",
          players: "eGenesis, Revivicor (United Therapeutics)",
          geography: "US; two players, gnotobiotic facilities",
          concentration: "single-source",
          chokepoint: true,
          risk: "Xenotransplant organs require multi-gene-edited, designated-pathogen-free pigs raised in costly gnotobiotic barrier facilities. Only two US programs operate them, so the entire xeno supply rests on a handful of sites.",
          fix: "New DPF facility buildouts and additional gene-edited herds are being established as trials advance."
        },
        {
          item: "Scaffolds, biomaterials and decellularized matrix",
          role: "structural support for engineered tissue",
          players: "Integra LifeSciences, CollPlant (recombinant collagen), Matricel, academic ECM",
          geography: "US, Israel, Europe; diversifying",
          concentration: "diversified",
          risk: "Biomaterials have multiple sources, though animal-derived matrices carry batch and immunogenicity variability. Not a single-point constraint.",
          fix: "Recombinant collagen and synthetic scaffolds reduce animal-origin variability."
        }
      ]
    },
    {
      name: "Components & subsystems",
      links: [
        {
          item: "Recombinant growth factors and cytokines",
          role: "expand and differentiate cells",
          players: "Peprotech (Thermo Fisher), R&D Systems (Bio-Techne), Miltenyi Biotec, FUJIFILM",
          geography: "US and Europe; GMP-grade concentrated",
          concentration: "concentrated",
          chokepoint: true,
          risk: "Every cell-expansion and differentiation protocol burns GMP recombinant proteins (FGF, TGF-beta, IL-2, BMPs). GMP-grade supply is concentrated, expensive and lead-time sensitive, and these proteins are a dominant cost in cell manufacturing.",
          fix: "Thermostable engineered growth factors and more GMP-protein suppliers are coming online to cut cost and lead time."
        },
        {
          item: "GMP media and supplements",
          role: "nutrient base for cell culture",
          players: "Thermo Fisher (Gibco), Lonza, Miltenyi, FUJIFILM Irvine",
          geography: "US, Europe, Japan; serum-substitution ongoing",
          concentration: "concentrated",
          risk: "Defined GMP media are improving but still partly rely on animal-origin or human-platelet components with batch variability. Serum-free conversion is cell-type specific work.",
          fix: "Chemically defined, serum-free and xeno-free media reduce variability and ethical sourcing issues."
        },
        {
          item: "Viral vectors for cell engineering",
          role: "gene-modify cells (e.g. CAR, hypoimmunogenicity)",
          players: "Lonza, Oxford Biomedica, WuXi, Catalent",
          geography: "US, Europe, China; capacity scarce",
          concentration: "concentrated",
          risk: "Engineered cell therapies that need a transgene depend on the same scarce viral-vector CDMO capacity that gates gene therapy broadly.",
          fix: "Non-viral transposon and CRISPR knock-in methods reduce vector dependence for some products."
        }
      ]
    },
    {
      name: "Manufacturing & integration",
      links: [
        {
          item: "GMP cell-manufacturing capacity (cleanrooms)",
          role: "make the therapy under sterile control",
          players: "Lonza, WuXi Advanced Therapies, Catalent, Charles River, hospital GMP units",
          geography: "US, Europe, China; cleanroom capacity scarce",
          concentration: "concentrated",
          chokepoint: true,
          risk: "Autologous therapy is one bespoke batch per patient, so capacity scales with patients, not with volume. GMP cleanroom and trained-operator capacity is the central manufacturing limit on cell therapy, driving cost and waitlists.",
          fix: "Allogeneic off-the-shelf products, closed automated systems (Miltenyi Prodigy, Cellares) and more CDMO suites raise throughput."
        },
        {
          item: "3D bioprinters and tissue fabrication",
          role: "spatially assemble cells and matrix",
          players: "CELLINK (BICO), Organovo, Aspect Biosystems, 3D Systems",
          geography: "Sweden, US, Canada; small specialized base",
          concentration: "concentrated",
          risk: "Bioprinting hardware is concentrated in a few firms and remains early; vascularizing thick printed tissue is unsolved, so this is a frontier capability more than a reliable manufacturing line.",
          fix: "Multiple vendors and open bioprinting platforms broaden access as the science matures."
        }
      ]
    },
    {
      name: "Deployment & operations",
      links: [
        {
          item: "Cryopreservation and cold chain",
          role: "freeze, store and ship living cells",
          players: "Cryoport, Cytiva, Thermo Fisher, BioLife Solutions (CryoStor); LN2 from Air Liquide, Linde",
          geography: "Global; liquid-nitrogen dependent",
          concentration: "concentrated",
          chokepoint: true,
          risk: "Living-cell products depend on continuous cryogenic chain and validated freezing media. An LN2 outage, a thaw excursion or a customs delay can destroy a single irreplaceable autologous batch with no backup.",
          fix: "Vitrification advances, redundant dry-shipper networks and distributed cryo hubs add resilience."
        },
        {
          item: "Autologous-vs-allogeneic clinical logistics",
          role: "match, deliver and administer at point of care",
          players: "Hospital cell-therapy centers, Vineti/TrakCel chain-of-identity software, apheresis sites",
          geography: "Concentrated at academic medical centers",
          concentration: "concentrated",
          risk: "Autologous workflows require vein-to-vein chain-of-identity tracking, apheresis slots and tight scheduling. A break anywhere wastes the therapy and the patient's window.",
          fix: "Allogeneic off-the-shelf products and chain-of-identity software simplify logistics."
        },
        {
          item: "Regulatory approval (cell and tissue, xeno)",
          role: "clear therapies and animal-source products",
          players: "FDA (CBER), EMA, PMDA Japan; xeno-specific guidance",
          geography: "US, EU, Japan lead; xeno frameworks new",
          concentration: "concentrated",
          risk: "Cell, tissue and especially xenotransplant products face stringent, evolving approval and lifelong infection-surveillance requirements. Xeno consent and zoonosis monitoring add unique burden.",
          fix: "Japan's conditional approval pathway and emerging FDA xeno guidance create clearer routes."
        }
      ]
    }
  ],
  topChokepoints: [
    {
      item: "GMP cell-manufacturing capacity",
      why: "Autologous therapy is one bespoke batch per patient, so capacity scales with patient count, not volume. Scarce GMP cleanrooms and trained operators set the ceiling on how many patients can be treated and at what cost."
    },
    {
      item: "Recombinant growth factors and cytokines",
      why: "Every expansion and differentiation protocol consumes GMP recombinant proteins, and GMP-grade supply is concentrated, costly and lead-time sensitive. They are a dominant input cost with few qualified suppliers."
    },
    {
      item: "Cryopreservation and cold chain",
      why: "Living cells cannot tolerate a break in the cryogenic chain. A single thaw excursion or LN2 outage destroys an irreplaceable autologous batch, making the cold chain a fragile single point of operational failure."
    }
  ],
  geopolitics:
    "Regenerative manufacturing concentrates in the US, Europe, Japan and China, with CDMO power held by Lonza, WuXi and Catalent; WuXi's exposure makes US-China biosecurity policy (BIOSECURE) a direct supply variable as in the other chains. Recombinant-protein and GMP-media supply is Western-concentrated, so consolidation or a plant outage propagates fast. Xenotransplantation is the most extreme concentration of all: pathogen-free gene-edited pigs sit with just two US programs (eGenesis and Revivicor/United Therapeutics), making the entire xeno organ supply a near-single-source national asset. Japan's permissive conditional-approval pathway has pulled some regenerative work there, while the EU's stricter rules push activity elsewhere. The deepest fragility is operational rather than political: living cells and a cryogenic chain mean local outages, not embargoes, are the likeliest failure mode."
};
