/* =============================================================================
   THE FUTURIST — chains-machines.js
   Supply chain deep-dives: Machines domain
   Technologies: Humanoid Robots | Atomically Precise Manufacturing | Autonomous Transport
   Author: Deal Researcher (Sela Capital / Lintel research stack)
   Date: 2026-06-12
   Schema: _schema.js (SUPPLY CHAIN DEEP-DIVE block)
   ============================================================================= */

window.FUTURIST_CHAINS = window.FUTURIST_CHAINS || {};

/* =============================================================================
   1. GENERAL-PURPOSE HUMANOID ROBOTICS
   ============================================================================= */

window.FUTURIST_CHAINS["humanoid-robots"] = {

  overview: "Humanoid robot supply chains converge several mature but geographically concentrated industries: rare-earth magnet refining (China-dominant), precision motion components (Japan-dominant), and AI compute silicon (US-designed, Taiwan-fabricated). The hardware chain is largely real and operating at low volume today; scale bottlenecks are in magnets, harmonic drives, and dexterous hand assemblies. Software and AI model infrastructure is the least constrained tier. The chain's central vulnerability is China's control over the rare-earth refining and magnet production that powers every brushless motor in the system.",

  tiers: [
    {
      name: "Raw materials & feedstocks",
      links: [
        {
          item: "Neodymium-iron-boron (NdFeB) rare-earth permanent magnets",
          role: "primary actuator magnets in all BLDC motors",
          players: "China Rare Earth Group, Northern Rare Earth Group (China state-owned); MP Materials (US, Mountain Pass mine); Lynas Rare Earths (Australia)",
          geography: "China refines approximately 85-90% of global rare-earth oxides and produces roughly 90% of NdFeB magnets by volume (USGS Mineral Commodity Summaries 2024 estimate; author note: precise share is contested but all major sources place China above 85% of magnet output)",
          concentration: "single-source",
          chokepoint: true,
          risk: "China imposed heavy rare-earth and magnet export controls in April 2025, escalated them in October 2025 (Notice 2025/61, adding SmCo and Dy/Tb-bearing NdFeB magnets plus an extraterritorial 50% rule), then suspended that October package for one year to Nov 2026 under a US-China trade truce. The leverage is intact even while paused. No near-term substitute for NdFeB in high-torque actuators exists at comparable cost and energy density.",
          fix: "MP Materials runs its Fort Worth, TX magnet plant and signed a 2025 DoD price-floor deal that made the Pentagon a shareholder; Lynas separated heavy rare earths (dysprosium) outside China in 2025. US DOE and CHIPS-adjacent funding is accelerating Western capacity, but full independence is a decade away."
        },
        {
          item: "Lithium-ion battery cells (NMC/LFP)",
          role: "onboard power storage for untethered operation",
          players: "CATL (China), BYD (China), Panasonic (Japan, with Tesla), Samsung SDI (South Korea), LG Energy Solution (South Korea)",
          geography: "China accounts for roughly 75-80% of global lithium-ion cell production capacity (BloombergNEF Battery Market Outlook 2024)",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Battery energy density is the primary constraint on robot operating time per charge. At current density (~300 Wh/kg at cell level), a humanoid robot achieves roughly 2-4 hours of mixed-task operation. This limits deployment economics in continuous-shift applications.",
          fix: "Solid-state batteries (QuantumScape, Toyota) target 400-500 Wh/kg but remain pre-commercial at scale. In the near term, robot makers are optimizing power management and accepting tethering for stationary tasks."
        },
        {
          item: "Specialty steel and aluminum alloys",
          role: "structural frame, link, and enclosure materials",
          players: "Diversified global steel and aluminum producers; no single dominant supplier for robotics-grade alloys",
          geography: "Global; titanium alloys (used in some high-performance links) sourced partly from Russia and China, creating a secondary concentration risk",
          concentration: "diversified",
          chokepoint: false,
          risk: "Titanium supply has modest geopolitical exposure following Russia sanctions; structural alloys are not a near-term bottleneck for low-volume humanoid production."
        }
      ]
    },
    {
      name: "Components & subsystems",
      links: [
        {
          item: "Harmonic drive / strain-wave gearboxes",
          role: "zero-backlash joint reduction for precise limb control",
          players: "Harmonic Drive Systems (Japan); Nidec-Shimpo (Japan); HDSI (US subsidiary of Harmonic Drive AG); SurplusTech (limited alternative)",
          geography: "Japan dominates design and production; no equivalent Western volume manufacturer exists",
          concentration: "single-source",
          chokepoint: true,
          risk: "Harmonic Drive Systems holds foundational IP and manufacturing know-how accumulated over 60 years. Lead times extended to 12-18 months during the 2021-2023 supply crunch. A single-country dependency on Japan creates tariff and geopolitical exposure for Chinese and US robot OEMs alike.",
          fix: "Several Chinese manufacturers (LEADERDRIVE, Shenzhen Han's Motion Technology) are producing harmonic drives at lower cost, but precision and longevity at equivalent spec remain unverified at scale. Planetary roller screws are a partial alternative for some joint types."
        },
        {
          item: "Brushless DC (BLDC) motors and servo drives",
          role: "rotary actuation at every joint",
          players: "Maxon Group (Switzerland), Kollmorgen (US/Regal Rexnord), Allied Motion (US), Estun Automation (China), T-Motor (China)",
          geography: "Design capability spread across Europe, US, and China; China is gaining share rapidly on cost at lower precision tiers",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Motor performance is directly gated by NdFeB magnet availability (see tier 1). Quality variance among lower-cost Chinese suppliers creates reliability risk for OEMs sourcing on cost."
        },
        {
          item: "Force/torque sensors and tactile sensing arrays",
          role: "proprioceptive feedback for safe contact and dexterous grasp",
          players: "ATI Industrial Automation (US, Schunk subsidiary), Bota Systems (Switzerland), XELA Robotics (Finland/Japan), SynTouch (US, limited production)",
          geography: "Fragmented; no dominant geography; production volumes are small",
          concentration: "concentrated",
          chokepoint: false,
          risk: "High-resolution tactile sensing required for dexterous manipulation remains expensive (ATI sensors run $3,000-$15,000 per unit) and brittle in unstructured environments. Scaling cost-effective tactile arrays to human-hand resolution is unsolved at production volume."
        },
        {
          item: "AI inference compute (edge SoCs)",
          role: "onboard perception, planning, and control inference",
          players: "NVIDIA (Jetson Orin, Thor); Qualcomm (Robotics RB series); Google (custom TPU edge work); Hailo (Israel)",
          geography: "Designed primarily in US; fabricated at TSMC (Taiwan) on advanced nodes",
          concentration: "concentrated",
          chokepoint: false,
          risk: "TSMC concentration creates a shared vulnerability with every AI-dependent technology. US export controls on advanced AI chips restrict NVIDIA compute to Chinese robot OEMs (Unitree, Fourier Intelligence), pushing them toward domestic alternatives (Huawei Ascend, Cambricon) that lag on performance."
        }
      ]
    },
    {
      name: "Manufacturing & integration",
      links: [
        {
          item: "Contract electronics manufacturing (EMS)",
          role: "PCB assembly, system integration, and volume production",
          players: "Foxconn (Taiwan/China; also developing own robots), Flextronics (Singapore), BYD Electronics (China)",
          geography: "China dominates EMS volume capacity; geopolitical pressure is driving OEM interest in Vietnam and Mexico, but capacity is nascent for robotics complexity",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Western humanoid OEMs (Figure AI, Agility, 1X) are designing for eventual volume manufacturing they have not yet proven. Moving from pilot-run to thousands of units requires EMS infrastructure that currently sits overwhelmingly in China."
        },
        {
          item: "Dexterous hand and end-effector assembly",
          role: "final manipulation hardware integrating actuators, sensors, and skin",
          players: "Shadow Robot Company (UK), Schunk (Germany), SAKE Robotics (US), in-house at Figure AI, Tesla, and Agility",
          geography: "Fragmented; most volume-oriented production is in-house at vertically integrated robot OEMs",
          concentration: "concentrated",
          chokepoint: true,
          risk: "Dexterous hand assembly is the most labor-intensive and quality-sensitive step in humanoid production. No commercial dexterous hand yet matches human DOF, tactile resolution, and durability simultaneously. This is both a manufacturing chokepoint and an unsolved engineering problem.",
          fix: "Startups like Dexterous (US) and BerklHands are targeting high-DOF cable-driven hands for the commercial market; timelines to volume production remain uncertain."
        }
      ]
    },
    {
      name: "Deployment & operations",
      links: [
        {
          item: "Cloud-based VLA model training infrastructure",
          role: "foundation model training and continuous policy improvement",
          players: "NVIDIA (DGX cloud), Google DeepMind (robotics foundation models), Physical Intelligence (pi0 model), Microsoft Azure (Figure AI partnership)",
          geography: "US-dominated; training clusters at hyperscale data centers globally",
          concentration: "concentrated",
          chokepoint: false,
          risk: "VLA models require massive GPU fleets and proprietary teleoperation datasets that only well-funded players can assemble. Small OEMs without cloud partnerships or internal data pipelines cannot compete on model quality."
        },
        {
          item: "Teleoperation and human-in-the-loop oversight infrastructure",
          role: "remote human correction during failure cases in deployment",
          players: "Apptronik (US), Sanctuary AI (Canada), Persona AI, OEMs operating internal teleop teams",
          geography: "Globally distributed teleop labor pools; early pilots in Philippines and Eastern Europe for cost",
          concentration: "diversified",
          chokepoint: false,
          risk: "Robot reliability at current error rates requires human oversight for edge cases. Teleop labor is a transitional cost that pressures unit economics until model reliability improves. If reliability stalls, teleop costs become a structural drag."
        },
        {
          item: "Regulatory clearance and workplace liability frameworks",
          role: "legal authorization to deploy robots alongside human workers",
          players: "OSHA (US), EU Machinery Regulation, ISO 10218 (robot safety standards), national labor regulators",
          geography: "Jurisdiction-by-jurisdiction; US and EU are lagging China on permissive deployment environments",
          concentration: "diversified",
          chokepoint: false,
          risk: "No international standard for humanoid robot workplace deployment exists as of 2026. Liability ambiguity around robot-caused workplace injuries is a meaningful deterrent for enterprise buyers, particularly in regulated industries."
        }
      ]
    }
  ],

  topChokepoints: [
    {
      item: "NdFeB rare-earth permanent magnets (China refining monopoly)",
      why: "China refines 85-90% of global rare-earth supply and produces roughly 90% of NdFeB magnets. Its 2025 export-control rounds (April, then a broader October package with an extraterritorial 50% rule) showed it can interrupt supply to every non-Chinese robot OEM at will; the October package was suspended to Nov 2026 under a trade truce but the leverage remains. There is no near-term substitute material for NdFeB in high-torque BLDC actuators, and Western refining capacity is a decade from independence."
    },
    {
      item: "Harmonic drive / strain-wave gearboxes (Japan near-monopoly)",
      why: "Harmonic Drive Systems holds foundational IP and 60 years of manufacturing know-how with no equivalent Western volume alternative. Lead times stretch to 12-18 months under demand pressure, and joint precision requirements mean lower-cost Chinese alternatives carry unverified reliability risk for commercial deployments."
    },
    {
      item: "Dexterous hand and tactile sensor assemblies",
      why: "Dexterous manipulation is the primary capability gap limiting humanoid robots to structured, repetitive tasks. No commercial hand meets the simultaneous requirements of DOF, tactile resolution, durability, and cost. Until this is solved at production scale, the robots cannot economically address the use cases that justify their price point."
    }
  ],

  geopolitics: "China's position in this chain is not incidental. China controls the rare-earth refining step, produces the dominant share of NdFeB magnets, leads in lower-cost BLDC motor manufacturing, and hosts the EMS capacity needed for volume robot production. Its 2025 rare-earth export-control rounds (and their conditional one-year suspension to Nov 2026) were a direct assertion of this leverage. Meanwhile, Chinese robot OEMs (Unitree, which cleared its Shanghai STAR Market IPO review in June 2026; AGIBOT, which passed 10,000 units in 2026; Fourier Intelligence; UBTECH) benefit from lower component costs and a permissive domestic deployment environment, creating a structural cost advantage over Western competitors. The US has responded with CHIPS-adjacent funding for rare-earth processing and export controls on advanced AI chips that restrict NVIDIA compute to Chinese OEMs, but neither measure closes the gap quickly. Japan's harmonic drive position makes it an involuntary chokepoint: a trade dispute or geopolitical shock affecting Japan's precision manufacturing sector would simultaneously impair Western and Chinese robot supply chains. The reshoring instinct in the US and EU faces a 10-15 year horizon before any meaningful supply independence on magnets or precision gearing."
};

/* =============================================================================
   2. ATOMICALLY PRECISE MANUFACTURING (APM)
   ============================================================================= */

window.FUTURIST_CHAINS["atomically-precise-manufacturing"] = {

  overview: "True APM in the Drexlerian sense, self-replicating molecular assemblers building arbitrary structures atom by atom, does not exist and has no industrial supply chain. What exists today is a set of research tools (scanning probe microscopes, DNA nanotechnology, surface chemistry) that demonstrate atom-scale manipulation on flat surfaces in ultra-high vacuum at cryogenic temperatures, at throughputs measured in atoms per minute. This brief maps the supply chain for those real tools and identifies what a hypothetical transition to production-scale APM would require. The binding constraint is not a supply chain item: it is foundational science. The 'tool that builds the tool' bootstrapping problem, scaling from single-atom placement to self-replicating assemblers capable of building useful three-dimensional structures, has no demonstrated solution pathway. Claims about APM timelines should be read as speculation unless grounded in specific experimental results.",

  tiers: [
    {
      name: "Raw materials & feedstocks",
      links: [
        {
          item: "Ultrapure precursor gases and chemical vapor deposition feedstocks",
          role: "surface deposition and etching in probe-based nanofabrication",
          players: "Air Products, Linde, Versum Materials (now Merck KGaA), Entegris (US)",
          geography: "Globally distributed; specialty gas purification concentrated in US, Germany, and Japan",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Ultrapure gas supply chains are mature and serve the broader semiconductor industry. APM research labs are a negligible consumer; no supply risk at current scale. At hypothetical production scale, the feedstock chemistry would need to be redesigned around available molecular building blocks."
        },
        {
          item: "DNA oligonucleotide synthesis reagents (phosphoramidites, controlled-pore glass)",
          role: "staple strand synthesis for DNA origami nanoscale scaffolding",
          players: "Sigma-Aldrich (Merck KGaA), Glen Research (US), Thermo Fisher Scientific (US)",
          geography: "US and European suppliers dominant; China capacity growing for standard oligo synthesis",
          concentration: "concentrated",
          chokepoint: false,
          risk: "DNA origami is the most experimentally advanced form of atomically precise structure assembly, but it produces static scaffolds in solution, not functional mechanical assemblers. The feedstock chain is robust; the constraint is design and synthesis throughput, not reagent supply."
        },
        {
          item: "Specialty precursor molecules for proposed mechanosynthesis",
          role: "hypothetical feedstock for positional covalent bond formation",
          players: "No established commercial suppliers; academic synthesis only",
          geography: "Purely laboratory; does not exist as an industrial supply chain",
          concentration: "single-source",
          chokepoint: true,
          risk: "The specific reactive molecules needed for the mechanosynthesis reactions proposed in Drexler's 'Nanosystems' (Oxford University Press, 1992) and subsequent theoretical work have not been synthesized and positioned experimentally in three-dimensional covalent structures. This tier is hypothetical. Author note: framing this as a supply chain risk overstates the maturity; the risk is that the chemistry may not work as theorized.",
          fix: "Research groups at IBM Research, NIST, and university labs (e.g., Wilson Ho group, UC Irvine) are conducting single-molecule chemistry experiments on surfaces using STM; these are existence proofs of principle, not production pathways."
        }
      ]
    },
    {
      name: "Components & subsystems",
      links: [
        {
          item: "Scanning tunneling microscopes (STM) and atomic force microscopes (AFM)",
          role: "primary tool for atom-scale imaging and positional manipulation",
          players: "Bruker (US), Oxford Instruments (UK), SPECS Surface Nano Analysis (Germany), Park Systems (South Korea), Asylum Research (Oxford Instruments)",
          geography: "Instrument design and production spread across US, UK, Germany, South Korea; no single-source concentration",
          concentration: "concentrated",
          chokepoint: true,
          risk: "STM and AFM are the only demonstrated tools for positioning individual atoms and molecules on surfaces (demonstrated: IBM Research placed 35 xenon atoms to spell 'IBM' in 1989; subsequent experiments at NIST, IBM, and Delft have placed single molecules into covalent bonds). Throughput is measured in single events per hour. Scaling to manufacturing throughput by any factor requires a fundamentally different approach that does not exist.",
          fix: "Massively parallel probe arrays (up to 4096 cantilevers demonstrated in IBM Millipede data-storage work) hint at throughput scaling, but the gap between current capability and manufacturing-relevant throughput is many orders of magnitude."
        },
        {
          item: "Ultra-high vacuum (UHV) systems and cryogenic equipment",
          role: "controlled environment required for atomic-precision surface work",
          players: "Pfeiffer Vacuum (Germany), Leybold (Germany/Atlas Copco), Edwards Vacuum (UK/Atlas Copco), Janis Research (US, cryogenics)",
          geography: "European manufacturers dominant in UHV; cryogenic equipment split between US, Europe, and Japan",
          concentration: "concentrated",
          chokepoint: false,
          risk: "UHV and cryogenic requirements are not a supply bottleneck for research scale. At any hypothetical production scale, the requirement to operate at cryogenic temperatures in high vacuum would represent an enormous energy and infrastructure cost that would undermine the economic case for APM relative to conventional manufacturing.",
          fix: "Some DNA origami assembly and certain surface chemistry works at room temperature and in solution, bypassing UHV requirements, but with less precision and no demonstrated path to covalent mechanosynthesis."
        },
        {
          item: "DNA origami design software and synthesis automation",
          role: "computational design and automated synthesis of nanoscale scaffolds",
          players: "Cadnano (open-source, Harvard Wyss Institute), Autodesk (former acquisition of Parabon NanoLabs tools), Twist Bioscience (US, oligo synthesis), Integrated DNA Technologies / IDT (US, Danaher)",
          geography: "US-dominated for design tools and high-complexity synthesis",
          concentration: "concentrated",
          chokepoint: false,
          risk: "DNA nanotechnology is the most mature sub-field of APM-adjacent research. Wyss Institute (Harvard), Liedl group (LMU Munich), and Dietz group (TU Munich) have produced increasingly complex 3D DNA origami structures. The limitation is functional output: DNA scaffolds are largely inert structural or binding templates, not programmable machines capable of covalent bond formation."
        }
      ]
    },
    {
      name: "Manufacturing & integration",
      links: [
        {
          item: "Nanofabrication cleanrooms and electron-beam lithography",
          role: "highest-precision patterning for nanostructure fabrication at sub-10nm features",
          players: "ASML (Netherlands, EUV lithography), Raith (Germany, e-beam), Vistec (Germany), JEOL (Japan)",
          geography: "Lithography tool supply is highly concentrated: ASML holds a monopoly on EUV systems used below 7nm",
          concentration: "single-source",
          chokepoint: false,
          risk: "Semiconductor lithography is a mature industrial supply chain serving chip manufacturing, not APM. It is included here because it represents the closest existing analog to atomically precise patterning at scale. EUV operates at 13.5nm wavelength and achieves sub-7nm features; it does not achieve single-atom placement. The gap between EUV and true APM is qualitative, not quantitative.",
          fix: "Not applicable; this tier is a proxy for the closest real manufacturing analog, not a direct APM supply chain component."
        },
        {
          item: "The 'tool that builds the tool' bootstrapping step (hypothetical)",
          role: "assembler capable of building copies of itself from feedstock molecules",
          players: "No demonstrated players; theoretical work by K. Eric Drexler ('Nanosystems', 1992), Ralph Merkle (Zyvex Labs), Robert Freitas (independent researcher)",
          geography: "Purely theoretical; not a supply chain item",
          concentration: "single-source",
          chokepoint: true,
          risk: "Self-replication is the defining feature of Drexlerian APM and the step with no experimental evidence or demonstrated path. Without a self-replicating assembler, APM throughput is bounded by the number of physical probe tips, making it irrelevant as a manufacturing technology. This is not a supply chain chokepoint in the conventional sense; it is a missing proof of concept. Author note: this item is included to be explicit about where the chain breaks.",
          fix: "No known fix. Some researchers propose hybrid biological-synthetic systems (engineered ribosomes, modified protein synthesis machinery) as intermediate steps; these are early-stage academic proposals without industrial backing."
        }
      ]
    },
    {
      name: "Deployment & operations",
      links: [
        {
          item: "Metrology and verification tools for atomic-scale quality control",
          role: "confirming that assembled structures match design specifications",
          players: "Bruker (US, AFM-based metrology), ZEISS (Germany, electron microscopy), Thermo Fisher Scientific (US, cryo-EM)",
          geography: "Instrumentation spread across US, Germany, Japan",
          concentration: "concentrated",
          chokepoint: false,
          risk: "At research scale, cryo-electron microscopy (cryo-EM) is the primary tool for verifying nanoscale structures. Nobel Prize 2017 (Jacques Dubochet, Joachim Frank, Richard Henderson) recognized its role in structural biology; the same technique is used to verify DNA origami geometries. At production scale, continuous atomic-resolution metrology on manufactured output would itself require a technology that does not exist."
        },
        {
          item: "Regulatory and safety frameworks for self-replicating nanosystems",
          role: "governance of any system capable of autonomous replication",
          players: "No framework exists; theoretical discussions in Foresight Institute working groups, ETC Group (critical civil society), nascent NNI guidelines",
          geography: "No jurisdiction has active regulation; US NNI and EU Nanotechnology Action Plan cover nanomaterials, not assemblers",
          concentration: "single-source",
          chokepoint: false,
          risk: "The absence of regulatory frameworks is not a near-term constraint because the technology does not exist. It is noted here because any transition toward self-replicating systems would trigger regulatory responses that could halt or reshape deployment regardless of technical readiness. This is a known long-lead policy risk."
        }
      ]
    }
  ],

  topChokepoints: [
    {
      item: "The self-replication bootstrapping problem (fundamental science gap)",
      why: "True APM requires a machine that can build copies of itself from molecular feedstocks. No such machine has been demonstrated, and no experimental pathway to one has been validated. This is not a supply chain gap or an engineering challenge; it is an unresolved question in chemistry and physics. Every other supply chain item in this analysis is conditional on solving this first."
    },
    {
      item: "STM/AFM throughput ceiling (many orders of magnitude below manufacturing-relevant rates)",
      why: "The only demonstrated tools for atom-scale positional manipulation operate at throughputs of single events per hour. Manufacturing a gram of any material from atomic assembly at current rates would take longer than the age of the universe. Massively parallel probe arrays narrow this gap by several orders of magnitude but not nearly enough. No alternative high-throughput mechanism for positional covalent bond formation has been demonstrated."
    },
    {
      item: "UHV and cryogenic operating requirements (incompatible with industrial scale)",
      why: "Most demonstrated atom-scale manipulation requires ultra-high vacuum and cryogenic temperatures that are economically prohibitive at manufacturing scale. DNA origami avoids this but cannot perform covalent mechanosynthesis. Room-temperature, ambient-pressure positional chemistry at atomic precision has not been demonstrated in a form relevant to APM."
    }
  ],

  geopolitics: "APM's geopolitical profile is unusual: because the technology does not yet exist at scale, there is no supply chain to control and no geographic leverage to exploit. The relevant geopolitical dynamics operate at the research funding level. The US (via DARPA, NNI, and NSF), EU (Horizon Europe), and China (Made in China 2025 nanotechnology programs) all fund nanoscience broadly, but none have industrial APM programs because there is nothing to industrialize. China has made significant investments in scanning probe microscopy instrumentation and DNA nanotechnology research (Peking University, National Center for Nanoscience and Technology), reflecting a strategy of building broad nanoscience capacity. If and when APM approaches practicality, whichever nation controls the foundational assembler patents and the manufacturing know-how for self-replicating systems would hold leverage comparable to early semiconductor IP. That scenario is speculative; monitoring for it means watching publication rates from STM/AFM manipulation research groups and mechanosynthesis patent filings, not industrial supply chains."
};

/* =============================================================================
   3. AUTONOMOUS TRANSPORT
   ============================================================================= */

window.FUTURIST_CHAINS["autonomous-transport"] = {

  overview: "Autonomous vehicle supply chains are real, operating, and under active geopolitical pressure. The critical components are AI compute SoCs (NVIDIA-dominant, Taiwan-fabricated), lidar sensors (split between US startups and a rising Chinese cluster led by Hesai and RoboSense), CMOS image sensors (Sony-dominant), and HD mapping infrastructure. The chain's central tension is that China is producing lower-cost lidar and radar at scale while US export controls restrict advanced AI chips to Chinese AV companies, creating parallel supply chains with different performance-cost profiles. The vehicle platform itself is the most capital-intensive element but the least concentrated.",

  tiers: [
    {
      name: "Raw materials & feedstocks",
      links: [
        {
          item: "Silicon wafers (automotive-grade, ADAS-specification)",
          role: "substrate for all AV semiconductors including SoCs, radar, and image sensors",
          players: "Shin-Etsu Chemical (Japan), Sumco (Japan), Siltronic (Germany), SK Siltron (South Korea)",
          geography: "Japan controls approximately 60% of global silicon wafer supply by value (SEMI industry data, author estimate); automotive-grade qualification adds further concentration",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Silicon wafer supply tightened significantly during the 2021-2023 automotive chip shortage. AV systems require higher-spec wafers than standard automotive ICs, compounding scarcity risk during demand spikes."
        },
        {
          item: "Indium phosphide (InP) and gallium arsenide (GaAs) compound semiconductors",
          role: "laser diodes and photodetectors in lidar transmitter/receiver modules",
          players: "II-VI (Coherent, US), Lumentum (US), Jenoptik (Germany), Win Semiconductors (Taiwan)",
          geography: "Compound semiconductor production is less concentrated than silicon but still limited to a small number of qualified fabs",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Lidar performance is directly gated by the quality of laser diode arrays. Compound semiconductor supply is adequate at current AV lidar volumes but would tighten significantly if automotive lidar adoption accelerates to tens of millions of units per year."
        }
      ]
    },
    {
      name: "Components & subsystems",
      links: [
        {
          item: "AV compute system-on-chip (SoC)",
          role: "central real-time perception, planning, and control compute",
          players: "NVIDIA (DRIVE Orin, DRIVE Thor — dominant in Tier 1 AV players); Mobileye (EyeQ series, Intel subsidiary); Qualcomm (Snapdragon Ride); Texas Instruments (TDA series, ADAS); Huawei (MDC series, China market)",
          geography: "Designed in US (NVIDIA, Qualcomm, TI) and Israel (Mobileye); fabricated at TSMC (Taiwan) on 5-7nm nodes; US export controls restrict NVIDIA and Qualcomm advanced chips to China",
          concentration: "concentrated",
          chokepoint: true,
          risk: "NVIDIA's DRIVE platform dominates the high-performance AV segment used by Waymo, Aurora, and Cruise. TSMC concentration means a Taiwan conflict or natural disaster disrupts supply for every NVIDIA-dependent AV program simultaneously. US export controls (October 2022, updated 2023) have effectively bifurcated the market: Chinese OEMs (Baidu Apollo, Pony.ai) are migrating to Huawei MDC and domestic alternatives that lag NVIDIA's performance per watt.",
          fix: "Intel/Mobileye provides partial diversification for ADAS-level applications; NVIDIA is pursuing US-based packaging partnerships under CHIPS Act incentives, but leading-edge fabrication remains TSMC-dependent through at least 2030."
        },
        {
          item: "Lidar sensors",
          role: "3D point cloud generation for object detection and scene mapping",
          players: "Hesai Technology (China, the volume and cost leader, supplying Baidu Apollo and international robotaxi fleets); RoboSense (China, listed 2024); Ouster (US, the Ouster-Velodyne merged entity); Innoviz (Israel); Cepton (Japan/Koito acquisition). Luminar (US, long-range FMCW) filed Chapter 11 in Dec 2025 and was wound down, illustrating how punishing the segment is for subscale Western makers",
          geography: "US companies hold technical leadership in long-range performance; Chinese companies (Hesai, RoboSense) have taken significant volume share at lower cost points; Hesai supplies Baidu Apollo and international robotaxi programs",
          concentration: "concentrated",
          chokepoint: true,
          risk: "Lidar is not a single-source chokepoint, but it is the sensor category most exposed to US-China technology tension. Hesai and RoboSense have faced US Entity List actions and national-security reviews (NDAA Section 1260H, Pentagon Chinese military company lists). AV programs relying on Chinese lidar face regulatory and reputational risk in US and allied markets, even as Chinese lidar is both cheaper and shipping in record volume.",
          fix: "Solid-state lidar from Continental, Bosch, and Innoviz targets automotive OEM integration at lower cost; FMCW lidar offers performance advantages for highway autonomy but remains expensive and, as Luminar's bankruptcy showed, financially fragile."
        },
        {
          item: "CMOS image sensors (automotive camera arrays)",
          role: "primary visual perception input across all AV sensor suites",
          players: "Sony Semiconductor Solutions (Japan, dominant — estimated 40-50% of automotive CMOS market); OmniVision (US, acquired by Will Semiconductor / China); ON Semiconductor (US); Samsung (South Korea)",
          geography: "Sony dominates automotive-grade CMOS; OmniVision's acquisition by Chinese ownership (Will Semiconductor) has triggered US supply chain review; fabrication split between Sony's own fabs (Japan) and TSMC",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Sony's dominance in automotive CMOS means any disruption to its Kumamoto or Nagasaki facilities (earthquake risk, demonstrated in 2011 for broader Japanese supply chains) propagates across AV camera supply. OmniVision's Chinese ownership creates a compliance risk for US-program AV developers procuring at scale."
        },
        {
          item: "Automotive imaging radar (4D/imaging radar)",
          role: "all-weather object detection and velocity measurement",
          players: "NXP Semiconductors (Netherlands); Infineon Technologies (Germany); Texas Instruments (US); Arbe Robotics (Israel); Uhnder (US); Vayyar (Israel)",
          geography: "Radar chip design concentrated in Europe (NXP, Infineon) and US; imaging radar startups in Israel and US",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Imaging radar is gaining importance as a lidar complement, particularly for adverse weather. The radar chip supply chain is less geopolitically exposed than lidar but depends on the same TSMC fabrication bottleneck for advanced nodes."
        }
      ]
    },
    {
      name: "Manufacturing & integration",
      links: [
        {
          item: "GPU training clusters (AV model training infrastructure)",
          role: "training perception models, planners, and simulation environments at scale",
          players: "NVIDIA (H100/H200 clusters at AWS, Azure, Google Cloud, and in-house at Waymo, Tesla); Tesla (in-house Dojo supercomputer); Waymo (Google/Alphabet infrastructure)",
          geography: "US-concentrated; China AV companies operate domestic clusters on Huawei Ascend and domestically licensed NVIDIA chips predating export controls",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Training compute is expensive but not physically scarce in the same way hardware components are. Cost is the primary barrier; Waymo and Tesla have invested billions in training infrastructure. Export controls prevent Chinese AV developers from accessing the latest NVIDIA training chips, creating a sustained performance gap that widens with each NVIDIA generation."
        },
        {
          item: "HD mapping and geospatial data infrastructure",
          role: "centimeter-accurate prior maps enabling localization and path planning",
          players: "HERE Technologies (Germany, owned by automotive consortium); TomTom (Netherlands); Google Maps Platform (Waymo internal + commercial); Mobileye (REM crowdsourced mapping); Baidu Maps (China domestic)",
          geography: "Global coverage fragmented by regulation: China requires domestic mapping providers; US and EU have competitive market; data sovereignty restrictions are tightening",
          concentration: "concentrated",
          chokepoint: false,
          risk: "HD map maintenance is an ongoing operational cost that scales with deployment geography. Over-reliance on HD maps is itself a design risk: Waymo and Tesla have diverged on map-dependence (Waymo heavily map-dependent; Tesla pursuing map-free operation). Jurisdictions that restrict foreign mapping data (China, India, Russia) impose a hard geographic constraint on non-domestic AV operators."
        },
        {
          item: "Simulation and validation infrastructure",
          role: "synthetic testing environment for rare and dangerous scenario coverage",
          players: "NVIDIA (Omniverse/Drive Sim); Applied Intuition (US); ANSYS (US); Foretellix (Israel); Cognata (Israel); CarSim (US, Mechanical Simulation)",
          geography: "US and Israel dominant in commercial simulation toolchains",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Validation for AV safety cases requires billions of simulated miles; no regulator has yet defined an accepted sufficiency standard. The absence of a regulatory endpoint for simulation validation prolongs the development timeline and inflates validation costs without a clear termination criterion."
        }
      ]
    },
    {
      name: "Deployment & operations",
      links: [
        {
          item: "Teleoperations and remote assistance infrastructure",
          role: "human fallback for AV edge cases requiring remote intervention",
          players: "Waymo (internal), Zoox (Amazon, internal), Tesla (remote operators for Austin robotaxi), Aurora (truck remote assistance), Phantom Auto/Designated Driver (teleop tooling)",
          geography: "Teleop labor pools in US, India, Philippines; latency constraints require regional infrastructure close to deployment zones",
          concentration: "diversified",
          chokepoint: false,
          risk: "Teleoperations is a transitional cost structure that scales inversely with AV reliability. Current robotaxi operations (Waymo Phoenix, San Francisco) maintain internal teleop ratios that are not publicly disclosed. At scale, teleop headcount becomes a margin problem if reliability improvements stall."
        },
        {
          item: "Regulatory approval and operational design domain (ODD) permitting",
          role: "legal authorization to operate driverless vehicles on public roads",
          players: "NHTSA, CPUC, CDMV (California), NHTSA AV policy (federal); China MIIT; EU road vehicle type approval (UNECE WP.29)",
          geography: "Jurisdiction-by-jurisdiction; California (Waymo, Cruise), Arizona (Waymo), Texas (Aurora) are US leaders; China (Beijing, Shenzhen, Shanghai) has issued commercial robotaxi licenses for Baidu Apollo and Pony.ai",
          concentration: "diversified",
          chokepoint: true,
          risk: "Regulatory approval is the primary commercial deployment bottleneck in most markets. Waymo received its California CPUC driverless commercial permit in 2023 and by 2026 operates across about ten US cities, but GM's December 2024 shutdown of Cruise (following the October 2023 pedestrian-dragging incident and permit suspension) showed a single severe event can end an entire program. New York pulled a planned robotaxi framework in 2026. No federal AV framework exists in the US as of 2026.",
          fix: "Aurora launched commercial driverless trucking in Texas in April 2025 and Tesla removed safety monitors for unsupervised Austin robotaxi rides in Jan 2026, establishing precedents for commercial L4. Federal AV legislation has been proposed repeatedly since 2017 without passage; state-by-state permitting remains the operative path."
        },
        {
          item: "Vehicle platform (OEM-integrated or purpose-built)",
          role: "hardware platform integrating AV sensors, compute, and actuation",
          players: "Waymo (Jaguar I-PACE, Zeekr RT purpose-built); Zoox (purpose-built bidirectional robotaxi); Aurora (Kenworth and Peterbilt Class 8 trucks); Tesla (consumer vehicle platform); Baidu Apollo (BAIC, SAIC, GAC partnerships in China)",
          geography: "Vehicle manufacturing globally distributed; purpose-built AV platforms concentrate in US and China",
          concentration: "diversified",
          chokepoint: false,
          risk: "Vehicle platform supply is not a near-term chokepoint at current AV fleet volumes. At scale, OEM dependency creates a platform risk: Waymo's reliance on Stellantis (Chrysler Pacifica, discontinued) and Jaguar platforms required fleet transition. Purpose-built platforms (Zoox, Waymo's Zeekr partnership) reduce this risk but require larger capital commitment."
        }
      ]
    }
  ],

  topChokepoints: [
    {
      item: "AV compute SoCs (NVIDIA DRIVE platform, TSMC-fabricated)",
      why: "NVIDIA's DRIVE Orin and Thor dominate the high-performance AV compute market. Both are fabricated at TSMC on 5-7nm nodes. A Taiwan conflict, earthquake, or US-China trade escalation affecting TSMC would simultaneously halt supply for Waymo, Aurora, and every Western AV program dependent on NVIDIA. US export controls have already bifurcated the market, forcing Chinese AV developers onto domestically sourced alternatives that lag on performance and reliability."
    },
    {
      item: "Lidar supply chain exposure to US-China technology controls",
      why: "Chinese lidar manufacturers (Hesai, RoboSense) have captured the volume lead at lower cost but face US Entity List designation and NDAA restrictions that create compliance risk for US-market AV programs. Western alternatives are scarcer and pricier after Luminar's Dec 2025 Chapter 11; Ouster is the main listed US survivor. The market is bifurcating along geopolitical lines, and AV programs must choose a supply chain that aligns with their regulatory and market geography."
    },
    {
      item: "Regulatory ODD permitting (jurisdiction-by-jurisdiction, no federal standard)",
      why: "The absence of a US federal AV framework means every new geography requires a separate state or municipal permitting process. A single high-profile safety incident can be fatal to a program: the October 2023 Cruise pedestrian-dragging incident led to permit suspension and ultimately GM shutting Cruise in December 2024. This is the primary constraint on revenue scaling for US robotaxi operators, and no near-term federal resolution is expected."
    }
  ],

  geopolitics: "Autonomous transport is one of the most geopolitically contested technology supply chains of the 2020s. The US-China split is structural and accelerating: US export controls on advanced AI chips (October 2022, updated 2023 and 2024) have effectively created two parallel AV supply chains with different performance ceilings. Chinese AV companies (Baidu Apollo, Pony.ai, WeRide) have received commercial robotaxi licenses in multiple Chinese cities and are expanding internationally, including in the Middle East, while being locked out of NVIDIA's latest compute. US companies (Waymo, Aurora, Zoox) retain a performance edge on perception and planning but face higher hardware costs and a domestic regulatory environment that moves more slowly than China's. China's dominance in lidar manufacturing (Hesai, RoboSense) has created a specific tension point: these sensors are technically competitive and significantly cheaper, but US national security reviews have questioned their supply chain integrity for US government-adjacent applications. The NDAA Section 1260H Chinese military company list and parallel Commerce Department Entity List actions have made Chinese lidar procurement legally complex for US defense-adjacent programs. Japan (Sony CMOS) and the Netherlands/Germany (NXP, Infineon radar; ASML upstream) hold quieter but significant positions in the supply chain that would be affected by any broader technology decoupling."
};
