/* =============================================================================
   THE FUTURIST — SUPPLY CHAIN DEEP-DIVES
   Domain: planet-space (and adjacent climate / food)
   Technologies: space-industrialization, climate-intervention, cultivated-food
   Plain JS. No imports/exports. Must pass `node --check`.
   ============================================================================= */

window.FUTURIST_DATA = window.FUTURIST_DATA || [];
window.FUTURIST_CHAINS = window.FUTURIST_CHAINS || {};

/* =============================================================================
   SPACE INDUSTRIALIZATION
   ============================================================================= */
window.FUTURIST_CHAINS["space-industrialization"] = {
  overview:
    "The chain runs from propellants and aerospace alloys up through rocket engines and rad-hard avionics, then to vehicle integration, then to launch cadence and on-orbit operations. SpaceX dominates the manufacturing and launch tiers; almost everything downstream is gated by how often heavy-lift vehicles fly. The deepest weak point is not metal or fuel but a thin base of radiation-hardened electronics, which depends on a handful of specialty foundries. In-space industry (ISRU, propellant depots) is still pre-commercial and exists mostly as demonstrations.",
  tiers: [
    {
      name: "Raw materials & feedstocks",
      links: [
        {
          item: "Liquid oxygen and methane (LOX/LCH4)",
          role: "propellant for modern reusable engines",
          players: "Air Liquide, Linde, Air Products; SpaceX builds its own liquefaction",
          geography: "Produced locally near launch sites; globally available industrial gases",
          concentration: "diversified",
          chokepoint: false,
          risk: "Logistics and on-site liquefaction capacity bottleneck high-cadence launch, not the raw commodity. Methane and LOX themselves are cheap and abundant.",
          fix: "Operators co-locate liquefaction and storage at the pad; SpaceX is building methane/LOX capacity at Starbase."
        },
        {
          item: "Aluminum-lithium alloys and carbon-fiber composites",
          role: "tank, airframe, and fairing structures",
          players: "Constellium, Arconic (Al-Li); Toray, Hexcel, Teijin (carbon fiber)",
          geography: "Carbon-fiber precursor (PAN) concentrated in Japan and US; Toray is dominant",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Aerospace-grade carbon fiber is supply-limited and Toray-heavy; precursor capacity is slow to expand. SpaceX's pivot to stainless steel for Starship sidestepped composite dependence.",
          fix: "Starship uses 300-series stainless steel, removing the composite chokepoint for that vehicle line."
        },
        {
          item: "Refined RP-1 kerosene",
          role: "propellant for legacy and some new boosters",
          players: "Refiners producing rocket-grade kerosene to MIL-spec",
          geography: "US and Russian refining historically; specialty product, few qualified suppliers",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Rocket-grade kerosene needs tight sulfur and aromatic limits; few refineries qualify a batch. The industry is shifting toward methane, reducing reliance over time."
        }
      ]
    },
    {
      name: "Components & subsystems",
      links: [
        {
          item: "Radiation-hardened processors and FPGAs",
          role: "avionics that survive space radiation",
          players: "BAE Systems (RAD750/RAD5500), Microchip, Frontgrade (ex-Cobham), Xilinx/AMD rad-tolerant",
          geography: "Almost entirely US, ITAR-controlled; very limited rad-hard foundry capacity",
          concentration: "single-source",
          chokepoint: true,
          risk: "Rad-hard parts run years behind commercial silicon, cost orders of magnitude more, and come from a tiny qualified base. A single foundry or fab line stoppage ripples across every spacecraft program.",
          fix: "Rad-tolerant COTS with shielding and triple-redundancy (used by SpaceX/Starlink) reduces dependence for LEO; deep-space and crewed missions still need true rad-hard."
        },
        {
          item: "Staged-combustion rocket engines",
          role: "high-performance reusable propulsion",
          players: "SpaceX (Raptor, Merlin), Blue Origin (BE-4), Rocket Lab (Rutherford), Aerojet Rocketdyne",
          geography: "US-concentrated; Russia historically led oxygen-rich staged combustion (RD-180)",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Full-flow and oxygen-rich staged combustion is metallurgically brutal; few teams have mastered it. US loss of the Russian RD-180 forced a domestic engine scramble that delayed ULA's Vulcan.",
          fix: "Blue Origin's BE-4 now flies on Vulcan and New Glenn; SpaceX mass-produces Raptor in-house."
        },
        {
          item: "Space-grade solar cells and arrays",
          role: "spacecraft and satellite power",
          players: "Rocket Lab (SolAero), Spectrolab (Boeing), Azur Space",
          geography: "Multi-junction cell production concentrated in US and Germany",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Triple-junction space cells come from a few suppliers; a fab issue constrains constellation build rates. Volume from megaconstellations is straining capacity.",
          fix: "Vertical integration (Rocket Lab acquired SolAero) and new lines are expanding output."
        },
        {
          item: "Satellite buses and propulsion thrusters",
          role: "platform structure, power, and station-keeping",
          players: "Airbus, Thales Alenia, Lockheed, Astranis; electric thrusters from Busek, Apollo Fusion (Astra)",
          geography: "US and Europe; some krypton/xenon propellant sourced from Russia/Ukraine historically",
          concentration: "diversified",
          chokepoint: false,
          risk: "Hall-thruster noble-gas propellant (xenon, krypton) saw price spikes and supply risk tied to Russia/Ukraine. Bus production has broadened with new commercial entrants."
        }
      ]
    },
    {
      name: "Manufacturing & integration",
      links: [
        {
          item: "Reusable launch vehicle production",
          role: "build and refly boosters at rate",
          players: "SpaceX (Falcon 9, Starship), Blue Origin (New Glenn), Rocket Lab (Neutron, in development)",
          geography: "US-dominant; SpaceX is the single largest builder by far",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Reusability concentrates capability in very few firms; SpaceX alone flew 165 of the West's orbital launches in 2025, so a SpaceX stand-down removes most Western launch capacity at once.",
          fix: "Blue Origin's New Glenn and Rocket Lab's Neutron aim to add reusable heavy/medium-lift redundancy; both are still ramping toward routine cadence."
        },
        {
          item: "Vehicle integration and qualification",
          role: "assemble, test, and certify flight hardware",
          players: "SpaceX, ULA, Arianespace, Rocket Lab; range and FAA/AST oversight in US",
          geography: "Concentrated at a few integration sites and federal ranges",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Integration throughput and launch licensing (FAA-AST) gate cadence as much as hardware. Regulatory and range scheduling delays compound on every program."
        }
      ]
    },
    {
      name: "Deployment & operations",
      links: [
        {
          item: "Heavy-lift launch cadence",
          role: "the rate at which mass reaches orbit",
          players: "SpaceX (Falcon/Starship), Blue Origin, ULA, Arianespace, CASC (China)",
          geography: "US and China hold most flight rate; SpaceX is the global leader by launches",
          concentration: "concentrated",
          chokepoint: true,
          risk: "Everything downstream (constellations, depots, stations, ISRU) is rationed by how many tons fly per year and at what price. SpaceX flew a record 165 Falcon 9 launches in 2025 (up from 134 in 2024), but cadence still depends on a small set of vehicles and pads, so any stand-down throttles the entire industry.",
          fix: "Starship targets order-of-magnitude lower cost-per-ton and high reflight; with three booster catches achieved and the Block 3 / V3 vehicle now flying, success would relax the binding constraint, but it is not yet operational at scale."
        },
        {
          item: "Ground stations and tracking",
          role: "command, telemetry, and downlink",
          players: "AWS Ground Station, KSAT, Viasat (RTE), SpaceX (Starlink gateways)",
          geography: "Global antenna networks; high-latitude sites (Svalbard/KSAT) are scarce and valuable",
          concentration: "diversified",
          chokepoint: false,
          risk: "Polar and high-latitude downlink sites are geographically scarce and concentrated in a few operators. Spectrum coordination adds a regulatory constraint."
        },
        {
          item: "In-space servicing, ISRU, and propellant depots",
          role: "manufacture, refuel, and de-orbit on orbit",
          players: "Varda (in-space manufacturing/reentry), Astroscale (debris removal), Orbit Fab (refueling), NASA/SpaceX (Starship depot)",
          geography: "US and Japan-led; all pre-commercial demonstrations",
          concentration: "concentrated",
          chokepoint: false,
          risk: "These capabilities are demos, not supply chains. No proven economics, no standard refueling interface, and no large-scale ISRU exists today. Estimate: a decade-plus from routine operations."
        }
      ]
    }
  ],
  topChokepoints: [
    {
      item: "Heavy-lift launch cadence",
      why: "Mass-to-orbit per year is the master valve for the whole sector. It sits in very few hands and any vehicle stand-down throttles constellations, stations, and in-space industry at once."
    },
    {
      item: "Radiation-hardened electronics",
      why: "A tiny base of ITAR-controlled rad-hard foundries supplies processors for spacecraft. Lead times are long, parts lag commercial silicon by years, and there is little redundancy."
    },
    {
      item: "Staged-combustion engine know-how",
      why: "High-performance reusable engines come from a handful of teams. The US RD-180 cutoff showed how one engine dependency can delay multiple national launch programs."
    }
  ],
  geopolitics:
    "The Western launch chain is overwhelmingly US-centric, with SpaceX as a single dominant node, while China runs a parallel state-led ecosystem (CASC, plus commercial entrants) that the US cannot access. ITAR and export controls wall off rad-hard electronics and engine technology, which protects US advantage but also concentrates risk in a few domestic suppliers. The retirement of Russia's RD-180 and disruption to Russian/Ukrainian noble-gas and titanium supply showed how conflict reaches into the component tier. Carbon-fiber precursor leans on Japan (Toray), and high-latitude ground stations cluster in a few Nordic operators. Reshoring is underway in engines (BE-4 replacing RD-180) and increasingly in propellants and solar cells via vertical integration."
};

/* =============================================================================
   CLIMATE INTERVENTION
   (Carbon removal / DAC, solar radiation management, enhanced weathering)
   ============================================================================= */
window.FUTURIST_CHAINS["climate-intervention"] = {
  overview:
    "This is really several chains. Direct air capture (DAC) runs from sorbents and amines through contactor hardware to clean heat/power, then CO2 compression, pipeline transport, geologic injection, and measurement (MRV); its binding constraints are proprietary sorbents, cheap clean heat, and permitted geologic storage. Enhanced weathering depends on crushing and spreading basalt at logistics scale. Solar radiation management (SRM) is different: it is cheap and materially easy, so its real constraint is governance, not supply. Treat SRM as governance-bound, not materials-bound.",
  tiers: [
    {
      name: "Raw materials & feedstocks",
      links: [
        {
          item: "DAC sorbents and amines",
          role: "the chemistry that binds CO2 from air",
          players: "Climeworks (proprietary filters), Heirloom (limestone/calcium looping), Carbon Engineering/1PointFive (KOH liquid solvent)",
          geography: "Proprietary, developer-specific; precursor amines from global chemical majors (BASF, Evonik)",
          concentration: "concentrated",
          chokepoint: true,
          risk: "Sorbent formulations are proprietary, can degrade over cycles, and drive both cost and capture efficiency. Degradation and replacement rate are poorly disclosed, so durability at scale is contested.",
          fix: "Heirloom's mineral (limestone) loop and solid-sorbent vendors aim for cheaper, more durable media; data is still early."
        },
        {
          item: "Basalt and silicate rock (enhanced weathering)",
          role: "feedstock that absorbs CO2 as it weathers",
          players: "Lithos Carbon, UNDO, Eion (spreading crushed silicate on farmland)",
          geography: "Quarried regionally; abundant rock, constraint is crushing energy and haul distance",
          concentration: "diversified",
          chokepoint: false,
          risk: "The rock is abundant but crushing is energy-intensive and trucking is the real cost. MRV (proving how much carbon was actually removed) is the harder problem than supply."
        },
        {
          item: "Aerosol precursors for SRM (sulfur, calcium carbonate)",
          role: "stratospheric reflectants to cool the planet",
          players: "No commercial supply chain exists; precursors are cheap industrial commodities",
          geography: "Globally abundant; not a supply constraint",
          concentration: "diversified",
          chokepoint: false,
          risk: "The materials are trivially cheap and available. The chain is governance-bound, not materials-bound: there is no international authority to license deployment and the geopolitical and termination-shock risks dominate any input question."
        }
      ]
    },
    {
      name: "Components & subsystems",
      links: [
        {
          item: "DAC contactors and fans",
          role: "move large air volumes across the sorbent",
          players: "Climeworks, Heirloom, 1PointFive (Worley/engineering partners); industrial fan and HVAC vendors",
          geography: "Engineered per project; broad industrial supplier base",
          concentration: "diversified",
          chokepoint: false,
          risk: "Moving enough air is an energy and capital cost problem more than a sourcing one. Capture cost per ton stays high (estimates broadly $300-1000/ton today) largely because of this energy load."
        },
        {
          item: "Low-carbon heat and electricity",
          role: "regeneration heat that releases captured CO2",
          players: "Geothermal (Climeworks at Hellisheidi, Iceland), nuclear, renewables-plus-storage",
          geography: "Project sites chase cheap clean heat: Iceland geothermal, US Gulf Coast, Middle East",
          concentration: "concentrated",
          chokepoint: true,
          risk: "DAC is only carbon-negative if the heat and power are clean and cheap. Dirty energy can make capture net-positive. Abundant low-cost clean heat is geographically scarce, which dictates where plants can be built at all.",
          fix: "Co-location with geothermal (Iceland) or dedicated solar/nuclear; this is a siting strategy, not a solved input."
        },
        {
          item: "CO2 compression and transport pipelines",
          role: "deliver captured CO2 to storage",
          players: "ExxonMobil, Denbury (Exxon), Tallgrass, EU CCS pipeline projects",
          geography: "US Gulf Coast and EU North Sea corridors; permitting-heavy",
          concentration: "concentrated",
          chokepoint: false,
          risk: "CO2 pipeline permitting faces local opposition and right-of-way fights (e.g. Midwest projects stalled). Transport capacity, not compression tech, gates throughput."
        }
      ]
    },
    {
      name: "Manufacturing & integration",
      links: [
        {
          item: "DAC plant fabrication and modular build",
          role: "assemble capture modules at scale",
          players: "Climeworks (Orca, Mammoth in Iceland), 1PointFive/Occidental (STRATOS, Texas), Heirloom",
          geography: "US (Texas/Louisiana) and Iceland lead; few operating megaton-class plants",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Only a handful of plants operate above pilot scale, and real output has badly lagged nameplate: Climeworks' Mammoth captured roughly 105 tonnes in 2024 against a 36,000-tonne design and the firm cut staff in 2025. Megaton-class economics are unproven; capture-rate claims are developer-reported and contested by outside analysts.",
          fix: "1PointFive's Stratos (Texas), backed by BlackRock and targeting 500,000 t/yr, is the next real-world test of whether DAC can hit nameplate at scale; its 2025 startup slipped on a component issue."
        },
        {
          item: "Injection well drilling and geologic characterization",
          role: "build and qualify CO2 storage sites",
          players: "Oil-and-gas service firms (SLB, Halliburton, Baker Hughes); developers like 1PointFive",
          geography: "Suitable saline aquifers and depleted reservoirs in US, North Sea, Gulf states",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Storage capacity is geographically specific and requires deep subsurface characterization. Drilling and monitoring borrow scarce oilfield-services capacity and expertise."
        }
      ]
    },
    {
      name: "Deployment & operations",
      links: [
        {
          item: "Geologic storage and Class VI injection permits",
          role: "permanently inject and store CO2 underground",
          players: "EPA Class VI program (US), 1PointFive, Carbfix (Iceland mineralization)",
          geography: "US permitting is slow and centralized; a few states have primacy; Iceland mineralizes in basalt",
          concentration: "concentrated",
          chokepoint: true,
          risk: "Permitting throughput is the binding bottleneck. EPA Class VI permits have historically taken years, creating a backlog that strands capture capacity with nowhere to put the CO2; the first DAC-specific Class VI storage permits were not issued (to Stratos) until April 2025.",
          fix: "State primacy delegation, the first DAC Class VI permits in 2025, Norway's Northern Lights coming online in 2025, and Carbfix-style rapid basalt mineralization aim to shorten timelines; still early and region-specific."
        },
        {
          item: "Measurement, reporting, verification (MRV)",
          role: "prove tons were actually removed and stored",
          players: "Isometric, Puro.earth, Sylvera (ratings); CarbonPlan (analysis)",
          geography: "Standards still forming; registries US/EU-based",
          concentration: "diversified",
          chokepoint: false,
          risk: "Weak or inconsistent MRV undermines credit integrity, especially for enhanced weathering and nature-based removal. Buyers discount unverifiable tons, which throttles demand."
        },
        {
          item: "SRM governance and decision authority",
          role: "who, if anyone, may deploy stratospheric cooling",
          players: "No legitimate authority exists; debated at UNEP, academic bodies, national governments",
          geography: "Global externality; a single actor could deploy unilaterally",
          concentration: "single-source",
          chokepoint: false,
          risk: "The constraint is institutional, not industrial. With no agreed governance, the risks are unilateral deployment, cross-border conflict, and termination shock if deployment stops abruptly. This is explicitly governance-bound, not supply-bound."
        }
      ]
    }
  ],
  topChokepoints: [
    {
      item: "Geologic storage and Class VI permitting",
      why: "Captured CO2 needs a permitted hole to go into. Permitting runs years behind capture build-out, so storage approval, not capture hardware, is the binding constraint on net removal."
    },
    {
      item: "DAC sorbents and their durability",
      why: "Proprietary sorbents and amines set capture cost and degrade over cycles. Replacement economics are poorly disclosed, making cost-per-ton at scale the most contested number in the field."
    },
    {
      item: "Cheap, clean heat and electricity for DAC",
      why: "DAC only removes net carbon if regeneration heat is clean and cheap, and that resource is geographically scarce. It dictates where plants can exist and keeps cost-per-ton high."
    }
  ],
  geopolitics:
    "Carbon removal concentrates where cheap clean heat, storable geology, and policy money coincide: the US Gulf Coast (driven by the 45Q tax credit), Iceland (geothermal plus basalt mineralization), and the EU North Sea. US incumbency runs through oil-and-gas majors (Occidental/1PointFive, Exxon) that own the subsurface and pipeline expertise, which makes climate removal politically entangled with fossil interests. Permitting, not geology, is the scarce resource, and it is nationally controlled. SRM is the sharpest geopolitical risk because it is cheap enough for a single state to deploy unilaterally, creating cross-border conflict and termination-shock exposure with no governing body. Enhanced weathering is the most distributable and least geopolitically loaded, limited mainly by logistics and MRV credibility."
};

/* =============================================================================
   CULTIVATED FOOD
   (Cell-cultivated meat and precision fermentation)
   ============================================================================= */
window.FUTURIST_CHAINS["cultivated-food"] = {
  overview:
    "The chain runs from cell lines and growth media through bioreactors and scaffolds to cultivation, downstream processing, and regulatory approval. The dominant historical cost driver has been growth media, specifically recombinant growth factors like FGF and insulin, which companies are racing to make cheaper. The second hard constraint is food-grade bioreactor capacity, where cultivated-meat firms compete with pharma for the same equipment from Sartorius and Cytiva. Regulatory throughput (FDA/USDA in the US, SFA in Singapore) is a real gate but is opening.",
  tiers: [
    {
      name: "Raw materials & feedstocks",
      links: [
        {
          item: "Cell lines and starter cultures",
          role: "the founding cells that proliferate",
          players: "Upside Foods, GOOD Meat/Eat Just, Mosa Meat, Believer; ATCC for reference lines",
          geography: "Developer-proprietary; US, Netherlands, Israel, Singapore",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Lines must proliferate fast, survive at scale, and differentiate into muscle and fat. Each firm guards its own; immortalized food-grade lines are scarce and a competitive moat, not an open commodity."
        },
        {
          item: "Recombinant growth factors (FGF, insulin, transferrin)",
          role: "signal proteins that drive cell growth",
          players: "Pharma-grade suppliers (Merck/Sigma, Thermo Fisher); food-grade producers like Liberum, Multus",
          geography: "Historically pharma supply chains, US and EU; new food-grade entrants emerging",
          concentration: "concentrated",
          chokepoint: true,
          risk: "Growth factors have historically been the single largest media cost, by some estimates the majority of cultivation cost. Pharma-grade pricing makes meat-scale economics impossible without large reductions.",
          fix: "Firms like Liberum and Multus, plus precision fermentation of the factors themselves, aim to cut growth-factor cost by orders of magnitude; progress is real but not yet at commodity prices."
        },
        {
          item: "Amino acids, glucose, and basal media salts",
          role: "bulk nutrients feeding the cells",
          players: "ADM, Cargill, Ajinomoto (amino acids, glucose)",
          geography: "Global commodity agriculture and fermentation; broad supplier base",
          concentration: "diversified",
          chokepoint: false,
          risk: "These bulk inputs are cheap and abundant. The cost problem sits in the specialty proteins, not the basal nutrients."
        }
      ]
    },
    {
      name: "Components & subsystems",
      links: [
        {
          item: "Food-grade bioreactors",
          role: "vessels where cells grow at volume",
          players: "Sartorius, Cytiva (Danaher), ABEC, Eppendorf",
          geography: "Equipment makers in Germany, US, Sweden; concentrated vendor base",
          concentration: "concentrated",
          chokepoint: true,
          risk: "Cultivated meat needs very large bioreactors but must compete with biopharma for the same vendors and capacity. Few large food-grade vessels exist, and scaling animal cells in big stirred tanks raises unsolved shear and oxygen-transfer problems.",
          fix: "Custom large-format and alternative reactor designs are in development; precision-fermentation products scale more readily in existing tanks than structured meat does."
        },
        {
          item: "Single-use bags and consumables",
          role: "sterile liners and tubing for bioprocessing",
          players: "Sartorius, Cytiva, Thermo Fisher, Pall (Danaher)",
          geography: "Same concentrated bioprocess vendors; supply was strained during COVID vaccine ramp",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Single-use consumables share suppliers and capacity with the pharma industry. Demand spikes (as in the vaccine era) showed how quickly these run short."
        },
        {
          item: "Scaffolds for structured meat",
          role: "give cells 3D shape and texture",
          players: "Mosa Meat, Aleph Farms; edible scaffold and texturizing developers",
          geography: "Research-stage; developer-specific",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Whole-cut, structured products need edible scaffolds that survive cultivation and cooking. This is largely unsolved at scale, which is why early products are mostly minced or blended formats."
        }
      ]
    },
    {
      name: "Manufacturing & integration",
      links: [
        {
          item: "Cultivation facilities and bioprocess scale-up",
          role: "run reactors and integrate the process",
          players: "Upside Foods (EPIC, California), GOOD Meat, Believer, Mosa Meat pilot plants",
          geography: "US, Singapore, Netherlands, Israel; very few commercial-scale plants",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Almost no true commercial-scale plants exist; most output is pilot volume. Capex per facility is high and unit economics at scale remain unproven and contested by independent analysts."
        },
        {
          item: "Downstream processing and formulation",
          role: "harvest, separate, and form the final product",
          players: "Cultivated-meat developers; precision-fermentation firms (Perfect Day, Solar Foods)",
          geography: "Co-located with cultivation sites",
          concentration: "diversified",
          chokepoint: false,
          risk: "Harvesting, separating cells from media, and formulating into food adds cost and yield loss. Precision fermentation (making proteins like dairy or single-cell protein) is further along this curve than whole-cell meat."
        }
      ]
    },
    {
      name: "Deployment & operations",
      links: [
        {
          item: "Regulatory approval throughput",
          role: "clear products for legal sale",
          players: "Singapore SFA (first approval, 2020), US FDA + USDA-FSIS, EU EFSA (slow)",
          geography: "Singapore led; US approved Upside and GOOD Meat in 2023; EU and others lag",
          concentration: "concentrated",
          chokepoint: true,
          risk: "Approval is country-by-country and slow, and by mid-2025 seven US states (Florida, Alabama, Mississippi, Montana, Nebraska, Indiana, Texas) had banned sales, drawing constitutional lawsuits from Upside Foods and Wildtype. Regulatory pace and political backlash, not just biology, gate market access.",
          fix: "Singapore SFA and US FDA/USDA frameworks now exist and have cleared products, creating a path; EU approval remains the slow bottleneck."
        },
        {
          item: "Market distribution and price parity",
          role: "get product to consumers at viable cost",
          players: "Upside Foods, GOOD Meat (limited restaurant launches); Perfect Day (ingredient sales)",
          geography: "US and Singapore tastings/limited sales; no mass-market presence",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Volumes are tiny and prices are far above conventional meat. Reaching price parity depends on solving the upstream media and bioreactor constraints first. Estimate: mass-market parity is years away."
        }
      ]
    }
  ],
  topChokepoints: [
    {
      item: "Growth media and recombinant growth factors",
      why: "Growth factors like FGF have historically been the dominant cost in cultivation, in some estimates the majority of cost. Without order-of-magnitude reductions, cell-cultivated meat cannot reach price parity."
    },
    {
      item: "Food-grade bioreactor capacity",
      why: "Large food-grade reactors come from a few vendors (Sartorius, Cytiva) who also serve pharma. Capacity is scarce, and scaling animal cells in big tanks raises unsolved engineering problems."
    },
    {
      item: "Regulatory approval throughput",
      why: "Sale is gated country-by-country and approvals are slow, with active US state-level bans. Market access depends on regulators and politics as much as on the science."
    }
  ],
  geopolitics:
    "Cultivated food is led by a small set of jurisdictions: Singapore (first to approve, 2020, as part of food-security strategy), the US (FDA/USDA cleared Upside and GOOD Meat in 2023), Israel, and the Netherlands (Mosa Meat). The deepest dependency is on a concentrated bioprocess-equipment base (Sartorius in Germany, Cytiva/Danaher in the US and Sweden) shared with pharma, so any biopharma demand surge crowds out food. A political counter-current is real: Italy banned cultivated meat and by mid-2025 seven US states (Florida, Alabama, Mississippi, Montana, Nebraska, Indiana, Texas) had passed bans, with Upside Foods and Wildtype suing over the Florida and Texas laws, fragmenting the market along ideological lines. China has named cultivated protein in its agricultural plans, signaling a potential parallel push. Precision fermentation (Perfect Day, Solar Foods) is less equipment-bound and may scale and clear regulation faster than whole-cell cultivated meat."
};
