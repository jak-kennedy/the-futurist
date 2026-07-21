/* =============================================================================
   THE FUTURIST — DATA SCHEMA (canonical)
   =============================================================================
   Every data file in this folder pushes technology objects into the global
   registry below. Load order in index.html: this file first, then the domain
   data files, then the app scripts.

   RULES FOR AUTHORS (human or agent):
   - Plain JS only. No ES modules, no imports. File must pass `node --check`.
   - Every field below is REQUIRED unless marked optional.
   - All people, books, papers, surveys and forecasts must be REAL. Never
     fabricate a URL; cite title/author/year/venue instead.
   - Every probability needs a stated basis (named survey, Metaculus question,
     industry roadmap) or must say "author estimate" with reasoning.
   - Years: optimistic <= consensus <= skeptical. Skeptical may exceed 2056
     (meaning "maybe not in 30 years").
   - Writing voice: vivid, concrete, zero jargon at Feynman level 1; precise
     and technical by level 4. Short sentences. No hedging mush.

   SHAPE — one technology object:
   {
     id: "fusion-power",            // kebab-case, unique across all files
     name: "Fusion Power",          // display name
     shortName: "Fusion",           // <= 14 chars, for compact UI
     tagline: "One sentence that makes a smart stranger care.",
     domain: "energy",              // intelligence | energy | biology | machines | planet-space
     glyph: "✹",                    // single unicode character used as the icon
     status: "pilot",               // speculative | lab | pilot | scaling
     consequence: 9,                // integer 1-10: how much this reshapes life by 2056

     probability: {
       value: 0.75,                 // 0-1: probability the "definition" below is true by 2056
       definition: "Grid-connected fusion supplies >1% of world electricity by 2056",
       basis: "Metaculus community median for first commercial plant (~2045); FIA industry survey 2024",
       range: [0.5, 0.9]            // honest uncertainty band around value
     },

     arrival: {                     // year the technology "arrives" per scenario
       optimistic: 2035,            // believers / aggressive roadmaps
       consensus: 2045,             // median expert / forecaster view
       skeptical: 2062              // informed skeptics (may be > 2056)
     },

     whyItMatters: "2-3 sentences on what changes if this happens.",

     feynman: [                     // exactly 4 levels, in order
       { level: 1, label: "The kitchen-table version",
         body: "150-250 words. Explain to a curious 12-year-old. Lead with an analogy. Zero jargon." },
       { level: 2, label: "The mechanism",
         body: "150-250 words. How it actually works, introducing the few terms that matter." },
       { level: 3, label: "The hard part",
         body: "150-250 words. Why this is difficult; what the current frontier looks like; what numbers people track." },
       { level: 4, label: "The frontier",
         body: "150-250 words. Expert level: competing approaches, open problems, key metrics, what would change minds." }
     ],

     timeline: {
       milestones: [                // the TRUNK: 6-9 nodes, ordered by consensus year.
         {                          // include 1-2 already-achieved nodes to anchor the story in the past
           id: "m1",                // unique within this technology
           title: "Net energy gain in the lab",
           kind: "breakthrough",    // breakthrough | invention | scaleup | deployment | policy
           years: { optimistic: 2022, consensus: 2022, skeptical: 2022 },
           detail: "2-4 sentences: what this milestone is, why it gates progress, who is closest.",
           done: true               // true only if already achieved as of 2026
         }
       ],
       branches: [                  // 2-3 DIRECTIONAL forks: different ways the technology could go
         {
           id: "b1",
           name: "Tokamak path",
           fromMilestone: "m3",     // trunk milestone id where this branch diverges
           probability: 0.45,       // chance THIS direction is the winning one (branches sum to <= 1)
           summary: "1-2 sentences on this direction and who is betting on it.",
           milestones: [            // 2-4 nodes, same shape as trunk milestones (ids unique, e.g. "b1m1")
             { id: "b1m1", title: "...", kind: "scaleup",
               years: { optimistic: 2031, consensus: 2036, skeptical: 2044 },
               detail: "...", done: false }
           ]
         }
       ]
     },

     backcast: {                    // mapping the future BACK to today
       today: [                     // 3-5 strings: what concretely exists right now (2026)
         "NIF achieved ignition in Dec 2022 and has repeated it."
       ],
       dependencies: [              // 3-5 enabling technologies this one needs
         { name: "High-temperature superconducting tape", why: "1 sentence", state: "1 sentence on where it stands today" }
       ],
       supplyChain: [               // 3-5 physical/industrial inputs; flag chokepoints
         { item: "REBCO superconducting tape", why: "1 sentence",
           players: "Fujikura, Faraday Factory, SuperPower", chokepoint: true }
       ],
       leadingIndicators: [         // 3-5 strings: what to watch in the next 24 months
         "Commonwealth Fusion's SPARC achieving Q>1 plasma (target 2026-27)."
       ]
     },

     people: [                      // 4-6 REAL thought leaders
       { name: "Full Name", role: "what they do", org: "affiliation",
         note: "1 sentence: why they matter and what view they hold" }
     ],

     reading: [                     // 4-6 REAL sources
       { title: "Exact real title", author: "Author(s)", year: 2023,
         type: "book",              // book | paper | article | forecast | report
         note: "1 sentence: what you get from it" }
     ]
   }
   ============================================================================= */

/* =============================================================================
   SUPPLY CHAIN DEEP-DIVE (one entry per technology, in data/chains-<domain>.js)
   =============================================================================
   Registered separately from the core objects so the v1 data files stay
   untouched. Keyed by technology id:

   window.FUTURIST_CHAINS["fusion-power"] = {
     overview: "3-4 sentences: the shape of this chain, where the power sits, what is mature vs missing.",
     tiers: [                       // exactly 4, ordered upstream -> downstream
       {
         name: "Raw materials & feedstocks",   // tier names fixed: see below
         links: [                   // 2-4 per tier
           {
             item: "Enriched lithium-6",
             role: "tritium breeding blankets",            // <= 12 words
             players: "TerraPower/USDOE pilot; historical Y-12 stockpile",  // REAL named companies/labs/countries
             geography: "US stockpile legacy; China and Russia active",     // where it concentrates
             concentration: "single-source",  // single-source | concentrated | diversified
             chokepoint: true,
             risk: "1-2 sentences on the failure mode.",
             fix: "1 sentence: substitutes or workarounds being developed." // OPTIONAL
           }
         ]
       },
       { name: "Components & subsystems", links: [...] },
       { name: "Manufacturing & integration", links: [...] },
       { name: "Deployment & operations", links: [...] }
     ],
     topChokepoints: [              // exactly 3, ranked most binding first
       { item: "REBCO tape", why: "1-2 sentences: why this is the binding constraint." }
     ],
     geopolitics: "3-5 sentences: the geographic and political shape of the chain. Who holds leverage, what breaks under export controls or conflict, what reshoring is underway."
   };

   Tier names are FIXED (use exactly these four):
     "Raw materials & feedstocks" / "Components & subsystems" /
     "Manufacturing & integration" / "Deployment & operations"
   concentration enum is FIXED: single-source | concentrated | diversified.
   Same author rules as above: real players only, no fabricated URLs, every
   contested claim hedged honestly. Mark 1-2 chokepoints per tier at most.
   ============================================================================= */

/* =============================================================================
   INVESTABLE MAP (one entry per technology, in data/invest-<domain>.js)
   =============================================================================
   The bridge from "understand it" to "how would you get exposure over 30 years."
   Registered separately (core data + chains stay untouched). Keyed by tech id.
   This is a 30-YEAR STRUCTURAL view, never a near-term trade. It must TEACH a
   non-expert: most pure-plays are private/pre-revenue, durable exposure is often
   the supply-chain "arms dealers," incumbents carry optionality, and the bear
   case is stated plainly.

   window.FUTURIST_INVEST["fusion-power"] = {
     thesis: "2-3 sentences: the 30-year structural investment case.",

     howToThink: "3-4 sentences for a NON-EXPERT: how to get exposure to this over " +
       "30 years. Why pure-plays may be private/pre-revenue, why the durable play is " +
       "often the chokepoint owners, where incumbents have optionality, the bear case.",

     conviction: {
       rating: "Medium",            // High | Medium | Low  (structural, 30-year)
       ourProbability: 0.30,        // mirror the core data probability for this tech
       street: "What consensus / the market currently believes (1 sentence).",
       edge: "Our variant view in 1 sentence: where and why we differ.",
       horizon: "When the thesis pays: e.g. 'exposure builds 2030s, inflection ~2040'."
     },

     sCurve: {
       stage: "nascent",            // nascent | inflection | scaling
       points: [                    // 3-5 points, ascending years, through 2056
         { year: 2026, value: 0,   unit: "$B", note: "pre-revenue" },
         { year: 2040, value: 20,  unit: "$B" },
         { year: 2056, value: 350, unit: "$B", basis: "source / how derived" }
       ]
     },

     marketMap: [                   // segments = the investable cuts of the value chain
       {
         segment: "High-field magnets & HTS tape",
         chainNode: "REBCO superconducting tape",   // OPTIONAL: links to a supply-chain item
         companies: [               // 2-6 per segment
           {
             name: "Commonwealth Fusion Systems",
             ticker: "private",     // REAL ticker (e.g. "NASDAQ:NVDA"), or "private" / "pre-IPO"
             exposure: "pure-play", // pure-play | core | adjacent | enabler
             stance: "long",        // long | short | watch  (beneficiary vs at-risk)
             purity: "high",        // high | med | low  (how much of the company IS this tech)
             cap: "private",        // mega | large | mid | small | private
             horizon: "long",       // near | mid | long  (when this exposure matters)
             region: "US",
             note: "1-2 sentences: the bull, and the bear/risk."
           }
         ]
       }
     ],

     atRisk: [                      // OPTIONAL 0-4: who the 30-year shift disrupts (shorts)
       { name: "...", ticker: "...", note: "1-2 sentences: why this is structurally at risk." }
     ],

     lastReviewed: "2026-06"        // provenance: when this was last checked
   };

   RULES (in addition to the global author rules):
   - 30-year structural framing only. No quarterly catalysts, no price targets.
   - REAL, verifiable tickers. If unsure, use "private"/"pre-IPO" or say so in the
     note. NEVER fabricate a ticker or a company.
   - enums are FIXED: exposure {pure-play|core|adjacent|enabler}, stance {long|short|
     watch}, purity {high|med|low}, cap {mega|large|mid|small|private}, horizon
     {near|mid|long}, stage {nascent|inflection|scaling}.
   - Be honest: flag where the eventual winners are likely private or not yet founded,
     and where the only clean public exposure today is an "arms dealer."
   ============================================================================= */

window.FUTURIST_DATA = window.FUTURIST_DATA || [];
window.FUTURIST_CHAINS = window.FUTURIST_CHAINS || {};
window.FUTURIST_INVEST = window.FUTURIST_INVEST || {};

window.FUTURIST_DOMAINS = {
  "intelligence": { label: "Intelligence",   color: "#4f6bf0" },
  "energy":       { label: "Energy",         color: "#e8862f" },
  "biology":      { label: "Biology",        color: "#15a866" },
  "machines":     { label: "Machines",       color: "#db4f86" },
  "planet-space": { label: "Planet & Space", color: "#7a52e8" },
  "security-defense":   { label: "Security & Defense",   color: "#b83b3b" },
  "money-institutions": { label: "Money & Institutions", color: "#0d9488" }
};
