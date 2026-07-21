/* =============================================================================
   THE FUTURIST — Planet & Space domain
   Technologies: Space Industrialization, Climate Intervention, Cultivated Food
   Author: Deal Researcher (agent)
   Date: 2026-06-12
   ============================================================================= */

window.FUTURIST_DATA = window.FUTURIST_DATA || [];

window.FUTURIST_DATA.push(

  /* ── 1. SPACE INDUSTRIALIZATION ─────────────────────────────────────────── */
  {
    id: "space-industrialization",
    name: "Space Industrialization",
    shortName: "Space",
    tagline: "When getting to orbit costs as much as a flight to Tokyo, factories follow.",
    domain: "planet-space",
    glyph: "✦",
    status: "pilot",
    consequence: 8,

    probability: {
      value: 0.52,
      definition: "By 2056, at least one commercial facility in Earth orbit or on the Moon is producing goods (materials, fuels, or biologics) at industrial scale for terrestrial or in-space markets, and launch cost to LEO has fallen below $200/kg in 2026 dollars.",
      basis: "Author estimate synthesizing SpaceX Starship cost roadmap (targeting <$100/kg fully reusable), Varda Space Industries production milestones (four W-series missions flown by mid-2026), and Metaculus community forecasts on cost-to-orbit timelines (median ~2032 for <$500/kg). Probability reflects that Starship has not yet reached operational reuse and that in-space manufacturing remains unproven beyond capsule scale.",
      range: [0.30, 0.72]
    },

    arrival: {
      optimistic: 2035,
      consensus: 2045,
      skeptical: 2060
    },

    whyItMatters: "Cheap access to orbit removes the cost ceiling that has confined space to government programs and communications satellites for sixty years. In-space manufacturing of fiber optics, pharmaceuticals, and structural alloys could produce goods impossible to make in gravity; lunar and asteroid resources could supply propellant and metals without mining Earth. The economic frontier shifts from the ocean floor to cislunar space.",

    feynman: [
      {
        level: 1,
        label: "The kitchen-table version",
        body: "Imagine you wanted to build a factory, but every single brick had to be flown in by helicopter at ten thousand dollars a trip. No factory makes sense at that price. That is exactly why space has been empty of industry: getting one kilogram into orbit used to cost $54,000 on the Space Shuttle. SpaceX changed the game. Their Falcon 9 rocket lands itself on a drone ship, gets refueled, and flies again, like an airplane. That dropped the price to about $2,700 per kilogram. Their new rocket, Starship, is the size of a twenty-story building and is designed to be fully reusable within hours, like a bus that turns around and picks up another load. The target price is under a few hundred dollars per kilogram. When a brick costs a dollar instead of ten thousand, you start building factories. Companies are already experimenting: Varda Space Industries sent a tiny capsule to orbit in 2023 to grow drug crystals that form better in weightlessness. If Starship delivers on its cost promise, the economics of space flip completely."
      },
      {
        level: 2,
        label: "The mechanism",
        body: "The core driver is reusability compounding with scale. A Falcon 9 first stage has flown over twenty times; refurbishment cost falls each cycle as engineers learn what actually wears out. Starship uses full-flow staged combustion engines (Raptor) burning methane and liquid oxygen, propellants manufacturable from water and CO2, including on Mars or the Moon. That matters because propellant is roughly 90 percent of a rocket's mass at launch. If you can refuel in orbit or on the Moon, you break the tyranny of the rocket equation. In-space manufacturing exploits three conditions: microgravity (no sedimentation, perfect crystal growth), ultra-high vacuum (better than any lab on Earth), and extreme temperature differentials (hundreds of degrees in sunlight, cryogenic in shadow). Varda's first mission demonstrated that ritonavir, an HIV drug, forms a different crystal polymorph in orbit that dissolves more predictably. ZBLAN fiber optic glass is another candidate: in gravity, crystallites nucleate and ruin the fiber; in microgravity you get 100x lower loss than silica. Space solar power is a longer bet: Caltech's SSPD-1 experiment, launched January 2023, demonstrated wireless power transmission from orbit for the first time."
      },
      {
        level: 3,
        label: "The hard part",
        body: "Three barriers dominate. First, the cost curve has not yet closed on Starship. By mid-2026, Starship had flown eleven integrated tests of its second-generation vehicle (IFT-11 in October 2025, with three successful Mechazilla booster catches) and begun flying the larger Block 3 / V3 design; full rapid reuse of both stages is still not operational. The Raptor engine reliability and heat shield tile replacement cost are the tracked numbers. Second, in-space manufacturing faces a chicken-and-egg problem: no product has yet demonstrated a market large enough to justify orbital factory CAPEX at scale. Varda has flown four W-series capsules but the economics require launch costs to fall another 5-10x from Falcon 9 pricing. Third, the asteroid mining thesis from the 2010s collapsed. Planetary Resources and Deep Space Industries both failed to raise sufficient capital; the regulatory framework for property rights in space under the Outer Space Treaty remains unresolved, deterring investment. Lunar ISRU (in-situ resource utilization) is more credible near-term: NASA's MOXIE experiment on Perseverance demonstrated CO2-to-oxygen conversion on Mars in 2021; Artemis program is targeting lunar ice extraction at the south pole, with Intuitive Machines and Astrobotic providing landers. The key metric is cost per kilogram to low Earth orbit, which needs to reach $200-500 in constant 2026 dollars to open most manufacturing economics."
      },
      {
        level: 4,
        label: "The frontier",
        body: "The field bifurcates between near-Earth economic plays and deep-space resource development. Near-Earth: Varda (four capsules flown by mid-2026, now building its own satellite bus), Space Forge (UK), and Axiom Space are targeting pharmaceutical biologics, ZBLAN, and alloy manufacturing in the 2026-2032 window, predicated on Starship achieving $500/kg or below. The unit economics require products worth at least $10,000/kg on Earth to survive current launch costs, narrowing the addressable market to specialty pharmaceuticals, fiber preforms, and potentially compute hardware (silicon wafers grown in microgravity). Space solar power at grid scale requires both dramatically lower launch costs and in-space assembly robotics; the Caltech SSPD-1 proof of concept is two orders of magnitude below commercial viability. In-space propellant depots (Orbit Fab, Momentus) could unlock a secondary market: if lunar water ice is electrolyze-able into LH2/LOX at competitive cost, the depot model creates a genuine cislunar economy. Lunar governance is the underappreciated bottleneck: the 2020 Artemis Accords establish bilateral norms for resource extraction, but no multilateral treaty covers property rights, creating legal risk for capital-intensive extraction projects. The variable to watch is Starship's demonstrated turnaround time in 2026-2027; if it achieves airline-like operations, the consensus probability shifts significantly upward."
      }
    ],

    timeline: {
      milestones: [
        {
          id: "si-m1",
          title: "Falcon 9 first-stage reuse demonstrated",
          kind: "breakthrough",
          years: { optimistic: 2015, consensus: 2015, skeptical: 2015 },
          detail: "SpaceX landed an orbital-class Falcon 9 booster for the first time in December 2015 and reflew one in March 2017. This proved reusability was operationally viable, not just theoretically possible. It cut launch prices by roughly half compared to expendable vehicles and set the economic template for everything that followed.",
          done: true
        },
        {
          id: "si-m2",
          title: "First commercial in-space manufacturing return mission",
          kind: "breakthrough",
          years: { optimistic: 2023, consensus: 2023, skeptical: 2023 },
          detail: "Varda Space Industries launched its W-1 capsule in June 2023, grew ritonavir crystals in microgravity, and returned the sample to Earth in February 2024. This is the first private in-space manufacturing mission to complete a full cycle. It established that there is a viable near-term market in pharmaceutical crystallization.",
          done: true
        },
        {
          id: "si-m3",
          title: "Starship achieves fully rapid reusability",
          kind: "scaleup",
          years: { optimistic: 2028, consensus: 2030, skeptical: 2034 },
          detail: "Starship completing a full orbital mission with rapid booster and ship reuse within 24 hours, unlocking the cost-per-kg economics that make industrial payloads viable. By mid-2026 the program had achieved three Mechazilla booster catches and moved to the Block 3 / V3 vehicle, but neither stage was being reflown operationally. This is the pivotal gate: most in-space manufacturing business cases are uneconomic above $1,000/kg.",
          done: false
        },
        {
          id: "si-m4",
          title: "First crewed Artemis lunar landing",
          kind: "deployment",
          years: { optimistic: 2028, consensus: 2030, skeptical: 2035 },
          detail: "NASA's Artemis program, using SpaceX Starship as the Human Landing System, targets the first crewed return to the lunar surface (Artemis III). Artemis II, a crewed lunar flyby, flew successfully April 1-10, 2026, the first crewed lunar mission in over 50 years; the landing depends on Starship HLS readiness and is the next gate. This drives ISRU investment for water ice extraction at the south pole.",
          done: false
        },
        {
          id: "si-m5",
          title: "Orbital propellant depot reaches commercial operation",
          kind: "deployment",
          years: { optimistic: 2029, consensus: 2033, skeptical: 2040 },
          detail: "A commercial depot storing and transferring cryogenic propellant in orbit, supplied by Earth launch or eventually lunar ISRU. Orbit Fab and Astroscale are pursuing early versions. This milestone breaks the single-launch architecture constraint and enables deep-space and high-orbit missions at dramatically lower cost.",
          done: false
        },
        {
          id: "si-m6",
          title: "Lunar water ice extraction at pilot scale",
          kind: "scaleup",
          years: { optimistic: 2032, consensus: 2038, skeptical: 2048 },
          detail: "A robotic system at the lunar south pole extracting water ice and electrolyzing it into hydrogen and oxygen propellant at a rate sufficient to supply an orbital depot. NASA MOXIE on Perseverance demonstrated the Mars analog in 2021. The lunar version requires sustained robotic operations in a permanently shadowed region.",
          done: false
        },
        {
          id: "si-m7",
          title: "First self-sustaining cislunar industrial economy",
          kind: "deployment",
          years: { optimistic: 2040, consensus: 2050, skeptical: 2065 },
          detail: "Multiple commercial facilities in cislunar space producing goods (pharmaceutical biologics, advanced materials, propellant) with revenue sufficient to fund ongoing operations without Earth subsidy. This is the arrival milestone: the point where space industry is an industry, not a subsidized experiment.",
          done: false
        }
      ],
      branches: [
        {
          id: "si-b1",
          name: "Near-Earth manufacturing hub",
          fromMilestone: "si-m3",
          probability: 0.50,
          summary: "Cost reduction makes orbital manufacturing of high-value goods (pharmaceuticals, fiber, advanced alloys) economically self-sustaining in LEO before lunar resources are viable. Varda, Space Forge, and Axiom anchor this path; the market is Earth-supply of premium materials.",
          milestones: [
            {
              id: "si-b1m1",
              title: "ZBLAN fiber preform production reaches commercial scale",
              kind: "scaleup",
              years: { optimistic: 2030, consensus: 2035, skeptical: 2044 },
              detail: "ZBLAN fluoride fiber has 100x lower optical loss than silica but can only be drawn without crystallization defects in microgravity. Commercial-scale production would capture a significant slice of the $5B specialty fiber market.",
              done: false
            },
            {
              id: "si-b1m2",
              title: "First orbital pharmaceutical facility receives FDA approval pathway",
              kind: "policy",
              years: { optimistic: 2032, consensus: 2038, skeptical: 2050 },
              detail: "A regulatory framework for GMP-compliant orbital manufacturing, allowing drugs produced in space to enter human clinical supply chains. Currently no such pathway exists; FDA oversight jurisdiction in orbit is unresolved.",
              done: false
            }
          ]
        },
        {
          id: "si-b2",
          name: "Cislunar resource economy",
          fromMilestone: "si-m6",
          probability: 0.30,
          summary: "Lunar water ice becomes the economic foundation: propellant depots supplied by lunar ISRU reduce the cost of deep-space and GEO missions enough to make cislunar space self-funding. This path requires solving robotic mining at scale and resolving property rights under the Outer Space Treaty.",
          milestones: [
            {
              id: "si-b2m1",
              title: "Lunar propellant sold commercially at below Earth-launch parity",
              kind: "scaleup",
              years: { optimistic: 2038, consensus: 2046, skeptical: 2060 },
              detail: "Propellant produced from lunar ice and sold to commercial operators at a delivered price below the cost of launching the same propellant from Earth. This is the economic tipping point for the cislunar resource thesis.",
              done: false
            }
          ]
        },
        {
          id: "si-b3",
          name: "Space solar power",
          fromMilestone: "si-m3",
          probability: 0.15,
          summary: "Sufficiently cheap launch enables orbital solar power satellites that beam microwave energy to Earth receivers. Caltech's 2023 SSPD-1 was the first in-orbit wireless power transmission demo; ESA and JAXA have active programs. Requires massive in-space assembly and faces political resistance over beam safety.",
          milestones: [
            {
              id: "si-b3m1",
              title: "Megawatt-scale space solar demonstration",
              kind: "pilot",
              years: { optimistic: 2036, consensus: 2044, skeptical: 2058 },
              detail: "A demonstration satellite transmitting at least 1 MW to a ground receiver continuously, proving the wireless power link at grid-relevant scale. JAXA's roadmap targets this around 2040; ESA's SOLARIS program is in early design phase.",
              done: false
            }
          ]
        }
      ]
    },

    backcast: {
      today: [
        "SpaceX flew a record 165 Falcon 9 orbital launches in 2025 (up from 134 in 2024); the Starlink constellation now exceeds 9,300 active satellites, including a direct-to-cell fleet of roughly 650.",
        "Starship completed its eleventh integrated test flight in October 2025 (last of the second-generation vehicle) with three Mechazilla booster catches to date, and began flying the larger Block 3 / V3 design in 2026; full operational reuse of both stages is not yet demonstrated.",
        "SpaceX completed a record IPO in June 2026 (NASDAQ:SPCX), the first public pure-play on the launch and constellation economy.",
        "Varda Space Industries has flown four W-series in-space manufacturing capsules (W-1 returned Feb 2024 through W-4 in orbit by mid-2026) and raised a $187M Series C in July 2025; it now builds its own satellite bus.",
        "Artemis II flew a crewed lunar flyby April 1-10, 2026, the first crewed mission beyond low Earth orbit in over 50 years; Artemis III landing depends on Starship HLS.",
        "Intuitive Machines IM-2 (Athena) achieved the southernmost lunar landing in March 2025 but tipped on its side, ending the mission early."
      ],
      dependencies: [
        {
          name: "Rapid full reusability of heavy-lift launch",
          why: "Without Starship-class economics ($200-500/kg to LEO), in-space manufacturing payloads cannot compete with terrestrial production on cost.",
          state: "Starship on its Block 3 / V3 vehicle by mid-2026 with three booster catches achieved; full rapid reuse of both stages not yet demonstrated operationally."
        },
        {
          name: "In-space robotics and assembly",
          why: "Large structures (solar power satellites, propellant depots, manufacturing modules) cannot be launched assembled; autonomous robotic construction in orbit is required.",
          state: "Early-stage: DARPA NOM4D and NASA OSAM programs are developing on-orbit assembly; no large-scale demonstration yet."
        },
        {
          name: "Space property rights legal framework",
          why: "Capital-intensive resource extraction requires enforceable property rights; the 1967 Outer Space Treaty prohibits national appropriation but is silent on private extraction.",
          state: "Artemis Accords (2020) establish bilateral norms among 40+ signatories but are not a binding treaty; China and Russia have not signed."
        },
        {
          name: "Cryogenic propellant storage and transfer in orbit",
          why: "Propellant depots and ISRU logistics require long-duration cryogenic storage without boiloff losses; this has not been demonstrated at scale.",
          state: "NASA CRYOTE and ULA ACES programs have produced designs; no operational depot exists yet."
        }
      ],
      supplyChain: [
        {
          item: "Liquid oxygen and liquid methane (Starship propellants)",
          why: "Both are produced industrially on Earth; Starship's full reusability requires fast, cheap propellant loading at each launch site.",
          players: "Air Products, Linde, industrial gas suppliers at launch sites",
          chokepoint: false
        },
        {
          item: "Carbon fiber and advanced composites (launch vehicle structures)",
          why: "Starship and next-gen vehicles use stainless steel for the ship and carbon fiber composites for certain components; supply is concentrated.",
          players: "Toray Industries, Hexcel, Solvay",
          chokepoint: true
        },
        {
          item: "Radiation-hardened electronics (satellite and orbital facility systems)",
          why: "All orbital hardware requires rad-hard chips; this is a specialized supply chain with few qualified fabs.",
          players: "BAE Systems, Microchip Technology, Renesas",
          chokepoint: true
        },
        {
          item: "Thermal protection systems (reentry heat shields)",
          why: "Starship uses TUFROC and ceramic tiles; rapid reusability requires tiles that can be inspected and reflown with minimal replacement.",
          players: "NASA Ames (heritage tech), SpaceX internal manufacturing",
          chokepoint: true
        }
      ],
      leadingIndicators: [
        "Starship Block 3 reaching orbit and demonstrating the first ship (upper-stage) catch and reflight, the gate to rapid reuse, in 2026-2027.",
        "Varda W-5 and beyond flying with expanded pharmaceutical payload manifests on its in-house bus, validating recurring commercial demand.",
        "Starship HLS uncrewed and crewed lunar demonstration milestones for Artemis III holding to schedule.",
        "First on-orbit propellant transfer between two Starships demonstrated, the prerequisite for the depot and lunar architecture.",
        "First bilateral or multilateral treaty language on space resource property rights proposed in UN COPUOS."
      ]
    },

    people: [
      {
        name: "Elon Musk",
        role: "CEO, SpaceX",
        org: "SpaceX",
        note: "Architect of the reusability doctrine and Starship program; his stated goal is making humanity multiplanetary, but the near-term economic engine is cheap orbital access."
      },
      {
        name: "Gwynne Shotwell",
        role: "President and COO, SpaceX",
        org: "SpaceX",
        note: "Responsible for translating Starship's engineering into commercial contracts; her focus on launch cadence and price-per-kg makes her the most important operator in the field."
      },
      {
        name: "Will Marshall",
        role: "CEO and Co-Founder",
        org: "Planet Labs",
        note: "Demonstrated the commercial viability of commodity satellite infrastructure; Planet's 200-satellite constellation proved that frequent revisit beats resolution for most markets, a model relevant to in-space services."
      },
      {
        name: "Ali Hajimiri",
        role: "Professor of Electrical Engineering",
        org: "California Institute of Technology",
        note: "Led the Caltech Space Solar Power Project and the SSPD-1 experiment; demonstrated the first in-orbit wireless power transmission in 2023, making him the leading technical voice on space solar."
      },
      {
        name: "Delian Asparouhov",
        role: "Co-Founder",
        org: "Varda Space Industries",
        note: "Co-founded Varda to commercialize in-space pharmaceutical manufacturing; the W-1 mission he championed is the first proof that the in-space manufacturing market is real and accessible today."
      }
    ],

    reading: [
      {
        title: "The Case for Mars",
        author: "Robert Zubrin",
        year: 1996,
        type: "book",
        note: "Foundational argument for in-situ resource utilization and why propellant production off Earth changes the economics of everything beyond LEO; still the clearest statement of the ISRU logic."
      },
      {
        title: "Space Solar Power Demonstrator (SSPD-1) Mission Results",
        author: "Ali Hajimiri et al., Caltech",
        year: 2023,
        type: "paper",
        note: "First peer-reviewed account of in-orbit wireless power transmission and lightweight photovoltaic deployment; the primary technical source on space solar feasibility today."
      },
      {
        title: "State of the Space Industry",
        author: "Space Foundation",
        year: 2024,
        type: "report",
        note: "Annual overview of global space economy size, launch market trends, and commercial investment flows; useful for grounding cost-curve claims."
      },
      {
        title: "Artemis Accords",
        author: "NASA and partner nations",
        year: 2020,
        type: "report",
        note: "The foundational bilateral framework for space resource extraction norms; reading the text reveals exactly what is and is not settled on property rights."
      },
      {
        title: "In-Space Manufacturing: Enabling a New Space Economy",
        author: "NASA Technology Roadmaps (TA 7)",
        year: 2022,
        type: "report",
        note: "NASA's internal technology maturity assessment for in-space manufacturing, biomanufacturing, and ISRU; sets the official baseline for what is ready and what is not."
      }
    ]
  },

  /* ── 2. CLIMATE INTERVENTION & CARBON REMOVAL ───────────────────────────── */
  {
    id: "climate-intervention",
    name: "Climate Intervention & Carbon Removal",
    shortName: "Climate",
    tagline: "We may need to both heal the wound and stop the bleeding at the same time.",
    domain: "planet-space",
    glyph: "❂",
    status: "pilot",
    consequence: 10,

    probability: {
      value: 0.58,
      definition: "By 2056, engineered carbon dioxide removal (CDR) is removing at least 1 gigaton of CO2 per year globally, AND at least one form of solar radiation management (SRM) has either been deployed or formally rejected after international governance review.",
      basis: "IPCC AR6 (2022) states nearly all 1.5C scenarios require CDR reaching several gigatons per year by mid-century; IEA Net Zero by 2050 scenario requires 1.9 Gt CDR by 2050. The 1 Gt CDR threshold is treated as consensus near-term waypoint. SRM binary outcome (deploy or formally reject) is a near-certain governance event given current trajectory. Author estimate: CDR 1 Gt by 2056 at ~0.65 probability; SRM governance resolution at ~0.70 probability; joint ~0.58.",
      range: [0.35, 0.78]
    },

    arrival: {
      optimistic: 2038,
      consensus: 2048,
      skeptical: 2062
    },

    whyItMatters: "Even aggressive decarbonization leaves centuries of legacy CO2 in the atmosphere; without removal, overshoot of 1.5C is locked in. Carbon removal at gigaton scale is a trillion-dollar market that does not yet exist. Solar radiation management could reduce warming within a year but cannot reverse ocean acidification and raises profound governance questions about who controls Earth's thermostat. The decisions made in the next decade on both technologies will shape every aspect of the physical world by 2056.",

    feynman: [
      {
        level: 1,
        label: "The kitchen-table version",
        body: "Think of the atmosphere like a bathtub. We have been turning on the CO2 tap for 150 years, filling the tub. We are starting to close the tap by switching to solar and wind. But the water already in the tub does not drain on its own. Carbon removal means using giant machines or plants or rocks to suck CO2 back out and lock it away underground. Climeworks in Iceland built a machine called Mammoth that does exactly this, pulling CO2 out of the air like a filter pulling dust from a room. The problem is scale: humanity emits about 37 billion tons of CO2 per year; Mammoth can capture 36,000 tons per year. We need a machine about a million times bigger, or a million of these machines, or a combination of many approaches. Solar radiation management is a different idea: instead of draining the tub, you install a dimmer switch on the sun. Tiny reflective particles in the upper atmosphere would bounce a fraction of sunlight back to space, cooling the planet. Volcanoes do this accidentally, Mount Pinatubo cooled Earth by 0.5 degrees Celsius for a year in 1991. The question is whether humans should do it on purpose."
      },
      {
        level: 2,
        label: "The mechanism",
        body: "Carbon dioxide removal takes several forms. Direct air capture (DAC) uses industrial fans to pull ambient air over chemical sorbents or liquid solutions that bind CO2; the captured gas is then compressed and injected into basalt rock formations, where it mineralizes permanently within two years. Climeworks' Mammoth plant in Iceland, operational since 2024, uses solid sorbent DAC. 1PointFive (an Occidental Petroleum subsidiary) operates the Stratos plant in Texas using liquid solvent DAC, targeting 500,000 tonnes per year by 2025. Enhanced weathering spreads crushed silicate rock (basalt or olivine) on agricultural soils; the rock weathers and absorbs CO2 through natural chemistry while also improving soil fertility. Heirloom Carbon accelerates limestone's natural CO2 absorption cycle. Ocean-based approaches (kelp farming, ocean alkalinity enhancement) are earlier-stage. Solar radiation management via stratospheric aerosol injection (SAI) mimics volcanic eruptions: aircraft release sulfur dioxide or calcium carbonate at 20 km altitude, forming reflective aerosol clouds. Unlike CDR, SAI does not reduce atmospheric CO2 concentration and must be maintained continuously; stopping suddenly causes rapid rebound warming."
      },
      {
        level: 3,
        label: "The hard part",
        body: "The CDR cost problem is severe, and 2024-2025 sharpened it. Climeworks' flagship Mammoth plant captured only about 105 tonnes in 2024 against a 36,000-tonne nameplate, a roughly thousand-fold shortfall driven by filter failures, and the company laid off staff in 2025; this is the field's cautionary datapoint on the gap between design capacity and real output. DAC costs roughly $400-1,000 per tonne of CO2 today; the IEA estimates $100-300 per tonne is needed for gigaton scale by 2050, requiring learning rates comparable to solar PV. The energy requirement is also enormous: capturing 1 Gt CO2 via DAC at current efficiency requires approximately 300 TWh of electricity per year, comparable to France's total consumption. The gigaton gap between what nature-based solutions can provide and what IPCC scenarios require is widening, not closing. SRM raises acute governance problems. The Harvard SCoPEx experiment, a small stratospheric balloon test, was cancelled in 2021 after protests from indigenous groups and environmental organizations in Sweden, demonstrating that even research-scale SRM faces political resistance. Make Sunsets, a startup, has released sulfur dioxide balloons commercially since 2022 without formal authorization, forcing a regulatory response. The core governance challenge: any nation or well-funded actor can unilaterally deploy SAI, but the effects are global and unequally distributed. Drought patterns shift; monsoons may be disrupted. David Keith's research at Harvard documents both the potential and the regional injustice risks. The termination shock problem, rapid warming if SAI is stopped abruptly, means deployment creates path dependence with no clean exit."
      },
      {
        level: 4,
        label: "The frontier",
        body: "The CDR frontier is split between cost-reduction engineering and additionality measurement. For DAC, the key metric is levelized cost of capture (LCOC), currently $400-1,000/tonne at commercial plants. Learning rates for solid sorbent systems are estimated at 15-20% per doubling of capacity, implying $150-250/tonne at 10 Mt/yr scale, consistent with 45Q tax credit economics in the US ($180/tonne for direct air capture, extended through the Inflation Reduction Act). The measurement, reporting, and verification (MRV) problem is underappreciated: carbon market integrity requires proof that removed CO2 is additional, permanent, and correctly quantified. For enhanced weathering, field heterogeneity makes per-tonne accounting extremely difficult; Lithos Carbon and Eion are developing satellite and soil-sensor MRV stacks. For SRM, the scientific frontier is modeling heterogeneous regional impacts: stratospheric aerosol chemistry, monsoon system response, and ozone interactions. The DEGREES Initiative and the Solar Radiation Management Research Governance Initiative (SRMGI) are attempting to build international research governance. The 2024 UN Environment Assembly failed to pass a resolution on SRM governance, leaving a vacuum. The variable to watch is whether the IPCC AR7 (due 2027-2028) formally recommends SRM research at scale, which would shift political feasibility significantly."
      }
    ],

    timeline: {
      milestones: [
        {
          id: "ci-m1",
          title: "Climeworks Orca plant opens in Iceland",
          kind: "deployment",
          years: { optimistic: 2021, consensus: 2021, skeptical: 2021 },
          detail: "Climeworks opened Orca, the world's first commercial direct air capture and storage plant, in Iceland in September 2021. It captures 4,000 tonnes of CO2 per year and mineralizes it underground in basalt with CarbFix. Orca established that commercial DAC is technically operable at small scale and set the baseline for cost benchmarking.",
          done: true
        },
        {
          id: "ci-m2",
          title: "Climeworks Mammoth plant operational; US 45Q DAC tax credit enacted",
          kind: "policy",
          years: { optimistic: 2024, consensus: 2024, skeptical: 2024 },
          detail: "Climeworks' Mammoth plant (36,000 t CO2/year) opened in May 2024, a 9x scale-up from Orca. In parallel, the US Inflation Reduction Act (2022) established a $180/tonne 45Q tax credit for geological DAC storage, the first large-scale government price support for CDR. Both events together validated the commercial investment thesis.",
          done: true
        },
        {
          id: "ci-m3",
          title: "First megaton-scale DAC plant breaks ground",
          kind: "scaleup",
          years: { optimistic: 2026, consensus: 2029, skeptical: 2034 },
          detail: "A single facility targeting 1 million tonnes CO2 per year, requiring approximately 2.5 TWh of clean electricity and several square kilometers of land. 1PointFive's Stratos plant in Texas (500,000 t/year, first DAC Class VI storage permit April 2025, BlackRock-backed) is the intermediate step, though its 2025 startup slipped on a component issue. This milestone is the proof that DAC can escape pilot scale and hit nameplate output, which Mammoth has not.",
          done: false
        },
        {
          id: "ci-m4",
          title: "International SRM governance framework adopted or formally rejected",
          kind: "policy",
          years: { optimistic: 2028, consensus: 2033, skeptical: 2042 },
          detail: "A binding or broadly endorsed international agreement either authorizing or prohibiting stratospheric aerosol injection research and deployment. The current vacuum, where no governance exists and unilateral action is possible, is widely considered unstable. The UN ENVI failure in 2024 accelerated pressure for a dedicated forum.",
          done: false
        },
        {
          id: "ci-m5",
          title: "Enhanced weathering reaches 100 Mt CO2 removal per year",
          kind: "scaleup",
          years: { optimistic: 2032, consensus: 2038, skeptical: 2048 },
          detail: "Enhanced weathering (crushed basalt or olivine spread on agricultural land) removes CO2 through natural mineral weathering reactions. At 100 Mt/yr it becomes a meaningful contributor to the gigaton target. Key gates are MRV standardization and supply chain for basalt mining and distribution at agricultural scale.",
          done: false
        },
        {
          id: "ci-m6",
          title: "Engineered CDR reaches 1 gigaton CO2 per year globally",
          kind: "scaleup",
          years: { optimistic: 2040, consensus: 2050, skeptical: 2065 },
          detail: "The IPCC AR6 waypoint: CDR from DAC, enhanced weathering, bioenergy with CCS, and ocean-based methods combined reaches 1 Gt CO2/year. This requires roughly $300-500B in annual capital investment and a new industrial sector larger than the current global steel industry.",
          done: false
        }
      ],
      branches: [
        {
          id: "ci-b1",
          name: "CDR industrial scale-up (no SRM deployment)",
          fromMilestone: "ci-m3",
          probability: 0.45,
          summary: "Policy support (carbon pricing, 45Q-style credits, CBAM) drives DAC and enhanced weathering down the cost curve fast enough that CDR becomes the primary intervention, with SRM rejected or indefinitely deferred by governance consensus. This is the most politically durable path but requires the fastest cost-reduction trajectory.",
          milestones: [
            {
              id: "ci-b1m1",
              title: "DAC levelized cost reaches $150/tonne at commercial scale",
              kind: "scaleup",
              years: { optimistic: 2033, consensus: 2040, skeptical: 2052 },
              detail: "The cost threshold at which CDR becomes competitive with carbon offset markets and government procurement programs, enabling private capital deployment without subsidy. Currently $400-1,000/tonne; requires 5-7 doublings of installed capacity to reach via learning rates alone.",
              done: false
            },
            {
              id: "ci-b1m2",
              title: "Voluntary and compliance CDR market reaches $50B annual revenue",
              kind: "deployment",
              years: { optimistic: 2035, consensus: 2042, skeptical: 2055 },
              detail: "A market of this size provides the demand signal for private capital to finance gigaton-scale infrastructure without requiring per-plant government grants. Currently the CDR credit market is under $1B globally.",
              done: false
            }
          ]
        },
        {
          id: "ci-b2",
          name: "Emergency SRM deployment alongside CDR",
          fromMilestone: "ci-m4",
          probability: 0.30,
          summary: "Climate damages (extreme heat, crop failure, ice sheet instability) escalate in the 2030s to the point where a coalition of nations authorizes SAI deployment as a temporary measure while CDR scales. David Keith and colleagues have argued this is the least-bad option if temperatures exceed 2C. Highly contested; the governance and termination-shock risks are severe.",
          milestones: [
            {
              id: "ci-b2m1",
              title: "First authorized stratospheric aerosol injection field trial",
              kind: "pilot",
              years: { optimistic: 2029, consensus: 2036, skeptical: 2048 },
              detail: "A government-authorized high-altitude aerosol release at sufficient scale to measure regional climate effects, conducted under an international monitoring protocol. Distinct from Make Sunsets' unauthorized commercial releases; requires multilateral scientific oversight.",
              done: false
            },
            {
              id: "ci-b2m2",
              title: "Sustained SAI program reduces global mean temperature by 0.3-0.5C",
              kind: "deployment",
              years: { optimistic: 2038, consensus: 2045, skeptical: 2060 },
              detail: "Operational SAI at scale sufficient to measurably reduce global mean temperature, with monitoring networks confirming effect size and regional impacts. This would be the most consequential planned human intervention in Earth's climate system.",
              done: false
            }
          ]
        },
        {
          id: "ci-b3",
          name: "Ocean-based CDR at scale",
          fromMilestone: "ci-m5",
          probability: 0.20,
          summary: "Ocean alkalinity enhancement or macroalgae cultivation become cost-competitive CDR pathways, exploiting the ocean's vast surface area and existing alkalinity buffering chemistry. Running Tide, Planetary Technologies, and Ebb Carbon are early players. MRV in open ocean systems is the primary barrier.",
          milestones: [
            {
              id: "ci-b3m1",
              title: "Ocean alkalinity enhancement achieves standardized MRV protocol",
              kind: "policy",
              years: { optimistic: 2030, consensus: 2036, skeptical: 2048 },
              detail: "A measurement standard accepted by a major carbon registry (Verra, Gold Standard, or equivalent) enabling ocean-based CDR credits to be sold into voluntary and compliance markets at scale. Currently no such standard exists; measurement uncertainty is the blocking issue for investment.",
              done: false
            }
          ]
        }
      ]
    },

    backcast: {
      today: [
        "Climeworks Mammoth (36,000 t/yr nameplate) opened in Iceland in May 2024 but captured only about 105 tonnes across 2024 due to filter failures; the company cut roughly 10% of staff in mid-2025 and raised a $162M round, making real-world DAC underperformance the central story of the field.",
        "1PointFive Stratos in Ector County, Texas (up to 500,000 t/yr) secured the first DAC Class VI storage permits in April 2025 and targeted startup by end of 2025 (slipped on a component issue); BlackRock invested $550M and Occidental signed an ADNOC/XRG joint-venture for a second hub.",
        "US Inflation Reduction Act 45Q tax credit at $180/tonne for direct air capture geological storage remains the largest government CDR price support globally.",
        "Make Sunsets has released unauthorized SAI balloons commercially since 2022; Mexico banned the practice in January 2023, and no international SRM governance framework exists.",
        "IPCC AR6 (2022) states that all 1.5C-compatible pathways require CDR; scenarios without CDR overshoot 2C before 2100."
      ],
      dependencies: [
        {
          name: "Clean electricity at scale and low cost",
          why: "DAC is extremely energy-intensive; capturing 1 Gt CO2/yr via current DAC technology requires approximately 300 TWh/yr of electricity, which must be zero-carbon for the CDR to be net-negative.",
          state: "Solar and wind are already the cheapest new electricity sources globally; grid buildout is the constraint, not technology."
        },
        {
          name: "Geological CO2 storage infrastructure",
          why: "Captured CO2 must be permanently stored; the world's geological storage capacity is likely sufficient but the injection infrastructure (wells, pipelines, monitoring) does not yet exist at scale.",
          state: "Norway's Northern Lights began operations in 2025; the Stratos Texas site received the first DAC Class VI storage permits in April 2025; EPA Class VI permitting backlog remains the binding constraint on US buildout."
        },
        {
          name: "Carbon pricing or equivalent demand signal",
          why: "At $400-1,000/tonne current cost, DAC is uneconomic without policy support; a carbon price above $150/tonne or equivalent credit demand is required for private capital deployment.",
          state: "EU ETS hit $100/tonne in 2023 but has since fallen; US has no federal carbon price; voluntary market prices are $10-30/tonne for low-quality offsets."
        },
        {
          name: "International SRM governance",
          why: "Unilateral SAI deployment is technically feasible for a nation-state today; without governance, the risk of rogue deployment or competitive geoengineering is real.",
          state: "No binding international framework exists; UNEP has a study mandate; the DEGREES Initiative is building a research governance model."
        }
      ],
      supplyChain: [
        {
          item: "Solid sorbent materials (DAC adsorbents)",
          why: "DAC efficiency depends heavily on sorbent CO2 capacity and regeneration energy; current materials are expensive and degrade with cycling.",
          players: "Climeworks (proprietary), Global Thermostat, Carbon Engineering (now 1PointFive, liquid solvent)",
          chokepoint: true
        },
        {
          item: "Basalt and olivine rock for enhanced weathering",
          why: "Enhanced weathering requires millions of tonnes of crushed silicate rock spread on agricultural land annually; supply is geologically abundant but mining and distribution logistics are not scaled.",
          players: "Mining companies in Iceland, India, Brazil; no dedicated supply chain exists yet",
          chokepoint: false
        },
        {
          item: "High-altitude aircraft for SAI delivery",
          why: "Stratospheric aerosol injection at meaningful scale requires specialized aircraft capable of sustained flight at 20+ km altitude; no existing commercial aircraft operates at these altitudes routinely.",
          players: "No current commercial provider; modified U-2s or purpose-built high-altitude tankers would be needed; Aurora Flight Sciences has concept designs",
          chokepoint: true
        },
        {
          item: "CO2 pipeline and injection infrastructure",
          why: "Captured CO2 must move from DAC plants to geological storage sites; this requires CO2-specific pipeline networks and injection well infrastructure at oil-industry scale.",
          players: "Energy Transfer, Navigator CO2, Wolf Midstream (Canada); DOE funding early US hub development",
          chokepoint: true
        }
      ],
      leadingIndicators: [
        "1PointFive Stratos demonstrating actual capture rate against its 500,000 t/yr nameplate after its delayed 2025-2026 startup; whether it avoids Mammoth's underperformance is the field's key test.",
        "EU Carbon Border Adjustment Mechanism (CBAM) full implementation in 2026 and its effect on voluntary CDR demand from industrial exporters.",
        "UNEP or UN ENVI passing any resolution on SRM research governance in 2026-2027.",
        "Climeworks demonstrating whether its next-generation sorbent and plant design close the capacity-versus-output gap exposed at Mammoth.",
        "IPCC AR7 (due 2028-2029) scoping documents indicating whether SRM will receive formal assessment treatment."
      ]
    },

    people: [
      {
        name: "Klaus Lackner",
        role: "Director, Center for Negative Carbon Emissions",
        org: "Arizona State University",
        note: "Invented the concept of direct air capture in the 1990s; his passive moisture-swing sorbent approach remains a distinct low-energy alternative to current commercial DAC designs."
      },
      {
        name: "Jan Wurzbacher",
        role: "Co-CEO and Co-Founder",
        org: "Climeworks",
        note: "Built the world's first commercial DAC company from an ETH Zurich spin-out; Mammoth is his team's most significant scale milestone and the current benchmark for solid-sorbent DAC cost."
      },
      {
        name: "David Keith",
        role: "Professor of Applied Physics and Public Policy",
        org: "University of Chicago (formerly Harvard)",
        note: "The most prominent researcher on stratospheric aerosol injection; he simultaneously advocates for research and warns of governance risks, and his work is the primary scientific reference for SAI feasibility."
      },
      {
        name: "Christoph Gebald",
        role: "Co-CEO and Co-Founder",
        org: "Climeworks",
        note: "Co-leads Climeworks alongside Wurzbacher; focused on engineering scale and cost reduction for the Mammoth and post-Mammoth generation of DAC plants."
      },
      {
        name: "Kim Stanley Robinson",
        role: "Science fiction author",
        org: "Independent",
        note: "His Ministry for the Future (2020) is the most widely read narrative about emergency climate intervention and CDR at scale; has shaped the policy imagination of a generation of climate investors and advocates."
      }
    ],

    reading: [
      {
        title: "A Case for Climate Engineering",
        author: "David Keith",
        year: 2013,
        type: "book",
        note: "The clearest scientific case for taking SRM seriously, written by the field's most prominent researcher; covers both the physics and the governance challenges."
      },
      {
        title: "IPCC Sixth Assessment Report, Working Group III: Mitigation of Climate Change",
        author: "IPCC",
        year: 2022,
        type: "report",
        note: "The authoritative source on CDR requirements, scenario pathways, and the gigaton gap; all CDR probability claims should be checked against the SPM and Chapter 12."
      },
      {
        title: "Net Zero by 2050: A Roadmap for the Global Energy Sector",
        author: "International Energy Agency",
        year: 2021,
        type: "report",
        note: "IEA's scenario requiring 1.9 Gt CDR by 2050; provides the clearest industrial-scale decomposition of CDR technology contributions."
      },
      {
        title: "Ministry for the Future",
        author: "Kim Stanley Robinson",
        year: 2020,
        type: "book",
        note: "Speculative fiction treating CDR and SRM with serious technical and political detail; labeled here as speculative fiction, but widely used in policy circles as a shared narrative frame."
      },
      {
        title: "The State of Carbon Dioxide Removal, 2nd Edition",
        author: "Smith et al., Oxford Net Zero",
        year: 2024,
        type: "report",
        note: "The most current quantitative assessment of CDR deployment, cost, and scaling rates; the primary source for current gigaton-gap data."
      }
    ]
  },

  /* ── 3. CULTIVATED & CELLULAR FOOD SYSTEMS ──────────────────────────────── */
  {
    id: "cultivated-food",
    name: "Cultivated & Cellular Food Systems",
    shortName: "Future Food",
    tagline: "Growing a steak without the cow is possible. Making it cheaper than the cow is the hard part.",
    domain: "planet-space",
    glyph: "✿",
    status: "pilot",
    consequence: 7,

    probability: {
      value: 0.38,
      definition: "By 2056, cultivated meat (animal cells grown in bioreactors without slaughter) is cost-competitive with conventional meat at retail price in at least three major markets, and precision fermentation proteins supply at least 5% of global protein by volume.",
      basis: "Good Food Institute (GFI) Techno-Economic Analysis (2023) projects cultivated meat cost parity at $10-25/kg requires bioreactor costs below $10/L and cell culture media below $1/L, neither of which has been demonstrated at scale. McKinsey Global Institute (2023) estimates cultivated meat could reach $25/kg by 2030 under optimistic assumptions, still above conventional chicken ($3-5/kg). Precision fermentation is closer to cost parity for specific proteins (Perfect Day whey at ~$30/kg vs conventional $8/kg). Author estimate: cost parity for cultivated meat by 2056 is contested; 0.38 reflects significant scale-up uncertainty at the bioreactor wall.",
      range: [0.20, 0.60]
    },

    arrival: {
      optimistic: 2035,
      consensus: 2048,
      skeptical: 2065
    },

    whyItMatters: "Animal agriculture occupies 70% of global agricultural land, produces 14.5% of human greenhouse gas emissions, and is the primary driver of biodiversity loss. If cultivated meat and precision fermentation proteins reach cost and sensory parity with conventional meat, they could dramatically reduce land use, water use, and animal suffering without requiring changes in consumer behavior. If they do not reach parity, the market may plateau at a premium niche, as plant-based meat did after 2021.",

    feynman: [
      {
        level: 1,
        label: "The kitchen-table version",
        body: "Every time you eat a burger, a cow had to eat thousands of pounds of grain, drink hundreds of gallons of water, and eventually be slaughtered. Most of the energy in the grain never makes it into the meat; it gets burned up by the cow just staying alive. Scientists figured out that you can take a tiny piece of muscle from a cow, no bigger than a sesame seed, put those cells in a warm liquid bath full of nutrients, and let them multiply millions of times until you have enough to make a burger. The cow stays alive and healthy. No slaughter, no feedlot, no animal waste. That is cultivated meat. Precision fermentation is a different trick: instead of growing animal cells, you put animal genes into a yeast or bacterium, and the microbe produces the animal protein for you. Perfect Day uses this to make dairy whey protein without a cow. Singapore was the first country in the world to approve cultivated chicken for sale, in 2020. The US approved it in 2023. The problem is that it still costs much more to grow meat in a tank than on a farm, and getting that cost down is the central challenge of the field."
      },
      {
        level: 2,
        label: "The mechanism",
        body: "Cultivated meat starts with a biopsy: a small tissue sample from a live animal yields cells that can be expanded in culture. The key cell types are skeletal muscle satellite cells (which become muscle fiber) and fat cells (which become the flavor-carrying marbling). These cells are placed in a bioreactor, a stainless-steel tank filled with cell culture media, a liquid containing glucose, amino acids, growth factors, and oxygen. Under controlled temperature and pH conditions, cells multiply through many doublings. For a three-dimensional meat product (not just a thin patty), cells must also be scaffolded: given a structure to grow on, mimicking the connective tissue of real muscle. Plant-based scaffolds from mycelium or cellulose, or edible gelatin structures, are current approaches. Precision fermentation is closer to the beer brewing process: a microorganism (E. coli, Bacillus, or yeast) is engineered to express an animal protein gene, fermented in industrial tanks, and the target protein is harvested, purified, and dried. Perfect Day uses this for dairy proteins; Remilk, Formo, and Change Foods for cheese-relevant caseins. The output is identical at the molecular level to the animal-derived version."
      },
      {
        level: 3,
        label: "The hard part",
        body: "The bioreactor wall is the central problem in cultivated meat. Industrial bioreactor capital costs are $1-5 million per 10,000-liter unit; cultivated meat at scale requires millions of liters of capacity. The GFI techno-economic analysis identifies three cost reduction requirements: bioreactor cost per liter below $10 (achievable through food-grade rather than pharmaceutical standards), cell culture media cost below $1 per liter (currently $500-1,000/liter using pharmaceutical-grade growth factors, because fetal bovine serum is being replaced), and a cell line producing at least 2 kg meat per kg media. None of these has been demonstrated simultaneously at production scale. The scale-up path is also biologically constrained: cells stop dividing after a species-specific number of doublings (the Hayflick limit) unless immortalized, but immortalized cells raise regulatory questions about whether the product remains natural. Plant-based meat hit a plateau after 2021: Beyond Meat revenue peaked in 2022 and has declined since, demonstrating that consumer novelty is not a stable demand driver; the product must be genuinely better or cheaper. Cultivated meat faces the same hedonic competition and a harder production challenge. US and Singapore regulatory approvals are important but cover only minced/ground products; whole-cut cultured steak requires solved scaffold technology, which is years further away. A political counter-current has also emerged: by mid-2025 seven US states had banned cultivated meat sales outright (Florida, Alabama, Mississippi, Montana, Nebraska, Indiana, Texas), and Italy banned it in 2023, fragmenting the addressable market along ideological lines and adding litigation risk on top of the cost problem."
      },
      {
        level: 4,
        label: "The frontier",
        body: "The field bifurcates technically between scaffold-free (ground/minced products) and scaffold-dependent (whole-cut) cultivated meat. Scaffold-free products, Upside Foods chicken and Good Meat chicken (both US-approved 2023), are the near-term commercial reality. Scaffold-dependent products require tissue engineering approaches borrowed from regenerative medicine: decellularized plant scaffolds (Tufts University), electrospun protein fibers, or 3D bioprinting. Cost parity for scaffold-free cultivated chicken is estimated at $17-23/kg under optimistic media cost assumptions by GFI (2023), against $3-5/kg for conventional chicken. Precision fermentation has a cleaner cost-reduction pathway: dairy whey proteins at industrial fermentation scale are approaching $10-15/kg, competitive with high-end conventional dairy ingredients. The regulatory frontier is accelerating: the EU Novel Food regulation is the relevant pathway for Europe; Singapore has the most permissive approval environment globally. Consumer acceptance data from Singapore sales (Good Meat at selected restaurants since 2020) shows willingness to pay a premium but not at current restaurant prices ($17-23 per dish). The variable to watch is whether any producer achieves media cost below $5/liter by 2028, as that is the key unlock for the cost-reduction roadmap. Josh Tetrick at Eat Just maintains publicly that this is achievable; independent analysis suggests it requires novel recombinant growth factor production systems not yet proven at food-grade scale."
      }
    ],

    timeline: {
      milestones: [
        {
          id: "cf-m1",
          title: "Singapore approves Good Meat cultivated chicken for sale",
          kind: "policy",
          years: { optimistic: 2020, consensus: 2020, skeptical: 2020 },
          detail: "In December 2020, Singapore's Singapore Food Agency (SFA) approved Eat Just's Good Meat cultivated chicken product for commercial sale, making Singapore the first country in the world to approve cultivated meat. The approval covered a minced chicken product sold at select restaurants. This established proof that a regulatory pathway exists.",
          done: true
        },
        {
          id: "cf-m2",
          title: "US FDA and USDA approve Upside Foods and Good Meat for sale",
          kind: "policy",
          years: { optimistic: 2023, consensus: 2023, skeptical: 2023 },
          detail: "In June 2023, both Upside Foods (formerly Memphis Meats) and Eat Just's Good Meat received joint FDA-USDA approval for cultivated chicken in the United States. Bar Crenn in San Francisco was the first restaurant to serve Upside Foods product. This validated the regulatory pathway in the world's largest food market.",
          done: true
        },
        {
          id: "cf-m3",
          title: "Cell culture media cost reaches $5/liter at commercial scale",
          kind: "scaleup",
          years: { optimistic: 2027, consensus: 2032, skeptical: 2040 },
          detail: "Current pharmaceutical-grade media costs $500-1,000/liter; food-grade equivalents with recombinant growth factors cost $50-150/liter today. Reaching $5/liter requires both new growth factor production methods and regulatory acceptance of food-grade (non-pharmaceutical) standards. This is the single most important cost milestone in the field.",
          done: false
        },
        {
          id: "cf-m4",
          title: "Precision fermentation dairy protein reaches retail cost parity",
          kind: "scaleup",
          years: { optimistic: 2028, consensus: 2033, skeptical: 2042 },
          detail: "Perfect Day and Remilk whey and casein proteins reaching retail price parity with conventional dairy ingredients at industrial fermentation scale. This is the closest near-term cost parity event in the alternative protein sector and would open the $900B global dairy ingredient market.",
          done: false
        },
        {
          id: "cf-m5",
          title: "First large-scale cultivated meat production facility (>1,000 tonne/year)",
          kind: "scaleup",
          years: { optimistic: 2029, consensus: 2036, skeptical: 2048 },
          detail: "A cultivated meat facility producing at least 1,000 tonnes per year of finished product, representing meaningful commercial scale. GOOD Meat has announced a Singapore facility at this scale; Upside Foods' facility in Emeryville, CA, operates at demonstration scale currently. This milestone demonstrates industrial bioreactor operations.",
          done: false
        },
        {
          id: "cf-m6",
          title: "Cultivated meat reaches $15/kg cost-of-goods at scale",
          kind: "scaleup",
          years: { optimistic: 2034, consensus: 2042, skeptical: 2058 },
          detail: "The cost threshold at which cultivated chicken becomes competitive with premium conventional chicken in retail markets. GFI techno-economic modeling sets this as achievable under optimistic assumptions on media cost and bioreactor utilization. Ground beef and pork parity is harder, as conventional prices are lower.",
          done: false
        },
        {
          id: "cf-m7",
          title: "Alternative proteins reach 5% of global protein supply",
          kind: "deployment",
          years: { optimistic: 2040, consensus: 2052, skeptical: 2070 },
          detail: "A combination of cultivated meat, precision fermentation, and advanced plant-based proteins supplying 5% of the roughly 100 Mt of protein consumed globally per year. This is a market share milestone, not a technology milestone, and requires both cost parity and consumer adoption at scale.",
          done: false
        }
      ],
      branches: [
        {
          id: "cf-b1",
          name: "Precision fermentation wins; cultivated meat plateaus",
          fromMilestone: "cf-m3",
          probability: 0.40,
          summary: "Cell culture media cost does not reach $5/liter by 2040, making whole-muscle cultivated meat a premium niche. Precision fermentation, with a cleaner cost-reduction pathway, becomes the dominant alternative protein technology, supplying dairy proteins, egg proteins, and specialty ingredients at scale. Cultivated meat remains a restaurant and premium retail product.",
          milestones: [
            {
              id: "cf-b1m1",
              title: "Precision fermentation captures 10% of US dairy ingredient market",
              kind: "deployment",
              years: { optimistic: 2032, consensus: 2038, skeptical: 2048 },
              detail: "Perfect Day, Remilk, and competitors supply whey and casein protein at cost parity to conventional dairy to food manufacturers at meaningful market share. The US dairy ingredient market is approximately $50B; 10% share would represent $5B in annual revenue.",
              done: false
            }
          ]
        },
        {
          id: "cf-b2",
          name: "Cultivated meat achieves cost parity and broad adoption",
          fromMilestone: "cf-m6",
          probability: 0.30,
          summary: "Media cost and bioreactor innovations combine to bring cultivated meat below $10/kg by 2042, enabling supermarket-level competition with conventional chicken and ground beef. Broad consumer acceptance follows, and regulatory approvals expand to the EU, UK, and Asian markets. This is the transformational scenario for global animal agriculture.",
          milestones: [
            {
              id: "cf-b2m1",
              title: "EU Novel Food approval for cultivated meat granted",
              kind: "policy",
              years: { optimistic: 2028, consensus: 2033, skeptical: 2042 },
              detail: "The European Food Safety Authority (EFSA) completes a safety assessment and grants Novel Food authorization for at least one cultivated meat product for sale in the EU. The EU market is critical for global scaling; without it, the technology remains geographically confined.",
              done: false
            },
            {
              id: "cf-b2m2",
              title: "Cultivated meat at retail parity in at least 3 major markets",
              kind: "deployment",
              years: { optimistic: 2040, consensus: 2050, skeptical: 2065 },
              detail: "Supermarket shelf price for cultivated chicken equal to or below conventional chicken in Singapore, the US, and at least one EU country. This is the arrival milestone for this branch: the point at which the technology wins on economics, not just novelty.",
              done: false
            }
          ]
        },
        {
          id: "cf-b3",
          name: "Whole-cut cultivated meat via advanced scaffolding",
          fromMilestone: "cf-m5",
          probability: 0.20,
          summary: "Scaffold technology advances enough that thick, whole-cut steak and whole chicken breast can be produced at scale in bioreactors, opening the premium conventional meat market where margins are highest. Requires solving vascularization (nutrients reaching cells deep in thick tissue) and food-grade 3D bioprinting at scale.",
          milestones: [
            {
              id: "cf-b3m1",
              title: "1 cm thick cultivated steak produced and sold commercially",
              kind: "pilot",
              years: { optimistic: 2030, consensus: 2038, skeptical: 2052 },
              detail: "A cultivated beef product with whole-cut texture and marbling sold commercially at restaurant scale. Aleph Farms (Israel) and Mosa Meat (Netherlands) are the primary developers; Aleph produced a prototype thin steak in 2018 but has not reached commercial thickness.",
              done: false
            }
          ]
        }
      ]
    },

    backcast: {
      today: [
        "Upside Foods and Good Meat both hold US FDA-USDA regulatory approval for cultivated chicken (granted June 2023); commercial sales remain limited to occasional restaurant servings.",
        "Seven US states have banned the sale of cultivated meat by mid-2025: Florida, Alabama, Mississippi, Montana, Nebraska, Indiana, and Texas (SB 261, effective September 2025); Upside Foods and Wildtype have filed constitutional challenges against the Florida and Texas bans.",
        "Perfect Day's precision fermentation whey protein is available in consumer products in the US, but the company restructured amid funding pressure; cost remains well above conventional whey.",
        "GFI reports global alternative protein investment fell from $3.1B in 2021 to roughly $1B by 2023-2024, reflecting sustained investor reassessment after the plant-based plateau.",
        "No producer has publicly demonstrated cell culture media below roughly $20/liter at food-grade scale, the gate to cost parity; large-format food-grade bioreactors still top out far below the volume needed."
      ],
      dependencies: [
        {
          name: "Low-cost cell culture media at food-grade standard",
          why: "Media is the largest variable cost in cultivated meat production; reducing it from $100-1,000/liter to $1-5/liter requires recombinant growth factor production and regulatory acceptance of food-grade (non-pharmaceutical) purity standards.",
          state: "Multiple startups (Multus Biotechnology, Cell Cultures Co.) are developing food-grade media; no product has reached $5/liter at commercial scale."
        },
        {
          name: "Large-scale food-grade bioreactor manufacturing",
          why: "Pharmaceutical bioreactors are designed for high-purity, low-volume products; cultivated meat needs food-industry-scale bioreactors at dramatically lower cost-per-liter.",
          state: "ABEC, Sartorius, and Esco Aster are developing food-grade bioreactor lines; the largest single-use food-grade units are 2,000 liters, far below the 50,000+ liters needed for cost parity."
        },
        {
          name: "Scaffold materials for whole-cut products",
          why: "Ground and minced cultivated meat does not require scaffold; whole-cut products require a 3D structure for cells to attach to and grow on that is food-safe and edible.",
          state: "Plant-based scaffolds from mycelium (Atlast Food) and soy protein are in development; no commercial whole-cut cultivated product has been sold."
        },
        {
          name: "Regulatory approval in major markets (EU, China, Japan)",
          why: "US and Singapore approvals exist for minced cultivated chicken; EU, China, and Japan represent the bulk of global premium meat markets and have not yet approved any cultivated meat product.",
          state: "EU EFSA review is in progress (no approval yet); China has named cultivated protein in agricultural planning; meanwhile seven US states have banned sales, fragmenting the domestic market even where federal approval exists."
        }
      ],
      supplyChain: [
        {
          item: "Recombinant growth factors (FGF, TGF-beta, insulin)",
          why: "Growth factors signal cells to proliferate; conventional sources use fetal bovine serum (ethically problematic and expensive); recombinant alternatives must be produced at food-grade scale.",
          players: "Multus Biotechnology (UK), ScaleReady, Cell Cultures Co., Biftek (Turkey)",
          chokepoint: true
        },
        {
          item: "Food-grade stainless steel bioreactors at 10,000+ liter scale",
          why: "Cultivated meat requires enormous bioreactor volume; current food-grade vessels top out at 2,000-5,000 liters; pharmaceutical vessels are too expensive.",
          players: "ABEC, Esco Aster, Sartorius, GEA Group",
          chokepoint: true
        },
        {
          item: "Glucose and amino acid media base",
          why: "The bulk of cell culture media is glucose, amino acids, and salts; at scale these are commodity chemicals, but purity specifications for cell culture are more stringent than bulk food-grade.",
          players: "Ajinomoto (amino acids), ADM, Cargill (glucose)",
          chokepoint: false
        },
        {
          item: "Food-safe scaffold materials",
          why: "Whole-cut products require edible scaffold; mycelium, plant protein fibers, and polysaccharide hydrogels are candidates but none is in commercial cultivated meat production.",
          players: "Atlast Food Co. (mycelium), Tufts Biomedical Engineering (research), Matrix FT",
          chokepoint: true
        }
      ],
      leadingIndicators: [
        "Outcome of the Upside Foods and Wildtype federal lawsuits against the Texas and Florida cultivated-meat bans, which will set the constitutional precedent for state-level prohibition.",
        "Any cultivated meat producer publicly discloses a cell culture media cost below $20/liter from a food-grade production process.",
        "EU EFSA completes safety assessment on first cultivated meat product dossier; positive opinion would trigger EU market opening.",
        "GFI annual alternative protein investment report shows reversal of the post-2021 investment decline, indicating restored investor confidence.",
        "Perfect Day or Remilk announces a supply contract with a major dairy brand (Nestle, Danone, Lactalis) at volumes implying price parity."
      ]
    },

    people: [
      {
        name: "Uma Valeti",
        role: "CEO and Founder",
        org: "Upside Foods",
        note: "Cardiologist-turned-entrepreneur who founded Memphis Meats (now Upside Foods) in 2015; led the company to the first US regulatory approval for cultivated meat in 2023 and is the field's most prominent public advocate."
      },
      {
        name: "Josh Tetrick",
        role: "CEO and Co-Founder",
        org: "Eat Just / Good Meat",
        note: "Secured the world's first cultivated meat commercial approval in Singapore (2020) and US approval (2023); maintains aggressive public claims on cost-reduction timelines that independent analysts treat with caution."
      },
      {
        name: "Pat Brown",
        role: "Founder and former CEO",
        org: "Impossible Foods",
        note: "Biochemist who created the Impossible Burger using plant-derived heme protein; his plant-based approach is a different technology from cultivated meat but shares the goal of replacing conventional animal agriculture and is the primary comparison case for consumer adoption curves."
      },
      {
        name: "Bruce Friedrich",
        role: "Founder and CEO",
        org: "Good Food Institute (GFI)",
        note: "Leads the primary nonprofit research and advocacy organization for alternative proteins; GFI's techno-economic analyses are the standard reference for cost-parity modeling in the field."
      },
      {
        name: "Mark Post",
        role: "Chief Scientific Officer",
        org: "Mosa Meat",
        note: "Produced the first cultivated beef burger in 2013, demonstrating technical feasibility to a global audience; now leading Mosa Meat's scale-up effort in the Netherlands toward European market entry."
      }
    ],

    reading: [
      {
        title: "Techno-Economic Analysis of Cultivated Meat",
        author: "Humbird, D., Good Food Institute",
        year: 2021,
        type: "report",
        note: "The most rigorous independent cost modeling of cultivated meat production; the primary source for bioreactor cost, media cost, and cost-parity pathway assumptions cited in this brief."
      },
      {
        title: "State of the Industry Report: Cultivated Meat and Seafood",
        author: "Good Food Institute",
        year: 2024,
        type: "report",
        note: "Annual GFI report covering investment flows, company count, regulatory developments, and technical progress in cultivated meat; the standard industry reference."
      },
      {
        title: "Opportunities for applying biotechnology to alternative proteins",
        author: "Risner et al., Nature Food",
        year: 2023,
        type: "paper",
        note: "Peer-reviewed assessment of the biotechnology challenges in cultivated meat and precision fermentation; covers cell line development, media optimization, and scaffold engineering with realistic cost estimates."
      },
      {
        title: "Alternative Proteins: The Race for Market Share Is Heating Up",
        author: "McKinsey Global Institute",
        year: 2023,
        type: "report",
        note: "McKinsey's market sizing and cost-parity scenario analysis for cultivated meat and precision fermentation; the source of the $25/kg by 2030 optimistic cultivated meat estimate."
      },
      {
        title: "The Good Food Institute Annual Report and Research Database",
        author: "Good Food Institute",
        year: 2024,
        type: "report",
        note: "GFI's annual report and open-access research database covering all funded alternative protein research globally; useful for tracking academic and corporate R&D pipeline."
      }
    ]
  }

);
