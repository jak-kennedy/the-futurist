/* =============================================================================
   THE FUTURIST: INVESTABLE MAP: MACHINES
   =============================================================================
   Three 30-year structural exposure maps. Not trades. Not price targets.
   Tickers verified June 2026; private/pre-IPO labeled where there is no clean
   public security. Bear case stated first where the case is contested.

   Technologies registered here:
     humanoid-robots                  (machines)
     atomically-precise-manufacturing (machines)
     autonomous-transport             (machines)

   Verification notes (June 2026):
   - Luminar filed Chapter 11 in Dec 2025, was delisted from Nasdaq, and its
     liquidation plan (effective April 2026) leaves equity with no recovery.
     It is deliberately ABSENT from the lidar map and used as a lesson instead.
   - Unitree cleared the Shanghai STAR Market listing review on June 1, 2026
     (seeking ~4.2B yuan / ~$610M) but has not priced or listed yet; marked
     pre-IPO. 2025 revenue ~1.71B yuan (up 335% YoY).
   - Figure AI remains private (Series C, Sept 2025, $39B post-money).
   - Apptronik: Feb 2026 Series A extension, funding near $1B, ~$5.3B post-money
     (TechCrunch/Crunchbase); private.
   - Physical Intelligence: $600M raise Nov 2025 at $5.6B (Bloomberg); private.
   - Waymo ~500k paid rides/week across ~10 cities (2026), targeting 1M/week.
   Author rules followed: real tickers only, no fabricated companies, estimates
   labeled, enums fixed per _schema.js INVESTABLE MAP block.
   ============================================================================= */

window.FUTURIST_INVEST = window.FUTURIST_INVEST || {};

/* ---------------------------------------------------------------------------
   HUMANOID ROBOTS
   --------------------------------------------------------------------------- */
window.FUTURIST_INVEST["humanoid-robots"] = {
  thesis: "Physical labor is the largest spend category on earth, and a general-purpose robot that absorbs even a slice of it creates an industrials-sized market from nothing. The catch is that the best robot makers are private, the demos run far ahead of the deployments, and nobody has proven the unit economics. Over 30 years the durable money is likely in the chokepoint components every robot needs, with the robot brands themselves a higher-variance second act.",

  howToThink: "Sort everything you see into three buckets. Bucket one is the pure-play robot makers, and almost all of them are private: Figure raised at a $39B valuation in late 2025, Apptronik raised near $1B (~$5.3B post-money) with Apollo piloting at Mercedes, 1X and Agility are venture-backed, and China's Unitree cleared its Shanghai STAR Market listing review in June 2026 but has not listed yet, on an exchange most foreign investors cannot easily buy anyway. Bucket two is the public incumbents with optionality, mainly Tesla, where you get the Optimus program only by buying a whole car company, with Hyundai (parent of Boston Dynamics) a second route. Bucket three is the arms dealers: the strain-wave gearboxes, rare-earth magnets, and AI compute and robot foundation models that every humanoid needs whoever wins the brand war, which is where Japan's Harmonic Drive, the Western magnet champions, and NVIDIA sit. The bear case is plain: pilots have not become paid fleets, a humanoid still costs more than the labor it replaces in most jobs, and China's cost curve may commoditize the hardware before Western makers reach scale.",

  conviction: {
    rating: "Medium",
    ourProbability: 0.62,
    street: "The market prices humanoids as imminent, via the Tesla narrative and a private funding boom, while assigning the component layer almost no robot premium.",
    edge: "We think hardware margins get competed away by China scale, so the durable economics sit with the magnet, gearbox, and compute chokepoints plus eventual fleet operators rather than the robot brands.",
    horizon: "Component demand pays from the early 2030s; the OEM winners and fleet economics only clarify in the 2040s."
  },

  sCurve: {
    stage: "nascent",
    points: [
      { year: 2026, value: 2, unit: "$B", note: "pilots and research units; Unitree booked roughly $240M in 2025, mostly quadrupeds; author estimate" },
      { year: 2030, value: 12, unit: "$B" },
      { year: 2035, value: 38, unit: "$B", basis: "Goldman Sachs 2024 humanoid TAM revision: $38B by 2035, about 1.4M units" },
      { year: 2045, value: 400, unit: "$B" },
      { year: 2056, value: 1500, unit: "$B", basis: "author estimate; a haircut of Morgan Stanley's roughly $5T-by-2050 humanoid scenario, assuming tens of millions of working units rather than the billion-unit bull case" }
    ]
  },

  marketMap: [
    {
      segment: "Robot makers (mostly private)",
      companies: [
        {
          name: "Tesla",
          ticker: "NASDAQ:TSLA",
          exposure: "core",
          stance: "long",
          purity: "low",
          cap: "mega",
          horizon: "long",
          region: "US",
          note: "The only liquid way to own a serious Western humanoid program, since Optimus rides inside a car company. Bear: Optimus is pre-revenue, timelines have slipped repeatedly, and you carry the auto cycle and key-man risk to hold the option."
        },
        {
          name: "Figure AI",
          ticker: "private",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "private",
          horizon: "long",
          region: "US",
          note: "Best-funded US humanoid startup; Series C in Sept 2025 at $39B post-money. Bear: secondary trades in early 2026 marked it below that, revenue is minimal, and an IPO window of 2027-28 is consensus guesswork, not a filing."
        },
        {
          name: "Unitree Robotics",
          ticker: "pre-IPO",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "private",
          horizon: "mid",
          region: "China",
          note: "China's volume leader; revenue grew from roughly $22M in 2023 to roughly $240M in 2025, and its STAR Market IPO cleared listing review on June 1, 2026. Bear: it will trade as a Shanghai A-share that most foreign investors cannot hold directly, and margins are already compressing as it pivots spend into embodied AI."
        },
        {
          name: "Agility Robotics",
          ticker: "private",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "private",
          horizon: "mid",
          region: "US",
          note: "Furthest along on real warehouse work; Digit has run paid pilots with GXO and tests with Amazon since 2023-24. Bear: pilots in the low dozens of units, not fleets, and the robots-as-a-service model is unproven at scale."
        },
        {
          name: "1X Technologies",
          ticker: "private",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "private",
          horizon: "long",
          region: "Norway/US",
          note: "Betting on home humanoids (NEO) rather than warehouses, an even larger but even less proven market. Bear: consumer robotics has a graveyard of failures and home environments are the hardest deployment setting of all."
        },
        {
          name: "Apptronik",
          ticker: "private",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "private",
          horizon: "mid",
          region: "US",
          note: "Apollo is in pilot use at Mercedes-Benz plants in Berlin and Hungary; a Feb 2026 Series A extension brought funding near $1B at roughly $5.3B post-money, backed by Google, Mercedes-Benz, and the Qatar Investment Authority. Bear: pilots are not fleets, and it competes against far-better-capitalized Tesla and Figure for the same factory buyers."
        }
      ]
    },
    {
      segment: "The robot brain: compute and foundation models",
      chainNode: "AI inference compute (edge SoCs)",
      companies: [
        {
          name: "NVIDIA",
          ticker: "NASDAQ:NVDA",
          exposure: "enabler",
          stance: "long",
          purity: "low",
          cap: "mega",
          horizon: "near",
          region: "US",
          note: "Sells the training clusters, the Jetson Thor edge chips, and the Isaac robot-model stack to nearly every humanoid team, so it gets paid whoever wins. Bear: robotics is a rounding error next to its datacenter business for years, so this is broad-AI exposure with a robotics kicker, not a robot bet."
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
          note: "DeepMind's Gemini Robotics models and the Apptronik partnership give it a credible path to supplying robot brains. Bear: robotics is optionality buried inside a search and cloud giant, and Google has exited robot hardware before (Boston Dynamics, Schaft)."
        }
      ]
    },
    {
      segment: "Precision gearboxes and actuators",
      chainNode: "Harmonic drive / strain-wave gearboxes",
      companies: [
        {
          name: "Harmonic Drive Systems",
          ticker: "TSE:6324",
          exposure: "enabler",
          stance: "long",
          purity: "high",
          cap: "mid",
          horizon: "mid",
          region: "Japan",
          note: "Near-monopoly on the strain-wave gears that put dozens of precise joints in a robot, built on 60 years of IP; lead times stretched to 12-18 months in the last robot capex crunch. Bear: Tesla and others design their own actuators around it, and Chinese clones undercut on price, so the moat is being attacked from both ends."
        },
        {
          name: "Nabtesco",
          ticker: "TSE:6268",
          exposure: "enabler",
          stance: "watch",
          purity: "med",
          cap: "mid",
          horizon: "mid",
          region: "Japan",
          note: "Dominates the heavier cycloidal gears used in industrial robot arms, roughly 60 percent of that market. Bear: humanoids mostly favor strain-wave gears and roller screws over its core product, so its humanoid exposure is real but secondhand."
        }
      ]
    },
    {
      segment: "Rare-earth magnets",
      chainNode: "Neodymium-iron-boron (NdFeB) rare-earth permanent magnets",
      companies: [
        {
          name: "MP Materials",
          ticker: "NYSE:MP",
          exposure: "enabler",
          stance: "long",
          purity: "med",
          cap: "large",
          horizon: "near",
          region: "US",
          note: "The US rare-earth champion: Mountain Pass mine plus a Fort Worth magnet plant, with a 2025 Department of Defense deal that set a price floor and made the Pentagon a major shareholder. Bear: its economics now lean on policy support, and China still controls roughly 90 percent of global magnet output, setting the price it competes against."
        },
        {
          name: "Lynas Rare Earths",
          ticker: "ASX:LYC",
          exposure: "enabler",
          stance: "long",
          purity: "med",
          cap: "mid",
          horizon: "mid",
          region: "Australia",
          note: "Largest rare-earth separator outside China, and in 2025 became the first to separate heavy rare earths (dysprosium) outside China at its Malaysian plant. Bear: it sells into prices effectively set by Chinese supply policy, and its processing footprint carries permitting and environmental risk."
        }
      ]
    },
    {
      segment: "Fleet deployment and robot labor",
      chainNode: "Teleoperation and human-in-the-loop oversight infrastructure",
      companies: [
        {
          name: "Amazon",
          ticker: "NASDAQ:AMZN",
          exposure: "adjacent",
          stance: "watch",
          purity: "low",
          cap: "mega",
          horizon: "long",
          region: "US",
          note: "Already operates the largest robot fleet on earth, more than 750,000 warehouse robots, and has tested Digit humanoids; if humanoids work, it is the anchor customer and may build its own. Bear: robotics savings accrue quietly inside retail margins, so this is never a clean robot bet."
        },
        {
          name: "GXO Logistics",
          ticker: "NYSE:GXO",
          exposure: "adjacent",
          stance: "watch",
          purity: "low",
          cap: "mid",
          horizon: "mid",
          region: "US",
          note: "The first third-party logistics firm to run paid humanoid pilots (Agility's Digit, from 2024), positioning it as the deployment layer where robot labor meets customers. Bear: it is a thin-margin logistics operator first, and any robot advantage gets competed away across the 3PL industry."
        }
      ]
    }
  ],

  atRisk: [
    {
      name: "ManpowerGroup",
      ticker: "NYSE:MAN",
      note: "Staffing firms that intermediate light-industrial temp labor face structural volume loss if humanoids absorb warehouse and factory shifts. The offset: disruption lands late in the window, and staffing firms could pivot to renting robot fleets the way they rent people."
    },
    {
      name: "Adecco Group",
      ticker: "SWX:ADEN",
      note: "Same exposure as Manpower at larger European scale: industrial temp staffing is the first labor pool humanoids target. The risk is a 2040s story, not a 2020s one, which is exactly the horizon of this map."
    }
  ],

  lastReviewed: "2026-06"
};

/* ---------------------------------------------------------------------------
   ATOMICALLY PRECISE MANUFACTURING
   --------------------------------------------------------------------------- */
window.FUTURIST_INVEST["atomically-precise-manufacturing"] = {
  thesis: "Drexlerian molecular manufacturing does not exist, and we put only an 8 percent chance on a working assembler by 2056, so there is nothing to buy. No pure-play, no basket, no index gives real exposure today, and any product marketed as one is repackaging unrelated nanotech. The honest 30-year posture is a science-watch with defined tripwires, not a position.",

  howToThink: "Start from the uncomfortable fact: you cannot invest in this today, and the last time the market pretended otherwise, the 2005-vintage nanotech funds like the PowerShares Lux Nanotech ETF bled assets for years and liquidated in 2014. The only public companies with any link are the instrument makers, Bruker and Oxford Instruments, which sell the microscopes and cryogenic kit that atomic-scale research runs on; they are fine businesses on other merits, but buying them is buying the whole of materials science, not APM. The closest pure-play is Zyvex Labs, a tiny private Texas lab doing atomically precise fabrication on silicon with government funding. Treat this page as a watchlist with tripwires: a demonstration of parallel positional assembly at millions of sites, or an STM-built structure of thousands of atoms made repeatably, would change the answer. Until then the right allocation to APM is zero, and anyone selling you exposure is selling a story.",

  conviction: {
    rating: "Low",
    ourProbability: 0.08,
    street: "The market assigns this essentially zero probability and prices no security for it, which we think is currently correct.",
    edge: "We hold no variant view on timing; our edge is discipline, defining the lab milestones that would make this investable years before any fund is marketed on it.",
    horizon: "Not investable this decade; the first real securities, if they ever exist, plausibly appear only after 2040."
  },

  sCurve: {
    stage: "nascent",
    points: [
      { year: 2026, value: 0, unit: "$B", note: "no APM market exists; all activity is academic and government-funded research" },
      { year: 2040, value: 0, unit: "$B", note: "modal case: still research; instrument vendors grow on other demand" },
      { year: 2056, value: 25, unit: "$B", basis: "conditional scenario, not an expectation: if mechanosynthesis bootstraps by mid-century, first markets in catalysts and precision medicine; author estimate, and the probability-weighted value is near zero at 8 percent" }
    ]
  },

  marketMap: [
    {
      segment: "Atomic-scale tools and metrology (the only public link)",
      chainNode: "Scanning tunneling microscopes (STM) and atomic force microscopes (AFM)",
      companies: [
        {
          name: "Bruker",
          ticker: "NASDAQ:BRKR",
          exposure: "enabler",
          stance: "watch",
          purity: "low",
          cap: "mid",
          horizon: "near",
          region: "US",
          note: "Owns much of the atomic force microscope market and sells across life science and materials research. Be clear-eyed: APM is roughly zero percent of its revenue, so this is a research-tools cycle bet, not an APM bet, and the stock already showed in 2025 how hard instrument demand can fall."
        },
        {
          name: "Oxford Instruments",
          ticker: "LON:OXIG",
          exposure: "enabler",
          stance: "watch",
          purity: "low",
          cap: "small",
          horizon: "near",
          region: "UK",
          note: "Sells the ultra-high-vacuum, cryogenic, and nanoanalysis equipment that atom-by-atom experiments physically require. Same caveat as Bruker: its customers span quantum and semiconductors, so APM progress would barely move its order book for decades."
        }
      ]
    },
    {
      segment: "Positional assembly and DNA nanotech (closest to the science)",
      chainNode: "DNA origami design software and synthesis automation",
      companies: [
        {
          name: "Zyvex Labs",
          ticker: "private",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "private",
          horizon: "long",
          region: "US",
          note: "The nearest thing to an APM pure-play: a small Richardson, Texas lab pursuing digital atomically precise fabrication with DARPA and DOE support. It is not raising public capital and may never be, which is itself the honest signal about where this field stands."
        },
        {
          name: "Twist Bioscience",
          ticker: "NASDAQ:TWST",
          exposure: "adjacent",
          stance: "watch",
          purity: "low",
          cap: "small",
          horizon: "mid",
          region: "US",
          note: "Manufactures the synthetic DNA that the DNA-origami branch of bottom-up assembly consumes. Its actual business is genomics and biopharma tools, it has a long history of losses, and DNA nanotech demand is a marginal kicker at best."
        }
      ]
    }
  ],

  lastReviewed: "2026-06"
};

/* ---------------------------------------------------------------------------
   AUTONOMOUS TRANSPORT
   --------------------------------------------------------------------------- */
window.FUTURIST_INVEST["autonomous-transport"] = {
  thesis: "Unlike most pages in this atlas, autonomy already earns revenue: Waymo reached roughly 500,000 paid driverless rides a week across about ten US cities by 2026, Baidu's Apollo Go has done over 11 million rides, Tesla runs unsupervised robotaxis across Austin, and driverless trucks run a dozen commercial Sun Belt routes. The 30-year shift moves value from drivers and car ownership toward networks, compute, and sensors, across a personal-mobility market measured in trillions. The risk is not whether the technology works but how slowly the city-by-city, country-by-country grind compounds, and who gets commoditized along the way.",

  howToThink: "Separate the operators from the arms dealers, because they win differently. Operators own the rider and the fleet: Alphabet's Waymo leads the West but is a sliver of a mega-cap, Tesla is a contested bet that cameras alone reach driverless, Uber owns demand and partners with everyone, and China's listed pure-plays (Pony.ai, WeRide) give direct but volatile robotaxi exposure most US names do not. Arms dealers get paid by every fleet: NVIDIA sells the training and in-car compute, Mobileye sells the mass-market autonomy stack, Hesai ships more lidar than anyone. Then learn the Luminar lesson: the sector winning did not save a commoditized component maker, and Luminar went from lidar darling to Chapter 11 in December 2025 with equity wiped out, while its Chinese rival shipped record volume. The bear case for the whole map: permits arrive city by city with no federal standard, one bad accident can freeze a market the way the 2023 Cruise incident did, remote-operations costs are real, and US-China tech controls are splitting the industry into two non-overlapping markets.",

  conviction: {
    rating: "High",
    ourProbability: 0.88,
    street: "Consensus now accepts that robotaxis work, prices most of the autonomy premium into Tesla, and assigns Waymo and the China operators surprisingly little value inside their parents.",
    edge: "We think the rollout takes longer than bulls expect but goes further, and that the mispriced exposure is the compute and sensor arms dealers plus Waymo buried inside Alphabet, rather than any single robotaxi brand.",
    horizon: "Revenue is real now; the inflection is the early 2030s as city permits connect into networks, with more than 20 percent of miles driven autonomously plausible in major economies by the 2050s."
  },

  sCurve: {
    stage: "inflection",
    points: [
      { year: 2026, value: 4, unit: "$B", note: "paid robotaxi rides (Waymo ~500k/week, Baidu Apollo Go, Tesla Austin) plus driverless freight on a dozen Aurora routes; author estimate from operator disclosures" },
      { year: 2035, value: 350, unit: "$B", basis: "McKinsey 2023 estimate that autonomous driving creates $300-400B in revenue by 2035" },
      { year: 2045, value: 1500, unit: "$B" },
      { year: 2056, value: 3500, unit: "$B", basis: "author estimate anchored to the Intel/Strategy Analytics Passenger Economy study (roughly $7T by 2050), cut in half for slower adoption and for value passed to consumers rather than captured by firms" }
    ]
  },

  marketMap: [
    {
      segment: "Western robotaxi networks",
      chainNode: "Regulatory approval and operational design domain (ODD) permitting",
      companies: [
        {
          name: "Alphabet (Waymo)",
          ticker: "NASDAQ:GOOGL",
          exposure: "core",
          stance: "long",
          purity: "low",
          cap: "mega",
          horizon: "near",
          region: "US",
          note: "Waymo is the safety and scale leader, running roughly 500,000 paid rides a week across about ten US cities by 2026 and targeting one million weekly rides plus a first international market (London). Bear: you cannot buy Waymo separately, it is capital-hungry and a rounding error in Alphabet's income statement, so the exposure is heavily diluted."
        },
        {
          name: "Tesla",
          ticker: "NASDAQ:TSLA",
          exposure: "core",
          stance: "watch",
          purity: "med",
          cap: "mega",
          horizon: "mid",
          region: "US",
          note: "The contested bet: a camera-only, mass-fleet approach that launched a supervised robotaxi in Austin in mid-2025, removed safety monitors for unsupervised rides in Jan 2026, and now covers the full Austin metro (still backed by remote operators). If vision-only driverless validates at scale, the existing fleet makes it the biggest single winner; if it does not, a large autonomy premium in the stock unwinds, which is why this is a watch, not a conviction long."
        },
        {
          name: "Uber",
          ticker: "NYSE:UBER",
          exposure: "core",
          stance: "long",
          purity: "med",
          cap: "large",
          horizon: "near",
          region: "US",
          note: "Owns demand aggregation and has stitched AV partnerships with Waymo, WeRide, Pony.ai, and others rather than building its own stack. Bear: the existential question is disintermediation, since Waymo already runs its own app in some cities, and Uber's margin depends on operators not going direct."
        }
      ]
    },
    {
      segment: "China robotaxi",
      chainNode: "Teleoperations and remote assistance infrastructure",
      companies: [
        {
          name: "Baidu",
          ticker: "NASDAQ:BIDU",
          exposure: "core",
          stance: "long",
          purity: "low",
          cap: "large",
          horizon: "near",
          region: "China",
          note: "Apollo Go is the largest robotaxi operation in China, past 11 million cumulative rides by 2025, riding the lowest-cost purpose-built vehicles in the industry. Bear: monetization per ride is thin, the core search business is under AI pressure, and US-listed China ADRs carry persistent delisting and policy risk."
        },
        {
          name: "Pony.ai",
          ticker: "NASDAQ:PONY",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "mid",
          horizon: "mid",
          region: "China",
          note: "One of the few listed robotaxi pure-plays anywhere, with driverless permits across China's four tier-one cities. Bear: heavy cash burn against state-backed competition, plus the geopolitical double exposure of a China operator listed in New York."
        },
        {
          name: "WeRide",
          ticker: "NASDAQ:WRD",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "small",
          horizon: "mid",
          region: "China",
          note: "Listed pure-play running robotaxis, robobuses, and street sweepers, with international deployments including Abu Dhabi alongside Uber. Bear: small, dilutive, and unprofitable, with the same ADR and tech-control risks as Pony, so position sizing is the whole game."
        }
      ]
    },
    {
      segment: "Autonomous freight",
      chainNode: "Vehicle platform (OEM-integrated or purpose-built)",
      companies: [
        {
          name: "Aurora Innovation",
          ticker: "NASDAQ:AUR",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "mid",
          horizon: "mid",
          region: "US",
          note: "Began commercial driverless trucking on Texas highway routes in 2025 and by 2026 runs about a dozen Sun Belt routes with validated night and adverse-weather driving, targeting 200+ trucks by year-end; it attacks the clearest economic case in autonomy since driver pay is roughly 40 percent of trucking cost per mile. Bear: it is still scaling from a small fleet while burning heavily, and the gap between working routes and a profitable network is measured in years and billions."
        },
        {
          name: "Daimler Truck (Torc Robotics)",
          ticker: "ETR:DTG",
          exposure: "adjacent",
          stance: "watch",
          purity: "low",
          cap: "large",
          horizon: "long",
          region: "Germany",
          note: "The incumbent-optionality play in freight: the world's largest truck maker owns Torc Robotics and supplies redundant-control platforms to AV programs. Bear: autonomy is a small program inside a cyclical truck manufacturer, and incumbents have a record of moving slower than the technology."
        }
      ]
    },
    {
      segment: "Autonomy compute and software stacks",
      chainNode: "AV compute system-on-chip (SoC)",
      companies: [
        {
          name: "NVIDIA",
          ticker: "NASDAQ:NVDA",
          exposure: "enabler",
          stance: "long",
          purity: "low",
          cap: "mega",
          horizon: "near",
          region: "US",
          note: "Sells the DRIVE in-car computers and the training clusters behind most non-Tesla, non-Waymo stacks, getting paid on both ends of every fleet. Bear: automotive was under $2B of revenue in fiscal 2025 against a datacenter business fifty times larger, so the AV exposure is real but heavily diluted."
        },
        {
          name: "Mobileye",
          ticker: "NASDAQ:MBLY",
          exposure: "core",
          stance: "watch",
          purity: "high",
          cap: "mid",
          horizon: "mid",
          region: "US/Israel",
          note: "The mass-market autonomy stack: well over 100 million EyeQ chips shipped, with a ladder from driver assistance to eyes-off systems sold to mainstream automakers. Bear: Chinese OEMs are taking autonomy in-house, pricing pressure is constant, and majority-holder Intel has been selling down, which caps the multiple."
        }
      ]
    },
    {
      segment: "Lidar and sensing",
      chainNode: "Lidar sensors",
      companies: [
        {
          name: "Hesai Group",
          ticker: "NASDAQ:HSAI",
          exposure: "enabler",
          stance: "long",
          purity: "high",
          cap: "mid",
          horizon: "near",
          region: "China",
          note: "The lidar volume and cost leader, supplying Chinese OEMs and robotaxi fleets including Baidu, and the survivor of the price war that bankrupted Western rivals. Bear: it sits squarely in US-China crossfire, with defense-list disputes still unresolved, and lidar pricing keeps falling even for the winner."
        },
        {
          name: "Ouster",
          ticker: "NASDAQ:OUST",
          exposure: "enabler",
          stance: "watch",
          purity: "high",
          cap: "small",
          horizon: "mid",
          region: "US",
          note: "The consolidated US digital-lidar survivor after absorbing Velodyne in 2023, selling into industrial, smart-infrastructure, and vehicle markets. Bear: subscale against Hesai's cost curve, and the Luminar bankruptcy showed how unforgiving this niche is for small hardware makers."
        }
      ]
    }
  ],

  atRisk: [
    {
      name: "General Motors",
      ticker: "NYSE:GM",
      note: "Spent roughly $10B on Cruise and then shut the robotaxi effort in December 2024, retreating to driver assistance. The structural risk for legacy OEMs is becoming contract hardware suppliers to networks that own the rider, the data, and the margin."
    },
    {
      name: "Ford",
      ticker: "NYSE:F",
      note: "Wrote off Argo AI in 2022 and now buys rather than builds autonomy. Same structural squeeze as GM: fewer cars sold if robotaxi fleets raise utilization, and the profitable parts and financing tails shrink with private ownership."
    },
    {
      name: "Progressive",
      ticker: "NYSE:PGR",
      note: "Personal auto insurance, the core book, shrinks structurally as liability migrates from millions of drivers to a handful of fleet operators and product-liability policies. The offset is decades of transition and insurers' record of repricing into new risk pools, so this is a slow-burn short thesis at most."
    }
  ],

  lastReviewed: "2026-06"
};
