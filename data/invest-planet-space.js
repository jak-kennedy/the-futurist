/* =============================================================================
   THE FUTURIST: INVESTABLE MAP: PLANET & SPACE (+ adjacent biology/food)
   =============================================================================
   Three 30-year structural exposure maps. Not trades. Not price targets.
   Tickers verified June 2026; private/pre-IPO labeled where there is no clean
   public security. Bear case stated first where the case is contested.

   Domains registered here:
     space-industrialization  (planet-space)
     climate-intervention     (planet-space)
     cultivated-food          (biology / food)

   Author rules followed: real tickers only, no fabricated companies, estimates
   labeled, enums fixed per _schema.js INVESTABLE MAP block.
   ============================================================================= */

window.FUTURIST_INVEST = window.FUTURIST_INVEST || {};

/* ---------------------------------------------------------------------------
   SPACE INDUSTRIALIZATION
   --------------------------------------------------------------------------- */
window.FUTURIST_INVEST["space-industrialization"] = {
  thesis: "Falling launch cost turns space from a government science budget into an industrial supply chain. Over 30 years the value migrates from rockets to what rides on them: bandwidth, imaging, position data, and eventually manufacturing in orbit. The hard truth is that the dominant operator was private for most of this story, so the cleanest exposure changed shape in 2026 when SpaceX filed to go public.",

  howToThink: "Think in three layers. The pure-plays are the rocket and satellite operators, and the biggest one, SpaceX, priced a record IPO in June 2026 under the ticker SPCX, which is rare for a category this young. The durable picks-and-shovels layer is the parts that every constellation needs whoever wins, like sensors, solar arrays, and ground stations, where Redwire and the defense primes sit. Incumbents like Boeing, Lockheed, and Northrop carry optionality through legacy contracts but are not bets on the new economy. The bear case is plain: one operator dominates launch, public pure-plays trade at high multiples on thin or no profit, and a single failed mission can halve a small-cap.",

  conviction: {
    rating: "Medium",
    ourProbability: 0.52,
    street: "The market treats cheap launch as proven and is now pricing the orbital economy aggressively after the SpaceX IPO.",
    edge: "We think the launch winner is close to settled but the application layer winners are not yet public, so most listed pure-plays are high-variance proxies rather than the real prize.",
    horizon: "Exposure builds across the 2020s; the industrial inflection (in-orbit manufacturing, dense direct-to-device coverage) lands in the late 2030s."
  },

  sCurve: {
    stage: "inflection",
    points: [
      { year: 2026, value: 90, unit: "$B", note: "commercial space revenue today, launch plus satcom heavy" },
      { year: 2035, value: 220, unit: "$B" },
      { year: 2045, value: 500, unit: "$B" },
      { year: 2056, value: 900, unit: "$B", basis: "author estimate extrapolating Morgan Stanley and Citi space-economy roadmaps; wide band, mostly satcom and earth-data plus a thin manufacturing slice" }
    ]
  },

  marketMap: [
    {
      segment: "Launch and the operator gorilla",
      chainNode: "Reusable orbital launch",
      companies: [
        {
          name: "SpaceX",
          ticker: "NASDAQ:SPCX",
          exposure: "pure-play",
          stance: "long",
          purity: "high",
          cap: "mega",
          horizon: "near",
          region: "US",
          note: "The dominant launcher (165 Falcon 9 flights in 2025) and the largest satellite operator via Starlink (9,300+ active sats), public from June 12 2026 after a record IPO priced at $135/share. Bull: structural lead in reusability, a vertically integrated constellation, and the Starship optionality. Bear: a multi-trillion-dollar valuation on heavy reported losses and total key-man concentration in Musk."
        },
        {
          name: "Rocket Lab",
          ticker: "NASDAQ:RKLB",
          exposure: "pure-play",
          stance: "long",
          purity: "high",
          cap: "mid",
          horizon: "mid",
          region: "US",
          note: "Small-launch leader moving up to the medium Neutron rocket and selling spacecraft components. Bull: real launch cadence plus a growing systems business. Bear: Neutron must work to matter, and a single mission failure moves the stock hard."
        }
      ]
    },
    {
      segment: "Earth data and imaging",
      chainNode: "Satellite constellations and analytics",
      companies: [
        {
          name: "Planet Labs",
          ticker: "NYSE:PL",
          exposure: "core",
          stance: "long",
          purity: "high",
          cap: "small",
          horizon: "mid",
          region: "US",
          note: "Daily imaging of the whole planet sold as a data subscription. Bull: a hard-to-rebuild sensor fleet and recurring revenue. Bear: customer concentration in government and a long road to durable profit."
        }
      ]
    },
    {
      segment: "Direct-to-device connectivity",
      chainNode: "Space-based cellular broadband",
      companies: [
        {
          name: "AST SpaceMobile",
          ticker: "NASDAQ:ASTS",
          exposure: "pure-play",
          stance: "long",
          purity: "high",
          cap: "mid",
          horizon: "mid",
          region: "US",
          note: "Building large satellites that connect to ordinary phones with carrier partners. By mid-2026 it had launched its next-gen BlueBird 6 (the largest commercial array in LEO, Dec 2025) and the BlueBird 8-10 batch (June 2026), won FCC approval for up to 248 satellites, and begun Verizon service. Bull: enormous market if the physics and capex hold. Bear: still ramping toward dozens of satellites, heavy cash burn, and direct competition from Starlink's ~650-satellite direct-to-cell fleet."
        }
      ]
    },
    {
      segment: "Lunar and cislunar services",
      chainNode: "Landers and transport",
      companies: [
        {
          name: "Intuitive Machines",
          ticker: "NASDAQ:LUNR",
          exposure: "pure-play",
          stance: "long",
          purity: "high",
          cap: "small",
          horizon: "long",
          region: "US",
          note: "Moon landers and lunar services under NASA contracts. Its IM-2 (Athena) achieved the southernmost lunar landing in March 2025 but tipped on its side, ending the mission early, the second IM lander to do so. Bull: first-mover in a government-funded return to the Moon. Bear: mission risk is binary, two landers have toppled, and revenue depends on a small number of contracts."
        }
      ]
    },
    {
      segment: "In-space infrastructure and manufacturing (the picks and shovels)",
      chainNode: "Sensors, solar arrays, in-orbit hardware",
      companies: [
        {
          name: "Redwire",
          ticker: "NYSE:RDW",
          exposure: "enabler",
          stance: "long",
          purity: "high",
          cap: "small",
          horizon: "mid",
          region: "US",
          note: "Supplies the structures, solar arrays, and in-space manufacturing hardware that missions need whoever wins. Bull: arms-dealer position across many programs. Bear: small balance sheet, dilution history, and lumpy contract revenue."
        },
        {
          name: "Varda Space Industries",
          ticker: "private",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "private",
          horizon: "long",
          region: "US",
          note: "Manufacturing pharmaceutical materials in orbit and returning them to Earth; four W-series capsules flown by mid-2026, a $187M Series C in July 2025, and now building its own satellite bus. Bull: the most credible attempt at the in-space manufacturing thesis, with recurring reentries. Bear: private, pre-scale, and the unit economics of orbital production are still unproven."
        }
      ]
    },
    {
      segment: "Defense primes with optionality",
      chainNode: "Legacy launch and satellite contracts",
      companies: [
        {
          name: "Boeing",
          ticker: "NYSE:BA",
          exposure: "adjacent",
          stance: "watch",
          purity: "low",
          cap: "large",
          horizon: "mid",
          region: "US",
          note: "Space is a small share of a troubled aerospace giant. Bull: deep contract base and the ULA joint venture. Bear: space is not the driver of the stock, and the new economy is eroding legacy launch."
        },
        {
          name: "Lockheed Martin",
          ticker: "NYSE:LMT",
          exposure: "adjacent",
          stance: "watch",
          purity: "low",
          cap: "large",
          horizon: "mid",
          region: "US",
          note: "Major satellite and national-security space supplier inside a large defense prime. Bull: stable government demand. Bear: incumbent cost structure faces cheaper commercial competition."
        },
        {
          name: "Northrop Grumman",
          ticker: "NYSE:NOC",
          exposure: "adjacent",
          stance: "watch",
          purity: "low",
          cap: "large",
          horizon: "mid",
          region: "US",
          note: "Space systems and solid rocket motors within a defense prime. Bull: entrenched in classified and missile programs. Bear: diversified exposure, so the orbital economy barely moves the needle."
        }
      ]
    }
  ],

  atRisk: [
    { name: "Legacy fixed satellite operators (GEO incumbents)", ticker: "various", note: "Large geostationary fleets face displacement by low-orbit constellations that offer lower latency and falling prices. Several have already restructured." },
    { name: "Boeing", ticker: "NYSE:BA", note: "Half of the legacy ULA launch franchise is structurally undercut by reusable rockets, even as the wider company stays a prime." }
  ],

  lastReviewed: "2026-06"
};

/* ---------------------------------------------------------------------------
   CLIMATE INTERVENTION
   --------------------------------------------------------------------------- */
window.FUTURIST_INVEST["climate-intervention"] = {
  thesis: "If the world keeps overshooting its carbon targets, pulling carbon back out of the air becomes a permanent industry rather than a science project. The 30-year case is engineered carbon removal at industrial scale, anchored by direct air capture and durable storage. The case is policy-dependent, so the bull and bear cases both hinge on subsidies and a price on carbon holding for decades.",

  howToThink: "Separate two very different things. Carbon removal (pulling CO2 out of the air and storing it) is a real, investable industrial buildout. Solar geoengineering, or SRM, which means dimming sunlight, is governance-bound and is NOT investable, with no clean public security and serious legal and ethical limits, so we exclude it as a holding. The pure-play removal companies like Climeworks and Heirloom are private. The most durable public exposure today is the picks-and-shovels layer of industrial gas and engineering, plus Occidental, which is an oil major building large direct air capture through its 1PointFive arm. The bear case is blunt: removal still costs hundreds of dollars per ton, the economics depend on tax credits and carbon prices, and a policy reversal could strand the whole thesis.",

  conviction: {
    rating: "Medium",
    ourProbability: 0.58,
    street: "Consensus sees carbon removal as inevitable at scale but disagrees sharply on the timing and on how far cost will fall.",
    edge: "We think the durable money is in the enablers and the storage rights rather than the capture-technology pure-plays, because capture chemistry may commoditize while CO2 transport, storage permits, and industrial gas supply stay scarce.",
    horizon: "Subsidy-driven buildout through the 2030s; an unsubsidized cost crossover, if it comes, lands in the 2040s and is not assured."
  },

  sCurve: {
    stage: "nascent",
    points: [
      { year: 2026, value: 2, unit: "$B", note: "early plants and the voluntary carbon-removal credit market, small and policy-fed" },
      { year: 2035, value: 30, unit: "$B" },
      { year: 2045, value: 120, unit: "$B" },
      { year: 2056, value: 300, unit: "$B", basis: "author estimate; IEA net-zero pathways imply gigatonne-scale removal, but dollar value swings widely with cost per ton and carbon price, so treat as a broad band" }
    ]
  },

  marketMap: [
    {
      segment: "Oil major building direct air capture",
      chainNode: "DAC plus geologic storage",
      companies: [
        {
          name: "Occidental Petroleum",
          ticker: "NYSE:OXY",
          exposure: "core",
          stance: "long",
          purity: "low",
          cap: "large",
          horizon: "mid",
          region: "US",
          note: "Through its 1PointFive arm, Occidental runs STRATOS in Texas, among the largest DAC plants, which secured the first DAC Class VI storage permits in April 2025 and $550M from BlackRock, plus an ADNOC/XRG joint venture for a second hub; startup slipped into 2025-2026 on a component issue. Bull: subsurface expertise, storage acreage, and credit offtake. Bear: still an oil company whose stock tracks crude far more than carbon removal, and the DAC business needs subsidies to pencil."
        }
      ]
    },
    {
      segment: "Pure-play capture (mostly private)",
      chainNode: "Direct air capture technology",
      companies: [
        {
          name: "Climeworks",
          ticker: "private",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "private",
          horizon: "long",
          region: "Switzerland",
          note: "Operates large solid-sorbent DAC plants in Iceland and sells removal credits. Its Mammoth plant captured only about 105 tonnes in 2024 against a 36,000-tonne nameplate, and the firm cut roughly 10% of staff in mid-2025. Bull: a leading independent and a recognized brand in removal. Bear: private, expensive per ton, real output far below design, and reliant on still-voluntary credit demand."
        },
        {
          name: "Heirloom Carbon",
          ticker: "private",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "private",
          horizon: "long",
          region: "US",
          note: "Uses limestone to pull CO2 from the air at lower potential cost. Bull: a cheaper chemistry path with strong backers. Bear: private, early, and unproven at industrial scale."
        }
      ]
    },
    {
      segment: "Industrial gas and engineering enablers (the arms dealers)",
      chainNode: "CO2 handling, compression, plant engineering",
      companies: [
        {
          name: "Linde",
          ticker: "NASDAQ:LIN",
          exposure: "enabler",
          stance: "long",
          purity: "low",
          cap: "mega",
          horizon: "mid",
          region: "US",
          note: "The largest industrial gas company, supplying the CO2 handling, compression, and plant systems that capture projects depend on. Bull: profits whoever wins the capture race, with a real existing business underneath. Bear: carbon capture is a small slice of revenue today, so the exposure is diluted."
        },
        {
          name: "Air Liquide",
          ticker: "EPA:AI",
          exposure: "enabler",
          stance: "long",
          purity: "low",
          cap: "large",
          horizon: "mid",
          region: "France",
          note: "A global industrial gas leader supplying gas separation and CO2 infrastructure for capture and storage. Bull: deep process engineering and an installed customer base. Bear: like Linde, capture is a minor part of the whole, so it is a tilt, not a pure bet."
        }
      ]
    }
  ],

  atRisk: [
    { name: "Voluntary-credit-dependent removal sellers", ticker: "various-private", note: "Companies whose entire revenue is voluntary carbon-removal credits are exposed if corporate buyers retreat or if policy support weakens, since there is no mandatory floor under demand." }
  ],

  lastReviewed: "2026-06"
};

/* ---------------------------------------------------------------------------
   CULTIVATED FOOD
   --------------------------------------------------------------------------- */
window.FUTURIST_INVEST["cultivated-food"] = {
  thesis: "Growing meat and proteins from cells or microbes, rather than from animals, could over decades reshape part of a multi-trillion-dollar food system. The 30-year case rests on biology getting cheap, the same way computing did. Cost parity with conventional meat is unproven, so this may stay a niche, and the honest framing is downside-first.",

  howToThink: "Be careful here, because the public plant-based comp already disappointed. Beyond Meat showed how fast a hyped food story can de-rate, so it is a cautionary tale, not a template. The true cultivated-meat pure-plays like Upside Foods, GOOD Meat, and Mosa Meat are private and pre-scale, and Perfect Day and Solar Foods, which make proteins by fermentation, are private too. The most durable public exposure is the bioprocessing arms dealer, namely the equipment and bioreactors that every producer needs, where Sartorius sits. Big agriculture incumbents like ADM, Bunge, and Tyson carry two-sided optionality: they could supply or acquire the winners, or they could be disrupted if the technology works. The bear case is the base case until proven otherwise: cost parity is contested, consumer acceptance is uncertain, and the regulatory picture has worsened, with seven US states banning cultivated-meat sales by mid-2025 and the leading producers now in litigation.",

  conviction: {
    rating: "Low",
    ourProbability: 0.38,
    street: "After the plant-based bust, the market is skeptical and prices little cultivated-meat success into food incumbents.",
    edge: "We think the picks-and-shovels bioprocessing layer is investable today while the consumer pure-plays are not, because equipment demand grows even if no single brand wins and even if scale arrives slowly.",
    horizon: "Niche premium products through the 2030s; mainstream cost parity, if it ever comes, is a 2040s question and may not arrive at all."
  },

  sCurve: {
    stage: "nascent",
    points: [
      { year: 2026, value: 1, unit: "$B", note: "tiny: limited approvals, pilot plants, premium pricing" },
      { year: 2035, value: 12, unit: "$B" },
      { year: 2045, value: 50, unit: "$B" },
      { year: 2056, value: 130, unit: "$B", basis: "author estimate; bullish consultancy forecasts (for example AT Kearney) imply far more, but those assume cost parity we treat as unproven, so we use a conservative band" }
    ]
  },

  marketMap: [
    {
      segment: "Cautionary public comp (plant-based)",
      chainNode: "Branded alternative protein",
      companies: [
        {
          name: "Beyond Meat",
          ticker: "NASDAQ:BYND",
          exposure: "adjacent",
          stance: "watch",
          purity: "high",
          cap: "small",
          horizon: "near",
          region: "US",
          note: "A pure-play plant-based brand, not cultivated meat, included as a warning. Bull: a recognized brand if demand returns. Bear: shrinking sales, thin pricing power, and a stock that shows how a hyped food category can collapse."
        }
      ]
    },
    {
      segment: "Cultivated-meat pure-plays (private)",
      chainNode: "Cell-cultured meat",
      companies: [
        {
          name: "Upside Foods",
          ticker: "private",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "private",
          horizon: "long",
          region: "US",
          note: "Among the first to win US approval for cultivated chicken; now litigating against the Florida and Texas state bans. Bull: regulatory lead and strong funding. Bear: private, pre-scale, far from cost parity, and facing a spreading patchwork of state-level prohibition."
        },
        {
          name: "GOOD Meat (Eat Just)",
          ticker: "private",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "private",
          horizon: "long",
          region: "US",
          note: "First to sell cultivated meat commercially, in Singapore and the US. Bull: early regulatory wins across markets. Bear: private, tiny volumes, and heavy cash needs."
        },
        {
          name: "Mosa Meat",
          ticker: "private",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "private",
          horizon: "long",
          region: "Netherlands",
          note: "Maker of the first cultivated beef burger, pursuing European approval. Bull: deep science roots. Bear: private, pre-revenue, and gated by slow EU regulation."
        }
      ]
    },
    {
      segment: "Precision fermentation pure-plays (private)",
      chainNode: "Microbial protein and fats",
      companies: [
        {
          name: "Perfect Day",
          ticker: "private",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "private",
          horizon: "long",
          region: "US",
          note: "Makes dairy proteins by fermentation without cows. Bull: an ingredient model that sells to other brands, the cleanest cost-reduction path in the sector. Bear: private, and it restructured amid funding pressure, a reminder that even the more economic fermentation route is not yet at parity."
        },
        {
          name: "Solar Foods",
          ticker: "private",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "private",
          horizon: "long",
          region: "Finland",
          note: "Grows protein from microbes using hydrogen and CO2, almost without farmland. Bull: a striking land-light process. Bear: private, very early, and unproven on cost."
        }
      ]
    },
    {
      segment: "Bioprocessing arms dealer (the durable public play)",
      chainNode: "Bioreactors and cell-culture equipment",
      companies: [
        {
          name: "Sartorius",
          ticker: "ETR:SRT3",
          exposure: "enabler",
          stance: "long",
          purity: "low",
          cap: "large",
          horizon: "mid",
          region: "Germany",
          note: "Supplies bioreactors, filtration, and cell-culture media that every cultivated producer needs whoever wins. Bull: a real, profitable bioprocessing business with food as upside optionality. Bear: cultivated meat is a tiny part of demand today, and the stock mainly tracks pharma capex."
        }
      ]
    },
    {
      segment: "Ag and protein incumbents with two-sided optionality",
      chainNode: "Feedstock, fermentation inputs, distribution",
      companies: [
        {
          name: "Archer-Daniels-Midland",
          ticker: "NYSE:ADM",
          exposure: "adjacent",
          stance: "watch",
          purity: "low",
          cap: "large",
          horizon: "mid",
          region: "US",
          note: "A giant in fermentation feedstocks and food ingredients. Bull: could supply the growth media and inputs the whole sector needs. Bear: tiny exposure relative to its core grain trading, so it is optionality, not a thesis."
        },
        {
          name: "Bunge Global",
          ticker: "NYSE:BG",
          exposure: "adjacent",
          stance: "watch",
          purity: "low",
          cap: "large",
          horizon: "mid",
          region: "US",
          note: "A major agribusiness in oilseeds and plant proteins. Bull: positioned to supply alternative-protein inputs. Bear: cultivated food is immaterial to earnings today."
        },
        {
          name: "Tyson Foods",
          ticker: "NYSE:TSN",
          exposure: "adjacent",
          stance: "watch",
          purity: "low",
          cap: "large",
          horizon: "mid",
          region: "US",
          note: "The largest US meat producer, which has invested in cultivated and alternative startups. Bull: it can buy its way into a winner. Bear: it is also the most directly disrupted if cultivated meat ever reaches cost parity."
        }
      ]
    }
  ],

  atRisk: [
    { name: "Conventional meat processors", ticker: "NYSE:TSN", note: "If cultivated meat ever reaches cost parity, the incumbents with the largest conventional slaughter and processing footprints face the most structural pressure, even as they hedge through startup stakes." },
    { name: "Branded plant-based pure-plays", ticker: "NASDAQ:BYND", note: "Single-category alternative-protein brands have already shown how quickly demand and pricing power can fade, and a shift toward cultivated products would add a second source of competition." }
  ],

  lastReviewed: "2026-06"
};
