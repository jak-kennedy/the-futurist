/* =============================================================================
   THE FUTURIST — INVESTABLE MAP: INTELLIGENCE DOMAIN
   =============================================================================
   Three technologies: transformative AI, quantum computing, brain-computer
   interfaces. 30-YEAR STRUCTURAL view. Not a trade. Not a price target.
   Teaches a non-expert: pure-play vs picks-and-shovels vs incumbent optionality.
   ourProbability mirrors the core data files.
   Tickers verified June 2026. Where a winner is private or pre-revenue, it says so.
   ============================================================================= */

window.FUTURIST_INVEST = window.FUTURIST_INVEST || {};

/* -----------------------------------------------------------------------------
   TRANSFORMATIVE AI
   ----------------------------------------------------------------------------- */
window.FUTURIST_INVEST["transformative-ai"] = {
  thesis: "Over 30 years AI becomes a general-purpose layer under most of the economy, like electricity. The largest and most durable public exposure is the build-out underneath the models: compute, memory, networking, and the power to run it. The model layer itself may capture enormous value, but most of those winners are private today and the field changes hands fast.",

  howToThink: "Think in three buckets. First, arms dealers: the chip, memory, networking, and power companies that get paid no matter which model wins. These are mostly public and are the cleanest 30-year exposure. Second, the model layer: OpenAI, Anthropic, and similar. Most of this value is private right now, so a public investor cannot own it cleanly. Third, incumbents with optionality: the hyperscalers that both build the clouds and back the labs. The bear case is simple. Spending on AI compute could outrun the revenue it produces, and a single architecture shift could strand a generation of hardware.",

  conviction: {
    rating: "High",
    ourProbability: 0.62,
    street: "The market treats AI infrastructure as a secular growth supercycle and prices the leaders for sustained hyperscale capital spending.",
    edge: "We separate the durable arms-dealer cash flows from the model layer. The picks-and-shovels exposure is investable now; the largest model winners are private and may stay that way for years.",
    horizon: "Exposure is investable today, compounds through the 2030s, and broadens as AI diffuses into the wider economy past 2040."
  },

  sCurve: {
    stage: "inflection",
    points: [
      { year: 2026, value: 350, unit: "$B", note: "data-center AI compute plus accelerator and memory spend, author estimate from hyperscaler capex disclosures" },
      { year: 2035, value: 1500, unit: "$B", note: "author estimate; assumes continued hyperscale build plus enterprise diffusion" },
      { year: 2056, value: 4000, unit: "$B", basis: "author estimate; AI as a general-purpose layer touching a large share of global output, wide uncertainty band" }
    ]
  },

  marketMap: [
    {
      segment: "AI accelerators and design",
      chainNode: "Leading-edge GPUs and AI ASICs",
      companies: [
        {
          name: "NVIDIA",
          ticker: "NASDAQ:NVDA",
          exposure: "core",
          stance: "long",
          purity: "high",
          cap: "mega",
          horizon: "near",
          region: "US",
          note: "Owns the dominant AI training stack through hardware plus the CUDA software moat. Bear case is custom silicon from its own largest customers plus eventual margin normalization."
        },
        {
          name: "Advanced Micro Devices",
          ticker: "NASDAQ:AMD",
          exposure: "core",
          stance: "long",
          purity: "med",
          cap: "mega",
          horizon: "near",
          region: "US",
          note: "The credible number-two accelerator and a strong CPU franchise. Bear case is a persistent software gap behind the leader and a smaller installed base."
        },
        {
          name: "Broadcom",
          ticker: "NASDAQ:AVGO",
          exposure: "core",
          stance: "long",
          purity: "med",
          cap: "mega",
          horizon: "near",
          region: "US",
          note: "Designs the custom AI chips for several hyperscalers and supplies the switching silicon. Bear case is heavy reliance on a few mega-customers and lumpy program timing."
        },
        {
          name: "Marvell Technology",
          ticker: "NASDAQ:MRVL",
          exposure: "core",
          stance: "long",
          purity: "med",
          cap: "large",
          horizon: "mid",
          region: "US",
          note: "Custom-silicon and high-speed interconnect supplier riding the same build-out. Bear case is intense competition for each custom socket and customer concentration."
        }
      ]
    },
    {
      segment: "Foundry and lithography",
      chainNode: "Sub-5nm wafer fabrication and EUV tools",
      companies: [
        {
          name: "Taiwan Semiconductor Manufacturing",
          ticker: "NYSE:TSM",
          exposure: "enabler",
          stance: "long",
          purity: "med",
          cap: "mega",
          horizon: "near",
          region: "Taiwan",
          note: "Makes nearly every leading-edge AI chip. The deepest chokepoint in the whole stack. Bear case is geographic concentration in Taiwan and the geopolitical tail risk that carries."
        },
        {
          name: "ASML Holding",
          ticker: "NASDAQ:ASML",
          exposure: "enabler",
          stance: "long",
          purity: "med",
          cap: "mega",
          horizon: "near",
          region: "Europe",
          note: "Sole maker of EUV lithography machines, a true monopoly chokepoint. Bear case is export-control exposure to China and the long, cyclical capital-equipment cycle."
        }
      ]
    },
    {
      segment: "Memory and high-bandwidth memory",
      chainNode: "HBM stacks and advanced DRAM",
      companies: [
        {
          name: "SK Hynix",
          ticker: "KRX:000660",
          exposure: "core",
          stance: "long",
          purity: "med",
          cap: "large",
          horizon: "near",
          region: "Korea",
          note: "Leading supplier of high-bandwidth memory that every accelerator needs. Bear case is the historically brutal memory cycle and Korea-listing access friction for some investors."
        },
        {
          name: "Micron Technology",
          ticker: "NASDAQ:MU",
          exposure: "core",
          stance: "long",
          purity: "med",
          cap: "large",
          horizon: "near",
          region: "US",
          note: "The US-listed memory maker scaling into high-bandwidth memory. Bear case is commodity memory pricing swings that can swamp the AI mix."
        }
      ]
    },
    {
      segment: "AI networking",
      chainNode: "High-speed switching for AI clusters",
      companies: [
        {
          name: "Arista Networks",
          ticker: "NYSE:ANET",
          exposure: "core",
          stance: "long",
          purity: "med",
          cap: "large",
          horizon: "mid",
          region: "US",
          note: "High-speed Ethernet switching purpose-built for AI clusters, with hyperscaler anchor customers. Bear case is customer concentration and in-house switching by those same buyers."
        }
      ]
    },
    {
      segment: "Data-center power and thermal",
      chainNode: "Cooling, power distribution, and baseload generation",
      companies: [
        {
          name: "Vertiv Holdings",
          ticker: "NYSE:VRT",
          exposure: "enabler",
          stance: "long",
          purity: "med",
          cap: "large",
          horizon: "near",
          region: "US",
          note: "Supplies the cooling and power gear AI data centers cannot run without. Bear case is order timing and competition as the build-out matures."
        },
        {
          name: "Constellation Energy",
          ticker: "NASDAQ:CEG",
          exposure: "enabler",
          stance: "long",
          purity: "low",
          cap: "large",
          horizon: "mid",
          region: "US",
          note: "Largest US nuclear fleet selling baseload power to data centers under long contracts. Bear case is that AI is a minority of its load and power prices are policy-sensitive."
        },
        {
          name: "Vistra",
          ticker: "NYSE:VST",
          exposure: "enabler",
          stance: "long",
          purity: "low",
          cap: "large",
          horizon: "mid",
          region: "US",
          note: "Independent power producer with growing data-center demand exposure. Bear case is commodity power pricing and the same minority-of-load caveat."
        }
      ]
    },
    {
      segment: "Hyperscalers and incumbent optionality",
      chainNode: "Cloud platforms and frontier-lab backers",
      companies: [
        {
          name: "Microsoft",
          ticker: "NASDAQ:MSFT",
          exposure: "adjacent",
          stance: "long",
          purity: "low",
          cap: "mega",
          horizon: "near",
          region: "US",
          note: "Owns Azure and a deep OpenAI relationship, the cleanest public proxy for the model layer. Bear case is heavy capital intensity and uncertain returns on AI spend."
        },
        {
          name: "Alphabet",
          ticker: "NASDAQ:GOOGL",
          exposure: "adjacent",
          stance: "long",
          purity: "low",
          cap: "mega",
          horizon: "near",
          region: "US",
          note: "Runs a frontier lab, its own TPU silicon, and a hyperscale cloud. Bear case is that AI search answers could erode its core advertising profit pool."
        },
        {
          name: "Amazon",
          ticker: "NASDAQ:AMZN",
          exposure: "adjacent",
          stance: "long",
          purity: "low",
          cap: "mega",
          horizon: "near",
          region: "US",
          note: "AWS plus custom Trainium silicon plus an Anthropic stake give layered exposure. Bear case is that retail dominates the company and AI capex weighs on free cash flow."
        },
        {
          name: "Meta Platforms",
          ticker: "NASDAQ:META",
          exposure: "adjacent",
          stance: "long",
          purity: "low",
          cap: "mega",
          horizon: "near",
          region: "US",
          note: "Open-weight models and one of the largest private compute fleets. Bear case is that AI spend is internal cost with no direct external revenue line yet."
        }
      ]
    },
    {
      segment: "Model layer (mostly private)",
      chainNode: "Frontier foundation models and data tooling",
      companies: [
        {
          name: "OpenAI",
          ticker: "private",
          exposure: "pure-play",
          stance: "long",
          purity: "high",
          cap: "private",
          horizon: "mid",
          region: "US",
          note: "The highest-profile model pure-play, raising at roughly an $852B valuation in 2026 and reportedly preparing a confidential IPO filing toward a trillion-dollar-plus listing. No clean public exposure today; partial reach is only through Microsoft. Bear case is capital intensity and fierce model competition."
        },
        {
          name: "Anthropic",
          ticker: "private",
          exposure: "pure-play",
          stance: "long",
          purity: "high",
          cap: "private",
          horizon: "mid",
          region: "US",
          note: "Frontier lab growing fast; raised a $65B Series H near a ~$965B valuation in 2026, described as a likely last private round before a public listing. Indirect reach only via Amazon and Alphabet stakes. Same capital-intensity bear case."
        },
        {
          name: "Databricks",
          ticker: "private",
          exposure: "core",
          stance: "long",
          purity: "high",
          cap: "private",
          horizon: "mid",
          region: "US",
          note: "Data and AI platform widely expected to list, possibly 2027. Private today, so no clean public exposure. Bear case is competition from the hyperscalers it runs on."
        },
        {
          name: "Scale AI",
          ticker: "private",
          exposure: "core",
          stance: "watch",
          purity: "high",
          cap: "private",
          horizon: "mid",
          region: "US",
          note: "Data-labeling and evaluation supplier; Meta took a large stake in 2025. Private and now partly tied to one strategic owner. Bear case is that synthetic data erodes the human-labeling business."
        },
        {
          name: "xAI",
          ticker: "private",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "private",
          horizon: "mid",
          region: "US",
          note: "Frontier lab merged into SpaceX in early 2026, so reach is only through the combined private entity rather than a clean AI ticker. Bear case is key-person and capital risk."
        }
      ]
    }
  ],

  atRisk: [
    { name: "Legacy IT outsourcers and BPO", ticker: "various", note: "Labor-arbitrage services that AI automates directly are structurally exposed over the 30-year horizon. Headcount-based pricing models face the most pressure." },
    { name: "Pure search-advertising dependents", ticker: "various", note: "Business models that depend on click-through from a query box face erosion if AI answers the question in place of a list of links." }
  ],

  lastReviewed: "2026-06"
};

/* -----------------------------------------------------------------------------
   QUANTUM COMPUTING
   ----------------------------------------------------------------------------- */
window.FUTURIST_INVEST["quantum-computing"] = {
  thesis: "Quantum computing could eventually crack problems classical machines cannot, in chemistry, materials, and optimization. The timeline to useful, error-corrected machines is long and uncertain, so this is a 30-year option, not a near-term business. Much of the eventual value may accrue to incumbents and to private specialists rather than to the small listed pure-plays.",

  howToThink: "Be honest that this is early and speculative. The listed pure-plays are small, pre-profit, and trade with extreme volatility, so they are options on a hard physics problem, not stable businesses. The deeper-pocketed builders are incumbents like IBM and Alphabet, where quantum is a tiny slice of a large company, so the exposure is real but heavily diluted. Some of the most credible programs are private, including PsiQuantum, and the cryogenic supply chain has a private chokepoint in Bluefors. The bear case is blunt. Error correction may stay too expensive for decades, and a public investor could be early by a very long time.",

  conviction: {
    rating: "Low",
    ourProbability: 0.42,
    street: "The market oscillates between treating listed quantum names as the next big compute platform and as speculative science projects, with violent swings between the two views.",
    edge: "We see this as a long-dated option dominated by incumbents and private specialists. The pure-plays are high-dispersion bets where most names may not be the winner.",
    horizon: "Narrow advantage may appear late 2020s to 2030s; broad commercial value, if it arrives, is more likely a 2040s story."
  },

  sCurve: {
    stage: "nascent",
    points: [
      { year: 2026, value: 2, unit: "$B", note: "small commercial revenue base, mostly access and pilots, author estimate" },
      { year: 2040, value: 30, unit: "$B", note: "author estimate, contingent on fault-tolerant machines reaching practical advantage" },
      { year: 2056, value: 150, unit: "$B", basis: "author estimate, very wide band; assumes error-corrected quantum reaches durable advantage in chemistry and optimization" }
    ]
  },

  marketMap: [
    {
      segment: "Listed pure-play hardware",
      chainNode: "Qubit processors and quantum systems",
      companies: [
        {
          name: "IonQ",
          ticker: "NYSE:IONQ",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "small",
          horizon: "long",
          region: "US",
          note: "Trapped-ion approach and the most visible listed pure-play. Small, pre-profit, and very volatile. Bear case is that trapped ions may not scale qubit count as cheaply as rivals."
        },
        {
          name: "Rigetti Computing",
          ticker: "NASDAQ:RGTI",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "small",
          horizon: "long",
          region: "US",
          note: "Superconducting-qubit builder. Tiny relative to incumbents pursuing the same architecture. Bear case is being out-resourced by IBM and Alphabet on the same physics."
        },
        {
          name: "D-Wave Quantum",
          ticker: "NYSE:QBTS",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "small",
          horizon: "long",
          region: "Canada",
          note: "Quantum annealing today with a gate-model effort underway. Annealing targets a narrower problem set. Bear case is that its niche may not generalize to broad quantum advantage."
        },
        {
          name: "Quantinuum",
          ticker: "NASDAQ:QNT",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "mid",
          horizon: "long",
          region: "US",
          note: "Trapped-ion leader that listed in June 2026 with Honeywell still holding roughly half the voting power. Larger and better funded than the other pure-plays. Bear case is the same long road to fault tolerance plus a controlling parent."
        }
      ]
    },
    {
      segment: "Incumbent optionality",
      chainNode: "Quantum programs inside large platforms",
      companies: [
        {
          name: "International Business Machines",
          ticker: "NYSE:IBM",
          exposure: "adjacent",
          stance: "long",
          purity: "low",
          cap: "large",
          horizon: "long",
          region: "US",
          note: "Runs one of the most advanced roadmaps (committed to the fault-tolerant Starling system by 2029, on quantum LDPC codes) and a large developer ecosystem. Quantum is a small slice of IBM, so exposure is heavily diluted. Bear case is that the option is tiny against the whole company."
        },
        {
          name: "Alphabet",
          ticker: "NASDAQ:GOOGL",
          exposure: "adjacent",
          stance: "long",
          purity: "low",
          cap: "mega",
          horizon: "long",
          region: "US",
          note: "Its quantum group has produced leading error-correction milestones. The exposure is a rounding error inside Alphabet. Same heavily-diluted-option caveat."
        },
        {
          name: "Honeywell International",
          ticker: "NASDAQ:HON",
          exposure: "adjacent",
          stance: "long",
          purity: "low",
          cap: "mega",
          horizon: "long",
          region: "US",
          note: "Retains roughly half the voting power of newly listed Quantinuum, so it is an indirect way to hold the leading trapped-ion program inside a diversified industrial. Bear case is the same dilution; quantum is small versus the parent."
        }
      ]
    },
    {
      segment: "Private leaders and the cryo chokepoint",
      chainNode: "Photonic systems and dilution refrigerators",
      companies: [
        {
          name: "PsiQuantum",
          ticker: "private",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "private",
          horizon: "long",
          region: "US",
          note: "Photonic approach aiming straight for a million-qubit, fault-tolerant machine; raised a $1B round in September 2025 at roughly a $7B valuation, the best-funded quantum pure-play. Private, so no public exposure today. Bear case is an all-or-nothing bet on photonics scaling."
        },
        {
          name: "Bluefors",
          ticker: "private",
          exposure: "enabler",
          stance: "watch",
          purity: "high",
          cap: "private",
          horizon: "long",
          region: "Europe",
          note: "Dominant maker of the dilution refrigerators that keep superconducting qubits near absolute zero, a genuine supply chokepoint. Private and Finland-based, so not directly investable. Bear case is that a shift away from cryogenic qubits would erode demand."
        }
      ]
    }
  ],

  atRisk: [
    { name: "Classical encryption dependents", ticker: "various", note: "If large fault-tolerant machines arrive, current public-key cryptography breaks, pressuring anyone slow to migrate to post-quantum standards. This is a long-dated risk, not a near-term one." }
  ],

  lastReviewed: "2026-06"
};

/* -----------------------------------------------------------------------------
   AI INFRASTRUCTURE & COMPUTE  (the picks-and-shovels layer)
   ----------------------------------------------------------------------------- */
window.FUTURIST_INVEST["ai-infrastructure"] = {
  thesis: "Treat AI compute as the product, not the intelligence that runs on it. Over 30 years the physical substrate under AI, the chips, memory, interconnect, gigawatt data-center campuses, and the power to feed them, becomes a utility-scale industry on the order of a hundred-plus gigawatts and hundreds of billions of dollars of sustained annual spend. The most durable public exposure is not the models but the arms dealers who get paid regardless of which lab wins, and above all the handful of chokepoint owners no one can route around.",

  howToThink: "The clean, ownable version of this theme is the supply chain, not the demand side. The demand-side buyers, OpenAI, Anthropic, xAI, are all private, so a public investor cannot hold them directly. What is public and durable are the chokepoints: TSMC, which fabricates over ninety percent of leading-edge logic; ASML, the sole maker of EUV lithography; the three HBM memory makers; and the power and grid suppliers. Incumbent hyperscalers carry optionality because they both build the campuses and design their own custom silicon. The bear case is blunt and worth stating: the spend may outrun the revenue it produces, GPU depreciation may be understated, and a demand air-pocket could delay the terawatt milestone even though the buildout itself is already under construction.",

  conviction: {
    rating: "High",
    ourProbability: 0.97,
    street: "The market treats AI infrastructure as a secular supercycle and prices the chip, memory, and power leaders for years of hyperscale capital spending, with a running debate over whether it is a bubble.",
    edge: "Our variant view is that the binding constraint is not the chips, it is power and advanced packaging. Nadella's point that idle GPUs sit unplugged for lack of electricity, plus TSMC's CoWoS and the three-supplier HBM bottleneck, mean the grid and packaging owners are the tighter chokepoints than the accelerator designers everyone watches.",
    horizon: "Exposure is investable today, compounds through the hyperscale build of the late 2020s, and matures toward a utility-scale compute layer around 2030 and beyond, with power the pacing item into the 2040s."
  },

  sCurve: {
    stage: "scaling",
    points: [
      { year: 2026, value: 725, unit: "$B", note: "the four largest hyperscalers guiding to roughly $725B combined 2026 capex, about three-quarters AI infrastructure; analyst aggregate, treat as approximate [Tom's Hardware]" },
      { year: 2030, value: 1000, unit: "$B", note: "AMD's Lisa Su: AI data-center market above $1T by 2030; anchored to McKinsey's ~$6.7T cumulative global data-center capex by 2030 (~$5.2T AI-capable) and IEA's ~945 TWh data-center electricity by 2030" },
      { year: 2040, value: 2000, unit: "$B", note: "author estimate; utility-scale build continues but growth increasingly paced by power, grid, and packaging rather than silicon supply" },
      { year: 2056, value: 3500, unit: "$B", basis: "author estimate, wide band; AI compute as a mature utility-class layer on the order of 100+ GW of dedicated capacity, sustained multi-hundred-billion annual spend" }
    ]
  },

  marketMap: [
    {
      segment: "Compute silicon",
      chainNode: "AI accelerators and custom ASICs",
      companies: [
        {
          name: "NVIDIA",
          ticker: "NASDAQ:NVDA",
          exposure: "core",
          stance: "long",
          purity: "high",
          cap: "mega",
          horizon: "near",
          region: "US",
          note: "Owns roughly three-quarters to nine-tenths of AI accelerator revenue on an annual cadence (Blackwell to Rubin to Feynman) plus the CUDA software moat; first company above a $5T market cap. Bear case is custom silicon insourcing by its own largest customers and eventual margin normalization."
        },
        {
          name: "Advanced Micro Devices",
          ticker: "NASDAQ:AMD",
          exposure: "core",
          stance: "long",
          purity: "med",
          cap: "mega",
          horizon: "near",
          region: "US",
          note: "The credible number-two accelerator with the MI350 to MI400 roadmap on HBM4. Bear case is a persistent software gap behind CUDA and a smaller installed base."
        },
        {
          name: "Broadcom",
          ticker: "NASDAQ:AVGO",
          exposure: "core",
          stance: "long",
          purity: "med",
          cap: "mega",
          horizon: "near",
          region: "US",
          note: "The custom-ASIC co-design leader for several hyperscalers and a top switch-silicon supplier; guiding FY2027 AI revenue above $100B, and 2026 is the first year custom-ASIC shipment growth tops merchant GPU. Bear case is heavy reliance on a few mega-customers and lumpy program timing."
        },
        {
          name: "Marvell Technology",
          ticker: "NASDAQ:MRVL",
          exposure: "core",
          stance: "long",
          purity: "med",
          cap: "large",
          horizon: "mid",
          region: "US",
          note: "The number-two custom-silicon design house and interconnect supplier riding the same insourcing shift. Bear case is intense competition for each custom socket and customer concentration."
        }
      ]
    },
    {
      segment: "Memory",
      chainNode: "HBM stacks and advanced DRAM",
      companies: [
        {
          name: "SK Hynix",
          ticker: "KRX:000660",
          exposure: "core",
          stance: "long",
          purity: "med",
          cap: "large",
          horizon: "near",
          region: "Korea",
          note: "HBM leader at roughly sixty percent share, sold out through 2026 and booked into 2027-2028; overtook Samsung as Korea's most valuable listed company in 2026. Bear case is the historically brutal memory cycle and HBM4 yield risk, plus Korea-listing access friction for some investors."
        },
        {
          name: "Micron Technology",
          ticker: "NASDAQ:MU",
          exposure: "core",
          stance: "long",
          purity: "med",
          cap: "large",
          horizon: "near",
          region: "US",
          note: "The US-listed HBM maker at roughly a fifth of the market, ramping HBM4 into mass production in 2026, and one of only three qualified suppliers. Bear case is commodity DRAM pricing swings that can swamp the AI mix."
        }
      ]
    },
    {
      segment: "Networking",
      chainNode: "AI-cluster switching and optical interconnect",
      companies: [
        {
          name: "Arista Networks",
          ticker: "NYSE:ANET",
          exposure: "core",
          stance: "long",
          purity: "med",
          cap: "large",
          horizon: "mid",
          region: "US",
          note: "High-speed Ethernet switching purpose-built for AI clusters, with hyperscaler anchor customers. Bear case is customer concentration and in-house switching by those same buyers."
        },
        {
          name: "Coherent",
          ticker: "NYSE:COHR",
          exposure: "core",
          stance: "long",
          purity: "med",
          cap: "mid",
          horizon: "mid",
          region: "US",
          note: "A leading optical-transceiver supplier riding the 400G to 800G to 1.6T transition and the move toward co-packaged optics. Bear case is transceiver commoditization and lumpy hyperscaler order cycles."
        },
        {
          name: "Ciena",
          ticker: "NYSE:CIEN",
          exposure: "adjacent",
          stance: "long",
          purity: "med",
          cap: "mid",
          horizon: "mid",
          region: "US",
          note: "Optical networking gear tied to data-center interconnect, with revenue up sharply on AI demand. Bear case is telco-carrier cyclicality and competition from merchant switch silicon."
        },
        {
          name: "Lumentum",
          ticker: "NASDAQ:LITE",
          exposure: "adjacent",
          stance: "long",
          purity: "med",
          cap: "small",
          horizon: "mid",
          region: "US",
          note: "Optical components supplier levered to data-center interconnect. Bear case is a narrower product mix and exposure to component pricing pressure."
        }
      ]
    },
    {
      segment: "Power and cooling",
      chainNode: "Electrical gear, cooling, and baseload generation",
      companies: [
        {
          name: "Vertiv Holdings",
          ticker: "NYSE:VRT",
          exposure: "enabler",
          stance: "long",
          purity: "med",
          cap: "large",
          horizon: "near",
          region: "US",
          note: "Cooling and power pure-play with a backlog above $15B, supplying the direct-to-chip liquid cooling that gigawatt racks now mandate. Bear case is order timing and competition as the build-out matures."
        },
        {
          name: "Eaton",
          ticker: "NYSE:ETN",
          exposure: "enabler",
          stance: "long",
          purity: "low",
          cap: "large",
          horizon: "near",
          region: "US",
          note: "Electrical distribution plus liquid cooling after the Boyd Thermal acquisition, selling the switchgear a data center cannot energize without. Bear case is that data centers are a slice of a broad industrial and order cycles can cool."
        },
        {
          name: "Schneider Electric",
          ticker: "EPA:SU",
          exposure: "enabler",
          stance: "long",
          purity: "low",
          cap: "mega",
          horizon: "near",
          region: "Europe",
          note: "One of the largest data-center electrical and power-management suppliers; primary listing in Paris, with only a thinly traded US OTC ADR (SBGSY), so no clean US line. Bear case is diversified end-markets diluting the AI signal."
        },
        {
          name: "GE Vernova",
          ticker: "NYSE:GEV",
          exposure: "enabler",
          stance: "long",
          purity: "low",
          cap: "large",
          horizon: "mid",
          region: "US",
          note: "Gas-turbine and grid supplier with a backlog near 100 GW effectively sold out to about 2030, positioned squarely on the power constraint. Bear case is that a demand air-pocket or a faster shift to other generation could soften the backlog."
        },
        {
          name: "Constellation Energy",
          ticker: "NASDAQ:CEG",
          exposure: "enabler",
          stance: "long",
          purity: "low",
          cap: "large",
          horizon: "mid",
          region: "US",
          note: "Largest US nuclear operator selling baseload to data centers under long contracts, including the Three Mile Island / Crane restart targeted for 2028. Bear case is that AI is a minority of its load and power prices are policy-sensitive."
        },
        {
          name: "Oklo",
          ticker: "NYSE:OKLO",
          exposure: "enabler",
          stance: "watch",
          purity: "med",
          cap: "small",
          horizon: "long",
          region: "US",
          note: "Aurora microreactor developer targeting first deployment around 2027-2028 to serve data-center demand. Bear case is pre-revenue execution and regulatory risk on an unproven build; a speculative option, not a stable business."
        }
      ]
    },
    {
      segment: "Foundry and equipment",
      chainNode: "Leading-edge fabrication, EUV, and process tools",
      companies: [
        {
          name: "Taiwan Semiconductor Manufacturing",
          ticker: "NYSE:TSM",
          exposure: "enabler",
          stance: "long",
          purity: "med",
          cap: "mega",
          horizon: "near",
          region: "Taiwan",
          note: "The sole leading-edge foundry, making over ninety percent of sub-7nm logic, with N2 in high-volume manufacturing and CoWoS advanced packaging sold out through 2026, the narrowest pipe in the whole stack. Bear case is geographic concentration in Taiwan roughly 130 km from China and the geopolitical tail risk that carries."
        },
        {
          name: "ASML Holding",
          ticker: "NASDAQ:ASML",
          exposure: "enabler",
          stance: "long",
          purity: "med",
          cap: "mega",
          horizon: "near",
          region: "Europe",
          note: "The 100 percent monopoly on EUV lithography after Nikon and Canon exited, with High-NA systems around $350-400M each. Bear case is China export-control exposure and the long, cyclical capital-equipment cycle."
        },
        {
          name: "Applied Materials",
          ticker: "NASDAQ:AMAT",
          exposure: "enabler",
          stance: "long",
          purity: "med",
          cap: "large",
          horizon: "near",
          region: "US",
          note: "The largest wafer-fab-equipment maker across deposition and etch, levered to every leading-edge node ramp. Bear case is China revenue exposure and equipment-spending cyclicality."
        },
        {
          name: "Lam Research",
          ticker: "NASDAQ:LRCX",
          exposure: "enabler",
          stance: "long",
          purity: "med",
          cap: "large",
          horizon: "near",
          region: "US",
          note: "Etch and deposition leader critical to advanced logic and HBM DRAM production. Bear case is the same China-exposure and cyclicality caveats as its equipment peers."
        },
        {
          name: "KLA",
          ticker: "NASDAQ:KLAC",
          exposure: "enabler",
          stance: "long",
          purity: "med",
          cap: "large",
          horizon: "near",
          region: "US",
          note: "Dominant in process-control and inspection tools, whose importance rises as nodes shrink and yields tighten. Bear case is equipment-cycle timing and China-demand sensitivity."
        },
        {
          name: "Tokyo Electron",
          ticker: "TSE:8035",
          exposure: "enabler",
          stance: "long",
          purity: "med",
          cap: "large",
          horizon: "near",
          region: "Japan",
          note: "Major wafer-process-equipment maker (coater/developer, etch, deposition); primary listing Tokyo, US exposure only via OTC:TOELY. Note that NASDAQ:TEL is TE Connectivity, an unrelated company. Bear case is China exposure and equipment cyclicality."
        }
      ]
    },
    {
      segment: "Datacenters and neoclouds",
      chainNode: "GPU cloud capacity and colocation",
      companies: [
        {
          name: "CoreWeave",
          ticker: "NASDAQ:CRWV",
          exposure: "pure-play",
          stance: "long",
          purity: "high",
          cap: "mid",
          horizon: "mid",
          region: "US",
          note: "The highest-profile listed GPU-cloud pure-play; IPO'd March 2025 and reported about $5.1B of 2025 revenue. Bear case is heavy debt, customer concentration, and its role in the circular-financing loops critics flag."
        },
        {
          name: "Nebius Group",
          ticker: "NASDAQ:NBIS",
          exposure: "pure-play",
          stance: "long",
          purity: "high",
          cap: "mid",
          horizon: "mid",
          region: "Europe",
          note: "GPU-cloud pure-play added to the Nasdaq-100 in 2026; reported deal magnitudes are widely cited but lower-tier sourced, so treat scale as approximate. Bear case is capital intensity and the same GPU-fleet depreciation and demand risk as its neocloud peers."
        },
        {
          name: "Oracle",
          ticker: "NYSE:ORCL",
          exposure: "core",
          stance: "long",
          purity: "low",
          cap: "mega",
          horizon: "near",
          region: "US",
          note: "A Stargate partner with an AI-cloud backlog reported near $638B, more than half of it reportedly tied to OpenAI. Bear case is enormous customer concentration in a few AI labs and the capex to fulfill that backlog."
        },
        {
          name: "Digital Realty Trust",
          ticker: "NYSE:DLR",
          exposure: "enabler",
          stance: "long",
          purity: "low",
          cap: "large",
          horizon: "mid",
          region: "US",
          note: "Wholesale data-center REIT leasing capacity to hyperscalers and AI tenants. Bear case is that AI is a growing but still minority slice of the portfolio and REIT returns are rate-sensitive."
        },
        {
          name: "Equinix",
          ticker: "NASDAQ:EQIX",
          exposure: "enabler",
          stance: "long",
          purity: "low",
          cap: "large",
          horizon: "mid",
          region: "US",
          note: "Global colocation and interconnection REIT positioned at the network edge of AI deployments. Bear case is that dense AI training clusters favor purpose-built campuses over classic colocation, and rate sensitivity."
        },
        {
          name: "Crusoe and Lambda",
          ticker: "private",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "private",
          horizon: "long",
          region: "US",
          note: "Two of the notable private neoclouds building GPU capacity; both pre-IPO with valuations that are unconfirmed and secondary-market sourced. No public exposure today. Bear case is the same debt-funded, depreciation-heavy, demand-dependent model as the listed neoclouds."
        }
      ]
    }
  ],

  atRisk: [
    { name: "Intel", ticker: "NASDAQ:INTC", note: "The clearest structural loser in the buildout: external foundry revenue is trivial against multi-billion foundry losses, and survival increasingly reads as a policy and national-champion story rather than a competitive win, even with 18A in production and a US government equity stake." },
    { name: "Samsung Electronics", ticker: "KRX:005930", note: "Lost HBM leadership and its most-valuable-Korean-company crown to SK Hynix in 2026, and is the laggard of the three memory makers in the highest-margin AI tier while its 2nm foundry yields recover slowly." },
    { name: "Talen Energy", ticker: "NASDAQ:TLN", note: "The power name most exposed to FERC co-location regulatory risk, with single-site concentration at the Susquehanna/AWS campus versus the diversified fleets of Constellation and Vistra." }
  ],

  lastReviewed: "2026-07"
};

/* -----------------------------------------------------------------------------
   BRAIN-COMPUTER INTERFACES
   ----------------------------------------------------------------------------- */
window.FUTURIST_INVEST["brain-computer-interfaces"] = {
  thesis: "Brain-computer interfaces could restore movement and speech to paralyzed patients first, then expand toward broader human-machine control over decades. The frontier pure-plays are almost all private, so there is little clean public exposure today. The honest near-term public route is the medical-device incumbents that own the surgical channel, the regulatory experience, and the implant supply chain.",

  howToThink: "Start from a hard fact. The companies actually building the leading implants, Neuralink, Synchron, Paradromics, Blackrock Neurotech, and Precision Neuroscience, are all private. So a public investor cannot own the pure-play today. The closest public exposure is incumbents like Medtronic and Boston Scientific, which already sell brain implants for other conditions and could acquire or scale the winners. For them this is a small option inside a large device company, so the exposure is real but diluted. The bear case is that the regulatory path is slow, surgical risk is real, and the timeline to a mass-market, non-medical device is measured in decades.",

  conviction: {
    rating: "Low",
    ourProbability: 0.55,
    street: "Consensus sees clear medical promise for paralysis and a credible long-run consumer dream, but acknowledges there is almost no pure public way to own it.",
    edge: "We frame the only clean near-term public exposure as the incumbents that own the surgical and regulatory channel, with the eventual winners likely arriving via acquisition or a future listing.",
    horizon: "Medical milestones land in the late 2020s and 2030s; broad, non-medical adoption, if it comes, is a 2040s-plus question."
  },

  sCurve: {
    stage: "nascent",
    points: [
      { year: 2026, value: 2, unit: "$B", note: "mostly clinical-stage plus existing neuromodulation revenue, author estimate" },
      { year: 2040, value: 15, unit: "$B", note: "author estimate, driven by medical restoration use cases reaching the market" },
      { year: 2056, value: 60, unit: "$B", basis: "author estimate, very wide band; assumes medical adoption scales and early non-medical use begins" }
    ]
  },

  marketMap: [
    {
      segment: "Implant pure-plays (all private)",
      chainNode: "High-bandwidth neural implants",
      companies: [
        {
          name: "Neuralink",
          ticker: "private",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "private",
          horizon: "long",
          region: "US",
          note: "Highest-profile high-bandwidth implant program; reached 13 implanted participants by late 2025 and an FDA Breakthrough Device designation for speech. Private, so no public exposure. Bear case is surgical invasiveness and a long regulatory road to anything beyond medical use."
        },
        {
          name: "Synchron",
          ticker: "private",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "private",
          horizon: "long",
          region: "US",
          note: "Less invasive approach that reaches the brain through a blood vessel, which may ease the regulatory path; raised a $200M Series D (Nov 2025) to fund a 2026 pivotal trial aimed at the first BCI premarket approval. Private. Bear case is lower bandwidth than implants drilled into the cortex."
        },
        {
          name: "Paradromics",
          ticker: "private",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "private",
          horizon: "long",
          region: "US",
          note: "High-bandwidth interface aimed at restoring speech for locked-in patients. Private. Bear case is the same invasive-surgery and slow-approval profile as its peers."
        },
        {
          name: "Blackrock Neurotech",
          ticker: "private",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "private",
          horizon: "long",
          region: "US",
          note: "Longest clinical track record in research implants. Private and unrelated to the asset manager of the same name. Bear case is moving from research settings to a scaled commercial product."
        },
        {
          name: "Precision Neuroscience",
          ticker: "private",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "private",
          horizon: "long",
          region: "US",
          note: "Thin surface-array approach designed to avoid penetrating brain tissue; won the first FDA clearance for a wireless BCI component (April 2025). Private. Bear case is whether a surface array can deliver enough signal for the most ambitious uses."
        }
      ]
    },
    {
      segment: "Medical-device incumbents",
      chainNode: "Neuromodulation and implant channel",
      companies: [
        {
          name: "Medtronic",
          ticker: "NYSE:MDT",
          exposure: "adjacent",
          stance: "long",
          purity: "low",
          cap: "large",
          horizon: "mid",
          region: "US",
          note: "Largest neuromodulation franchise, already implanting brain devices for Parkinson and other conditions, and a natural acquirer of a winner. Bear case is that brain-computer interfaces are a tiny slice of a huge, slower-growth device company."
        },
        {
          name: "Boston Scientific",
          ticker: "NYSE:BSX",
          exposure: "adjacent",
          stance: "long",
          purity: "low",
          cap: "large",
          horizon: "mid",
          region: "US",
          note: "Owns a deep-brain-stimulation and neuromodulation business that shares the surgical channel. Same diluted-option logic. Bear case is the same small-slice caveat plus competition for any acquisition target."
        }
      ]
    }
  ],

  lastReviewed: "2026-06"
};

/* -----------------------------------------------------------------------------
   ENTERPRISE AI & AGENTIC SOFTWARE  (the applied "services-as-software" layer)
   ----------------------------------------------------------------------------- */
window.FUTURIST_INVEST["enterprise-ai"] = {
  thesis: "Over 30 years enterprise software reprices from seats to outcomes: you buy the work done, not the login, as agents absorb the workflows that used to need software plus a human to operate it. Foundation Capital frames this as a roughly $4.6T services-as-software opportunity because agents attack labor budgets, not just software budgets. The durable public exposure is the infrastructure and data layer that gets paid on agent usage; the seat-based incumbents are at once the disruption targets and the distribution owners; and the purest AI-native winners are still private.",

  howToThink: "Think in three buckets. First, picks-and-shovels: the cloud, data, and observability layers, Microsoft, Alphabet, Palantir, Snowflake, and Datadog, that get paid on usage no matter which agent wins, and are the cleanest durable public exposure. Second, the seat-based SaaS incumbents, Salesforce, Workday, Atlassian, HubSpot, Adobe, whose per-seat pricing an agent can absorb, but who also own the distribution and permissioned data to sell agents themselves, so they are as much a hedge as a short. Third, the AI-native app layer that actually sells work done, OpenAI, Anthropic, Sierra, Harvey, and Decagon, which is where outcome pricing lives but is almost entirely private, so a public investor cannot own it cleanly. The bear case is blunt: about 95% of enterprise GenAI pilots show no measurable P&L impact and only around 16% of deployments are true agents, so the seats-to-outcomes shift could stall as supervised copilots for a decade.",

  conviction: {
    rating: "Medium",
    ourProbability: 0.70,
    street: "Consensus treats agentic AI as the next enterprise-software supercycle, rewarding incumbents that reframe themselves as 'digital labor' and bidding AI-native rounds to record valuations.",
    edge: "We separate the infra and data toll-takers, who get paid on agent usage regardless of which app wins and are investable today, from the seat-based apps being cannibalized and the AI-native winners that are still private; the seats-to-outcomes crossover is slower than priced while 95% of pilots show no P&L impact.",
    horizon: "Exposure is investable now via the infra and data layer, the seats-to-outcomes crossover plays out through the 2030s, and a mature services-as-software layer is a 2040s-plus outcome."
  },

  sCurve: {
    stage: "inflection",
    points: [
      { year: 2026, value: 40, unit: "$B", note: "enterprise gen-AI spend ~$37B in 2025, 3.2x YoY, with the market flipped to ~76% buy vs build; outcome-priced deployments still emerging [Menlo Ventures 2025]" },
      { year: 2030, value: 250, unit: "$B", note: "author estimate anchored to McKinsey (up to 30% of hours automatable by 2030) and Gartner (33% of enterprise apps include agentic AI by 2028) as the transition capture begins" },
      { year: 2040, value: 1400, unit: "$B", note: "author estimate; mid-transition as outcome pricing displaces a growing share of seat-based software and adjacent labor budgets" },
      { year: 2056, value: 4600, unit: "$B", basis: "Foundation Capital's ~$4.6T services-as-software TAM (labor-budget thesis) as the mature-state anchor; wide uncertainty band" }
    ]
  },

  marketMap: [
    {
      segment: "Infrastructure and data layer (picks-and-shovels)",
      chainNode: "Agent orchestration, permissioned data, and observability",
      companies: [
        {
          name: "Microsoft",
          ticker: "NASDAQ:MSFT",
          exposure: "core",
          stance: "long",
          purity: "low",
          cap: "mega",
          horizon: "near",
          region: "US",
          note: "Copilot plus Copilot Studio let enterprises build agents on top of Microsoft's data and Azure inference layer; Nadella's thesis is that business logic migrates from apps into an agent tier Microsoft hosts. Bear case is heavy capital intensity and that its own M365 seat revenue is partly what agents cannibalize."
        },
        {
          name: "Alphabet",
          ticker: "NASDAQ:GOOGL",
          exposure: "core",
          stance: "long",
          purity: "low",
          cap: "mega",
          horizon: "near",
          region: "US",
          note: "Gemini Enterprise, Vertex AI Agent Builder, and Agentspace give it the model plus the infra to sell agent usage. Bear case is that AI answers could erode the core search-ad profit pool even as cloud agent revenue grows."
        },
        {
          name: "Palantir",
          ticker: "NASDAQ:PLTR",
          exposure: "core",
          stance: "long",
          purity: "med",
          cap: "large",
          horizon: "mid",
          region: "US",
          note: "AIP plus its ontology is the layer that lets agents act on operational data with governance, the contested integration moat. Bear case is a very rich valuation and heavy reliance on a concentrated set of large government and enterprise deployments."
        },
        {
          name: "Snowflake",
          ticker: "NYSE:SNOW",
          exposure: "core",
          stance: "long",
          purity: "med",
          cap: "large",
          horizon: "mid",
          region: "US",
          note: "Cortex Agents make Snowflake a data-layer beneficiary of agent compute; agents query where the governed data already lives. Bear case is competition from the hyperscalers it runs on and consumption-model revenue volatility."
        },
        {
          name: "Datadog",
          ticker: "NASDAQ:DDOG",
          exposure: "enabler",
          stance: "long",
          purity: "med",
          cap: "large",
          horizon: "mid",
          region: "US",
          note: "LLM Observability positions Datadog to monitor agents in production; usage-based pricing means it benefits from agent sprawl rather than being cannibalized by it. Bear case is efficiency cycles that compress usage and rising competition in observability."
        }
      ]
    },
    {
      segment: "At-risk seat-based SaaS incumbents",
      chainNode: "Per-seat systems of record facing outcome-priced agents",
      companies: [
        {
          name: "Salesforce",
          ticker: "NYSE:CRM",
          exposure: "core",
          stance: "watch",
          purity: "low",
          cap: "mega",
          horizon: "mid",
          region: "US",
          note: "Seat-based CRM is the classic displacement target, but Benioff is repositioning it as a 'digital labor' provider via Agentforce, ~29,000 paid deals by early 2026, so it owns the data and distribution to sell agents itself. Bear case is that consumption revenue cannibalizes far more lucrative seat revenue."
        },
        {
          name: "Workday",
          ticker: "NASDAQ:WDAY",
          exposure: "core",
          stance: "short",
          purity: "low",
          cap: "large",
          horizon: "mid",
          region: "US",
          note: "Per-seat HCM and finance software is a prime services-as-software target because agents can absorb the work its screens exist to support. Bull hedge is deep system-of-record data and switching costs; bear case is that outcome-priced HR and finance agents erode seat count."
        },
        {
          name: "Atlassian",
          ticker: "NASDAQ:TEAM",
          exposure: "core",
          stance: "watch",
          purity: "low",
          cap: "large",
          horizon: "mid",
          region: "US",
          note: "Seat-based Jira and Confluence are exposed, but Rovo agents and sticky developer workflows are the hedge. Bear case is that AI-native project and knowledge tools reprice collaboration away from per-user seats."
        },
        {
          name: "HubSpot",
          ticker: "NYSE:HUBS",
          exposure: "core",
          stance: "short",
          purity: "med",
          cap: "mid",
          horizon: "mid",
          region: "US",
          note: "SMB seat-based CRM and marketing is highly exposed because small customers have low switching costs and adopt AI-native tools fast; Breeze agents are the hedge. Bear case is that outcome-priced marketing and sales agents undercut the seat model at the low end."
        },
        {
          name: "Adobe",
          ticker: "NASDAQ:ADBE",
          exposure: "core",
          stance: "watch",
          purity: "low",
          cap: "large",
          horizon: "mid",
          region: "US",
          note: "Creative-seat licensing faces a displacement narrative as generative tools do the work; Firefly and its content and integration moat are the hedge. Bear case is that AI-native creative tools erode Creative Cloud seats faster than Firefly monetizes them."
        }
      ]
    },
    {
      segment: "AI-native application layer (mostly private)",
      chainNode: "Outcome-priced vertical and horizontal agents",
      companies: [
        {
          name: "OpenAI",
          ticker: "private",
          exposure: "pure-play",
          stance: "long",
          purity: "high",
          cap: "private",
          horizon: "mid",
          region: "US",
          note: "The most valuable AI-native, ~$852B valuation (Mar 2026), with ChatGPT Enterprise past 1M business customers; the reference app layer for enterprise agents. No clean public exposure, partial reach only via Microsoft. Bear case is capital intensity and fierce competition."
        },
        {
          name: "Anthropic",
          ticker: "private",
          exposure: "pure-play",
          stance: "long",
          purity: "high",
          cap: "private",
          horizon: "mid",
          region: "US",
          note: "Frontier lab whose Claude and Claude Code lead the most mature agentic domain, coding; ~$965B valuation (May 2026). Indirect reach only via Amazon and Alphabet stakes. Same capital-intensity bear case."
        },
        {
          name: "Sierra",
          ticker: "private",
          exposure: "pure-play",
          stance: "long",
          purity: "high",
          cap: "private",
          horizon: "mid",
          region: "US",
          note: "Bret Taylor's benchmark outcome-priced customer-experience agent company, ~$100-200M run-rate at a $15.8B valuation (May 2026), selling resolutions not seats. Private, so no public exposure. Bear case is that incumbents with data gravity absorb the same use case."
        },
        {
          name: "Harvey",
          ticker: "private",
          exposure: "pure-play",
          stance: "long",
          purity: "high",
          cap: "private",
          horizon: "mid",
          region: "US",
          note: "Legal-agent leader at an $11B valuation (Mar 2026), automating knowledge work in a high-value vertical. Private. Bear case is that legal incumbents and model providers move into the same workflow."
        },
        {
          name: "Decagon",
          ticker: "private",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "private",
          horizon: "mid",
          region: "US",
          note: "Outcome-priced customer-experience agent at a $4.5B valuation (Jan 2026), ~$35M run-rate. Private and early. Bear case is a crowded CX-agent field including Sierra, Intercom Fin, and Salesforce Agentforce."
        }
      ]
    }
  ],

  atRisk: [
    { name: "Salesforce", ticker: "NYSE:CRM", note: "Seat-based CRM is the archetypal outcome-pricing displacement target; the Agentforce pivot is a genuine hedge but risks cannibalizing higher-margin seat revenue with lower-margin consumption revenue." },
    { name: "Workday", ticker: "NASDAQ:WDAY", note: "Per-seat HCM and finance is a prime services-as-software target as agents absorb the tasks the software supports; the system-of-record data moat slows, but may not stop, the seat-count erosion." },
    { name: "HubSpot", ticker: "NYSE:HUBS", note: "SMB seat-based CRM and marketing is the most exposed cohort because low switching costs let small customers move to AI-native, outcome-priced tools quickly." },
    { name: "Adobe", ticker: "NASDAQ:ADBE", note: "Creative-seat licensing faces the clearest 'the AI does the work' narrative; Firefly is a hedge, but AI-native creative tools could erode Creative Cloud seats faster than it monetizes." }
  ],

  lastReviewed: "2026-07"
};
