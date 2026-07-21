/* =============================================================================
   THE FUTURIST — INVESTABLE MAP — BIOLOGY DOMAIN
   =============================================================================
   Three technologies: longevity, synthetic-biology, regenerative-medicine.
   30-year structural view. No price targets, no quarterly catalysts.
   Tickers verified June 2026. Where a pure-play is private or a name has
   delisted, it is flagged in the note. Shape per data/_schema.js INVESTABLE MAP.
   ============================================================================= */

window.FUTURIST_INVEST = window.FUTURIST_INVEST || {};

/* -----------------------------------------------------------------------------
   LONGEVITY
   Bear-first framing. The pure-play science (cellular reprogramming, senolytics)
   is contested and almost entirely private. The durable public exposure is the
   tools and the metabolic-aging incumbents, not a clean longevity stock.
   --------------------------------------------------------------------------- */
window.FUTURIST_INVEST["longevity"] = {
  thesis: "Treating aging itself as a target could reshape healthcare, but the science is contested and unproven in humans. Over 30 years the credible exposure is indirect. You own the tools that every aging lab must buy, plus large drugmakers whose metabolic franchises carry aging optionality for free. A direct, durable, public longevity pure-play does not yet exist at scale.",

  howToThink: "Start from the bear case. Partial reprogramming reached humans for the first time in 2026 (Life Biosciences' ER-100), but that is a tiny Phase 1 safety study in the eye, not proof of lifespan extension, and the leading reprogramming bets are still private and pre-revenue. So a non-expert should not reach for a longevity pure-play, because the clean ones are not listed and the listed ones (Unity) have a habit of failing outright. The durable way in is picks-and-shovels. Sequencers and lab tools sell to every aging lab regardless of which theory wins. Metabolic-aging optionality sits inside Eli Lilly and Novo Nordisk, where GLP-1 drugs already touch aging-adjacent disease and the upside is a free option on a proven cash machine.",

  conviction: {
    rating: "Low",
    ourProbability: 0.25,
    street: "Splits hard between true believers funding private reprogramming and skeptics who see no validated human lifespan drug and a graveyard of failed senolytics.",
    edge: "We treat longevity as a tools-and-optionality trade, not a pure-play trade. The picks-and-shovels and the GLP-1 incumbents capture most of the upside with a fraction of the binary risk.",
    horizon: "Tools pay along the way. Any direct therapeutic inflection is a 2040s question at the earliest, and may not arrive within 30 years."
  },

  sCurve: {
    stage: "nascent",
    points: [
      { year: 2026, value: 0, unit: "$B", note: "no approved lifespan-extending drug; pure-plays private and pre-revenue" },
      { year: 2035, value: 5, unit: "$B", note: "first reprogramming and senolytic readouts; mostly research and tools revenue" },
      { year: 2046, value: 40, unit: "$B" },
      { year: 2056, value: 150, unit: "$B", basis: "author estimate; a fraction of metabolic and age-related disease spend captured if one therapeutic axis validates. Highly speculative." }
    ]
  },

  marketMap: [
    {
      segment: "Cellular reprogramming and rejuvenation (pure-play)",
      chainNode: "partial reprogramming platforms",
      companies: [
        {
          name: "Altos Labs",
          ticker: "private",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "private",
          horizon: "long",
          region: "US",
          note: "Best-funded longevity bet, roughly 3B dollars from Bezos and Milner, with Yamanaka advising. Bull: deepest reprogramming bench. Bear: private, pre-clinical, no human efficacy, no public route in."
        },
        {
          name: "Retro Biosciences",
          ticker: "private",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "private",
          horizon: "long",
          region: "US",
          note: "Backed by Sam Altman; became clinical-stage in 2025 by dosing its autophagy small molecule RTR242 (not yet its reprogramming arm). Bull: focused, fast, now in humans. Bear: private, and the reprogramming program remains preclinical."
        },
        {
          name: "Life Biosciences",
          ticker: "private",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "private",
          horizon: "long",
          region: "US",
          note: "Dosed the first human with a partial epigenetic reprogramming therapy (ER-100, eye disease) in June 2026, the first such program FDA-cleared into the clinic. Bull: genuine first-mover in clinical reprogramming. Bear: private, Phase 1 safety only, local indication, no biological-age data yet."
        },
        {
          name: "NewLimit",
          ticker: "private",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "private",
          horizon: "long",
          region: "US",
          note: "Brian Armstrong-backed reprogramming company; raised a large Series C in 2026. Bull: well-capitalized for the long haul. Bear: private, early, science contested."
        },
        {
          name: "Calico Life Sciences",
          ticker: "NASDAQ:GOOGL",
          exposure: "adjacent",
          stance: "watch",
          purity: "low",
          cap: "mega",
          horizon: "long",
          region: "US",
          note: "Alphabet-backed aging lab. Bull: patient capital and long-lived-species genetics. Bear: a rounding error inside Alphabet, so it is not a way to own longevity, only a free option attached to a search and ads business."
        }
      ]
    },
    {
      segment: "Senolytics and aging therapeutics (public, high-risk)",
      companies: [
        {
          name: "Unity Biotechnology",
          ticker: "delisted",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "small",
          horizon: "near",
          region: "US",
          note: "Cautionary case, not a holding. Its lead eye program missed the primary endpoint in 2025; Nasdaq suspended trading in July 2025 and the company moved to dissolve. The clearest warning that listed longevity pure-plays carry binary, often terminal, risk."
        }
      ]
    },
    {
      segment: "Metabolic-aging optionality (incumbent)",
      companies: [
        {
          name: "Eli Lilly",
          ticker: "NYSE:LLY",
          exposure: "adjacent",
          stance: "long",
          purity: "low",
          cap: "mega",
          horizon: "mid",
          region: "US",
          note: "GLP-1 franchise already touches obesity and aging-adjacent disease. Bull: proven cash engine with a free aging option. Bear: longevity is not the thesis here; you are paying a premium multiple for diabetes and obesity, and any aging benefit is unpriced upside, not a reason to buy."
        },
        {
          name: "Novo Nordisk",
          ticker: "NYSE:NVO",
          exposure: "adjacent",
          stance: "long",
          purity: "low",
          cap: "mega",
          horizon: "mid",
          region: "Europe",
          note: "The other GLP-1 leader. Bull: same metabolic-aging optionality, deep manufacturing. Bear: competitive pressure on obesity pricing, and aging is a side effect of the thesis, not the thesis."
        }
      ]
    },
    {
      segment: "Tools and picks-and-shovels (durable)",
      chainNode: "sequencing and lab instruments",
      companies: [
        {
          name: "Illumina",
          ticker: "NASDAQ:ILMN",
          exposure: "enabler",
          stance: "long",
          purity: "low",
          cap: "large",
          horizon: "long",
          region: "US",
          note: "Sequencing sells to every aging lab whatever theory wins. Bull: theory-agnostic toll on the field. Bear: competition in sequencing is eroding the near-monopoly, and aging is a small slice of demand."
        }
      ]
    }
  ],

  atRisk: [
    { name: "Anti-aging supplement and wellness brands", ticker: "various", note: "A validated aging drug would expose the unproven supplement category. Structurally at risk if real therapeutics arrive, though that arrival is far from certain." }
  ],

  lastReviewed: "2026-06"
};

/* -----------------------------------------------------------------------------
   SYNTHETIC BIOLOGY
   Highest conviction of the three, and the most industrial. The durable money
   is in the arms dealers: DNA synthesis, sequencing, bioprocessing tools. The
   platform pure-plays have de-rated hard and remain the speculative cut.
   --------------------------------------------------------------------------- */
window.FUTURIST_INVEST["synthetic-biology"] = {
  thesis: "Programming biology like software moves from labs into chemicals, materials, food and medicine over 30 years. This is the most industrial and most investable of the biology themes. The durable exposure is the arms dealers, the companies selling DNA synthesis, sequencing and bioprocessing gear to everyone in the field. The platform pure-plays carry the upside and most of the risk.",

  howToThink: "Separate the toolmakers from the dreamers. The platform pure-plays, the companies promising to engineer organisms on demand, have been brutal to own; Ginkgo did a 1-for-40 reverse split in 2024 and Recursion is down sharply even after absorbing Exscientia. So a non-expert should anchor on the picks-and-shovels instead. Whoever wins, they buy synthetic DNA from Twist, sequencing from Illumina, and bioprocessing tools from Danaher, Thermo Fisher and Sartorius. Those toll-takers grow with the whole field rather than betting on one organism. Treat the pure-plays as a small, high-variance sleeve, not the core.",

  conviction: {
    rating: "High",
    ourProbability: 0.82,
    street: "Believes in the long-run bioeconomy but has been badly burned by platform pure-plays, so capital has rotated toward profitable tools and bioprocessing names.",
    edge: "We are structurally long the arms dealers and deliberately underweight the platforms. The toll on DNA, sequencing and bioprocessing compounds regardless of which application wins.",
    horizon: "Tools compound now. Broad industrial-scale synbio output inflects in the 2030s and scales into the 2040s and 2050s."
  },

  sCurve: {
    stage: "inflection",
    points: [
      { year: 2026, value: 40, unit: "$B", note: "tools and early applications; platform pure-plays de-rated" },
      { year: 2031, value: 90, unit: "$B", basis: "blends multiple analyst forecasts of roughly 56 to 93B by the early 2030s" },
      { year: 2040, value: 500, unit: "$B" },
      { year: 2056, value: 2000, unit: "$B", basis: "lower end of McKinsey Global Institute Bio Revolution direct-impact range of 4T-plus per year for 2030-40, taken conservatively and labeled an estimate" }
    ]
  },

  marketMap: [
    {
      segment: "DNA synthesis (arms dealer)",
      chainNode: "synthetic DNA and oligo pools",
      companies: [
        {
          name: "Twist Bioscience",
          ticker: "NASDAQ:TWST",
          exposure: "enabler",
          stance: "long",
          purity: "high",
          cap: "small",
          horizon: "long",
          region: "US",
          note: "Silicon-based DNA synthesis sells to nearly every synbio program. Bull: a pure toll on the field, plus NGS tools and data storage optionality. Bear: not yet durably profitable, and synthesis pricing falls over time."
        }
      ]
    },
    {
      segment: "Sequencing (arms dealer)",
      chainNode: "next-generation sequencing platforms",
      companies: [
        {
          name: "Illumina",
          ticker: "NASDAQ:ILMN",
          exposure: "enabler",
          stance: "long",
          purity: "med",
          cap: "large",
          horizon: "long",
          region: "US",
          note: "The read side of read-write biology. Bull: huge installed base and consumables pull-through. Bear: real competition is eroding the near-monopoly and pressuring price per genome."
        }
      ]
    },
    {
      segment: "Bioprocessing and life-science tools (arms dealer)",
      chainNode: "bioreactors, filtration, reagents",
      companies: [
        {
          name: "Danaher",
          ticker: "NYSE:DHR",
          exposure: "enabler",
          stance: "long",
          purity: "med",
          cap: "mega",
          horizon: "long",
          region: "US",
          note: "Bioprocessing and diagnostics conglomerate via Cytiva and Pall. Bull: diversified toll on every biologic and synbio process. Bear: cyclical bioprocessing destocking, and synbio is one slice of a broad portfolio."
        },
        {
          name: "Thermo Fisher Scientific",
          ticker: "NYSE:TMO",
          exposure: "enabler",
          stance: "long",
          purity: "low",
          cap: "mega",
          horizon: "long",
          region: "US",
          note: "The widest supplier of reagents, instruments and CDMO capacity. Bull: nobody runs a lab without it. Bear: low purity, so synbio barely moves the needle; you own a diversified tools giant, not a synbio bet."
        },
        {
          name: "Sartorius",
          ticker: "ETR:SRT3",
          exposure: "enabler",
          stance: "long",
          purity: "med",
          cap: "large",
          horizon: "long",
          region: "Europe",
          note: "German bioprocessing specialist, single-use systems and consumables (preference shares SRT3 are the liquid line). Bull: high-margin recurring consumables on every bioreactor. Bear: post-pandemic destocking and a rich multiple."
        }
      ]
    },
    {
      segment: "Engineered-organism platforms (pure-play, high-risk)",
      companies: [
        {
          name: "Ginkgo Bioworks",
          ticker: "NYSE:DNA",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "small",
          horizon: "long",
          region: "US",
          note: "Cell-programming foundry. Bull: broadest organism-engineering platform, ~$373M cash and no debt, targeting adjusted-EBITDA breakeven by mid-2026 after cutting over $300M of opex. Bear: a 1-for-40 reverse split in 2024, divested biosecurity, and Q1 2026 revenue fell to ~$19M; the model is still unproven at price."
        },
        {
          name: "Recursion Pharmaceuticals",
          ticker: "NASDAQ:RXRX",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "mid",
          horizon: "long",
          region: "US",
          note: "AI-driven drug discovery platform that absorbed Exscientia in 2024. Bull: large pharma partnerships and a full-stack data engine. Bear: shares fell sharply through 2024-25 and the pipeline has yet to validate the platform."
        },
        {
          name: "Schrodinger",
          ticker: "NASDAQ:SDGR",
          exposure: "core",
          stance: "watch",
          purity: "med",
          cap: "small",
          horizon: "long",
          region: "US",
          note: "Physics-based molecular simulation software plus an internal pipeline. Bull: durable software franchise with NVIDIA ties and optional pipeline upside. Bear: pipeline value is unproven and software growth alone has not satisfied the market."
        }
      ]
    }
  ],

  atRisk: [
    { name: "Petrochemical specialty producers", ticker: "various", note: "Bio-manufactured chemicals and materials could undercut petroleum-derived specialties over decades, though incumbents have scale and cost advantages that slow displacement." }
  ],

  lastReviewed: "2026-06"
};

/* -----------------------------------------------------------------------------
   REGENERATIVE MEDICINE
   Mixed bag. The gene editors are public and now have an approved product to
   point to. The cell and organ players (xeno, bioprinting) are part public,
   part private. Real but lumpy, binary at the single-program level.
   --------------------------------------------------------------------------- */
window.FUTURIST_INVEST["regenerative-medicine"] = {
  thesis: "Repairing or replacing failing tissue, through gene editing, cell therapy, manufactured organs and bioprinting, becomes a real category over 30 years. The first CRISPR medicine is already approved, which de-risks the science even as economics and delivery stay hard. Exposure is a mix of public gene editors and mostly private cell and organ players. It is real but lumpy, and binary at the single-program level.",

  howToThink: "This is more investable than longevity but more binary than synbio tools. The public way in is the gene editors, where the science is no longer hypothetical because Casgevy reached the market in late 2023. But single programs are still pass-fail: Intellia's lead in-vivo ATTR program had a patient death and an FDA Phase 3 hold in late 2025, so concentration risk is severe. The frontier areas, manufactured pig organs and 3D bioprinting, are largely private (eGenesis) or small-cap and pre-profit (United Therapeutics owns Revivicor; BICO owns CELLINK). Hold a basket rather than a single name, and expect the eventual organ winners to be private or not yet founded.",

  conviction: {
    rating: "Medium",
    ourProbability: 0.52,
    street: "Cautiously constructive after the first CRISPR approval, but wary of manufacturing cost, delivery limits and program-level safety surprises.",
    edge: "We hold a basket across editing modalities and keep xeno and bioprinting as venture-like optionality, rather than betting on a single program or a single delivery technology.",
    horizon: "Approved editing therapies scale through the 2030s; manufactured organs and bioprinted tissue are a 2040s-plus story if delivery and cost are solved."
  },

  sCurve: {
    stage: "inflection",
    points: [
      { year: 2026, value: 20, unit: "$B", note: "first CRISPR medicine approved; cell and gene therapy still a small, lumpy market" },
      { year: 2030, value: 60, unit: "$B" },
      { year: 2040, value: 200, unit: "$B", basis: "blends cell-and-gene-therapy forecasts of roughly 100-200B by the mid-2030s" },
      { year: 2056, value: 500, unit: "$B", basis: "author estimate extending regenerative-medicine CAGRs (roughly 18-21 percent near term) and tapering; labeled an estimate" }
    ]
  },

  marketMap: [
    {
      segment: "Gene editing platforms (public)",
      chainNode: "CRISPR and base-editing therapeutics",
      companies: [
        {
          name: "CRISPR Therapeutics",
          ticker: "NASDAQ:CRSP",
          exposure: "core",
          stance: "long",
          purity: "high",
          cap: "mid",
          horizon: "mid",
          region: "Europe",
          note: "Co-owns Casgevy, the first approved CRISPR medicine, and holds a large cash position. Bull: validated editor with a pipeline beyond sickle cell; the rollout is ramping (75 treatment centers activated, ~300 patients referred, dozens infused, Vertex guiding to $100M+ Casgevy revenue). Bear: a complex one-time autologous therapy ramps slowly and follow-on programs are unproven."
        },
        {
          name: "Intellia Therapeutics",
          ticker: "NASDAQ:NTLA",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "mid",
          horizon: "mid",
          region: "US",
          note: "Leader in in-vivo editing, editing genes inside the body rather than in a dish. Bull: its hereditary-angioedema program (lonvo-z) posted strong durable Phase 1/2 data and is in global Phase 3. Bear: its lead ATTR program (nex-z) suffered a Grade 4 liver event and a patient death in November 2025, and the FDA placed the Phase 3 MAGNITUDE trials on hold (the MAGNITUDE-2 hold was later lifted with enhanced liver monitoring; MAGNITUDE remains under discussion), a serious overhang on in-vivo Cas9."
        },
        {
          name: "Beam Therapeutics",
          ticker: "NASDAQ:BEAM",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "small",
          horizon: "long",
          region: "US",
          note: "Base editing, swapping single DNA letters without cutting the strand. Bull: a potentially safer, more precise next generation. Bear: the longest-dated bet here, years from proving superiority, and cash-hungry."
        },
        {
          name: "Vertex Pharmaceuticals",
          ticker: "NASDAQ:VRTX",
          exposure: "adjacent",
          stance: "long",
          purity: "low",
          cap: "mega",
          horizon: "mid",
          region: "US",
          note: "Commercial partner on Casgevy and the profitable anchor of the pair. Bull: real cash flows from cystic fibrosis fund the editing optionality. Bear: regenerative medicine is a small part of the story, so this is a free option, not a pure bet."
        }
      ]
    },
    {
      segment: "Xenotransplantation (manufactured organs)",
      chainNode: "gene-edited source pigs",
      companies: [
        {
          name: "United Therapeutics",
          ticker: "NASDAQ:UTHR",
          exposure: "core",
          stance: "long",
          purity: "med",
          cap: "mid",
          horizon: "long",
          region: "US",
          note: "Owns Revivicor and the 10-gene-edited UKidney; its FDA-regulated EXPAND trial performed its first pig-kidney transplant at NYU Langone in November 2025. Bull: an existing profitable franchise funds the first regulated xeno trial and a credible shot at the organ shortage. Bear: xeno is early, ethically and clinically fraught, and far from revenue."
        },
        {
          name: "eGenesis",
          ticker: "private",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "private",
          horizon: "long",
          region: "US",
          note: "Private xenotransplantation company with multi-edit pig programs. Bull: a leading independent organ bet. Bear: private, pre-revenue, and dependent on long clinical timelines, with no public route in."
        }
      ]
    },
    {
      segment: "Bioprinting and tissue engineering",
      chainNode: "3D bioprinters and bioinks",
      companies: [
        {
          name: "BICO Group",
          ticker: "STO:BICO",
          exposure: "enabler",
          stance: "watch",
          purity: "med",
          cap: "small",
          horizon: "long",
          region: "Europe",
          note: "Owns CELLINK and a portfolio of bioprinting and lab-automation tools. Bull: a toll on bioprinting and tissue research as the field grows. Bear: small-cap, restructuring, and printed transplantable organs remain distant."
        }
      ]
    }
  ],

  atRisk: [
    { name: "Chronic disease maintenance drugmakers", ticker: "various", note: "One-time curative editing threatens recurring-revenue treatments for genetic and chronic disease over the long run, though durability and pricing of cures remain unproven." },
    { name: "Dialysis and organ-support providers", ticker: "various", note: "If manufactured organs ever scale, chronic organ-support services face structural pressure, but that is a multi-decade and highly uncertain risk." }
  ],

  lastReviewed: "2026-06"
};
