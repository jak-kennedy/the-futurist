/* =============================================================================
   THE FUTURIST — SUPPLY CHAIN DEEP-DIVES: ENERGY DOMAIN
   Technologies: Fusion Power, Grid-Scale Energy Storage,
                 Room-Temperature Superconductors
   Date: 2026-06-12
   Schema: _schema.js (SUPPLY CHAIN DEEP-DIVE block)
   Basis notes: company claims not independently verified unless noted;
                contested figures flagged inline.
   ============================================================================= */

window.FUTURIST_CHAINS = window.FUTURIST_CHAINS || {};

/* =============================================================================
   1. FUSION POWER
   ============================================================================= */
window.FUTURIST_CHAINS["fusion-power"] = {

  overview: "Fusion has no fuel scarcity problem at the molecular level: deuterium is abundant, lithium is mineable. The chain between those raw materials and a working reactor is sparse, geographically concentrated, and in several places artisanal. Two inputs stand out as genuine near-term binding constraints: REBCO superconducting tape, manufactured at commercial scale by a handful of firms in Japan and one in the United States, and tritium, whose global inventory is measured in tens of kilograms and held almost entirely in Canadian CANDU heavy-water reactors. Everything downstream of those two items is either nascent (breeding blankets, neutron-qualified structural materials) or dependent on industrial supply chains that do not yet exist at fusion scale. The chain is mature enough to build first-of-a-kind machines; it is not mature enough to build fleets.",

  tiers: [
    {
      name: "Raw materials & feedstocks",
      links: [
        {
          item: "Tritium",
          role: "primary fuel isotope; no D-T substitute",
          players: "Ontario Power Generation Darlington CANDU reactors (Canada); Wolsong CANDU site (Korea Hydro & Nuclear Power, South Korea); US DOE stockpile (Savannah River Site); SHINE Medical Technologies (US, neutron-capture production)",
          geography: "Canada holds the largest civilian tritium inventory; South Korea secondary; US government stock classified",
          concentration: "single-source",
          chokepoint: true,
          risk: "Global civilian tritium inventory is approximately 25 kg (author estimate from CANDU production rates and radioactive decay; no open-source official figure exists). A single commercial D-T reactor may require 1-3 kg per year at startup, far exceeding what CANDU production can supply for a fleet. Tritium decays at 5.5% per year, so inventory lost to decay cannot be recovered. No commercial reactor has demonstrated a tritium breeding ratio above 1.0.",
          fix: "Self-sustaining tritium breeding in the lithium blanket is the only durable solution; ITER test blanket modules are designed to validate this, with results not available until the mid-2030s at earliest."
        },
        {
          item: "Lithium-6 (enriched)",
          role: "tritium breeding feedstock in reactor blankets",
          players: "China National Nuclear Corporation (CNNC, dominant active producer); US Y-12 National Security Complex (NNSA, legacy Cold War stockpile); TerraPower (US, piloting new enrichment for molten salt reactors); Chemetall (Albemarle subsidiary, Germany)",
          geography: "China controls most active civilian Li-6 separation capacity; US legacy stockpile; NNSA restarting domestic enrichment under classified programs",
          concentration: "concentrated",
          chokepoint: true,
          risk: "Natural lithium is only 7.5% Li-6; enrichment is mandatory for adequate tritium breeding ratios. No Western civilian enrichment line exists at industrial scale. Export controls or conflict could block access to the only active producers.",
          fix: "DOE tritium supply chain assessment (2024) supports re-establishing US Li-6 enrichment; TerraPower pilot at NNSA facilities is the only concrete near-term effort."
        },
        {
          item: "Beryllium",
          role: "neutron multiplier in some breeding blanket designs",
          players: "Materion Corporation (US, dominant Western supplier); Ulba Metallurgical Plant (Kazakhstan, primary global volume supplier); China Minmetals",
          geography: "US and Kazakhstan hold most recoverable reserves; refining concentrated in US and Central Asia",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Beryllium is toxic, requires specialized handling infrastructure, and global supply is small. Demand from fusion alone could stress supply if fleets deploy at scale. Some blanket designs avoid beryllium entirely.",
          fix: "Lead-lithium liquid blankets and lithium ceramic pebble beds (Li2TiO3) being developed by ITER, CFS, and Japanese/Korean programs as beryllium-free alternatives."
        },
        {
          item: "Tungsten and tungsten-rhenium alloys",
          role: "plasma-facing first-wall and divertor armor material",
          players: "Plansee Group (Austria, leading fusion-grade W fabricator); H.C. Starck (Germany); ALMT Corp (Japan); China dominates global W mining at approximately 80% of production",
          geography: "Mining: China dominant. Fusion-grade fabrication: Europe and Japan",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Tungsten is the only refractory metal with adequate performance under plasma bombardment, but neutron embrittlement under fusion conditions is not fully characterized, and machining tungsten-to-steel joints at reactor scale is an unsolved engineering problem.",
          fix: "Tungsten-fiber composites under development at EUROfusion and IPP Garching to improve fracture toughness; oxide-dispersion-strengthened W alloys in parallel."
        }
      ]
    },
    {
      name: "Components & subsystems",
      links: [
        {
          item: "REBCO high-temperature superconducting (HTS) tape",
          role: "winding material for high-field toroidal and poloidal magnets",
          players: "Fujikura Ltd (Japan, largest commercial volume); Faraday Factory Japan (SuperPower Inc. / Furukawa Electric subsidiary, Japan); Shanghai Superconductor Technology (China); THEVA (Germany); Bruker HTS (Germany); SuNAM (South Korea); MetOx Technologies (US, pre-commercial)",
          geography: "Commercial-scale production concentrated in Japan; China has domestic capacity; Western Europe and US emerging",
          concentration: "concentrated",
          chokepoint: true,
          risk: "SPARC requires roughly 500 km of tape per coil set; an ARC commercial plant fleet scales to tens of thousands of kilometers. Current global production is insufficient for multiple concurrent programs. A single supply disruption at either Japanese facility would halt virtually every HTS magnet program in the Western world simultaneously. No US producer is at commercial scale as of mid-2026.",
          fix: "CFS has reportedly funded capacity expansion at tape manufacturer partners (company statement, not independently verified); DOE awarded grants in 2023 for REBCO manufacturing R&D at SuperPower and AMSC. MetOx Technologies is the most advanced US entrant but has not reached volume production."
        },
        {
          item: "Large-bore precision cryostats and vacuum vessels",
          role: "structural housing and thermal isolation for superconducting magnet systems",
          players: "Air Liquide Advanced Technologies (France); Linde Engineering (Germany/US); Chart Industries (US); MAN Energy Solutions (Germany); specialized Italian and South Korean fabricators for ITER components",
          geography: "Western Europe and US dominate precision cryogenic vessel fabrication",
          concentration: "concentrated",
          chokepoint: false,
          risk: "ITER's vacuum vessel required bespoke fabrication across six continents and took over a decade. Commercial tokamaks must drive cost and lead-time down by an order of magnitude; no private program has demonstrated this at scale.",
          fix: "CFS and TAE Technologies are designing vessels for serial manufacturing rather than bespoke construction; qualification remains to be demonstrated."
        },
        {
          item: "Neutral beam injectors and gyrotrons (plasma heating)",
          role: "heating plasma to fusion temperature exceeding 100 million degrees Celsius",
          players: "Gyrotrons: Thales (France), CPI (US), QST (Japan); GYCOM/Gycom (Russia, formerly major ITER supplier, constrained post-2022 sanctions); neutral beam systems: Oerlikon (Switzerland), Institute of Plasma Physics Hefei (China, ITER NBI components)",
          geography: "Russia was a leading gyrotron supplier; sanctions have forced substitution to Japan and Europe",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Russia's GYCOM was a major gyrotron supplier to ITER; sanctions since 2022 required design and procurement changes. High-power gyrotrons require specialized manufacturing expertise concentrated in a small number of global facilities."
        },
        {
          item: "Remote-handling robotic systems",
          role: "maintenance and component replacement inside activated reactor vessel",
          players: "Oxford Technologies (UK); CNIM (France); Veolia Nuclear Solutions (France); ITER Remote Handling Systems team; Carnegie Robotics (US, emerging)",
          geography: "UK, France, and Japan hold the relevant industrial expertise",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Activated fusion reactor interiors cannot be serviced by humans; fully remote maintenance for operations lasting years has not been demonstrated at the required precision and reliability. This constrains plant availability and maintenance cost structurally."
        }
      ]
    },
    {
      name: "Manufacturing & integration",
      links: [
        {
          item: "Fusion-grade structural steel (RAFM steels, EUROFER, F82H)",
          role: "reactor pressure boundary and structural components under neutron flux",
          players: "EUROFER97 alloy developed by EUROfusion consortium (no commercial producer at industrial volume); Japanese F82H steel by Japan Atomic Energy Agency; Sandvik (Sweden, specialty steel R&D); no commercial producer exists at fusion-relevant scale",
          geography: "Europe and Japan hold development programs; no commercial supply chain exists anywhere",
          concentration: "single-source",
          chokepoint: true,
          risk: "Reduced-activation ferritic-martensitic steels must be qualified by accumulating neutron irradiation data at fusion-relevant 14 MeV fluences. IFMIF-DONES in Spain is the only planned facility able to generate this data, and it is not yet operating. Commercial production capacity does not exist. This qualification gap may set the binding schedule constraint for first commercial plants regardless of plasma physics success.",
          fix: "IFMIF-DONES construction in Granada, Spain is the critical path item; materials qualification may require 10-15 years of operation before enough data exists for regulatory licensing."
        },
        {
          item: "HTS magnet coil winding and joint fabrication",
          role: "assembling REBCO tape into finished toroidal and central solenoid coils",
          players: "Commonwealth Fusion Systems (in-house, Devens MA, DOE-validated September 2025); QST Japan (ITER TF coils); Mitsubishi Heavy Industries (ITER CS and PF coils); Tokamak Energy (UK, HTS coil R&D)",
          geography: "Japan, Europe, and US for ITER; CFS building domestic US commercial capability",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Winding multi-MW superconducting coils requires extreme precision; a single defective joint can quench the entire coil. SPARC will be the first commercial-scale test of REBCO coil manufacturing for a net-energy machine. Fewer than 20 facilities worldwide can wind and test large HTS coil sets at fusion-relevant performance levels.",
          fix: "CFS DOE-validated SPARC coil sets represent the most mature commercial HTS coil manufacturing knowledge base in the private sector as of mid-2026."
        },
        {
          item: "Tritium processing and fuel cycle systems",
          role: "isotope separation, tritium accountancy, and safe handling at fusion scale",
          players: "Savannah River National Laboratory (US DOE, primary US tritium processing expertise); Canadian Nuclear Laboratories (CANDU tritium systems); ITER Organization fuel-cycle team (Cadarache, France); SHINE Technologies (Wisconsin, isotope production)",
          geography: "US and Canada hold most operational tritium processing experience; ITER will have the largest civilian tritium facility when complete",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Tritium fuel cycle engineering requires handling a radioactive gas that permeates metals with greater than 99% recycling efficiency. Very few engineers worldwide have hands-on experience. A shortage of qualified tritium systems engineers, not equipment, is the near-term bottleneck.",
          fix: "DOE tritium workforce programs; Canada-US knowledge transfer agreements; private companies hiring from weapons program retirees."
        }
      ]
    },
    {
      name: "Deployment & operations",
      links: [
        {
          item: "Nuclear regulatory licensing pathway",
          role: "first-of-a-kind operating license for private fusion facilities",
          players: "US NRC (Fusion Energy Act 2023 established NRC as regulator); UK Fusion Regulatory Authority (FRA, established 2024); CNSC (Canada); IAEA (international safeguards); no equivalent EU framework yet",
          geography: "US and UK have begun building frameworks; EU and Asia do not have fusion-specific licensing pathways",
          concentration: "single-source",
          chokepoint: true,
          risk: "No private fusion device has ever been licensed anywhere. The US NRC fusion framework is new and untested; a first-of-a-kind licensing process could take a decade. Without a pathway, CFS cannot build ARC even if SPARC succeeds.",
          fix: "US Fusion Energy Act of 2023 directed NRC to develop rules by 2027; UK FRA is operationally ahead with a risk-informed approach designed specifically for fusion. CFS and Helion are both engaging regulators actively."
        },
        {
          item: "Tritium breeding blanket operations",
          role: "in-reactor lithium blanket producing replacement tritium fuel",
          players: "ITER Organization (breeding blanket test modules; under the November 2024 baseline, deuterium-tritium operation slips to 2039); Kyoto Fusioneering (Japan, commercial blanket development); CFS (ARC design); Aker Solutions (Norway, blanket engineering)",
          geography: "No commercial facility operates a breeding blanket today; ITER will be the first serious test platform",
          concentration: "single-source",
          chokepoint: false,
          risk: "Every commercial D-T fusion plant must achieve a tritium breeding ratio above 1.0 or it cannot sustain its own fuel supply. This has never been demonstrated at scale. If TBR cannot be achieved, the entire D-T paradigm requires permanent dependence on CANDU tritium production, which cannot support a fleet.",
          fix: "ITER breeding blanket test modules are the primary validation path; private programs including CFS are developing alternative blanket designs in parallel."
        },
        {
          item: "Site infrastructure and grid interconnection",
          role: "physical site with cooling water, transmission connection, and regulatory clearance",
          players: "Site-specific; CFS at Devens MA for SPARC and Chesterfield County VA for the ARC Fall Line Fusion Power Station (first US Conditional Use Permit, PJM interconnection application filed); ITER at Cadarache, France; Helion's Orion plant in construction in Washington State",
          geography: "Geographic flexibility is higher than fission; fusion plants do not require exclusion zones of comparable size",
          concentration: "diversified",
          chokepoint: false,
          risk: "Gigawatt-scale grid connections in constrained transmission areas carry multi-year queue times. Cooling water requirements for early-generation plants will be substantial. These are standard infrastructure constraints, not fusion-specific.",
          fix: "Not a fusion-specific chokepoint; site selection and early transmission engagement are standard project development tasks."
        }
      ]
    }
  ],

  topChokepoints: [
    {
      item: "REBCO superconducting tape production capacity",
      why: "Production is concentrated at two Japanese facilities (Fujikura and Faraday Factory Japan). A compact tokamak fleet requires kilometers of tape per device, at volumes that do not currently exist anywhere in the world. A single supply disruption — factory, earthquake, or export restriction — would halt multiple programs simultaneously. No US producer is at commercial scale as of mid-2026."
    },
    {
      item: "Tritium supply and breeding blanket validation",
      why: "The global civilian tritium inventory is approximately 25 kg and decaying at 5.5% per year. CANDU production cannot fuel a commercial fleet. Every fusion plant must breed its own tritium at a ratio above 1.0, a feat never demonstrated at scale. Without solving this, fusion is permanently fuel-constrained regardless of plasma physics progress."
    },
    {
      item: "Fusion-grade structural steel and neutron materials qualification",
      why: "Reduced-activation ferritic-martensitic steels must accumulate years of 14 MeV neutron irradiation data before regulators will license a power plant. IFMIF-DONES in Spain, the only planned source for that data, is not yet operating. This qualification gap may set the binding schedule constraint for first commercial plants regardless of plasma physics success."
    }
  ],

  geopolitics: "Fusion's most critical geopolitical vulnerabilities sit at the feedstock level: lithium-6 enrichment is effectively a Chinese monopoly for active civilian capacity, and tungsten mining is approximately 80% China-sourced, though Western fabricators dominate fusion-grade component production. The REBCO tape chain runs primarily through Japan, which is allied with the US but subject to earthquake risk and potential broader East Asia supply chain disruptions. Russia's invasion of Ukraine severed GYCOM as a gyrotron supplier to ITER, demonstrating that equipment-level dependencies matter as much as materials. A US-China conflict scenario that disrupted Japanese manufacturing would threaten tape supply and leave only German and South Korean producers as partial substitutes. The US Fusion Energy Act of 2023 and DOE fusion supply chain initiatives represent a deliberate reshoring push, particularly for REBCO tape and tritium processing. The country that first builds a commercial tritium breeding blanket will hold structural advantage in the fusion export market."
};


/* =============================================================================
   2. GRID-SCALE ENERGY STORAGE
   ============================================================================= */
window.FUTURIST_CHAINS["energy-storage"] = {

  overview: "Battery storage is the most rapidly industrializing supply chain in energy. Lithium-ion already deploys at multi-GWh scale and its cost curve follows Wright's Law with unusual fidelity. The chain's structural weakness is geographic: China controls lithium refining, LFP cathode production, graphite anode processing, and the majority of gigafactory tooling suppliers simultaneously, creating a single-country concentration depth no other energy technology has achieved. Long-duration alternatives — iron-air (Form Energy) and vanadium flow — have more diversified input chains but almost no manufacturing base outside their pilot plants. The deployment chokepoint today is not technology or cost; it is grid interconnection queues running five or more years in the US.",

  tiers: [
    {
      name: "Raw materials & feedstocks",
      links: [
        {
          item: "Lithium carbonate and lithium hydroxide (battery-grade)",
          role: "primary cathode input for LFP and NMC chemistries",
          players: "Mining: SQM and Albemarle (Chile, Atacama brine); Pilbara Minerals, Allkem/Arcadium Lithium, Liontown (Australia, spodumene). Refining to battery-grade: Ganfeng Lithium and Tianqi Lithium (China, dominant); Livent/Arcadium Lithium (US/Argentina); Albemarle (US, Kings Mountain NC processing).",
          geography: "Mining split between Australia and Chile; refining 60-70% China (IEA World Energy Outlook 2024)",
          concentration: "concentrated",
          chokepoint: true,
          risk: "Converting spodumene ore or brine to battery-grade lithium hydroxide requires chemical plants dominated by Chinese operators. New non-Chinese processing facilities take 5-7 years to permit and build. Chile and Argentina both enacted lithium nationalization policies in 2023, creating uncertainty for foreign operators. Price spikes in 2022 demonstrated how quickly refining bottlenecks translate into project cost overruns.",
          fix: "IRA Section 45X credits incentivize US-based processing; Albemarle's Kings Mountain NC expansion and Piedmont Lithium's proposed US facilities are the most advanced non-Chinese alternatives, both targeting the late 2020s."
        },
        {
          item: "Natural graphite (anode feedstock)",
          role: "primary anode active material in all lithium-ion chemistries",
          players: "Natural graphite mining: China produces approximately 65% of global supply; Syrah Resources (Mozambique, Balama mine); Northern Graphite and Nouveau Monde Graphite (Canada). Battery-grade processing: BTR New Energy Materials and Shanshan Technology (China, dominant); Syrah Resources (Louisiana active anode facility, DOE-funded).",
          geography: "China mines approximately 65% of natural graphite and processes over 90% of battery-grade spherical graphite (IEA 2024)",
          concentration: "concentrated",
          chokepoint: true,
          risk: "China imposed graphite export licensing controls in October 2023, requiring export permits for battery-grade graphite products. This is an enacted policy lever, not a hypothetical risk. US and European battery manufacturers have no near-term domestic graphite anode supply at scale.",
          fix: "Syrah's Louisiana active anode facility (DOE-funded) is the most advanced Western alternative; synthetic graphite from petroleum coke is a higher-cost bridge. Silicon anode additions (Sila Nanotechnologies, Group14 Technologies) reduce graphite intensity per cell for higher-energy applications."
        },
        {
          item: "Iron ore and direct-reduced iron pellets",
          role: "anode feedstock for iron-air long-duration batteries",
          players: "Cleveland-Cliffs (US); US Steel; Rio Tinto, BHP, Vale (global majors); Form Energy sources iron from existing US steel supply chains",
          geography: "Globally diversified; no geographic concentration",
          concentration: "diversified",
          chokepoint: false,
          risk: "Iron is abundant and globally traded; this is the primary supply chain advantage of iron-air chemistry over lithium-ion. Form Energy's cost target depends on iron remaining a commodity input, which is not in doubt.",
          fix: "No fix needed. This is the risk-free input in energy storage."
        },
        {
          item: "Vanadium pentoxide",
          role: "electrolyte active material for vanadium redox flow batteries",
          players: "EVRAZ (Canada/Czech Republic); AMG Advanced Metallurgy Group (Netherlands); Bushveld Minerals (South Africa); Largo Resources (Canada, Maracas mine Brazil); Chinese producers supply approximately 61% of global vanadium (author estimate based on USGS 2024 data)",
          geography: "China dominant in total output; Western producers concentrated in a few sites",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Vanadium price is highly volatile; the 2018 price spike from approximately $5/lb to $30/lb demonstrated how quickly cost economics shift for VRFB projects. A sustained spike would make VRFB uncompetitive versus lithium-ion.",
          fix: "Second-life vanadium electrolyte reuse (electrolyte retains value after battery end-of-life) partially insulates VRFB projects from spot price exposure."
        }
      ]
    },
    {
      name: "Components & subsystems",
      links: [
        {
          item: "LFP cathode active material",
          role: "cathode in the dominant stationary storage chemistry",
          players: "CATL (China); BYD (China); Gotion High-Tech (China); Guizhou Anda Energy (China). Non-Chinese scaling: BASF Catalysis (Germany); Umicore (Belgium); several IRA-incentivized US projects announced but pre-construction.",
          geography: "Greater than 80% China by volume (BNEF 2024)",
          concentration: "concentrated",
          chokepoint: true,
          risk: "US and European battery manufacturers require non-Chinese LFP cathode to qualify for IRA Section 45X and European Critical Raw Materials Act incentives. Non-Chinese capacity is small and most announced projects are 2027-2030 vintage at earliest. A trade restriction targeting cathode imports would require 3-5 years to substitute domestically.",
          fix: "IRA 45X cathode credits ($35/kWh) are the primary driver of US LFP investment. EU Critical Raw Materials Act sets 40% domestic processing targets by 2030 that current trajectories will not meet."
        },
        {
          item: "Graphite anode active material (processed)",
          role: "stores and releases lithium ions at the negative electrode during cycling",
          players: "BTR New Energy Materials (China, approximately 25% global share); Shanshan Technology (China); POSCO Chemical (South Korea, Pilbara offtake); Novonix (Canada/US, synthetic graphite); Anovion (US, DOE-funded synthetic graphite)",
          geography: "Chinese firms control over 80% of global processed graphite anode production (IEA 2024)",
          concentration: "concentrated",
          chokepoint: true,
          risk: "Graphite anode is the most China-concentrated component in the lithium-ion chain. China's October 2023 export licensing is the clearest exercise of leverage in energy storage specifically. Silicon-carbon anodes (higher energy density) are not cost-competitive at scale for stationary storage where energy density matters less than cycle life.",
          fix: "Synthetic graphite from petroleum coke is a medium-term bridge; Novonix (Tennessee) and Anovion are scaling US natural graphite anode processing with DOE support."
        },
        {
          item: "Battery-grade electrolyte and LiPF6 salt",
          role: "ion-conducting medium between anode and cathode",
          players: "LiPF6 production: Stella Chemifa and Kanto Denka (Japan); Do-Fluoride Chemicals (China, largest volume). Electrolyte formulation: Solvay (Belgium); Capchem and Shenzhen Capchem Technology (China).",
          geography: "LiPF6: Japan and China; formulated electrolyte: China dominant for volume",
          concentration: "concentrated",
          chokepoint: false,
          risk: "LiPF6 production is geographically concentrated and sensitive to moisture; a supply disruption would propagate to cell manufacturing within weeks given low inventory buffers typical in battery supply chains.",
          fix: "Japanese producers (Stella Chemifa, Kanto Denka) provide a non-Chinese supply alternative; solid-state electrolyte transition would structurally eliminate LiPF6 dependency but is 5-10 years from commercial scale for stationary storage."
        },
        {
          item: "Battery separators",
          role: "microporous membrane preventing electrode contact while permitting lithium ion flow",
          players: "Asahi Kasei (Japan, owns Celgard/US); SK Innovation (South Korea); Toray Industries (Japan); Ube Industries (Japan); Shenzhen Senior Technology Material (China, growing rapidly)",
          geography: "Japan and US (Celgard) for wet-process; South Korea; China expanding",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Separator quality is safety-critical; thin-film defects cause short circuits. Dry-room capacity for new separator facilities carries 2-3 year lead times. Japanese and Korean producers have established supply relationships with major cell manufacturers."
        }
      ]
    },
    {
      name: "Manufacturing & integration",
      links: [
        {
          item: "Gigafactory cell manufacturing equipment",
          role: "electrode coating, calendering, slitting, stacking, and formation tooling",
          players: "Wuxi Lead Intelligent Equipment (China, leading global supplier by volume); Yinghe Technology (China); Hirano Tecseed (Japan); Manz (Germany); Buhler (Switzerland); PNT and Hanwha (South Korea)",
          geography: "China dominant for volume tooling; Germany, Japan, South Korea for premium precision equipment",
          concentration: "concentrated",
          chokepoint: true,
          risk: "Wuxi Lead and Yinghe supply the majority of global gigafactory tooling by volume. US and European battery factories sourcing from China face potential export-control disruption; CHIPS-adjacent controls could extend to battery manufacturing equipment. Lead times are already 12-24 months for new capacity.",
          fix: "Manz, Buhler, and South Korean firms (PNT, Hanwha) are expanding non-Chinese capacity; DOE funded process equipment R&D through the Battery Manufacturing Hub program."
        },
        {
          item: "Lithium-ion cell manufacturing",
          role: "electrochemical cell assembly at gigawatt-hour scale",
          players: "CATL (China, approximately 37% global market share, 2024); BYD (China, approximately 16%); LG Energy Solution (South Korea); Panasonic Energy (Japan/US, Gigafactory Nevada); Samsung SDI (South Korea); SK On (South Korea)",
          geography: "China manufactures over 75% of global lithium-ion cells by volume (IEA 2024); South Korean trio accounts for most of the remainder for non-Chinese markets",
          concentration: "concentrated",
          chokepoint: false,
          risk: "CATL and BYD together control approximately 50% of global cell manufacturing. A US-China trade rupture analogous to semiconductor restrictions could strand US grid storage projects with no domestic cell supply in the near term. IRA domestic content requirements accelerate US cell manufacturing but most new facilities are 2027-2030 vintage.",
          fix: "IRA incentives driving LGES (Holland MI), Panasonic (De Soto KS), and Samsung SDI (Kokomo IN) US gigafactories; Ford, GM, and Stellantis joint ventures provide additional domestic capacity."
        },
        {
          item: "Form Energy Form Factory 1, Weirton WV (iron-air)",
          role: "only large-scale iron-air battery manufacturing facility in existence",
          players: "Form Energy (US, sole operator); facility converted from former steel plant with West Virginia state incentives; GE Vernova as strategic investor and deployment partner",
          geography: "Single site, Weirton, West Virginia",
          concentration: "single-source",
          chokepoint: false,
          risk: "Iron-air has no alternative manufacturing base; if Form Energy encounters technical or financial difficulty, there is no second-source for 100-hour duration batteries. The technology is not yet manufacturing-proven at commercial scale.",
          fix: "GE Vernova partnership and Form Energy's Series E ($405M) provide runway; the Great River Energy Minnesota pilot (1.5 MW / 150 MWh) and the 85 MW / 8,500 MWh Lincoln, Maine plant will generate first real performance data."
        }
      ]
    },
    {
      name: "Deployment & operations",
      links: [
        {
          item: "Grid interconnection and ISO/RTO queue position",
          role: "regulatory authorization to connect storage project to transmission network",
          players: "FERC (US federal authority); regional ISOs and RTOs: PJM, CAISO, MISO, ERCOT; NGESO (UK); AEMO (Australia); no commercial player controls this process",
          geography: "US, UK, and Australia have the most constrained queues relative to project volume",
          concentration: "single-source",
          chokepoint: true,
          risk: "Average US interconnection queue wait exceeded 5 years in 2024 for storage projects (author estimate consistent with LBNL interconnection queue data). A project with financing, contracted cells, and permitted site can still sit idle for years waiting for interconnection studies. This is now the binding constraint on US storage deployment rate, not technology or cost.",
          fix: "FERC Order 2023 reformed the cluster study approach and imposed faster study timelines; implementation is underway but early results are modest. Some developers co-locate with existing generation assets to access existing interconnection rights."
        },
        {
          item: "High-voltage transformers and substation equipment",
          role: "stepping voltage for grid injection and managing fault currents at storage sites",
          players: "Siemens Energy (Germany); ABB (Switzerland); Hitachi Energy (Japan/Switzerland); GE Vernova (US); SPX Transformer Solutions (US); lead times for large power transformers reached 3-4 years in 2023-2025",
          geography: "Manufacturing spread across Germany, Switzerland, US, Japan; lead times are the operational constraint",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Large transformer lead times of 3-4 years are currently pacing grid expansion for both storage and renewable projects. Demand from AI data centers, EV charging, and storage is compounding the shortage simultaneously. DOE Liftoff Report on grid hardware (2024) identified transformer shortages as a national supply chain risk.",
          fix: "Domestic manufacturing expansion by ABB and Siemens Energy in North America is underway; import from South Korea, India, and Europe is the near-term path."
        },
        {
          item: "Long-term service agreements and cell augmentation",
          role: "maintaining warranted capacity over project lifetime as cells degrade",
          players: "CATL, BYD, Tesla Energy, Fluence (Siemens/AES JV) as primary warrantors; Wärtsilä Energy Services; independent service companies emerging",
          geography: "Warranty obligations follow manufacturer geography; services market is still developing",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Grid-scale batteries degrade 1-2% per year under typical cycling. Long-term PPAs often guarantee 80% or more of rated capacity at year 10. Augmentation requires purchasing replacement cells at future unknown prices, creating financial model exposure for project developers.",
          fix: "LFP chemistry degrades more slowly than NMC/NCA under stationary cycling, reducing augmentation frequency; early contract structures are evolving to share this risk between developer and manufacturer."
        }
      ]
    }
  ],

  topChokepoints: [
    {
      item: "Chinese graphite anode processing and October 2023 export controls",
      why: "China processes over 90% of global natural graphite into battery-grade anode material (IEA 2024). The October 2023 export licensing requirement for graphite products is an enacted policy lever, not a hypothetical risk. No Western producer can substitute at scale within 3-5 years. This is the most immediately actionable geopolitical chokepoint in the lithium-ion supply chain."
    },
    {
      item: "Chinese dominance of lithium refining and LFP cathode production",
      why: "China controls 60-70% of lithium hydroxide processing and over 80% of LFP cathode production simultaneously. Western gigafactories depend on this supply. IRA and European incentives require non-Chinese content that does not yet exist at scale, creating a multi-year gap between policy intent and supply-chain reality."
    },
    {
      item: "Grid interconnection queues",
      why: "Average US interconnection wait times exceeded 5 years in 2024. Battery storage projects with signed contracts, financing, and delivered hardware cannot reach the grid because regulatory queues are the binding constraint. This caps the pace of storage deployment independent of cost or manufacturing progress."
    }
  ],

  geopolitics: "The battery storage supply chain is the most geopolitically concentrated major energy technology. China controls mining-to-cell in a single national jurisdiction for most of the volume, an integration depth no other supply chain in energy history has achieved. China's October 2023 graphite export controls were an explicit demonstration of leverage; its July 2023 gallium and germanium export controls hit power electronics used in storage inverters as an indirect effect. The US Inflation Reduction Act and European Critical Raw Materials Act are the primary policy instruments attempting to diversify, but new refining and cathode capacity takes 5-7 years to build and most announced non-Chinese projects remain pre-construction. Australia is the most significant Western-aligned lithium mining jurisdiction and is investing in domestic processing. CATL's sodium-ion scale-up (Naxtra cell, mass production begun December 2025) offers reduced lithium dependency at the chemistry level but replicates Chinese manufacturing dominance in the successor chemistry. Iron-air (Form Energy) is the only major storage pathway with genuinely diversified raw material inputs, but it remains a single commercial facility with unproven production-scale economics."
};


/* =============================================================================
   3. ROOM-TEMPERATURE SUPERCONDUCTORS
   ============================================================================= */
window.FUTURIST_CHAINS["superconductors"] = {

  overview: "This entry covers two distinct chains. First, the mature commercial chain for low-temperature superconductors (LTS) used in MRI machines and particle accelerators, and the early-commercial REBCO high-temperature superconductor (HTS) tape chain load-bearing for fusion and next-generation magnets. Second, a hypothetical chain for ambient-pressure room-temperature superconductors (RT-SC), presented as speculative only: no ambient-pressure RT-SC has survived independent replication as of mid-2026. The LK-99 claim was debunked by the Korean Physical Society in December 2023; Ranga Dias's publications were retracted from Nature and Physical Review Letters following a misconduct investigation (Castelvecchi, Nature, 2024). Any RT-SC supply chain analysis downstream of raw materials is therefore speculative and labeled as such. The real commercial and strategic story in superconductors is the REBCO tape chain, already a chokepoint for fusion programs and increasingly for high-field MRI and scientific magnet upgrades.",

  tiers: [
    {
      name: "Raw materials & feedstocks",
      links: [
        {
          item: "Rare earth elements: yttrium, lanthanum, barium (REBCO and cuprate HTS)",
          role: "primary constituents of REBCO tape and cuprate superconductors",
          players: "China Northern Rare Earth Group (China, dominant global producer); MP Materials (Mountain Pass CA, US, primary US producer); Lynas Rare Earths (Mount Weld, Australia); Energy Fuels (US, from uranium byproduct stream)",
          geography: "Mining and processing: approximately 85% China by volume (IEA 2024); US and Australia growing under government contracts",
          concentration: "concentrated",
          chokepoint: true,
          risk: "REE supply for REBCO is already a real constraint for fusion magnet programs dependent on yttrium-barium-copper oxide tape. China's 2023 gallium and germanium export controls established the precedent for restricting adjacent critical materials. A broad REE export restriction analogous to the 2010 Japan episode would affect yttrium oxide availability for non-Chinese tape producers within 12-24 months.",
          fix: "MP Materials and Lynas are expanding separated REE oxide production outside China under US DOD and Australian government contracts; meaningful diversification is 5-10 years from current scale."
        },
        {
          item: "Niobium (for NbTi and Nb3Sn low-temperature superconductors)",
          role: "primary metallic conductor in LTS wire for MRI, NMR, and accelerators",
          players: "CBMM (Companhia Brasileira de Metalurgia e Mineracao, Brazil, approximately 85% of global supply); Anglo American Niobio (Brazil); NioCorp Developments (US, Elk Creek project, pre-production); Niobec (Canada, Magris Resources)",
          geography: "Approximately 85% Brazil; effective single-country source",
          concentration: "single-source",
          chokepoint: true,
          risk: "CBMM's Araxá mine produces approximately 85% of the world's niobium. A disruption to Araxá — labor action, regulatory shutdown, or catastrophic failure — would affect MRI manufacturing and scientific magnet programs globally within months. No alternative source at comparable scale exists or is near production.",
          fix: "NioCorp's US Elk Creek project and Niobec in Canada are the two most developed alternatives; both are years from production at meaningful scale."
        },
        {
          item: "Liquid helium (for LTS cooling to 4K)",
          role: "only coolant capable of reaching the 4K operating temperature of NbTi and Nb3Sn",
          players: "ExxonMobil (US, Shute Creek facility); Air Products (US); Linde (Germany/US); Air Liquide (France); QatarEnergy Helium (Qatar, major exporter); Gazprom (Russia, Amur — severely constrained post-2022)",
          geography: "US and Qatar are the two largest reliable exporters post-2022 Russian supply disruption; helium is extracted as a non-renewable byproduct of natural gas",
          concentration: "concentrated",
          chokepoint: false,
          risk: "The Russian Amur facility's post-2022 constraints removed a significant supply source. Helium supply for LTS MRI and scientific magnets is tighter than pre-2022. HTS magnets (REBCO) operate at 20-40K and can use liquid hydrogen or neon cooling, reducing helium dependency for next-generation systems.",
          fix: "Closed-loop helium recycling at MRI and research facilities reduces but does not eliminate dependency; HTS magnet transition structurally reduces liquid helium demand per installation over time."
        },
        {
          item: "Hydrogen precursor compounds (for superhydride RT-SC research) [SPECULATIVE]",
          role: "hydrogen donors for synthesizing high-Tc superhydrides under pressure",
          players: "Industrial H2: Air Products, Linde, Air Liquide (globally distributed). Specialty hydride precursors: Gelest (US); Sigma-Aldrich/MilliporeSigma (US, Merck subsidiary). No supply chain exists for superhydride compounds at industrial scale.",
          geography: "Industrial H2 globally diversified; specialty precursors available at research scale only",
          concentration: "diversified",
          chokepoint: false,
          risk: "If a pressure-reduced superhydride is discovered and requires industrial synthesis, precursor chemistry would need to be scaled from research reagents. This is a standard chemical engineering challenge rather than a structural constraint, provided a specific compound is identified.",
          fix: "Standard specialty chemical scale-up; not a gating constraint compared to the physics and synthesis challenges."
        }
      ]
    },
    {
      name: "Components & subsystems",
      links: [
        {
          item: "REBCO HTS tape (coated conductor)",
          role: "superconducting layer for 20-40K high-field magnets in fusion, MRI, and motors",
          players: "Fujikura Ltd (Japan, largest volume commercial producer); Faraday Factory Japan (SuperPower Inc. / Furukawa Electric, Japan); Shanghai Superconductor Technology (China); THEVA (Germany); Bruker HTS (Germany); SuNAM (South Korea); MetOx Technologies (US, pre-commercial)",
          geography: "Commercial production concentrated in Japan; China has domestic capacity; Western Europe and US are emerging",
          concentration: "concentrated",
          chokepoint: true,
          risk: "REBCO tape manufacture involves vacuum deposition of multiple ceramic layers with tight tolerances over kilometer-length runs. Total global production capacity is insufficient for large-scale HTS magnet deployment across fusion, wind turbine motors, or MRI upgrades simultaneously. Expanding capacity requires capital investment and 3-5 year facility buildout. A disruption at the two Japanese facilities would affect essentially every HTS magnet program in the Western world.",
          fix: "CFS has reportedly funded capacity expansion at tape manufacturer partners (company statement, not independently verified); MetOx Technologies is the most advanced US entrant; SuNAM and European producers (THEVA, Bruker HTS) are scaling."
        },
        {
          item: "NbTi and Nb3Sn LTS wire",
          role: "superconducting wire for MRI magnets, NMR instruments, and particle accelerators",
          players: "Bruker EAS (Germany, Nb3Sn for LHC and ITER magnets); Luvata (Finland/US, NbTi for MRI); Western Superconducting Technologies (China, HL-LHC wire and domestic programs); Furukawa Electric (Japan)",
          geography: "Western LTS wire: Germany (Bruker EAS) and Finland/US (Luvata) are dominant non-Chinese producers; China has domestic LTS capability",
          concentration: "concentrated",
          chokepoint: false,
          risk: "LTS wire supply for MRI is mature with established supply chains to Siemens Healthineers, GE Healthcare, and Philips. The constraint is for very-high-field Nb3Sn wire (used in 11.7T and above MRI and HL-LHC upgrades) where CERN qualification requirements limit the supplier pool.",
          fix: "No raw material constraint; the limitation is specialized Nb3Sn wire-drawing process capability held by a small number of qualified firms."
        },
        {
          item: "High-pressure synthesis apparatus for RT-SC research [SPECULATIVE]",
          role: "diamond anvil cells for superhydride discovery; not a production input",
          players: "Almax easyLab (Belgium); Diacell Products (UK); Element Six (De Beers subsidiary, synthetic diamond); research groups at Max Planck Mainz (Eremets), GWU (Hemley), Cambridge (Pickard)",
          geography: "Belgium, UK, and US for research-grade diamond anvil supply; leading experimental groups in Germany, US, and UK",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Diamond anvil cells operating above 100 GPa are consumable research instruments. Scaling any discovered superhydride to production requires entirely different high-pressure technology. The research apparatus is not the production bottleneck; it is the discovery tool. The field's credibility was damaged by the LK-99 episode (Korean Physical Society debunking, December 2023) and the Dias retractions (2023-2024). Any new claim requires simultaneous independent measurement of resistivity drop, Meissner effect, and specific heat anomaly before being treated as credible (standard established by Jorge Hirsch, UCSD, independent critic).",
          fix: "Computational prediction tools — AIRSS (Pickard, Cambridge) and CALYPSO (Ma Yanming) — are accelerating candidate identification; recoverable high-pressure phases that retain structure after pressure release are the key intermediate research target."
        }
      ]
    },
    {
      name: "Manufacturing & integration",
      links: [
        {
          item: "MRI and NMR magnet manufacturing",
          role: "integration of LTS wire into clinical imaging and spectroscopy systems",
          players: "Siemens Healthineers (Germany); GE Healthcare (US); Philips (Netherlands); Canon Medical (Japan); Bruker (Germany, NMR and research magnets)",
          geography: "Three OEMs — Siemens, GE, Philips — control the global clinical MRI market; manufacturing distributed across Germany, US, UK, and Japan",
          concentration: "concentrated",
          chokepoint: false,
          risk: "MRI magnet manufacturing is mature. The supply chain exposures are to helium cooling and niobium-titanium wire, covered above. No near-term manufacturing disruption is anticipated at this tier.",
          fix: "Not required at this tier."
        },
        {
          item: "HTS magnet coil winding for scientific and fusion applications",
          role: "assembly of REBCO tape into high-field coil sets",
          players: "Commonwealth Fusion Systems (US, SPARC coil sets, DOE-validated September 2025); Tokamak Energy (UK); CERN (Switzerland, HL-LHC HTS insertion magnets); Brookhaven National Laboratory (US, sPHENIX); Kyushu University (Japan, stellarator programs)",
          geography: "Capability is distributed but thin: fewer than 20 facilities worldwide can wind and test large HTS coil sets at fusion-relevant performance levels",
          concentration: "concentrated",
          chokepoint: false,
          risk: "HTS coil winding is craft-intensive with a small global workforce. Workforce depth, not equipment availability, limits scale-up speed. CFS's DOE-validated SPARC coil sets represent the most mature commercial HTS coil manufacturing knowledge base in the private sector as of mid-2026.",
          fix: "CFS in-house manufacturing represents the leading know-how base; other programs are at earlier stages and must develop independent capability or license process knowledge."
        },
        {
          item: "Industrial high-pressure synthesis presses [SPECULATIVE, if superhydride path]",
          role: "production-scale synthesis of materials requiring moderate high pressure",
          players: "Sumitomo Electric Hardmetal (Japan); Hymag (Germany); Riken (Japan); no supplier currently manufactures superhydride production presses because no such production exists",
          geography: "Japan and Germany for precision high-pressure equipment",
          concentration: "concentrated",
          chokepoint: true,
          risk: "If the winning RT-SC requires even moderate pressure in synthesis (1-10 GPa), the industrial multi-anvil press supply chain does not exist at required scale. Diamond and cubic boron nitride synthesis industries use this equipment and could provide a template, but superconductor volumes would require massive expansion. This chokepoint severity depends entirely on what material is discovered and whether ambient-pressure synthesis is achievable.",
          fix: "The ideal outcome is a material synthesizable at ambient pressure via chemical routes; the superhydride pre-compression molecular donor strategy is designed to avoid this bottleneck."
        }
      ]
    },
    {
      name: "Deployment & operations",
      links: [
        {
          item: "Cryogenic cooling and quench protection for deployed LTS/HTS systems",
          role: "lifecycle maintenance including cooling, quench detection, and safe energy dissipation",
          players: "Sumitomo Heavy Industries (Japan, dominant cryocooler supplier); Cryomech (US); Air Liquide (France, large-scale systems); Lake Shore Cryotronics (US, instrumentation); Magnicon (Germany, quench detection); OEM service organizations for MRI",
          geography: "Japan dominant for cryocoolers; US and European specialists for instrumentation; mature MRI service network globally",
          concentration: "concentrated",
          chokepoint: false,
          risk: "LTS quench protection is well understood after 90 years of practice. HTS coil quench protection at SPARC/ARC scale is a specialized and unresolved engineering problem; commercial-scale quench protection systems for large HTS fusion magnets do not exist as validated products.",
          fix: "CFS has designed and tested quench protection for SPARC coils; this know-how must be re-engineered for each new HTS magnet geometry at commercial scale."
        },
        {
          item: "Superconducting power cable installation and grid integration [PARTIAL PRECEDENT]",
          role: "in-ground or tunnel-installed superconducting transmission cables",
          players: "Nexans (France, deployed LN2-cooled REBCO cable in Amsterdam, 2019-present); LS Cable (South Korea, Long Island power authority project); Furukawa (Japan); American Superconductor (US); no commercial RT-SC cable system exists",
          geography: "France and South Korea have the only commercial HTS cable deployments; US and Japan have had smaller pilots",
          concentration: "diversified",
          chokepoint: false,
          risk: "Existing HTS cable deployments use liquid nitrogen cooling. A room-temperature superconductor would eliminate the cooling plant and substantially reduce cable system cost, but grid cable installation is slow and capital-intensive regardless of conductor material. Permitting, trenching, and grid interconnection timelines dominate project schedules.",
          fix: "The existing HTS cable industry provides a technical roadmap; eliminating cryogenics would remove the largest cost and operational complexity barrier."
        },
        {
          item: "Intellectual property and materials licensing",
          role: "composition-of-matter, synthesis, and application patents for any new RT-SC material",
          players: "University of Rochester (Dias group patents, under legal scrutiny post-retractions); Korea Institute of Science and Technology; Max Planck Society (Eremets group); Cambridge University (Pickard group); no commercial IP exists for any confirmed RT-SC material",
          geography: "Academic institutions globally; no commercial patent position exists for a proven material",
          concentration: "diversified",
          chokepoint: false,
          risk: "Whoever synthesizes and patents the first confirmed room-temperature superconductor will hold a position analogous to the Bednorz and Muller 1986 cuprate patent. Government-funded basic research tends to produce broadly licensed foundational IP, but a private company making the discovery could adopt a more restrictive posture.",
          fix: "Open science norms in condensed matter physics are strong relative to applied fields; DOE and DFG-funded research would likely produce broadly licensed foundational patents."
        }
      ]
    }
  ],

  topChokepoints: [
    {
      item: "REBCO HTS tape production capacity (Fujikura and Faraday Factory Japan)",
      why: "Two Japanese facilities produce the dominant share of commercial REBCO tape globally. Total global production is insufficient for the HTS magnet volumes implied by even a modest fusion or industrial motor deployment program. No US producer is at commercial scale. Expansion requires 3-5 year facility investment. A supply disruption or export restriction at either Japanese facility would halt virtually every HTS magnet program in the Western world."
    },
    {
      item: "Niobium supply concentration (CBMM Brazil, approximately 85% of global supply)",
      why: "CBMM's Araxá mine produces approximately 85% of the world's niobium, the primary metal in NbTi and Nb3Sn LTS wire used in MRI, NMR, and scientific accelerators. No other source at comparable scale exists or is near production. A disruption to Araxá would cascade through MRI manufacturing and scientific infrastructure globally within months."
    },
    {
      item: "RT-SC materials discovery and verification bottleneck [SPECULATIVE]",
      why: "For ambient-pressure room-temperature superconductors, which do not exist as a proven material as of mid-2026, the binding constraint is scientific reproducibility and bulk synthesis. The field's credibility crisis (Dias retractions, LK-99 debunking) requires any new claim to demonstrate three simultaneous independent measurements before it can ground supply chain planning. This chokepoint is labeled speculative and is upstream of any commercial chain."
    }
  ],

  geopolitics: "The superconductor supply chain divides into two geopolitical profiles by type. Low-temperature superconductors (NbTi, Nb3Sn) are a US-Europe-Japan story with Brazil as the single structural dependency via CBMM's niobium near-monopoly. Brazil is not currently a geopolitical adversary to any major buyer, but the concentration level is unusual and periodically flagged in US critical minerals reviews. High-temperature superconductors (REBCO tape) have a Japan-China-US profile: Japan dominates commercial production, China has domestic capability through Shanghai Superconductor and has demonstrated willingness to restrict exports of adjacent materials (gallium and germanium 2023; graphite 2023; rare earths 2010), and the US has no commercial-scale REBCO producer. The strategic importance of REBCO tape for fusion programs has elevated it in US policy circles; the DOE Milestone-Based Fusion Development Program implicitly depends on tape supply chains running through Japan. A US-China conflict scenario disrupting Japanese manufacturing would be the worst case, cutting the primary supply chain and leaving only German and South Korean producers as partial substitutes. For room-temperature superconductors, geopolitics are a research competition rather than an industrial one: China has well-funded domestic high-pressure physics programs, and if the winning material requires rare earth elements, China controls the processing chain for those inputs from day one."
};


/* =============================================================================
   4. ADVANCED NUCLEAR FISSION & SMRs
   ============================================================================= */
window.FUTURIST_CHAINS["nuclear-fission"] = {

  overview: "Fission's binding scarcity is not the reactor designs, which are abundant and increasingly permitted, but the front end of the fuel cycle and the heavy-forging midstream. The West let its enrichment and nuclear-grade heavy-manufacturing base atrophy for 40 years while Russia's Rosatom became the dominant commercial enricher and the only at-scale source of the high-assay low-enriched uranium (HALEU) that advanced and Gen-IV designs require. Domestic HALEU today is a single demonstration cascade, and large-forging capacity for reactor pressure vessels sits mostly in Japan and Korea. Downstream, the demand signal is real and contracted through hyperscaler PPAs, but no Western SMR has yet proven that repeat builds cheapen rather than repeat the first-of-a-kind cost blowups.",

  tiers: [
    {
      name: "Raw materials & feedstocks",
      links: [
        {
          item: "HALEU enrichment (19.75% enriched uranium)",
          role: "fuel for advanced and Gen-IV reactor designs",
          players: "Centrus Energy (NYSE:LEU, sole US-technology HALEU demo at Piketon, OH; ~900 kg delivered to DOE; DOE $900M task order Jan 2026); Urenco (US/Europe consortium building HALEU); Orano (France); Rosatom (Russia, dominant existing commercial enricher and only at-scale HALEU source)",
          geography: "Russia dominant for existing commercial supply; US domestic supply is one demo cascade; Europe (Urenco, Orano) scaling",
          concentration: "single-source",
          chokepoint: true,
          risk: "Advanced/Gen-IV designs cannot fuel without HALEU, and domestic supply is a single demonstration cascade against Russian dominance. Metric-ton, fleet-scale domestic HALEU remains years out; any export-control or conflict shock hits the fuel front end hardest.",
          fix: "DOE task orders to Centrus ($900M, Jan 2026) plus Centrus's $560M+ Oak Ridge high-rate centrifuge conversion, alongside Urenco and Orano-US builds, are the reshoring push, but all are years from fleet scale."
        },
        {
          item: "Natural uranium mining and conversion",
          role: "front-end feedstock before enrichment",
          players: "Cameco (Canada); Kazatomprom (Kazakhstan); Orano (France); US legacy production minimal",
          geography: "Concentrated in Canada, Kazakhstan, and France; US domestic output minimal",
          concentration: "concentrated",
          chokepoint: false,
          risk: "US legacy mining and conversion capacity is minimal, leaving the front end dependent on a small set of foreign producers. Kazakhstan volume adds a further geographic concentration exposure.",
          fix: "The 2024 Russian-uranium import ban (with waivers) and DOE funding are intended to rebuild domestic front-end capacity over time."
        },
        {
          item: "TRISO fuel fabrication",
          role: "coated-particle fuel for HTGR and pebble-bed designs",
          players: "X-energy TX-1 (TRISO-X, Oak Ridge, TN); BWXT",
          geography: "US (Oak Ridge, TN); concentrated and sub-scale",
          concentration: "concentrated",
          chokepoint: false,
          risk: "TRISO fuel fabrication capacity is concentrated and sub-scale relative to the pipeline of HTGR and pebble-bed programs that depend on it, compounding the HALEU constraint for advanced designs.",
          fix: "X-energy owns its TRISO-X fuel fab as an anchor; scaling remains FOAK alongside the reactor programs it serves."
        }
      ]
    },
    {
      name: "Components & subsystems",
      links: [
        {
          item: "Reactor pressure vessels and large forgings",
          role: "primary pressure boundary; long-lead gating component",
          players: "GE-Hitachi (contracted RPV fabrication for Darlington BWRX-300, Jan 2025); Japan Steel Works and Doosan (Korea) hold historical heavy-forging capacity",
          geography: "Heavy-forging capacity concentrated historically in Japan and Korea; thin in the West",
          concentration: "concentrated",
          chokepoint: true,
          risk: "Global heavy-forging capacity for reactor pressure vessels is thin and concentrated, with long lead times that gate every build regardless of design or licensing progress.",
          fix: "GE-Hitachi's contracted RPV fabrication for Darlington shows Western supply relationships forming, but capacity remains concentrated in Japan and Korea."
        },
        {
          item: "Reactor vendors and designs",
          role: "reactor IP: LWR SMRs and Gen-IV designs",
          players: "GE Vernova (BWRX-300), NuScale (US460), X-energy, Kairos, TerraPower, Oklo, Holtec, Terrestrial Energy, Rolls-Royce SMR",
          geography: "Diversified across US, UK, and allied vendors",
          concentration: "diversified",
          chokepoint: false,
          risk: "Reactor IP is abundant and increasingly permitted, so design availability is not the constraint; the risk is that most vendors are pre-revenue and dependent on FOAK success and federal cost-share.",
          fix: "Multiple construction permits now in hand (TerraPower Natrium Mar 2026; Kairos Hermes) diversify the design pipeline away from any single vendor."
        },
        {
          item: "Specialty coolants (sodium, FLiBe molten salt, helium)",
          role: "primary coolant for Gen-IV fast and molten-salt designs",
          players: "Niche suppliers; TerraPower (sodium) and Kairos (FLiBe molten salt) developing in-house",
          geography: "Niche and thin; developed largely within reactor programs",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Gen-IV coolants have niche supply bases, and coolant, fuel, and design are all first-of-a-kind simultaneously for advanced programs, compounding execution risk.",
          fix: "TerraPower and Kairos are developing coolant supply within their own programs rather than relying on an external market."
        }
      ]
    },
    {
      name: "Manufacturing & integration",
      links: [
        {
          item: "EPC and integrated project delivery",
          role: "construction and integration of nuclear plants",
          players: "Bechtel; Aecon; AtkinsRéalis (formerly SNC-Lavalin, Darlington alliance); Fluor (NuScale's largest backer)",
          geography: "Concentrated among a few Western EPC firms; skilled trades constrained",
          concentration: "concentrated",
          chokepoint: true,
          risk: "FOAK construction execution is where the CFPP-style cost blowup lives, and skilled nuclear trades are constrained. No Western SMR has yet proven serial, Nth-of-a-kind cost decline below firm-power alternatives.",
          fix: "DOE cost-share ($400M each to TVA and Holtec, Dec 2025; ~$2B ARDP grant to TerraPower) and hyperscaler prepayments de-risk FOAK, but serial cost decline is still unproven."
        },
        {
          item: "Modular module fabrication",
          role: "factory fabrication of standardized reactor modules",
          players: "NuScale/Fluor and other SMR vendors; still first-of-a-kind",
          geography: "Nascent; no proven Nth-of-a-kind factory base",
          concentration: "concentrated",
          chokepoint: false,
          risk: "The 'modular equals cheap' claim is unproven at Nth-of-a-kind; module fabrication remains FOAK, and the reference outcome is NuScale/UAMPS, whose price crept from $58 to $89/MWh before cancellation.",
          fix: "Repeat/serial builds are the intended path to cost decline, but no Western program has yet demonstrated it."
        }
      ]
    },
    {
      name: "Deployment & operations",
      links: [
        {
          item: "Operators and utilities",
          role: "own and run the existing fleet plus restarts",
          players: "Constellation (NASDAQ:CEG); Vistra (NYSE:VST); Talen (NASDAQ:TLN); TVA; OPG (Canada); Holtec (Palisades)",
          geography: "Diversified across US utilities plus OPG in Canada",
          concentration: "diversified",
          chokepoint: false,
          risk: "Operator exposure is the lower-risk part of the chain, but near-term new supply is dominated by restarts (TMI/Crane, Palisades) rather than operating SMRs, of which zero are yet generating US power.",
          fix: "Existing-fleet operators monetize scarcity today and carry restart optionality without pure-play FOAK risk."
        },
        {
          item: "Hyperscaler offtake and demand",
          role: "contracted power demand driving the fission restart",
          players: "Microsoft (Constellation TMI/Crane PPA); Amazon (X-energy 5 GW Xe-100; Talen Susquehanna); Google (Kairos 500 MW); Meta (1-4 GW RFP + Oklo prepayment); Switch (Oklo)",
          geography: "Concentrated demand among a handful of US hyperscalers",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Demand is concentrated among a few hyperscalers, and much of it is LOIs rather than firm, financeable contracts. Whether these specific developers deliver at competitive cost is the open bet.",
          fix: "Conversion of LOIs to firm PPAs (Microsoft-Constellation restart is the nearest test) would harden the demand side."
        },
        {
          item: "Grid interconnection and spent-fuel handling",
          role: "connecting plants to the grid and managing waste",
          players: "Regional ISOs/RTOs (e.g. PJM for TMI/Crane); no permanent US spent-fuel repository",
          geography: "US-wide system constraints; interconnection queues and waste policy unresolved",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Grid interconnection queues and unresolved spent-fuel/waste handling remain system-level constraints on deployment that sit outside any single developer's control.",
          fix: "Restarts co-located with existing grid connections (TMI/Crane) partly bypass interconnection delay; long-term waste policy remains unresolved."
        }
      ]
    }
  ],

  topChokepoints: [
    {
      item: "HALEU enrichment",
      why: "Advanced and Gen-IV reactors cannot fuel without high-assay low-enriched uranium, and domestic supply is a single Centrus demonstration cascade against Russian (Rosatom) dominance as the only at-scale commercial source. Fleet-scale domestic HALEU is years out; this is the most binding constraint in the chain."
    },
    {
      item: "Heavy forgings and reactor pressure vessels",
      why: "Global heavy-forging capacity is thin and concentrated historically in Japan and Korea. Long lead times on reactor pressure vessels gate every build regardless of how fast designs are licensed, and Western fabrication capacity is only beginning to rebuild."
    },
    {
      item: "FOAK construction execution and skilled nuclear workforce",
      why: "The first-of-a-kind cost blowup lives here: the NuScale/UAMPS project died after its price climbed from $58 to $89/MWh. No Western SMR has yet proven serial, Nth-of-a-kind cost decline below firm-power alternatives, and skilled nuclear trades are constrained."
    }
  ],

  geopolitics: "Russia's Rosatom holds structural leverage over the fuel front end: it is the dominant existing commercial enricher and effectively the only established at-scale source of HALEU, the fuel that advanced and Gen-IV designs require. That dependence is the chain's sharpest geopolitical vulnerability, and US law (the 2024 Russian-uranium import ban, with waivers) plus DOE funding are a deliberate reshoring push, with Centrus, Urenco, and Orano-US as the West's answer, though all are years from fleet scale. Export-control or conflict shocks would hit the fuel front end hardest, while heavy-forging dependence on Japan and Korea adds a second, allied but concentrated, exposure. There is also a genuine security tension the roadmaps largely gloss over: Edwin Lyman and colleagues argue (Science, 2024) that roughly one metric ton of HALEU, possibly less, is weapons-usable, so a large HALEU buildout raises proliferation questions alongside the supply-security ones."
};
