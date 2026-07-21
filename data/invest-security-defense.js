/* Investable maps — Security & Defense domain. Keyed by technology id. */

window.FUTURIST_INVEST = window.FUTURIST_INVEST || {};

/* entries appended below */

/* -----------------------------------------------------------------------------
   DEFENSE TECH & MILITARY AUTONOMY
   ----------------------------------------------------------------------------- */
window.FUTURIST_INVEST["defense-autonomy"] = {
  thesis: "Over 30 years autonomous, software-defined systems move from the edge of force structure to its center: attritable drones and loitering munitions, collaborative combat aircraft, and AI command-and-control fusing sensors to shooters at machine speed. Software-first entrants such as Palantir, Anduril, Shield AI, and Helsing contest procurement share the legacy cost-plus primes long monopolized, while those primes keep the integration, certification, and sustainment franchises. \"Central\" does not require fully autonomous lethal decisions; a human-judgment requirement (DoD Directive 3000.09) may persist or be codified in treaty.",

  howToThink: "There is no clean public pure-play here. The firms furthest ahead on software-first autonomy, Anduril (~$61B in 2026), Shield AI, and Helsing, are private, so a public investor reaches the theme only indirectly. Palantir is the closest listed proxy but trades on a rich, multi-thesis valuation; the legacy primes, Lockheed, RTX, Northrop, General Dynamics, and Boeing, give diluted exposure and are themselves the names most pressured on the software and attritable-mass layer; the listed small-caps, Kratos, AeroVironment, Red Cat, and Ondas, are speculative and profit-thin; European primes, Rheinmetall, Saab, and Hensoldt, ride NATO rearmament but had already begun cooling by mid-2026. The bear case is concrete: the US FY2027 autonomy line of roughly $50B-plus is a request that appropriations can gut, private valuations have run hot with defense venture funding around $49B in 2025, and a binding lethal-autonomous-weapons instrument or hardened human-judgment rules could cap the most valuable use cases.",

  conviction: {
    rating: "Medium",
    ourProbability: 0.75,
    street: "The market has re-rated defense broadly on NATO rearmament and the software-first narrative, bidding private autonomy names and European primes up sharply through 2025 into 2026.",
    edge: "We separate the likely technological arrival, autonomy central to force structure, from clean investability: the best pure-plays are private, the public primes are diluted, and the listed small-caps are speculative.",
    horizon: "Exposure builds through the late-2020s procurement ramp (CCA, Replicator 2); structural inflection comes as software-first firms contest prime-tier share into the 2030s."
  },

  sCurve: {
    stage: "inflection",
    points: [
      { year: 2026, value: 50, unit: "$B", note: "order-of-magnitude for autonomous systems plus defense-AI software; anchored to the US FY2027 drones/autonomy request of roughly $50B-plus (a request, not appropriated), author framing" },
      { year: 2035, value: 150, unit: "$B", note: "author estimate; attritable mass plus software C2 normalized across leading militaries" },
      { year: 2042, value: 250, unit: "$B", note: "author estimate; autonomous/attritable systems central in air, land, and sea with humans supervisory" },
      { year: 2056, value: 400, unit: "$B", basis: "author estimate, wide band; autonomy and AI decision-software central to force structure globally" }
    ]
  },

  marketMap: [
    {
      segment: "Software-first defense and autonomy",
      chainNode: "Autonomy and C2 software",
      companies: [
        {
          name: "Palantir Technologies",
          ticker: "PLTR",
          exposure: "core",
          stance: "long",
          purity: "med",
          cap: "mega",
          horizon: "near",
          region: "US",
          note: "Maven Smart System targeting plus an up-to-$10B Army enterprise deal; US-government revenue grew about 84% year-over-year in Q1 2026. Bear case is a rich, multi-thesis valuation and that defense is only part of the story."
        },
        {
          name: "Anduril",
          ticker: "private",
          exposure: "pure-play",
          stance: "long",
          purity: "high",
          cap: "private",
          horizon: "mid",
          region: "US",
          note: "Lattice AI C2, an up-to-$20B Army contract vehicle, and CCA production (YFQ-44A); roughly $61B private valuation in 2026. No clean public exposure; the valuation roughly doubled in about nine months and IPO timing is uncertain, with management cautioning against listing mid-hype-cycle."
        },
        {
          name: "Shield AI",
          ticker: "private",
          exposure: "pure-play",
          stance: "long",
          purity: "high",
          cap: "private",
          horizon: "mid",
          region: "US",
          note: "Hivemind mission-autonomy software; roughly $12.7B private valuation in 2026. Private, so no public access; the valuation rose about 140% in a year, classic hype-cycle risk."
        },
        {
          name: "Helsing",
          ticker: "private",
          exposure: "pure-play",
          stance: "long",
          purity: "high",
          cap: "private",
          horizon: "mid",
          region: "Europe",
          note: "European defense-AI software; roughly $18B private valuation in 2025-2026. Private and dependent on European procurement cadence, which had begun cooling by mid-2026."
        }
      ]
    },
    {
      segment: "Legacy primes",
      chainNode: "Platforms, integration, and sustainment",
      companies: [
        {
          name: "Lockheed Martin",
          ticker: "LMT",
          exposure: "core",
          stance: "watch",
          purity: "high",
          cap: "large",
          horizon: "near",
          region: "US",
          note: "Deep platform and sustainment franchise that controls integration and certification. Bear case is margin and share compression on the software and attritable-mass layer where software-first entrants are contesting prime-tier work."
        },
        {
          name: "RTX",
          ticker: "RTX",
          exposure: "core",
          stance: "watch",
          purity: "med",
          cap: "mega",
          horizon: "near",
          region: "US",
          note: "Missiles, sensors, and Collins autonomy content (CCA-adjacent) alongside commercial aerospace. Bear case is the same cost-plus exposure on the software layer plus a diluted defense signal."
        },
        {
          name: "Northrop Grumman",
          ticker: "NOC",
          exposure: "core",
          stance: "watch",
          purity: "high",
          cap: "large",
          horizon: "near",
          region: "US",
          note: "Strong in stealth, space, and mission systems with a durable integration role. Bear case is reliance on exquisite, cost-plus platforms as attritable mass and software C2 become the center of gravity."
        },
        {
          name: "General Dynamics",
          ticker: "GD",
          exposure: "adjacent",
          stance: "watch",
          purity: "med",
          cap: "large",
          horizon: "near",
          region: "US",
          note: "Land systems, submarines, and IT services, plus Gulfstream. Bear case is limited software-autonomy leadership and a diversified mix that mutes the theme."
        },
        {
          name: "Boeing",
          ticker: "BA",
          exposure: "adjacent",
          stance: "watch",
          purity: "low",
          cap: "large",
          horizon: "near",
          region: "US",
          note: "Defense platforms and autonomy programs sit inside a company dominated by troubled commercial aircraft. Bear case is execution risk and low defense-autonomy purity."
        }
      ]
    },
    {
      segment: "Drones and counter-UAS (small-cap)",
      chainNode: "Attritable airframes and C-sUAS",
      companies: [
        {
          name: "Kratos Defense",
          ticker: "KTOS",
          exposure: "pure-play",
          stance: "long",
          purity: "high",
          cap: "small",
          horizon: "mid",
          region: "US",
          note: "Jet-powered drones, targets, and CCA-adjacent programs. Bear case is lumpy program timing and a valuation that already prices in the autonomy narrative."
        },
        {
          name: "AeroVironment",
          ticker: "AVAV",
          exposure: "core",
          stance: "long",
          purity: "high",
          cap: "small",
          horizon: "mid",
          region: "US",
          note: "Switchblade loitering munitions and small UAS with real battlefield pull. Bear case is program concentration and a stretched valuation."
        },
        {
          name: "Red Cat",
          ticker: "RCAT",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "small",
          horizon: "long",
          region: "US",
          note: "Army Short-Range Reconnaissance program of record and a Palantir GPS-denied navigation partnership. Bear case is thin, unproven profitability and execution risk on scale-up."
        },
        {
          name: "Ondas Holdings",
          ticker: "ONDS",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "small",
          horizon: "long",
          region: "US",
          note: "Drone and counter-drone platforms with high growth. Bear case is unproven profitability and speculative, volatile pricing."
        }
      ]
    },
    {
      segment: "European primes",
      chainNode: "NATO rearmament exposure",
      companies: [
        {
          name: "Rheinmetall",
          ticker: "RHM.DE",
          exposure: "core",
          stance: "long",
          purity: "med",
          cap: "large",
          horizon: "near",
          region: "Europe",
          note: "FY2025 sales about €9.9B (up ~29%), backlog around €64B, Skyranger counter-UAS, and 2026 guidance of roughly +40-45%. Bear case is that European defense stocks had already begun cooling by mid-2026 and delivery at scale is the open test."
        },
        {
          name: "Saab",
          ticker: "SAAB-B.ST",
          exposure: "core",
          stance: "long",
          purity: "high",
          cap: "large",
          horizon: "mid",
          region: "Europe",
          note: "Air, land, and sea systems, radar, and uncrewed underwater vehicles. Bear case is a re-rated valuation and the same European delivery-capacity question."
        },
        {
          name: "Hensoldt",
          ticker: "HAG.DE",
          exposure: "core",
          stance: "long",
          purity: "high",
          cap: "mid",
          horizon: "mid",
          region: "Europe",
          note: "Radar and EO/IR sensors; Q1 2026 order intake more than doubled year-over-year. Bear case is sensor-supplier cyclicality and valuation after a sharp re-rating."
        }
      ]
    }
  ],

  atRisk: [
    { name: "Legacy cost-plus prime contracting model", ticker: "LMT, RTX, NOC, GD, BA", note: "The cost-plus, low-rate, exquisite-platform model is structurally pressured on the software and attritable-mass layer, where software-first entrants like Anduril and Palantir contest prime-tier share; integration and sustainment franchises remain the defensible core." },
    { name: "China-magnet-exposed drone supply chains", ticker: "various", note: "Names deeply dependent on China-sourced NdFeB magnets, motors, and DJI-class components face cost and availability risk under 2025-era export controls and NDAA 'Blue' sourcing rules." }
  ],

  lastReviewed: "2026-07"
};

/* -----------------------------------------------------------------------------
   AI CYBERSECURITY
   ----------------------------------------------------------------------------- */
window.FUTURIST_INVEST["cybersecurity-ai"] = {
  thesis: "Over 30 years both cyber offense and defense move to machine speed: AI systems routinely discover vulnerabilities, write and defend against exploits, and run SOC triage while humans supervise fleets of agents. The most durable public exposure is the platform incumbents with the largest telemetry graphs and the identity layer that authorizes human, machine, and agent actors. The net offense/defense balance is asymmetric by segment and genuinely uncertain: commodity fraud may keep favoring attackers even as critical-infrastructure defense automates.",

  howToThink: "Think in three layers. First, the public platforms, CrowdStrike, Palo Alto, and peers, are the cleanest 30-year exposure because they own the telemetry and are already shipping agentic-SOC products, while incumbents Microsoft and Google carry the same capability inside far larger companies. Second, the sharpest AI-native tools, XBOW on offense and Dropzone, Prophet, and Torq on defense, are private, so a public investor cannot own them cleanly yet. Third, watch identity: authorizing agents rather than detecting malware may become the decisive control plane, which is why Palo Alto paid about $25B for CyberArk. The bear case is real: vendors and frontier labs profit from hyping the AI-attacker threat, hallucination caps how much can be safely automated, consolidation compresses point-solution returns, and it is genuinely unsettled whether AI net-favors defense at all.",

  conviction: {
    rating: "High",
    ourProbability: 0.80,
    street: "The market treats agentic SOC and platform consolidation as a secular growth story and pays premium multiples for the leaders such as CrowdStrike and Palo Alto.",
    edge: "We think the decisive 30-year control plane is machine and agent identity, not malware detection; the platforms that own identity plus the largest telemetry graphs compound, while the reliability wall keeps humans, and cost, in the loop longer than roadmaps imply.",
    horizon: "Investable in public platforms today; agentic-SOC displacement of Tier-1 labor and the maturation of agent-identity standards inflect across the late-2020s into the 2030s."
  },

  sCurve: {
    stage: "inflection",
    points: [
      { year: 2026, value: 250, unit: "$B", note: "global cybersecurity spend, order-of-magnitude; AI-native and agentic security a small but fast-growing slice, author estimate" },
      { year: 2035, value: 450, unit: "$B", note: "author estimate; agentic SOC handles the majority of Tier-1/Tier-2 triage in large enterprises" },
      { year: 2042, value: 650, unit: "$B", note: "author estimate; autonomous attack and defense the default, humans supervisory" },
      { year: 2056, value: 900, unit: "$B", basis: "author estimate, wide band; machine-speed offense and defense predominant, spend compounds with attack surface and agent identity" }
    ]
  },

  marketMap: [
    {
      segment: "Security platforms (public)",
      chainNode: "Detection engines and agentic SOC",
      companies: [
        {
          name: "CrowdStrike",
          ticker: "CRWD",
          exposure: "core",
          stance: "long",
          purity: "high",
          cap: "large",
          horizon: "near",
          region: "US",
          note: "Q3 FY26 (reported Dec 2025) ARR $4.92B (+23% Y/Y) and revenue $1.23B (+22%); leads the agentic-SOC narrative with Charlotte. Bear case is a rich multiple that requires real headcount and loss reduction, not slideware."
        },
        {
          name: "Palo Alto Networks",
          ticker: "PANW",
          exposure: "core",
          stance: "long",
          purity: "high",
          cap: "large",
          horizon: "near",
          region: "US",
          note: "Closed the ~$25B CyberArk (CYBR) acquisition in Feb 2026, folding privileged and non-human identity into the platform (CyberArk is no longer independently listed); Cortex drives the agentic-SOC push. Bear case is integration risk and reliance on bundling to displace point solutions."
        },
        {
          name: "SentinelOne",
          ticker: "S",
          exposure: "core",
          stance: "long",
          purity: "high",
          cap: "mid",
          horizon: "mid",
          region: "US",
          note: "Purple AI autonomous-endpoint and detection. Bear case is smaller scale against CrowdStrike and Microsoft and intense platform competition."
        },
        {
          name: "Zscaler",
          ticker: "ZS",
          exposure: "core",
          stance: "long",
          purity: "high",
          cap: "large",
          horizon: "mid",
          region: "US",
          note: "Zero-trust network access with AI overlays. Bear case is platform-bundling pressure from larger suites and a premium valuation."
        },
        {
          name: "Fortinet",
          ticker: "FTNT",
          exposure: "core",
          stance: "long",
          purity: "med",
          cap: "large",
          horizon: "mid",
          region: "US",
          note: "Broad network-security and firewall franchise adding AI. Bear case is a heavier legacy-appliance mix more exposed to the agentic and cloud-native shift."
        },
        {
          name: "Cloudflare",
          ticker: "NET",
          exposure: "adjacent",
          stance: "long",
          purity: "med",
          cap: "large",
          horizon: "mid",
          region: "US",
          note: "Zero-trust and edge network security within a broader connectivity platform. Bear case is that security is only part of the story and the valuation is rich."
        }
      ]
    },
    {
      segment: "Identity",
      chainNode: "Human, machine, and agent identity",
      companies: [
        {
          name: "Okta",
          ticker: "OKTA",
          exposure: "core",
          stance: "long",
          purity: "high",
          cap: "mid",
          horizon: "mid",
          region: "US",
          note: "Human plus machine and agent identity, the emerging control plane as agent-to-agent traffic grows. Bear case is competition from Microsoft Entra and platform bundling after Palo Alto absorbed CyberArk (CYBR), which is no longer independently investable."
        }
      ]
    },
    {
      segment: "Incumbents with security AI",
      chainNode: "Platform-native security plus threat intelligence",
      companies: [
        {
          name: "Microsoft",
          ticker: "MSFT",
          exposure: "adjacent",
          stance: "long",
          purity: "low",
          cap: "mega",
          horizon: "near",
          region: "US",
          note: "Security Copilot, Defender, and Entra agentic identity sit on one of the largest telemetry graphs. Bear case is that security is a slice of Microsoft and bundling invites scrutiny."
        },
        {
          name: "Alphabet",
          ticker: "GOOGL",
          exposure: "adjacent",
          stance: "long",
          purity: "low",
          cap: "mega",
          horizon: "near",
          region: "US",
          note: "Mandiant, Google Threat Intelligence, and Big Sleep / Project Zero (AI-found zero-days) give real capability. Bear case is that security is immaterial to Alphabet's ad-driven profit pool."
        }
      ]
    },
    {
      segment: "AI-native startups (private)",
      chainNode: "Autonomous offense and defense",
      companies: [
        {
          name: "XBOW",
          ticker: "private",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "private",
          horizon: "mid",
          region: "US",
          note: "Autonomous AI pentester that reached #1 on the HackerOne US leaderboard, outranking human researchers; raised $75M. Private, so no public exposure; offensive-AI liability and governance are unresolved overhangs."
        },
        {
          name: "Dropzone AI",
          ticker: "private",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "private",
          horizon: "mid",
          region: "US",
          note: "Autonomous SOC analyst; $37M Series B (Jul 2025) with 100+ customers. Private. Bear case is the reliability wall, since hallucination limits fully autonomous action on consequential systems."
        },
        {
          name: "Prophet Security",
          ticker: "private",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "private",
          horizon: "mid",
          region: "US",
          note: "Agentic SOC; $30M Series A led by Accel. Its claim of about 96% fewer false positives is a vendor figure and unverified independently. Private and unproven at scale."
        },
        {
          name: "Torq",
          ticker: "private",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "private",
          horizon: "mid",
          region: "US",
          note: "Agentic SOAR and hyperautomation; $140M Series D at roughly a $1.2B valuation. Private. Bear case is that agentic SOC subsumes standalone orchestration over time."
        }
      ]
    }
  ],

  atRisk: [
    { name: "Legacy signature-based AV and rules-only detection", ticker: "various", note: "Detection built on static signatures and hand-written rules is compressed as AI-driven and behavioral detection becomes table stakes." },
    { name: "Standalone SIEM and pure-play SOAR", ticker: "various", note: "Value anchored in human-driven correlation and orchestration erodes as agentic SOC subsumes Tier-1 triage; platform bundling such as Palo Alto plus CyberArk squeezes point solutions." },
    { name: "Manual-labor MSSPs and MDR", ticker: "various", note: "Managed providers whose margin is manual Tier-1 analysis face automation of the very labor they resell." }
  ],

  lastReviewed: "2026-07"
};
