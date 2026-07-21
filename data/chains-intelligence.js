/* =============================================================================
   THE FUTURIST — SUPPLY CHAIN DEEP-DIVE: INTELLIGENCE DOMAIN
   Technologies: Transformative AI / AGI, Fault-Tolerant Quantum Computing,
                 Brain-Computer Interfaces
   Keyed by technology id. See _schema.js "SUPPLY CHAIN DEEP-DIVE" section.
   ============================================================================= */

window.FUTURIST_CHAINS = window.FUTURIST_CHAINS || {};

/* ============================================================
   1. TRANSFORMATIVE AI / AGI
   ============================================================ */
window.FUTURIST_CHAINS["transformative-ai"] = {
  overview: "The AI chain is a narrow pipe feeding a wide market. A handful of chokepoints upstream (one lithography vendor, one leading-edge foundry, three memory makers) gate everything downstream. The accelerators, racks, and datacenters are increasingly commoditized; the binding constraints are EUV lithography, advanced-node fabrication, high-bandwidth memory, and the power to run it all. Export controls have turned this chain into an instrument of state policy.",
  tiers: [
    {
      name: "Raw materials & feedstocks",
      links: [
        {
          item: "Silicon wafers (300mm, prime grade)",
          role: "substrate for all logic and memory",
          players: "Shin-Etsu, SUMCO (Japan); GlobalWafers (Taiwan); Siltronic (Germany)",
          geography: "Japan supplies roughly half of prime wafers",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Wafer demand spikes with AI buildout; capacity is slow to add but no single point of failure."
        },
        {
          item: "Photoresists and ultra-pure process chemicals",
          role: "pattern transfer in lithography",
          players: "JSR, Tokyo Ohka Kogyo, Shin-Etsu (Japan); Merck KGaA (Germany)",
          geography: "Japan dominates EUV photoresist",
          concentration: "concentrated",
          chokepoint: true,
          risk: "EUV-grade resists are a Japanese near-monopoly. A trade dispute or disaster would stall leading-edge output worldwide.",
          fix: "US and European resist programs exist but are not yet qualified at the leading edge."
        },
        {
          item: "Neon, palladium, and specialty gases",
          role: "lithography light source and etch",
          players: "Ukraine and Russia historically large neon suppliers; Linde, Air Liquide refine",
          geography: "Ukraine supplied a large share of semiconductor neon pre-2022",
          concentration: "concentrated",
          chokepoint: false,
          risk: "The 2022 invasion of Ukraine disrupted neon; fabs had stockpiled and diversified, limiting damage.",
          fix: "Recycling and new sources in the US, China, and Korea have reduced reliance."
        }
      ]
    },
    {
      name: "Components & subsystems",
      links: [
        {
          item: "EUV lithography systems",
          role: "prints sub-7nm features",
          players: "ASML (sole vendor), Veldhoven, Netherlands",
          geography: "Single site near Eindhoven; optics from Zeiss (Germany)",
          concentration: "single-source",
          chokepoint: true,
          risk: "ASML is the only maker of EUV scanners on Earth. No EUV means no leading-edge logic or HBM. China is barred from buying them.",
          fix: "No substitute exists. China is attempting domestic EUV but is years behind."
        },
        {
          item: "High-bandwidth memory (HBM3E / HBM4)",
          role: "feeds data to accelerator cores",
          players: "SK Hynix (leader), Samsung, Micron",
          geography: "South Korea-centric; Micron in US and Japan",
          concentration: "concentrated",
          chokepoint: true,
          risk: "HBM supply directly caps training throughput and is sold out generations ahead. SK Hynix holds the bulk of leading-edge HBM.",
          fix: "Micron and Samsung are expanding capacity; HBM4 qualification is the next bottleneck."
        },
        {
          item: "AI accelerators (GPUs / custom silicon)",
          role: "the compute engine for training",
          players: "NVIDIA (dominant; Blackwell now, Rubin shipping H2 2026), AMD; Google TPU, Amazon Trainium, Broadcom ASICs",
          geography: "US-designed, fabricated in Taiwan",
          concentration: "concentrated",
          chokepoint: false,
          risk: "NVIDIA holds most of the training market, but multiple credible designers exist. The bottleneck is fabrication and HBM, not design."
        }
      ]
    },
    {
      name: "Manufacturing & integration",
      links: [
        {
          item: "Leading-edge logic fabrication (3nm / 2nm)",
          role: "physically builds the accelerators",
          players: "TSMC (dominant), Samsung; Intel Foundry emerging",
          geography: "Most advanced-node capacity sits in Taiwan",
          concentration: "concentrated",
          chokepoint: true,
          risk: "TSMC fabricates nearly all leading-edge AI silicon, and most of it in Taiwan. A Taiwan conflict or quake would halt the frontier.",
          fix: "TSMC Arizona and Japan fabs are ramping but trail the Taiwan nodes by a generation."
        },
        {
          item: "Advanced packaging (CoWoS)",
          role: "joins logic die to HBM stacks",
          players: "TSMC (dominant), with ASE and Amkor (OSAT)",
          geography: "Taiwan-centric; capacity has been the gating step",
          concentration: "concentrated",
          chokepoint: true,
          risk: "CoWoS capacity, not wafer starts, has been the literal bottleneck on accelerator shipments. Roughly all top-end accelerators need it.",
          fix: "TSMC is roughly doubling CoWoS capacity year over year; Intel and Samsung offer rival packaging."
        },
        {
          item: "Server and rack integration",
          role: "assembles GPUs into training systems",
          players: "Foxconn, Quanta, Wiwynn, Supermicro, Dell",
          geography: "Taiwan-headquartered ODMs, assembly in US and Mexico",
          concentration: "diversified",
          chokepoint: false,
          risk: "Many capable integrators; not a binding constraint."
        }
      ]
    },
    {
      name: "Deployment & operations",
      links: [
        {
          item: "Grid power and gas turbines",
          role: "powers gigawatt-scale campuses",
          players: "Regional utilities; GE Vernova, Siemens Energy (turbines)",
          geography: "Power-rich US regions, Gulf states, Nordics",
          concentration: "concentrated",
          chokepoint: true,
          risk: "Interconnection queues and turbine backlogs now gate when a cluster can switch on. Power, not chips, is the emerging hard limit.",
          fix: "Nuclear restarts, SMR contracts, and behind-the-meter gas are being signed; lead times remain multi-year."
        },
        {
          item: "Large power transformers",
          role: "step grid voltage for datacenters",
          players: "Hitachi Energy, Siemens Energy, SGB-SMIT",
          geography: "Long global lead times; limited US production",
          concentration: "concentrated",
          chokepoint: true,
          risk: "Grid-scale transformers carry multi-year lead times. A shortage delays energization regardless of chip availability.",
          fix: "Transformer plant expansions are underway in the US and Europe."
        },
        {
          item: "Liquid cooling systems",
          role: "removes heat from dense GPU racks",
          players: "Vertiv, Schneider Electric, CoolIT, Boyd",
          geography: "Diversified US, Europe, Asia",
          concentration: "diversified",
          chokepoint: false,
          risk: "Direct-to-chip cooling is scaling fast; supply is tight but not single-sourced."
        }
      ]
    }
  ],
  topChokepoints: [
    {
      item: "ASML EUV lithography (Veldhoven)",
      why: "One company at one site builds every EUV scanner. Without it there is no sub-7nm logic and no leading-edge HBM. It is the single most irreplaceable node in the entire chain and the lever export controls pull hardest."
    },
    {
      item: "TSMC advanced-node fabrication and CoWoS packaging (Taiwan)",
      why: "Nearly all frontier AI silicon is fabricated and packaged by TSMC, concentrated in Taiwan. CoWoS capacity has been the literal cap on accelerator shipments, and the geographic concentration is a standing geopolitical risk."
    },
    {
      item: "High-bandwidth memory (SK Hynix / Samsung / Micron)",
      why: "HBM is sold out generations ahead and directly limits how much compute can be fed. Only three firms make it, with SK Hynix holding the lead, so a stumble at any one tightens the whole market."
    }
  ],
  geopolitics: "This chain is the front line of US-China technology competition. The October 2022 and October 2023 US export controls cut China off from leading-edge AI accelerators, EUV-capable tools, and the equipment to make them, with the Netherlands and Japan aligning their own ASML and Tokyo Electron rules. Taiwan is the structural fault line: most leading-edge fabrication and advanced packaging sits on one island that China claims, so a blockade or conflict would freeze the global frontier overnight. Controls have since been repeatedly revised, with 2025 rules tightening rules on China-bound accelerators while the US simultaneously courts Gulf-state compute build-outs. The US CHIPS Act and parallel European and Japanese subsidies are reshoring fabs (TSMC Arizona is in volume production), but leading-edge Taiwan nodes stay a generation ahead through at least the late 2020s. The newest leverage point is energy: gigawatt datacenters depend on grid power, turbines, and transformers that no export regime controls but that physical and permitting limits ration just as tightly."
};

/* ============================================================
   2. FAULT-TOLERANT QUANTUM COMPUTING
   ============================================================ */
window.FUTURIST_CHAINS["quantum-computing"] = {
  overview: "Quantum hardware runs on exotic, thin supply chains that classical computing never needed. The defining input is cold: superconducting and trapped-ion machines sit near absolute zero, and the refrigerators that get them there come from two vendors. Below that sit deeper scarcities, a helium isotope produced only as a nuclear byproduct and isotopically pure silicon. Most of the chain is low-volume and lab-scale today, which means scaling to millions of qubits will stress inputs that have never been mass-produced.",
  tiers: [
    {
      name: "Raw materials & feedstocks",
      links: [
        {
          item: "Helium-3",
          role: "working fluid in dilution refrigerators",
          players: "US DOE stockpile (tritium-decay byproduct); Russia, Canada (CANDU reactors)",
          geography: "Sourced from nuclear weapons tritium decay; tightly held",
          concentration: "single-source",
          chokepoint: true,
          risk: "Helium-3 is made only as a byproduct of tritium decay in weapons stockpiles. Supply is fixed, allocated by governments, and cannot scale with demand.",
          fix: "Closed-cycle refrigerators recycle their charge; some labs explore He-3-free cooling, but no full substitute exists."
        },
        {
          item: "Isotopically pure silicon-28",
          role: "low-noise substrate for spin qubits",
          players: "Russia (centrifuge enrichment); Isonics, Chemotrade (Germany)",
          geography: "Enrichment capacity concentrated in Russia",
          concentration: "single-source",
          chokepoint: true,
          risk: "Spin qubits need silicon stripped of magnetic Si-29. Bulk enrichment leans on Russian centrifuge capacity, a thin and politically exposed source.",
          fix: "Small-scale enrichment programs exist in the US, UK, and Australia but not at volume."
        },
        {
          item: "Bulk liquid helium-4",
          role: "pre-cooling stage before dilution",
          players: "Air Liquide, Linde, Air Products; Qatar, US, Algeria sources",
          geography: "Concentrated gas fields; periodic global shortages",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Helium-4 shortages recur and raise operating costs, but recovery and recycling cushion supply."
        }
      ]
    },
    {
      name: "Components & subsystems",
      links: [
        {
          item: "Dilution refrigerators",
          role: "cools qubits to ~10 millikelvin",
          players: "Bluefors (Finland), Oxford Instruments (UK)",
          geography: "Two vendors, Finland and UK",
          concentration: "concentrated",
          chokepoint: true,
          risk: "Two firms build essentially all research-grade dilution fridges. Lead times are long, and every superconducting and trapped-ion roadmap depends on them.",
          fix: "Maybell Quantum and others are entering; output remains a fraction of demand."
        },
        {
          item: "Cryogenic control electronics",
          role: "drives and reads qubits in-fridge",
          players: "Intel (Horse Ridge), Quantum Machines, Zurich Instruments, SiCoy",
          geography: "Diversified US, Europe, Israel",
          concentration: "diversified",
          chokepoint: false,
          risk: "Wiring and control scale poorly to millions of qubits, but multiple credible suppliers exist."
        },
        {
          item: "Lasers and photonics",
          role: "trapped-ion and neutral-atom control",
          players: "Toptica, Coherent, MKS/Newport; Vescent",
          geography: "Concentrated US and Germany",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Atom and ion machines need many stable lasers; supply is specialized but not single-sourced.",
          fix: "Photonic integration is reducing the per-qubit laser count."
        }
      ]
    },
    {
      name: "Manufacturing & integration",
      links: [
        {
          item: "Josephson junction / superconducting circuit fabrication",
          role: "builds superconducting qubits",
          players: "IBM, Google, Rigetti (in-house); IMEC (Belgium)",
          geography: "Captive fabs plus a few shared facilities",
          concentration: "concentrated",
          chokepoint: true,
          risk: "Qubit yield depends on near-defect-free thin-film junctions made in a handful of specialized lines. Scaling uniformity is unsolved at wafer scale.",
          fix: "300mm fab processes at IMEC and Intel aim to make qubit fabrication look more like CMOS."
        },
        {
          item: "Silicon-photonic quantum chip fabrication",
          role: "photonic qubit path manufacturing",
          players: "PsiQuantum via GlobalFoundries; TSMC silicon photonics",
          geography: "US foundry partnership",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Leverages existing foundries, which is the photonic bet's main advantage; throughput is unproven at fault-tolerant scale."
        }
      ]
    },
    {
      name: "Deployment & operations",
      links: [
        {
          item: "Cloud quantum access and integration",
          role: "delivers qubits to users",
          players: "IBM Quantum, Amazon Braket, Microsoft Azure Quantum, Google",
          geography: "US hyperscaler datacenters",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Access is concentrated among a few cloud providers, but the layer is software and commercially competitive."
        },
        {
          item: "Specialized cryogenic facilities and uptime",
          role: "houses and maintains the machines",
          players: "Operator labs; national centers (Oak Ridge, RIKEN, Jülich)",
          geography: "Distributed across US, EU, Japan",
          concentration: "diversified",
          chokepoint: false,
          risk: "Each machine needs continuous cooling and skilled upkeep; a fridge failure idles a system, but facilities are diversified."
        }
      ]
    }
  ],
  topChokepoints: [
    {
      item: "Helium-3 supply",
      why: "It exists only as a byproduct of tritium decay in nuclear weapons stockpiles. Supply is fixed and government-allocated, so it cannot scale with qubit counts. Every dilution-refrigerator-based roadmap is exposed to it."
    },
    {
      item: "Dilution refrigerators (Bluefors / Oxford Instruments)",
      why: "Two vendors supply essentially the whole field, with long lead times. Until cooling either diversifies or is engineered away, fridge output is a hard cap on how many superconducting and trapped-ion systems can exist."
    },
    {
      item: "Isotopically pure silicon-28",
      why: "The spin-qubit path needs Si-28 stripped of magnetic isotopes, and bulk enrichment leans on thin, politically exposed Russian capacity. It gates one of the most CMOS-compatible scaling routes."
    }
  ],
  geopolitics: "Quantum supply risk is less about export bans and more about raw scarcity in a few sensitive materials. Helium-3 and tritium are entangled with nuclear weapons programs, so the US, Russia, and a few others control supply directly, and allocation is a national-security decision. Isotopic enrichment for silicon-28 overlaps with the same centrifuge technology used for uranium, concentrating capacity in Russia and a handful of state-linked facilities. The tooling chokepoints, dilution refrigerators and precision lasers, sit with Western allies (Finland, the UK, Germany, the US), and quantum hardware now appears on US and allied export-control lists alongside the cryogenic and control systems that enable it. National programs in the US, China, the EU, the UK, and Australia are racing to build sovereign capability, but the deepest dependencies are physical, not political, and no subsidy can manufacture more helium-3."
};

/* ============================================================
   3. BRAIN-COMPUTER INTERFACES
   ============================================================ */
window.FUTURIST_CHAINS["brain-computer-interfaces"] = {
  overview: "The BCI chain is unusual: its hardest constraint is not a material or a factory but a regulator and a surgeon. Implant-grade electrode materials and hermetic packaging are well understood from decades of pacemakers and cochlear implants. What gates scale is the FDA pathway, the surgical capacity to implant safely, and the unsolved biology of keeping an electrode alive in the brain for years. Volumes are tiny today, so the chain is built around medical-device fabs and neurosurgery, not mass manufacturing.",
  tiers: [
    {
      name: "Raw materials & feedstocks",
      links: [
        {
          item: "Platinum-iridium and iridium oxide",
          role: "charge-injecting electrode contacts",
          players: "Heraeus, Johnson Matthey; precious-metal refiners",
          geography: "Iridium refining concentrated, much from South Africa",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Platinum-group metals are the validated contact materials. Volumes per implant are tiny, so price matters more than availability."
        },
        {
          item: "Conducting polymers (PEDOT) and flexible substrates",
          role: "low-impedance, tissue-friendly interfaces",
          players: "Academic labs; Heraeus (Clevios PEDOT); polyimide film suppliers",
          geography: "Diversified research-grade supply",
          concentration: "diversified",
          chokepoint: false,
          risk: "PEDOT coatings improve signal and biocompatibility but lack long-term human longevity data.",
          fix: "Hydrogels and MXene nanomaterials are being explored as next-generation coatings."
        },
        {
          item: "Implant-grade titanium and alumina ceramic",
          role: "hermetic housing for electronics",
          players: "Integer Holdings, Materion, CoorsTek; Heraeus feedthroughs",
          geography: "Established US and European medical-grade supply",
          concentration: "diversified",
          chokepoint: false,
          risk: "Mature pacemaker-derived supply base; not a binding constraint."
        }
      ]
    },
    {
      name: "Components & subsystems",
      links: [
        {
          item: "Neural signal ASICs",
          role: "amplify and digitize thousands of channels",
          players: "Neuralink (in-house), Precision Neuroscience, Intan Technologies",
          geography: "US-designed; fabbed at standard foundries",
          concentration: "concentrated",
          chokepoint: true,
          risk: "Reading thousands of channels inside an implant's power and heat budget needs custom silicon. Each program designs its own, so capability is captive, not purchasable.",
          fix: "Off-the-shelf neural amplifiers exist for low channel counts; high-density designs stay proprietary."
        },
        {
          item: "Hermetic feedthroughs and packaging",
          role: "seals electronics from body fluids for decades",
          players: "Heraeus, Integer Holdings; specialist medical packagers",
          geography: "Concentrated medical-device suppliers",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Long-term hermeticity is hard but well understood from implantable devices; supply is specialized but established."
        },
        {
          item: "Wireless power and telemetry modules",
          role: "powers implant and moves neural data out",
          players: "Neuralink (inductive + BLE); medical RF suppliers",
          geography: "Diversified component supply",
          concentration: "diversified",
          chokepoint: false,
          risk: "Adequate for cursor control; bandwidth and heat limit high-channel telemetry, but components are widely available."
        }
      ]
    },
    {
      name: "Manufacturing & integration",
      links: [
        {
          item: "Medical-device microfabrication (electrode arrays)",
          role: "builds the electrode arrays and threads",
          players: "Blackrock Neurotech (Utah Array), Neuralink, Precision Neuroscience",
          geography: "Specialized US fabs, low volume",
          concentration: "concentrated",
          chokepoint: true,
          risk: "Electrode arrays are made in a few low-volume cleanrooms under medical-device quality systems. Scaling to mass volume under ISO 13485 and FDA QSR is unproven.",
          fix: "Microelectrode manufacturing borrows from MEMS processes, but quality qualification is the slow step."
        },
        {
          item: "Sterilization and quality systems",
          role: "makes implants safe and compliant",
          players: "Steris, Sotera Health; in-house QMS",
          geography: "Established US and European capacity",
          concentration: "diversified",
          chokepoint: false,
          risk: "Standard medical sterilization; not a binding constraint."
        }
      ]
    },
    {
      name: "Deployment & operations",
      links: [
        {
          item: "FDA regulatory pathway",
          role: "gates legal sale and clinical use",
          players: "FDA (PMA / Breakthrough Device); CE-mark in EU",
          geography: "US and EU regulators set the de-facto global bar",
          concentration: "single-source",
          chokepoint: true,
          risk: "PMA for a Class III brain implant needs multi-year safety follow-up. The pathway, not the hardware, sets the pace of deployment.",
          fix: "Breakthrough Device designation speeds review for Neuralink and Synchron but does not shorten required follow-up."
        },
        {
          item: "Neurosurgical capacity and implantation robots",
          role: "places electrodes precisely and safely",
          players: "Neuralink R1 robot (proprietary); hospital neurosurgery teams",
          geography: "Skilled-surgeon-limited, concentrated at academic centers",
          concentration: "concentrated",
          chokepoint: true,
          risk: "Each implant is brain surgery. Surgeon and OR capacity, plus the scarcity of precision insertion robots, caps how many patients can be served.",
          fix: "Synchron's endovascular Stentrode avoids open surgery; robotic insertion aims to standardize and de-skill the procedure."
        },
        {
          item: "Chronic clinical follow-up",
          role: "monitors safety and signal over years",
          players: "Trial sites; BrainGate consortium, sponsor companies",
          geography: "Academic medical centers, US and Australia",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Long follow-up is resource-heavy and slow but not a hard supply limit."
        }
      ]
    }
  ],
  topChokepoints: [
    {
      item: "FDA / regulatory pathway",
      why: "A Class III brain implant needs years of safety data before commercial sale, and that timeline, not chip or material supply, sets the speed of deployment. It is the single most binding constraint on when BCIs reach scale."
    },
    {
      item: "Neurosurgical capacity and implantation robots",
      why: "Every invasive implant is brain surgery, bounded by scarce neurosurgeons, OR time, and precision insertion robots like Neuralink's R1. This caps throughput even if a device is approved and manufactured."
    },
    {
      item: "Chronic biocompatibility and electrode longevity",
      why: "Glial scarring degrades implant signal within a few years, and no material has proven decade-scale human longevity. Until this biology is solved, every downstream investment is built on a device that may need surgical revision."
    }
  ],
  geopolitics: "BCI is the least geopolitically contested chain of the three, because its bottlenecks are regulatory and biological rather than geographic. The materials, iridium, platinum, titanium, polyimide, draw on diversified medical supply chains, and iridium's concentration in South African refining is a price risk, not a strategic one. The decisive power sits with regulators: the US FDA and EU CE-mark regime set the de-facto global standard, so where a device is approved first shapes where the technology deploys. The leading programs, Neuralink, Synchron, Precision Neuroscience, BrainGate, and Paradromics, are US-centric, with China funding parallel state-backed efforts, and dual-use and neurorights concerns (raised by bioethicists such as Nita Farahany) are beginning to draw policy attention. No export-control regime today targets BCI hardware, but cognitive-augmentation applications could change that within the horizon."
};

/* ============================================================
   4. AI INFRASTRUCTURE & COMPUTE
   ============================================================ */
window.FUTURIST_CHAINS["ai-infrastructure"] = {
  overview: "The AI-compute chain treats the physical substrate itself as the product: chips, memory, interconnect, gigawatt campuses, and the power to run them. Power sits with a few upstream chokepoints, one lithography vendor, one leading-edge foundry, three memory makers, one advanced-packaging pipe, and increasingly the electrical grid. Silicon and racks are maturing toward commodity, but CoWoS packaging, HBM, and power are all sold out generations ahead. What is missing is slack: every binding node is booked into 2027 and beyond, so the chain scales only as fast as its narrowest pipe.",
  tiers: [
    {
      name: "Raw materials & feedstocks",
      links: [
        {
          item: "Silicon wafers (300mm, prime grade)",
          role: "substrate for all logic and memory",
          players: "Shin-Etsu, SUMCO (Japan) ~53% combined; top five ~85% of 300mm",
          geography: "Japan-centric wafer production",
          concentration: "concentrated",
          chokepoint: false,
          risk: "AI demand strains wafer capacity, but multiple qualified suppliers exist and no single point fails."
        },
        {
          item: "High-purity quartz (Spruce Pine, NC)",
          role: "crucibles for silicon ingot growth",
          players: "Sibelco, The Quartz Corp",
          geography: "One North Carolina district supplies ~70-90% of world supply",
          concentration: "concentrated",
          chokepoint: true,
          risk: "Nearly all crucible-grade quartz comes from a single mining district; a disaster there would ripple through all ingot growth.",
          fix: "Alternative deposits exist but are not qualified at the required purity; stockpiles buffer short shocks."
        },
        {
          item: "Gallium and germanium",
          role: "compound semiconductors and optics",
          players: "China refines ~98-99% of primary gallium",
          geography: "China-dominant; export licensing since 2023",
          concentration: "single-source",
          chokepoint: true,
          risk: "China controls nearly all primary gallium and has wielded export licenses as leverage; a US ban ran Dec 2024 and was suspended only to ~Nov 2026.",
          fix: "The 2025-26 truce is a pause, not a removal; Western refining and recycling remain nascent."
        },
        {
          item: "Photoresist and ABF substrate",
          role: "lithography patterning and chip packaging film",
          players: "JSR, Tokyo Ohka Kogyo, Shin-Etsu (resist); Ajinomoto Fine-Techno (ABF)",
          geography: "Japan dominant: >70% of resist, ~95% of EUV resist, ~80-90% of ABF film",
          concentration: "concentrated",
          chokepoint: false,
          risk: "EUV resist and ABF build-up film are Japanese near-monopolies; a trade dispute or disaster would stall leading-edge output."
        }
      ]
    },
    {
      name: "Components & subsystems",
      links: [
        {
          item: "High-bandwidth memory (HBM3E / HBM4)",
          role: "feeds data to accelerator cores",
          players: "SK Hynix ~62%, Micron ~21%, Samsung ~17%",
          geography: "South Korea-centric; Micron in US and Japan",
          concentration: "concentrated",
          chokepoint: true,
          risk: "Only three firms qualify HBM, all 2026 output is pre-sold into 2027-28, and HBM4 yield is unproven; supply directly caps training throughput.",
          fix: "Micron and Samsung are expanding capacity; HBM4 qualification is the next battleground."
        },
        {
          item: "EUV lithography systems",
          role: "prints sub-7nm and 2nm features",
          players: "ASML (sole vendor), Veldhoven, Netherlands; optics from Zeiss",
          geography: "Single Dutch supplier; never shipped to China",
          concentration: "single-source",
          chokepoint: true,
          risk: "ASML is the only maker of EUV scanners on Earth, with High-NA systems at roughly $350-400M each. No EUV means no leading-edge logic or HBM.",
          fix: "No substitute exists; China's domestic EUV effort is years behind."
        },
        {
          item: "Optical transceivers and networking silicon",
          role: "moves data between GPUs and racks",
          players: "Coherent ~20%, InnoLight ~20%, Broadcom ~10%; Broadcom Tomahawk 6, NVIDIA Spectrum-X",
          geography: "Diversified US and Asia supply",
          concentration: "diversified",
          chokepoint: false,
          risk: "The 400G-to-1.6T transition and co-packaged optics strain supply, but multiple credible vendors exist."
        }
      ]
    },
    {
      name: "Manufacturing & integration",
      links: [
        {
          item: "Leading-edge logic fabrication (N2 / 2nm)",
          role: "physically builds the accelerators",
          players: "TSMC (~62-66% foundry, >90% of sub-7nm); Samsung; Intel Foundry (18A)",
          geography: "Most advanced-node capacity in Taiwan; N2 in HVM since Q4 2025",
          concentration: "concentrated",
          chokepoint: true,
          risk: "TSMC fabricates over 90% of leading-edge logic, most of it in Taiwan. A Taiwan conflict or quake would halt the frontier.",
          fix: "TSMC Arizona (Fab 21) and Japan are ramping but trail Taiwan nodes; Intel 18A and Samsung SF2 are recovering yields."
        },
        {
          item: "Advanced packaging (CoWoS)",
          role: "fuses GPU die to HBM stacks",
          players: "TSMC (dominant); NVIDIA holds ~70% of capacity",
          geography: "Taiwan-centric; ~75K wpm end-2025 targeting ~120-140K end-2026",
          concentration: "concentrated",
          chokepoint: true,
          risk: "CoWoS, not wafer starts, is the literal cap on accelerator shipments, sold out through 2026 with backend booked through 2027 at 52-78-week lead times.",
          fix: "TSMC is roughly doubling CoWoS capacity year over year; no at-scale alternative exists yet."
        },
        {
          item: "Assembly and test (OSAT)",
          role: "packages and tests finished die",
          players: "ASE, Amkor, JCET (~59% combined); Amkor building Arizona near TSMC",
          geography: "Asia-centric with US reshoring underway",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Concentrated in a few large players but not the binding step for leading-edge AI silicon."
        },
        {
          item: "Full-rack system integration",
          role: "assembles GPUs into training systems",
          players: "NVIDIA (GB200 NVL72 rack systems), Super Micro",
          geography: "Taiwan-led ODMs; assembly in US and Asia",
          concentration: "diversified",
          chokepoint: false,
          risk: "Dense liquid-cooled racks (~120-132 kW) raise integration complexity, but many capable integrators exist."
        }
      ]
    },
    {
      name: "Deployment & operations",
      links: [
        {
          item: "Grid power, turbines, and nuclear generation",
          role: "powers gigawatt-scale campuses",
          players: "GE Vernova (~100 GW turbine backlog to ~2030), Constellation (TMI/Crane restart), Vistra, Oklo, NuScale",
          geography: "Power-rich US regions; interconnection queues exceed five years",
          concentration: "concentrated",
          chokepoint: true,
          risk: "Turbines are sold out to ~2030, transformer lead times run 3-4 years, and interconnection queues exceed five years. Power, not chips, is now the emerging hard limit.",
          fix: "Nuclear restarts (TMI 2028 target), SMRs, and behind-the-meter gas are being signed; lead times remain multi-year."
        },
        {
          item: "Liquid cooling systems",
          role: "removes heat from dense GPU racks",
          players: "Vertiv, CoolIT, Boyd",
          geography: "Diversified US, Europe, Asia",
          concentration: "diversified",
          chokepoint: false,
          risk: "GB200 NVL72 racks exceed air cooling, making direct-to-chip liquid mandatory; supply is tight but not single-sourced."
        },
        {
          item: "Hyperscaler and neocloud operators",
          role: "buy and run the compute at scale",
          players: "hyperscalers (~$725B combined 2026 capex, analyst aggregate), Oracle; CoreWeave, Nebius, Crusoe, Lambda",
          geography: "US-led, expanding to Gulf states and Nordics",
          concentration: "diversified",
          chokepoint: false,
          risk: "Many operators compete, but a demand air-pocket (echoing the Feb 2025 Microsoft lease pullback) could strand capacity."
        }
      ]
    }
  ],
  topChokepoints: [
    {
      item: "CoWoS advanced packaging (TSMC)",
      why: "CoWoS is the narrowest pipe that converts wafers plus HBM into shippable accelerators. It is sold out through 2026 with backend booked into 2027, has no at-scale alternative, and NVIDIA alone holds roughly 70% of the capacity."
    },
    {
      item: "High-bandwidth memory (SK Hynix / Micron / Samsung)",
      why: "All 2026 HBM output is pre-sold and it co-binds with packaging, so it directly limits how much compute can be fed. Only three firms qualify it, SK Hynix leads at ~62%, and HBM4 yield is the next unproven step."
    },
    {
      item: "Power and electrical infrastructure",
      why: "Interconnection queues exceed five years, transformer lead times run 3-4 years, and turbines are sold out to ~2030. It is the limiter you cannot fix by building another fab, and Microsoft's own CEO calls power, not chips, the binding constraint."
    }
  ],
  geopolitics: "This chain is the front line of US-China technology competition, and the leverage is deliberately concentrated. US export controls bar China from leading-edge accelerators: Blackwell stays banned, and in January 2026 Commerce moved H200 and AMD's MI325X to case-by-case review, while an August 2025 arrangement had NVIDIA and AMD agree to remit 15% of China AI-chip revenue for export licenses (a reported 25% Section 232 tariff on these exports is press-sourced only and not in the BIS rule). The structural fault line is Taiwan, where TSMC fabricates over 90% of leading-edge logic on one island roughly 130 km from China and accounts for more than 40% of Taiwan's stock market; Arizona and Japan diversification does not reach the leading edge until ~2027. ASML's absolute EUV monopoly gives the Netherlands, aligned with US and Japanese controls, a second veto point that has kept EUV out of China entirely. In response China is pushing domestic silicon, with Huawei's Ascend 910C on SMIC 7nm targeting large 2026 volumes and HBM as its key bottleneck, and it retains counter-leverage through gallium and germanium controls, suspended only to ~Nov 2026 under the trade truce, a pause rather than a removal."
};

/* ============================================================
   5. ENTERPRISE AI & AGENTIC SOFTWARE
   ============================================================ */
window.FUTURIST_CHAINS["enterprise-ai"] = {
  overview: "This is a software value chain, and value concentrates at two ends: the frontier model layer (a handful of mostly private US labs) and the systems-of-record that already own enterprise data. The contested middle is orchestration plus integration, where ontology and permissioned data are the moats, and the applied edge is vertical agent apps priced increasingly by outcome rather than by seat. The binding constraint is not raw capability but trust: only 16% of enterprise deployments are 'true agents' (Menlo 2025) and 95% of pilots show no measurable P&L impact (MIT NANDA 2025). Deployment and change-management is a large, underappreciated services layer because the failure mode is organizational, not technical.",
  tiers: [
    {
      name: "Raw materials & feedstocks",
      links: [
        {
          item: "Frontier foundation models",
          role: "reasoning and tool-use engine under every agent",
          players: "OpenAI, Anthropic, Google (Gemini/Vertex); Meta Llama (open-weight)",
          geography: "Overwhelmingly US labs; open-weight price pressure from China (DeepSeek)",
          concentration: "concentrated",
          chokepoint: true,
          risk: "A few private US labs supply the reasoning ceiling for the whole applied layer; a capability or pricing shift upstream cascades to every agent vendor.",
          fix: "Open-weight models (Llama, DeepSeek) and multi-model routing reduce lock-in, but frontier reasoning stays concentrated."
        },
        {
          item: "Enterprise data & telemetry (systems of record)",
          role: "the permissioned context agents act on",
          players: "Salesforce, SAP, ServiceNow, Workday (own the operational data)",
          geography: "US-centric SaaS incumbents; data residency varies by customer",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Agents are only as capable as their governed access to the data locked inside incumbent systems of record, which gives those incumbents data-gravity leverage."
        }
      ]
    },
    {
      name: "Components & subsystems",
      links: [
        {
          item: "Agent frameworks & orchestration",
          role: "plan, route, and chain multi-step agent actions",
          players: "LangChain, Microsoft Copilot Studio / AutoGen, LlamaIndex, CrewAI",
          geography: "Diversified, US-led open-source and vendor tooling",
          concentration: "diversified",
          chokepoint: false,
          risk: "Many orchestration frameworks compete and interoperate; it is a fast-moving but not single-sourced layer.",
          fix: "MCP and open frameworks keep switching costs low across orchestrators."
        },
        {
          item: "Integration & connectors (Model Context Protocol)",
          role: "common substrate to reach enterprise data and tools",
          players: "MCP (Anthropic, open; adopted by OpenAI, Google); Glean, Snowflake Cortex, Palantir AIP ontology",
          geography: "US-led; open standard with broad adoption",
          concentration: "concentrated",
          chokepoint: true,
          risk: "Governed access to systems of record is the integration substrate autonomy needs; integration debt and permissioning gaps are what kill pilots. Ontology and permissioned data are the real moats.",
          fix: "MCP (Nov 2024) is standardizing the connector layer, lowering per-tool integration cost."
        },
        {
          item: "Eval, reliability & observability tooling",
          role: "test and monitor agent trustworthiness on multi-step tasks",
          players: "Datadog LLM Observability, LangSmith, Arize, Braintrust",
          geography: "Diversified US vendors",
          concentration: "diversified",
          chokepoint: false,
          risk: "Reliability tooling is immature relative to the trust bar agents must clear, but many credible vendors exist and the layer is competitive."
        }
      ]
    },
    {
      name: "Manufacturing & integration",
      links: [
        {
          item: "Application & vertical agent software",
          role: "the agent apps that do the actual work",
          players: "Salesforce Agentforce, ServiceNow Now Assist; Sierra, Decagon, Harvey, Abridge, Cursor/Cognition, Intercom Fin",
          geography: "US-centric contest: SaaS incumbents vs VC-funded AI-natives",
          concentration: "diversified",
          chokepoint: false,
          risk: "Many vendors compete across verticals; this is where outcome pricing lives and where seat-based incumbents are most exposed, but no single app is a chokepoint."
        },
        {
          item: "Systems integrators & implementation",
          role: "wire agents into real workflows and data",
          players: "Accenture, Deloitte; regional SIs and boutiques",
          geography: "Global professional-services capacity",
          concentration: "diversified",
          chokepoint: false,
          risk: "Integration capacity is broad and usage-based; it benefits from agent sprawl rather than being cannibalized by it."
        }
      ]
    },
    {
      name: "Deployment & operations",
      links: [
        {
          item: "Organizational change management",
          role: "get employees to actually use the agents",
          players: "Accenture, Deloitte, McKinsey; internal transformation teams",
          geography: "Global services layer",
          concentration: "diversified",
          chokepoint: true,
          risk: "MIT NANDA finds the barriers are organizational, not technological; org inertia is the #1 failure mode and 95% of pilots show no P&L impact. Change capacity, not model quality, paces adoption.",
          fix: "Playbooks and outcome-based engagements are emerging, but the constraint is human and slow to scale."
        },
        {
          item: "Governance, security & liability",
          role: "audit, permission, and assign accountability for agent actions",
          players: "hyperscaler + SaaS controls; identity/security vendors; EU AI Act regime",
          geography: "US vendors; EU sets the compliance bar",
          concentration: "concentrated",
          chokepoint: true,
          risk: "Autonomous action with real authority needs audit and clear liability; only 21% of enterprises have mature agentic-AI governance (Deloitte 2026), and 'inadequate risk controls' is a top cancellation driver.",
          fix: "Governance frameworks and permissioning are maturing, but liability for autonomous action stays legally unresolved."
        },
        {
          item: "Outcome measurement",
          role: "prove sustained P&L impact, not demos",
          players: "buyers' finance/ops teams; vendor value-realization functions",
          geography: "Diversified, buyer-side",
          concentration: "diversified",
          chokepoint: false,
          risk: "Few deployments publish audited, sustained P&L impact; Klarna's 2025 partial walk-back shows how fragile the outcome narrative can be, but measurement is a discipline gap, not a supply bottleneck."
        }
      ]
    }
  ],
  topChokepoints: [
    {
      item: "Reliability & evals (agent trustworthiness)",
      why: "Trust on multi-step tasks is the gate: 84% of deployments stay as fixed workflows and 95% of pilots show no measurable P&L impact. Until agents are dependable enough to supervise by exception, autonomy cannot cross from copilot to true agent, and Gartner projects over 40% of agentic projects canceled by end of 2027."
    },
    {
      item: "Data integration, permissions & security",
      why: "Agents are only as capable as their governed access to the systems of record that hold enterprise data, and integration debt is what kills pilots. Ontology plus permissioned data is the real moat, MCP is only now standardizing the connector layer, and secure access is inseparable from the liability question."
    },
    {
      item: "Organizational change & liability",
      why: "The binding constraint is human, not technical: MIT NANDA finds the barriers are organizational, and only 21% of enterprises have mature agentic-AI governance. Autonomous action with authority raises unresolved accountability and liability questions that cap how far enterprises will let agents go."
    }
  ],
  geopolitics: "The frontier model layer and the enterprise agent stack are overwhelmingly US: OpenAI, Anthropic, Google, and Microsoft on models, and the SaaS incumbents (Salesforce, ServiceNow, SAP, Workday) on the systems of record agents act upon. Open-weight competition from DeepSeek and other China labs pressures the model layer mainly on price rather than displacing it at the frontier. Data sovereignty is the second axis: agents need permissioned access to regulated enterprise data, so residency rules and the EU AI Act raise the compliance and governance bar for autonomous action, advantaging vendors who can prove auditability. The result is a divergence, a US-centric contest between hyperscalers/incumbents and VC-funded AI-natives, a China track built on cheaper open-weight models for its domestic market, and an EU posture that competes through regulation and governance rather than through model or application share."
};
