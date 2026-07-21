/* =============================================================================
   THE FUTURIST: INVESTABLE MAP: ENERGY
   =============================================================================
   Three 30-year structural exposure maps. Not trades. Not price targets.
   Tickers verified June 2026; private companies labeled where no clean public
   security exists. Bear case stated first where the case is contested.

   Technologies registered here:
     fusion-power     (probability 0.30, mirrors core data)
     energy-storage   (probability 0.92, mirrors core data)
     superconductors  (probability 0.12, mirrors core data)

   Author rules followed: real tickers only, no fabricated companies, estimates
   labeled, enums fixed per _schema.js INVESTABLE MAP block.
   ============================================================================= */

window.FUTURIST_INVEST = window.FUTURIST_INVEST || {};

/* ---------------------------------------------------------------------------
   FUSION POWER
   --------------------------------------------------------------------------- */
window.FUTURIST_INVEST["fusion-power"] = {
  thesis: "Fusion is real physics now, ignition happened at NIF in December 2022, but it is not yet a business. The 30-year case is that electricity demand keeps compounding while the first commercial plants arrive in the late 2030s and 2040s. Almost all of that upside sits in private companies today, so the durable public exposure is the supply chain every approach must buy from.",

  howToThink: "You mostly cannot buy fusion yet. The companies chasing it, Commonwealth Fusion, Helion, TAE, Tokamak Energy, General Fusion, are private, which leaves public investors three doors: the arms dealers selling superconducting tape and magnets to every approach, the turbine and grid incumbents who build the back half of any power plant, and giant strategics like Eni and Alphabet whose fusion stakes are rounding errors on the parent. The durable door is the first one, because tape makers get paid whether or not any single startup wins. The bear case is simple: timelines slip by decades, tritium fuel and reactor materials stay unsolved, and the private leaders either raise forever or die, as General Fusion's 2025 funding crisis showed.",

  conviction: {
    rating: "Medium",
    ourProbability: 0.30,
    street: "Consensus treats fusion as perpetually 30 years away and assigns listed markets essentially zero fusion value.",
    edge: "We think high-temperature superconducting magnets compressed the timeline enough that the supply chain gets paid in the 2030s even if utility-scale fusion power slips.",
    horizon: "Arms-dealer revenue builds from the late 2020s; fusion electricity revenue is a 2040s story."
  },

  sCurve: {
    stage: "nascent",
    points: [
      { year: 2026, value: 0, unit: "$B", note: "pre-revenue; FIA annual surveys count roughly $10B of cumulative private funding" },
      { year: 2036, value: 5, unit: "$B", note: "pilot plants plus magnet and component sales" },
      { year: 2046, value: 60, unit: "$B" },
      { year: 2056, value: 250, unit: "$B", basis: "author estimate: fusion at 1-2% of global electricity sales plus plant construction by the mid-2050s, against IEA-sized multi-trillion-dollar annual power markets; FIA company timelines haircut by roughly a decade" }
    ]
  },

  marketMap: [
    {
      segment: "Fusion developers (almost all private)",
      chainNode: "Pilot plants and demonstrators",
      companies: [
        {
          name: "Commonwealth Fusion Systems",
          ticker: "private",
          exposure: "pure-play",
          stance: "long",
          purity: "high",
          cap: "private",
          horizon: "long",
          region: "US",
          note: "Bull: the best-funded private developer, SPARC roughly 75% built with first plasma targeted for 2027, plus the ARC Fall Line plant in Virginia carrying a 200 MW Google offtake signed June 2025 and a PJM interconnection application. Bear: zero revenue for years, and each scale-up step needs another billion-dollar raise."
        },
        {
          name: "Helion Energy",
          ticker: "private",
          exposure: "pure-play",
          stance: "long",
          purity: "high",
          cap: "private",
          horizon: "long",
          region: "US",
          note: "Bull: a Microsoft power purchase agreement, a direct-electricity-recovery design that skips the steam cycle, and a Polaris machine that hit 150 million degrees Celsius and measured deuterium-tritium fusion in early 2026. Bear: the most aggressive timeline in the field, with a 2028 Orion delivery few independent physicists believe."
        },
        {
          name: "TAE Technologies",
          ticker: "private",
          exposure: "pure-play",
          stance: "long",
          purity: "high",
          cap: "private",
          horizon: "long",
          region: "US",
          note: "Bull: aneutronic hydrogen-boron goal with backers including Google and Japanese utilities. Bear: its fuel needs plasma roughly ten times hotter than deuterium-tritium rivals, so it is the longest road."
        },
        {
          name: "Tokamak Energy",
          ticker: "private",
          exposure: "pure-play",
          stance: "long",
          purity: "high",
          cap: "private",
          horizon: "long",
          region: "UK",
          note: "Bull: spherical tokamak program plus a real merchant HTS magnet business that sells to others today. Bear: a thinner home funding environment than its US peers."
        },
        {
          name: "General Fusion",
          ticker: "private",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "private",
          horizon: "long",
          region: "Canada",
          note: "Bull: magnetized-target approach; its LM26 machine reached first plasma and first plasma compression in 2025, and a US$22M lifeline in August 2025 kept it alive with a Nasdaq listing reportedly explored. Bear: laid off about a quarter of staff in May 2025 in a financing crunch, a live warning about private fusion funding risk."
        }
      ]
    },
    {
      segment: "HTS tape and magnets (the arms dealers)",
      chainNode: "REBCO superconducting tape",
      companies: [
        {
          name: "Fujikura",
          ticker: "TSE:5803",
          exposure: "enabler",
          stance: "long",
          purity: "low",
          cap: "large",
          horizon: "mid",
          region: "Japan",
          note: "Bull: a leading REBCO tape supplier riding fusion magnet orders on top of AI data-center cabling demand. Bear: tape is a small slice of a diversified cable company, and order flow hangs on a handful of startups."
        },
        {
          name: "Furukawa Electric",
          ticker: "TSE:5801",
          exposure: "enabler",
          stance: "long",
          purity: "low",
          cap: "mid",
          horizon: "mid",
          region: "Japan",
          note: "Bull: owns SuperPower, one of the few proven REBCO lines outside Japan, alongside its own superconductor program. Bear: superconductors are a sliver of a legacy cable conglomerate."
        },
        {
          name: "Bruker",
          ticker: "NASDAQ:BRKR",
          exposure: "enabler",
          stance: "long",
          purity: "low",
          cap: "mid",
          horizon: "mid",
          region: "US",
          note: "Bull: decades of superconducting magnet and wire craft through Bruker EST, selling to big science whoever wins fusion. Bear: the life-science instrument cycle drives the stock, and fusion content is small."
        },
        {
          name: "Faraday Factory Japan",
          ticker: "private",
          exposure: "enabler",
          stance: "watch",
          purity: "high",
          cap: "private",
          horizon: "mid",
          region: "Japan",
          note: "Bull: the largest dedicated HTS tape producer, with capacity booked by fusion startups. Bear: private, single-product, and expansion needs fresh capital."
        }
      ]
    },
    {
      segment: "Plant builders and turbine incumbents (optionality)",
      chainNode: "Balance of plant",
      companies: [
        {
          name: "GE Vernova",
          ticker: "NYSE:GEV",
          exposure: "adjacent",
          stance: "long",
          purity: "low",
          cap: "large",
          horizon: "long",
          region: "US",
          note: "Bull: any fusion plant still needs the turbine island, generators, and grid gear GE Vernova sells, and it wins from electricity demand growth either way. Bear: fusion is a rounding error on its earnings for decades."
        },
        {
          name: "Siemens Energy",
          ticker: "ETR:ENR",
          exposure: "adjacent",
          stance: "long",
          purity: "low",
          cap: "large",
          horizon: "long",
          region: "Germany",
          note: "Bull: turbines, transformers, and grid equipment for whichever generation technology wins, with deep utility relationships. Bear: fusion content is indistinguishable from zero today; gas and grid are the real earnings drivers."
        }
      ]
    },
    {
      segment: "Strategic backers (homeopathic exposure)",
      companies: [
        {
          name: "Eni",
          ticker: "BIT:ENI",
          exposure: "adjacent",
          stance: "watch",
          purity: "low",
          cap: "large",
          horizon: "long",
          region: "Italy",
          note: "Bull: the earliest oil-major backer of Commonwealth Fusion, with a stated plan to industrialize fusion power. Bear: the stake is immaterial to a hydrocarbon company, so this is optionality, not exposure."
        },
        {
          name: "Alphabet",
          ticker: "NASDAQ:GOOGL",
          exposure: "adjacent",
          stance: "watch",
          purity: "low",
          cap: "mega",
          horizon: "long",
          region: "US",
          note: "Bull: investor in Commonwealth Fusion and TAE and the first large corporate buyer of fusion power via a 200 MW ARC offtake. Bear: nobody should buy a multi-trillion-dollar advertising company for its fusion stake."
        }
      ]
    }
  ],

  lastReviewed: "2026-06"
};

/* ---------------------------------------------------------------------------
   GRID-SCALE ENERGY STORAGE
   --------------------------------------------------------------------------- */
window.FUTURIST_INVEST["energy-storage"] = {
  thesis: "Grid-scale storage is the rare frontier technology that is already a business, with stationary battery packs hitting 70 dollars per kWh in 2025, the cheapest battery segment of all, and terawatt-hour deployment ahead. The 30-year case is that storage becomes standard grid equipment the way gas turbines once did. The complication is that the midstream is concentrated in China, which is simultaneously the cost engine and the geopolitical risk.",

  howToThink: "This is the one of the three you can own today through profitable manufacturers and integrators. Think in four layers: cell makers (the Chinese and Korean giants), system integrators and software, upstream lithium, and the next curve of long-duration chemistries like iron-air. The uncomfortable fact is that cost leadership lives in China, so the cheapest exposure carries tariff and sanction risk, while Western champions can simply fail, as Northvolt's bankruptcy showed. The bear case is not whether storage deploys, it is margin: cells can commoditize the way solar panels did, which is why integrators with software attach and upstream bottleneck owners matter as much as gigafactories.",

  conviction: {
    rating: "High",
    ourProbability: 0.92,
    street: "Consensus already believes storage wins; BloombergNEF-style deployment forecasts are steep, so the debate is who keeps margin, not whether it deploys.",
    edge: "We think AI-era load growth and duration creep extend the build-out decades past consensus curves, and that integrators and chokepoint owners hold margin better than cell assemblers.",
    horizon: "Paying now; compounds through the 2030s, with long-duration chemistries inflecting around 2030-2035."
  },

  sCurve: {
    stage: "scaling",
    points: [
      { year: 2026, value: 60, unit: "$B", note: "annual stationary storage investment; BloombergNEF and IEA tallies for 2024-25 cluster in the $50-70B range" },
      { year: 2035, value: 150, unit: "$B" },
      { year: 2045, value: 260, unit: "$B" },
      { year: 2056, value: 380, unit: "$B", basis: "author extrapolation of BloombergNEF New Energy Outlook and IEA deployment curves; installed volume multiplies while price per kWh keeps falling, so dollars grow slower than gigawatt-hours" }
    ]
  },

  marketMap: [
    {
      segment: "Battery cells (the midstream giants)",
      chainNode: "LFP and sodium-ion cell manufacturing",
      companies: [
        {
          name: "CATL",
          ticker: "SHE:300750",
          exposure: "core",
          stance: "long",
          purity: "med",
          cap: "large",
          horizon: "near",
          region: "China",
          note: "Bull: the global cost and technology leader, roughly a third of the world cell market, Naxtra sodium-ion in mass production from December 2025, and a May 2025 Hong Kong dual-listing (HKG:3750, the year's largest IPO at about US$5.3B) that eases foreign access. Bear: US tariffs and export controls, and EV exposure still dwarfs the storage line."
        },
        {
          name: "BYD",
          ticker: "HKG:1211",
          exposure: "core",
          stance: "long",
          purity: "low",
          cap: "large",
          horizon: "near",
          region: "China",
          note: "Bull: vertically integrated from cells to systems, with a fast-growing grid storage unit. Bear: it is mostly a car company, and the same China-exposure discount applies."
        },
        {
          name: "LG Energy Solution",
          ticker: "KRX:373220",
          exposure: "core",
          stance: "long",
          purity: "low",
          cap: "large",
          horizon: "mid",
          region: "South Korea",
          note: "Bull: the leading non-Chinese cell maker, positioned inside tariff-walled Western markets. Bear: playing LFP catch-up on cost, and EV demand swings drive results more than storage."
        },
        {
          name: "Panasonic",
          ticker: "TSE:6752",
          exposure: "core",
          stance: "watch",
          purity: "low",
          cap: "large",
          horizon: "mid",
          region: "Japan",
          note: "Bull: proven high-volume cell manufacturing and a long Tesla relationship. Bear: lost share for a decade, storage is a small slice, and the conglomerate dilutes the exposure."
        }
      ]
    },
    {
      segment: "Integration, software, and distributed systems",
      chainNode: "Grid-scale system integration",
      companies: [
        {
          name: "Tesla",
          ticker: "NASDAQ:TSLA",
          exposure: "core",
          stance: "long",
          purity: "low",
          cap: "mega",
          horizon: "near",
          region: "US",
          note: "Bull: Megapack is a profitable, capacity-constrained storage business with its own factories. Bear: the stock prices autonomy and robotics narratives, so you buy the whole Tesla complex to get a storage slice."
        },
        {
          name: "Fluence Energy",
          ticker: "NASDAQ:FLNC",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "small",
          horizon: "mid",
          region: "US",
          note: "Bull: the cleanest US-listed storage pure-play, born from Siemens and AES, with a real global project book. Bear: thin integration margins against Chinese turnkey rivals and lumpy contracts; pure-play has not meant good business."
        },
        {
          name: "Sungrow Power Supply",
          ticker: "SHE:300274",
          exposure: "core",
          stance: "long",
          purity: "med",
          cap: "large",
          horizon: "near",
          region: "China",
          note: "Bull: a top global inverter and storage-system vendor with strong emerging-market share. Bear: the same China concentration many buyers are trying to diversify away from."
        },
        {
          name: "Enphase Energy",
          ticker: "NASDAQ:ENPH",
          exposure: "adjacent",
          stance: "watch",
          purity: "low",
          cap: "mid",
          horizon: "mid",
          region: "US",
          note: "Bull: home batteries attach to its microinverter base as distributed storage spreads. Bear: US residential solar policy whiplash crushed demand and showed how fragile the rooftop channel is."
        }
      ]
    },
    {
      segment: "Lithium and upstream materials",
      chainNode: "Lithium processing capacity",
      companies: [
        {
          name: "Albemarle",
          ticker: "NYSE:ALB",
          exposure: "enabler",
          stance: "long",
          purity: "med",
          cap: "mid",
          horizon: "mid",
          region: "US",
          note: "Bull: the largest Western lithium producer, levered to any storage demand surprise. Bear: brutal price cycles, proven by the 2023-25 crash, plus sodium-ion substitution at the margin."
        },
        {
          name: "SQM",
          ticker: "NYSE:SQM",
          exposure: "enabler",
          stance: "long",
          purity: "med",
          cap: "mid",
          horizon: "mid",
          region: "Chile",
          note: "Bull: among the lowest-cost brine assets on earth in the Atacama. Bear: the state partnership with Codelco caps economics, and the same lithium cycle risk applies."
        }
      ]
    },
    {
      segment: "Long-duration storage (the next curve)",
      chainNode: "Iron-air and novel chemistries",
      companies: [
        {
          name: "Form Energy",
          ticker: "private",
          exposure: "pure-play",
          stance: "long",
          purity: "high",
          cap: "private",
          horizon: "long",
          region: "US",
          note: "Bull: iron-air 100-hour batteries at a target near $20 per kWh, with the first Great River Energy pilot online and an 85 MW / 8,500 MWh Lincoln, Maine plant toward 2027 construction. Bear: roughly 50% round-trip efficiency limits use cases, and manufacturing scale-up is unproven; private, so watch for an IPO."
        },
        {
          name: "Eos Energy Enterprises",
          ticker: "NASDAQ:EOSE",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "small",
          horizon: "mid",
          region: "US",
          note: "Bull: zinc-based long-duration chemistry with US manufacturing and federal loan support. Bear: years of losses and heavy dilution; execution at scale is still the open question."
        }
      ]
    }
  ],

  atRisk: [
    {
      name: "Generac",
      ticker: "NYSE:GNRC",
      note: "Standby generators are the incumbent product that home and small-business batteries replace over 30 years. Generac knows it and is buying its way into energy technology, so this is a slow squeeze, not a collapse."
    }
  ],

  lastReviewed: "2026-06"
};

/* ---------------------------------------------------------------------------
   ROOM-TEMPERATURE SUPERCONDUCTORS
   --------------------------------------------------------------------------- */
window.FUTURIST_INVEST["superconductors"] = {
  thesis: "An ambient-pressure room-temperature superconductor does not exist, and the field's loudest recent claims, LK-99 and the Dias papers, collapsed under scrutiny. The 30-year case is a low-probability, civilization-scale option: lossless wires would remake grids, magnets, and computing. With no pure-play security available, honest exposure today means the cooled-superconductor industry that already sells to MRI, science, and fusion.",

  howToThink: "Start by accepting that you cannot buy room-temperature superconductivity, and treat any stock promoted as a room-temp play as a red flag. What you can own is the existing cooled-superconductor industry: tape and wire makers, magnet and instrument builders, and the MRI giants who operate the largest commercial superconducting fleet on earth. Those names get paid by fusion magnets and grid pilots even if room-temp never arrives, which is the right way to hold a roughly 12% lottery ticket. If a real discovery comes, it will likely surface in a university lab or a startup that does not exist yet, so the listed beneficiaries would be the toolmakers and tape producers who retool first.",

  conviction: {
    rating: "Low",
    ourProbability: 0.12,
    street: "After LK-99 and the Dias retractions, the market assigns room-temperature superconductivity near-zero probability and zero listed value.",
    edge: "We are slightly above zero because superhydride physics is real, ambient-pressure nickelate films reached a 63 K Tc onset in 2025, and AI-driven materials search widens the funnel, but we agree there is nothing to buy yet; the edge is knowing which existing names benefit first.",
    horizon: "Optionality only; the cooled HTS niche compounds through the 2030s, and any room-temp payoff is 2040s or never."
  },

  sCurve: {
    stage: "nascent",
    points: [
      { year: 2026, value: 7, unit: "$B", note: "existing superconductor product market, mostly MRI magnets; Conectus-style industry estimates cluster near $5-8B" },
      { year: 2036, value: 15, unit: "$B" },
      { year: 2046, value: 30, unit: "$B" },
      { year: 2056, value: 55, unit: "$B", basis: "author estimate: cooled HTS growth from fusion magnets and grid pilots only; deliberately excludes the low-probability room-temperature scenario, which would eventually address grid hardware markets in the hundreds of billions per year" }
    ]
  },

  marketMap: [
    {
      segment: "HTS tape and wire (the closest thing to exposure)",
      chainNode: "REBCO superconducting tape",
      companies: [
        {
          name: "American Superconductor",
          ticker: "NASDAQ:AMSC",
          exposure: "core",
          stance: "long",
          purity: "med",
          cap: "small",
          horizon: "mid",
          region: "US",
          note: "Bull: real HTS wire heritage plus profitable grid and navy systems businesses. Bear: most revenue is conventional power electronics, and the stock spikes on every superconductivity rumor, then round-trips."
        },
        {
          name: "Fujikura",
          ticker: "TSE:5803",
          exposure: "enabler",
          stance: "long",
          purity: "low",
          cap: "large",
          horizon: "mid",
          region: "Japan",
          note: "Bull: REBCO tape leadership; any superconductor boom, fusion or room-temp, flows through tape. Bear: a cable conglomerate first, with superconductors a small sliver."
        },
        {
          name: "Furukawa Electric",
          ticker: "TSE:5801",
          exposure: "enabler",
          stance: "long",
          purity: "low",
          cap: "mid",
          horizon: "mid",
          region: "Japan",
          note: "Bull: owns SuperPower and decades of superconducting wire experience. Bear: same conglomerate dilution; the exposure is real but thin."
        },
        {
          name: "Faraday Factory Japan",
          ticker: "private",
          exposure: "enabler",
          stance: "watch",
          purity: "high",
          cap: "private",
          horizon: "mid",
          region: "Japan",
          note: "Bull: the largest dedicated HTS tape maker; the purest superconductor manufacturer anywhere. Bear: private and single-product, so public investors can only watch for now."
        }
      ]
    },
    {
      segment: "Magnets and scientific instruments",
      chainNode: "Superconducting magnet systems",
      companies: [
        {
          name: "Bruker",
          ticker: "NASDAQ:BRKR",
          exposure: "core",
          stance: "long",
          purity: "low",
          cap: "mid",
          horizon: "mid",
          region: "US",
          note: "Bull: builds the superconducting magnets and wire the field runs on, and would be an early commercial mover on any new material. Bear: the life-science instrument cycle, not superconductivity, drives the stock."
        },
        {
          name: "Oxford Instruments",
          ticker: "LON:OXIG",
          exposure: "enabler",
          stance: "long",
          purity: "med",
          cap: "small",
          horizon: "mid",
          region: "UK",
          note: "Bull: cryostats and superconducting magnets for serious materials labs; it sells the tools the search itself runs on. Bear: a small-cap instrument maker whose fortunes track research budgets, not breakthroughs."
        }
      ]
    },
    {
      segment: "MRI systems (largest commercial superconductor market today)",
      chainNode: "Medical imaging magnets",
      companies: [
        {
          name: "Siemens Healthineers",
          ticker: "ETR:SHL",
          exposure: "adjacent",
          stance: "long",
          purity: "low",
          cap: "large",
          horizon: "long",
          region: "Germany",
          note: "Bull: the world's largest MRI installed base runs on superconducting magnets, and cheaper or cryogen-free conductors would expand imaging everywhere. Bear: a healthcare company; superconductivity is an input cost, not a business line."
        },
        {
          name: "GE HealthCare",
          ticker: "NASDAQ:GEHC",
          exposure: "adjacent",
          stance: "long",
          purity: "low",
          cap: "large",
          horizon: "long",
          region: "US",
          note: "Bull: same MRI leverage plus a helium-light magnet program that benefits directly from better conductors. Bear: imaging demand and hospital capex set the stock, not materials physics."
        }
      ]
    }
  ],

  lastReviewed: "2026-06"
};

/* ---------------------------------------------------------------------------
   ADVANCED NUCLEAR FISSION & SMRs
   --------------------------------------------------------------------------- */
window.FUTURIST_INVEST["nuclear-fission"] = {
  thesis: "AI and datacenter power demand converted nuclear from a stranded, declining asset story into a contracted-growth story with real hyperscaler offtake. Over 30 years the durable exposure is less the first-of-a-kind reactor designers, which are binary and pre-revenue, and more the fuel-cycle chokepoint owners and the existing-fleet operators who monetize scarce firm power today. Physics and licensing are no longer the binding constraint; the open bet is FOAK construction cost and whether repeat builds actually get cheaper.",

  howToThink: "The listed pure-plays, Oklo, NuScale, X-energy, and Nano Nuclear, are pre-revenue or barely past it and their equity is priced on multi-gigawatt letters of intent rather than delivered power, so each is a first-of-a-kind execution bet whose reference outcome is NuScale's cancelled UAMPS project where the price crept from $58 to $89 per MWh and the deal died. The cleaner structural door is the fuel front-end: enriched HALEU is the binding chokepoint and Centrus is the closest thing to a picks-and-shovels arms dealer, paid whichever reactor design wins, with the rest of the cycle (Cameco, BWXT, Urenco, Orano) selling into every build. The lowest-risk exposure is the existing-fleet operators, Constellation, Vistra, and Talen, who already sell firm nuclear power into hyperscaler PPAs, alongside diversified vendors like GE Vernova that carry BWRX-300 optionality without the binary. The bear case is blunt: every US project is FOAK or near-FOAK, timelines slip from 2027 to 2030 to later, HALEU depends on a Russian-dominated supply base, and credible skeptics (Macfarlane, Lyman) argue SMRs arrive too late and too expensive to matter and add proliferation risk.",

  conviction: {
    rating: "Medium",
    ourProbability: 0.70,
    street: "The market has re-rated nuclear on the AI-power narrative and prices the pure-plays as if serial, cost-competitive fleets are a question of when, not if.",
    edge: "We think the durable money sits in the HALEU fuel chokepoint and the existing-fleet operators, not the FOAK developers, and that 'tens of GW by 2056' is plausible while the federal '400 GW by 2050' target is not.",
    horizon: "Operator and fuel-cycle cash flows compound through the late 2020s and 2030s; a defended Nth-of-a-kind SMR cost below firm alternatives is a 2030s-into-2040s test."
  },

  sCurve: {
    stage: "inflection",
    points: [
      { year: 2026, value: 0, unit: "GWe", note: "zero commercial SMRs generating; construction permits in hand (TerraPower Natrium Mar 2026, Kairos Hermes), TMI/Crane restart targeted 2027-28" },
      { year: 2035, value: 6, unit: "GWe", note: "first advanced units and BWRX-300 fleet starts (Darlington, Clinch River) plus completed restarts" },
      { year: 2045, value: 30, unit: "GWe" },
      { year: 2056, value: 80, unit: "GWe", basis: "author estimate: the brief's 'tens of GW of new advanced-nuclear capacity' arrival case; well short of the aspirational 400 GW-by-2050 federal target and dependent on serial cost decline being proven" }
    ]
  },

  marketMap: [
    {
      segment: "Pure-plays (FOAK, pre- or early-revenue)",
      chainNode: "Advanced reactor designs and HALEU enrichment",
      companies: [
        {
          name: "Oklo",
          ticker: "NYSE:OKLO",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "mid",
          horizon: "long",
          region: "US",
          note: "Bull: the largest contracted pipeline in the field at roughly 14 GW (Switch, Meta, others), DOE groundbreaking on the Aurora fast microreactor at INL, about $1.2B liquidity and no debt. Bear: zero commercial revenue after 13 years, a 2025 operating loss near $139M, and a valuation that runs on pipeline LOIs rather than delivered power."
        },
        {
          name: "NuScale Power",
          ticker: "NYSE:SMR",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "mid",
          horizon: "long",
          region: "US",
          note: "Bull: the only NRC-certified SMR design, with a US460 uprate and Fluor backing, so it carries the licensing lead. Bear: it also carries the UAMPS/CFPP cancellation scar and has no US customer committed at scale post-2023."
        },
        {
          name: "X-energy",
          ticker: "NASDAQ:XE",
          exposure: "pure-play",
          stance: "long",
          purity: "high",
          cap: "mid",
          horizon: "long",
          region: "US",
          note: "Bull: an Amazon-anchored 5 GW Xe-100 program, owns its TRISO-X fuel fabrication, and IPO'd April 2026 raising about $1B. Bear: the HTGR reactor and TRISO fuel are both first-of-a-kind at once, so execution risk stacks."
        },
        {
          name: "Nano Nuclear Energy",
          ticker: "NASDAQ:NNE",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "small",
          horizon: "long",
          region: "US",
          note: "Bull: pre-commercial microreactor developer with fuel-transport optionality and a market cap around $1.3B as of April 2026. Bear: the earliest-stage and most speculative of the public pure-plays, years from any hardware in service."
        },
        {
          name: "Centrus Energy",
          ticker: "NYSE:LEU",
          exposure: "enabler",
          stance: "long",
          purity: "high",
          cap: "mid",
          horizon: "mid",
          region: "US",
          note: "Bull: the HALEU enrichment chokepoint owner and the cleanest picks-and-shovels arms dealer here, with about 900 kg delivered to DOE, a $900M DOE task order in Jan 2026, and a $560M-plus Oak Ridge factory scale-up. Bear: still policy-dependent and capital-heavy, and fleet-scale metric-ton HALEU remains years out."
        }
      ]
    },
    {
      segment: "Operators / existing fleet (lower-risk exposure)",
      chainNode: "Existing reactors and restarts, hyperscaler PPAs",
      companies: [
        {
          name: "Constellation Energy",
          ticker: "NASDAQ:CEG",
          exposure: "core",
          stance: "long",
          purity: "med",
          cap: "large",
          horizon: "near",
          region: "US",
          note: "Bull: the largest US nuclear operator, restarting Three Mile Island Unit 1 as Crane Clean Energy Center under a 20-year Microsoft PPA (835 MW, ~$1.6B capex, target 2027-28), so it monetizes scarce firm power now. Bear: a regulated-and-merchant utility whose earnings hinge on power prices and execution on the restart, not on SMR upside."
        },
        {
          name: "Vistra",
          ticker: "NYSE:VST",
          exposure: "adjacent",
          stance: "long",
          purity: "low",
          cap: "large",
          horizon: "mid",
          region: "US",
          note: "Bull: owns the Comanche Peak nuclear plant inside a large, datacenter-adjacent generation fleet that benefits from firm-power scarcity either way. Bear: nuclear is a minority of a gas-and-retail power company, so the exposure is diluted."
        },
        {
          name: "Talen Energy",
          ticker: "NASDAQ:TLN",
          exposure: "core",
          stance: "long",
          purity: "med",
          cap: "mid",
          horizon: "near",
          region: "US",
          note: "Bull: owns Susquehanna and signed an Amazon PPA (about 960 MW) for datacenter offtake, a direct nuclear-to-hyperscaler contract. Bear: a smaller, more leveraged operator with concentrated asset exposure."
        }
      ]
    },
    {
      segment: "Reactor vendors / diversified (optionality)",
      chainNode: "Reactor designs and balance of plant",
      companies: [
        {
          name: "GE Vernova",
          ticker: "NYSE:GEV",
          exposure: "adjacent",
          stance: "long",
          purity: "low",
          cap: "large",
          horizon: "long",
          region: "US",
          note: "Bull: the BWRX-300 SMR (Darlington, TVA Clinch River) sits inside a broad grid-and-power company, so it wins from electricity-demand growth with SMR optionality and no pure-play binary. Bear: advanced nuclear is a rounding error on its earnings for years; turbines and grid gear drive the stock."
        },
        {
          name: "TerraPower",
          ticker: "private",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "private",
          horizon: "long",
          region: "US",
          note: "Bull: the Natrium sodium fast reactor (Kemmerer, WY, 345 MW) got the first commercial-scale advanced-reactor NRC construction permit (Mar 2026) and is Bill Gates-backed with a ~$2B ARDP grant. Bear: private, so no clean public exposure, and it is FOAK on reactor, coolant, and HALEU fuel simultaneously."
        },
        {
          name: "Kairos Power",
          ticker: "private",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "private",
          horizon: "long",
          region: "US",
          note: "Bull: Google-backed molten-salt-cooled design with Part 50 construction permits for two Hermes test reactors and a 500 MW offtake pipeline. Bear: private and still at the demonstration stage, with commercial power well out."
        },
        {
          name: "Holtec International",
          ticker: "private",
          exposure: "enabler",
          stance: "long",
          purity: "med",
          cap: "private",
          horizon: "mid",
          region: "US",
          note: "Bull: restarting the Palisades plant (a first for a shut US reactor) and developing the SMR-300, backed by a $400M DOE cost-share, plus a real spent-fuel and components business. Bear: private, so no listed exposure, and the SMR remains pre-commercial."
        }
      ]
    },
    {
      segment: "Fuel cycle (mining, conversion, TRISO, enrichment)",
      chainNode: "Front-end fuel supply and forgings",
      companies: [
        {
          name: "Cameco",
          ticker: "NYSE:CCJ",
          exposure: "enabler",
          stance: "long",
          purity: "med",
          cap: "large",
          horizon: "mid",
          region: "Canada",
          note: "Bull: one of the largest Western uranium miners and converters, plus a Westinghouse stake, so it sells into every reactor build regardless of design. Bear: a commodity producer whose earnings track uranium prices and mine execution more than SMR deployment."
        },
        {
          name: "BWX Technologies",
          ticker: "NYSE:BWXT",
          exposure: "enabler",
          stance: "long",
          purity: "med",
          cap: "large",
          horizon: "mid",
          region: "US",
          note: "Bull: a rare Western supplier of nuclear-grade components, naval reactors, and TRISO/advanced fuel, an arms dealer across the fuel and component chain. Bear: much of the business is defense-driven, so commercial SMR upside is only part of the story."
        },
        {
          name: "Urenco",
          ticker: "private",
          exposure: "enabler",
          stance: "watch",
          purity: "high",
          cap: "private",
          horizon: "mid",
          region: "Europe",
          note: "Bull: a leading Western enrichment consortium building HALEU capacity, a direct answer to Russian supply dominance. Bear: privately/state-held, so no clean public security, and its US HALEU line is still scaling."
        },
        {
          name: "Orano",
          ticker: "private",
          exposure: "enabler",
          stance: "watch",
          purity: "med",
          cap: "private",
          horizon: "mid",
          region: "France",
          note: "Bull: an integrated mining, conversion, and enrichment player expanding HALEU, part of the West's fuel-cycle reshoring. Bear: French state-controlled with no listed equity, and enrichment expansion is capital-heavy and years out."
        }
      ]
    }
  ],

  atRisk: [
    {
      name: "Oklo",
      ticker: "NYSE:OKLO",
      note: "The brief flags Oklo's valuation as resting on multi-GW LOI pipelines, not delivered power, with zero commercial revenue after 13 years. If the first commercial plant overruns like CFPP or timelines slip again, the equity is structurally exposed."
    },
    {
      name: "Nano Nuclear Energy",
      ticker: "NASDAQ:NNE",
      note: "The most speculative public pure-play, priced on a pre-commercial microreactor concept. A policy reversal on federal cost-share or a FOAK cost shock is an existential input for a name with no revenue."
    }
  ],

  lastReviewed: "2026-07"
};
