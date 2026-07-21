/* =============================================================================
   THE FUTURIST — machines.js
   Domain: Machines
   Technologies: Humanoid Robots | APM / Nanotech | Autonomous Transport
   Author: Deal Researcher (Sela Capital / Lintel research stack)
   Date: 2026-06-12
   ============================================================================= */

window.FUTURIST_DATA = window.FUTURIST_DATA || [];

window.FUTURIST_DATA.push(

  /* =========================================================================
     1. GENERAL-PURPOSE HUMANOID ROBOTICS
     ========================================================================= */
  {
    id: "humanoid-robots",
    name: "General-Purpose Humanoid Robotics",
    shortName: "Humanoids",
    tagline: "Machines shaped like us, trained to do the physical work we find dull, dirty, or dangerous.",
    domain: "machines",
    glyph: "⍾",
    status: "pilot",
    consequence: 9,

    probability: {
      value: 0.62,
      definition: "At least one humanoid robot model is commercially deployed at scale (>100,000 units operating in real workplaces) by 2056.",
      basis: "Author estimate grounded in Goldman Sachs 'Humanoid Robots' industry report (2023, est. 1.4M units by 2035 base case); Metaculus community questions on general robotics deployment; adjusted downward for hardware durability and manipulation reliability gaps observed in 2024-2026 demos.",
      range: [0.40, 0.82]
    },

    arrival: {
      optimistic: 2030,
      consensus: 2038,
      skeptical: 2052
    },

    whyItMatters: "Labor shortages in logistics, elder care, construction, and manufacturing are structural and worsening. A robot that can operate anywhere a human can, without retooling the environment, would be the most economically significant capital good since the automobile. The downstream effects on labor markets, productivity, and geopolitics would be generational.",

    feynman: [
      {
        level: 1,
        label: "The kitchen-table version",
        body: "Think about a warehouse full of shelves. Right now, a human walks the aisles, reads a label, picks up the right box, and puts it on a conveyor belt. That sounds simple, but it is actually incredibly hard for a machine. Your hand knows how hard to squeeze without crushing the box. Your eyes adjust when the lighting changes. Your feet catch you when you trip on a corner of a pallet. Regular robots can do one of those things in one exact spot. Humanoid robots are the bet that if you give a machine a body shaped like ours, arms where our arms are, cameras where our eyes are, it can learn to do everything we do, everywhere we do it. In 2025, Boston Dynamics, Tesla, and a startup called Figure AI have shown robots that can walk across uneven floors, pick up objects they have never seen before, and even fold laundry. They fail a lot. But each year they fail less. The question is how much less, and how fast."
      },
      {
        level: 2,
        label: "The mechanism",
        body: "A humanoid robot needs three things working together: a body that does not break, sensors that understand the world, and software that decides what to do next. The body problem is mostly mechanical. Actuators, which are the joints and muscles of a robot, need to be strong, precise, and power-efficient all at once. Boston Dynamics uses hydraulics; most newer companies use electric motors with harmonic drives. Battery energy density sets a hard ceiling on how long the robot works per charge. The sensing problem is dominated by cameras and sometimes lidar. The software problem is where AI enters. The new approach is called a vision-language-action (VLA) model: a neural network trained on vast amounts of video and robotic teleoperation data that learns to map what the robot sees to what the robot should do, the same way a large language model maps text to text. NVIDIA's open Isaac GR00T, Physical Intelligence's pi-0.5, and Google DeepMind's Gemini Robotics are the leading examples as of 2026. These models generalize across tasks far better than older hand-coded controllers, but still fail on objects and situations outside their training distribution."
      },
      {
        level: 3,
        label: "The hard part",
        body: "The Moravec paradox, named after roboticist Hans Moravec, states that things easy for humans are hard for computers, and vice versa. Chess is easy; picking up a crumpled bag is hard. Humanoid robotics lives in that paradox. Three specific walls slow progress. First, dexterous manipulation: human hands have 27 degrees of freedom and a sense of touch with millions of receptors. Current robot hands have 6-20 DOF and crude force sensing. Grasping transparent objects, deformable materials, and small parts remains unreliable. Second, locomotion in unstructured environments: stairs with varying riser heights, gravel, wet floors, and cluttered doorways all cause failures. Boston Dynamics Atlas handles these better than anyone, but Atlas is hydraulic, expensive, and not yet a commercial product at volume. Third, sample efficiency in learning: VLA models require enormous training datasets. Sim-to-real transfer, training in simulation and deploying in the real world, still introduces a significant performance gap. Key metrics the field watches: task success rate on NIST manipulation benchmarks, hours between failures in unstructured environments, and cost per unit below which deployment economics work (roughly sub-$30,000 per robot for logistics use cases)."
      },
      {
        level: 4,
        label: "The frontier",
        body: "The field is bifurcating along two axes: embodiment design and learning architecture. On embodiment, the debate is between high-DOF cable-driven or tendon-actuated hands (more dexterous, more failure modes) and parallel-gripper designs optimized for a narrow task class (less capable, far more reliable). Agility Robotics Digit has made the latter bet and has run paid warehouse pilots with GXO and Amazon. On learning, the competition is between imitation learning from human teleoperation (Figure, Physical Intelligence), reinforcement learning in simulation (Boston Dynamics, some DeepMind work), and hybrid hierarchical approaches. The 2025 wave settled on vision-language-action foundation models with a dual-system design: NVIDIA's open Isaac GR00T N1, Physical Intelligence's pi-0.5 (open-world generalization that improved as training scaled from 3 to 104 homes), and Google DeepMind's Gemini Robotics. The open question is whether foundation model scaling laws that held in language and vision continue to hold in physical action spaces. Skeptics argue that physical interaction introduces irreducible distribution shift no amount of data cures. Believers point to the trajectory of FSD compute scaling and argue the same curve applies. The leading indicator is whether any platform achieves >95% task success on a standardized open-world manipulation benchmark."
      }
    ],

    timeline: {
      milestones: [
        {
          id: "hr-m1",
          title: "Boston Dynamics Atlas debut",
          kind: "invention",
          years: { optimistic: 2013, consensus: 2013, skeptical: 2013 },
          detail: "Boston Dynamics publicly demonstrated Atlas, a hydraulic humanoid capable of dynamic balancing and bipedal locomotion over rough terrain. The platform established the benchmark for bipedal agility and anchored global awareness that humanoid robots were a credible engineering pursuit, not science fiction.",
          done: true
        },
        {
          id: "hr-m2",
          title: "Humanoid robot foundation models arrive",
          kind: "breakthrough",
          years: { optimistic: 2025, consensus: 2025, skeptical: 2025 },
          detail: "In 2025 the field converged on vision-language-action foundation models: NVIDIA released Isaac GR00T N1 as an open humanoid foundation model, Physical Intelligence shipped pi-0.5 with open-world generalization in unseen homes, and Google DeepMind released Gemini Robotics. This was the inflection from hand-engineered controllers to generalist learned policies, mirroring the LLM moment in language.",
          done: true
        },
        {
          id: "hr-m3",
          title: "First paid commercial deployment at scale (1,000+ units)",
          kind: "deployment",
          years: { optimistic: 2027, consensus: 2030, skeptical: 2035 },
          detail: "A humanoid robot model ships in quantity to a commercial customer, logistics or manufacturing, with an SLA-backed uptime guarantee and a unit economics story below $50,000 per robot. As of 2026, deployments remain pilots: Figure 02 worked a ten-month line at BMW Spartanburg, Apptronik Apollo pilots at Mercedes, and Tesla runs a few hundred Optimus in its own factories. Hyundai's plan for up to 30,000 Atlas units annually by 2028 is the nearest path to true scale.",
          done: false
        },
        {
          id: "hr-m4",
          title: "Multi-task generalization across novel environments",
          kind: "breakthrough",
          years: { optimistic: 2029, consensus: 2034, skeptical: 2042 },
          detail: "A deployed platform demonstrates >90% success on tasks it was not explicitly trained for, in environments it has never seen, without human tele-operation. This is the inflection point at which the robot stops being a specialized tool and starts being a general-purpose labor unit. No platform is close as of 2026.",
          done: false
        },
        {
          id: "hr-m5",
          title: "Sub-$20,000 unit cost at production volume",
          kind: "scaleup",
          years: { optimistic: 2031, consensus: 2037, skeptical: 2046 },
          detail: "Manufacturing cost drops below the threshold that makes humanoid labor economically competitive with median human wages in high-cost markets. This requires actuator commoditization, battery energy density improvements, and learning from automotive supply-chain scaling. Cost is the binding constraint after technical capability.",
          done: false
        },
        {
          id: "hr-m6",
          title: "Regulatory framework for public-space humanoid operation",
          kind: "policy",
          years: { optimistic: 2032, consensus: 2040, skeptical: 2055 },
          detail: "Governments establish liability, safety certification, and operating rules for humanoid robots in public spaces (hospitals, retail, streets). Without a regulatory framework, deployment is confined to private controlled environments. The EU AI Act and OSHA industrial robot standards are the starting points but leave humanoids in a gap.",
          done: false
        },
        {
          id: "hr-m7",
          title: "Mass-market deployment: 1 million+ units operating globally",
          kind: "scaleup",
          years: { optimistic: 2036, consensus: 2044, skeptical: 2058 },
          detail: "Humanoid robots reach a scale where their macroeconomic effect on labor markets becomes measurable. Goldman Sachs' 2023 base case targets 1.4 million units by 2035; most independent analysts consider 2040-2045 more realistic. At this scale, the technology reshapes workforce planning in logistics, construction, and elder care.",
          done: false
        }
      ],
      branches: [
        {
          id: "hr-b1",
          name: "Foundation-model-driven general labor",
          fromMilestone: "hr-m4",
          probability: 0.45,
          summary: "VLA foundation models scale the way LLMs did: a single massively trained model controls many embodiments, learns new tasks from a handful of demonstrations, and commoditizes the software layer. Figure AI, Physical Intelligence, and Google DeepMind are betting here.",
          milestones: [
            {
              id: "hr-b1m1",
              title: "Cross-embodiment VLA model with <10-shot task learning",
              kind: "breakthrough",
              years: { optimistic: 2028, consensus: 2033, skeptical: 2040 },
              detail: "A foundation model for physical action generalizes across robot hardware platforms and learns new manipulation tasks from fewer than ten demonstrations. This would break the data bottleneck that currently limits deployment to narrow task sets.",
              done: false
            },
            {
              id: "hr-b1m2",
              title: "Robot-as-a-Service cloud platform dominates market",
              kind: "deployment",
              years: { optimistic: 2033, consensus: 2040, skeptical: 2050 },
              detail: "A platform company (possibly a hyperscaler) offers humanoid robots on a subscription model, pushing software updates the way Tesla pushes FSD updates. Hardware is commoditized; the margin is in the intelligence layer.",
              done: false
            }
          ]
        },
        {
          id: "hr-b2",
          name: "Narrow-task specialized humanoids dominate",
          fromMilestone: "hr-m3",
          probability: 0.35,
          summary: "General manipulation proves too hard in the 30-year window. Instead, humanoid-shaped robots with fixed task repertoires (pallet moving, elder-care lifting, specific assembly steps) proliferate because the form factor fits existing environments even if the intelligence does not generalize.",
          milestones: [
            {
              id: "hr-b2m1",
              title: "Humanoid form adopted for 3-5 high-value narrow tasks",
              kind: "deployment",
              years: { optimistic: 2029, consensus: 2035, skeptical: 2042 },
              detail: "Logistics palletizing, hospital patient transfers, and a handful of assembly steps prove reliable enough for wide deployment. The robot is humanoid in shape but not in cognitive flexibility; each task requires separate training and certification.",
              done: false
            },
            {
              id: "hr-b2m2",
              title: "Narrow-task humanoid market reaches $50B annually",
              kind: "scaleup",
              years: { optimistic: 2035, consensus: 2042, skeptical: 2052 },
              detail: "Even without general capability, humanoid robots for narrow tasks represent a large market. This branch is the more conservative outcome and is consistent with the history of industrial robotics, which scaled enormously within structured environments before any general capability emerged.",
              done: false
            }
          ]
        },
        {
          id: "hr-b3",
          name: "Hardware bottleneck stalls progress",
          fromMilestone: "hr-m3",
          probability: 0.20,
          summary: "Actuator energy density, dexterous hand reliability, and battery life improvements plateau. Software capabilities advance but the physical platform cannot execute them reliably enough. Progress slows to incremental, and the 2056 horizon closes without mass deployment.",
          milestones: [
            {
              id: "hr-b3m1",
              title: "Actuator and battery plateau recognized by industry",
              kind: "breakthrough",
              years: { optimistic: 2032, consensus: 2036, skeptical: 2042 },
              detail: "Energy density and actuator torque-to-weight ratios fail to improve at the rate software capabilities demand. The industry pivots toward wheeled or fixed-arm robots that sidestep the locomotion problem, and humanoid ambitions narrow to a few flagship research programs.",
              done: false
            }
          ]
        }
      ]
    },

    backcast: {
      today: [
        "Boston Dynamics Atlas (electric) has finished its redesign and entered production; the entire 2026 run is committed to Hyundai's Robotics Metaplant and Google DeepMind, with broader customers slated for 2027 (Automate/CES 2026).",
        "Figure AI's Figure 02 contributed to the production of more than 30,000 BMW X3s over a ten-month pilot at Spartanburg; Figure 03 (re-architected for manufacturability) is the successor; the company is private at a $39B Sept-2025 Series C valuation.",
        "Tesla deployed several hundred Optimus units in its own factories during 2025 and is converting capacity at Fremont for the Gen 3 design; Musk has guided to volume production starting around mid-to-late 2026, a target that has slipped repeatedly.",
        "Apptronik's Apollo is in pilot use at Mercedes-Benz plants in Berlin and Hungary; the company closed a $520M Series A extension in Feb 2026 (~$5.3B post-money), backed by Google, Mercedes-Benz, and the Qatar Investment Authority.",
        "Physical Intelligence's pi-0.5 (2025) demonstrated open-world generalization for mobile manipulators in unseen homes; the company raised $600M in Nov 2025 at a $5.6B valuation. China's Unitree and AGIBOT are shipping thousands of units; AGIBOT passed 10,000 units in 2026."
      ],
      dependencies: [
        {
          name: "Actuator energy density (torque-to-weight ratio)",
          why: "Determines how strong and how fast a robot can move on a given battery; current electric actuators require 10-20x improvement for human-equivalent dexterity at practical weight.",
          state: "Harmonic drives and proprioceptive actuators improving steadily; leading units from MIT Biomimetic Robotics and Hebi Robotics still 3-5x below human muscle performance per kilogram."
        },
        {
          name: "Battery energy density",
          why: "Sets the hard floor on operational duration; most humanoid prototypes run 1-2 hours per charge, far below an 8-hour work shift.",
          state: "Lithium-ion at ~300 Wh/kg; solid-state targets of 500+ Wh/kg remain 3-8 years from volume production as of 2026."
        },
        {
          name: "Vision-language-action (VLA) foundation models",
          why: "Required for generalizable manipulation; without learned policies that transfer across tasks, every new task requires months of custom engineering.",
          state: "Early models (RT-2, pi0, Figure's OpenAI-powered system) demonstrate multi-task generalization in constrained settings; reliability drops sharply outside training distribution."
        },
        {
          name: "Tactile sensing and dexterous hands",
          why: "Human-equivalent grasping requires distributed touch sensing; current robots use simple force/torque sensors that fail on deformable or small objects.",
          state: "GelSight (MIT) and Digit tactile sensors show promise in research; no production humanoid ships with high-resolution tactile hands as of 2026."
        }
      ],
      supplyChain: [
        {
          item: "Rare-earth permanent magnets (neodymium-iron-boron)",
          why: "Required for the high-torque density motors used in every electric actuator joint.",
          players: "MP Materials (US), Lynas Rare Earths (Australia), Chinese state producers (~85% of global output)",
          chokepoint: true
        },
        {
          item: "Harmonic drive gearboxes",
          why: "Precision strain-wave gearing enables backlash-free joints; essentially all humanoid robots use them.",
          players: "Harmonic Drive Systems (Japan), Nabtesco (Japan)",
          chokepoint: true
        },
        {
          item: "High-density lithium-ion or solid-state cells",
          why: "Onboard power source; energy density directly constrains operational hours.",
          players: "CATL, Panasonic, Samsung SDI, QuantumScape (solid-state, pre-production)",
          chokepoint: false
        },
        {
          item: "High-resolution CMOS image sensors and depth cameras",
          why: "Primary perception input; stereo vision and RGB-D sensors map the environment in real time.",
          players: "Sony Semiconductor, OmniVision, Intel RealSense (discontinued 2022 — supply risk), Luxonis",
          chokepoint: false
        },
        {
          item: "AI inference chips (edge GPU / NPU)",
          why: "VLA model inference must run onboard at low latency; cloud round-trips are too slow for physical manipulation.",
          players: "NVIDIA Jetson Orin, Qualcomm Robotics RB5, Hailo-8",
          chokepoint: false
        }
      ],
      leadingIndicators: [
        "Tesla Optimus Gen 3 production ramp at Fremont/Giga Texas; whether the mid-2026 start holds and how fast units reach tens of thousands per year.",
        "First humanoid contract that is a paid fleet rather than a pilot: watch Figure, Apptronik (Mercedes), Agility (GXO/Amazon), and Hyundai's plan for up to 30,000 Atlas units annually by 2028.",
        "NIST or IEEE publication of a standardized open-world manipulation benchmark; adoption by major labs signals field convergence on a shared progress metric.",
        "Solid-state battery pilot-line yields from Toyota, Samsung SDI, or QuantumScape; >400 Wh/kg at commercial grade would relax the runtime constraint.",
        "Robotics foundation models (NVIDIA Isaac GR00T, Physical Intelligence pi-0.5, Google DeepMind Gemini Robotics) publishing task-success rates on held-out environments not seen during training."
      ]
    },

    people: [
      {
        name: "Marc Raibert",
        role: "Founder and Chairman",
        org: "Boston Dynamics",
        note: "Raibert founded Boston Dynamics in 1992 (spun out of MIT) and built the dynamic locomotion research that made Atlas the field's benchmark; his work on legged robots defined what 'capable' means for the entire industry."
      },
      {
        name: "Brett Adcock",
        role: "CEO and Co-founder",
        org: "Figure AI",
        note: "Adcock founded Figure AI in 2022 after selling Vettery to Adecco; Figure's Sept 2025 Series C valued it at $39B, making it the best-funded pure-play humanoid startup; Figure 02 logged a ten-month line at BMW Spartanburg and Figure 03 is the successor design."
      },
      {
        name: "Bernt Bornich",
        role: "CEO and Co-founder",
        org: "1X Technologies",
        note: "Bornich leads 1X (formerly Halodi Robotics), which has taken a different path: slower, wheeled-base robots first (Eve), then the bipedal Neo; 1X is backed by OpenAI and focuses on a small number of carefully chosen commercial deployments before scaling."
      },
      {
        name: "Gill Pratt",
        role: "Chief Scientist",
        org: "Toyota Research Institute",
        note: "Pratt previously ran DARPA's Robotics Challenge program (2012-2015), which was the first large-scale test of humanoid robots in disaster scenarios; at TRI he leads research into amplifying human capability rather than replacing humans, a philosophically distinct design direction."
      },
      {
        name: "Chelsea Finn",
        role: "Assistant Professor",
        org: "Stanford University",
        note: "Finn developed Model-Agnostic Meta-Learning (MAML) and is a leading researcher on few-shot learning for robot manipulation; her work on learning from limited demonstrations is central to whether VLA models can learn new tasks cheaply enough for commercial deployment."
      },
      {
        name: "Aaron Saunders",
        role: "CTO",
        org: "Boston Dynamics",
        note: "Saunders leads the engineering team that designed both the hydraulic and electric Atlas platforms and Spot; his team's work on whole-body control and hardware-software co-design sets the benchmark for what bipedal robots can physically do."
      }
    ],

    reading: [
      {
        title: "Mind Children: The Future of Robot and Human Intelligence",
        author: "Hans Moravec",
        year: 1988,
        type: "book",
        note: "Moravec articulated the paradox bearing his name — sensorimotor skills are computationally harder than abstract reasoning — which remains the foundational framing for why general-purpose robots are difficult despite decades of AI progress."
      },
      {
        title: "Humanoid Robots: A New Paradigm for Labor",
        author: "Goldman Sachs Global Investment Research",
        year: 2023,
        type: "report",
        note: "Industry forecast modeling humanoid robot adoption curves, cost trajectories, and addressable labor markets; the base case of 1.4 million units by 2035 is widely cited and contested in roughly equal measure."
      },
      {
        title: "An Implicit Behavioral Cloning Approach for Robotic Manipulation",
        author: "Florence, Lynch, Zeng, et al. (Google Brain)",
        year: 2022,
        type: "paper",
        note: "Introduced implicit behavior cloning with energy-based models for robotic manipulation, one of the technical foundations for modern imitation-learning approaches to robot control."
      },
      {
        title: "RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control",
        author: "Brohan et al. (Google DeepMind)",
        year: 2023,
        type: "paper",
        note: "Demonstrated that a vision-language model pre-trained on internet data could be fine-tuned into a robot controller that generalizes to novel objects and instructions, the empirical foundation for the VLA approach."
      },
      {
        title: "pi0: A Vision-Language-Action Flow Model for General Robot Control",
        author: "Black et al. (Physical Intelligence)",
        year: 2024,
        type: "paper",
        note: "Introduced cross-embodiment training across multiple robot platforms; showed a single policy achieving strong performance on laundry folding, table busing, and box assembly — the most credible demonstration of multi-task generalization as of publication."
      }
    ]
  },

  /* =========================================================================
     2. ATOMICALLY PRECISE MANUFACTURING
     ========================================================================= */
  {
    id: "atomically-precise-manufacturing",
    name: "Atomically Precise Manufacturing",
    shortName: "APM / Nanotech",
    tagline: "The dream of building physical objects atom by atom, with zero defects and near-zero waste.",
    domain: "machines",
    glyph: "⬢",
    status: "lab",
    consequence: 10,

    probability: {
      value: 0.08,
      definition: "A working molecular assembler produces a non-trivial 3D object (>1,000 atoms, non-biological, specified structure) using programmable mechanosynthesis by 2056.",
      basis: "Author estimate. No Metaculus question directly tracks Drexlerian mechanosynthesis; the definition is intentionally strict (a working assembler, not scanning probe manipulation of individual atoms on a surface). Adjusted for: the Drexler-Smalley debate outcome (Smalley's objections on 'fat fingers' and 'sticky fingers' remain unresolved for carbon-chemistry mechanosynthesis); zero experimental progress toward a working assembler as of 2026; but acknowledging that quantum chemistry simulations and DNA origami have advanced the theoretical scaffolding substantially. A 10% probability is generous by some expert assessments; others argue non-zero probability is itself uncertain.",
      range: [0.02, 0.22]
    },

    arrival: {
      optimistic: 2042,
      consensus: 2065,
      skeptical: 2100
    },

    whyItMatters: "If atomically precise manufacturing works, the cost of physical goods approaches the cost of energy and raw atoms. Scarcity becomes a question of physics, not manufacturing capacity. Medicine, electronics, materials science, and weapons development would all transform simultaneously. The consequence score of 10 reflects this: no technology on this list has a higher ceiling if it works, and no technology is more contested on whether it ever will.",

    feynman: [
      {
        level: 1,
        label: "The kitchen-table version",
        body: "Everything around you, your chair, your phone, your food, is made of atoms. Right now we make things by melting, cutting, stamping, or mixing materials, which is like building a house by throwing bricks at a pile and hoping they land right. Most of the atoms end up in the wrong place. APM is the idea of a tiny machine that picks up atoms one by one and places them exactly where you want them, like a microscopic LEGO robot that can make anything from scratch. In 1989, IBM scientists used a scanning tunneling microscope to spell out 'IBM' by moving 35 xenon atoms on a nickel surface. That is the closest we have come. A scientist named Eric Drexler wrote a book in 1986 called Engines of Creation that described molecular machines that could build other molecular machines, getting exponentially more powerful. Most scientists think this is theoretically possible but have spent 40 years arguing about whether we can actually build the first machine that does it. We have not. DNA nanotechnology has gotten us closer: scientists now fold strands of DNA into precise 3D shapes the way you fold origami. But DNA origami is not a factory. It does not build arbitrary objects. The gap between what we can do today and a working molecular assembler is enormous."
      },
      {
        level: 2,
        label: "The mechanism",
        body: "The theoretical path to APM runs through mechanosynthesis: using precisely controlled mechanical force to position reactive molecules and trigger specific chemical bonds. Drexler's 1992 technical book Nanosystems worked out detailed mechanical designs for molecular bearings, gears, and assembler arms using carbon-based structures (diamondoid). The key insight is that quantum chemistry is deterministic at nanoscale: if you position two molecules correctly and apply the right force, the bond forms reliably. Scanning probe microscopy, specifically the scanning tunneling microscope (STM) and atomic force microscope (AFM), are the only tools today that can position individual atoms on surfaces. IBM's 2013 short film 'A Boy and His Atom' showed single-atom manipulation making a movie frame by frame. But STM/AFM tips are macroscopic instruments controlled by macroscopic actuators; they work at a rate of roughly one atom per second, at cryogenic temperatures, on flat surfaces. A molecular assembler would need to be nanoscale itself, work at room temperature, operate in three dimensions, and run billions of operations per second. DNA origami (pioneered by Paul Rothemund at Caltech in 2006) demonstrates that complex 3D nanoscale structures are achievable through self-assembly, but self-assembly is not the same as programmable mechanosynthesis."
      },
      {
        level: 3,
        label: "The hard part",
        body: "The Drexler-Smalley debate (conducted publicly in Chemical and Engineering News in 2003) crystallized the objections. Richard Smalley, Nobel laureate and discoverer of buckminsterfullerene, argued that molecular assembler 'fingers' would face two fundamental problems. The 'fat fingers' problem: the assembler arms needed to position a reactive molecule are themselves made of atoms and cannot be small enough to fit in the space where the bond must form for many target reactions. The 'sticky fingers' problem: at the nanoscale, van der Waals forces are so strong relative to object mass that a reactive molecule sticks to the assembler tip rather than releasing to the workpiece. Drexler's written responses argued both problems are solvable with the right chemistry and tip design, and subsequent computational chemistry work (Merkle, Freitas, Drexler) has proposed specific reaction sequences for carbon mechanosynthesis that appear to avoid both objections on paper. None has been tested experimentally. The more fundamental problem is the bootstrap: to build the first molecular assembler, you need a molecular assembler. Current proposals involve using DNA nanotechnology or protein engineering to scaffold a partial assembler that is then upgraded. No experimental program has published a roadmap for closing this loop. The field measures progress by: whether specific proposed mechanosynthesis reactions are confirmed by quantum chemistry DFT simulations, whether protein-based molecular motors (like kinesin) can be repurposed as assembler components, and whether STM-based single-molecule chemistry can demonstrate a designed covalent bond formation in 3D."
      },
      {
        level: 4,
        label: "The frontier",
        body: "The most credible current work toward APM is not in nanotechnology proper but in adjacent fields. Structural DNA nanotechnology has produced programmable 3D scaffolds at nanometer resolution; Lulu Qian's work at Caltech on DNA strand displacement cascades demonstrates Turing-complete computation in molecular systems. Synthetic biology has produced protein nanomachines (engineered kinesin, myosin variants) that perform mechanical work at nanoscale. The Freitas-Merkle group (Institute for Molecular Manufacturing) has produced detailed computational studies of specific mechanosynthesis reactions using DFT (density functional theory) calculations, arguing that a 9-reaction sequence suffices to build a diamondoid tooltip from small feedstock molecules. But DFT calculations are not experiments; they model ideal conditions and rely on force fields that may not capture the full quantum behavior of a reactive assembler tip in contact with a workpiece. The central open question is whether there is any experimental path to testing even a single proposed mechanosynthesis reaction under realistic conditions without already having the assembler to do it. Some researchers argue the path runs through engineered ribosomes (nature's existing protein assemblers), modifying them to incorporate non-natural amino acids and then inorganic building blocks. Others argue cryogenic STM is the only current tool and that the field must spend decades improving STM throughput and temperature range before any assembler is conceivable. The 30-year probability is low not because the physics is forbidden but because the experimental path is unclear and has not advanced materially in two decades."
      }
    ],

    timeline: {
      milestones: [
        {
          id: "apm-m1",
          title: "IBM moves 35 xenon atoms; 'A Boy and His Atom' film",
          kind: "breakthrough",
          years: { optimistic: 1989, consensus: 1989, skeptical: 1989 },
          detail: "In 1989, IBM researchers Don Eigler and Erhard Schweizer used a scanning tunneling microscope at 4 Kelvin to spell 'IBM' by repositioning 35 individual xenon atoms on a nickel surface. In 2013, IBM made a stop-motion film 'A Boy and His Atom' using the same technique. These remain the clearest demonstrations that individual atom positioning is physically possible, though the technique is cryogenic, slow (~1 atom/second), and not programmable in the assembler sense.",
          done: true
        },
        {
          id: "apm-m2",
          title: "DNA origami: programmable 2D and 3D nanoscale structures",
          kind: "invention",
          years: { optimistic: 2006, consensus: 2006, skeptical: 2006 },
          detail: "Paul Rothemund at Caltech published 'Folding DNA to Create Nanoscale Shapes and Patterns' in Nature (2006), demonstrating that a long single-stranded DNA molecule folds into designed 2D shapes when mixed with short 'staple' strands. Subsequent work extended this to 3D. DNA origami is the most credible self-assembly route toward nanoscale scaffolding of an assembler, and is actively used in drug delivery, nanophotonics, and as a research platform.",
          done: true
        },
        {
          id: "apm-m3",
          title: "DFT-confirmed mechanosynthesis reaction sequence published",
          kind: "breakthrough",
          years: { optimistic: 2028, consensus: 2035, skeptical: 2048 },
          detail: "A peer-reviewed publication presents a complete, DFT-validated reaction sequence for building a diamondoid or graphene nanostructure using a proposed molecular tooltip, with explicit treatment of thermal noise and tip-surface forces. This would be the first computationally rigorous blueprint for a specific mechanosynthesis operation, not just a schematic.",
          done: false
        },
        {
          id: "apm-m4",
          title: "First designed covalent bond formed by a molecular-scale actuator",
          kind: "breakthrough",
          years: { optimistic: 2032, consensus: 2042, skeptical: 2060 },
          detail: "An experimentally verified covalent bond formation is triggered by a designed molecular-scale actuator (not a macroscopic STM tip) in a controlled environment. This is the smallest conceivable step toward mechanosynthesis and would represent a genuine experimental milestone, not yet achieved as of 2026.",
          done: false
        },
        {
          id: "apm-m5",
          title: "Prototype assembler produces a specified 100-atom non-biological structure",
          kind: "invention",
          years: { optimistic: 2040, consensus: 2055, skeptical: 2080 },
          detail: "A system combining molecular actuators, feedstock delivery, and positional control produces a verified, specified non-biological nanostructure of at least 100 atoms. This is not a full assembler; it is proof that programmable mechanosynthesis is experimentally achievable. No current experimental program has a credible path to this milestone.",
          done: false
        },
        {
          id: "apm-m6",
          title: "Self-replicating molecular assembler (Drexlerian milestone)",
          kind: "breakthrough",
          years: { optimistic: 2052, consensus: 2080, skeptical: 2120 },
          detail: "A molecular assembler builds a copy of itself from feedstock. This is the milestone Drexler described in Engines of Creation and the one that most critics consider decades beyond current science. Achieving it would trigger exponential manufacturing capability and an immediate global security response regarding gray-goo and weapons risks.",
          done: false
        }
      ],
      branches: [
        {
          id: "apm-b1",
          name: "Biological route: engineered ribosomes and protein machines",
          fromMilestone: "apm-m3",
          probability: 0.45,
          summary: "Nature already has molecular assemblers: ribosomes build proteins from amino acid feedstock with near-zero error rates. The biological route modifies ribosomes or designs new protein-based nanomachines to incorporate non-biological building blocks, bootstrapping from proven machinery. This is the approach most credible to mainstream synthetic biologists.",
          milestones: [
            {
              id: "apm-b1m1",
              title: "Ribosome expanded to incorporate non-natural building blocks in designed sequences",
              kind: "breakthrough",
              years: { optimistic: 2030, consensus: 2040, skeptical: 2055 },
              detail: "An engineered ribosome or ribosome-like machine incorporates non-amino-acid monomers (silica, metal-organic, or carbon-based) at specified positions in a designed polymer. This extends the biological assembler paradigm beyond proteins into inorganic materials.",
              done: false
            },
            {
              id: "apm-b1m2",
              title: "Protein nanomachine produces a specified inorganic nanostructure",
              kind: "invention",
              years: { optimistic: 2040, consensus: 2055, skeptical: 2075 },
              detail: "A designed protein-based assembler (not a ribosome, but inspired by one) builds a specified inorganic nanostructure, demonstrating that the biological route can reach materials outside the biopolymer world.",
              done: false
            }
          ]
        },
        {
          id: "apm-b2",
          name: "Diamondoid mechanosynthesis: Drexler's original path",
          fromMilestone: "apm-m4",
          probability: 0.25,
          summary: "The original Drexler vision: carbon-based molecular machines with diamond-like stiffness, operating at room temperature, performing covalent bond chemistry. Freitas and Merkle's computational work is the closest current approximation; it requires experimental validation of specific carbon mechanosynthesis reactions that no lab has yet attempted.",
          milestones: [
            {
              id: "apm-b2m1",
              title: "First experimental diamondoid mechanosynthesis reaction",
              kind: "breakthrough",
              years: { optimistic: 2035, consensus: 2050, skeptical: 2075 },
              detail: "A laboratory verifies a proposed carbon mechanosynthesis reaction from the Freitas-Merkle tooltip catalog, producing a specified covalent carbon-carbon bond at a designed location using a controlled molecular-scale actuator. This would be the first experimental validation of Drexler's specific technical proposal.",
              done: false
            },
            {
              id: "apm-b2m2",
              title: "Diamondoid assembler prototype demonstrated",
              kind: "invention",
              years: { optimistic: 2048, consensus: 2070, skeptical: 2100 },
              detail: "A prototype carbon-based assembler performs a sequence of mechanosynthesis operations to build a specified diamondoid structure. At this point the question shifts from 'can it be done' to 'how fast can it be scaled.'",
              done: false
            }
          ]
        },
        {
          id: "apm-b3",
          name: "Incremental scanning-probe manufacturing",
          fromMilestone: "apm-m2",
          probability: 0.30,
          summary: "Rather than achieving Drexlerian general assembly, scanning probe techniques improve in throughput, temperature range, and 3D capability to produce economically useful nanostructures for specific applications: quantum computing components, drug delivery scaffolds, photonic devices. This is the most likely near-term commercial path but is not APM in the Drexler sense.",
          milestones: [
            {
              id: "apm-b3m1",
              title: "Massively parallel STM arrays manufacture quantum device components",
              kind: "scaleup",
              years: { optimistic: 2030, consensus: 2038, skeptical: 2050 },
              detail: "Arrays of thousands of STM tips operating in parallel achieve throughput high enough for commercial manufacture of quantum dot arrays, single-atom dopant patterns in silicon, or nanophotonic structures. This is atom-by-atom placement at commercial rates, but for narrow applications, not general manufacturing.",
              done: false
            },
            {
              id: "apm-b3m2",
              title: "Room-temperature single-molecule covalent bond placement on 3D substrate",
              kind: "breakthrough",
              years: { optimistic: 2034, consensus: 2044, skeptical: 2058 },
              detail: "STM or AFM achieves reliable single-molecule covalent bond formation at room temperature on a non-flat substrate, removing the cryogenic and planarity constraints that currently limit the technique to research demonstrations.",
              done: false
            }
          ]
        }
      ]
    },

    backcast: {
      today: [
        "Scanning tunneling microscopy can position individual atoms on flat surfaces at cryogenic temperatures at roughly 1 atom per second; no 3D room-temperature capability exists.",
        "DNA origami (Rothemund 2006; Douglas et al. 2009 for 3D) produces programmable nanoscale scaffolds with ~2nm resolution; widely used in research but not manufacturing.",
        "Synthetic biology has engineered ribosomes to incorporate non-natural amino acids (Chin group, MRC Cambridge; Jewett group, Northwestern); no inorganic feedstock incorporation demonstrated.",
        "Freitas and Merkle (IMM) have published DFT computational studies of specific proposed carbon mechanosynthesis reactions; none have been experimentally verified.",
        "No experimental program has a funded, peer-reviewed roadmap to a working molecular assembler as of 2026."
      ],
      dependencies: [
        {
          name: "Quantum chemistry simulation (DFT and beyond)",
          why: "Required to design and validate mechanosynthesis reactions before attempting them experimentally; errors in simulation mean failed reactions or unintended products.",
          state: "DFT is mature for small molecules; accuracy for large, complex mechanosynthesis intermediates is still contested. Higher-level methods (CCSD(T)) are too computationally expensive for assembler-scale systems."
        },
        {
          name: "Nanoscale actuators with atomic-scale positioning",
          why: "Any assembler needs actuator arms that can position a reactive molecule to within a fraction of an angstrom; no such device exists outside macroscopic STM/AFM.",
          state: "Research prototypes using carbon nanotube-based actuators and DNA-based molecular motors exist in lab settings; none approach the stiffness or positional accuracy needed for mechanosynthesis."
        },
        {
          name: "Feedstock delivery at nanoscale",
          why: "An assembler needs a supply chain of specific reactive molecules delivered to the reaction site; no mechanism exists for doing this in 3D at nanoscale.",
          state: "DNA origami has demonstrated passive diffusion-based delivery of small molecules to specific sites; active directed delivery does not exist."
        },
        {
          name: "Error detection and correction at molecular scale",
          why: "A single misplaced atom propagates into structural defects; an assembler needs to detect and correct errors in real time.",
          state: "No mechanism proposed beyond biological analogy (proofreading polymerases in DNA replication); the engineering challenge is entirely unsolved."
        }
      ],
      supplyChain: [
        {
          item: "Scanning probe microscope tips (tungsten, platinum-iridium)",
          why: "Current APM-adjacent work depends entirely on STM/AFM tips; tip quality determines atomic resolution.",
          players: "Bruker, Park Systems, Oxford Instruments",
          chokepoint: false
        },
        {
          item: "Ultra-high vacuum systems",
          why: "Atomic-scale surface work requires pressures below 10^-9 torr to prevent contamination; all current STM atom-manipulation work is UHV-dependent.",
          players: "Pfeiffer Vacuum, Edwards Vacuum, Agilent",
          chokepoint: false
        },
        {
          item: "Cryogenic cooling infrastructure",
          why: "Current STM atom manipulation requires liquid helium temperatures (4K); room-temperature atom manipulation remains undemonstrated for most chemistries.",
          players: "Linde, Air Liquide (liquid helium supply); helium is a non-renewable resource with documented supply constraints",
          chokepoint: true
        },
        {
          item: "Synthetic DNA for origami scaffolding",
          why: "DNA origami is the most credible self-assembly route; it requires long scaffold strands (M13 phage DNA is standard) and hundreds of custom staple oligos.",
          players: "IDT (Integrated DNA Technologies), Twist Bioscience, Genscript",
          chokepoint: false
        }
      ],
      leadingIndicators: [
        "Publication in Nature or Science of an experimentally verified mechanosynthesis reaction (not just DFT prediction), regardless of scale or chemistry.",
        "A funded institutional program (DARPA, DOE, Wellcome Leap, or equivalent) specifically targeting molecular assembler development with a milestones-based roadmap.",
        "Demonstration of room-temperature single-atom manipulation on a 3D (non-flat) substrate by any STM/AFM group.",
        "Synthetic biology demonstrating ribosome incorporation of an inorganic monomer (silicon, germanium, or metal-organic) at a specified sequence position.",
        "Quantum chemistry computation achieving verified accuracy for a proposed mechanosynthesis intermediate at the CCSD(T) level or demonstrated equivalent."
      ]
    },

    people: [
      {
        name: "K. Eric Drexler",
        role: "Theorist and author",
        org: "Formerly MIT / Oxford Martin School",
        note: "Drexler's 1986 Engines of Creation and 1992 Nanosystems are the founding texts of APM; his vision of diamondoid molecular machines built from precise covalent bonds defines what APM means in the Drexlerian sense, and his 2013 Radical Abundance revisited the thesis in light of intervening science."
      },
      {
        name: "Ralph Merkle",
        role: "Research scientist and theorist",
        org: "Institute for Molecular Manufacturing",
        note: "Merkle has collaborated with Robert Freitas on detailed DFT studies of specific carbon mechanosynthesis reactions and molecular assembler designs; his work provides the most technically rigorous (if still unverified) computational case for the Drexlerian path."
      },
      {
        name: "Paul Rothemund",
        role: "Research professor",
        org: "Caltech",
        note: "Rothemund invented DNA origami in 2006, demonstrating that long single-stranded DNA can be folded into precise 2D nanoscale shapes; this work launched structural DNA nanotechnology as a credible route to programmable nanoscale scaffolding."
      },
      {
        name: "Richard Smalley",
        role: "Nobel laureate (Chemistry 1996), deceased 2005",
        org: "Rice University",
        note: "Smalley co-discovered buckminsterfullerene and engaged Drexler in a famous 2003 public debate in Chemical and Engineering News; his 'fat fingers' and 'sticky fingers' objections to molecular assemblers remain the most-cited scientific skepticism of Drexlerian APM."
      },
      {
        name: "Lulu Qian",
        role: "Associate professor",
        org: "Caltech",
        note: "Qian's work on DNA strand displacement cascades has demonstrated Turing-complete molecular computation and autonomous molecular machines; her research extends DNA nanotechnology toward systems that can sense, compute, and act at nanoscale."
      },
      {
        name: "Jason Chin",
        role: "Programme leader",
        org: "MRC Laboratory of Molecular Biology, Cambridge",
        note: "Chin has engineered the most extensive expansions of the genetic code, enabling ribosomes to incorporate non-natural amino acids with high fidelity; his work is the most advanced demonstration of re-engineering nature's molecular assembler toward new building blocks."
      }
    ],

    reading: [
      {
        title: "Engines of Creation: The Coming Era of Nanotechnology",
        author: "K. Eric Drexler",
        year: 1986,
        type: "book",
        note: "The founding text; accessible and visionary, it introduced molecular assemblers to a general audience and defined the high-level case for APM; read alongside the later technical Nanosystems."
      },
      {
        title: "Nanosystems: Molecular Machinery, Manufacturing, and Computation",
        author: "K. Eric Drexler",
        year: 1992,
        type: "book",
        note: "The technical companion to Engines of Creation; provides detailed mechanical designs for molecular bearings, gears, and assembler arms using rigorous engineering analysis; still the most complete technical treatment of Drexlerian APM."
      },
      {
        title: "Folding DNA to Create Nanoscale Shapes and Patterns",
        author: "Paul W. K. Rothemund",
        year: 2006,
        type: "paper",
        note: "Published in Nature; the original DNA origami paper demonstrating programmatic 2D nanoscale shape formation; launched the field of structural DNA nanotechnology."
      },
      {
        title: "Radical Abundance: How a Revolution in Nanotechnology Will Change Civilization",
        author: "K. Eric Drexler",
        year: 2013,
        type: "book",
        note: "Drexler revisits and refines his APM thesis 27 years after Engines of Creation, engaging more carefully with the Smalley objections and updating the molecular machines vision in light of advances in protein engineering and computational chemistry."
      },
      {
        title: "Productive Nanosystems: The Physics of Molecular Fabrication",
        author: "K. Eric Drexler and Ralph Merkle",
        year: 2005,
        type: "paper",
        note: "A shorter technical overview of the physical basis for APM, bridging the 1992 Nanosystems book and subsequent DFT simulation work; useful for a concise technical summary of the feasibility argument."
      },
      {
        title: "The Drexler-Smalley Debate on Nanotechnology",
        author: "K. Eric Drexler and Richard E. Smalley",
        year: 2003,
        type: "article",
        note: "Published as a point-counterpoint in Chemical and Engineering News; the definitive primary-source record of the field's central scientific dispute; essential reading for understanding why APM probability is so contested."
      }
    ]
  },

  /* =========================================================================
     3. AUTONOMOUS TRANSPORT NETWORKS
     ========================================================================= */
  {
    id: "autonomous-transport",
    name: "Autonomous Transport Networks",
    shortName: "Autonomy",
    tagline: "Vehicles that drive, fly, and route themselves, reshaping cities, freight, and mobility by 2056.",
    domain: "machines",
    glyph: "⬓",
    status: "scaling",
    consequence: 8,

    probability: {
      value: 0.88,
      definition: "By 2056, autonomous vehicles (SAE Level 4 or above, without a safety driver) handle >20% of total vehicle-miles traveled in at least three major economies.",
      basis: "Author estimate informed by: Waymo scaling to ~500,000 paid driverless rides a week across ~10 US cities by 2026; Aurora running commercial driverless trucking across a dozen Sun Belt routes including night and adverse weather; Tesla removing safety monitors for unsupervised robotaxi rides in Austin (Jan 2026); Baidu Apollo Go past 11M cumulative rides; RAND 'Road to Zero' and KPMG AV Readiness Index scenarios. The 20% VMT threshold by 2056 is aggressive but achievable given the 30-year horizon and accelerating commercial deployment; adjusted downward for regulatory friction, insurance/liability resolution, and long-tail edge cases.",
      range: [0.68, 0.96]
    },

    arrival: {
      optimistic: 2032,
      consensus: 2040,
      skeptical: 2052
    },

    whyItMatters: "Road transport accounts for roughly 16% of global CO2 emissions and 1.35 million annual traffic fatalities. Autonomous networks could cut both dramatically. The economic effect is larger: trucking, ride-hailing, parking, insurance, and urban land use all restructure when the driver is removed. The cities built around car ownership since 1950 would begin to change shape.",

    feynman: [
      {
        level: 1,
        label: "The kitchen-table version",
        body: "When you get in a car, you are doing something amazing without noticing. You are watching the road ahead, checking mirrors, reading signs, predicting what the driver three cars ahead is about to do, and adjusting your speed, all at the same time. You do this so naturally it feels easy. For a computer, it is insanely hard. A self-driving car uses cameras and sometimes lasers to see everything around it, and a computer program tries to understand what it sees and decide what to do next. Waymo, which is owned by Google's parent company, already has taxis with no human driver running in Phoenix, Arizona and San Francisco. You can order one on your phone. That is real. But they only work in specific cities where the company has driven millions of miles to learn the roads. Getting cars to work everywhere, in snowstorms, on unmarked rural roads, during a street festival, is still the unsolved part. Trucking is slightly easier because highway driving is simpler than city driving. Aurora started running driverless trucks between Dallas and Houston in 2025 and by 2026 covers a dozen routes across Texas, New Mexico, and Arizona, including at night and in rain. Tesla now runs driverless robotaxis across Austin too. The question is not whether it works. It already works in places. The question is how long it takes to work everywhere."
      },
      {
        level: 2,
        label: "The mechanism",
        body: "SAE International defines six automation levels (0-5). Level 2 is driver-assist (Tesla Autopilot, GM Super Cruise): the human must stay alert. Level 3 means the car drives but must hand back control to a human on request. Level 4 means the car handles the entire trip autonomously within a defined operational design domain (ODD), with no human fallback. Level 5 is unlimited ODD. Waymo and Cruise operate Level 4 within specific geofenced urban areas. Aurora's commercial trucking is Level 4 on specific Texas highway routes. The sensing stack typically combines cameras (high resolution, low cost), lidar (3D point clouds of the environment), radar (reliable in adverse weather), and GPS. Tesla's FSD (Full Self-Driving) is camera-only, arguing that lidar is expensive and unnecessary if vision is good enough. The perception system classifies every detected object (car, pedestrian, cyclist, traffic cone) and tracks its position and predicted trajectory. The planning system then generates a trajectory for the ego vehicle that is safe, comfortable, and efficient. The control system executes that trajectory. The hard part is the edge cases: the intersection scenario that occurs once every million miles but that the system has never been trained on."
      },
      {
        level: 3,
        label: "The hard part",
        body: "The 'long tail' problem is the central obstacle: autonomous vehicles encounter rare but safety-critical scenarios that occur so infrequently they cannot all be observed in real-world driving and cannot all be anticipated and coded by engineers. Examples include: a mattress falling off a truck at highway speed, a child chasing a ball into traffic between parked cars, an unmarked construction zone with a worker giving ambiguous hand signals, flooded roads at night. Waymo has driven over 22 million autonomous miles (as of 2024) and has not had a fatal accident; statistical arguments about safety superiority are becoming credible. But expanding ODD from geofenced Phoenix to all roads everywhere requires confronting scenarios the current training distribution does not cover. The lidar-vs-camera debate is substantive: lidar provides unambiguous 3D geometry but costs $1,000-10,000 per sensor and fails in heavy precipitation; Tesla's camera-only approach is cheaper but relies on neural network inference for 3D understanding, which fails in ways lidar does not. Cruise's 2023 incidents in San Francisco (a pedestrian was struck and then dragged; the vehicle misclassified the situation) illustrate that rare-event failures have high consequence and political cost. Regulatory frameworks, particularly NHTSA rulemaking in the US and UN ECE WP.29 internationally, are years behind deployment and create legal uncertainty that slows scaling."
      },
      {
        level: 4,
        label: "The frontier",
        body: "The frontier divides across three technical axes and one strategic one. Technically: first, foundation model approaches to driving are now the mainstream. Wayve (UK), NVIDIA DRIVE Thor, and Tesla's end-to-end FSD all use neural networks trained on large video datasets rather than hand-engineered perception-planning pipelines. This mirrors the GPT moment in language: replace modular hand-coded systems with a single large model trained on massive data. Second, simulation fidelity matters for the long tail: Waymo's Simulation City and NVIDIA's DRIVE Sim generate synthetic edge cases at scale; the question is whether simulated rare events transfer to real-world robustness. Third, HD map dependency is a strategic constraint: most Level 4 systems require centimeter-precise pre-mapped roads, limiting deployment speed. MapFree autonomy, driving on any road without prior mapping, is the unsolved prize. Strategically, the commercial path has bifurcated: Waymo (robotaxi, human passengers, dense urban), Aurora and Kodiak (autonomous trucking, limited ODD, commercial freight), and eVTOL (Joby, Archer, Lilium-successor aircraft for urban air mobility). Each faces different regulatory bodies, safety thresholds, and scaling economics. The 30-year probability is high because commercial deployment is already real; the uncertainty band reflects how broadly 'at least three major economies' proves achievable, which depends heavily on China's regulatory posture toward domestic autonomous vehicle deployment."
      }
    ],

    timeline: {
      milestones: [
        {
          id: "at-m1",
          title: "DARPA Grand Challenge: first autonomous vehicle completes off-road course",
          kind: "breakthrough",
          years: { optimistic: 2005, consensus: 2005, skeptical: 2005 },
          detail: "In the 2004 DARPA Grand Challenge, no vehicle completed the 142-mile Mojave Desert course. In 2005, five vehicles finished, led by Sebastian Thrun's Stanford team driving a Volkswagen Touareg named Stanley. The 2007 DARPA Urban Challenge added city traffic. These competitions seeded the field: alumni founded Waymo, Cruise, Argo AI, Aurora, and most of the AV industry.",
          done: true
        },
        {
          id: "at-m2",
          title: "Waymo launches fully driverless commercial robotaxi service",
          kind: "deployment",
          years: { optimistic: 2023, consensus: 2023, skeptical: 2023 },
          detail: "Waymo opened fully driverless paid rides in Phoenix (2023) and San Francisco (2024), then scaled to roughly 500,000 paid rides a week across about ten US cities by 2026, with a stated goal of one million weekly rides and a first international market (London). This is the dominant commercial deployment of SAE Level 4 passenger autonomy and the clearest proof the technology works at scale.",
          done: true
        },
        {
          id: "at-m3",
          title: "Aurora Horizon: driverless commercial trucking revenue service",
          kind: "deployment",
          years: { optimistic: 2025, consensus: 2025, skeptical: 2025 },
          detail: "Aurora Innovation launched commercial driverless freight on the Dallas-Houston corridor in April 2025 with Uber Freight and Hirschbach, the first commercial Level 4 trucking operation in the US. By 2026 it had validated night driving and rain/fog, expanded to roughly a dozen Sun Belt routes (Fort Worth-El Paso, El Paso-Phoenix, Dallas-Laredo), and targets 200+ driverless trucks by year-end.",
          done: true
        },
        {
          id: "at-m4",
          title: "Robotaxi service expands to 10+ cities without geofence constraints",
          kind: "scaleup",
          years: { optimistic: 2028, consensus: 2033, skeptical: 2040 },
          detail: "A robotaxi operator (Waymo, Baidu Apollo, or successor) runs commercially in at least 10 cities without requiring prior HD mapping of each street, demonstrating mapfree or near-mapfree Level 4 capability. This removes the single largest barrier to geographic scaling.",
          done: false
        },
        {
          id: "at-m5",
          title: "Autonomous trucking covers majority of US interstate freight corridors",
          kind: "scaleup",
          years: { optimistic: 2030, consensus: 2037, skeptical: 2046 },
          detail: "The US interstate highway network is largely covered by autonomous freight, with human drivers handling first/last mile only. Aurora, Kodiak, and Torc (Daimler subsidiary) are the leading candidates; highway autonomy is substantially simpler than urban robotaxi and commercial economics favor trucking over passengers.",
          done: false
        },
        {
          id: "at-m6",
          title: "Regulatory framework: national AV operating rules in US, EU, China",
          kind: "policy",
          years: { optimistic: 2028, consensus: 2035, skeptical: 2045 },
          detail: "All three major automotive markets establish clear federal-level operating rules for Level 4 and Level 5 vehicles, covering liability, insurance, data access, and operational requirements. Current NHTSA rules are patchwork and state-by-state; the EU's UNECE WP.29 framework is more coordinated but slow. Without harmonized rules, deployment is fragmented.",
          done: false
        },
        {
          id: "at-m7",
          title: "eVTOL commercial passenger service in 3+ cities",
          kind: "deployment",
          years: { optimistic: 2028, consensus: 2034, skeptical: 2043 },
          detail: "Electric vertical take-off and landing aircraft (Joby Aviation, Archer Aviation, Beta) carry paying passengers commercially in at least three cities. Joby entered FAA Stage 4 type certification and began TIA flight testing of a conforming aircraft in 2026, and is targeting first commercial service in Dubai in 2026 under a faster UAE GCAA path ahead of US certification. The urban air mobility market is a distinct but adjacent autonomy bet.",
          done: false
        },
        {
          id: "at-m8",
          title: "Autonomous VMT exceeds 20% in at least one major economy",
          kind: "scaleup",
          years: { optimistic: 2038, consensus: 2046, skeptical: 2058 },
          detail: "A measurable share of all vehicle-miles traveled in a major economy is driven without a human. China is a strong candidate given Baidu Apollo and regulatory willingness to designate autonomous zones; the US is more likely through trucking VMT than passenger VMT given regulatory fragmentation.",
          done: false
        }
      ],
      branches: [
        {
          id: "at-b1",
          name: "Robotaxi-led urban autonomy",
          fromMilestone: "at-m4",
          probability: 0.40,
          summary: "Waymo, Baidu, and successors scale dense-urban robotaxi faster than any other segment; cities redesign mobility infrastructure around fleets of shared autonomous vehicles; private car ownership drops in dense metros. This is the consumer-facing scenario most people imagine.",
          milestones: [
            {
              id: "at-b1m1",
              title: "Robotaxi fleet exceeds 100,000 vehicles in operation globally",
              kind: "scaleup",
              years: { optimistic: 2031, consensus: 2038, skeptical: 2047 },
              detail: "Total globally deployed robotaxi fleet crosses 100,000 vehicles. Waymo runs on the order of 1,500-2,000 vehicles serving ~500,000 weekly rides in 2026; reaching 100,000 requires the Zeekr/Hyundai-style manufacturing partnerships, unit cost reduction, and expanded ODD. This is the scale at which network effects in mapping and perception data become self-reinforcing.",
              done: false
            },
            {
              id: "at-b1m2",
              title: "First city removes minimum parking requirements citing autonomous fleet coverage",
              kind: "policy",
              years: { optimistic: 2034, consensus: 2042, skeptical: 2055 },
              detail: "A major city eliminates parking minimums in a significant zone on the documented basis that autonomous shared vehicles adequately serve mobility demand. This is the leading indicator that urban form is beginning to change in response to autonomy.",
              done: false
            }
          ]
        },
        {
          id: "at-b2",
          name: "Freight-first autonomy",
          fromMilestone: "at-m5",
          probability: 0.40,
          summary: "Autonomous trucking scales before robotaxi because highway driving is more tractable, freight customers are more tolerant of limited ODD, and the economics are compelling (driver cost is 40% of trucking cost). Aurora, Kodiak, and Torc dominate; passenger autonomy follows freight by a decade.",
          milestones: [
            {
              id: "at-b2m1",
              title: "Autonomous trucks handle >10% of US ton-miles",
              kind: "scaleup",
              years: { optimistic: 2032, consensus: 2040, skeptical: 2050 },
              detail: "Autonomous freight trucks account for more than 10% of total ton-miles on US highways. At this point, the labor displacement effect on the 3.5 million US truck driver workforce becomes statistically measurable and politically contested.",
              done: false
            },
            {
              id: "at-b2m2",
              title: "Autonomous freight expands to international corridors",
              kind: "deployment",
              years: { optimistic: 2036, consensus: 2045, skeptical: 2055 },
              detail: "Cross-border autonomous freight operates between Canada-US and Mexico-US, and in the EU between high-volume corridors. Each border crossing requires bilateral regulatory agreement; the EU single market is the most tractable geography.",
              done: false
            }
          ]
        },
        {
          id: "at-b3",
          name: "Regulatory and liability stalemate slows deployment",
          fromMilestone: "at-m6",
          probability: 0.20,
          summary: "A high-profile fatal accident involving a driverless vehicle triggers congressional action, a NHTSA moratorium, or EU-wide operating suspension. Liability law fails to resolve who pays when an AV kills someone. Insurance markets price risk prohibitively. Deployment stalls for a decade; 2056 finds autonomy still mostly confined to geofenced pilot areas.",
          milestones: [
            {
              id: "at-b3m1",
              title: "Federal moratorium or major liability judgment halts US AV scaling",
              kind: "policy",
              years: { optimistic: 2027, consensus: 2031, skeptical: 2038 },
              detail: "A fatal accident or series of incidents triggers federal legislative or regulatory action freezing commercial AV deployment outside current approved areas. Cruise's 2023 San Francisco incidents (pedestrian dragging) resulted in a California DMV permit suspension; a similar federal-level action would be substantially more damaging.",
              done: false
            }
          ]
        }
      ]
    },

    backcast: {
      today: [
        "Waymo One provides roughly 500,000 paid driverless rides a week across about ten US cities (Phoenix, SF, LA, Austin, Atlanta, Miami, Dallas, Houston, San Antonio, Orlando) and is targeting one million weekly rides by end-2026, plus its first international service (London).",
        "Aurora runs commercial driverless trucking across roughly a dozen Sun Belt routes (Dallas-Houston, Fort Worth-El Paso, El Paso-Phoenix and more), has validated night driving and rain/fog, and targets 200+ driverless trucks by end-2026.",
        "Tesla launched a robotaxi service in Austin in June 2025 with in-car safety monitors, removed those monitors for unsupervised rides in Jan 2026, and by June 2026 covers the full ~245 sq mi Austin metro with a small driverless fleet still backed by remote operators.",
        "Baidu Apollo Go has surpassed 11 million cumulative rides and is the largest robotaxi operation in China; Chinese listed pure-plays Pony.ai and WeRide hold driverless permits across tier-one cities and are expanding abroad (e.g. Abu Dhabi).",
        "GM shut its Cruise robotaxi program in December 2024 (after the October 2023 San Francisco pedestrian-dragging incident and permit suspension) and refocused on driver assistance."
      ],
      dependencies: [
        {
          name: "High-resolution sensor suite (lidar, camera, radar)",
          why: "AV perception depends on reliable environment sensing in all weather and lighting conditions; sensor cost and failure rate directly constrain deployment economics.",
          state: "Lidar cost has dropped from $75,000 (Velodyne HDL-64, 2009) to under $500 for automotive-grade solid-state units (Ouster, Luminar, Innoviz); camera resolution and dynamic range continue improving; radar for adverse weather is mature."
        },
        {
          name: "High-definition mapping infrastructure",
          why: "Most Level 4 systems require centimeter-precise prior maps for each operational route; map coverage is the primary geographic constraint on ODD expansion.",
          state: "Waymo and Aurora have proprietary HD maps for their operational areas; no operator has demonstrated reliable Level 4 operation without prior HD maps of the specific route."
        },
        {
          name: "Edge compute (onboard AI inference at low latency)",
          why: "AV decision cycles must complete in 100ms or less; cloud offloading introduces latency and connectivity dependence incompatible with safety requirements.",
          state: "NVIDIA DRIVE Thor (2024) and Qualcomm Snapdragon Ride are purpose-built AV compute platforms; sufficient for current deployments but road to mapfree Level 5 requires more."
        },
        {
          name: "5G / V2X (vehicle-to-everything) communication",
          why: "Cooperative autonomy (AVs sharing real-time sensor data with each other and with infrastructure) improves collective perception beyond what any single vehicle can sense.",
          state: "V2X standards (DSRC, C-V2X) are defined but roadside infrastructure deployment is minimal outside China; US and EU investment in V2X is lagging deployment timelines."
        }
      ],
      supplyChain: [
        {
          item: "Automotive-grade solid-state lidar units",
          why: "Required for reliable 3D environment sensing in the sensor-fusion stacks used by Waymo, Aurora, and most Level 4 operators.",
          players: "Luminar Technologies, Ouster (merged with Velodyne), Innoviz Technologies, Cepton (acquired by Koito)",
          chokepoint: false
        },
        {
          item: "NVIDIA DRIVE or Qualcomm Snapdragon AV compute SoCs",
          why: "Onboard neural network inference for perception and planning requires purpose-built AI accelerator silicon.",
          players: "NVIDIA, Qualcomm; AMD entering automotive",
          chokepoint: true
        },
        {
          item: "High-resolution wide-angle automotive cameras",
          why: "Camera-based perception (especially Tesla FSD approach) requires sensors optimized for high dynamic range, night vision, and durability.",
          players: "Sony Semiconductor, OmniVision, ON Semiconductor",
          chokepoint: false
        },
        {
          item: "HD map data and real-time map update infrastructure",
          why: "Prior mapping is the geographic constraint for most Level 4 systems; map freshness (reflecting road changes within hours) is operationally critical.",
          players: "Waymo (proprietary), HERE Technologies, TomTom, DeepMap (acquired by NVIDIA)",
          chokepoint: false
        },
        {
          item: "EV battery packs (for electric AV platforms)",
          why: "Most commercial AV platforms are electric; battery supply chains carry standard EV supply risk.",
          players: "CATL, Panasonic, LG Energy Solution",
          chokepoint: false
        }
      ],
      leadingIndicators: [
        "Whether Waymo hits its one-million-weekly-rides goal by end-2026 and lands its first international market (London announced); watch ride-volume disclosures.",
        "Aurora's path to 200+ driverless trucks and new McLane Sun Belt routes; ton-mile volume and whether the network reaches profitability.",
        "Whether Tesla's unsupervised robotaxi (Austin) expands to new metros without a major safety incident, and how much remote-operator support it still needs.",
        "NHTSA progress toward a federal AV performance standard; any move from patchwork state permitting to harmonized federal rules.",
        "Joby's FAA type certification outcome and its 2026 Dubai commercial launch; the first paid eVTOL service signals the urban-air-mobility pathway."
      ]
    },

    people: [
      {
        name: "Sebastian Thrun",
        role: "Founder and former director",
        org: "Google Self-Driving Car Project (now Waymo)",
        note: "Thrun led the Stanford team that won the 2005 DARPA Grand Challenge and then founded Google's self-driving project in 2009; widely credited as the person who made autonomous vehicles a credible commercial pursuit, not just a research curiosity."
      },
      {
        name: "Chris Urmson",
        role: "CEO and Co-founder",
        org: "Aurora Innovation",
        note: "Urmson was CTO of Google's self-driving project before founding Aurora in 2017; Aurora's April 2025 commercial trucking launch is the first driverless commercial freight service in the US, making Urmson the most directly consequential figure in autonomous trucking."
      },
      {
        name: "Dmitri Dolgov",
        role: "CEO",
        org: "Waymo",
        note: "Dolgov has led Waymo's technical and then executive direction since its spinout from Google in 2016; under his leadership Waymo achieved commercial fully driverless rides in 2023-2024, the first company to do so with public passengers."
      },
      {
        name: "Anthony Levandowski",
        role: "Former engineer and founder",
        org: "Google AV project / Uber ATG / Pronto.AI",
        note: "Levandowski was a key early engineer on the Google AV project and a central figure in the Uber-Waymo trade-secrets litigation (2018); his technical contributions and the litigation set the terms under which AV IP is defended, influencing the industry's competitive structure."
      },
      {
        name: "JoeBen Bevirt",
        role: "CEO and Founder",
        org: "Joby Aviation",
        note: "Bevirt founded Joby in 2009; Joby's eVTOL aircraft (electric, 5-seat, 200mph, 150-mile range) is the most advanced in FAA certification and represents the most credible near-term bet on urban air mobility as an autonomous transport adjacency."
      },
      {
        name: "Raquel Urtasun",
        role: "CEO and Founder",
        org: "Waabi",
        note: "Urtasun is a leading academic researcher in AV perception and 3D scene understanding; she founded Waabi after departing Uber ATG and is pursuing a generative AI approach to AV planning that aims to reduce the data and testing burden of traditional AV development."
      }
    ],

    reading: [
      {
        title: "Autonomy: The Quest to Build the Driverless Car and How It Will Reshape Our World",
        author: "Lawrence D. Burns with Christopher Shulgan",
        year: 2018,
        type: "book",
        note: "Burns led GM's research and development and then consulted for Google's AV project; the book is the best accessible history of autonomous vehicle development from the DARPA Challenges through Google/Waymo, with an insider's view of the technology and business."
      },
      {
        title: "KPMG Autonomous Vehicles Readiness Index",
        author: "KPMG",
        year: 2023,
        type: "report",
        note: "Annual ranking of 30 countries by readiness for autonomous vehicle deployment across technology, infrastructure, regulation, and consumer acceptance; useful for benchmarking which geographies are most likely to reach the 20% VMT threshold first."
      },
      {
        title: "SAE J3016: Taxonomy and Definitions for Terms Related to Driving Automation Systems",
        author: "SAE International",
        year: 2021,
        type: "report",
        note: "The canonical definition of SAE Levels 0-5 that the entire industry and all regulatory bodies use; understanding the exact scope of each level is required to interpret any claim about autonomous vehicle capability or deployment."
      },
      {
        title: "Waymo Safety Report",
        author: "Waymo LLC",
        year: 2023,
        type: "report",
        note: "Waymo's own reporting on its collision and disengagement statistics across 22 million autonomous miles; the most detailed public dataset on Level 4 performance in commercial operation, though not independently audited."
      },
      {
        title: "The High Cost of Free Parking",
        author: "Donald Shoup",
        year: 2005,
        type: "book",
        note: "Not an AV book, but essential context: Shoup's analysis of how parking requirements shaped US cities explains what autonomous fleets could reverse; widely cited in urbanism discussions about how AV adoption reshapes land use."
      },
      {
        title: "Aurora Innovation S-1 (Registration Statement)",
        author: "Aurora Innovation",
        year: 2021,
        type: "report",
        note: "Aurora's SPAC S-1 contains the most detailed public technical description of their autonomous trucking stack, ODD definition, safety case methodology, and commercial roadmap; the primary source for Aurora's technology and business claims."
      }
    ]
  }

);
