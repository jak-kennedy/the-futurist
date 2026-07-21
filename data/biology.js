/* =============================================================================
   THE FUTURIST — Biology domain data
   Technologies: Longevity, Synthetic Biology, Regenerative Medicine
   Author: Deal Researcher (Sela Capital Group)
   Date: 2026-06-12
   ============================================================================= */

window.FUTURIST_DATA = window.FUTURIST_DATA || [];

window.FUTURIST_DATA.push(

  /* ============================================================
     1. AGING REVERSAL & LONGEVITY
     ============================================================ */
  {
    id: "longevity",
    name: "Aging Reversal & Longevity",
    shortName: "Longevity",
    tagline: "Science is learning to read aging like a clock — and may learn to wind it back.",
    domain: "biology",
    glyph: "∞",
    status: "lab",
    consequence: 10,

    probability: {
      value: 0.25,
      definition: "At least one clinically validated intervention demonstrably reverses biological age by 10+ years in humans, with regulatory approval in a major jurisdiction, by 2056.",
      basis: "Author estimate. As of mid-2026 partial reprogramming has crossed into humans for the first time (Life Biosciences' ER-100 Phase 1, first patient dosed June 2026), but these are tiny safety studies, not biological-age-reversal proof. Metaculus community forecasts still put strong human aging reversal past ~2075; the Longevity Biotech Fellowship roadmap survey (2023) showed expert median ~2060 for first partial reversal. Contested science warrants a lower probability than biotech optimists claim.",
      range: [0.1, 0.45]
    },

    arrival: {
      optimistic: 2038,
      consensus: 2052,
      skeptical: 2070
    },

    whyItMatters: "If biological aging can be reversed rather than just slowed, the entire architecture of medicine, retirement, work, and social insurance must be rebuilt. A 60-year-old with the biology of a 40-year-old is not a curiosity; it is a civilizational variable. The economic and ethical consequences dwarf almost any other technology in this registry.",

    feynman: [
      {
        level: 1,
        label: "The kitchen-table version",
        body: "Imagine your body is a library. When you are young, every book is in the right place and the librarians know exactly where everything goes. As you get older, books get misshelved, pages get torn, and the librarians start forgetting the system. You are not running out of books. You are losing the organization. Scientists used to think aging was just wear-and-tear — like a car rusting out. Now many of them think it is more like a program running badly: the instructions are still there, but something is scrambling them. A Japanese scientist named Shinya Yamanaka found four molecular switches that can take an old, specialized cell and reset it all the way back to a young, blank-slate cell. That reset is called reprogramming. Other researchers found pills called senolytics that clear out the tired, angry cells that accumulate as you age and make your neighbors sick. A researcher named David Sinclair argues aging is really the loss of information inside cells, and that this information can be recovered. Not everyone agrees with him. But the idea that aging might be reversible, not just manageable, is now a serious scientific project with billions of dollars behind it."
      },
      {
        level: 2,
        label: "The mechanism",
        body: "Aging operates through a set of converging biological processes. The landmark 2013 paper by Carlos Lopez-Otin and colleagues in Cell named nine hallmarks of aging — including genomic instability, telomere attrition, epigenetic alterations, loss of proteostasis, mitochondrial dysfunction, cellular senescence, stem cell exhaustion, and altered intercellular communication. The 2023 updated paper added four more. Epigenetic alterations are currently the most tractable target: DNA methylation patterns across the genome shift predictably with age, forming the basis of epigenetic clocks developed by Steve Horvath at UCLA. These clocks can estimate biological age to within a few years. Yamanaka's 2006 discovery that four transcription factors (Oct4, Sox2, Klf4, c-Myc) can reprogram adult cells into induced pluripotent stem cells showed that epigenetic age is not locked in. Partial reprogramming — activating these factors briefly, not fully — appears to rejuvenate cells without erasing their identity. Separately, senolytic drugs (dasatinib plus quercetin, navitoclax) selectively kill senescent cells. Rapamycin inhibits mTOR, extending lifespan in mice. The TAME trial is testing metformin in 3,000 humans specifically to delay aging-related disease."
      },
      {
        level: 3,
        label: "The hard part",
        body: "The distance from mouse experiments to human clinical outcomes is vast and historically brutal for this field. Rapamycin extends lifespan in mice by 10-25% depending on study conditions; whether it safely extends healthy human lifespan is unknown. Partial reprogramming in mice has produced rejuvenation of eye tissue, muscle, and cognition in several studies, but also caused teratomas (tumors) when dosing was poorly controlled. The field lacks agreed endpoints: biological age measured by an epigenetic clock is a proxy, not a validated clinical outcome. Regulatory bodies do not recognize aging as a disease, so approval pathways for anti-aging interventions run through specific age-related diseases (heart disease, Alzheimer's, frailty), not aging per se. David Sinclair's information theory of aging is influential but contested: critics, including Charles Brenner, argue the evidence for NAD+ precursor supplementation (a Sinclair focus) is overinterpreted. Longevity startup valuations have run ahead of human data. Calico (Google/Alphabet) has been operating since 2013 with limited published results. Altos Labs launched in 2022 with $3 billion and a partial reprogramming focus and made progress in 2025 (a mesenchymal-drift paper in Cell, hiring Joan Mannick as CMO) but had not disclosed an IND as of mid-2026. The first partial-reprogramming therapy to actually reach humans is Life Biosciences' ER-100, dosed June 2026. Key metrics to watch: epigenetic clock reversal in randomized controlled trials, safety signals from the first reprogramming trials, and the TAME trial, which as of 2026 remains only partially funded and has not begun full enrollment."
      },
      {
        level: 4,
        label: "The frontier",
        body: "Three competing paradigms organize the field. First, damage-repair frameworks (Aubrey de Grey's SENS Research Foundation): systematically identify and repair the seven categories of molecular damage that accumulate with age. This is engineering-minded and agnostic to mechanism. Second, information-restoration frameworks (Sinclair, Altos Labs): epigenetic noise is the primary driver; partial OSK reprogramming (Oct4, Sox2, Klf4, omitting c-Myc for safety) can reset the epigenome. Belmonte's work at Altos and prior Salk Institute publications are central here. Third, systems-biology frameworks (Morgan Levine, Yale): aging is an emergent property of network dynamics across hallmarks; single interventions will fail because the system compensates. The measurement infrastructure is maturing fast: multi-omic biological age clocks (combining epigenetics, proteomics, metabolomics) are more predictive than methylation alone. DunedinPACE measures pace of aging, not just current age. As of mid-2026 the field crossed a real line: Life Biosciences dosed the first human with a partial-reprogramming therapy (ER-100, an ophthalmology indication, June 2026), the first such program FDA-cleared into the clinic. The key open problem remains whether epigenetic reprogramming in post-mitotic tissues (neurons, cardiomyocytes) is achievable without oncogenic risk. A second open problem is systemic delivery — getting reprogramming factors into enough cells in vivo without viral vectors that trigger immune responses; current human programs are local (eye), not systemic. What would change minds: a randomized controlled trial showing a validated multi-omic biological age reversal of >5 years in humans, with no serious adverse events over 5 years of follow-up."
      }
    ],

    timeline: {
      milestones: [
        {
          id: "lon-m1",
          title: "Hallmarks of Aging framework published",
          kind: "breakthrough",
          years: { optimistic: 2013, consensus: 2013, skeptical: 2013 },
          detail: "Lopez-Otin et al. published 'The Hallmarks of Aging' in Cell in 2013, cataloging nine conserved mechanisms of aging across species. This paper unified the field and became the most-cited aging paper of its decade. A 2023 update added four additional hallmarks. It established the shared vocabulary that organized subsequent research programs.",
          done: true
        },
        {
          id: "lon-m2",
          title: "Epigenetic clock validated as biological age measure",
          kind: "breakthrough",
          years: { optimistic: 2013, consensus: 2013, skeptical: 2013 },
          detail: "Steve Horvath published the first pan-tissue epigenetic clock in 2013, showing that DNA methylation patterns predict biological age with high accuracy across tissue types. This gave the field a quantitative, measurable proxy for aging rather than relying on disease endpoints. Subsequent clocks (PhenoAge, GrimAge, DunedinPACE) have improved predictive power for mortality and disease.",
          done: true
        },
        {
          id: "lon-m3",
          title: "Partial reprogramming reverses aging in mice",
          kind: "breakthrough",
          years: { optimistic: 2020, consensus: 2020, skeptical: 2020 },
          detail: "Belmonte's group at the Salk Institute published evidence in Cell in 2016 and Nature Aging in 2022 that cyclic partial reprogramming using OSK factors rejuvenates aged tissues in mice, including eye, muscle, and brain, without loss of cell identity or tumor formation. This was the proof-of-concept that partial reprogramming could be safe, driving the formation of Altos Labs in 2022 with $3B in funding.",
          done: true
        },
        {
          id: "lon-m4",
          title: "First human senolytics randomized controlled trial reports results",
          kind: "breakthrough",
          years: { optimistic: 2026, consensus: 2028, skeptical: 2032 },
          detail: "Several Phase 2 trials of dasatinib-plus-quercetin and navitoclax in aging-related conditions (idiopathic pulmonary fibrosis, diabetic kidney disease, Alzheimer's) are underway. A positive RCT showing biological age reversal via epigenetic clock in humans, with durable safety, would be a field-defining result. Results are expected from multiple trials between 2026 and 2030.",
          done: false
        },
        {
          id: "lon-m5",
          title: "TAME trial reports metformin effect on aging composite endpoint",
          kind: "breakthrough",
          years: { optimistic: 2030, consensus: 2034, skeptical: 2040 },
          detail: "The Targeting Aging with Metformin (TAME) trial, designed by Nir Barzilai for 14 US sites and 3,000 participants, is the first trial designed specifically to slow aging rather than treat a single disease, using a composite endpoint of age-related diseases and mortality. As of 2026 it remains only partially funded (est. $45-70M) and has not begun full enrollment, because generic metformin offers no sponsor return. Its regulatory template has nonetheless influenced the field; Eli Lilly is reportedly designing a similar GLP-1 aging trial. A positive result would create an FDA pathway for anti-aging drugs.",
          done: false
        },
        {
          id: "lon-m6",
          title: "First partial reprogramming therapy dosed in a human",
          kind: "breakthrough",
          years: { optimistic: 2026, consensus: 2026, skeptical: 2026 },
          detail: "Life Biosciences dosed the first human with a partial epigenetic reprogramming therapy (ER-100, a local ophthalmology indication) in June 2026, the first such program FDA-cleared into the clinic. Altos Labs, Retro Biosciences, NewLimit and Turn Biotechnologies are following. This is a first-in-human safety step, not proof of biological-age reversal; Phase 1 completion with a clean safety profile remains the gate that would show in vivo reprogramming does not cause cancer or immune catastrophe.",
          done: true
        },
        {
          id: "lon-m7",
          title: "Regulatory approval of first aging-reversal intervention",
          kind: "policy",
          years: { optimistic: 2038, consensus: 2052, skeptical: 2070 },
          detail: "Full regulatory approval requires demonstrated safety and efficacy in humans over multi-year follow-up, a recognized disease indication or a new regulatory category for aging itself, and manufacturing at scale. The FDA's Accelerating Medicines Partnership on Alzheimer's and similar programs suggest regulators are willing to innovate, but the bar for a longevity claim is extremely high. This milestone defines the probability target for this technology.",
          done: false
        }
      ],
      branches: [
        {
          id: "lon-b1",
          name: "Partial reprogramming wins",
          fromMilestone: "lon-m6",
          probability: 0.35,
          summary: "In vivo partial reprogramming of multiple tissue types becomes the primary modality. The first human dose (Life Biosciences ER-100, 2026) was local; this path requires moving from single-tissue to systemic, with Altos Labs, Retro, NewLimit and others competing. Delivery via mRNA or small molecules replacing viral vectors is the unlock.",
          milestones: [
            {
              id: "lon-b1m1",
              title: "Non-viral delivery of reprogramming factors demonstrated in vivo",
              kind: "breakthrough",
              years: { optimistic: 2030, consensus: 2036, skeptical: 2045 },
              detail: "Current partial reprogramming approaches use adeno-associated virus (AAV) for delivery, which limits repeat dosing due to immune responses. A safe, repeatable non-viral delivery system (lipid nanoparticle mRNA, small molecule mimetics) would unlock systemic, chronic reprogramming therapy.",
              done: false
            },
            {
              id: "lon-b1m2",
              title: "Multi-tissue systemic reprogramming in primates with sustained biological age reversal",
              kind: "scaleup",
              years: { optimistic: 2034, consensus: 2042, skeptical: 2052 },
              detail: "Primate data demonstrating safe, measurable biological age reversal across multiple tissues simultaneously would be the penultimate gate before human efficacy trials. No primate study of this scope has been published as of 2026.",
              done: false
            }
          ]
        },
        {
          id: "lon-b2",
          name: "Hallmark-by-hallmark drug stack",
          fromMilestone: "lon-m5",
          probability: 0.40,
          summary: "No single rejuvenation intervention dominates. Instead, a combination regimen targeting multiple hallmarks simultaneously (senolytics, mTOR inhibition, NAD+ restoration, mitochondrial support) produces cumulative health-span extension. This is the pharmaceutical-industry-friendly path and requires no single dramatic breakthrough.",
          milestones: [
            {
              id: "lon-b2m1",
              title: "Multi-hallmark combination regimen shows 5+ year biological age reduction in RCT",
              kind: "breakthrough",
              years: { optimistic: 2032, consensus: 2040, skeptical: 2052 },
              detail: "A stacked regimen of approved and novel compounds targeting at least three hallmarks is tested in a multi-year randomized controlled trial using validated multi-omic biological age as the primary endpoint. Positive results would establish the polypharmacy model as the near-term standard of care for biological age management.",
              done: false
            },
            {
              id: "lon-b2m2",
              title: "Longevity polypharmacy included in preventive care guidelines",
              kind: "policy",
              years: { optimistic: 2040, consensus: 2050, skeptical: 2065 },
              detail: "Inclusion in major preventive medicine guidelines (USPSTF, ACC/AHA equivalent) would drive insurance coverage and mass adoption. This requires a decade of safety data and a recognized disease-prevention claim, not an anti-aging claim.",
              done: false
            }
          ]
        },
        {
          id: "lon-b3",
          name: "Field stalls on human translation",
          fromMilestone: "lon-m4",
          probability: 0.25,
          summary: "Mouse results fail to translate, human trials surface serious adverse events (oncogenesis, immune reactions), or epigenetic clocks prove not to be causal mediators of aging but mere correlates. Progress continues only in specific disease contexts, not general aging reversal.",
          milestones: [
            {
              id: "lon-b3m1",
              title: "Major human trial failure triggers field reset",
              kind: "policy",
              years: { optimistic: 2028, consensus: 2033, skeptical: 2040 },
              detail: "A prominent Phase 2 or Phase 3 failure, especially one involving safety signals like increased cancer incidence in reprogramming trials, would redirect funding toward narrower disease-specific applications and reduce investor confidence in broad longevity claims for a decade.",
              done: false
            }
          ]
        }
      ]
    },

    backcast: {
      today: [
        "Life Biosciences dosed the first human with a partial epigenetic reprogramming therapy (ER-100, ophthalmology) in June 2026, the first such program cleared into the clinic; Retro Biosciences became clinical-stage in 2025 (its autophagy small molecule RTR242, not its reprogramming arm) and Altos Labs published a 2025 Cell paper but had not disclosed an IND.",
        "Altos Labs (founded 2022, $3B raised) is running partial reprogramming research programs across multiple labs with Nobel laureates including Yamanaka and Gurdon as advisors; NewLimit (Brian Armstrong) and Retro (Sam Altman) are well-funded competitors.",
        "The TAME trial remains only partially funded as of 2026 and has not begun full enrollment; generic metformin offers no sponsor return, though its endpoint design has become the field's regulatory template.",
        "Multiple validated epigenetic clocks (Horvath, GrimAge, DunedinPACE, PhenoAge) can measure biological age non-invasively from blood, enabling clinical trial endpoints that did not exist before 2013.",
        "Senolytic drugs dasatinib-plus-quercetin and navitoclax have Phase 1/2 human safety data in specific diseases (IPF, CKD); no Phase 3 RCT in healthy aging has reported. Unity Biotechnology's lead program missed its endpoint in 2025, Nasdaq suspended trading in July 2025, and the company moved to dissolve, a warning about listed longevity pure-plays."
      ],
      dependencies: [
        {
          name: "Validated multi-omic biological age biomarkers",
          why: "Without a causal, FDA-recognized measure of biological age, trials cannot prove reversal — they can only show effects on surrogate endpoints.",
          state: "Epigenetic clocks are validated for mortality prediction but not yet accepted by FDA as primary endpoints for anti-aging claims; NIA and FDA are in active dialogue on this gap."
        },
        {
          name: "Safe in vivo gene/epigenome delivery",
          why: "Partial reprogramming requires delivering large transcription factor genes or their equivalents into cells across tissues; current AAV vectors trigger immune responses and cannot be dosed repeatedly.",
          state: "Lipid nanoparticle delivery of mRNA is proven for vaccines (COVID-19) but not yet for epigenome editing in multiple tissue types; research-stage as of 2026."
        },
        {
          name: "Long-term primate safety data for reprogramming",
          why: "Tumorigenesis risk from reprogramming factors cannot be fully characterized in mice; primates are required before human trials, and these studies take years.",
          state: "Altos Labs has primate programs underway; no comprehensive multi-year safety dataset is public as of 2026."
        },
        {
          name: "Regulatory pathway for aging as an indication",
          why: "FDA does not currently recognize aging as a disease; all trials must run through specific disease indications, which limits what can be claimed and approved.",
          state: "The TAME trial is a deliberate attempt to create precedent; FDA has indicated openness to a geroscience indication if evidence is strong."
        }
      ],
      supplyChain: [
        {
          item: "Clinical-grade viral vectors (AAV)",
          why: "Required for current partial reprogramming delivery in any near-term human trial.",
          players: "Spark Therapeutics, Oxford Biomedica, Catalent Gene Therapy, Regenxbio",
          chokepoint: true
        },
        {
          item: "Aged human cohort biobanks with longitudinal omics data",
          why: "Training and validating biological age clocks requires large, well-characterized longitudinal cohorts with multi-omic data.",
          players: "UK Biobank, NIA's Long Life Family Study, InCHIANTI cohort",
          chokepoint: false
        },
        {
          item: "Senolytic active pharmaceutical ingredients (dasatinib, quercetin, navitoclax)",
          why: "Generic dasatinib and quercetin are widely available; navitoclax (ABT-263) is an AbbVie compound requiring licensing for combination regimens.",
          players: "AbbVie (navitoclax), generic API manufacturers in India/China (dasatinib)",
          chokepoint: false
        },
        {
          item: "High-throughput single-cell epigenomics platforms",
          why: "Characterizing reprogramming effects across cell types in tissues requires single-cell resolution; cost and throughput matter for large trials.",
          players: "10x Genomics, Parse Biosciences, Scale Biosciences",
          chokepoint: false
        }
      ],
      leadingIndicators: [
        "Life Biosciences ER-100 Phase 1 safety readout: the first human partial-reprogramming data, watched for any oncogenic or immune signal that would gate the whole modality.",
        "Whether TAME secures full funding and begins enrollment, or whether Eli Lilly's reported GLP-1 aging trial supersedes it as the first large geroscience trial.",
        "Altos Labs first disclosed IND or peer-reviewed in vivo partial reprogramming results in primates.",
        "FDA willingness to recognize a geroscience indication for drug development (vs. forcing all trials through specific diseases).",
        "DunedinPACE or equivalent multi-omic clock adoption as an exploratory endpoint in a major Phase 3 cardiovascular or Alzheimer's trial."
      ]
    },

    people: [
      {
        name: "David Sinclair",
        role: "Professor of Genetics; Co-Director, Paul F. Glenn Center for Biology of Aging Research",
        org: "Harvard Medical School",
        note: "Sinclair's information theory of aging and NAD+ work are widely cited but also contested by peers including Charles Brenner; his 2019 book 'Lifespan' is the field's most prominent popular statement of the reversal hypothesis."
      },
      {
        name: "Cynthia Kenyon",
        role: "VP of Aging Research",
        org: "Calico (Google/Alphabet)",
        note: "Kenyon's 1993 discovery that a single gene mutation (daf-2) could double C. elegans lifespan is the founding result of modern longevity genetics; she now leads aging research at Calico."
      },
      {
        name: "Steve Horvath",
        role: "Professor of Human Genetics and Biostatistics (emeritus UCLA); researcher",
        org: "Altos Labs",
        note: "Inventor of the pan-tissue epigenetic clock (2013); his methylation-based biological age measures are the primary endpoints for most current longevity interventions and the quantitative backbone of the field."
      },
      {
        name: "Juan Carlos Izpisua Belmonte",
        role: "Professor and founding scientist",
        org: "Altos Labs",
        note: "Led the Salk Institute work demonstrating partial in vivo reprogramming reverses aging in mice; recruited to Altos Labs at founding to lead its core scientific program."
      },
      {
        name: "Morgan Levine",
        role: "Assistant Professor; researcher",
        org: "Yale School of Medicine; Altos Labs",
        note: "Developer of PhenoAge and a leading voice for systems-biology frameworks of aging; argues that single-hallmark interventions will fail because aging is an emergent network property."
      },
      {
        name: "Aubrey de Grey",
        role: "Chief Science Officer",
        org: "Aubrey de Grey Research (formerly SENS Research Foundation)",
        note: "Architect of the damage-repair framework for aging (SENS); a controversial but influential figure who popularized the idea that aging is an engineering problem with an engineering solution."
      }
    ],

    reading: [
      {
        title: "The Hallmarks of Aging",
        author: "Carlos Lopez-Otin, Maria A. Blasco, Linda Partridge, Manuel Serrano, Guido Kroemer",
        year: 2013,
        type: "paper",
        note: "The canonical taxonomy of aging mechanisms, published in Cell; read this before any other longevity source to understand the shared vocabulary of the field."
      },
      {
        title: "Hallmarks of Aging: An Expanding Universe",
        author: "Carlos Lopez-Otin, Maria A. Blasco, Linda Partridge, Manuel Serrano, Guido Kroemer",
        year: 2023,
        type: "paper",
        note: "The 2023 Cell update adds four new hallmarks and reflects a decade of progress; essential companion to the 2013 paper."
      },
      {
        title: "Lifespan: Why We Age and Why We Don't Have To",
        author: "David Sinclair with Matthew LaPlante",
        year: 2019,
        type: "book",
        note: "The most influential popular treatment of the aging-reversal hypothesis; read alongside critical reviews to calibrate which claims have strong evidence and which are contested."
      },
      {
        title: "An epigenetic biomarker of aging for lifespan and healthspan",
        author: "Steve Horvath, Kenneth Raj",
        year: 2018,
        type: "paper",
        note: "Review in Nature Reviews Genetics summarizing the epigenetic clock framework, its biological basis, and its applications; the best entry point to the clock literature."
      },
      {
        title: "In vivo partial reprogramming by transient reprogramming of fibroblasts reduces aging in mice",
        author: "Pradeep Reddy, Alejandro Ocampo, et al. (Belmonte lab)",
        year: 2022,
        type: "paper",
        note: "Nature Aging paper demonstrating cyclic OSK partial reprogramming rejuvenates multiple tissues in aged mice; the key empirical basis for Altos Labs' scientific program."
      },
      {
        title: "Metformin in Longevity Study (MILES) and the TAME Trial Protocol",
        author: "Nir Barzilai, Jill Crandall, et al.",
        year: 2023,
        type: "report",
        note: "The published TAME protocol and its scientific rationale; represents the first FDA-engaged attempt to treat aging as a clinical indication rather than a specific disease."
      }
    ]
  },


  /* ============================================================
     2. INDUSTRIAL SYNTHETIC BIOLOGY
     ============================================================ */
  {
    id: "synthetic-biology",
    name: "Industrial Synthetic Biology",
    shortName: "Synbio",
    tagline: "We are learning to program living cells the way we program computers — and the cell is a better factory than any we have built.",
    domain: "biology",
    glyph: "⬡",
    status: "scaling",
    consequence: 8,

    probability: {
      value: 0.82,
      definition: "Biologically manufactured products account for more than 10% of global physical goods (by mass) by 2056, across chemicals, materials, food, and fuels.",
      basis: "Author estimate, benchmarked against McKinsey Global Institute 'The Bio Revolution' (2020) projection that biology could affect up to 60% of physical inputs to the global economy within 10-20 years; Ginkgo Bioworks investor materials (2021) and bioeconomy roadmaps from OECD (2009, revised 2023). Industrial synbio is already commercial at scale in specific sectors (insulin, citric acid, vitamins, mRNA); the question is breadth, not existence.",
      range: [0.65, 0.92]
    },

    arrival: {
      optimistic: 2032,
      consensus: 2040,
      skeptical: 2052
    },

    whyItMatters: "Petrochemicals underpin nearly every physical product humans make. Fermentation-based biomanufacturing can replace many of them with lower carbon intensity, using renewable feedstocks, at costs that are falling fast as DNA synthesis and cell engineering improve. The transition from a petrochemical economy to a bioeconomy would be as consequential as the original industrial revolution.",

    feynman: [
      {
        level: 1,
        label: "The kitchen-table version",
        body: "You have used yeast your whole life without knowing it. It makes bread rise and turns grape juice into wine. Yeast is a tiny living cell that follows instructions written in DNA. Scientists have figured out how to rewrite those instructions. They can give yeast new jobs: make medicine, produce spider silk, generate jet fuel, grow leather. The cell does the work for you, running on sugar. Instead of a factory full of steel pipes and chemical reactors, you get a tank full of engineered microbes. The drug insulin used to be extracted from pig pancreases. Now it is made by bacteria that were given the human insulin gene decades ago. That same idea, applied to thousands of products, is what synthetic biology promises. The cost of writing new DNA instructions has fallen ten-million-fold since the 1990s — faster than Moore's Law in computers. Every year, scientists can engineer more complex things into cells: new pathways, new sensors, new outputs. Companies like Ginkgo Bioworks exist just to write code for cells the way software shops write apps. The technology is not speculative. It is already making vitamins, flavors, fragrances, biofuels, and vaccines. The question is how much of the physical world it eventually makes."
      },
      {
        level: 2,
        label: "The mechanism",
        body: "Synthetic biology treats cellular metabolism as a programmable system. The core workflow is design, build, test, and learn (DBTL). Design: use computational tools to model which metabolic pathways, if engineered, would produce a target molecule. Build: synthesize the required DNA sequences and insert them into a host organism (usually E. coli, Saccharomyces cerevisiae, or a specialist chassis like Pseudomonas). Test: grow the engineered organism in a fermenter, measure output yield, identify bottlenecks. Learn: use machine learning to interpret results and design the next round. DNA synthesis costs have fallen from $10/base pair in 1990 to below $0.01/bp today, making it cheap to build and iterate. Frances Arnold's directed evolution (Nobel Chemistry 2018) adds a Darwinian layer: generate thousands of enzyme variants, select the best performers, repeat. The result is enzymes optimized for industrial chemistry that no human designer could have predicted. mRNA manufacturing (proven at scale during COVID-19) demonstrated that biological manufacturing can achieve pharmaceutical-grade quality at speed. The limiting step is now fermentation scale-up and downstream purification, not cell design."
      },
      {
        level: 3,
        label: "The hard part",
        body: "Three problems dominate the field. First, yield: engineered pathways compete with the cell's own metabolic needs; diverting too much flux to the product kills the cell or reduces yields below commercial viability. Metabolic engineering requires balancing pathway genes carefully, often across dozens of variables simultaneously. Second, scale-up: a pathway that works in a 1-liter flask often behaves differently in a 50,000-liter industrial fermenter because of oxygen gradients, heat, shear stress, and nutrient distribution. The fermentation engineering required is specific to each product and organism, and it is expensive. Third, cost competition: biomanufacturing competes against petroleum chemistry, which has 100 years of optimization. For commodity chemicals, bio routes are rarely cost-competitive unless carbon pricing tilts the equation or the bio route produces something petroleum cannot. High-value specialty chemicals, pharmaceuticals, and materials (where bio has unique access to molecular complexity) are currently the strongest markets. DNA synthesis cost is falling but sequencing-and-design bottlenecks remain. Regulatory approval timelines for novel bio-derived ingredients in food and materials are long and jurisdiction-specific. The field also faces public acceptance challenges for GMO-derived consumer products in European markets."
      },
      {
        level: 4,
        label: "The frontier",
        body: "Four frontiers define the leading edge as of 2026. First, cell-free systems: running metabolic reactions outside living cells entirely, using purified enzyme cascades in bioreactors. This eliminates host cell toxicity problems and is already commercial for mRNA synthesis (Greenlight Biosciences, prior to acquisition). Second, continuous fermentation and integrated biorefinery: moving from batch fermentation to continuous processes that dramatically increase productivity per capital invested. Third, whole-cell biosensors and living materials: engineering cells to sense and respond to environmental signals, producing materials that adapt, self-repair, or degrade on command. These are pre-commercial but advancing rapidly in academic programs. Fourth, automated cell-engineering platforms: Ginkgo Bioworks' foundry model applies robotics, high-throughput screening, and ML-guided design iteration to reduce the cost and time of cell engineering by orders of magnitude. The platform model — charge per cell program, capture royalties on production — mirrors semiconductor foundries. The key open problem is whether the foundry model is economically sustainable: Ginkgo went public at a $15B valuation, did a 1-for-40 reverse split in 2024, cut over $300M of opex across 2025, divested biosecurity, and is only now targeting adjusted-EBITDA breakeven (mid-2026) on shrinking revenue. The metric to watch is cost-per-successful-program and time-to-commercial-production for complex molecules, plus whether downstream royalties ever outgrow upfront services fees."
      }
    ],

    timeline: {
      milestones: [
        {
          id: "syn-m1",
          title: "Directed evolution established as industrial tool (Frances Arnold Nobel)",
          kind: "breakthrough",
          years: { optimistic: 2018, consensus: 2018, skeptical: 2018 },
          detail: "Frances Arnold's Nobel Prize in Chemistry 2018 recognized her development of directed evolution — iteratively mutating and selecting enzymes for industrial applications. Her engineered enzymes are now used in detergents, pharmaceuticals, and biofuels. This anchors synthetic biology's industrial legitimacy: it is not just academic, it is Nobel-recognized chemistry.",
          done: true
        },
        {
          id: "syn-m2",
          title: "mRNA manufacturing at industrial scale validated by COVID-19 vaccine production",
          kind: "scaleup",
          years: { optimistic: 2021, consensus: 2021, skeptical: 2021 },
          detail: "Moderna and BioNTech/Pfizer manufactured billions of mRNA vaccine doses in under two years, demonstrating that biological manufacturing can achieve pharmaceutical quality at unprecedented speed and scale. This proved the cell-free mRNA production model and established lipid nanoparticle delivery at scale, capabilities now being repurposed for therapeutics and other biologics.",
          done: true
        },
        {
          id: "syn-m3",
          title: "First engineered organism approved for large-scale food ingredient production in major market",
          kind: "policy",
          years: { optimistic: 2023, consensus: 2025, skeptical: 2029 },
          detail: "Precision fermentation companies (Perfect Day, Vivici, Remilk) have US GRAS status for animal-free dairy proteins made by engineered yeast and are in commercial sale; Vivici launched whey (Vivetein BLG) in the US in 2025 and lactoferrin in early 2026. The EU remains the holdout: as of early 2026 EFSA had issued no safety opinion for any major precision-fermented protein, so none are sold there, and the proposed EU Biotech Act aims to unstick the Novel Food backlog. This gate matters because food is the largest volume consumer market for bio-derived ingredients.",
          done: true
        },
        {
          id: "syn-m4",
          title: "Drop-in bio-based replacement for a major petrochemical commodity at cost parity",
          kind: "scaleup",
          years: { optimistic: 2027, consensus: 2033, skeptical: 2042 },
          detail: "Achieving cost parity with petroleum-derived commodity chemicals (e.g., ethylene, BTX aromatics, adipic acid) without a carbon price subsidy would represent the first true displacement of the petrochemical industry. Lanzatech, LanzaJet, and Genomatica are the furthest along; Genomatica's bio-BDO (butanediol) is commercial but not yet at unsubsidized parity with petrochemical BDO at scale.",
          done: false
        },
        {
          id: "syn-m5",
          title: "Automated cell foundry produces first blockbuster-revenue bio-manufactured product",
          kind: "deployment",
          years: { optimistic: 2028, consensus: 2035, skeptical: 2045 },
          detail: "Ginkgo Bioworks, Zymergen (now part of Ginkgo), and competing foundries aim to compress the cell-engineering cycle from years to months. A cell program that generates >$500M annual revenue in a non-pharmaceutical application would validate the foundry economic model and attract further platform investment.",
          done: false
        },
        {
          id: "syn-m6",
          title: "Biomanufacturing exceeds 5% of global chemical production by value",
          kind: "deployment",
          years: { optimistic: 2035, consensus: 2042, skeptical: 2055 },
          detail: "The global chemical industry produces approximately $4 trillion of output annually. Crossing 5% bio-derived share (roughly $200B) would require bio routes to be competitive across a wide range of specialty and commodity chemicals, not just high-value niches. OECD bioeconomy projections and industry roadmaps consider this achievable by 2030-2040 in optimistic scenarios.",
          done: false
        },
        {
          id: "syn-m7",
          title: "Biologically manufactured physical goods exceed 10% of global physical production by mass",
          kind: "deployment",
          years: { optimistic: 2040, consensus: 2050, skeptical: 2060 },
          detail: "This is the probability definition target. It requires bio routes to penetrate materials (textiles, construction inputs, packaging), fuels, food proteins, and chemicals simultaneously. Each sector has different economics and regulatory barriers. McKinsey's 2020 bio revolution report put 10-20 year potential at up to 60% of physical inputs, but that is a ceiling estimate, not a median forecast.",
          done: false
        }
      ],
      branches: [
        {
          id: "syn-b1",
          name: "Platform foundry model dominates",
          fromMilestone: "syn-m5",
          probability: 0.40,
          summary: "Automated, AI-guided cell-engineering foundries (Ginkgo model) become the dominant infrastructure for biomanufacturing, analogous to semiconductor fabs. Companies rent engineering capacity rather than building it, and foundries capture royalties on production. Speed of innovation accelerates sharply.",
          milestones: [
            {
              id: "syn-b1m1",
              title: "Cell-engineering foundry achieves 10x cost reduction per successful program",
              kind: "scaleup",
              years: { optimistic: 2028, consensus: 2034, skeptical: 2042 },
              detail: "The current cost of taking a cell engineering program from concept to commercial organism is $10-50M and 2-5 years. A 10x reduction, enabled by automation and ML, would open thousands of currently uneconomic applications and attract a new tier of smaller customers.",
              done: false
            },
            {
              id: "syn-b1m2",
              title: "Foundry royalty revenues exceed contract engineering revenues at a major player",
              kind: "deployment",
              years: { optimistic: 2032, consensus: 2040, skeptical: 2050 },
              detail: "This is the business model maturity milestone: when foundries earn more from downstream production royalties than from upfront engineering fees, the model has achieved the 'software economics' structure that justifies current platform valuations.",
              done: false
            }
          ]
        },
        {
          id: "syn-b2",
          name: "Vertical integration wins",
          fromMilestone: "syn-m4",
          probability: 0.35,
          summary: "Large chemical, agricultural, and consumer goods companies build internal bio-engineering capabilities or acquire specialist startups, rather than renting foundry capacity. BASF, DSM-Firmenich, Cargill, and Archer Daniels Midland are the most likely consolidators. The foundry model remains niche.",
          milestones: [
            {
              id: "syn-b2m1",
              title: "Major incumbent chemical or food company acquires a leading synbio platform at scale",
              kind: "deployment",
              years: { optimistic: 2026, consensus: 2030, skeptical: 2038 },
              detail: "Strategic acquisitions of Ginkgo Bioworks, Zymergen successors, or vertical specialist biomanufacturers by BASF, DSM-Firmenich, or Cargill would signal that incumbents are internalizing bio capabilities rather than outsourcing them. DSM's acquisition of Amyris's fermentation assets (2023) is an early signal.",
              done: false
            }
          ]
        },
        {
          id: "syn-b3",
          name: "Regulatory and public-acceptance friction slows adoption",
          fromMilestone: "syn-m3",
          probability: 0.25,
          summary: "GMO-labeling requirements, novel food approval timelines in the EU, and consumer resistance to engineered organisms in consumer products slow adoption to below projected timelines. The technology works but regulatory and social friction contain it to pharmaceutical and industrial applications outside consumer view.",
          milestones: [
            {
              id: "syn-b3m1",
              title: "EU Novel Food Regulation creates mandatory GMO-equivalent labeling for precision fermentation products",
              kind: "policy",
              years: { optimistic: 2027, consensus: 2030, skeptical: 2035 },
              detail: "If the EU requires mandatory labeling of precision fermentation-derived ingredients as genetically modified, consumer adoption in Europe would likely follow the same suppression pattern as EU agricultural GMOs. This would bifurcate the global market between US/Asia (permissive) and EU (restrictive) for a decade or more.",
              done: false
            }
          ]
        }
      ]
    },

    backcast: {
      today: [
        "Ginkgo Bioworks runs the largest automated cell-engineering foundry but has retrenched hard: it cut over $300M of operating expense across 2025, divested its biosecurity business, saw Q1 2026 revenue fall to $19M, and is targeting adjusted-EBITDA breakeven by mid-2026 (still roughly -$42M in Q1 2026) on a ~$373M cash pile.",
        "Precision fermentation is commercial at scale for specific ingredients: Perfect Day (whey protein), Motif FoodWorks (myoglobin), Clara Foods (egg white), and others have US GRAS approval and are in commercial production.",
        "DNA synthesis costs have fallen below $0.01 per base pair (IDT, Twist Bioscience), enabling routine construction of multi-kilobase gene circuits; Twist Bioscience ships millions of gene fragments monthly.",
        "Lanzatech and LanzaJet have commercial plants converting industrial waste gas (CO/CO2) to ethanol and sustainable aviation fuel using engineered microbes; first commercial SAF flight occurred in 2023.",
        "The global industrial biotechnology market was valued at approximately $500B in 2023 (including established fermentation industries like amino acids, vitamins, and organic acids), per OECD bioeconomy data."
      ],
      dependencies: [
        {
          name: "Fermentation scale-up engineering",
          why: "The transition from bench to industrial fermenter is the primary bottleneck; most cell programs that work at liter scale fail or underperform at 50,000+ liter industrial scale.",
          state: "Specialist fermentation engineering firms (Abec, Praj Industries) exist; the bottleneck is cost and time, not fundamental impossibility."
        },
        {
          name: "Cheap renewable feedstocks (sugars, CO2, methanol)",
          why: "Fermentation economics depend on low-cost carbon feedstocks; sugar prices and renewable methanol availability determine whether bio routes can compete with petroleum.",
          state: "Brazilian sugarcane ethanol is at cost parity with gasoline in some markets; CO2-based feedstocks (carbon capture to methanol) are pre-commercial but advancing."
        },
        {
          name: "AI-guided metabolic pathway design",
          why: "Engineering complex multi-gene metabolic pathways without computational design is slow and low-yield; ML models trained on large datasets of cell engineering experiments accelerate design cycles.",
          state: "Ginkgo, Zymergen (acquired), and academic groups have working ML design-build-test-learn platforms; accuracy is improving but not yet fully autonomous."
        },
        {
          name: "Downstream purification infrastructure",
          why: "Separating the target molecule from the fermentation broth is often 50-70% of total production cost; purification methods are molecule-specific and expensive to develop.",
          state: "Established for pharmaceuticals; less developed for commodity chemicals and materials where cost targets are much tighter."
        }
      ],
      supplyChain: [
        {
          item: "Synthetic DNA (gene blocks, gene fragments, plasmids)",
          why: "Every cell engineering program requires custom DNA synthesis; cost and turnaround time directly limit iteration speed.",
          players: "Twist Bioscience, Integrated DNA Technologies (IDT/Danaher), GenScript, Evonetix",
          chokepoint: false
        },
        {
          item: "Industrial fermenters and bioreactors",
          why: "Large-scale fermentation capacity is capital-intensive to build and limited in specialist configurations for novel organisms.",
          players: "Eppendorf, Sartorius, Thermo Fisher Scientific, Praj Industries, ABEC",
          chokepoint: true
        },
        {
          item: "Cell chassis organisms (specialized microbial strains)",
          why: "Engineering efficiency depends on well-characterized, genetically tractable host organisms; proprietary chassis strains are a key competitive asset.",
          players: "Ginkgo Bioworks (proprietary strains), Novozymes (enzyme-producing strains), academic JBEI and NREL strain libraries",
          chokepoint: false
        },
        {
          item: "Renewable sugar and cellulosic feedstocks",
          why: "Carbon feedstock cost determines whether bio routes are economically viable for commodity products.",
          players: "Cargill, ADM, Raizen (Brazil), Roquette",
          chokepoint: false
        }
      ],
      leadingIndicators: [
        "Ginkgo Bioworks quarterly revenue mix: watch for royalty/downstream revenue growing as a share of total revenue, signaling the foundry model is working beyond services.",
        "LanzaJet and other SAF producers: volume of bio-based sustainable aviation fuel entering commercial supply chains, which is a high-volume, policy-mandated demand signal.",
        "Precision fermentation ingredient approvals in EU: as of early 2026 EFSA has issued no safety opinion for any major precision-fermented protein, so none are approved for sale; the proposed EU Biotech Act and faster Novel Food procedures are the thing to watch for breaking the deadlock.",
        "DNA synthesis cost per base pair: continued decline below $0.001/bp would open combinatorial DNA library construction at a scale that transforms strain engineering.",
        "US and EU bioeconomy funding commitments: the Biden administration's National Biotechnology and Biomanufacturing Initiative (2022) committed $2B+; track whether subsequent administrations maintain or expand this."
      ]
    },

    people: [
      {
        name: "Jennifer Doudna",
        role: "Professor of Biochemistry and Molecular Biology; Co-inventor of CRISPR-Cas9",
        org: "UC Berkeley; Innovative Genomics Institute",
        note: "Co-winner of the 2020 Nobel Prize in Chemistry for CRISPR-Cas9 gene editing; her tools are foundational to modern synthetic biology and she remains a leading voice on CRISPR applications and governance."
      },
      {
        name: "George Church",
        role: "Professor of Genetics",
        org: "Harvard Medical School; Wyss Institute",
        note: "Pioneer of genome engineering, DNA synthesis, and multiplex automated genome engineering (MAGE); has founded or co-founded over 35 companies; his lab is one of the most prolific sources of synthetic biology tools and applications."
      },
      {
        name: "Jason Kelly",
        role: "CEO and Co-Founder",
        org: "Ginkgo Bioworks",
        note: "Kelly founded Ginkgo in 2008 to build the foundry model for cell engineering; Ginkgo is the most visible attempt to make cell programming an industrial platform business, and Kelly's strategic choices define how the foundry model evolves."
      },
      {
        name: "Frances Arnold",
        role: "Linus Pauling Professor of Chemical Engineering, Bioengineering and Biochemistry",
        org: "Caltech",
        note: "Nobel Prize in Chemistry 2018 for directed evolution of enzymes; her methods are now standard in industrial biotech and her lab continues to produce novel enzymes for pharmaceutical and chemical synthesis."
      },
      {
        name: "Jay Keasling",
        role: "Professor of Chemical Engineering; CEO, Joint BioEnergy Institute",
        org: "UC Berkeley; Lawrence Berkeley National Laboratory",
        note: "Engineered yeast to produce artemisinin (the most effective antimalarial drug) at commercial scale, the canonical proof-of-concept that synthetic biology can produce complex pharmaceuticals at low cost; his work on biofuels and industrial biochemicals continues."
      }
    ],

    reading: [
      {
        title: "The Bio Revolution: Innovations Transforming Economies, Societies, and Our Lives",
        author: "McKinsey Global Institute",
        year: 2020,
        type: "report",
        note: "The most comprehensive quantitative assessment of synthetic biology's economic potential; projects that biology could affect up to 60% of global physical inputs within 10-20 years across health, agriculture, energy, and materials."
      },
      {
        title: "Creation of a Bacterial Cell Controlled by a Chemically Synthesized Genome",
        author: "J. Craig Venter et al.",
        year: 2010,
        type: "paper",
        note: "Science paper documenting the first synthesis and boot-up of a complete synthetic bacterial genome; a landmark proof-of-concept for whole-genome design that defined the ambition of the field."
      },
      {
        title: "Engineering the ribosomal DNA in a megabase synthetic chromosome",
        author: "Sc2.0 Consortium (Jef Boeke et al.)",
        year: 2023,
        type: "paper",
        note: "Part of the Synthetic Yeast 2.0 project completing synthesis of all 16 yeast chromosomes; demonstrates the current frontier of whole-genome synthesis and its implications for industrial chassis design."
      },
      {
        title: "Engineering microorganisms for energy and fuel production",
        author: "Jay Keasling",
        year: 2010,
        type: "paper",
        note: "Nature Biotechnology review covering the engineering of metabolic pathways in microorganisms for biofuels and industrial chemicals; accessible technical overview of the field's industrial applications."
      },
      {
        title: "Directed Evolution: Bringing New Chemistry to Life (Nobel Lecture)",
        author: "Frances Arnold",
        year: 2018,
        type: "article",
        note: "Arnold's Nobel lecture provides the clearest account of directed evolution, its industrial applications, and her view of how biology and chemistry are converging; freely available from the Nobel Prize organization."
      }
    ]
  },


  /* ============================================================
     3. REGENERATIVE MEDICINE & LAB-GROWN ORGANS
     ============================================================ */
  {
    id: "regenerative-medicine",
    name: "Regenerative Medicine & Lab-Grown Organs",
    shortName: "Regen Med",
    tagline: "The organ transplant waiting list kills 20 people a day in the US alone — biology may finally grow its way out of the shortage.",
    domain: "biology",
    glyph: "❤",
    status: "pilot",
    consequence: 9,

    probability: {
      value: 0.52,
      definition: "Lab-grown or bioengineered solid organs (at minimum: kidney or liver) are in routine clinical use in at least two countries by 2056, replacing cadaveric transplant for at least one organ type.",
      basis: "Author estimate, informed by: NIH National Heart, Lung, and Blood Institute organ bioengineering roadmap (2022); expert survey in Transplantation journal (2020) showing median expert expectation of engineered kidneys in clinical use by 2040-2050; and the observed pace of xenotransplantation (first pig kidney-to-human transplant 2021, first pig heart-to-human 2022). Organoid and iPSC technology is advancing rapidly but solid organ vascularization remains unsolved.",
      range: [0.30, 0.72]
    },

    arrival: {
      optimistic: 2038,
      consensus: 2050,
      skeptical: 2065
    },

    whyItMatters: "Over 100,000 people in the US and 1.5 million worldwide are on organ transplant waiting lists at any given time. Lab-grown or bioengineered organs would eliminate this shortage entirely. They could also enable personalized organs grown from a patient's own cells, eliminating rejection and lifelong immunosuppression. The economic and humanitarian scale of this potential is enormous.",

    feynman: [
      {
        level: 1,
        label: "The kitchen-table version",
        body: "Your body can already regrow some things. A cut heals. Your liver, unlike most organs, can regrow itself if part of it is removed. But if your heart stops working or your kidneys fail, your body cannot build a new one. You need someone else's organ, and finding one can take years. People die waiting. Scientists are working on three ways to fix this. First: grow a new organ from scratch using a patient's own cells, in a machine that keeps it alive until it is ready to implant. Second: use an animal's organ (usually a pig) and edit its genes so the human immune system will not attack it. Third: print organs using biological ink in a 3D printer, layer by layer, the way you print plastic objects. Each approach works for simple structures. Bladders made from patient cells have been successfully transplanted into humans since 2006. Cartilage, corneas, and skin are being replaced this way now. The hard challenge is organs with blood vessels threaded through every millimeter of tissue — like the heart, liver, and kidney. Without those vessels, cells at the center die. No one has solved this yet, but the pieces are coming together."
      },
      {
        level: 2,
        label: "The mechanism",
        body: "Three technologies converge in regenerative medicine. Induced pluripotent stem cells (iPSC): Shinya Yamanaka showed in 2006 that any adult cell can be reprogrammed into a blank-slate stem cell capable of differentiating into any cell type in the body. This means a patient's skin or blood cell can become heart muscle, kidney tubule cells, or liver hepatocytes without any immune rejection risk. Organoids: iPSCs and other stem cells self-organize into three-dimensional tissue structures that mimic real organs at small scale. Intestinal organoids are already used to screen drugs. Heart, liver, brain, and kidney organoids exist in research settings. They model organ function but are too small and lack vascular networks to replace whole organs. Decellularized scaffolds and 3D bioprinting: take a donor organ, remove all its cells using detergents, and you are left with the organ's extracellular matrix — its structural skeleton, including the vascular tree. Repopulate that scaffold with the patient's own cells, grown from iPSCs. Doris Taylor at the Texas Heart Institute has demonstrated this for hearts in animal models. Alternatively, 3D bioprinters extrude cells suspended in hydrogel, printing tissue layer by layer. Anthony Atala's group at Wake Forest has printed bladders, urethra, and early-stage kidney structures."
      },
      {
        level: 3,
        label: "The hard part",
        body: "The central unsolved problem is vascularization: growing the dense, hierarchical network of blood vessels (from arteries down to capillaries less than 10 microns in diameter) that keeps every cell in a thick organ alive. Without oxygen and nutrients from blood, cells more than 200 microns from a vessel die. The liver, kidney, and heart each contain billions of cells and require capillary networks of extraordinary density and precision. Current bioprinting can create channels at the millimeter scale; the capillary scale remains elusive. Secondary problems include: immune tolerance even with patient-derived iPSCs (epigenetic memory of the source cell may trigger immune responses); functional maturation (cells must not just be present but behave correctly under mechanical and biochemical load); and regulatory pathways (no engineered solid organ has received FDA approval; the regulatory science is being developed in parallel with the biology). Xenotransplantation (pig-to-human) is advancing fastest after CRISPR removed the key human-incompatible pig genes. Following early brain-dead-recipient transplants (NYU, 2021-2022) and the first living recipient (MGH, 2024, 47 days), Tim Andrews' eGenesis 69-edit pig kidney reached 271 days in 2025 before removal, and United Therapeutics opened the first regulated trial (EXPAND/UKidney) at NYU in November 2025. Durable rejection control beyond a year and infectious-disease risk (porcine endogenous retroviruses, PERVs) remain the open questions."
      },
      {
        level: 4,
        label: "The frontier",
        body: "Four competing strategies are converging toward viable organs. First, decellularized scaffold repopulation: Taylor's perfusion-based decellularization and whole-organ repopulation has produced beating rat hearts and rat kidneys with short-term function. Scaling to human-size organs and achieving full repopulation of billions of cells with correct spatial organization is unsolved. Second, in vivo organoid maturation: implanting small iPSC-derived organoids into immunocompromised animal hosts, where they mature and vascularize using the host's vascular system, then harvesting for reimplantation. Some labs have demonstrated this for liver organoids. Third, CRISPR-edited xenotransplantation: Revivicor (United Therapeutics) uses 10 edits while eGenesis uses up to 69, removing human-incompatible antigens, inactivating PERVs, and inserting human immune-tolerance genes. The current benchmark is eGenesis recipient Tim Andrews' kidney at 271 days (2025); United Therapeutics' EXPAND trial of its 10-edit UKidney began at NYU in November 2025. Fourth, bioprinting with sacrificial vascular templates: embedding water-soluble filaments in printed tissue to create hollow channels, then dissolving them to leave a perfusable vascular network. Lewis lab at Harvard has demonstrated this in thick cardiac tissue patches. The frontier metric is days of ex vivo organ function under physiologic perfusion before implantation."
      }
    ],

    timeline: {
      milestones: [
        {
          id: "reg-m1",
          title: "Yamanaka factors discovered: induced pluripotent stem cells (iPSC)",
          kind: "invention",
          years: { optimistic: 2006, consensus: 2006, skeptical: 2006 },
          detail: "Shinya Yamanaka published in Cell in 2006 that four transcription factors (Oct4, Sox2, Klf4, c-Myc) could reprogram adult mouse fibroblasts into pluripotent stem cells. He received the Nobel Prize in Physiology or Medicine in 2012. This discovery eliminated the need for embryonic stem cells and created the theoretical basis for patient-specific organ generation without rejection.",
          done: true
        },
        {
          id: "reg-m2",
          title: "First engineered bladder transplanted in human",
          kind: "breakthrough",
          years: { optimistic: 2006, consensus: 2006, skeptical: 2006 },
          detail: "Anthony Atala's group at Wake Forest published in The Lancet (2006) results from the first transplantation of bladders engineered from patients' own cells on a biodegradable scaffold. Seven pediatric patients received engineered bladders with no rejection and durable function. This was the first demonstration of a tissue-engineered organ functioning long-term in a human.",
          done: true
        },
        {
          id: "reg-m3",
          title: "First pig-to-human heart transplant in a living recipient",
          kind: "breakthrough",
          years: { optimistic: 2022, consensus: 2022, skeptical: 2022 },
          detail: "Surgeons at University of Maryland Medical Center transplanted a CRISPR-edited pig heart into David Bennett Sr. in January 2022, the first such procedure in a living human. The patient survived 60 days before dying of pig cytomegalovirus infection — a contamination later identified as preventable. The procedure established proof-of-concept for xenotransplantation of a whole heart in a living human.",
          done: true
        },
        {
          id: "reg-m4",
          title: "First pig kidney survives >6 months in a living human recipient",
          kind: "breakthrough",
          years: { optimistic: 2025, consensus: 2025, skeptical: 2025 },
          detail: "Tim Andrews, transplanted in January 2025 in the eGenesis/Mass General Brigham pilot with a 69-edit pig kidney, became the longest-surviving recipient at 271 days (~9 months) before the graft was removed for declining function. This cleared the 6-month benchmark, proving CRISPR-edited xenografts can function durably for the better part of a year. United Therapeutics' regulated EXPAND trial of its 10-edit UKidney then began with the first transplant at NYU Langone on November 3, 2025.",
          done: true
        },
        {
          id: "reg-m5",
          title: "Vascularized solid organ (kidney or liver) functions ex vivo for 72+ hours in continuous perfusion",
          kind: "breakthrough",
          years: { optimistic: 2027, consensus: 2033, skeptical: 2042 },
          detail: "The critical technical gate for bioengineered organs is sustained viability under physiologic conditions before implantation. A kidney or liver organoid or scaffold-derived organ sustaining function for 72+ continuous hours in a normothermic perfusion machine would demonstrate that the vascularization problem is solved at an organ scale sufficient for clinical use.",
          done: false
        },
        {
          id: "reg-m6",
          title: "iPSC-derived kidney organoid transplanted in a human in a formal clinical trial",
          kind: "breakthrough",
          years: { optimistic: 2030, consensus: 2038, skeptical: 2050 },
          detail: "A Phase 1 clinical trial implanting iPSC-derived kidney tissue into a patient with end-stage renal disease, with measurable filtration function as the endpoint, would represent the first step from animal models to humans for the iPSC-bioengineering path. No such trial is currently approved or underway as of 2026.",
          done: false
        },
        {
          id: "reg-m7",
          title: "FDA approves first bioengineered solid organ for routine clinical use",
          kind: "policy",
          years: { optimistic: 2038, consensus: 2052, skeptical: 2068 },
          detail: "Regulatory approval requires demonstrated safety and efficacy across multiple patients, with durability data over at least 5 years. The FDA's Center for Biologics Evaluation and Research has no approved framework for complex bioengineered organs; regulatory science will need to develop in parallel with the biology. This is the definition target for this technology's probability.",
          done: false
        }
      ],
      branches: [
        {
          id: "reg-b1",
          name: "Xenotransplantation wins first",
          fromMilestone: "reg-m4",
          probability: 0.38,
          summary: "CRISPR-edited pig organs (kidney first, then heart and liver) achieve durable function in humans before bioengineered organs, because xenotransplantation is structurally simpler: the organ architecture is already solved by evolution. eGenesis, Revivicor (United Therapeutics), and academic programs lead. This path delivers organs in the 2030s but requires lifelong immunosuppression.",
          milestones: [
            {
              id: "reg-b1m1",
              title: "CRISPR-edited pig kidney achieves 1-year function in 10+ living recipients",
              kind: "scaleup",
              years: { optimistic: 2027, consensus: 2031, skeptical: 2038 },
              detail: "With United Therapeutics' EXPAND trial enrolling from November 2025 and eGenesis running its pilot, the next gate is ten or more patients sustaining function beyond one year from a standardized edited pig kidney, the efficacy dataset needed to pursue approval. Whether the 10-edit (Revivicor) or higher-edit (eGenesis) profile wins is still open.",
              done: false
            },
            {
              id: "reg-b1m2",
              title: "FDA conditional approval of xenotransplant kidney under humanitarian device exemption or accelerated pathway",
              kind: "policy",
              years: { optimistic: 2033, consensus: 2040, skeptical: 2050 },
              detail: "Conditional approval for patients with no other options (ESRD without dialysis access, for example) would allow clinical experience to accumulate while broader approval data is gathered. This mirrors the pathway used for ventricular assist devices and other life-sustaining devices before full approval.",
              done: false
            }
          ]
        },
        {
          id: "reg-b2",
          name: "iPSC bioengineering wins",
          fromMilestone: "reg-m5",
          probability: 0.32,
          summary: "Vascularization is solved through a combination of 3D bioprinting, sacrificial template vasculature, and in vivo maturation. Patient-specific iPSC-derived organs become available without rejection risk and without immunosuppression. This path takes longer but produces superior clinical outcomes and eliminates the need for pig supply chains.",
          milestones: [
            {
              id: "reg-b2m1",
              title: "Full vascularization of human-scale kidney demonstrated in laboratory",
              kind: "breakthrough",
              years: { optimistic: 2031, consensus: 2040, skeptical: 2052 },
              detail: "A human-scale (approximately 150g) kidney with a complete, hierarchical vascular network (artery to arteriole to capillary) demonstrating adequate perfusion pressure and filtration in an ex vivo system would be the decisive proof that the vascularization problem is solved. No published result is close to this scale as of 2026.",
              done: false
            },
            {
              id: "reg-b2m2",
              title: "iPSC-kidney clinical trial reports primary endpoint success",
              kind: "deployment",
              years: { optimistic: 2038, consensus: 2050, skeptical: 2064 },
              detail: "A Phase 2/3 trial demonstrating that iPSC-derived kidneys provide durable renal function equivalent to cadaveric transplant, with superior rejection profile, would definitively establish the bioengineering path as clinically viable.",
              done: false
            }
          ]
        },
        {
          id: "reg-b3",
          name: "Field remains in organ-specific niches",
          fromMilestone: "reg-m6",
          probability: 0.30,
          summary: "Neither xenotransplantation nor bioengineering achieves broad solid organ replacement by 2056. Progress is real but confined to specific tissue types (corneas, trachea, skin, cartilage, bladder), small-scale organoid applications in drug screening, and bridge therapies rather than permanent replacement. Rejection, cost, and vascularization remain blocking problems for hearts, livers, and kidneys.",
          milestones: [
            {
              id: "reg-b3m1",
              title: "Wearable bioartificial kidney reaches Phase 3 trial as alternative to solid organ",
              kind: "deployment",
              years: { optimistic: 2028, consensus: 2033, skeptical: 2040 },
              detail: "The Kidney Project (UCSF/Vanderbilt) and other bioartificial kidney programs embed live renal tubule cells in a wearable device that replicates key kidney functions. If solid organ bioengineering stalls, this hybrid approach may be the next clinical step, replacing dialysis rather than transplant.",
              done: false
            }
          ]
        }
      ]
    },

    backcast: {
      today: [
        "Over 100,000 patients are on the US organ transplant waiting list; 17-20 die each day waiting; median wait for a kidney is 3-5 years depending on blood type and region (UNOS/HRSA data, 2024).",
        "Xenotransplantation has moved from one-off cases to a regulated trial: eGenesis recipient Tim Andrews' 69-edit pig kidney reached 271 days in 2025 (the longest ever before removal), and United Therapeutics' EXPAND trial of its 10-edit UKidney performed its first transplant at NYU Langone on November 3, 2025.",
        "Yamanaka's iPSC technology is mature: iPSC-derived cardiomyocytes are used for drug cardiotoxicity screening by all major pharmaceutical companies; iPSC-derived retinal pigment epithelium is in Phase 1/2 trials for macular degeneration (Healios, Astellas).",
        "Organoids are routine in drug discovery: intestinal, liver, lung, and kidney organoids are sold commercially (HUB Organoids, Hubrecht Institute; STEMCELL Technologies) and used by pharma companies for disease modeling.",
        "Doris Taylor's decellularized heart scaffold work and Anthony Atala's bioprinting programs are ongoing; no functional human-scale vascularized organ has been implanted as of 2026."
      ],
      dependencies: [
        {
          name: "Vascularization technology",
          why: "No bioengineered solid organ can survive implantation without a perfusable microvascular network; this is the single most critical unsolved problem in the field.",
          state: "Multiple approaches exist (sacrificial template printing, self-assembly, host vascularization via implantation in animal hosts) but none has been demonstrated at human organ scale."
        },
        {
          name: "Scalable iPSC differentiation protocols",
          why: "Growing enough of the right cell types from iPSCs to populate a whole organ requires reliable, reproducible, clinical-grade protocols that do not yet exist for most organ-specific cell types.",
          state: "Cardiac, hepatic, and nephric differentiation protocols exist in research settings; scaling to billions of cells with GMP (Good Manufacturing Practice) standards is a manufacturing challenge being addressed by companies like BlueRock Therapeutics and Fate Therapeutics."
        },
        {
          name: "Immune tolerance for iPSC-derived organs",
          why: "Even patient-derived iPSCs may trigger immune responses due to epigenetic abnormalities or incomplete silencing of stem cell genes; rejection risk must be characterized before clinical use.",
          state: "Research-stage; some evidence suggests iPSC-derived cells are more immunogenic than expected; universal donor iPSC lines (engineered for immune evasion) are in development at Sana Biotechnology and others."
        },
        {
          name: "CRISPR gene editing precision and delivery for xenotransplantation",
          why: "CRISPR-edited pig organs require multiple precise gene edits (knock-out of pig antigens, knock-in of human immune modulators, removal of porcine endogenous retroviruses) with no off-target mutations.",
          state: "eGenesis has produced pigs with 69 gene edits (the most complex mammalian genome engineering achieved); off-target editing assessment tools are improving but not yet fully validated for clinical use."
        }
      ],
      supplyChain: [
        {
          item: "Clinical-grade iPSC lines and differentiation media",
          why: "Manufacturing organs from iPSCs requires GMP-certified cell lines and complex, expensive differentiation protocols; the supply chain is immature for organ-scale production.",
          players: "BlueRock Therapeutics (Bayer), Fate Therapeutics, Fujifilm Cellular Dynamics, RIKEN BioResource Research Center",
          chokepoint: true
        },
        {
          item: "CRISPR-edited pig herds",
          why: "Xenotransplantation requires a consistent supply of pathogen-free, gene-edited pigs; maintaining these herds at the required biosafety level is expensive and specialized.",
          players: "Revivicor (United Therapeutics), eGenesis, Xenothera",
          chokepoint: true
        },
        {
          item: "Normothermic organ perfusion machines",
          why: "Keeping donor or engineered organs viable during transport and preparation requires machine perfusion; extending viability windows from hours to days is critical for logistics.",
          players: "XVIVO Perfusion, TransMedics (OrganOx), Paragonix Technologies",
          chokepoint: false
        },
        {
          item: "Bioink and high-resolution bioprinters",
          why: "3D bioprinting of organ structures requires bioinks with the right rheological and biological properties, and printers with resolution below 100 microns for capillary-scale features.",
          players: "Organovo, CELLINK (Bico Group), Poietis, Aspect Biosystems",
          chokepoint: false
        }
      ],
      leadingIndicators: [
        "Pig kidney xenotransplant survival: the 6-month mark is cleared (Andrews, 271 days, 2025); the next signal is a recipient sustaining function past one year, and survival/function data from United Therapeutics' EXPAND trial cohort.",
        "EXPAND (United Therapeutics) trial enrollment and outcomes, and whether eGenesis converts its pilot experience into its own pivotal trial.",
        "iPSC-retinal pigment epithelium trial results (Astellas/Healios Phase 2): success would establish iPSC-derived cell therapy safety in a human organ context and provide regulatory precedent.",
        "The Kidney Project wearable bioartificial kidney Phase 1 safety data: a safe hybrid device would create a new regulatory category for organ-function replacement that could extend to engineered organs.",
        "Publications from Doris Taylor's group (Texas Heart Institute) on human-scale decellularized heart repopulation: any report of >24 hours of ex vivo cardiac function at human scale would be a major advance."
      ]
    },

    people: [
      {
        name: "Shinya Yamanaka",
        role: "Senior Investigator",
        org: "Gladstone Institutes; Kyoto University CiRA",
        note: "Discoverer of induced pluripotent stem cells (Nobel Prize 2012); the iPSC technology he created is the foundational tool for patient-specific organ generation and is now used in every regenerative medicine program worldwide."
      },
      {
        name: "Anthony Atala",
        role: "Director, Wake Forest Institute for Regenerative Medicine",
        org: "Wake Forest School of Medicine",
        note: "Led the first successful transplantation of a tissue-engineered bladder in humans (2006) and has subsequently demonstrated bioprinted kidney and urethral structures; his lab is one of the most productive sources of clinical regenerative medicine advances."
      },
      {
        name: "Doris Taylor",
        role: "Director of Regenerative Medicine Research",
        org: "Texas Heart Institute",
        note: "Pioneered decellularization of whole hearts and their repopulation with stem cells in rat and large animal models; her whole-organ engineering approach is the leading strategy for scaffold-based heart regeneration."
      },
      {
        name: "George Church",
        role: "Professor of Genetics",
        org: "Harvard Medical School",
        note: "Co-founder of eGenesis, which produced pigs with 69 CRISPR edits for xenotransplantation; Church's genome engineering work is foundational to the xenotransplantation path and he remains an active scientific advisor."
      },
      {
        name: "Jennifer Lewis",
        role: "Hansjorg Wyss Professor of Biologically Inspired Engineering",
        org: "Harvard John A. Paulson School of Engineering and Applied Sciences",
        note: "Her lab developed the sacrificial Pluronic template method for printing thick vascularized tissues, the most promising current approach to the vascularization problem in 3D bioprinting; demonstrated in thick cardiac muscle patches."
      },
      {
        name: "Harald Ott",
        role: "Associate Professor of Surgery",
        org: "Massachusetts General Hospital / Harvard Medical School",
        note: "Developed decellularization of kidneys and lungs for scaffold-based organ bioengineering; published landmark papers in Nature Medicine demonstrating repopulation of decellularized rat and porcine kidneys with sustained filtration function ex vivo."
      }
    ],

    reading: [
      {
        title: "Induction of Pluripotent Stem Cells from Mouse Embryonic and Adult Fibroblast Cultures by Defined Factors",
        author: "Kazutoshi Takahashi, Shinya Yamanaka",
        year: 2006,
        type: "paper",
        note: "The founding iPSC paper published in Cell; the most important single paper in regenerative medicine of the last 30 years — defines the tool that makes patient-specific organ generation theoretically possible."
      },
      {
        title: "Regeneration and orthotopic transplantation of a bioartificial lung",
        author: "Thomas H. Petersen, Elizabeth A. Calle, Liping Zhao, Eun Jung Lee, et al. (Laura Niklason lab)",
        year: 2010,
        type: "paper",
        note: "Nature Medicine paper demonstrating that decellularized rat lung scaffolds repopulated with epithelial and endothelial cells could support gas exchange ex vivo; a landmark in scaffold-based whole-organ bioengineering."
      },
      {
        title: "Regenerative nephrology: renal repair, cell therapies, and renal bioengineering",
        author: "Benjamin D. Humphreys",
        year: 2018,
        type: "paper",
        note: "Journal of the American Society of Nephrology review covering the full landscape of kidney regeneration approaches; useful orientation to why the kidney is simultaneously the most-needed and most technically challenging organ target."
      },
      {
        title: "A living bioartificial kidney",
        author: "The Kidney Project (Shuvo Roy, William Fissell IV, et al.)",
        year: 2023,
        type: "article",
        note: "Project overview and preclinical results from the UCSF/Vanderbilt wearable bioartificial kidney; covers the hybrid device approach that may precede full organ bioengineering in clinical use."
      },
      {
        title: "Xenotransplantation: past, present, and future",
        author: "David K. C. Cooper, Mohamed Ezzelarab, Hidetaka Hara, et al.",
        year: 2016,
        type: "paper",
        note: "Current Opinion in Organ Transplantation review by the field's leading clinical researcher; covers the history, immunological barriers, and the CRISPR-era prospects for pig-to-human transplantation."
      },
      {
        title: "Bioprinting of 3D vascularized tissues",
        author: "Ali Khademhosseini, Robert Langer",
        year: 2016,
        type: "paper",
        note: "Nature Biomedical Engineering review covering the state of 3D bioprinting, vascularization strategies, and the gap between current capability and functional organ printing; concise technical overview of the problem and competing approaches."
      }
    ]
  }

);
