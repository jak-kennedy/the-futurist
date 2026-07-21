/* =============================================================================
   THE FUTURIST — ENERGY DOMAIN DATA
   Technologies: Fusion Power, Grid-Scale Energy Storage,
                 Room-Temperature Superconductors
   Date: 2026-06-12
   Schema: _schema.js
   ============================================================================= */

window.FUTURIST_DATA = window.FUTURIST_DATA || [];

window.FUTURIST_DATA.push(

  /* =========================================================================
     1. FUSION POWER
     ========================================================================= */
  {
    id: "fusion-power",
    name: "Fusion Power",
    shortName: "Fusion",
    tagline: "The sun's engine in a bottle: limitless clean energy from hydrogen, if we can hold the fire long enough.",
    domain: "energy",
    glyph: "✹",
    status: "pilot",
    consequence: 9,

    probability: {
      value: 0.30,
      definition: "Grid-connected fusion supplies more than 1% of world electricity by 2056.",
      basis: "Metaculus community question #363 (100 MW fusion facility by 2030) sits below 10% as of 2026. FIA Global Fusion Industry Report 2024: 70% of private companies expect grid electricity by 2035, but that is industry self-reporting with strong selection bias. Author estimate 0.30 for the >1% grid share threshold by 2056, reflecting the gap between company roadmaps and independent physics forecasts and the unresolved tritium breeding and materials problems.",
      range: [0.10, 0.55]
    },

    arrival: {
      optimistic: 2035,
      consensus: 2045,
      skeptical: 2065
    },

    whyItMatters: "Fusion fuel is deuterium from seawater and lithium from the Earth's crust, effectively inexhaustible. A working fusion grid decouples energy abundance from geography, fossil extraction, and carbon budgets simultaneously. Every hard-to-decarbonize sector, including steel, cement, and aviation synthetic fuels, would have a credible zero-carbon heat source.",

    feynman: [
      {
        level: 1,
        label: "The kitchen-table version",
        body: "The sun makes energy by squishing hydrogen atoms together until they fuse into helium. That fusion releases a burst of energy far bigger than any chemical reaction. Scientists want to do the same thing on Earth. The catch: you need hydrogen hot enough that atoms slam together, and hot enough means 100 million degrees. Nothing solid can hold something that hot, so we cage the superhot gas, called plasma, inside powerful electromagnets. In December 2022, a lab in California called NIF fired the most powerful laser array in the world at a pellet of fuel smaller than a pea and got back more energy than the lasers put into that pellet. That was the first time it ever happened. The hard part is making it work efficiently enough to actually run a power plant. The lasers themselves used about 100 times more electricity from the wall than the fusion released. Closing that gap is the engineering challenge of the century, and right now dozens of companies around the world are racing to do it."
      },
      {
        level: 2,
        label: "The mechanism",
        body: "Fusion plants burn deuterium and tritium, heavy hydrogen isotopes. Heated to 150 million degrees Celsius, atoms shed their electrons to form plasma. Nuclei slam together and fuse, producing helium and a high-energy neutron. That neutron carries 80% of the energy and heats a surrounding blanket, which drives a steam turbine. Two main confinement strategies compete. Magnetic confinement, including tokamaks and stellarators, uses shaped magnetic fields to keep plasma from touching walls. Inertial confinement, used at NIF, compresses a tiny frozen fuel pellet with synchronized lasers until it implodes and ignites. A third family, magnetized target fusion used by Helion Energy, sits between the two. The central metric is Q: energy out divided by energy deposited in the plasma. NIF's December 2022 experiment hit Q approximately 1.5. A commercial plant needs wall-plug Q above 5 to 10. That gap is the current frontier."
      },
      {
        level: 3,
        label: "The hard part",
        body: "Three unsolved problems dominate. First, tritium supply: tritium is radioactive with a 12-year half-life and barely exists in nature. Every commercial reactor must breed its own tritium via neutron bombardment of a lithium blanket. No facility has demonstrated a tritium breeding ratio above 1.0 at scale. The world's entire tritium inventory is a few kilograms, held at Darlington, Canada. Second, plasma disruptions: instabilities can quench tokamak plasma in milliseconds and dump stored energy into the wall. Commercial plants must operate for years without disruptions. Third, neutron materials: 14 MeV fusion neutrons activate and degrade structural steel at rates that require qualifying entirely new material classes, a decades-long process requiring neutron flux facilities that do not yet exist. ITER in France adopted a new baseline in November 2024 that pushes its first research operations to 2034 and full deuterium-tritium operation to 2039. Commonwealth Fusion Systems is constructing SPARC in Devens, Massachusetts, using 20-tesla REBCO superconducting magnets validated by DOE in September 2025, and now targets first plasma in 2027."
      },
      {
        level: 4,
        label: "The frontier",
        body: "The field has bifurcated into large-tokamak programs and private alternatives. CFS bets that 20-tesla REBCO tape compresses a net-energy tokamak to a scale fundable privately. SPARC is roughly 75% built in Devens; CFS installed the first of 18 toroidal-field magnets in early 2026, holds a radioactive materials license, and now targets first plasma in 2027 with Q greater than 1 to follow as fast as possible. The follow-on ARC plant, named the Fall Line Fusion Power Station in Chesterfield County, Virginia, carries a 200 MW Google offtake signed June 2025 and targets grid power in the early 2030s. Helion's field-reversed Polaris machine reached 150 million degrees Celsius in early 2026 and is the first private device to measure deuterium-tritium fusion, though its 2028 Orion delivery to Microsoft remains widely doubted. Inertial fusion faces a deeper problem: NIF operates at roughly one shot per day; a commercial driver needs 10 shots per second with wall-plug efficiency above 10 percent. Stellarators, including Wendelstein 7-X in Germany and Type One Energy in the US, eliminate disruptions via 3D magnetic geometry but lag tokamaks. The metrics that would change minds: SPARC plasma Q above 2, or any private device delivering net electricity to a grid before 2032."
      }
    ],

    timeline: {
      milestones: [
        {
          id: "m1",
          title: "NIF achieves fusion ignition, first scientific breakeven",
          kind: "breakthrough",
          years: { optimistic: 2022, consensus: 2022, skeptical: 2022 },
          detail: "On December 5, 2022, the National Ignition Facility at Lawrence Livermore delivered 2.05 MJ of laser energy to a fuel capsule and measured 3.15 MJ of fusion energy output, Q approximately 1.5 relative to laser input. NIF repeated ignition in 2023 and 2024 with increasing yield. This proved the inertial confinement physics. Wall-plug energy balance remained deeply negative because the laser facility consumed roughly 400 MJ from the electrical grid per shot.",
          done: true
        },
        {
          id: "m2",
          title: "CFS demonstrates 20-tesla REBCO magnet, DOE validates for SPARC",
          kind: "breakthrough",
          years: { optimistic: 2021, consensus: 2021, skeptical: 2021 },
          detail: "In September 2021, Commonwealth Fusion Systems and MIT demonstrated a 20-tesla high-temperature superconducting magnet using REBCO tape, the enabling technology for compact private tokamaks. The U.S. Department of Energy independently validated production-grade SPARC magnets in September 2025 after a month of rigorous acceptance testing. Stronger magnets allow smaller machines, which is the CFS economic argument.",
          done: true
        },
        {
          id: "m3",
          title: "SPARC achieves plasma Q greater than 2",
          kind: "breakthrough",
          years: { optimistic: 2028, consensus: 2031, skeptical: 2037 },
          detail: "CFS's demonstration tokamak in Devens, Massachusetts reaches plasma energy gain above 2. As of early 2026 SPARC is roughly 75% built, with the first of 18 toroidal-field magnets installed; CFS now targets first plasma in 2027 and Q greater than 1 soon after. This milestone would confirm the high-field HTS tokamak design at commercially relevant scale and green-light the ARC power plant.",
          done: false
        },
        {
          id: "m4",
          title: "Tritium breeding ratio above 1.0 demonstrated in a blanket test",
          kind: "breakthrough",
          years: { optimistic: 2030, consensus: 2038, skeptical: 2050 },
          detail: "A fusion device demonstrates that its lithium blanket breeds more tritium than the plasma consumes. No facility has done this at scale. Without this, a fleet of fusion plants cannot be fueled. ITER is designed to test breeding blanket modules, but repeated schedule delays mean a private pilot plant may achieve this first.",
          done: false
        },
        {
          id: "m5",
          title: "First wall-plug net electricity from any fusion device",
          kind: "deployment",
          years: { optimistic: 2030, consensus: 2040, skeptical: 2055 },
          detail: "A fusion facility produces more electricity than the entire plant consumes, including magnets, heating systems, and auxiliaries. Helion's Orion plant targets 50 MW to Microsoft by 2028. CFS targets ARC in the early 2030s. Independent analysts place the consensus arrival around 2040.",
          done: false
        },
        {
          id: "m6",
          title: "First commercial fusion plant energizes the grid",
          kind: "deployment",
          years: { optimistic: 2035, consensus: 2048, skeptical: 2065 },
          detail: "A fusion plant begins delivering electricity commercially on a sustained basis. Requires solving plasma physics, tritium breeding, neutron materials degradation, and regulatory licensing simultaneously. No licensing framework for a private fusion power plant exists in any major jurisdiction as of 2026.",
          done: false
        },
        {
          id: "m7",
          title: "Fusion supplies 1% of global electricity",
          kind: "scaleup",
          years: { optimistic: 2045, consensus: 2060, skeptical: 2080 },
          detail: "Fusion plants collectively provide roughly 300 TWh per year, about 1% of 2056 projected global electricity demand. Nuclear fission took approximately 20 years from first commercial plant to 1% of global electricity. Fusion will require serial manufacturing of REBCO tape and tritium breeding systems at industrial scale before fleet-level deployment is achievable.",
          done: false
        }
      ],
      branches: [
        {
          id: "b1",
          name: "Magnetic confinement, high-field tokamak path",
          fromMilestone: "m3",
          probability: 0.50,
          summary: "CFS SPARC and ARC validate the compact HTS tokamak. This is the path with the most private capital, over two billion dollars to CFS, and the most rigorous independent validation of its core magnet technology. ITER informs materials science in parallel.",
          milestones: [
            {
              id: "b1m1",
              title: "ARC power plant construction begins",
              kind: "scaleup",
              years: { optimistic: 2031, consensus: 2038, skeptical: 2050 },
              detail: "CFS breaks ground on ARC, its commercial-scale fusion plant targeting roughly 400 MWe output, following a successful SPARC. Requires regulatory approval, tritium supply chain, and financing estimated at ten to twenty billion dollars.",
              done: false
            },
            {
              id: "b1m2",
              title: "ITER achieves full deuterium-tritium operations",
              kind: "scaleup",
              years: { optimistic: 2039, consensus: 2043, skeptical: 2055 },
              detail: "The 35-nation international tokamak in Cadarache, France operates with D-T plasma at design performance of Q equals 10 in the plasma. Even on a late schedule it produces irreplaceable data on tritium breeding, materials activation, and long-pulse plasma control for the broader field.",
              done: false
            }
          ]
        },
        {
          id: "b2",
          name: "Inertial confinement, laser path",
          fromMilestone: "m1",
          probability: 0.15,
          summary: "NIF descendants and next-generation laser facilities scale from the 2022 ignition result toward a repetition-rate driver plant. The path requires laser wall-plug efficiency above 10 percent and repetition rates above 10 Hz, both orders of magnitude beyond NIF.",
          milestones: [
            {
              id: "b2m1",
              title: "High-repetition diode-pumped laser achieves 10 Hz ignition-class shots",
              kind: "breakthrough",
              years: { optimistic: 2032, consensus: 2042, skeptical: 2060 },
              detail: "A laser driver for an inertial fusion power plant must fire ten or more shots per second with wall-plug efficiency above 10 percent. NIF operates at roughly one shot per day with efficiency below 1 percent. Xcimer Energy and Marvel Fusion are pursuing diode-pumped solid-state architectures; no demonstrated path to the required performance exists.",
              done: false
            },
            {
              id: "b2m2",
              title: "Inertial fusion pilot plant reaches wall-plug net electricity",
              kind: "breakthrough",
              years: { optimistic: 2040, consensus: 2055, skeptical: 2075 },
              detail: "A laser-driven plant produces net electricity. Economics also depend on target fabrication cost, which must fall from thousands of dollars per target to cents at commercial repetition rates. No target manufacturing process approaching that cost exists.",
              done: false
            }
          ]
        },
        {
          id: "b3",
          name: "Alternative concepts, field-reversed and magnetized-target path",
          fromMilestone: "m3",
          probability: 0.20,
          summary: "Helion Energy's field-reversed configuration and General Fusion's magnetized target occupy a middle ground between tokamaks and inertial confinement. Helion's Microsoft PPA has drawn enormous attention. Whether the physics scales to power-plant conditions is unproven.",
          milestones: [
            {
              id: "b3m1",
              title: "Helion Orion delivers electricity to Microsoft grid",
              kind: "deployment",
              years: { optimistic: 2028, consensus: 2034, skeptical: 2044 },
              detail: "Helion broke ground on the Orion plant in Everett, Washington in July 2025 and has contractual penalties if 50 MW is not delivered to Microsoft by a negotiated date. Independent physicists widely consider 2028 optimistic; the consensus reflects realistic ramp time if the field-reversed configuration physics scales as claimed.",
              done: false
            },
            {
              id: "b3m2",
              title: "Field-reversed configuration validated at Q greater than 1",
              kind: "breakthrough",
              years: { optimistic: 2027, consensus: 2033, skeptical: 2046 },
              detail: "A field-reversed configuration device demonstrates net energy from the plasma. Helion's Polaris machine, assembled at the end of 2024, reached 150 million degrees Celsius in early 2026 and is the first private device to measure deuterium-tritium fusion, but has not yet shown net energy. Results will either confirm or severely challenge the magnetized-target branch.",
              done: false
            }
          ]
        }
      ]
    },

    backcast: {
      today: [
        "NIF achieved fusion ignition in December 2022 and repeated it in 2023 and 2024; wall-plug energy balance remains deeply negative, with the facility consuming roughly 400 MJ per shot from the grid.",
        "Commonwealth Fusion Systems is roughly 75% through SPARC assembly in Devens, Massachusetts, installed the first of 18 toroidal-field magnets in early 2026, holds a radioactive materials license, and now targets first plasma in 2027.",
        "CFS signed a 200 MW Google offtake in June 2025 for its first ARC plant, the Fall Line Fusion Power Station in Chesterfield County, Virginia, won the first US Conditional Use Permit for a commercial fusion plant, and became the first fusion company to apply to PJM grid interconnection.",
        "ITER in Cadarache, France adopted a new baseline in November 2024: start of research operations 2034 with deuterium, full magnetic energy 2036, and start of deuterium-tritium operation 2039.",
        "Helion Energy broke ground on the Orion commercial plant in July 2025 under a 50 MW-plus PPA with Microsoft targeting 2028; its Polaris machine reached 150 million degrees Celsius in early 2026 and is the first private device to measure deuterium-tritium fusion.",
        "The Fusion Industry Association counts roughly 45 private fusion companies globally with over 7 billion dollars in cumulative private investment; General Fusion's 2025 funding crunch and layoffs underscored the sector's financing fragility."
      ],
      dependencies: [
        {
          name: "High-temperature superconducting REBCO tape",
          why: "Required for the high-field tokamak magnets that allow smaller, commercially viable machines; without it, tokamaks must be ITER-sized.",
          state: "Manufactured by Fujikura, SuperPower, and others; CFS is manufacturing proprietary tape in-house for SPARC. Yield at production scale is the current constraint."
        },
        {
          name: "Tritium supply and breeding blanket technology",
          why: "Tritium fuel is radioactive with a 12-year half-life and must ultimately be bred inside the reactor blanket from lithium; no commercial breeding system has been built.",
          state: "The world's tritium inventory is a few kilograms held at Darlington, Canada. A fleet of fusion plants requires self-sustaining breeding ratios above 1.05 from day one of operation."
        },
        {
          name: "Plasma-facing and structural materials qualified for fusion neutrons",
          why: "14 MeV fusion neutrons degrade structural materials faster than fission neutrons; qualifying materials requires decades of neutron irradiation data at fusion-relevant fluences.",
          state: "The International Fusion Materials Irradiation Facility IFMIF-DONES is under development in Spain but not yet operating; no fusion-relevant materials qualification database exists."
        },
        {
          name: "Real-time plasma disruption control",
          why: "Tokamak disruptions can destroy the first wall in milliseconds; commercial plants need years of disruption-free operation.",
          state: "DeepMind published a reinforcement-learning plasma control paper in Nature in 2022; disruption prediction and mitigation is being integrated at JET and in SPARC design."
        }
      ],
      supplyChain: [
        {
          item: "REBCO superconducting tape",
          why: "The enabling material for high-field HTS magnets; tape production volume gates SPARC assembly and all follow-on compact tokamaks.",
          players: "Fujikura (Japan), SuperPower (US, Furukawa subsidiary), AMSC, SuNAM (South Korea), THEVA (Germany)",
          chokepoint: true
        },
        {
          item: "Lithium-6 enriched, for tritium breeding blankets",
          why: "Natural lithium is only 7.5% Li-6, which must be enriched to breed sufficient tritium. China controls most global lithium isotope separation capacity.",
          players: "China controls most enrichment; US Oak Ridge enriched Li-6 production shut down in 1963 and has not been restarted at scale.",
          chokepoint: true
        },
        {
          item: "Beryllium, neutron multiplier for breeding blankets",
          why: "Used in tritium breeding blankets to multiply neutron flux and increase tritium production per fusion reaction.",
          players: "Materion (US) is the dominant Western supplier; global supply is small and geographically concentrated.",
          chokepoint: true
        },
        {
          item: "High-power laser components for inertial path",
          why: "Large neodymium-doped glass amplifiers and precision optics are required for NIF-class and commercial inertial fusion drivers.",
          players: "Hamamatsu (Japan), Schott (Germany), nLIGHT (US); no commercial-scale supplier exists for fusion-grade repetition-rate laser slabs.",
          chokepoint: false
        }
      ],
      leadingIndicators: [
        "SPARC first plasma date, targeted late 2020s by CFS; any slippage signals the 2030s commercial timeline is at risk.",
        "Helion Polaris commissioning results; watch for renegotiation of the Microsoft 2028 PPA as a signal of schedule pressure.",
        "REBCO tape annual production volume; if global output does not grow at least fivefold by 2030, the magnet supply chain becomes the binding constraint.",
        "First regulatory framework for a private fusion device anywhere in the world; no licensing pathway currently exists in the US or EU.",
        "IFMIF-DONES construction progress in Spain; the only planned facility that can generate materials data at fusion-relevant neutron flux."
      ]
    },

    people: [
      {
        name: "Dennis Whyte",
        role: "Hitachi America Professor of Engineering; SPARC co-originator",
        org: "MIT Plasma Science and Fusion Center",
        note: "Whyte designed the graduate course that spawned SPARC and is the intellectual architect of the high-field compact tokamak strategy; he stepped down as PSFC director in 2023 to focus on research and co-founded Commonwealth Fusion Systems."
      },
      {
        name: "Bob Mumgaard",
        role: "Co-founder and CEO",
        org: "Commonwealth Fusion Systems",
        note: "MIT plasma physics PhD leading the world's largest private fusion company; drives the SPARC-to-ARC commercial roadmap and is the primary public voice of the high-field tokamak case."
      },
      {
        name: "Steven Cowley",
        role: "Director",
        org: "Princeton Plasma Physics Laboratory (DOE)",
        note: "Knighted British theoretical physicist and director of the leading US public fusion lab; offers a calibrated independent view on what plasma physics will and will not allow in near-term private company timelines."
      },
      {
        name: "Sibylle Gunter",
        role: "Scientific Director",
        org: "Max Planck Institute for Plasma Physics, Germany",
        note: "Leads the Wendelstein 7-X stellarator program, the most advanced test of a disruption-free magnetic geometry; her results determine whether the tokamak is truly the only viable confinement path."
      },
      {
        name: "Sabine Hossenfelder",
        role: "Research fellow and science communicator",
        org: "Munich Center for Mathematical Philosophy",
        note: "Prominent physicist who has publicly argued that fusion's always-30-years-away reputation reflects genuine unsolved physics, not just engineering lag; a useful counterweight to industry self-reporting optimism."
      }
    ],

    reading: [
      {
        title: "The Star Builders: Nuclear Fusion and the Race to Power the Planet",
        author: "Arthur Turrell",
        year: 2021,
        type: "book",
        note: "The most accessible and current survey of the private fusion landscape, written by a plasma physicist; covers CFS, TAE, Helion, and General Fusion with equal rigor."
      },
      {
        title: "Global Fusion Industry Report 2024",
        author: "Fusion Industry Association",
        year: 2024,
        type: "report",
        note: "Annual census of 45 private fusion companies tracking investment, workforce, and timeline confidence; essential for calibrating industry sentiment while noting strong self-reporting bias."
      },
      {
        title: "Achievement of Target Gain Larger than Unity in an Inertial Fusion Experiment",
        author: "Zylstra et al., NIF Team",
        year: 2022,
        type: "paper",
        note: "The Physical Review Letters paper documenting the NIF December 2022 ignition result; the primary scientific record of the first laboratory achievement of Q greater than 1."
      },
      {
        title: "High-field approach to fusion energy using high-temperature superconducting magnets",
        author: "Greenwald, M. et al.",
        year: 2018,
        type: "paper",
        note: "The founding MIT PSFC paper proposing SPARC; articulates why 20-tesla REBCO magnets change the commercial fusion equation and is the intellectual blueprint for CFS."
      },
      {
        title: "Bringing Fusion to the U.S. Grid: Final Report",
        author: "National Academies of Sciences, Engineering, and Medicine",
        year: 2021,
        type: "report",
        note: "The US roadmap that endorsed the pilot plant strategy; defines the milestones and decision points that private companies are now racing to hit and provides the most rigorous independent timeline assessment."
      }
    ]
  },

  /* =========================================================================
     2. GRID-SCALE ENERGY STORAGE
     ========================================================================= */
  {
    id: "energy-storage",
    name: "Grid-Scale Energy Storage",
    shortName: "Storage",
    tagline: "Renewables already win on cost; storage is the lock that lets them run the whole grid.",
    domain: "energy",
    glyph: "▮",
    status: "scaling",
    consequence: 8,

    probability: {
      value: 0.92,
      definition: "Grid-scale storage across all chemistries exceeds 3 TWh of installed capacity globally by 2056, enabling sustained renewable penetration above 80% in at least five major grids.",
      basis: "BloombergNEF's December 2025 battery price survey recorded lithium-ion stationary storage packs at 70 dollars per kWh, down 45% in a single year and now the cheapest battery segment, while the all-segment average hit a record 108 dollars per kWh. IEA Net Zero Scenario projects 970 GW of grid-scale storage by 2030 alone. At the current deployment trajectory, 3 TWh by 2056 requires no technology breakthrough, only continued cost decline and manufacturing scale-up already underway. Author estimate 0.92, high confidence because the technology is already deploying at scale. Main risk is critical mineral supply constraints slowing the cost curve.",
      range: [0.80, 0.97]
    },

    arrival: {
      optimistic: 2032,
      consensus: 2038,
      skeptical: 2048
    },

    whyItMatters: "Solar and wind are already the cheapest new electricity sources in history, but they generate power when the sun shines and wind blows. Storage is the missing piece that lets renewables cover firm power. Cheap long-duration storage makes fossil-fuel peaker plants optional and enables seasonal energy shifting. The storage cost curve is the single most important number in the energy transition.",

    feynman: [
      {
        level: 1,
        label: "The kitchen-table version",
        body: "Your phone battery is a pocket that holds electricity as chemical energy. When you plug in, electrons flow in and get stored. When you use the phone, the chemistry runs backward and electrons flow back out. Now imagine that pocket being the size of a warehouse and so cheap that it costs less than a month of electricity bills to store enough power for a whole town for a day. That is what grid-scale storage promises. The price of lithium-ion batteries, the same chemistry as your phone, fell over 97% across three decades. At about 70 dollars per kilowatt-hour for stationary packs in 2025, storage is now the cheapest battery segment of all and already beats building a gas peaker plant to handle cloudy days in many markets. The next challenge is storing electricity not just overnight, but for days or weeks, to bridge windless stretches. That requires different chemistry. Iron-air batteries literally rust and unrust to store energy at near-zero material cost. Flow batteries store energy in tanks of liquid and can discharge for days. Sodium-ion batteries use abundant table-salt relatives instead of scarce lithium. All of these are real and moving from lab to factory right now."
      },
      {
        level: 2,
        label: "The mechanism",
        body: "All electrochemical storage trades electrons through a circuit while ions move through an electrolyte between two electrodes. In lithium-ion cells, lithium ions shuttle through the electrolyte while electrons flow externally. Lithium iron phosphate, LFP, chemistry dominates stationary storage because it is cheap, safe, and has excellent cycle life. Sodium-ion batteries substitute sodium for lithium; sodium is roughly 1,000 times more abundant in Earth's crust. CATL launched commercial sodium-ion production under the Naxtra brand in 2025-2026 at reported cell costs of around 19 dollars per kWh, compared to roughly 55 to 60 dollars per kWh for LFP at volume. For long duration from 8 to 100-plus hours, flow batteries store energy in liquid electrolyte tanks kept separate from the electrodes. Vanadium redox flow batteries dominate with 20,000-plus cycle life. Iron-air batteries oxidize iron pellets to discharge and reduce them to charge; iron and air are essentially free, enabling Form Energy's target cost of 20 dollars per kWh at scale, though round-trip efficiency is roughly 50% versus 85 to 90% for lithium-ion."
      },
      {
        level: 3,
        label: "The hard part",
        body: "Short-duration storage of 2 to 4 hours is largely solved at scale. The remaining frontier is long duration and seasonal. Key metrics are levelized cost of storage in dollars per MWh, round-trip efficiency, cycle life, and calendar life. For the base case lithium path, the binding constraint is not cell chemistry but supply chain. Sixty to seventy percent of global lithium hydroxide processing is in China. IEA projects lithium demand growing 40-fold by 2040 under aggressive climate scenarios; the mining and processing pipeline is not on track. For long-duration storage, iron-air's 50% round-trip efficiency means you lose half the energy you put in, a serious penalty that limits economics to multi-day or seasonal balancing applications where capital cost matters more than cycling losses. Vanadium flow batteries have excellent cycle life but vanadium supply is 61% China-sourced. The deepest unsolved problem is seasonal storage: shifting summer solar surplus to winter heating demand requires either hydrogen with 35 to 40% round-trip efficiency, compressed air in geological formations, or pumped hydro at a scale the planet does not have. Achieving 100% renewables in high-latitude grids without nuclear baseload depends on cracking this problem."
      },
      {
        level: 4,
        label: "The frontier",
        body: "The cost trajectory follows Wright's Law with unusual fidelity: every doubling of cumulative lithium-ion production has yielded roughly 18 to 20% cost reduction since 2010. BNEF's December 2025 survey recorded stationary storage packs at 70 dollars per kWh, a 45% single-year drop driven by cell overcapacity and the LFP shift, making stationary the cheapest segment for the first time, below the 99 dollar BEV pack and the 108 dollar all-segment average. The open question is whether the learning rate continues, decelerates from mineral constraints, or accelerates via chemistry discontinuities. The two most watched candidates for discontinuity are sodium-ion at scale, where CATL began Naxtra mass production in December 2025 at an energy density near 175 Wh per kg with large-scale storage and EV deployment across 2026, and iron-air at scale, where Form Energy's first commercial pilot with Great River Energy in Minnesota came online and the 85 MW / 8,500 MWh Lincoln, Maine plant heads toward 2027 construction. The supply-chain chokepoint most constraining the base case is lithium hydroxide processing and Chinese graphite anode controls. Solid-state batteries, with ceramic electrolytes enabling lithium-metal anodes and twice the energy density, are primarily a premium EV and aviation story; grid storage does not require energy density and the manufacturing barriers are real."
      }
    ],

    timeline: {
      milestones: [
        {
          id: "m1",
          title: "Hornsdale Power Reserve: first utility lithium-ion storage at scale",
          kind: "deployment",
          years: { optimistic: 2017, consensus: 2017, skeptical: 2017 },
          detail: "Tesla's 100 MW / 129 MWh Hornsdale Power Reserve in South Australia, commissioned November 2017, was the world's largest grid-scale lithium-ion battery at the time. It demonstrated that battery storage could stabilize a real grid, respond in milliseconds, and outcompete gas peakers on frequency services. It established lithium-ion as the reference technology for grid storage.",
          done: true
        },
        {
          id: "m2",
          title: "BloombergNEF records lithium-ion stationary storage packs at 70 per kWh",
          kind: "scaleup",
          years: { optimistic: 2025, consensus: 2025, skeptical: 2025 },
          detail: "BNEF's December 2025 battery price survey recorded lithium-ion stationary storage pack prices at 70 dollars per kWh, a 45% single-year drop that made stationary storage the cheapest battery segment for the first time, below the 99 dollar BEV pack. The all-segment average hit a record 108 dollars per kWh. Cell overcapacity and the LFP shift drove the fall despite rising metal prices. This confirmed Wright's Law is still operating on batteries.",
          done: true
        },
        {
          id: "m3",
          title: "Form Energy begins first commercial iron-air deployment",
          kind: "deployment",
          years: { optimistic: 2025, consensus: 2025, skeptical: 2027 },
          detail: "Form Energy brought its first commercial iron-air pilot, a 1.5 MW / 150 MWh system with Great River Energy in Cambridge, Minnesota, toward operation in 2025, and is advancing an 85 MW / 8,500 MWh plant in Lincoln, Maine backed by a 147 million dollar DOE grant toward 2027 construction. Form raised 405 million dollars in October 2024 led by T. Rowe Price with GE Vernova. These 100-hour duration systems are the first commercial deployment of multi-day electrochemical storage at any scale.",
          done: true
        },
        {
          id: "m4",
          title: "CATL Naxtra sodium-ion reaches mass-market grid deployment",
          kind: "scaleup",
          years: { optimistic: 2026, consensus: 2028, skeptical: 2033 },
          detail: "CATL began mass production of its Naxtra sodium-ion battery in December 2025 at an energy density near 175 Wh per kg, comparable to LFP, and confirmed large-scale 2026 deployment across battery-swap, passenger and commercial vehicles, and energy storage. Naxtra was the first sodium-ion cell to pass China's GB 38031-2025 safety standard. If sodium-ion holds cost parity at scale, it could displace LFP for short-to-medium duration grid applications and reduce dependence on lithium supply chains.",
          done: false
        },
        {
          id: "m5",
          title: "Global grid-scale storage exceeds 1 TWh of installed capacity",
          kind: "scaleup",
          years: { optimistic: 2030, consensus: 2033, skeptical: 2038 },
          detail: "Total deployed grid-scale battery storage worldwide surpasses 1 TWh. IEA Net Zero Scenario projects 970 GW, roughly 2 to 4 TWh depending on average duration, by 2030. At this scale, storage begins to materially affect wholesale electricity price patterns in leading markets and justifies the next tier of renewable investment.",
          done: false
        },
        {
          id: "m6",
          title: "Long-duration storage enables 80%-plus renewable grid in a major market",
          kind: "deployment",
          years: { optimistic: 2034, consensus: 2042, skeptical: 2055 },
          detail: "A national or regional grid with more than 50 GW of peak demand achieves 80% or more renewable electricity on an annual basis, with storage handling multi-day balancing rather than fossil backup. California, Germany, or Australia are the most likely candidates. This milestone proves storage has done its job in the energy transition.",
          done: false
        },
        {
          id: "m7",
          title: "3 TWh global installed storage, 5 major grids above 80% renewable",
          kind: "scaleup",
          years: { optimistic: 2038, consensus: 2048, skeptical: 2060 },
          detail: "The headline milestone for this technology entry: 3 TWh installed globally and at least five major grids operating above 80% renewable penetration annually. This is the threshold at which storage is structurally load-bearing in the global electricity system, not just a frequency-response or overnight-shifting tool.",
          done: false
        }
      ],
      branches: [
        {
          id: "b1",
          name: "Lithium incremental plus long-duration complement",
          fromMilestone: "m3",
          probability: 0.45,
          summary: "LFP and sodium-ion continue their cost decline and dominate 2 to 12-hour storage. Iron-air and flow batteries handle multi-day needs. No single technology cracks seasonal storage; grids rely on hydrogen with CCS or remaining gas for deep-winter supply in high-latitude markets.",
          milestones: [
            {
              id: "b1m1",
              title: "LFP pack cost falls below 40 per kWh at the system level",
              kind: "scaleup",
              years: { optimistic: 2028, consensus: 2034, skeptical: 2042 },
              detail: "At 40 dollars per kWh system cost, lithium-ion storage becomes cheaper than operating existing gas peakers in most electricity markets, accelerating retirement of fossil backup capacity and making 70% renewable grids straightforward economics.",
              done: false
            },
            {
              id: "b1m2",
              title: "Non-Chinese LFP gigafactory capacity exceeds 500 GWh per year",
              kind: "scaleup",
              years: { optimistic: 2029, consensus: 2034, skeptical: 2043 },
              detail: "Battery factories in the US, Europe, and India collectively reach 500 GWh per year of LFP production, reducing geopolitical exposure in the storage supply chain and unlocking IRA and EU subsidy-driven cost reductions.",
              done: false
            }
          ]
        },
        {
          id: "b2",
          name: "Iron-air long-duration breakthrough displaces peakers globally",
          fromMilestone: "m3",
          probability: 0.35,
          summary: "Form Energy scales iron-air manufacturing and costs fall below 10 dollars per kWh capital cost. The 100-hour discharge capability makes multi-day storage the standard peaker replacement. Flow batteries fill the 12 to 100-hour segment.",
          milestones: [
            {
              id: "b2m1",
              title: "Iron-air capital cost reaches 10 per kWh at GWh scale",
              kind: "scaleup",
              years: { optimistic: 2030, consensus: 2038, skeptical: 2052 },
              detail: "Form Energy's stated target economics. Iron and air are essentially free materials, so the cost is manufacturing and balance-of-plant. At 10 dollars per kWh capital cost, 100-hour storage is unambiguously cheaper than any fossil backup option across all climate zones.",
              done: false
            },
            {
              id: "b2m2",
              title: "Long-duration storage fleet exceeds 500 GWh installed globally",
              kind: "scaleup",
              years: { optimistic: 2035, consensus: 2046, skeptical: 2058 },
              detail: "Multi-day storage at this scale materially reduces gas peaker requirements in high-renewable markets. Vanadium flow batteries, iron-air, and zinc-bromine systems collectively compete for the 12 to 100-hour duration segment.",
              done: false
            }
          ]
        },
        {
          id: "b3",
          name: "Sodium-ion displaces lithium as the dominant stationary chemistry",
          fromMilestone: "m4",
          probability: 0.20,
          summary: "Sodium-ion achieves cost parity with LFP in the early 2030s and then captures stationary storage market share rapidly, reducing dependence on lithium carbonate supply chains and pushing system costs below 30 dollars per kWh ahead of the base-case schedule.",
          milestones: [
            {
              id: "b3m1",
              title: "Sodium-ion achieves cost parity with LFP at the cell level",
              kind: "breakthrough",
              years: { optimistic: 2027, consensus: 2031, skeptical: 2038 },
              detail: "Sodium-ion cells reach equivalent cost per kWh to LFP at comparable cycle life, while using no lithium, cobalt, or nickel. CATL and BYD are the most likely first achievers given their sodium-ion programs already in commercial production.",
              done: false
            },
            {
              id: "b3m2",
              title: "Sodium-ion annual stationary shipments exceed 100 GWh",
              kind: "scaleup",
              years: { optimistic: 2028, consensus: 2033, skeptical: 2042 },
              detail: "Annual sodium-ion battery shipments for grid-scale stationary storage exceed 100 GWh, establishing a supply chain and learning curve that begins to challenge LFP's position as the dominant stationary chemistry.",
              done: false
            }
          ]
        }
      ]
    },

    backcast: {
      today: [
        "Lithium-ion stationary storage packs fell to 70 dollars per kWh in 2025, down 45% in a single year and now the cheapest battery segment of all, while the all-segment average hit a record 108 dollars per kWh (BloombergNEF December 2025 survey).",
        "Form Energy's first commercial iron-air pilot with Great River Energy in Minnesota came online, and its 85 MW / 8,500 MWh Lincoln, Maine plant is heading toward 2027 construction; Form raised 405 million dollars in October 2024 led by T. Rowe Price with GE Vernova.",
        "CATL began mass production of its Naxtra sodium-ion battery in December 2025, the first sodium-ion cell to pass China's GB 38031-2025 safety standard, with large-scale 2026 deployment across vehicles and energy storage.",
        "Vanadium redox flow batteries held 61.5% of the flow battery market in 2025; over 620 modular systems deployed globally in 2024 across utility and industrial applications.",
        "Global grid-scale storage deployment is on a trajectory consistent with IEA Net Zero Scenario projections of 970 GW by 2030."
      ],
      dependencies: [
        {
          name: "Lithium hydroxide processing capacity outside China",
          why: "Converting spodumene or brine to battery-grade lithium hydroxide is the rate-limiting step; 60 to 70% of processing is in China and new plants take 5 to 7 years to build.",
          state: "Albemarle, SQM, and Ganfeng are expanding; Livent and Piedmont Lithium are developing US-based processing. Timelines are tight relative to projected demand growth."
        },
        {
          name: "LFP cathode material manufacturing outside China",
          why: "LFP cathode production is 80%-plus China-concentrated; geographic diversification is required for supply security in US and European storage markets.",
          state: "IRA incentives are driving new LFP cathode investments in the US; BASF and Umicore are scaling in Europe. Non-Chinese capacity remains small relative to demand through 2030."
        },
        {
          name: "Grid interconnection and permitting",
          why: "Storage projects face multi-year interconnection queues; permitted capacity cannot reach the grid without this infrastructure.",
          state: "FERC Order 2023 in the US aimed to reform queues; early results show modest improvement but backlogs persist at 5-plus years average in many regions."
        },
        {
          name: "Iron-air manufacturing scale-up",
          why: "Iron-air has no established manufacturing base; Form Energy's Form Factory 1 in Weirton, West Virginia is the first large-scale production facility.",
          state: "Form Factory 1 began trial production in September 2024; commercial production and expansion underway through 2025 to 2026."
        }
      ],
      supplyChain: [
        {
          item: "Lithium carbonate and lithium hydroxide",
          why: "Primary inputs for LFP and NMC cathode materials; price volatility directly affects grid storage project economics.",
          players: "SQM and Albemarle (Chile), Pilbara Minerals (Australia), Ganfeng and Tianqi (China)",
          chokepoint: true
        },
        {
          item: "LFP cathode active material",
          why: "Dominant chemistry for stationary storage; production is 80%-plus concentrated in China, creating supply security exposure for Western markets.",
          players: "CATL, BYD, Gotion (China); BASF, Umicore (Europe, scaling); limited US capacity under IRA development",
          chokepoint: true
        },
        {
          item: "Vanadium electrolyte",
          why: "The active material in vanadium redox flow batteries; 61% China-sourced, creating supply and price concentration risk for the flow battery path.",
          players: "EVRAZ, AMG Advanced Metallurgy (Netherlands), Bushveld Minerals (South Africa)",
          chokepoint: true
        },
        {
          item: "Iron feedstock for iron-air batteries",
          why: "Form Energy's iron-air uses iron pellets as the anode; iron is abundant globally, which is the primary economic advantage of this chemistry.",
          players: "Cleveland-Cliffs, US Steel, global iron ore majors; no supply chokepoint",
          chokepoint: false
        },
        {
          item: "Grid inverters and power electronics",
          why: "Every storage system requires grid-interface inverters; IGBT and SiC semiconductor shortages can delay projects independent of battery availability.",
          players: "Sungrow and Huawei (China-dominant), SMA (Germany), SolarEdge (Israel)",
          chokepoint: false
        }
      ],
      leadingIndicators: [
        "BNEF annual battery price survey published each December: with stationary packs at 70 dollars per kWh in 2025, watch for system-level prices approaching 50 dollars per kWh, the threshold that makes gas peakers uneconomic without subsidy.",
        "Form Energy iron-air performance data from the Great River Energy pilot and Lincoln, Maine plant: first real-world efficiency, degradation, and operational cost data for 100-hour storage.",
        "CATL Naxtra sodium-ion pricing through 2026 and 2027: whether sodium-ion holds cost parity with LFP at scale now that mass production has begun.",
        "FERC interconnection queue data: the rate of storage project approvals is as important as technology cost for near-term deployment trajectory.",
        "Vanadium price index: a sustained price spike would materially impair flow battery economics and shift investment toward iron-air and zinc-bromine alternatives."
      ]
    },

    people: [
      {
        name: "Mateo Jaramillo",
        role: "Co-founder and CEO",
        org: "Form Energy",
        note: "Former Tesla Energy VP leading the commercialization of iron-air 100-hour batteries; the most prominent advocate for the thesis that long-duration storage is the next critical gap in the energy transition."
      },
      {
        name: "Donald Sadoway",
        role: "Professor Emeritus of Materials Chemistry",
        org: "MIT",
        note: "Pioneer of liquid metal batteries and co-founder of Ambri for grid-scale liquid metal storage; his research has produced some of the most creative low-cost stationary storage concepts of the past decade."
      },
      {
        name: "Yet-Ming Chiang",
        role: "Professor of Materials Science; Co-founder",
        org: "MIT; Form Energy; A123 Systems",
        note: "Serial battery entrepreneur whose career arc from lithium iron phosphate at A123 to iron-air at Form Energy traces the field's trajectory; his technical bets have proven directionally correct over 20 years."
      },
      {
        name: "Shirley Meng",
        role: "Professor and Chief Scientist, Argonne Collaborative Center for Energy Storage Science",
        org: "University of Chicago and Argonne National Laboratory",
        note: "One of the most cited electrochemists in the field; her work on solid electrolytes and battery characterization sets the technical agenda for next-generation chemistries beyond LFP."
      },
      {
        name: "James Frith",
        role: "Principal Analyst, Energy Storage",
        org: "BloombergNEF",
        note: "Leads the BNEF annual battery price survey, the most widely cited benchmark for the cost trajectory; his Wright's Law analysis is the foundation for most grid storage investment forecasts."
      }
    ],

    reading: [
      {
        title: "BloombergNEF Electric Vehicle Outlook 2024, battery price chapter",
        author: "BloombergNEF",
        year: 2024,
        type: "forecast",
        note: "Contains the annual lithium-ion battery pack price survey and long-run cost projections; the canonical source for the Wright's Law cost curve data cited throughout this brief."
      },
      {
        title: "World Energy Outlook 2024",
        author: "International Energy Agency",
        year: 2024,
        type: "report",
        note: "IEA's authoritative annual energy forecast; the Net Zero Scenario chapter contains the storage deployment projections used as the 2030 trajectory benchmark for this technology entry."
      },
      {
        title: "The Future of Energy Storage",
        author: "MIT Energy Initiative, Brushett, Chiang et al.",
        year: 2022,
        type: "report",
        note: "Comprehensive technical and economic assessment of storage technologies across all durations; the most rigorous independent analysis of long-duration storage economics published in the 2020s."
      },
      {
        title: "The Role of Critical Minerals in Clean Energy Transitions",
        author: "International Energy Agency",
        year: 2021,
        type: "report",
        note: "The IEA's definitive mapping of mineral supply chains for the energy transition; identifies which inputs are chokepoints and on what timescale, including lithium hydroxide processing as the key constraint."
      },
      {
        title: "Empirically grounded technology forecasts and the energy transition",
        author: "Way, R., Ives, M., Mealy, P., Farmer, J.D.",
        year: 2022,
        type: "paper",
        note: "Joule paper modeling technology learning curves across energy technologies; provides the statistical basis for projecting storage costs and shows that aggressive renewable scenarios are economically superior to continued fossil fuel use even under uncertainty."
      }
    ]
  },

  /* =========================================================================
     3. ROOM-TEMPERATURE SUPERCONDUCTORS
     ========================================================================= */
  {
    id: "superconductors",
    name: "Room-Temperature Superconductors",
    shortName: "Superconductors",
    tagline: "Electricity with zero resistance: a law of physics we have not broken yet, but are trying hard to.",
    domain: "energy",
    glyph: "◎",
    status: "lab",
    consequence: 10,

    probability: {
      value: 0.12,
      definition: "A material demonstrates superconductivity at ambient pressure and temperatures above 20 degrees Celsius, is independently replicated in at least three laboratories using resistivity, Meissner effect, and specific heat measurements, and begins entering commercial applications by 2056.",
      basis: "Author estimate, no prediction market has a well-calibrated long-run question on this precise definition. The 12% reflects: (1) the Ranga Dias scandal with three Nature and Physical Review Letters retractions in 2022 to 2023 for data manipulation eroded confidence in near-ambient claims; (2) the LK-99 episode in July to August 2023 definitively debunked by December 2023; (3) genuine theoretical uncertainty about whether ambient-pressure room-temperature superconductivity is achievable in any known material class; (4) the track record since 1987, where every claimed near-room-temperature breakthrough at ambient pressure has failed replication. The estimate is not dismissive: BCS and beyond-BCS mechanisms do not forbid room-temperature Tc; computational screening is accelerating candidate generation; and the field has been surprised before by cuprates in 1986.",
      range: [0.04, 0.28]
    },

    arrival: {
      optimistic: 2038,
      consensus: 2060,
      skeptical: 2100
    },

    whyItMatters: "Superconductors carry electricity with literally zero resistance. Every power line, motor, MRI machine, and computer chip wastes energy as heat because of resistance. A room-temperature ambient-pressure superconductor would eliminate that waste entirely: lossless power grids, compact fusion magnets at no cooling cost, maglev trains, and quantum computers operating without cryogenics. The consequence score is 10 because the applications span every domain of technology. The probability is low because the physics is contested and the field's recent history is a cautionary tale.",

    feynman: [
      {
        level: 1,
        label: "The kitchen-table version",
        body: "When electricity flows through a wire, it is like water rushing through a rocky stream. The rocks slow it down and turn energy into heat. That is resistance, and it is why power lines get warm. In 1911, a Dutch physicist discovered something strange: when he cooled mercury to nearly minus 269 degrees Celsius, resistance vanished completely. Current flowed forever with no energy lost. He called this superconductivity. For over a century, scientists have been hunting for a material that does this at room temperature, not at temperatures colder than outer space. In 2023, a viral video showed a South Korean material called LK-99 apparently levitating at room temperature, seemingly proving it was a superconductor. Dozens of labs rushed to replicate it. Within weeks, the scientific consensus was clear: LK-99 was not a superconductor. The levitation was ordinary magnetism, not the special floating that superconductors do. That same year, a physicist at the University of Rochester had two major papers in the journal Nature retracted after colleagues found evidence his team had manipulated data in claiming room-temperature superconductivity. The dream remains alive. Physicists are now using artificial intelligence to scan millions of possible crystal structures looking for the right one. Nothing in physics forbids it. No one has found it yet."
      },
      {
        level: 2,
        label: "The mechanism",
        body: "Superconductivity arises when electrons pair up and move as a coherent quantum wave rather than as individual particles colliding with the atomic lattice. In conventional superconductors, these Cooper pairs form because electrons attract each other through crystal lattice vibrations called phonons. BCS theory, named for Bardeen, Cooper, and Schrieffer, explains this elegantly for low-temperature metals but predicts a phonon-mediated ceiling of roughly 40 K, far below room temperature. In 1986, Bednorz and Muller discovered copper-oxide ceramics called cuprates that superconduct up to 135 K at ambient pressure. Their mechanism involves strong electron correlations that BCS does not capture and remains disputed after four decades. More recently, hydrogen-rich compounds called superhydrides under extreme pressure, including lanthanum decahydride at 250 K under 170 gigapascals, appear to be conventional phonon-mediated superconductors that achieve high Tc because light hydrogen atoms vibrate at very high frequency. The pressure forces hydrogen into a metallic lattice it would not adopt at ambient conditions. Finding a material whose crystal structure mimics that arrangement without requiring external pressure is the central scientific challenge."
      },
      {
        level: 3,
        label: "The hard part",
        body: "The field has two intersecting problems: physics and integrity. On physics, there is no agreed theoretical framework predicting what material will superconduct at room temperature and ambient pressure. BCS sets a ceiling for phonon-mediated pairing that most theorists believe is well below room temperature; cuprates are theoretically mysterious; superhydrides require pressures equivalent to Earth's lower mantle. The key experimental figures of merit are critical temperature Tc, critical magnetic field, and critical current density. A useful superconductor must satisfy all three. On integrity, the Ranga Dias case at the University of Rochester resulted in three retractions from Nature and Physical Review Letters between 2022 and 2023. Eight of eleven co-authors on his 2023 Nature paper requested retraction, citing misrepresented data. The American Physical Society independent investigation found evidence of misconduct. Separately, LK-99 generated a global replication effort before being debunked within weeks by multiple independent labs. Jorge Hirsch at UC San Diego, the field's most systematic skeptic, published detailed analyses showing that accepted magnetic susceptibility signatures in several published systems were artifacts. His methodological critiques have proven accurate in the Dias case and are now influencing journal standards."
      },
      {
        level: 4,
        label: "The frontier",
        body: "Three credible discovery paths exist. First, superhydrides at reduced pressure: lanthanum decahydride at 250 K under 170 gigapascals and yttrium superhydride at 262 K are real, replicated results from groups including Eremets at Max Planck and Hemley at George Washington University. Theoretical work by Pickard and Needs at Cambridge using AIRSS crystal structure prediction has anticipated most experimentally confirmed superhydride structures. The practical challenge is that 170 gigapascals corresponds to Earth's lower mantle; clathrate cage structures and chemical pre-compression strategies aim to reduce the required pressure by an order of magnitude without losing Tc. Second, unconventional cuprate and nickelate mechanisms: bilayer nickelate La3Ni2O7 superconducts near 80 K under high pressure, and in 2025 compressively strained ambient-pressure (La,Pr)3Ni2O7 thin films reached a Tc onset of roughly 63 K with zero resistance near 37 K, the first sign that nickelate superconductivity can be engineered without a diamond anvil cell. This suggests an electron-correlation pairing mechanism extending beyond cuprates; a first-principles predictive theory for Tc would enable rational material design rather than serendipitous search. Third, AI-guided materials discovery: DeepMind's GNoME generated 2.2 million crystal structure predictions in 2023 and identified 380,000 stable candidates; MACE universal interatomic potentials accelerate phonon calculations by millions of times versus density functional theory. The metric that would change minds: a result above 250 K at ambient pressure, confirmed simultaneously by resistivity, Meissner imaging, and specific heat anomaly, in at least three independent laboratories."
      }
    ],

    timeline: {
      milestones: [
        {
          id: "m1",
          title: "Cuprate high-Tc superconductors discovered, Woodstock of physics",
          kind: "breakthrough",
          years: { optimistic: 1987, consensus: 1987, skeptical: 1987 },
          detail: "In 1986 to 1987, Bednorz and Muller discovered copper-oxide ceramics superconducting above 30 K at IBM Zurich, shattering the BCS theoretical ceiling. The 1987 APS March Meeting became known as the Woodstock of physics as researchers packed a session to announce new records. Liquid-nitrogen-temperature superconductors followed within months. Bednorz and Muller won the 1987 Nobel Prize. The field has never explained why cuprates superconduct.",
          done: true
        },
        {
          id: "m2",
          title: "Lanthanum decahydride achieves 250 K superconductivity under 170 GPa",
          kind: "breakthrough",
          years: { optimistic: 2019, consensus: 2019, skeptical: 2019 },
          detail: "Eremets and collaborators at the Max Planck Institute for Chemistry demonstrated superconductivity in LaH10 at 250 K, negative 23 degrees Celsius, under 170 gigapascals in a diamond anvil cell, published in Nature in 2019. This is the highest confirmed and replicated critical temperature at any pressure and established that room-temperature Tc is physically achievable. The obstacle is the extreme pressure requirement.",
          done: true
        },
        {
          id: "m3",
          title: "LK-99 episode: viral ambient-pressure claim debunked within weeks",
          kind: "breakthrough",
          years: { optimistic: 2023, consensus: 2023, skeptical: 2023 },
          detail: "In July 2023, Lee Sukbae and Kim Ji-Hoon of Korea University posted preprints claiming LK-99 superconduced at room temperature and ambient pressure. A Chinese video of partial levitation went viral. Within three weeks, replication labs worldwide found LK-99 is an insulator in pure form; the apparent levitation was ferromagnetic and the superconductor-like behavior arose from a Cu2S impurity phase transition. The Korean Society of Superconductivity formally confirmed non-superconductivity in December 2023. Ranga Dias at Rochester had three papers retracted the same year for data manipulation in separate room-temperature superconductor claims.",
          done: true
        },
        {
          id: "m4",
          title: "AI computational screening produces credible high-Tc candidate for synthesis",
          kind: "invention",
          years: { optimistic: 2027, consensus: 2034, skeptical: 2048 },
          detail: "A machine-learning materials discovery workflow, a GNoME descendant or equivalent, identifies a crystal structure predicted to exhibit superconductivity above 200 K at ambient pressure with sufficient confidence to trigger a coordinated experimental synthesis campaign. This milestone does not require the material to work. It requires the prediction to be credible enough to organize a serious replication effort across multiple groups.",
          done: false
        },
        {
          id: "m5",
          title: "First independently replicated ambient-pressure superconductor above 150 K",
          kind: "breakthrough",
          years: { optimistic: 2030, consensus: 2048, skeptical: 2080 },
          detail: "A material demonstrating superconductivity above 150 K at ambient pressure is confirmed by three or more independent labs using resistivity, Meissner effect, and specific heat simultaneously. The current record is 135 K in mercury-barium-calcium-copper-oxide set in 1993 and barely improved since. Crossing this threshold would be the most significant advance in condensed matter physics since 1987.",
          done: false
        },
        {
          id: "m6",
          title: "Room-temperature ambient-pressure superconductor fully validated",
          kind: "breakthrough",
          years: { optimistic: 2038, consensus: 2060, skeptical: 2100 },
          detail: "The headline milestone: a material exhibiting zero resistance and complete Meissner effect at or above 20 degrees Celsius and 1 atmosphere, confirmed by multiple independent groups with transparent and unrestricted data access. This is the probability definition for this technology entry and constitutes the most consequential physics discovery of the century if achieved.",
          done: false
        },
        {
          id: "m7",
          title: "First commercial application using ambient-condition superconductor",
          kind: "deployment",
          years: { optimistic: 2042, consensus: 2065, skeptical: 2100 },
          detail: "A commercial product, a power cable, motor winding, sensor, or computing component, using a confirmed ambient-pressure room-temperature superconductor. Conditional on Milestone 6 being achieved; commercial deployment follows with a 5 to 10-year materials processing and manufacturing development lag.",
          done: false
        }
      ],
      branches: [
        {
          id: "b1",
          name: "Superhydride pressure-reduction path",
          fromMilestone: "m2",
          probability: 0.40,
          summary: "Computational crystal structure prediction identifies clathrate-cage superhydrides stable at pressures below 10 GPa. Chemical synthesis using cage-molecule pre-compression or catalytic routes realizes them in the lab. Led by groups at Cambridge, George Washington University, and Max Planck.",
          milestones: [
            {
              id: "b1m1",
              title: "Ternary clathrate superhydride achieves Tc above 200 K below 50 GPa",
              kind: "breakthrough",
              years: { optimistic: 2028, consensus: 2040, skeptical: 2060 },
              detail: "A hydrogen clathrate compound achieves superconductivity above 200 K at pressures reachable with laboratory multi-anvil presses rather than diamond anvil cells. This represents a threefold to fourfold pressure reduction from current records and would validate the chemical pre-compression strategy.",
              done: false
            },
            {
              id: "b1m2",
              title: "Superhydride structure metastably quenched to ambient pressure",
              kind: "invention",
              years: { optimistic: 2036, consensus: 2052, skeptical: 2085 },
              detail: "A high-Tc superhydride synthesized under pressure and then released to ambient conditions retains its superconducting crystal structure, analogous to how diamond is synthesized under pressure and remains stable at room conditions. Theoretically possible for certain clathrate structures; no example exists yet.",
              done: false
            }
          ]
        },
        {
          id: "b2",
          name: "Unconventional cuprate and nickelate mechanism path",
          fromMilestone: "m1",
          probability: 0.25,
          summary: "Understanding the electron-correlation pairing mechanism in cuprates and nickelates guides rational design of new oxide superconductors with higher Tc at ambient pressure. Ambient-pressure bilayer nickelate films reached a Tc onset near 63 K in 2025; progress is driven by strain engineering, ARPES spectroscopy, neutron scattering, and AI-assisted theory.",
          milestones: [
            {
              id: "b2m1",
              title: "Cuprate or nickelate pairing mechanism resolved at quantitative level",
              kind: "breakthrough",
              years: { optimistic: 2030, consensus: 2042, skeptical: 2068 },
              detail: "A theoretical framework for high-Tc cuprate or nickelate superconductivity accepted across the condensed matter community, analogous to BCS for conventional superconductors. Would enable rational design of ambient-pressure materials with Tc above 200 K for the first time.",
              done: false
            },
            {
              id: "b2m2",
              title: "Novel oxide superconductor achieves Tc above 200 K at ambient pressure",
              kind: "breakthrough",
              years: { optimistic: 2037, consensus: 2055, skeptical: 2085 },
              detail: "A copper-oxide, nickelate, or related correlated-electron material demonstrates Tc above 200 K at zero applied pressure. The current ambient-pressure record is 135 K in HgBa2Ca2Cu3O. Doubling this threshold would be the most significant advance in superconductor physics since 1986.",
              done: false
            }
          ]
        },
        {
          id: "b3",
          name: "Serendipity path, entirely new material class",
          fromMilestone: "m4",
          probability: 0.20,
          summary: "Room-temperature superconductivity is found in an entirely unexpected material class, as cuprates were in 1986 and iron-pnictides in 2008. AI-guided materials discovery and large combinatorial synthesis programs increase the probability of this category of surprise.",
          milestones: [
            {
              id: "b3m1",
              title: "Zero-resistance observation in unexpected material class, global replication begins",
              kind: "breakthrough",
              years: { optimistic: 2030, consensus: 2045, skeptical: 2072 },
              detail: "A laboratory observes apparent zero resistance and anomalous diamagnetism in a material not previously considered a superconductor candidate, possibly a twisted van der Waals heterostructure, an organic-inorganic hybrid, or an AI-predicted novel compound. The community races to replicate with the multi-measurement standard established after LK-99.",
              done: false
            },
            {
              id: "b3m2",
              title: "Serendipitous discovery confirmed by five-plus labs, mechanism established",
              kind: "breakthrough",
              years: { optimistic: 2035, consensus: 2052, skeptical: 2082 },
              detail: "The anomalous observation is replicated by five or more independent groups, Meissner effect is unambiguously demonstrated, and a theoretical framework explains the mechanism. This enables rational improvement of the material rather than further serendipitous search.",
              done: false
            }
          ]
        }
      ]
    },

    backcast: {
      today: [
        "The validated ambient-pressure superconductivity record is 135 K in mercury-barium-calcium-copper-oxide set in 1993 and barely improved since; this is 158 degrees below room temperature.",
        "Superhydrides (LaH10, YH9) demonstrate Tc up to 262 K under 150 to 200 GPa in diamond anvil cells; these results are replicated across multiple groups but are commercially irrelevant at those pressures.",
        "In 2025, compressively strained ambient-pressure (La,Pr)3Ni2O7 nickelate thin films reached a Tc onset near 63 K with zero resistance around 37 K, a genuine ambient-pressure advance though still far below room temperature.",
        "LK-99 was definitively debunked as a room-temperature superconductor by December 2023; three Ranga Dias papers were retracted from Nature and Physical Review Letters between 2022 and 2023 for data manipulation.",
        "DeepMind's GNoME generated 2.2 million crystal structure predictions in 2023; superconductor-targeted screening using these structures and MACE interatomic potentials is underway at multiple institutions."
      ],
      dependencies: [
        {
          name: "Predictive theoretical framework for correlated-electron superconductivity",
          why: "Without understanding why cuprates superconduct, rational design of higher-Tc materials is mostly guesswork; the mechanism has been debated since 1987 with no consensus.",
          state: "Competing theories include resonating valence bond, spin-fluctuation-mediated pairing, and charge-density-wave interplay. No experimental discriminator has produced consensus after four decades."
        },
        {
          name: "High-throughput materials synthesis paired with AI prediction",
          why: "Finding a room-temperature superconductor requires exploring enormous compositional space; automated synthesis and ML-guided crystal structure prediction are accelerating the search.",
          state: "Materials Project database contains computed properties for over 150,000 compounds. GNoME and MACE represent a step-change in prediction speed; synthesis throughput remains the bottleneck."
        },
        {
          name: "Multi-measurement validation protocols for superconductivity claims",
          why: "The Dias and LK-99 episodes revealed that single-measurement ac susceptibility can produce superconductor-like artifacts; robust multi-method validation is now required by leading journals.",
          state: "Nature and Physical Review Letters are moving toward requiring simultaneous resistivity, magnetization, and specific heat measurements for any superconductivity claim above 200 K."
        }
      ],
      supplyChain: [
        {
          item: "REBCO and NbTi superconducting wire and tape, current commercial products",
          why: "All current commercial superconductor applications use cryogenic materials; room-temperature discovery would eventually displace these but represents the existing industrial base.",
          players: "Fujikura, SuperPower, AMSC, THEVA (REBCO); Bruker, Oxford Instruments (NbTi)",
          chokepoint: false
        },
        {
          item: "Rare earth elements, lanthanum, yttrium, neodymium",
          why: "Both cuprate and superhydride superconductors use rare earth elements; REE supply is 85%-plus China-sourced, creating geopolitical exposure for any new ambient-pressure material.",
          players: "China Northern Rare Earth, MP Materials (US), Lynas (Australia)",
          chokepoint: true
        },
        {
          item: "Diamond anvil cells and high-pressure synthesis equipment",
          why: "All current superhydride research requires diamond anvil cells operating at hundreds of gigapascals; commercial applications would require industrial high-pressure synthesis routes not yet developed.",
          players: "Almax easyLab, Diacell (diamond cells); no industrial-scale high-pressure hydride synthesis infrastructure exists anywhere",
          chokepoint: true
        }
      ],
      leadingIndicators: [
        "Any peer-reviewed paper claiming Tc above 150 K at pressures below 50 GPa, accompanied by simultaneous resistivity, Meissner, and specific heat data, and confirmed by independent synthesis. This would signal real progress on the pressure-reduction path.",
        "GNoME or a successor system publishing a short-list of high-confidence ambient-pressure high-Tc candidates with synthesis routes; this would trigger a coordinated global synthesis campaign with clear success or failure within months.",
        "Ambient-pressure nickelate Tc crossing 77 K, the liquid-nitrogen line, after 2025 thin-film results reached a 63 K onset; this would show the electron-correlation pairing mechanism scales toward room temperature.",
        "Adoption by Nature Physics and Physical Review Letters of standardized three-measurement protocols for all superconductivity claims above 200 K; would reduce false-positive rate and accelerate trust in future results.",
        "Any Nobel Prize in Physics awarded for a correlated-electron condensed-matter discovery; tends to coincide with major experimental validations that change the probability landscape."
      ]
    },

    people: [
      {
        name: "Paul Chu",
        role: "Distinguished Professor of Physics",
        org: "University of Houston and Hong Kong University of Science and Technology",
        note: "Discovered the first liquid-nitrogen-temperature superconductor YBCO at 93 K in 1987; one of the architects of the high-Tc cuprate era and remains an active advocate for pursuing room-temperature superconductivity."
      },
      {
        name: "Jorge Hirsch",
        role: "Professor of Physics",
        org: "University of California, San Diego",
        note: "The field's most persistent and systematic skeptic; his detailed analyses showed that magnetic susceptibility signatures in Dias papers were artifacts, a judgment that proved accurate when retractions followed; his methodological critiques are now influencing journal validation standards."
      },
      {
        name: "Chris Pickard",
        role: "Professor of Materials Science",
        org: "University of Cambridge",
        note: "Developer of AIRSS, Ab Initio Random Structure Searching, the leading computational method for predicting superhydride crystal structures under pressure; his group anticipated most experimentally confirmed high-Tc superhydrides before they were synthesized."
      },
      {
        name: "Russell Hemley",
        role: "Professor of Chemistry and Physics",
        org: "George Washington University",
        note: "Experimentalist who co-contributed to key superhydride Tc results at high pressure; one of the most credible voices on whether ambient-pressure hydride superconductivity is achievable and on what timescale."
      },
      {
        name: "Subir Sachdev",
        role: "Herchel Smith Professor of Physics",
        org: "Harvard University",
        note: "Theorist whose work on quantum critical points and strange metals underpins some of the most promising theoretical frameworks for explaining high-Tc superconductivity; a key figure in any eventual resolution of the cuprate mechanism."
      }
    ],

    reading: [
      {
        title: "Superconductivity at 250 K in lanthanum hydride under high pressures",
        author: "Drozdov, A.P., Kong, P.P., Minkov, V.S., Bud'ko, S.L. et al.",
        year: 2019,
        type: "paper",
        note: "The Nature paper reporting 250 K superconductivity in LaH10 under 170 GPa; the current record near room temperature and the benchmark all subsequent superhydride work is measured against."
      },
      {
        title: "Superconductivity scandal: the inside story of deception in a rising star's physics lab",
        author: "Davide Castelvecchi",
        year: 2024,
        type: "article",
        note: "Nature's investigative feature on the Ranga Dias misconduct case; essential context for understanding why the field is in a credibility crisis and what multi-measurement reforms are being implemented."
      },
      {
        title: "LK-99 is not a superconductor, says Korean review committee",
        author: "Korean Society of Superconductivity and Cryogenics Verification Committee",
        year: 2023,
        type: "article",
        note: "The December 2023 official announcement definitively ruling out LK-99 as a superconductor; the Korea Herald and ScienceAlert coverage provides accessible primary documentation of the debunking."
      },
      {
        title: "Ambient-pressure superconductivity onset above 40 K in (La,Pr)3Ni2O7 films",
        author: "Ko, E.K. et al.",
        year: 2025,
        type: "paper",
        note: "Nature paper reporting ambient-pressure superconductivity in strained bilayer nickelate thin films, with later work pushing the Tc onset toward 63 K; the freshest real advance in the ambient-pressure search."
      },
      {
        title: "Scaling deep learning for materials discovery",
        author: "Merchant, A., Batzner, S., Schoenholz, S.S. et al., Google DeepMind",
        year: 2023,
        type: "paper",
        note: "The Nature paper introducing GNoME; describes the computational framework generating 2.2 million crystal structure predictions, now being used to screen for ambient-pressure superconductor candidates."
      }
    ]
  }

);

/* =============================================================================
   THE FUTURIST — ENERGY DOMAIN DATA (append)
   Technology: Advanced Nuclear Fission & SMRs
   Date: 2026-07-20
   Schema: _schema.js
   ============================================================================= */

window.FUTURIST_DATA.push({
  id: "nuclear-fission",
  name: "Advanced Nuclear Fission & SMRs",
  shortName: "Nuclear / SMR",
  tagline: "The atom shrunk and factory-built: proven physics whose only real enemies are cost, fuel, and the regulator's clock, now that AI's hunger for always-on power has made it investable again.",
  domain: "energy",
  glyph: "⚛",
  status: "pilot",
  consequence: 8,

  probability: {
    value: 0.70,
    definition: "By 2056, advanced fission is deployed at commercial scale in the US and West: on the order of tens of GW of new advanced-nuclear capacity (SMRs, microreactors, restarts, and Gen-IV plants) online and grid-connected, with several designs in repeat build at costs competitive with firm alternatives (roughly below $100/MWh LCOE). This is deployment-and-cost arrival, not a physics threshold.",
    basis: "Author estimate 0.70, anchored between official targets and independent skeptics. Bullish anchor: US federal target of 400 GWe total nuclear by 2050 (a tripling from ~100 GW), set by Trump EO 14301 (May 2025) atop the Biden-era triple-by-2050 goal, directing 10 large reactors under construction by 2030 (DOE; Utility Dive). Bearish anchor: Kim & Macfarlane (2026, Progress in Nuclear Energy) conclude SMRs will not arrive in meaningful numbers until the 2030s-2040s and stay niche; NuScale's flagship UAMPS project was cancelled in Nov 2023 after its target price rose from $58 to $89/MWh. Physics and licensing are no longer binding; FOAK cost, supply chain, and whether serial builds actually cheapen are the open questions. Tens of GW by 2056 is plausible; 400 GW by 2050 is aspirational and unlikely on schedule.",
    range: [0.50, 0.85]
  },

  arrival: {
    optimistic: 2032,
    consensus: 2040,
    skeptical: 2055
  },

  whyItMatters: "Firm, carbon-free power that runs above 90% capacity factor regardless of weather or geography is the missing piece of a decarbonized, AI-hungry grid. If serial SMR builds actually cheapen, nuclear stops being a one-off megaproject and becomes a product a utility or hyperscaler can order. If they do not, it stays a subsidized niche while gas and renewables carry the load.",

  feynman: [
    {
      level: 1,
      label: "The kitchen-table version",
      body: "Fusion squishes tiny atoms together. Fission does the opposite: it splits big, heavy atoms of uranium apart, and that split releases heat. We have done this for seventy years. It powers submarines and hundreds of big power plants. The physics is settled and safe enough that a reactor sits under aircraft carriers. So why is nuclear suddenly news again? Two reasons. First, a new idea: instead of building one gigantic plant on-site over a decade, build small reactors in a factory, ship them out, and bolt several together like appliances. These are called small modular reactors. The promise is that once you build the tenth one, it gets cheap, the way the tenth car off a line is cheaper than the first. Second, the demand: AI data centers eat enormous amounts of electricity, around the clock, and the tech giants want clean power that never blinks. So Microsoft, Amazon, and Google are signing deals to buy nuclear power, and some are paying to restart old plants. The catch is not science. It is money and schedule. A flagship US project in Utah was cancelled in 2023 when the price jumped almost in half. That is the real fight: can anyone build these on time and on budget?"
    },
    {
      level: 2,
      label: "The mechanism",
      body: "Inside a reactor, a stray neutron strikes a uranium-235 nucleus and splits it. That releases heat, plus two or three more neutrons, which split more nuclei: a controlled chain reaction. The heat boils water into steam that spins a turbine, exactly like a coal plant but with no carbon. Today's plants are large light-water reactors. Three things are new. Small modular reactors shrink that same water-cooled design into factory-built modules with passive safety, so they cool themselves without pumps if power is lost. Advanced or Generation-IV reactors swap water for hotter coolants: liquid sodium, molten salt, or helium gas. Hotter output means more efficiency and usable industrial heat, but most of these need HALEU, uranium enriched to about 20% instead of the usual 5%. And restarts simply switch a shuttered plant, like Three Mile Island, back on. The number everyone tracks is LCOE, the lifetime cost per megawatt-hour. Nuclear's fixed costs are huge and its fuel costs tiny, so economics live or die on the build price and how often the plant runs. A reactor humming at 90-plus percent capacity factor spreads its cost over far more power than a solar farm can."
    },
    {
      level: 3,
      label: "The hard part",
      body: "The binding constraints are not physics; they are cost, fuel, and throughput. Cost first: the Carbon Free Power Project in Utah is the cautionary tale. NuScale's price crept from $58 to $89 per megawatt-hour, subscriptions never hit the threshold, and the six-module project died in November 2023. No Western SMR has yet proven that repeat builds get cheaper. Fuel second: advanced reactors need HALEU, and it barely exists outside Russia. Centrus has delivered only about 900 kilograms to the US Department of Energy from its Ohio demo cascade, against fleet needs measured in metric tons. Russia's Rosatom is the only established commercial source, so the West is racing to reshore enrichment it let atrophy for forty years. Regulation third: the NRC was historically the bottleneck, but the ADVANCE Act of 2024 and executive orders sped it up, and real construction permits are now issuing, some critics say too fast. Watch these numbers: nth-of-a-kind LCOE below $100/MWh, dollars per kilowatt of overnight cost, schedule slip, and heavy-forging lead times. The federal goal of 400 GW by 2050 collides with a skeptic literature arguing SMRs arrive too late and too dear to matter for near-term decarbonization."
    },
    {
      level: 4,
      label: "The frontier",
      body: "The field has split into three bets. Light-water SMRs (GE Vernova's BWRX-300 at Darlington and TVA Clinch River, NuScale's US460, Holtec's SMR-300 at Palisades) carry the lowest technical risk and reach the grid first, but stay large and expensive. Advanced Gen-IV designs (TerraPower's Natrium sodium fast reactor, X-energy's Xe-100 HTGR on TRISO pebbles, Kairos's molten-salt-cooled Hermes, Oklo's Aurora fast micro) promise better economics and process heat if the fuel, coolant, and design all work at once, which is a lot of first-of-a-kind at once. And restarts monetize the existing fleet now. The central open question is whether nth-of-a-kind cost decline is real; no one has demonstrated it in the West. Demand is contracted (Microsoft-Constellation, Amazon-X-energy, Google-Kairos), and public pure-plays now trade (OKLO, SMR, NNE, LEU, XE), but most are pre-revenue and priced on pipelines of letters of intent. Credentialed skeptics, ex-NRC chair Allison Macfarlane and UCS's Edwin Lyman, argue the units arrive too late and too costly, and that a HALEU buildout raises proliferation risk since roughly one metric ton is weapons-usable (Science, 2024). What would change minds: Oklo delivering commercial power by 2027, or any Western SMR posting a defended nth-of-a-kind LCOE below $100/MWh."
    }
  ],

  timeline: {
    milestones: [
      {
        id: "t1",
        title: "NuScale becomes the first NRC-certified SMR",
        kind: "policy",
        years: { optimistic: 2023, consensus: 2023, skeptical: 2023 },
        detail: "In January 2023 NuScale's US600 became the first-ever SMR design certified by the NRC; the uprated US460 (77 MWe per module) later received Standard Design Approval in May 2025. Licensing, long assumed to be the gate, stopped being the binding constraint.",
        done: true
      },
      {
        id: "t2",
        title: "CFPP/UAMPS cancellation sets the cost-risk anchor",
        kind: "deployment",
        years: { optimistic: 2023, consensus: 2023, skeptical: 2023 },
        detail: "In November 2023 NuScale and UAMPS terminated the six-module Carbon Free Power Project after the target price climbed 53% to $89/MWh and subscriptions never reached the 80% threshold. It remains the reference case for first-of-a-kind cost blowup and the skeptic's exhibit A.",
        done: true
      },
      {
        id: "t3",
        title: "Hyperscalers sign the first nuclear PPAs and restart deals",
        kind: "deployment",
        years: { optimistic: 2024, consensus: 2024, skeptical: 2024 },
        detail: "A September-October 2024 wave rewired the demand side: Constellation and Microsoft signed a 20-year PPA to restart Three Mile Island Unit 1 as the Crane Clean Energy Center (835 MW, roughly $1.6B restart capex, targeting 2028); Amazon backed X-energy's Xe-100 with a $700M investment; Google contracted a 500 MW pipeline with Kairos. AI power demand turned nuclear from a stranded asset into a growth story.",
        done: true
      },
      {
        id: "t4",
        title: "Advanced reactors move from permit to construction across the West",
        kind: "deployment",
        years: { optimistic: 2025, consensus: 2026, skeptical: 2027 },
        detail: "By 2026 the permits are real: TerraPower's Natrium (Kemmerer, WY, 345 MW sodium fast reactor) took the first NRC construction permit for a commercial-scale advanced reactor in March 2026; Kairos holds Part 50 permits for two Hermes test reactors; Oklo broke ground at Idaho National Lab in September 2025; and Canada's Darlington BWRX-300 is under construction after CNSC approval in April 2025. Steel is being poured, but no advanced or SMR unit is yet delivering commercial power.",
        done: false
      },
      {
        id: "t5",
        title: "Reactor Pilot Program: advanced reactors reach criticality",
        kind: "breakthrough",
        years: { optimistic: 2026, consensus: 2027, skeptical: 2029 },
        detail: "EO 14301 set a goal of taking advanced reactors critical on a compressed timeline, and DOE reported taking several microreactor designs critical in a 30-day window in mid-2026. These are demonstration and microreactor units at national-lab-adjacent sites, not grid-scale commercial plants, so treat this as a milestone in progress rather than proof of a commercial fleet.",
        done: false
      },
      {
        id: "t6",
        title: "First advanced/SMR unit delivers commercial power",
        kind: "scaleup",
        years: { optimistic: 2027, consensus: 2030, skeptical: 2034 },
        detail: "Oklo targets commercial power from Aurora by end-2027, the nearest real test. Darlington's BWRX-300, TerraPower's Natrium, and TVA's Clinch River BWRX-300 all target roughly 2030-2031. Whether any of these lands on schedule and on budget is the pivot the whole thesis turns on.",
        done: false
      },
      {
        id: "t7",
        title: "Domestic HALEU supply reaches fleet scale",
        kind: "scaleup",
        years: { optimistic: 2028, consensus: 2032, skeptical: 2038 },
        detail: "Centrus delivered 900+ kg of HALEU to DOE from Piketon, OH by mid-2025, won a $900M DOE task order in January 2026, and is investing $560M+ to convert its Oak Ridge factory to high-rate centrifuge manufacturing. Fleet-scale, metric-ton domestic HALEU, the fuel most Gen-IV designs require, remains years out and Russia-dominated globally.",
        done: false
      },
      {
        id: "t8",
        title: "Serial nth-of-a-kind cost decline proven",
        kind: "scaleup",
        years: { optimistic: 2032, consensus: 2040, skeptical: 2052 },
        detail: "The thesis-defining unknown: whether repeat SMR builds actually drop below firm-power alternatives the way the modular promise claims. No first-of-a-kind Western SMR has yet demonstrated it. If proven, nuclear becomes a product; if not, it stays a subsidized niche.",
        done: false
      }
    ],
    branches: [
      {
        id: "b1",
        name: "Light-water SMR incrementalism",
        fromMilestone: "t4",
        probability: 0.45,
        summary: "Proven PWR/BWR physics shrunk and modularized: lowest regulatory and technical risk, first to the grid, and bankable because the light-water fuel and supply chain already exist. Backed by GE Vernova (BWRX-300), NuScale (US460), Holtec (SMR-300), and Rolls-Royce SMR.",
        milestones: [
          {
            id: "b1m1",
            title: "Darlington BWRX-300 online",
            kind: "deployment",
            years: { optimistic: 2029, consensus: 2030, skeptical: 2033 },
            detail: "OPG's first BWRX-300 unit at Darlington targets service around 2030, the West's first grid-scale SMR to operate and the proof point for the light-water path.",
            done: false
          },
          {
            id: "b1m2",
            title: "US light-water SMRs follow (Clinch River, Palisades SMR-300)",
            kind: "deployment",
            years: { optimistic: 2030, consensus: 2032, skeptical: 2036 },
            detail: "TVA's Clinch River BWRX-300 and Holtec's SMR-300 at Palisades carry $400M DOE cost-share each (Dec 2025); the first US SMR deliveries test whether the design travels across sites.",
            done: false
          },
          {
            id: "b1m3",
            title: "Second and third units confirm a bankable cost curve",
            kind: "scaleup",
            years: { optimistic: 2033, consensus: 2038, skeptical: 2045 },
            detail: "The bull case requires the repeat units to come in near or below the first; only then does the light-water SMR become a financeable product rather than a subsidized demonstration.",
            done: false
          }
        ]
      },
      {
        id: "b2",
        name: "Advanced / Gen-IV leaps ahead",
        fromMilestone: "t5",
        probability: 0.35,
        summary: "Higher-temperature designs (HTGR, sodium fast, molten salt) with passive safety and process heat, running on HALEU/TRISO fuel. Backed by X-energy (Xe-100, Amazon), Kairos (Hermes, Google), TerraPower (Natrium, Bill Gates), Oklo (Aurora), and Terrestrial Energy.",
        milestones: [
          {
            id: "b2m1",
            title: "Oklo Aurora delivers first commercial power",
            kind: "scaleup",
            years: { optimistic: 2027, consensus: 2030, skeptical: 2035 },
            detail: "Oklo's end-2027 target for its INL fast microreactor is the earliest real test of a Gen-IV unit selling power; slipping it repeats the 2027-to-2030-to-later historical pattern.",
            done: false
          },
          {
            id: "b2m2",
            title: "TerraPower Natrium and X-energy Xe-100 reach the grid",
            kind: "scaleup",
            years: { optimistic: 2030, consensus: 2032, skeptical: 2038 },
            detail: "Natrium (sodium fast, ~$2B ARDP grant) targets ~2030-31; X-energy's Amazon-anchored 5 GW Xe-100 HTGR fleet depends on TRISO fuel and domestic HALEU maturing together.",
            done: false
          },
          {
            id: "b2m3",
            title: "HALEU and TRISO scale enough to fuel a Gen-IV fleet",
            kind: "scaleup",
            years: { optimistic: 2032, consensus: 2036, skeptical: 2044 },
            detail: "The Gen-IV path leads only if the fuel front-end (Centrus HALEU, X-energy's TRISO-X) grows from demo to fleet volume; without it the advanced designs stall regardless of licensing.",
            done: false
          }
        ]
      },
      {
        id: "b3",
        name: "Regulatory / cost stall",
        fromMilestone: "t2",
        probability: 0.20,
        summary: "SMRs stay perpetually five years out, first-of-a-kind overruns repeat the CFPP pattern, and cheaper, faster wind-plus-solar-plus-storage-plus-gas out-competes them, leaving advanced units as a niche. The view held by Edwin Lyman, Allison Macfarlane, and much of the academic cost literature.",
        milestones: [
          {
            id: "b3m1",
            title: "A flagship FOAK project overruns like CFPP",
            kind: "deployment",
            years: { optimistic: 2027, consensus: 2030, skeptical: 2034 },
            detail: "If the first commercial SMR's price creeps the way NuScale's did from $58 to $89/MWh, equity priced on pipelines rather than cashflow reprices hard and financing dries up.",
            done: false
          },
          {
            id: "b3m2",
            title: "Firm alternatives cap the addressable market",
            kind: "deployment",
            years: { optimistic: 2030, consensus: 2035, skeptical: 2045 },
            detail: "Gas plus solar and storage keep beating SMRs on cost and speed, confining advanced reactors to defense microgrids, remote sites, and specific data centers rather than a fleet.",
            done: false
          }
        ]
      }
    ]
  },

  backcast: {
    today: [
      "Zero commercial SMRs are yet generating power in the US; the only recent new large nuclear is the Vogtle 3/4 AP1000s (completed 2023-24) plus uprates. The AI-driven action is restarts and construction permits, not operating SMRs.",
      "Real construction permits are in hand: TerraPower's Natrium (Mar 2026) and Kairos's Hermes 1 and 2; Oklo broke ground at Idaho National Lab (Sept 2025); Canada's Darlington BWRX-300 is under construction.",
      "Hyperscaler demand is contracted, not hypothetical: Microsoft-Constellation (TMI/Crane restart), Amazon-X-energy (5 GW Xe-100) plus Amazon-Talen (960 MW Susquehanna), Google-Kairos (500 MW), Oklo-Switch (up to ~12 GW), plus a Meta 1-4 GW RFP and an Oklo prepayment (~1.2 GW campus).",
      "Public-market pure-plays now exist and are liquid: Oklo (NYSE:OKLO), NuScale (NYSE:SMR), Nano Nuclear (NASDAQ:NNE), Centrus (NYSE:LEU), and X-energy (NASDAQ:XE), which IPO'd in April 2026.",
      "Domestic HALEU is nascent: Centrus has delivered roughly 900 kg to DOE from Piketon, OH and is scaling, but nowhere near fleet volumes."
    ],
    dependencies: [
      { name: "HALEU fuel (19.75%-enriched uranium)", why: "Most advanced and Gen-IV designs cannot run without it.", state: "A single demo cascade (Centrus, Piketon) plus DOE task orders; scaling but sub-scale, with Russia's Rosatom the only large existing commercial source globally." },
      { name: "NRC licensing throughput", why: "Historically the deployment bottleneck; every build waits on it.", state: "Improving via the ADVANCE Act (2024) and executive orders; multiple construction permits now issued on compressed timelines, which some critics call rushed." },
      { name: "Nuclear-grade heavy supply chain (large forgings, RPVs, TRISO fab)", why: "Every reactor needs a pressure vessel and qualified fuel fabrication.", state: "Thin in the West; RPV forging capacity is concentrated in Japan and Korea, and GE-Hitachi contracted Darlington's RPV fabrication in January 2025." },
      { name: "Capital and FOAK cost tolerance", why: "SMRs are capital-heavy and pre-revenue, so someone must absorb first-of-a-kind risk.", state: "Heavy reliance on federal cost-share ($400M each to TVA and Holtec in Dec 2025; ~$2B ARDP grant to TerraPower) and hyperscaler prepayments." },
      { name: "Skilled nuclear workforce and grid interconnection", why: "First-of-a-kind execution and grid access gate delivery as much as the reactor does.", state: "Constrained; skilled trades and interconnection queues are real bottlenecks." }
    ],
    supplyChain: [
      { item: "HALEU enrichment", why: "The advanced/Gen-IV fleet cannot be fueled without it; the most binding constraint.", players: "Centrus (NYSE:LEU, Piketon OH), Urenco, Orano; Rosatom (Russia) dominant", chokepoint: true },
      { item: "Heavy forgings and reactor pressure vessels", why: "Long-lead items with thin, concentrated capacity that gate every build.", players: "Japan Steel Works, Doosan (Korea); GE-Hitachi contracted Darlington RPV", chokepoint: true },
      { item: "TRISO fuel fabrication", why: "HTGR and some Gen-IV designs depend on it, and it is sub-scale.", players: "X-energy TRISO-X (Oak Ridge, TN), BWXT", chokepoint: true },
      { item: "EPC and modular fabrication", why: "First-of-a-kind construction is where CFPP-style overruns live, though the trades are the constraint, not IP.", players: "Bechtel, Fluor, Aecon, AtkinsRealis", chokepoint: false },
      { item: "Reactor designs and IP", why: "Abundant and increasingly permitted; not the binding constraint.", players: "GE Vernova, NuScale, X-energy, Kairos, TerraPower, Oklo, Holtec", chokepoint: false }
    ],
    leadingIndicators: [
      "Does TMI/Crane actually restart on or ahead of its 2027-28 schedule (NRC approval plus PJM interconnection)?",
      "First advanced-reactor fuel load or commercial power: Oklo's end-2027 target is the nearest real test.",
      "Centrus HALEU output ramp: does the Oak Ridge high-rate factory advance, and does DOE keep funding it?",
      "Does any Western SMR post a credible, defended nth-of-a-kind LCOE below ~$100/MWh, versus the $89/MWh that killed CFPP?",
      "NRC permit cadence and hyperscaler LOIs converting to firm, financeable contracts; any new plant restarts beyond TMI (Palisades, Duane Arnold)."
    ]
  },

  people: [
    { name: "Chris Wright", role: "US Secretary of Energy", org: "US Department of Energy", note: "Confirmed Feb 2025; driving the nuclear renaissance, the Reactor Pilot Program, and the domestic fuel-line push." },
    { name: "Jacob DeWitte", role: "Co-founder and CEO", org: "Oklo", note: "Face of the microreactor/fast-reactor pure-play; bets the Aurora fast micro and a large contracted order book carry the Gen-IV path." },
    { name: "Bill Gates", role: "Founder and chairman", org: "TerraPower", note: "Principal backer of Natrium, the sodium fast reactor at Kemmerer, WY that took the first commercial-scale advanced construction permit." },
    { name: "Kathryn Huff", role: "Former DOE Assistant Secretary for Nuclear Energy (2022-2024), now academic", org: "University of Illinois", note: "Credible pro-advanced-nuclear voice on deployment and fuel-cycle readiness." },
    { name: "Edwin Lyman", role: "Director of Nuclear Power Safety", org: "Union of Concerned Scientists", note: "Lead skeptic on SMR safety, cost, and HALEU proliferation; co-author of the 2024 Science piece on weapons-usable HALEU." },
    { name: "Allison Macfarlane", role: "Former NRC Chair (2012-2014)", org: "University of British Columbia", note: "The most credentialed deployment skeptic; co-author of the 2026 SMR cost-and-waste critique arguing the units arrive too late and too expensive." }
  ],

  reading: [
    { title: "One Year After Executive Orders: The Nuclear Renaissance", author: "US Department of Energy", year: 2026, type: "report", note: "Official statement of federal targets (400 GW by 2050) and the Reactor Pilot Program; the bullish policy anchor." },
    { title: "SMR economics and waste study (Progress in Nuclear Energy)", author: "Kim, S. and Macfarlane, A.", year: 2026, type: "paper", note: "The skeptic academic case: SMRs will not arrive in meaningful numbers until the 2030s-2040s and stay niche on cost and waste." },
    { title: "The weapons potential of high-assay low-enriched uranium (Science)", author: "Lyman, E. et al.", year: 2024, type: "paper", note: "Argues roughly one metric ton of HALEU is weapons-usable, raising proliferation questions the roadmaps largely gloss over." },
    { title: "NuScale cancels first-of-a-kind nuclear project as costs surge", author: "E&E News (POLITICO)", year: 2023, type: "article", note: "Primary reporting on the CFPP/UAMPS cancellation; the reference case for first-of-a-kind cost risk." },
    { title: "Nuclear Power in the USA / US Outlook Report", author: "World Nuclear Association", year: 2026, type: "report", note: "Capacity data plus restart and deal tracking for the US fleet and pipeline." },
    { title: "Trump aims for 400 GW of nuclear by 2050", author: "Utility Dive", year: 2026, type: "article", note: "Trade-press coverage of the federal targets, the TMI/Crane restart, and the hyperscaler PPA wave." }
  ]
});
