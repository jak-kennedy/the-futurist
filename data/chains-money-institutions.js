/* Supply-chain deep dives — Money & Institutions domain. Keyed by technology id. */

window.FUTURIST_CHAINS = window.FUTURIST_CHAINS || {};

/* entries appended below */

/* ============================================================
   1. STABLECOINS & TOKENIZED FINANCE (digital-finance)
   Financial value chain: money plumbing, not a physical one.
   Tiers mapped: networks + reserve T-bills -> issuance/custody/
   tokenization/oracles -> exchanges/payment rails/bank integration
   -> merchant & institutional adoption/settlement.
   ============================================================ */
window.FUTURIST_CHAINS["digital-finance"] = {
  overview: "This is a financial value chain, not a physical one: the 'raw materials' are public blockchains and the US Treasuries that back the coins, and the 'product' is settled money. Power concentrates in two places: a USDT/USDC issuer duopoly (~83% of a ~$300-315B, ~99% USD supply) that holds the reserve trust, and the regulatory frameworks (GENIUS, MiCA) that grant it legitimacy. Issuance and card-network settlement are mature; what is missing is cross-chain interoperability and deep secondary liquidity, so most tokenized value stays parked rather than moving.",
  tiers: [
    {
      name: "Raw materials & feedstocks",
      links: [
        {
          item: "Public settlement blockchains",
          role: "the ledgers that record and settle transfers",
          players: "Ethereum, Solana, Tron (dominant USDT rail), Base (Coinbase L2), Arbitrum; private bank chains (JPM Kinexys)",
          geography: "Global permissionless networks; Tron carries much emerging-market USDT",
          concentration: "diversified",
          chokepoint: false,
          risk: "Multiple credible chains exist, so no single network is a hard point of failure; the weakness is that they are closed loops that do not interoperate."
        },
        {
          item: "US Treasuries & cash reserves",
          role: "the assets backing coins one-for-one",
          players: "Tether (~$122B direct T-bills), BlackRock and Franklin Templeton (tokenized MMFs), BNY (reserve custody)",
          geography: "US Treasury market; Tether reserves held offshore",
          concentration: "concentrated",
          chokepoint: false,
          risk: "The Treasury market itself is deep and diversified; the fragility is issuer-side, since reserve integrity depends on attestations rather than full audits.",
          fix: "GENIUS mandates 100% liquid reserves and monthly disclosure; qualified custody is expanding."
        }
      ]
    },
    {
      name: "Components & subsystems",
      links: [
        {
          item: "Stablecoin issuance",
          role: "mints and redeems the dollar tokens",
          players: "Tether (USDT, private), Circle (USDC, CRCL), PayPal/Paxos (PYUSD), Stripe/Bridge (USDB), Western Union USDPT via Anchorage",
          geography: "US-regulated issuers (Circle, Paxos); Tether offshore",
          concentration: "concentrated",
          chokepoint: true,
          risk: "Tether (~59%) and Circle (~24%) are a ~83% duopoly, and Tether is systemically large, offshore and attested-not-audited; a depeg or run would contaminate the whole narrative.",
          fix: "GENIUS/MiCA reserve and disclosure rules aim to harden issuers; bank and fintech issuers are entering to broaden the base."
        },
        {
          item: "Qualified custody",
          role: "safekeeps reserves and tokenized assets",
          players: "Anchorage, Coinbase Custody, BNY, Fireblocks",
          geography: "US-concentrated qualified custodians",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Custody is improving under GENIUS, but attestation is not a full audit and reserve verification remains a trust gap."
        },
        {
          item: "Tokenization platforms (RWA infra)",
          role: "wraps treasuries and funds as on-chain tokens",
          players: "Securitize (BUIDL infra), Ondo, Franklin Templeton (BENJI)",
          geography: "US-centric issuance platforms",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Tokenized value is mostly parked treasuries in siloed pilots; secondary trading is thin ('most of it isn't moving')."
        },
        {
          item: "Oracles & proof feeds",
          role: "prices assets and proves reserves on-chain",
          players: "Chainlink (dominant oracle network)",
          geography: "Global, cross-chain",
          concentration: "single-source",
          chokepoint: false,
          risk: "Price and proof feeds concentrate on one dominant oracle network; a compromised or wrong feed can mislead settlement, though it is not the binding cap on adoption."
        }
      ]
    },
    {
      name: "Manufacturing & integration",
      links: [
        {
          item: "Exchanges & fiat on/off-ramps",
          role: "converts between fiat and tokens",
          players: "Coinbase (COIN), Robinhood (HOOD)",
          geography: "US-regulated venues; Robinhood tokenized stocks in EU",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Ramps and secondary markets are thin, so liquidity in and out of tokens is uneven despite a few large venues."
        },
        {
          item: "Card-network settlement",
          role: "settles card flows in stablecoins",
          players: "Visa (USDC settlement on Solana), Mastercard (regulated-stablecoin settlement)",
          geography: "Global card rails, US-led",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Card networks carry two-sided exposure: they can capture stablecoin settlement or be disintermediated by it."
        },
        {
          item: "Bank rails & core-system integration",
          role: "connects ledgers to bank and messaging rails",
          players: "JPMorgan Kinexys (>$3T cumulative), DBS, Citi",
          geography: "US and Singapore bank consortia lead",
          concentration: "concentrated",
          chokepoint: true,
          risk: "Chains and bank ledgers are closed loops with no universal delivery-versus-payment standard, so connecting to ISO 20022/RTGS/card rails is early and fragmented; without settlement finality across systems, tokenization stays siloed.",
          fix: "JPM Kinexys, Visa and Mastercard are building the first at-scale bank-ledger bridges."
        }
      ]
    },
    {
      name: "Deployment & operations",
      links: [
        {
          item: "Merchant & payments checkout",
          role: "accepts stablecoins at point of sale",
          players: "Stripe/Bridge (stablecoin-payments API, USDB), Shopify stablecoin checkout",
          geography: "Global e-commerce",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Merchant acceptance is early and depends on the payments API layer; usage is still thin relative to card volume."
        },
        {
          item: "Cross-border remittance & B2B",
          role: "moves value across borders on stablecoin rails",
          players: "Western Union USDPT (pilot via Anchorage on Solana), Tron/USDT corridors",
          geography: "Emerging markets (Philippines, Bolivia pilots)",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Corridors are pilot-stage, not scaled, and legacy remittance players face margin compression as they self-cannibalize."
        },
        {
          item: "Institutional collateral & settlement",
          role: "uses tokenized funds as collateral and settles",
          players: "BlackRock BUIDL (collateral/repo), Franklin BENJI, Robinhood tokenized equities (EU, ~150k users via Arbitrum)",
          geography: "Institutional; EU for tokenized equities",
          concentration: "concentrated",
          chokepoint: false,
          risk: "Secondary liquidity is thin (tokenized market ~$60B, mostly parked treasuries), so on-chain settlement remains a back-office optimization rather than a liquid market."
        }
      ]
    }
  ],
  topChokepoints: [
    {
      item: "Regulation & legal finality (GENIUS / MiCA)",
      why: "Without a legal framework stablecoins cannot be bank-integrated, and the BIS argues they fail money's singleness, elasticity and integrity tests. A regulatory reversal or a state preference for CBDCs is the single most binding structural risk on the chain."
    },
    {
      item: "Reserve / trust concentration in USDT/USDC",
      why: "Tether and Circle are a ~83% duopoly, and Tether is systemically large, offshore, private and attested-not-audited. A single large-issuer depeg or run would poison the entire 'infrastructure' thesis and drag listed exposure with it."
    },
    {
      item: "Interoperability & settlement finality",
      why: "Chains and bank ledgers are closed loops with no universal delivery-versus-payment standard. Without cross-system interoperability, tokenization stays siloed pilots where '$60B, most of it isn't moving.'"
    }
  ],
  geopolitics: "Roughly 99% of stablecoins are USD-denominated, so their growth is a soft-power extension of dollar hegemony: the GENIUS Act routes global stablecoin demand into US Treasuries (Tether alone holds ~$122B), a T-bill-demand lever US policymakers explicitly welcome. The EU's MiCA pushes euro-denominated tokens and caps large non-euro stablecoins to defend monetary sovereignty. Stablecoins, notably Tron/USDT in emerging markets, also route around banking systems, a capital-control and sanctions-evasion vector that states will resist. A CBDC bloc, China's e-CNY and the ECB's digital euro, offers a state-issued alternative that could crowd out private stablecoins in some jurisdictions, the primary downside path the BIS favors on 'singleness of money' grounds."
};
