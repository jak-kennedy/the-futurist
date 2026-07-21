/* Investable maps — Money & Institutions domain. Keyed by technology id. */

window.FUTURIST_INVEST = window.FUTURIST_INVEST || {};

/* entries appended below */

/* -----------------------------------------------------------------------------
   STABLECOINS & TOKENIZED FINANCE  (digital-finance)
   The weakest "deep tech" fit in the set: this is re-plumbing of money and
   securities settlement, not new science. Downside-first. The durable exposure
   is issuers, rails, and asset managers; incumbents carry both optionality and
   disruption risk; the pure crypto names trade with sentiment, not fundamentals.
   ourProbability mirrors the core data probability of 0.60.
   Tickers verified July 2026. Private where the winner is not listed.
   ----------------------------------------------------------------------------- */
window.FUTURIST_INVEST["digital-finance"] = {
  thesis: "Over 30 years stablecoins and tokenized money/securities could become mainstream, regulated settlement infrastructure, moving a material share of payments and some securities settlement on-chain. This is plumbing, not new science: the durable public exposure is the issuers, the payment rails, and the asset managers that tokenize funds, not a token-price bet. The base case is faster, cheaper settlement of the same dollars and bonds, and the incumbents are as likely to capture that as the crypto-native upstarts.",

  howToThink: "Think in four buckets and stay sober. The cleanest structural exposure is the issuers and rails, Circle, Coinbase, Tether (private), and the payment networks, but their economics ride on Treasury yields and crypto sentiment, so the equity is volatile and not a clean infrastructure bet. The payment incumbents, Visa and Mastercard, carry two-sided exposure: they can capture stablecoin settlement or be disintermediated by it, which is why they read as watch, not long. The most durable incumbents may be the asset managers tokenizing money-market funds (BlackRock, Franklin) and the banks running tokenized-deposit rails (JPMorgan). The bear case is blunt and central: this could be reversed by regulation or crowded out by central-bank digital currencies, a single large-issuer reserve run could contaminate the whole narrative, and the benefits could simply be absorbed by the incumbents while pure-plays get squeezed to a commodity rail.",

  conviction: {
    rating: "Medium",
    ourProbability: 0.60,
    street: "The market treats regulated stablecoins as a validated, fast-growing payments layer after MiCA and the GENIUS Act, and prices the listed issuers for continued adoption while debating whether they are infrastructure or crypto beta.",
    edge: "We separate the durable rails and asset-manager tokenization from the volatile, yield-dependent pure-plays, and weight the incumbent-capture and regulatory-reversal branches more heavily than the disintermediation story the bulls tell.",
    horizon: "Exposure is investable today through issuers and rails, but the thesis is paced by regulation and reserve trust; a material-share settlement inflection is more a 2030s-into-2040s question, and may never fully arrive."
  },

  sCurve: {
    stage: "inflection",
    points: [
      { year: 2026, value: 340, unit: "$B", note: "stablecoin supply ~$300-315B (USDT ~59%, USDC ~24%) plus ~$32B tokenized RWA on public chains; mid-2026, ranges by source" },
      { year: 2030, value: 1900, unit: "$B", note: "Citi base case ~$1.9T stablecoins by 2030; McKinsey ~$2T tokenized RWA (excl. stablecoins) by 2030, calling broad adoption 'still far away'" },
      { year: 2034, value: 30000, unit: "$B", note: "Standard Chartered ~$30T tokenized RWA by 2034 including trade finance and bonds; the bullish end of a very wide analyst spread ($2T-$30T by definition)" },
      { year: 2056, value: 100000, unit: "$B", basis: "author estimate, very wide band; assumes on-chain settlement of money and securities becomes mainstream regulated infrastructure, blending stablecoin supply and tokenized-asset outstanding" }
    ]
  },

  marketMap: [
    {
      segment: "Issuers & crypto-native infra",
      chainNode: "Stablecoin issuance, custody, and on-ramps",
      companies: [
        {
          name: "Circle Internet Group",
          ticker: "NYSE:CRCL",
          exposure: "pure-play",
          stance: "long",
          purity: "high",
          cap: "mid",
          horizon: "near",
          region: "US",
          note: "The only listed pure-play stablecoin issuer (USDC); public June 2025, ~$15B cap mid-2026. Bear case is that revenue is Treasury interest, so earnings fall with rates, it pays Coinbase ~$900M/yr for distribution, and the stock is down ~70% from its post-IPO spike."
        },
        {
          name: "Coinbase Global",
          ticker: "NASDAQ:COIN",
          exposure: "core",
          stance: "long",
          purity: "med",
          cap: "large",
          horizon: "near",
          region: "US",
          note: "Shares USDC economics (~$355M interest income Q3'25), runs the Base L2, custody and exchange. Bear case is diversified crypto exposure that trades with token sentiment, not settlement fundamentals, so it is not a clean infrastructure bet."
        },
        {
          name: "Robinhood Markets",
          ticker: "NASDAQ:HOOD",
          exposure: "adjacent",
          stance: "long",
          purity: "low",
          cap: "large",
          horizon: "mid",
          region: "US",
          note: "Tokenized US stocks live in the EU via Arbitrum and is building its own L2, a real tokenization option. Bear case is that tokenized equities are a tiny slice of a retail-brokerage business whose earnings swing with trading volumes and crypto cycles."
        },
        {
          name: "Tether",
          ticker: "private",
          exposure: "pure-play",
          stance: "watch",
          purity: "high",
          cap: "private",
          horizon: "mid",
          region: "Offshore",
          note: "The dominant issuer (~$186B USDT, ~59% share, ~$10B FY25 profit, ~$122B direct US Treasuries), so the single most systemically important name, and it is private with no public equity (a reported ~$500B raise is unconfirmed). Bear case is that it is offshore, attested-not-audited, and a run here would poison the entire infrastructure narrative and drag COIN and CRCL with it."
        }
      ]
    },
    {
      segment: "Payment incumbents (optionality + at-risk)",
      chainNode: "Card-network and fintech settlement rails",
      companies: [
        {
          name: "Visa",
          ticker: "NYSE:V",
          exposure: "adjacent",
          stance: "watch",
          purity: "low",
          cap: "mega",
          horizon: "mid",
          region: "US",
          note: "USDC settlement is live with a multi-billion annualized run-rate, so it can route stablecoin flows over its network. Bear case is two-sided: the same rails that could ride stablecoins could also be disintermediated by them, and the settlement fee pool is what is at stake."
        },
        {
          name: "Mastercard",
          ticker: "NYSE:MA",
          exposure: "adjacent",
          stance: "watch",
          purity: "low",
          cap: "mega",
          horizon: "mid",
          region: "US",
          note: "Added regulated-stablecoin settlement (announced 2026, keep the date soft), matching Visa's optionality. Bear case is identical two-sided exposure: capture the settlement layer or be routed around by native on-chain rails."
        },
        {
          name: "PayPal",
          ticker: "NASDAQ:PYPL",
          exposure: "core",
          stance: "watch",
          purity: "low",
          cap: "large",
          horizon: "mid",
          region: "US",
          note: "Issues PYUSD (~$2.7-2.8B, the #3 stablecoin via Paxos), a genuine first-party stablecoin product. Bear case is a distant third with ~1.4% share against the USDT/USDC duopoly, and stablecoins are a small option inside a pressured checkout franchise."
        },
        {
          name: "Stripe (Bridge)",
          ticker: "private",
          exposure: "core",
          stance: "long",
          purity: "med",
          cap: "private",
          horizon: "mid",
          region: "US",
          note: "Bought Bridge for $1.1B (closed Feb 2025) to offer stablecoin payments as an API (USDB and white-labeled partner coins), arguably the cleanest 'rails' play. Bear case is that it is private with no public exposure, and stablecoins are one line inside a broad payments company."
        }
      ]
    },
    {
      segment: "Asset managers & tokenization",
      chainNode: "Tokenized money-market funds and RWA platforms",
      companies: [
        {
          name: "BlackRock",
          ticker: "NYSE:BLK",
          exposure: "adjacent",
          stance: "long",
          purity: "low",
          cap: "mega",
          horizon: "mid",
          region: "US",
          note: "Runs BUIDL (~$2.4-2.9B), the largest tokenized Treasury fund, and Fink is the loudest tokenization advocate ('every stock, every bond can be tokenized'). Bear case is that tokenized AUM is a rounding error inside a multi-trillion asset manager, so the exposure is real but heavily diluted."
        },
        {
          name: "Franklin Resources",
          ticker: "NYSE:BEN",
          exposure: "adjacent",
          stance: "long",
          purity: "low",
          cap: "large",
          horizon: "mid",
          region: "US",
          note: "Early mover with the BENJI / FOBXX tokenized money-market fund (~$0.85-0.9B). Bear case is the same dilution, a small tokenized book inside a traditional manager facing fee pressure, and thin secondary liquidity in tokenized funds."
        },
        {
          name: "Securitize",
          ticker: "private",
          exposure: "enabler",
          stance: "long",
          purity: "high",
          cap: "private",
          horizon: "mid",
          region: "US",
          note: "The tokenization infrastructure behind BlackRock's BUIDL, a genuine arms-dealer to the asset managers. Bear case is that it is private with no public exposure, and tokenization platforms remain fragmented pilots where 'most of it isn't moving' (Forbes, mid-2026)."
        }
      ]
    },
    {
      segment: "Banks & tokenized deposits",
      chainNode: "Bank-issued tokenized-deposit rails",
      companies: [
        {
          name: "JPMorgan",
          ticker: "NYSE:JPM",
          exposure: "adjacent",
          stance: "long",
          purity: "low",
          cap: "mega",
          horizon: "mid",
          region: "US",
          note: "Kinexys has processed >$3T cumulative tokenized-deposit volume ($2-5B/day, vendor-sourced so treat as approximate), arguably the strongest incumbent moat, absorbing the tech as back-office settlement optimization while keeping the customer. Bear case is two-sided: it also funds itself with deposits that stablecoins could pull out of the banking system, hitting net interest margin."
        }
      ]
    }
  ],

  atRisk: [
    { name: "Western Union", ticker: "NYSE:WU", note: "Legacy remittance is self-cannibalizing into its own stablecoin (USDPT, pilot-stage) to survive; margin compresses either way as stablecoin rails undercut cross-border fees. A structural loser over the 30-year horizon." },
    { name: "Correspondent banking & SWIFT", ticker: "various", note: "Cross-border messaging and settlement fees are pressured if on-chain DvP replaces the multi-hop correspondent chain (Fink: 'if SWIFT is the postal service, tokenization is email'). SWIFT is a bank cooperative, so no clean short exists." },
    { name: "Deposit-funded banks", ticker: "various", note: "The BIS flags that stablecoins could drain deposits out of the banking system, hitting credit provision and net interest margin, especially for smaller deposit-reliant banks with no tokenization strategy of their own." }
  ],

  lastReviewed: "2026-07"
};
