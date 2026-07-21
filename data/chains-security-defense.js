/* Supply-chain deep dives — Security & Defense domain. Keyed by technology id. */

window.FUTURIST_CHAINS = window.FUTURIST_CHAINS || {};

/* ============================================================
   1. DEFENSE TECH & MILITARY AUTONOMY  (physical chain)
   ============================================================ */
window.FUTURIST_CHAINS["defense-autonomy"] = {
  overview: "The defense-autonomy chain is physical and bifurcating: cheap attritable mass at one end, exquisite autonomy software at the other. Its upstream is gated by China, which dominates both rare-earth magnets and small-drone components, while downstream value migrates to C2/autonomy software held by a few Western firms. Manufacturing is splitting between legacy cost-plus primes and software-first new entrants racing to build attritable mass at Chinese cost points. What is mature is sensors and platforms; what is missing is domestic magnet and drone-component capacity plus proven combat-grade autonomy at scale.",
  tiers: [
    {
      name: "Raw materials & feedstocks",
      links: [
        {
          item: "Rare-earth magnets (NdFeB + heavy REE Dy/Tb)",
          role: "permanent magnets for drone motors, actuators, seekers",
          players: "China (mining + separation dominant); MP Materials, USA Rare Earth (US), Lynas (Australia)",
          geography: "China dominant in separation/processing; US and Australia onshoring nascent",
          concentration: "single-source",
          chokepoint: true,
          risk: "DoD notes ~78% of US weapons programs contain rare-earth-dependent components; China imposed two export-control waves in 2025 (Oct tranche suspended one year to ~Nov 2026), demonstrating direct leverage.",
          fix: "MP Materials, USA Rare Earth, and Lynas are building non-China separation, but qualification lags demand."
        },
        {
          item: "Energetics & propellants",
          role: "explosives and propellants for munitions",
          players: "Western primes and government arsenals; precursor chemistry often China-exposed",
          geography: "China-exposed precursor chemicals",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Energetics and propellant precursors are China-exposed and capacity-constrained, limiting the ability to surge munitions production."
        },
        {
          item: "Semiconductors & battery materials",
          role: "compute silicon and power for drones and edge",
          players: "NVIDIA, Qualcomm (commercial silicon repurposed); China-dominant battery materials",
          geography: "US-designed chips fabbed in Taiwan; battery materials China-dominant",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Attritable systems repurpose commercial chips and China-dominant battery cells, inheriting the same fabrication and supply exposure."
        }
      ]
    },
    {
      name: "Components & subsystems",
      links: [
        {
          item: "Small drones / airframes & flight controllers",
          role: "attritable strike, ISR, and FPV platforms",
          players: "DJI (China); Anduril, AeroVironment, Red Cat (US); Ukraine's 160+ FPV producers",
          geography: "China (DJI) dominant in civil drones; US and Ukraine building non-China lines",
          concentration: "concentrated",
          chokepoint: true,
          risk: "DJI holds ~70% of the global civil drone market (~77% US); motors, flight controllers, and cameras are China-centric, forcing costlier NDAA/'Blue' non-China sourcing.",
          fix: "US and Ukrainian producers are scaling non-China lines, but not yet at DJI cost points."
        },
        {
          item: "Sensors & seekers (EO/IR, radar)",
          role: "targeting, ISR, and terminal guidance",
          players: "Hensoldt (DE), Leonardo/Leonardo DRS, RTX, L3Harris, Teledyne FLIR",
          geography: "US and European suppliers; diversified",
          concentration: "diversified",
          chokepoint: false,
          risk: "Multiple credible Western sensor suppliers exist; supply is specialized but not single-sourced."
        },
        {
          item: "Edge compute",
          role: "onboard inference for targeting and navigation",
          players: "NVIDIA, Qualcomm (commercial silicon repurposed)",
          geography: "US-designed; fabricated in Taiwan",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Low-SWaP onboard inference relies on commercial silicon; adequate today, but ties edge autonomy to the same fabrication chokepoints as AI compute."
        },
        {
          item: "Electronic warfare / RF",
          role: "jamming and GPS/RF-denied resilience",
          players: "L3Harris, BAE, Hensoldt; motors and magnets China-dominant upstream",
          geography: "Western EW suppliers; magnet inputs China-dominant",
          concentration: "concentrated",
          chokepoint: false,
          risk: "EW resilience is the top Ukraine battlefield lesson; Western suppliers exist but depend on China-dominant motors and magnets upstream."
        }
      ]
    },
    {
      name: "Manufacturing & integration",
      links: [
        {
          item: "Legacy prime integration & sustainment",
          role: "platform integration, certification, sustainment",
          players: "Lockheed Martin, RTX, Northrop Grumman, General Dynamics, Boeing",
          geography: "US primes; European primes run parallel",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Primes control integration, certification, and sustainment franchises; slow and costly but hard to displace on complex platforms."
        },
        {
          item: "Software-first new-entrant mass production",
          role: "attritable platform manufacturing at scale",
          players: "Anduril (Arsenal-1), Kratos, Red Cat, AeroVironment",
          geography: "US; scaling capacity",
          concentration: "concentrated",
          chokepoint: true,
          risk: "Attritable economics require mass production at DJI-cost points that no US line has yet proven; the bottleneck is components and magnets, not designs.",
          fix: "Anduril's Arsenal-1 and peers are purpose-built for mass output, but throughput at cost remains unproven."
        },
        {
          item: "European primes & Ukraine production",
          role: "NATO rearmament capacity and FPV mass",
          players: "Rheinmetall, Saab, Leonardo, Helsing; Ukraine (160+ FPV producers, ~8M/yr claimed)",
          geography: "Europe and Ukraine",
          concentration: "diversified",
          chokepoint: false,
          risk: "European rearmament (EU ~€131B push) and Ukraine's claimed ~8M/yr FPV capacity add mass, but Europe's build-rate is untested and Ukraine figures are self-reported."
        }
      ]
    },
    {
      name: "Deployment & operations",
      links: [
        {
          item: "Autonomy & C2 / battle-management software",
          role: "sensor-to-shooter fusion and mission autonomy",
          players: "Palantir (Maven), Anduril (Lattice), Shield AI (Hivemind), Helsing",
          geography: "US and Europe; few proven combat-grade stacks",
          concentration: "concentrated",
          chokepoint: true,
          risk: "Few proven combat-grade autonomy stacks exist; integration and certification, not code, are the bottleneck, and trusted edge compute is scarce.",
          fix: "Lattice/Hivemind-class stacks and open architectures are maturing toward interoperability."
        },
        {
          item: "Sustainment & operations",
          role: "fielding, maintenance, operator training",
          players: "US DoD/DAWG, JIATF-401, NATO militaries, Ukraine",
          geography: "US, NATO, and the Ukraine testbed",
          concentration: "diversified",
          chokepoint: false,
          risk: "Operational sustainment is distributed across militaries; the durable open question is whether software firms ever own sustainment revenue."
        }
      ]
    }
  ],
  topChokepoints: [
    {
      item: "Rare-earth magnets (NdFeB + heavy REE Dy/Tb)",
      why: "China holds a near-monopoly on separation/processing, ~78% of US weapons programs contain rare-earth-dependent components, and Beijing demonstrated export-control leverage in 2025. It is the most binding physical dependency in the chain."
    },
    {
      item: "Small-drone components & airframes",
      why: "DJI holds ~70% of the global civil drone market and China dominates motors, flight controllers, and cameras. NDAA/'Blue' rules force costlier non-China sourcing that is not yet at DJI cost or scale."
    },
    {
      item: "Autonomy software & trusted edge compute",
      why: "Few combat-grade autonomy stacks exist and integration plus certification, not code, is the binding bottleneck. Trusted low-SWaP edge compute for GPS/RF-denied operation remains scarce."
    }
  ],
  geopolitics: "US-China decoupling organizes the chain. China imposed two waves of rare-earth export controls in 2025 (the October tranche suspended one year to ~Nov 2026) and dominates the small-drone supply base through DJI, giving it leverage over both magnets and airframes. In response the US is pushing an 'arsenal of autonomy' reshoring effort via DJI restrictions, NDAA/'Blue' sourcing rules, and domestic magnet capacity (MP Materials, USA Rare Earth). Ukraine is the live testbed and an emerging arms-export base, having proven attritable autonomy at industrial scale. NATO rearmament (spending above 2% of GDP; an EU ~€131B defense push) is pulling European primes (Rheinmetall, Saab, Hensoldt, Leonardo, Helsing) up-market fast."
};

/* ============================================================
   2. AI CYBERSECURITY  (software / services chain)
   ============================================================ */
window.FUTURIST_CHAINS["cybersecurity-ai"] = {
  overview: "The cybersecurity-AI chain is software and services, and its value is migrating from human labor to autonomous agents on both offense and defense. Upstream sits with the frontier-model labs and the largest telemetry graphs; midstream are the detection engines, agent tooling, and identity platforms; downstream is the SOC labor the automation thesis is built to compress. What is mature is agentic-SOC and autonomous-pentest products, both now shipping; what is missing is reliability at machine speed and a working runtime standard for agent identity. Incumbents holding the largest data graphs carry a structural edge over pure-play point solutions.",
  tiers: [
    {
      name: "Raw materials & feedstocks",
      links: [
        {
          item: "Foundation models",
          role: "reasoning engines for offense and defense",
          players: "OpenAI, Anthropic, Google DeepMind",
          geography: "US frontier labs; the same models arm both sides",
          concentration: "concentrated",
          chokepoint: false,
          risk: "The same frontier models power attack and defense; capability is concentrated in a few labs, and hallucination limits autonomous reliability."
        },
        {
          item: "Threat-intel & telemetry data",
          role: "grounds agent decisions and trains detection",
          players: "Google Project Zero, Mandiant/Google Threat Intelligence, Microsoft Threat Intelligence, Recorded Future",
          geography: "US-centric intel providers; largest graphs held by platforms",
          concentration: "concentrated",
          chokepoint: true,
          risk: "Agents are only as good as the signal they see; incumbents with the largest telemetry graphs (CrowdStrike, Microsoft) hold a structural, hard-to-replicate data advantage.",
          fix: "Threat-intel sharing and open feeds exist, but proprietary telemetry scale is not easily replicated."
        }
      ]
    },
    {
      name: "Components & subsystems",
      links: [
        {
          item: "Detection engines",
          role: "endpoint, network, and cloud threat detection",
          players: "CrowdStrike (Falcon/Charlotte), Palo Alto (Cortex), SentinelOne (Purple AI), Microsoft (Defender), Zscaler, Cloudflare, Fortinet",
          geography: "US platform vendors; diversified",
          concentration: "diversified",
          chokepoint: false,
          risk: "Many credible detection vendors exist; legacy signature-based and rules-only tools are most at risk as agentic triage compresses correlation labor."
        },
        {
          item: "Agent tooling (autonomous SOC & offense)",
          role: "autonomous triage, response, and pentesting",
          players: "CrowdStrike Charlotte, Dropzone AI, Prophet Security, Torq, Intezer; offensive: XBOW",
          geography: "US-centric startups and platforms",
          concentration: "concentrated",
          chokepoint: true,
          risk: "Autonomous action on wrong signals is costly and erodes trust; false positives from hallucination are the named failure mode gating deployment.",
          fix: "Vendors claim large false-positive reductions (unverified); reliability improves with better telemetry grounding."
        },
        {
          item: "Identity (human, machine, agent)",
          role: "authenticates and authorizes actors",
          players: "Okta, CyberArk (now inside Palo Alto), Microsoft Entra",
          geography: "US identity vendors",
          concentration: "concentrated",
          chokepoint: true,
          risk: "No settled runtime standard authenticates agents qua agents; MCP/OAuth 2.1 still has unsolved principal-model gaps as agent-to-agent traffic grows.",
          fix: "Palo Alto's ~$25B CyberArk acquisition, Microsoft Entra, and CSA agentic-identity work target the gap; standards remain immature."
        }
      ]
    },
    {
      name: "Manufacturing & integration",
      links: [
        {
          item: "Security platforms (consolidation)",
          role: "bundle detection, identity, and response",
          players: "Palo Alto (Cortex + CyberArk), CrowdStrike (Falcon), Microsoft Security",
          geography: "US platform consolidators",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Platform bundling squeezes point solutions and pure-play SOAR vendors as agentic SOC subsumes orchestration."
        },
        {
          item: "Managed detection & response (MDR / MSSP)",
          role: "operational coverage for non-hyperscaler enterprises",
          players: "ReliaQuest, Accenture Security, Deloitte, CrowdStrike Falcon Complete",
          geography: "Global services providers; diversified",
          concentration: "diversified",
          chokepoint: false,
          risk: "MDR translates agent capability into coverage, but MSSPs whose margin is manual Tier-1 labor are the most exposed to automation."
        }
      ]
    },
    {
      name: "Deployment & operations",
      links: [
        {
          item: "Enterprise SOC operations",
          role: "monitors, triages, and supervises agent fleets",
          players: "Enterprise SOC teams, CISOs",
          geography: "Global; talent-constrained",
          concentration: "concentrated",
          chokepoint: true,
          risk: "Security talent is scarce and expensive; this is the labor the automation thesis explicitly targets, and the secondary binding constraint after data and reliability.",
          fix: "Agentic SOC aims to remove the analyst-scarcity bottleneck by handling Tier-1/Tier-2 triage."
        },
        {
          item: "Incident response & recovery",
          role: "contains and remediates breaches",
          players: "Mandiant, Unit 42 (Palo Alto); incident-response firms",
          geography: "US-led IR firms; global reach",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Response depends on scarce expert responders; liability and accountability law keep humans on consequential actions longer than roadmaps imply."
        }
      ]
    }
  ],
  topChokepoints: [
    {
      item: "Data & telemetry",
      why: "Agents are only as good as the signal they see, so the largest telemetry graphs (CrowdStrike, Microsoft) are a structural, hard-to-replicate advantage. Whoever holds the data grounds the most reliable autonomy."
    },
    {
      item: "False-positive / reliability cost",
      why: "Autonomous action on wrong signals is expensive and erodes trust, and hallucination is the named failure mode. It keeps humans in the loop on consequential systems longer than roadmaps imply."
    },
    {
      item: "Agent/machine identity & talent",
      why: "No settled runtime standard authenticates agents as agents (MCP/OAuth principal-model gaps unsolved), making identity the decisive control layer. Scarce security talent is the secondary constraint the automation thesis is built to attack."
    }
  ],
  geopolitics: "State actors are central to this chain. In November 2025 Anthropic disclosed what it called the first AI-orchestrated cyber-espionage campaign, attributed to a 'Chinese state-sponsored group' (high confidence; the autonomy claims are contested and no IOCs were published, so treat as reported rather than settled). As AI lowers the skill floor, offensive-cyber capability proliferates, and export-control and offensive-AI governance remain unresolved. Post-quantum urgency is partly driven by adversary 'harvest-now, decrypt-later' collection against finalized NIST standards (FIPS 203/204/205). Frontier-model access is US-concentrated, but the same models arm both attackers and defenders, so leverage sits with whoever fields reliable autonomy first."
};

/* entries appended below */
