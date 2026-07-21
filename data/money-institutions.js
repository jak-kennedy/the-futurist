/* =============================================================================
   THE FUTURIST — MONEY & INSTITUTIONS DOMAIN
   Technologies: Stablecoins & Tokenized Finance
   Horizon: 30 years (target year 2056)
   ============================================================================= */

window.FUTURIST_DATA = window.FUTURIST_DATA || [];

/* entries appended below */

/* ============================================================
   1. STABLECOINS & TOKENIZED FINANCE
   ============================================================ */
window.FUTURIST_DATA.push({
    id: "digital-finance",
    name: "Stablecoins & Tokenized Finance",
    shortName: "Digital Money",
    tagline: "The quiet re-plumbing of money: dollars and securities that settle in seconds on a shared ledger, if trust and regulation hold.",
    domain: "money-institutions",
    glyph: "◉",
    status: "scaling",
    consequence: 6,

    probability: {
      value: 0.60,
      definition: "By 2056, stablecoins and tokenized money/securities settle a material share (author threshold: >10%) of global payment flows, and a meaningful slice of securities settlement occurs on-chain via atomic (T+0) delivery-versus-payment, making on-chain settlement mainstream, regulated financial infrastructure rather than a crypto niche.",
      basis: "Author estimate, anchored to institutional forecasts. Stablecoin market cap reached ~$300-315B by mid-2026 (up ~23% YoY from ~$161B in June 2024), ~99% USD-denominated, with Tether's USDT (~59%) and Circle's USDC (~24%) together ~83% of supply. Citi's base case projects $1.9T of stablecoins by 2030 and Standard Chartered ~$2T by end-2028. Tokenized real-world-asset forecasts diverge by definition: McKinsey's base case is ~$2T by 2030 (calling broad adoption 'still far away'), BCG/ADDX headline ~$16.1T by 2030, and Standard Chartered ~$30T by 2034 — the spread itself is the finding, since analysts measure different addressable markets. Reality check: as of mid-2026 only ~$60B of assets are tokenized and secondary liquidity is thin ('most of it isn't moving,' Forbes). 0.60 weighs genuine new regulatory legitimacy (MiCA, GENIUS Act) and institutional adoption against the sober truth that this is settlement re-plumbing, not new science: the base case is 'faster rails,' not 'money reinvented.'",
      range: [0.40, 0.75]
    },

    arrival: {
      optimistic: 2032,
      consensus: 2040,
      skeptical: 2056
    },

    whyItMatters: "If a material share of payments and securities settlement moves on-chain, the cost and delay of moving money collapse from days to seconds, and the intermediaries that live on that float and those fees lose their toll. The deeper stakes are monetary: who issues the digital dollar — banks, private companies, or central banks — decides who controls the plumbing of finance, and ~99% USD dominance makes stablecoins a quiet extension of dollar hegemony. The honest downside case is mundane: it stays a faster back-office rail that incumbents absorb, not a reinvention of money.",

    feynman: [
      {
        level: 1,
        label: "The kitchen-table version",
        body: "A stablecoin is a digital dollar. Not a dollar in a bank account, but a token that lives on a shared computer network — a ledger — and is designed to always be worth exactly one real dollar. Think of it like a casino chip. Inside the casino, a chip is as good as cash because the casino promises to swap it back for a dollar whenever you ask, and it keeps real money in the safe to back that promise. A stablecoin works the same way: a company issues the tokens and is supposed to hold a real dollar, or a safe government IOU, for every token it prints. Why bother? Because these tokens move like email. You can send one to anyone in the world in seconds, at any hour, without waiting for banks to open or paying big fees to move money across borders. 'Tokenizing' other things — a share of stock, a government bond — means doing the same trick: turning ownership into a token that can be sent and settled instantly. The catch, and it is a big one: the whole thing only works if you trust that the dollar in the safe is really there, and that you can always get it back."
      },
      {
        level: 2,
        label: "The mechanism",
        body: "Under the hood there are three moving parts: an issuer, a reserve, and a ledger. The issuer (Tether, Circle, PayPal, or a bank) takes in real dollars and mints an equal number of tokens. The reserve is what those dollars are parked in — ideally short-term US Treasury bills and cash, held by a custodian. The ledger is a blockchain (Ethereum, Solana, Tron, or a bank's private chain) that records who owns which tokens and lets them move without a central clearinghouse stamping each transfer. Redemption closes the loop: hand the token back, get a dollar, and the issuer burns the token. 'Tokenization' extends this to securities. A tokenized money-market fund or Treasury is a claim on the real asset, represented on-chain, so it can be held as collateral or settled instantly. The prize everyone chases is atomic settlement, also called delivery-versus-payment: the cash leg and the asset leg of a trade swap in the very same instant, so neither side is left exposed. Today's system takes a day or two (T+1) and routes through a chain of intermediaries. On-chain, in principle, it is T+0 — final in seconds. That single change, faster and cheaper settlement, is the real product, not the crypto wrapped around it."
      },
      {
        level: 3,
        label: "The hard part",
        body: "The hard part is not the software; the primitives (public-key crypto, hash trees, consensus) are decades old. The hard part is trust and plumbing. First, singleness of money. A dollar is useful because every dollar is interchangeable at par. A stablecoin only holds par if people believe the reserve is real and redeemable on demand; if doubt creeps in, the token trades below a dollar — a 'depeg' — and can trigger a run, as happened to TerraUSD in 2022. Accountants' attestations are not full audits, and the largest issuer, Tether (~$186B outstanding), is offshore and private. Second, reserve and yield dependence. Issuer profits come almost entirely from interest on the Treasuries they hold, so the business is really a rates trade wearing an infrastructure costume; earnings shrink when rates fall. Third, interoperability. Chains and bank ledgers are closed loops with no shared delivery-versus-payment standard, so most tokenized value just sits there — roughly $60B of assets are tokenized, but, as Forbes put it in 2026, 'most of it isn't moving.' Thin secondary liquidity is the tell that this is still pilots, not markets. The numbers people track: total stablecoin market cap (~$300-315B mid-2026), the USDT/USDC concentration (~83%), tokenized-Treasury AUM, and any depeg event."
      },
      {
        level: 4,
        label: "The frontier",
        body: "The real contest is over who owns the rails, and it splits three ways. The incumbent-led path (JPMorgan's Kinexys, Visa, Mastercard, BlackRock's BUIDL) treats on-chain settlement as back-office optimization: banks issue tokenized deposits, card networks settle in stablecoins, and the customer relationship never leaves the incumbent. The crypto-native path (Tether, Circle, Stripe/Bridge, PayPal) bets that dollar tokens become the default rail for cross-border and emerging-market payments before incumbents respond. The state path is the sharpest downside: the BIS, in its 2025 Annual Economic Report, argues stablecoins fail money's three core tests — singleness (par redemption), elasticity (a lender of last resort), and integrity (AML/KYC) — and that tokenized central-bank money should anchor the system instead; a serious depeg could hand regulators the excuse to constrain private issuance. The open questions: whether tokenized deposits or stablecoins win institutional settlement; whether atomic delivery-versus-payment gets a cross-chain standard or stays siloed; and whether growth is payments-driven (durable) or yield-driven (a rates artifact). Forecasts diverge by an order of magnitude — McKinsey's ~$2T tokenized-RWA base case by 2030 against Standard Chartered's ~$30T by 2034 — because analysts are measuring different addressable markets. That spread, not any single headline number, is the honest signal of how uncertain this still is."
      }
    ],

    timeline: {
      milestones: [
        {
          id: "m1",
          title: "EU MiCA stablecoin rules apply",
          kind: "policy",
          years: { optimistic: 2024, consensus: 2024, skeptical: 2024 },
          detail: "The EU's Markets in Crypto-Assets regulation applied its stablecoin titles (asset-referenced and e-money tokens) from 30 June 2024, with the full regime effective December 2024. It was the first comprehensive stablecoin framework in a major economy, imposing reserve, disclosure, and redemption rules and constraining large non-euro stablecoins to defend monetary sovereignty. Legitimacy, not new technology, is what changed.",
          done: true
        },
        {
          id: "m2",
          title: "US GENIUS Act signed into law",
          kind: "policy",
          years: { optimistic: 2025, consensus: 2025, skeptical: 2025 },
          detail: "The US GENIUS Act, passed by the House 308-122 on 17 July 2025 and signed 18 July 2025, created the first US federal payment-stablecoin law. It mandates 100% liquid reserves, monthly disclosure, and BSA/AML compliance, and bars issuers from claiming US-government backing or insurance. It routes global stablecoin demand into US Treasuries, a soft-power lever US policymakers have openly welcomed.",
          done: true
        },
        {
          id: "m3",
          title: "Card networks settle in stablecoins at scale",
          kind: "deployment",
          years: { optimistic: 2025, consensus: 2027, skeptical: 2030 },
          detail: "Visa launched live USDC settlement on Solana (with Cross River and Lead Bank) and reported a multi-billion-dollar annualized run-rate by late 2025; Mastercard has moved to add regulated-stablecoin settlement (announced around mid-2026, date still soft). Card networks carry two-sided exposure: they can capture stablecoin settlement or be disintermediated by it. Scale across major corridors is the gate this milestone tracks.",
          done: false
        },
        {
          id: "m4",
          title: "Stablecoin market cap crosses $500B",
          kind: "scaleup",
          years: { optimistic: 2026, consensus: 2028, skeptical: 2032 },
          detail: "Stablecoin supply crossed ~$300-315B by mid-2026; the next threshold, roughly $500B, is the near-term leading indicator. What matters is not the number but its source: payments-driven growth would confirm the infrastructure thesis, while yield-driven growth would reveal a rates trade. Citi and Standard Chartered project $1.9-2T by 2028-2030.",
          done: false
        },
        {
          id: "m5",
          title: "Bank tokenized-deposit rails reach scale",
          kind: "scaleup",
          years: { optimistic: 2025, consensus: 2027, skeptical: 2030 },
          detail: "JPMorgan's Kinexys reported over $3T cumulative tokenized-deposit volume by end-2025 at $2-5B/day (figures from vendor/summary sources; spot-check before load-bearing use), and deployed JPM Coin to the public Base chain. Bank-issued tokenized deposits, rather than private stablecoins, are the incumbents' preferred rail and arguably their strongest moat. Whether this scales beyond closed loops is the open question.",
          done: false
        },
        {
          id: "m6",
          title: "Tokenized funds become routine institutional collateral",
          kind: "scaleup",
          years: { optimistic: 2028, consensus: 2033, skeptical: 2045 },
          detail: "Tokenized US Treasuries and money-market funds (BlackRock BUIDL ~$2.4-2.9B, Franklin BENJI, Ondo) exceed ~$30B on public chains as of 2026 but mostly sit idle. This milestone is reached when tokenized MMFs become routine institutional collateral in repo and margin — the point at which tokenization stops being pilots and starts being market infrastructure. McKinsey's ~$2T-by-2030 base case still calls broad adoption 'far away.'",
          done: false
        },
        {
          id: "m7",
          title: "Material-share settlement (>10% of a major corridor or class)",
          kind: "scaleup",
          years: { optimistic: 2032, consensus: 2040, skeptical: 2056 },
          detail: "The arrival event: stablecoins or tokenized money settle more than 10% of a major payment corridor or securities-settlement class (author threshold). Optimistic 2032 assumes on-chain T+0 settlement runs in production at scale; skeptical 2056+ has it remain a back-office optimization while incumbents (banks, card networks, SWIFT/ISO 20022) absorb the benefits without ceding the rails.",
          done: false
        }
      ],
      branches: [
        {
          id: "b1",
          name: "Regulated-incumbent-led path",
          fromMilestone: "m5",
          probability: 0.45,
          summary: "Tokenized deposits, bank/consortium stablecoins, and card-network settlement win; the technology is absorbed as back-office optimization and incumbents keep the customer. Author's highest-probability base case — disintermediation resistance is strong. Backers: JPMorgan (Kinexys), Visa, Mastercard, BlackRock, Franklin Templeton, Citi, DBS.",
          milestones: [
            {
              id: "b1m1",
              title: "Bank consortium launches a shared tokenized-deposit settlement network",
              kind: "scaleup",
              years: { optimistic: 2027, consensus: 2030, skeptical: 2036 },
              detail: "Several global banks agree on a common tokenized-deposit standard interoperable across their ledgers and connected to ISO 20022 and RTGS rails. This is the incumbent answer to stablecoins; its arrival would signal that settlement modernization happens inside the regulated banking system rather than around it.",
              done: false
            },
            {
              id: "b1m2",
              title: "Regulated stablecoin settlement becomes standard across a major card network",
              kind: "deployment",
              years: { optimistic: 2027, consensus: 2031, skeptical: 2038 },
              detail: "Visa and/or Mastercard route a material share of merchant settlement through regulated stablecoins as a normal option. Incumbents capture the efficiency without losing the customer relationship, squeezing pure-play issuers toward a commodity rail.",
              done: false
            }
          ]
        },
        {
          id: "b2",
          name: "Crypto-native issuer-led path",
          fromMilestone: "m4",
          probability: 0.35,
          summary: "USDT/USDC and fintech issuers (Stripe/Bridge, PayPal PYUSD, Coinbase/Base) remain the dominant rails; stablecoins become default dollars for cross-border/B2B payments and emerging-market savings. Risk: reserve/depeg trust and regulatory tightening under GENIUS/MiCA.",
          milestones: [
            {
              id: "b2m1",
              title: "Stablecoins become a mainstream cross-border payment rail in a major corridor",
              kind: "deployment",
              years: { optimistic: 2027, consensus: 2031, skeptical: 2040 },
              detail: "A US-to-emerging-market remittance or B2B corridor moves a material share of volume onto stablecoin rails (Western Union's USDPT pilots and fintech on-ramps are early, pilot-stage signals). This is the branch where dollar tokens win distribution before banks can respond.",
              done: false
            },
            {
              id: "b2m2",
              title: "A pure-play issuer reaches durable payments-driven (not yield-driven) profitability",
              kind: "scaleup",
              years: { optimistic: 2029, consensus: 2034, skeptical: 2045 },
              detail: "Circle or a successor derives the majority of revenue from transaction and network economics rather than Treasury interest, breaking the rates dependence that makes today's issuer economics fragile. Absent this, the crypto-native path stays hostage to interest rates.",
              done: false
            }
          ]
        },
        {
          id: "b3",
          name: "CBDC / regulatory-constraint path",
          fromMilestone: "m2",
          probability: 0.20,
          summary: "Central banks and the BIS steer toward tokenized central-bank money and regulated tokenized deposits and constrain private stablecoins on 'singleness of money' grounds; or a depeg/run triggers rollback. The primary downside branch. Backers: BIS, ECB (digital euro), PBoC (e-CNY).",
          milestones: [
            {
              id: "b3m1",
              title: "A systemic depeg or large-issuer reserve event triggers regulatory rollback",
              kind: "policy",
              years: { optimistic: 2027, consensus: 2033, skeptical: 2045 },
              detail: "A run on a large stablecoin (Tether is systemically large, offshore, private, attested-not-audited) contaminates the 'infrastructure' narrative and prompts issuance limits or bans in major jurisdictions. This is the tail risk the BIS has been warning about.",
              done: false
            },
            {
              id: "b3m2",
              title: "A major economy's CBDC or tokenized-deposit standard crowds out private stablecoins",
              kind: "policy",
              years: { optimistic: 2030, consensus: 2038, skeptical: 2050 },
              detail: "The ECB's digital euro, China's e-CNY, or a US preference for bank tokenized deposits becomes the default digital settlement money, relegating private stablecoins to a niche. The state reclaims the rails on monetary-sovereignty grounds.",
              done: false
            }
          ]
        }
      ]
    },

    backcast: {
      today: [
        "Stablecoin market cap is ~$300-315B (mid-2026), ~99% USD-denominated; Tether's USDT (~59%) and Circle's USDC (~24%) are ~83% of supply — a duopoly.",
        "Tether reports ~$186B USDT outstanding backed by ~$122B in direct US Treasuries (BDO attestation, not a full audit) and ~$10B FY2025 net profit; it is systemically large yet private and offshore.",
        "Regulation arrived before new technology: the EU's MiCA (2024) and the US GENIUS Act (July 2025) are the first comprehensive stablecoin frameworks in major economies.",
        "Tokenized US Treasuries exceed ~$15B and total tokenized real-world assets on public chains top ~$32B (BlackRock's BUIDL ~$2.4-2.9B the largest), but secondary liquidity is thin — 'most of it isn't moving' (Forbes, 2026).",
        "Incumbents are already live: Visa settles in USDC, Circle (CRCL) went public in June 2025, Stripe closed its $1.1B Bridge acquisition (Feb 2025), and JPMorgan's Kinexys has processed trillions in tokenized-deposit volume."
      ],
      dependencies: [
        {
          name: "Regulation and legal finality",
          why: "Without a legal framework, stablecoins cannot be bank-integrated or treated as settlement money.",
          state: "GENIUS (US) and MiCA (EU) enacted 2024-25; implementing rules are still being written."
        },
        {
          name: "Custody and reserve integrity",
          why: "Credible 1:1 redemption requires audited reserves held by qualified custodians.",
          state: "Improving under GENIUS's 100%-reserve mandate, but attestation is not the same as a full audit."
        },
        {
          name: "Atomic settlement and oracle infrastructure",
          why: "Delivery-versus-payment plus price/proof oracles are what make on-chain settlement final and safe.",
          state: "Fragmented and largely closed-loop; no universal cross-chain DvP standard yet."
        },
        {
          name: "Bank and core-system integration",
          why: "On-chain rails must connect to ISO 20022, RTGS, and card networks to reach real payment flows.",
          state: "Early; JPMorgan, Visa, and Mastercard are furthest along."
        },
        {
          name: "On/off-ramps and deep secondary liquidity",
          why: "Value only moves if fiat conversion and secondary markets are deep.",
          state: "Thin secondary liquidity is the current binding weakness ('most of it isn't moving')."
        }
      ],
      supplyChain: [
        {
          item: "US Treasury bills and cash reserves",
          why: "The 'feedstock' backing every credible stablecoin and tokenized money-market fund.",
          players: "US Treasury; BlackRock, Franklin Templeton, BNY as reserve/MMF managers",
          chokepoint: true
        },
        {
          item: "Public settlement blockchains",
          why: "The ledgers that record token ownership and move value without a central clearinghouse.",
          players: "Ethereum, Solana, Tron (dominant USDT rail), Base (Coinbase), Arbitrum",
          chokepoint: false
        },
        {
          item: "Qualified custody and reserve attestation",
          why: "Where reserves are held and verified; the trust chokepoint of the whole system.",
          players: "Anchorage, BNY, Coinbase Custody, Fireblocks; BDO (attestation)",
          chokepoint: true
        },
        {
          item: "Oracles and cross-chain interoperability",
          why: "Price/proof feeds and bridges that connect otherwise-siloed ledgers.",
          players: "Chainlink; various bridge and messaging protocols",
          chokepoint: true
        },
        {
          item: "Fiat on/off-ramps and card-network rails",
          why: "The connection between tokens and the existing banking and payments system.",
          players: "Circle, Coinbase, Stripe/Bridge, Visa, Mastercard",
          chokepoint: false
        }
      ],
      leadingIndicators: [
        "Whether stablecoin market cap pushes toward/through $500B — and whether that growth is payments-driven or yield-driven.",
        "The non-USDT/USDC share rising as bank and fintech issuers launch GENIUS-licensed or consortium stablecoins (a signal the incumbent-led branch is winning).",
        "Cross-border and B2B corridor volumes on stablecoin rails (Visa/Mastercard run-rates; Western Union's USDPT pilots moving from pilot to scale).",
        "Any depeg, reserve shortfall, or major enforcement action — the clearest signal of the CBDC/regulatory-reversal branch.",
        "Whether tokenized money-market funds (BUIDL and peers) start being accepted as routine repo and margin collateral, or keep sitting idle."
      ]
    },

    people: [
      {
        name: "Jeremy Allaire",
        role: "Co-founder and CEO",
        org: "Circle (USDC)",
        note: "Leading advocate for regulated-stablecoin-as-infrastructure; drove Circle's 2025 IPO, the first pure-play stablecoin issuer to list on a US exchange."
      },
      {
        name: "Paolo Ardoino",
        role: "CEO",
        org: "Tether",
        note: "Runs the largest, most systemically important and most scrutinized issuer (~$186B USDT); bullish, offshore, and repeatedly criticized on reserve transparency."
      },
      {
        name: "Brian Armstrong",
        role: "Co-founder and CEO",
        org: "Coinbase",
        note: "Distributes USDC and operates the Base L2; frames on-chain settlement as the default financial rail and shares in USDC's reserve economics."
      },
      {
        name: "Larry Fink",
        role: "Chairman and CEO",
        org: "BlackRock",
        note: "The loudest incumbent tokenization advocate ('every stock, every bond can be tokenized'); BlackRock's BUIDL is the largest tokenized Treasury fund."
      },
      {
        name: "Hyun Song Shin",
        role: "Economic Adviser and Head of Research",
        org: "Bank for International Settlements",
        note: "The leading structural skeptic: argues stablecoins fail money's tests of singleness, elasticity, and integrity, and can play 'at best a supplementary role.'"
      },
      {
        name: "Christian Catalini",
        role: "Economist and founder, MIT Cryptoeconomics Lab",
        org: "MIT",
        note: "Co-creator of Diem/Libra; a rigorous academic voice on stablecoin design and the monetary implications of private digital money."
      }
    ],

    reading: [
      {
        title: "Annual Economic Report 2025, Chapter III: The next-generation monetary and financial system",
        author: "Bank for International Settlements",
        year: 2025,
        type: "report",
        note: "The definitive skeptical/structural case; lays out the singleness-elasticity-integrity argument for why stablecoins fail money's core tests."
      },
      {
        title: "Tokenization: A digital-asset deja vu",
        author: "McKinsey & Company",
        year: 2024,
        type: "report",
        note: "The conservative base case: ~$2T of tokenized assets by 2030 (excluding stablecoins), with broad adoption still 'far away' — a useful counterweight to bull headlines."
      },
      {
        title: "Money, Tokens, and Games: Blockchain's Next Billion Users and Trillions in Value",
        author: "Citi GPS",
        year: 2023,
        type: "report",
        note: "Citi's landmark tokenization report; source of the multi-trillion-dollar stablecoin and tokenized-asset base cases widely cited by the market."
      },
      {
        title: "Stablecoin supply to reach ~$2 trillion by 2028 (Standard Chartered Global Research note)",
        author: "Standard Chartered Global Research (Geoffrey Kendrick)",
        year: 2025,
        type: "forecast",
        note: "The aggressive institutional forecast for stablecoin growth; also home to the ~$30T-by-2034 tokenized-asset figure that anchors the top of the range."
      },
      {
        title: "Relevance of On-Chain Asset Tokenization in 'Crypto Winter'",
        author: "Boston Consulting Group and ADDX",
        year: 2022,
        type: "report",
        note: "Source of the widely quoted ~$16.1T tokenized-asset-by-2030 headline; illustrates how wide the forecast spread is versus McKinsey's ~$2T."
      },
      {
        title: "BlackRock 2025 Chairman's Letter to Investors",
        author: "Larry Fink",
        year: 2025,
        type: "article",
        note: "The clearest statement of the incumbent tokenization bull case ('if SWIFT is the postal service, tokenization is email')."
      }
    ]
});
