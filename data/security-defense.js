/* =============================================================================
   THE FUTURIST — SECURITY & DEFENSE DOMAIN
   Technologies: Defense Tech & Military Autonomy, AI Cybersecurity
   Horizon: 30 years (target year 2056)
   ============================================================================= */

window.FUTURIST_DATA = window.FUTURIST_DATA || [];

/* ============================================================
   1. DEFENSE TECH & MILITARY AUTONOMY
   ============================================================ */
window.FUTURIST_DATA.push({
    id: "defense-autonomy",
    name: "Defense Tech & Military Autonomy",
    shortName: "Defense",
    tagline: "Cheap, software-guided robots are colliding with hundred-million-dollar platforms, and rewriting what military power costs.",
    domain: "security-defense",
    glyph: "⛨",
    status: "scaling",
    consequence: 8,

    probability: {
      value: 0.75,
      definition: "By 2056, software-defined, attritable, autonomous systems (loitering munitions, collaborative combat aircraft, autonomous ISR/strike, uncrewed maritime) are central rather than exceptional in the force structure of every major military, AI command-and-control fuses sensors to shooters at machine speed, and software-first entrants hold prime-tier procurement share. 'Central' does not require fully autonomous lethal decisions; a human-judgment requirement may persist or be codified.",
      basis: "Author estimate, anchored to the direction and scale of committed spending and doctrine rather than a single forecast. The DoD FY2027 request seeks an order-of-magnitude ~$50B+ for drones and autonomous warfare (the largest autonomy commitment in DoD history; exact dollar splits and sensational multiples vary by outlet and are hedged here). Replicator (2023) institutionalized attritable autonomy as a procurement category, and Ukraine has demonstrated attritable autonomy at industrial scale (wartime self-reported FPV output), collapsing the cost curve of precision strike. Residual downside covers procurement inertia, budget cycles, and ethics or treaty constraints on the most autonomous use cases.",
      range: [0.55, 0.9]
    },

    arrival: {
      optimistic: 2035,
      consensus: 2042,
      skeptical: 2055
    },

    whyItMatters: "If attritable, software-defined autonomous systems become central to force structure, the cost of credible military power collapses and advantage shifts from a few expensive platforms to whoever can produce smart, cheap mass and the command software to direct it. That reorders the defense industrial base and hands leverage to whoever controls drone components and rare-earth magnets. It also forces an unresolved legal question: how much lethal decision-making will humans delegate to machines.",

    feynman: [
      {
        level: 1,
        label: "The kitchen-table version",
        body: "Think about a war movie. There is always a brave pilot in a cockpit, or soldiers charging a hill. Now imagine that instead, thousands of small, cheap flying robots do the dangerous work. They cost about as much as a used car, not a mansion, so it barely matters if some get shot down. That is what 'military autonomy' means: machines that can find targets and fly themselves, guided by software instead of a human hand on every control. Ukraine showed the world this is already real. Both sides now build millions of little drones a year and use them the way older armies used artillery. The United States is spending tens of billions of dollars to catch up, and new companies most people have never heard of, like Anduril and Palantir, are winning contracts that used to go only to giant old defense firms. Why does it matter? Because for a hundred years, military power meant expensive things: aircraft carriers, jets, tanks. If a swarm of cheap robots can threaten those expensive things, the whole logic of who is strong and who is weak begins to change. And underneath it all sits one hard question: how much should we let a machine decide, on its own, to take a human life?"
      },
      {
        level: 2,
        label: "The mechanism",
        body: "A modern autonomous weapon has three parts working together: sensors, software, and a body. The body might be a quadcopter drone, a loitering munition (a drone that crashes into its target, sometimes called a kamikaze drone), or an uncrewed fighter jet. The sensors are cameras, radar, and radio receivers. The software is the new part. It fuses the sensor feeds, identifies what it is looking at, and plans an action, increasingly at the edge, meaning on a chip inside the drone rather than on a distant server. That matters because the enemy jams radio links. Ukraine's answer was fiber-optic drones that trail a hair-thin glass cable, so there is no signal to jam, plus 'target-lock' modules that let a drone finish its dive even if the operator is cut off. Above the individual weapon sits command-and-control software, systems like Anduril's Lattice or Palantir's Maven, which take feeds from thousands of sensors, hand a commander a single picture, then help match each threat to a shooter at machine speed. The doctrine phrase is 'sensor-to-shooter.' The goal is not one clever robot; it is 'attritable mass,' enough cheap, smart, expendable systems that losing many still wins. Software, not the airframe, is becoming the expensive and decisive ingredient."
      },
      {
        level: 3,
        label: "The hard part",
        body: "The hard part is autonomy that survives contact with a real, jamming, deceiving enemy. Three problems dominate. First, the electromagnetic spectrum: GPS and radio links fail under jamming, so a drone must navigate and identify targets on its own, using low-power chips that fit in something disposable. Terminal-guidance autonomy (locking on for the final seconds) is proven; full engagement autonomy, deciding what to attack with no human, is contested and legally fraught. Second, manufacturing. Attritable only works if the units are genuinely cheap and made by the million, yet today the cheapest motors, flight controllers, and cameras come from China (DJI dominates), and the magnets depend on Chinese rare-earth processing. Building a non-Chinese supply chain raises the price and is the real bottleneck, not the designs. Third, procurement. Militaries are built to buy a few exquisite things over decades, not millions of cheap things every year. The US 'Replicator' program tried to force this and, by one former official's account, delivered hundreds where it promised thousands. The numbers people track: the FY2027 budget request (roughly $50 billion-plus for autonomous warfare), how many Collaborative Combat Aircraft actually reach production, monthly drone output, and whether counter-drone systems can down swarms cheaply enough to matter."
      },
      {
        level: 4,
        label: "The frontier",
        body: "At the frontier the fight is over who owns the decisive layer and under what rules. Commercially, two bets collide. Software-first entrants, Anduril (Lattice, roughly a $61B private valuation), Palantir (Maven, a designated program of record), and Shield AI (Hivemind), argue that autonomy software and attritable mass are the new center of gravity and that legacy primes become mere platform builders. The incumbents, Lockheed, RTX, Northrop, General Dynamics, and Boeing, counter that they control integration, certification, and sustainment, and that programs like Collaborative Combat Aircraft (won by General Atomics and Anduril together) will co-opt autonomy rather than displace them. The unresolved commercial question is whether software firms ever own decades-long sustainment revenue. The deeper open problem is legal. US policy (DoD Directive 3000.09) requires 'appropriate levels of human judgment over the use of force,' but it is policy, not treaty. At the UN, the CCW Group of Governmental Experts has debated a binding instrument on lethal autonomous weapons for years; in 2025 dozens of states signaled readiness to negotiate, but nothing binding exists and major powers resist. What would change minds: a conflict where autonomous swarms decisively beat crewed forces, a verified fully-autonomous lethal engagement, or a treaty that actually constrains one."
      }
    ],

    timeline: {
      milestones: [
        {
          id: "m1",
          title: "DoD Directive 3000.09 sets the human-judgment rule for autonomous weapons",
          kind: "policy",
          years: { optimistic: 2012, consensus: 2012, skeptical: 2012 },
          detail: "First issued in 2012 and updated in January 2023, DoD Directive 3000.09 is the foundational US policy on autonomy in weapon systems. It requires that commanders and operators retain 'appropriate levels of human judgment over the use of force.' It is policy, not law or treaty, and it gates how far US lethal autonomy can go without new authorization.",
          done: true
        },
        {
          id: "m2",
          title: "Replicator and Ukraine prove attritable autonomous mass at scale",
          kind: "deployment",
          years: { optimistic: 2023, consensus: 2025, skeptical: 2026 },
          detail: "The Pentagon's Replicator initiative (launched August 2023) institutionalized 'all-domain attritable autonomous' systems as a procurement category, targeting thousands of units by roughly 2025 (a transition was declared in 2025; delivered scale is contested, hundreds versus thousands by one former official's account). In parallel Ukraine industrialized FPV-drone warfare, with wartime self-reported output rising toward millions of units a year, proving cheap precision strike at scale.",
          done: true
        },
        {
          id: "m3",
          title: "Software-first firms win prime-tier AI command-and-control and autonomous aircraft",
          kind: "deployment",
          years: { optimistic: 2025, consensus: 2026, skeptical: 2028 },
          detail: "Palantir's Maven Smart System passed $1B in cumulative value (2025) and moved toward program-of-record status, and Palantir signed an Army enterprise deal worth up to $10B over ten years (2025). Anduril won an Army contract vehicle worth up to $20B for Lattice AI C2 and counter-UAS (2026), and Collaborative Combat Aircraft prototypes from General Atomics and Anduril first flew (2025). The shift from legacy cost-plus primes to software-first entrants is underway but not settled.",
          done: false
        },
        {
          id: "m4",
          title: "Collaborative Combat Aircraft fielded at scale as autonomous wingmen",
          kind: "scaleup",
          years: { optimistic: 2029, consensus: 2031, skeptical: 2036 },
          detail: "CCA Increment 1 aims for at least 150 autonomous fighter-companion aircraft by roughly the end of the decade, with Increment 2 vendors to be down-selected. Reaching operational scale would make autonomous air combat a program-of-record reality rather than a prototype, validating attritable air mass alongside crewed fighters.",
          done: false
        },
        {
          id: "m5",
          title: "AI command-and-control fuses sensor-to-shooter at machine speed across a major force",
          kind: "breakthrough",
          years: { optimistic: 2030, consensus: 2035, skeptical: 2044 },
          detail: "The doctrinal goal is software that ingests thousands of sensor feeds and matches each threat to the right shooter faster than humans can, across a whole theater. Systems like Lattice and Maven are early steps; doing this reliably, under jamming and deception, across an entire major military is the harder threshold.",
          done: false
        },
        {
          id: "m6",
          title: "Governance of lethal autonomous weapons resolved by treaty or hardened norm",
          kind: "policy",
          years: { optimistic: 2030, consensus: 2038, skeptical: 2056 },
          detail: "At the UN CCW, the Group of Governmental Experts has debated a binding instrument on lethal autonomous weapons for years; in 2025 dozens of states signaled readiness to negotiate, but nothing binding exists and major powers resist. Resolution could mean a treaty capping fully autonomous engagement, or the hardening of human-judgment requirements like DoDD 3000.09 into enforceable norms.",
          done: false
        },
        {
          id: "m7",
          title: "Autonomous, attritable systems central to the force structure of leading militaries",
          kind: "deployment",
          years: { optimistic: 2035, consensus: 2042, skeptical: 2055 },
          detail: "The arrival event: software-defined, attritable, autonomous platforms are the default across air, land, and sea for leading militaries, AI C2 is program-of-record, and software-first entrants hold prime-tier share, with humans retaining supervisory control. Optimistic timing assumes autonomy becomes program-of-record this decade; skeptical timing assumes procurement inertia and safety constraints keep crewed legacy platforms dominant past 2056.",
          done: false
        }
      ],
      branches: [
        {
          id: "b1",
          name: "Software-primes displace legacy",
          fromMilestone: "m3",
          probability: 0.4,
          summary: "Software-first entrants (Anduril, Palantir, Shield AI) capture prime-tier share as autonomous mass plus software C2 becomes the center of gravity, relegating cost-plus primes to platforms and integration.",
          milestones: [
            {
              id: "b1m1",
              title: "Anduril reaches public markets or prime-scale revenue",
              kind: "scaleup",
              years: { optimistic: 2027, consensus: 2030, skeptical: 2035 },
              detail: "Anduril (around a $61B private valuation in 2026) either IPOs or reaches revenue rivaling a mid-tier prime; management has publicly cautioned against IPO'ing in the middle of a hype cycle. A clean public pure-play would mark software-first defense as an established prime tier.",
              done: false
            },
            {
              id: "b1m2",
              title: "A software firm owns decades-long sustainment on a major program",
              kind: "deployment",
              years: { optimistic: 2032, consensus: 2038, skeptical: 2048 },
              detail: "The durable question is whether software-first entrants ever capture sustainment revenue, not just development contracts. Winning and holding sustainment on a major autonomous program would confirm the displacement thesis.",
              done: false
            }
          ]
        },
        {
          id: "b2",
          name: "Legacy primes adapt and co-opt",
          fromMilestone: "m3",
          probability: 0.35,
          summary: "Incumbents (Lockheed, RTX, Northrop, General Dynamics, Boeing) absorb autonomy through internal builds, acquisitions, and teaming, keeping prime share via control of integration, certification, and sustainment.",
          milestones: [
            {
              id: "b2m1",
              title: "Primes win the majority of autonomous program-of-record dollars",
              kind: "deployment",
              years: { optimistic: 2028, consensus: 2033, skeptical: 2040 },
              detail: "General Atomics winning CCA alongside Anduril, and RTX and Collins in CCA autonomy, show incumbents competing directly. If primes capture most autonomy procurement dollars, the software insurgents are contained to a niche.",
              done: false
            },
            {
              id: "b2m2",
              title: "European primes scale attritable production under NATO rearmament",
              kind: "scaleup",
              years: { optimistic: 2027, consensus: 2031, skeptical: 2038 },
              detail: "Rheinmetall, Saab, Hensoldt, Leonardo, and Helsing are pulling up-market fast under Europe's rearmament push; the test is whether they can actually build weapons at attritable cost points, not just win backlog.",
              done: false
            }
          ]
        },
        {
          id: "b3",
          name: "Treaty or ethics constraint on lethal autonomy",
          fromMilestone: "m6",
          probability: 0.2,
          summary: "International law or hardened norms cap fully autonomous lethal engagement; human-judgment requirements harden and autonomy stays supervised.",
          milestones: [
            {
              id: "b3m1",
              title: "UN concludes a binding instrument on lethal autonomous weapons",
              kind: "policy",
              years: { optimistic: 2028, consensus: 2035, skeptical: 2050 },
              detail: "The Campaign to Stop Killer Robots (60+ NGOs) and a 2025 GGE bloc of dozens of states pushed toward negotiations, and the UN Secretary-General and ICRC urged a binding instrument. None is concluded as of this brief, and major powers resist.",
              done: false
            },
            {
              id: "b3m2",
              title: "Human-judgment requirements harden into enforceable rules of engagement",
              kind: "policy",
              years: { optimistic: 2030, consensus: 2037, skeptical: 2050 },
              detail: "Short of a treaty, DoDD 3000.09-style human-judgment rules could be codified into enforceable, verifiable constraints across allied militaries, capping the most autonomous (and most valuable) lethal use cases.",
              done: false
            }
          ]
        }
      ]
    },

    backcast: {
      today: [
        "Anduril's Lattice AI command-and-control is deploying as an Army battlefield backbone (an up-to-$20B contract vehicle, 2026), and Palantir's Maven Smart System is a designated or near program-of-record targeting system generating heavy US-government revenue.",
        "Collaborative Combat Aircraft (autonomous fighter 'wingmen') are in production contracting; both Increment 1 prototypes have flown (General Atomics YFQ-42A, August 2025; Anduril YFQ-44A, October 2025).",
        "Ukraine fields fiber-optic (jam-resistant) FPV drones at a claimed ~100,000 attack units per month by spring 2026, using many automatic target-lock module types; terminal-guidance autonomy is battlefield-proven while full engagement autonomy stays contested (figures are wartime self-reported).",
        "Anduril took over the Army's IVAS soldier-goggle effort via a $159M SBMC prototype award (September 2025); older '$22B / 120,000 headset' figures are a Microsoft-era program ceiling, not a booked Anduril contract.",
        "Private-market signal: Anduril around $61B, Shield AI around $12.7B, and Helsing around $18B valuations (2025-2026); venture capital into defense tech hit roughly $49B in 2025."
      ],
      dependencies: [
        { name: "Edge AI / onboard autonomy compute", why: "Targeting and navigation must run on the drone when the datalink is jammed.", state: "Commercial silicon (NVIDIA, Qualcomm) is repurposed; low-SWaP inference is maturing but not yet cheap and disposable at scale." },
        { name: "Comms / EW resilience (GPS- and RF-denied operation)", why: "The single biggest battlefield lesson from Ukraine is that radio links fail under jamming.", state: "Fiber-optic FPV, mesh networking, and terminal autonomy are fielded; robust GPS-denied navigation remains a frontier." },
        { name: "Scalable attritable manufacturing", why: "Attritable economics require mass production at genuinely low unit cost.", state: "Anduril's Arsenal-1 factory and Ukraine's 160+ FPV producers exist; components and magnets, not designs, are the bottleneck." },
        { name: "Autonomy software / open architecture", why: "Interoperable mission-autonomy stacks and common data layers are needed to direct mass.", state: "Lattice, Hivemind, and Maven-class stacks are maturing; few are combat-grade and certified." }
      ],
      supplyChain: [
        { item: "Rare-earth magnets (NdFeB, plus heavy Dy/Tb)", why: "Motors, actuators, and guidance depend on them.", players: "China (processing near-monopoly), MP Materials, USA Rare Earth, Lynas", chokepoint: true },
        { item: "Small-drone components and airframes", why: "Motors, flight controllers, and cameras are the attritable-mass building blocks.", players: "DJI (China, ~70% civil share), NDAA 'Blue' non-China sourcing", chokepoint: true },
        { item: "Autonomy / C2 software and trusted edge compute", why: "Sensor-to-shooter fusion is the decisive layer; few stacks are combat-certified.", players: "Palantir, Anduril, Shield AI, Helsing; NVIDIA and Qualcomm silicon", chokepoint: true },
        { item: "Sensors (EO/IR, radar, EW)", why: "Perception for targeting and counter-drone.", players: "Hensoldt, Leonardo DRS, RTX, L3Harris, Teledyne FLIR", chokepoint: false }
      ],
      leadingIndicators: [
        "Whether FY2027 appropriations actually fund the ~$50B+ autonomous-warfare request, versus getting cut in continuing resolutions or reprogramming.",
        "CCA Increment 1 hitting production lots and Increment 2 vendor down-select.",
        "Replicator 2 and counter-UAS fieldings reaching meaningful quantity (thousands).",
        "Whether the UN CCW GGE produces a binding lethal-autonomous-weapons instrument or fails again.",
        "Domestic rare-earth magnet capacity (MP Materials, USA Rare Earth) coming online, and any Anduril IPO signal."
      ]
    },

    people: [
      { name: "Palmer Luckey", role: "Founder", org: "Anduril", note: "Face of software-first defense; argues attritable autonomy and software C2 displace legacy cost-plus primes." },
      { name: "Brian Schimpf", role: "CEO", org: "Anduril", note: "Runs Anduril's Lattice and CCA programs; publicly cautioned against IPO'ing in the middle of a hype cycle." },
      { name: "Alex Karp", role: "CEO", org: "Palantir", note: "Drives the Maven Smart System and the Army enterprise deal; evangelist for software-defined targeting." },
      { name: "Pete Hegseth", role: "US Secretary of Defense", org: "US Department of Defense", note: "Issued the 2025 Replicator 2 / JIATF-401 counter-UAS memo; pushing an 'arsenal of autonomy.'" },
      { name: "Paul Scharre", role: "Author and analyst", org: "CNAS", note: "Former Pentagon autonomy-policy author; wrote Army of None; skeptical that a treaty ban is the right solution." },
      { name: "Stuart Russell", role: "AI professor", org: "UC Berkeley", note: "Leading advocate for a ban on lethal autonomous weapons; behind the 'Slaughterbots' campaign." }
    ],

    reading: [
      { title: "Army of None: Autonomous Weapons and the Future of War", author: "Paul Scharre", year: 2018, type: "book", note: "The standard primer on military autonomy and the human-judgment debate." },
      { title: "DOD Replicator Initiative (CRS IF12611)", author: "Congressional Research Service", year: 2024, type: "report", note: "Concise official explainer of the attritable-autonomy procurement program." },
      { title: "US Policy on Lethal Autonomous Weapon Systems (CRS IF11150)", author: "Congressional Research Service", year: 2025, type: "report", note: "Summarizes DoDD 3000.09 and the international lethal-autonomous-weapons debate." },
      { title: "US Air Force Collaborative Combat Aircraft (CRS IF12740)", author: "Congressional Research Service", year: 2025, type: "report", note: "Background on the autonomous 'wingman' program and its schedule." },
      { title: "DoD Directive 3000.09: Autonomy in Weapon Systems", author: "US Department of Defense", year: 2023, type: "report", note: "The primary US policy requiring appropriate human judgment over lethal force." }
    ]
});

/* ============================================================
   2. AI CYBERSECURITY
   ============================================================ */
window.FUTURIST_DATA.push({
    id: "cybersecurity-ai",
    name: "AI Cybersecurity",
    shortName: "Cybersecurity",
    tagline: "When both the burglars and the locksmiths run at machine speed, the whole contest moves faster than any human can watch.",
    domain: "security-defense",
    glyph: "⛊",
    status: "scaling",
    consequence: 7,

    probability: {
      value: 0.80,
      definition: "By 2056, both cyber offense and defense operate predominantly at machine speed and are largely autonomous: vulnerability discovery, exploit generation, red-teaming, and SOC triage are routinely performed by AI systems on both sides, humans supervise fleets of AI agents rather than doing the work by hand, and identity or authorization for machine and agent actors is the primary control plane.",
      basis: "Author estimate; no agency or analyst has published a 2056 cyber-autonomy probability. High confidence rests on capability already demonstrated on both sides: AI-found zero-days (Google Big Sleep in SQLite; OpenAI o3 in the Linux kernel), the #1 autonomous pentester on HackerOne's US leaderboard, agentic SOC products shipping from every major platform, and DARPA's AIxCC proving autonomous find-and-patch. The uncertainty is timing and the offense/defense balance, not whether machine-speed cyber arrives. The residual ~20% covers a reliability wall (hallucination), regulatory throttling of offensive AI, and a stalemate that keeps humans in the loop longer.",
      range: [0.6, 0.92]
    },

    arrival: {
      optimistic: 2032,
      consensus: 2040,
      skeptical: 2050
    },

    whyItMatters: "If both cyber offense and defense run predominantly at machine speed, security stops being a contest of human analysts and becomes a contest of AI fleets, resetting who holds the advantage and making machine and agent identity the primary control plane. The stakes are every digital system that matters. The open question is whether cheap automated offense or automated defense comes out ahead, likely differently for commodity crime than for critical infrastructure.",

    feynman: [
      {
        level: 1,
        label: "The kitchen-table version",
        body: "Imagine your house has a million doors and windows. A burglar only has to find one you forgot to lock; you have to lock every single one, every night, forever. That is what defending a computer network is like, and it is why defenders always feel like they are losing. Now imagine you could hire a tireless robot locksmith that walks the whole house every second, testing every lock and fixing the weak ones before anyone tries them. And imagine the burglars get their own robots, which can try a million doors a night instead of a few. That is the story of AI in cybersecurity: both the attackers and the defenders are getting robot helpers, and the whole contest is speeding up beyond what humans can follow by hand. This is not science fiction. In 2024 and 2025, AI programs found brand-new security holes in real software that no human had spotted. A government contest proved AI could find those holes and patch them automatically. At the same time, criminals used AI to fake a company executive's voice and face on a video call and steal millions. The big question for the next thirty years: when both sides have robots, does the attacker or the defender come out ahead?"
      },
      {
        level: 2,
        label: "The mechanism",
        body: "Break it into offense and defense. On offense, the useful trick is that a large language model can read code and reason about it. Point it at a program and it can hunt for a 'vulnerability,' a flaw that lets an attacker do something they should not, then write the 'exploit' that abuses it. Researchers have used models this way to find real 'zero-days,' previously unknown flaws, in widely used software. AI also cheapens social engineering: convincing phishing emails and deepfake voice or video that impersonate a real person. On defense, the same reading-and-reasoning ability powers the 'agentic SOC.' A SOC is a security operations center, the room full of analysts who watch alerts; an agent is an AI that can take steps on its own. Agentic SOC products triage the flood of alerts, decide which are real, and respond, doing the Tier-1 work that used to burn out human analysts. A parallel idea is autonomous 'find-and-patch': systems that discover a flaw and write the fix without waiting for a person. Underneath both sits a new problem: identity. When software agents act on their own, networks must prove which agent is which and what each is allowed to do, authenticating machines the way we authenticate people."
      },
      {
        level: 3,
        label: "The hard part",
        body: "The hard part is trust, in two senses. First, reliability: today's models hallucinate, meaning they state false things confidently. An autonomous defender that acts on a wrong signal can break the very systems it guards, and an autonomous attacker that hallucinates wastes its shot, so hallucination is the named wall. Even Anthropic, describing an attack it says used its model, conceded the AI 'hallucinated credentials' it did not really have. Second, accountability: who is responsible when an agent takes a consequential action on its own? Until liability law settles, humans stay in the loop on anything that matters, which slows the whole automation story. There are structural constraints too. Agents are only as good as the telemetry they see, so the firms with the biggest data graphs (CrowdStrike, Microsoft) have an edge. And there is still no settled runtime standard for authenticating one agent to another; emerging work bolts OAuth-style auth onto agent protocols, but the 'who is the principal' question is unsolved. The numbers to watch: whether contest-grade autonomous patching reaches production on critical open-source; whether a second, independently corroborated large-scale AI attack appears with real forensic evidence; and how fast agentic tools actually replace Tier-1 analyst headcount rather than just selling slideware."
      },
      {
        level: 4,
        label: "The frontier",
        body: "At the frontier the real question is the offense-defense balance, and it is genuinely open. The defense-optimistic camp, voiced by CrowdStrike's George Kurtz and echoed by DARPA's AI Cyber Challenge, argues AI structurally favors defenders: continuous machine discovery plus autonomous patching can close the exploit window faster than attackers weaponize, and agentic triage erases the analyst-scarcity bottleneck. The offense-pessimistic camp notes attackers need one success while defenders must be right every time, that the same frontier models arm both sides cheaply, and that deepfake and phishing losses are already compounding. A third camp, led by Palo Alto's Nikesh Arora (whose firm bought CyberArk for about $25 billion), argues the decisive layer is neither malware nor patching but identity: whoever authenticates and authorizes machine and agent actors controls security. A key caution: vendors and frontier labs both profit from a 'the sky is falling' narrative, so threat claims deserve skepticism. Anthropic's November 2025 report of a largely AI-run espionage campaign is the sharpest example; multiple researchers dispute the autonomy figures, note the absence of published indicators, and call parts of it marketing. What would change minds: corroborated evidence of a genuinely autonomous large-scale attack, or conversely, autonomous patching demonstrably shrinking real-world breach rates. The most likely outcome is segmented: offense winning the commodity low end, defense and identity deciding the high end."
      }
    ],

    timeline: {
      milestones: [
        {
          id: "m1",
          title: "AI agents find real zero-day vulnerabilities in production software",
          kind: "breakthrough",
          years: { optimistic: 2024, consensus: 2025, skeptical: 2025 },
          detail: "Google's Big Sleep (Project Zero plus DeepMind) found a previously unknown flaw in SQLite in October 2024, and in July 2025 flagged a SQLite flaw an adversary was preparing to exploit in the wild. In May 2025 researcher Sean Heelan used OpenAI's o3 to find a Linux kernel zero-day (CVE-2025-37899) in the ksmbd SMB handler. AI finding real bugs in production-grade code stopped being hypothetical.",
          done: true
        },
        {
          id: "m2",
          title: "DARPA's AI Cyber Challenge proves autonomous find-and-patch at scale",
          kind: "breakthrough",
          years: { optimistic: 2025, consensus: 2025, skeptical: 2025 },
          detail: "At the AIxCC final at DEF CON 33 (August 2025), autonomous systems found and patched vulnerabilities in open-source software at scale. Team Atlanta (Georgia Tech, Samsung, KAIST, POSTECH) won $4M; Trail of Bits' 'Buttercup' placed second and Theori third. DARPA framed it as a pivotal inflection point for cyber defense.",
          done: true
        },
        {
          id: "m3",
          title: "Agentic SOC and autonomous pentesting reach commercial mainstream",
          kind: "deployment",
          years: { optimistic: 2025, consensus: 2026, skeptical: 2028 },
          detail: "By 2025 every major platform sells an 'agentic SOC': CrowdStrike shipped Charlotte Agentic SOAR with seven mission-ready agents. XBOW, an autonomous AI pentester, reached #1 on HackerOne's US leaderboard (July 2025) and raised $75M. Palo Alto Networks acquired CyberArk for about $25B (closed February 2026) to secure human, machine, and agent identity. Adoption is real, but its displacement of human triage is still ramping.",
          done: false
        },
        {
          id: "m4",
          title: "Autonomous patching moves from competition to production on critical open-source",
          kind: "deployment",
          years: { optimistic: 2029, consensus: 2032, skeptical: 2040 },
          detail: "The gate is taking AIxCC-style find-and-patch from a contest to continuous production deployment on widely used open-source, closing exploit windows before attackers weaponize. This is the clearest test of the defense-dominant thesis and depends on model reliability improving enough to trust automated fixes.",
          done: false
        },
        {
          id: "m5",
          title: "Machine and agent identity gets a working runtime standard",
          kind: "invention",
          years: { optimistic: 2030, consensus: 2033, skeptical: 2042 },
          detail: "As machine-to-machine and agent-to-agent traffic dominates, the decisive control layer is authenticating and authorizing non-human actors. Emerging work bolts OAuth 2.1 and PKCE onto agent protocols (MCP), and Microsoft Entra and the Cloud Security Alliance are building agentic-identity frameworks, but the 'who is the principal' model is unsolved. A settled runtime standard would make zero-trust for agents real.",
          done: false
        },
        {
          id: "m6",
          title: "Post-quantum cryptography migrated across critical systems",
          kind: "deployment",
          years: { optimistic: 2030, consensus: 2035, skeptical: 2045 },
          detail: "NIST finalized the first post-quantum standards (FIPS 203 ML-KEM, 204 ML-DSA, 205 SLH-DSA) in August 2024, starting the clock against 'harvest-now, decrypt-later' collection. Migrating critical infrastructure and enterprise systems to these algorithms is a multi-decade rollout that runs in parallel with AI-era crypto changes.",
          done: false
        },
        {
          id: "m7",
          title: "Cyber offense and defense both operate predominantly at machine speed",
          kind: "deployment",
          years: { optimistic: 2032, consensus: 2040, skeptical: 2050 },
          detail: "The arrival event: autonomous attack and defense are the default, and humans supervise fleets of agents rather than performing detection, exploit-writing, triage, and response by hand, with machine and agent identity as the primary control plane. Optimistic timing puts defense-side autonomy mainstream by the early 2030s; the skeptical case keeps humans central into the 2050s on reliability and liability grounds.",
          done: false
        }
      ],
      branches: [
        {
          id: "b1",
          name: "Defense-dominant via automation",
          fromMilestone: "m3",
          probability: 0.35,
          summary: "AI compresses defender advantages: continuous machine vuln-discovery plus autonomous patching closes the exploit window faster than attackers weaponize, and agentic SOC removes the analyst-scarcity bottleneck.",
          milestones: [
            {
              id: "b1m1",
              title: "Autonomous patching runs in production on major open-source",
              kind: "deployment",
              years: { optimistic: 2029, consensus: 2032, skeptical: 2040 },
              detail: "The AIxCC model moves from a DEF CON contest to continuous find-and-fix on widely used libraries, measurably shrinking the window between disclosure and patch.",
              done: false
            },
            {
              id: "b1m2",
              title: "Agentic SOC handles the majority of Tier-1 and Tier-2 triage in large enterprises",
              kind: "deployment",
              years: { optimistic: 2030, consensus: 2033, skeptical: 2042 },
              detail: "Agents take over the bulk of alert triage that today burns out human analysts; the proof is headcount ratios and alert-to-agent coverage, not vendor slideware.",
              done: false
            }
          ]
        },
        {
          id: "b2",
          name: "Offense-dominant via cheap, scaled attacks",
          fromMilestone: "m3",
          probability: 0.30,
          summary: "AI collapses the cost of reconnaissance, exploit-writing, and social engineering; deepfake business-email fraud and AI-scaled phishing outrun defender adoption, since attackers need one success and defenders must be right every time.",
          milestones: [
            {
              id: "b2m1",
              title: "AI-enabled fraud losses keep compounding at triple-digit rates",
              kind: "deployment",
              years: { optimistic: 2026, consensus: 2029, skeptical: 2035 },
              detail: "Reported FBI IC3 figures (a large AI-related fraud-loss line and a triple-digit surge in 2025) are third-party summaries and should be treated as reported, not independently audited; the open question is whether the compounding continues.",
              done: false
            },
            {
              id: "b2m2",
              title: "A large-scale AI-orchestrated attack is independently corroborated",
              kind: "breakthrough",
              years: { optimistic: 2027, consensus: 2031, skeptical: 2040 },
              detail: "Anthropic's November 2025 report of a largely AI-run espionage campaign is contested and published no indicators. A second disclosure with real forensic evidence (IOCs/TTPs) would confirm offense-side autonomy; its continued absence would undercut the narrative.",
              done: false
            }
          ]
        },
        {
          id: "b3",
          name: "Identity and agent-trust become the battleground",
          fromMilestone: "m5",
          probability: 0.30,
          summary: "The decisive control layer is authenticating and authorizing non-human and agent identities, not detecting malware; whoever controls identity controls security.",
          milestones: [
            {
              id: "b3m1",
              title: "Agent-identity standards ratified and adopted at runtime",
              kind: "policy",
              years: { optimistic: 2030, consensus: 2033, skeptical: 2042 },
              detail: "MCP-style auth (OAuth 2.1 plus PKCE), Microsoft Entra agentic identity, and CSA non-human-identity governance mature into an adopted runtime standard, resolving the unsolved principal model.",
              done: false
            },
            {
              id: "b3m2",
              title: "Identity platforms consolidate the security stack",
              kind: "deployment",
              years: { optimistic: 2027, consensus: 2031, skeptical: 2040 },
              detail: "Palo Alto's roughly $25B CyberArk acquisition is the opening move; further consolidation around securing 'every identity, human, machine, and agent' would confirm identity as the center of gravity.",
              done: false
            }
          ]
        }
      ]
    },

    backcast: {
      today: [
        "Agentic SOC is a shipping product category, not a concept: CrowdStrike's Charlotte Agentic SOAR plus seven mission-ready agents, and startups Dropzone AI (autonomous SOC analyst, $37M Series B), Prophet Security ($30M Series A), and Torq (~$1.2B valuation).",
        "Autonomous offensive security is competitive with humans: XBOW reached #1 on HackerOne's US leaderboard (July 2025), raised $75M, and reported thousands of validated vulnerabilities (a vendor claim).",
        "AI has found real zero-days in production code: SQLite (Big Sleep) and the Linux kernel ksmbd handler (OpenAI o3, CVE-2025-37899).",
        "Post-quantum migration is underway on finalized NIST standards (FIPS 203/204/205, August 2024), running in parallel with AI-era crypto changes.",
        "At least one large-scale AI-orchestrated attack has been reported (Anthropic, November 2025), but its technical autonomy claims are contested and no indicators were published."
      ],
      dependencies: [
        { name: "Frontier-model reasoning reliable on long codebases", why: "Autonomous find-and-fix and autonomous attack both need models that do not hallucinate over long, concurrent work.", state: "Hallucination is the named wall; Anthropic itself noted Claude 'hallucinated credentials.' Not yet reliable unsupervised on consequential systems." },
        { name: "High-quality telemetry and detection data", why: "Agents are only as good as the signal they see.", state: "Incumbents with the largest telemetry graphs (CrowdStrike, Microsoft) hold a structural edge." },
        { name: "Machine and agent identity plus authorization at runtime", why: "Networks must authenticate and authorize non-human actors as agent traffic dominates.", state: "MCP is adopting OAuth 2.1 plus PKCE, but the principal model has unsolved gaps; no settled runtime standard." },
        { name: "Liability and accountability frameworks", why: "Law must permit autonomous action on consequential systems before humans leave the loop.", state: "Unsettled; keeps humans in the loop and slows the automation story." }
      ],
      supplyChain: [
        { item: "Foundation models", why: "The same frontier models power both offense and defense.", players: "OpenAI, Anthropic, Google DeepMind", chokepoint: true },
        { item: "Telemetry / detection data graphs", why: "Agents ground their decisions in the signal these graphs provide.", players: "CrowdStrike, Microsoft, Google/Mandiant, Recorded Future", chokepoint: true },
        { item: "Machine and agent identity control plane", why: "Authenticating and authorizing non-human actors is the emerging decisive layer.", players: "CyberArk (now inside Palo Alto Networks), Okta, Microsoft Entra", chokepoint: true },
        { item: "Detection engines and agent platforms", why: "Operationalize agents into coverage for enterprises.", players: "CrowdStrike, Palo Alto Networks, SentinelOne, Microsoft; XBOW on offense", chokepoint: false }
      ],
      leadingIndicators: [
        "Whether AIxCC-style autonomous patching moves from competition to production on critical open-source.",
        "A second, independently corroborated large-scale autonomous-attack disclosure (with IOCs/TTPs), or its continued absence.",
        "Adoption metrics for agentic SOC displacing Tier-1 human triage (headcount ratios, alert-to-agent coverage).",
        "Ratification and adoption of agent-identity standards (MCP auth maturity, non-human-identity governance frameworks).",
        "IC3 and insurer loss data: does AI-enabled fraud keep compounding at triple-digit rates (reported figures)?"
      ]
    },

    people: [
      { name: "George Kurtz", role: "Founder and CEO", org: "CrowdStrike", note: "Leads the defense-automation, agentic-SOC thesis; argues AI adoption necessitates the right cybersecurity." },
      { name: "Nikesh Arora", role: "CEO", org: "Palo Alto Networks", note: "Architect of the identity-is-the-battleground bet; drove the roughly $25B CyberArk acquisition." },
      { name: "Sean Heelan", role: "Security researcher", org: "Independent", note: "Used OpenAI's o3 to find a Linux kernel zero-day (CVE-2025-37899), documenting offensive AI capability." },
      { name: "Dan Guido", role: "Co-founder", org: "Trail of Bits", note: "His team's 'Buttercup' placed second in DARPA's AIxCC, advancing autonomous find-and-patch." },
      { name: "Team Atlanta", role: "Autonomous cyber-reasoning research team", org: "Georgia Tech / Samsung / KAIST / POSTECH", note: "AIxCC winners; an academic-industrial locus of autonomous cyber-reasoning." }
    ],

    reading: [
      { title: "Disrupting the first reported AI-orchestrated cyber espionage campaign", author: "Anthropic", year: 2025, type: "article", note: "The watershed but heavily contested disclosure of a largely AI-run attack; read alongside the skeptics." },
      { title: "How I used o3 to find CVE-2025-37899, a 0-day in the Linux kernel", author: "Sean Heelan", year: 2025, type: "article", note: "First-person account of an LLM finding a real kernel zero-day." },
      { title: "AI Cyber Challenge (AIxCC) Results", author: "DARPA", year: 2025, type: "report", note: "Official results of the autonomous find-and-patch competition DARPA calls an inflection point for defense." },
      { title: "From Naptime to Big Sleep: Using Large Language Models To Catch Vulnerabilities", author: "Google Project Zero and DeepMind", year: 2024, type: "article", note: "Google's write-up of the first AI-agent-found real-world vulnerability." },
      { title: "FIPS 203/204/205: Post-Quantum Cryptography Standards", author: "NIST", year: 2024, type: "report", note: "The finalized post-quantum standards that start the harvest-now-decrypt-later clock." },
      { title: "FBI IC3 2025 Internet Crime Report", author: "FBI Internet Crime Complaint Center", year: 2026, type: "report", note: "Source for AI-enabled fraud loss figures; treat specific numbers as reported, not audited." }
    ]
});
