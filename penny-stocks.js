/* =====================================================================
   penny-stocks.js
   Adds the "Penny Stocks & Small Caps" module to the Market Kings track.
   Load AFTER the main script in index.html:
     <script src="penny-stocks.js"></script>
   Safe to load twice: it skips itself if the module already exists.
   ===================================================================== */
(function () {
  'use strict';
  try {
    if (typeof TRACKS === 'undefined' || !TRACKS.market) { return; }
    var t = TRACKS.market;
    var MOD_TITLE = 'Penny Stocks & Small Caps';
    var already = t.modules.some(function (m) { return m.title === MOD_TITLE; });
    if (already) { return; }

    var data = {
 "title": "Penny Stocks & Small Caps",
 "desc": "A risk-first guide: how low-priced stocks really work, how pump-and-dumps trap people, and how to size and protect speculative trades",
 "lessons": [
  {
   "id": "penny-1",
   "title": "What Penny Stocks Really Are",
   "sub": "Definition, where they trade, and why the odds look different than the stories",
   "terms": [
    {
     "w": "Penny Stock",
     "d": "A stock that trades below $5 per share, usually issued by a very small company. The SEC uses this cutoff, with exceptions for some exchange-listed companies.",
     "x": "A $0.40 stock is a penny stock. A $4.90 stock can be too. A $150 stock never is."
    },
    {
     "w": "OTC Markets",
     "d": "Over-the-counter trading networks for stocks that are not listed on a major exchange like the NYSE or Nasdaq. Standards are lower, and some tiers require very little public reporting.",
     "x": "OTCQX has the strictest standards of the OTC tiers. The Pink tier is the loosest, and some companies there publish little current information."
    },
    {
     "w": "Market Cap",
     "d": "Share price times shares outstanding: the total market value of the company. Rough labels: small cap about $300M to $2B, micro cap about $50M to $300M, nano cap under $50M.",
     "x": "10 million shares at $0.50 = a $5 million market cap. That is a nano cap."
    },
    {
     "w": "Listing Standards",
     "d": "Minimum requirements (financials, share price, governance) a company must keep to stay listed on an exchange. Fail them and the stock can be delisted, often moving to the OTC markets.",
     "x": "A stock that stays below $1 for too long can receive a deficiency notice from Nasdaq or NYSE, and may be delisted if it does not fix the problem."
    }
   ],
   "teach": [
    {
     "n": 1,
     "t": "A penny stock is defined by price and size, not by quality",
     "x": "The SEC generally describes a penny stock as a security from a very small company that trades below $5 per share. That label says nothing about whether the business is good or bad. It tells you the company is small, usually thinly traded, and usually watched by far fewer people than a company like Apple or Walmart."
    },
    {
     "n": 2,
     "t": "Where a stock trades changes your risk",
     "x": "<strong>Exchange-listed</strong> small caps (Nasdaq, NYSE American) must meet listing standards and file regular reports with the SEC. <strong>OTC stocks</strong> have looser rules. The top OTC tiers require some reporting, while the lowest tier can have very little public information. Less information means more room for rumors and hype, and less ability for you to verify what you are buying."
    },
    {
     "n": 3,
     "t": "A low share price is not a cheap company",
     "x": "Two things draw people in. The price looks cheap, so they imagine a 10x move from $0.10 to $1.00. And small stocks really can move 50% or 100% in a day, which makes the stories exciting. But price per share says nothing about value. A $0.05 stock with 2 billion shares outstanding is a $100 million company."
    },
    {
     "n": 4,
     "t": "The part the stories leave out",
     "x": "You hear about the person who turned $1,000 into $12,000. You rarely hear from the many who lost most of their money, because those stories do not get shared. This is called <strong>survivorship bias</strong>. Research on retail day traders in places like Taiwan and Brazil has found that the large majority lose money and only a very small fraction are consistently profitable. One big win is a data point, not a strategy."
    },
    {
     "n": 5,
     "t": "How this module is different",
     "x": "This module teaches the risks first. By the end you will know how to check whether a stock is real, how to spot a pump-and-dump, how to size a position so one bad trade cannot hurt you, and how to practice on a simulator before using real money."
    },
    {
     "n": 6,
     "t": "Educational only",
     "x": "This is educational content, not financial advice. Low-priced stocks can lose most or all of their value quickly. Only risk money you can afford to lose completely."
    }
   ],
   "analogy": "Penny stocks are like a flea market compared with a department store. A few vendors are genuinely good and growing. Many are selling things you cannot inspect, and a few are not real at all. The low price tag does not tell you which is which. Your research does.",
   "quiz": {
    "q": "A coworker tells you he turned $2,000 into $14,000 trading penny stocks in a few weeks and says you should do the same. What is the most accurate way to think about this?",
    "choices": [
     "It proves penny stocks are a reliable way to make fast money, because he did it in just a few weeks",
     "It is one result from a large group of traders, and the many who lost rarely talk about it, so it does not show what a typical trader earns",
     "It proves he is a skilled trader who will be able to repeat the result whenever he wants",
     "It shows penny stocks always rise if you buy them early enough and hold on"
    ],
    "correct": 1,
    "explain": "This is survivorship bias. You hear about winners because they talk about it. Studies of retail day traders find that most lose money. One big win could be luck, a promotion he happened to catch, or a position that gave the gains back later.",
    "lesson": "A single success story is not evidence of a repeatable edge. Always ask what happened to everyone else who tried the same thing."
   }
  },
  {
   "id": "penny-2",
   "title": "Liquidity, Spreads & Getting Stuck",
   "sub": "Why you can be right about a stock and still not be able to cash out",
   "terms": [
    {
     "w": "Liquidity",
     "d": "How easily you can buy or sell without moving the price. High liquidity means many buyers and sellers. Low liquidity means few, so your own order can push the price.",
     "x": "Apple trades tens of millions of shares a day. A tiny OTC stock may trade only a few thousand."
    },
    {
     "w": "Bid-Ask Spread",
     "d": "The gap between the highest price a buyer will pay (the bid) and the lowest price a seller will accept (the ask). You buy at the ask and sell at the bid, so the spread is a built-in cost.",
     "x": "Bid $0.48, ask $0.52. Buy at $0.52, sell right away at $0.48, and you lose $0.04 a share without the price moving."
    },
    {
     "w": "Slippage",
     "d": "The difference between the price you expected and the price you actually got, usually because the market was thin or moving fast.",
     "x": "You click buy expecting $1.00. It fills at $1.08 because few sellers were offering shares."
    },
    {
     "w": "Limit Order",
     "d": "An order that only fills at your price or better. A market order fills at whatever is available right now, which can be very different from the last price in a thin stock.",
     "x": "A limit buy at $1.00 never pays more than $1.00, but it may not fill. A market buy might fill at $1.12."
    },
    {
     "w": "Trading Halt",
     "d": "A pause where trading stops in a stock, usually because of pending news or extreme volatility. You cannot buy or sell until it resumes.",
     "x": "A stock halts while you hold it and reopens 40% lower. You could not exit during the halt."
    }
   ],
   "teach": [
    {
     "n": 1,
     "t": "You make money on paper. You make it real when you sell",
     "x": "A position showing +60% means nothing until someone buys your shares at that price. In a thin stock, the screen price can come from a few small trades. If you try to sell a larger position, you may be selling into very few buyers and pushing the price down yourself."
    },
    {
     "n": 2,
     "t": "The spread is a cost you pay every trade",
     "x": "Take bid $0.48 and ask $0.52. If you buy 1,000 shares at $0.52 you pay $520. If you immediately sell at $0.48 you receive $480. You lost $40, <strong>about 7.7%</strong>, and the price never moved. In a large stock the spread is often a penny. In a penny stock it can be several percent. You start every trade in a hole, so the move has to be bigger just to break even."
    },
    {
     "n": 3,
     "t": "Use limit orders, not market orders",
     "x": "A market order says give me shares at any price. In a thin stock the next available seller may be far above the last price. A <strong>limit order</strong> sets the maximum you will pay, or the minimum you will accept. It might not fill, and that is the price of protection. Missing a trade is cheaper than overpaying for one."
    },
    {
     "n": 4,
     "t": "Check dollar volume before you buy",
     "x": "Look at average daily volume times price. 30,000 shares a day at $1.20 is about $36,000 traded in a full day. If you want to buy $7,200 worth, you are 20% of a typical day, and getting out could be hard. A common rule of thumb is to keep your position to a small fraction of normal daily volume, often a few percent at most, so you can leave without moving the price. Compare your planned size to the volume before every trade."
    },
    {
     "n": 5,
     "t": "Stops do not guarantee your exit price",
     "x": "A stop-loss order turns into a market order once your price is hit. If the stock gaps down overnight or halts, it fills at the next available price, which can be far below your stop. In penny stocks, gaps are common. That is why position size, not the stop alone, is your real protection (covered in lesson 6)."
    },
    {
     "n": 6,
     "t": "Educational only",
     "x": "This is educational content, not financial advice. Low-priced stocks can lose most or all of their value quickly. Only risk money you can afford to lose completely."
    }
   ],
   "analogy": "Liquidity is like the exit doors in a theater. A big stadium has dozens of wide exits, so a crowd leaves calmly. A tiny theater with one narrow door gets stuck when everyone tries to leave at once. A penny stock can look great inside until you need the door.",
   "quiz": {
    "q": "A stock shows bid $0.48 and ask $0.52. You buy 1,000 shares at the ask, then immediately sell them at the bid with no other price change. About how much did the spread cost you?",
    "choices": [
     "Nothing, because the stock price did not change",
     "About 0.8% ($4 on the $520 you paid)",
     "About 3.8% ($20 on the $520 you paid)",
     "About 7.7% ($40 on the $520 you paid)"
    ],
    "correct": 3,
    "explain": "You paid $520 at the ask (1,000 x $0.52) and received $480 at the bid (1,000 x $0.48). The $40 difference is about 7.7% of what you paid. The spread is a cost on every round trip, and in thin stocks it can be large.",
    "lesson": "Always compare the spread to the move you expect. If a 5% gain only gets you back to break-even after the spread, the trade is not worth taking."
   }
  },
  {
   "id": "penny-3",
   "title": "Pump-and-Dump Schemes",
   "sub": "How the trap works, the red flags, and what to do when you see one",
   "terms": [
    {
     "w": "Pump-and-Dump",
     "d": "A scheme where insiders or promoters buy a cheap, thinly traded stock, hype it to attract buyers, and sell their own shares into that buying. The price collapses and the late buyers take the losses. It is securities fraud.",
     "x": "A $0.03 stock jumps to $0.20 on social media hype, then falls back to $0.02 in a day. Early holders sold on the way up. Late buyers are stuck."
    },
    {
     "w": "Promoter",
     "d": "A person or company paid in cash or shares to publicize a stock. Paid promotion is not always illegal, but undisclosed or misleading promotion can be.",
     "x": "A newsletter, YouTuber, or social media account touting a stock may be paid, or may already own it."
    },
    {
     "w": "Shell Company",
     "d": "A company with little or no real operations or assets. Shells are often used for pumps because there is no business reality to contradict the story.",
     "x": "A company with no revenue, no product, and a press release about a huge partnership it does not name."
    },
    {
     "w": "Trading Suspension",
     "d": "When the SEC temporarily stops trading in a stock, for up to 10 trading days, because of questions about the accuracy of public information or possible manipulation.",
     "x": "A stock spikes after claims that cannot be verified. The SEC suspends trading while it looks into it."
    },
    {
     "w": "Exit Liquidity",
     "d": "Slang for the buyers whose purchases let earlier holders sell. If you are buying because of a promotion, you may be the exit liquidity.",
     "x": "The promoter sells 5 million shares. Someone has to buy them. That is you, if you bought the hype."
    }
   ],
   "teach": [
    {
     "n": 1,
     "t": "The four stages",
     "x": "<strong>1. Accumulate:</strong> insiders quietly buy a cheap, ignored stock.<br><br><strong>2. Promote:</strong> hype spreads through emails, social media, chat groups, stock alerts, or paid influencers, often with claims like next 10x or huge news coming.<br><br><strong>3. Pump:</strong> buyers rush in, volume and price jump, and more people see the chart and join.<br><br><strong>4. Dump:</strong> the insiders sell into that demand. Buying dries up, the price collapses, and the late buyers are left holding shares nobody wants."
    },
    {
     "n": 2,
     "t": "Why penny stocks are the favorite target",
     "x": "Low price and low volume mean a small amount of money can move the price a lot. There is often little reliable public information, so a story is easy to invent and hard to check. And the shares may trade over the counter, where oversight is lighter."
    },
    {
     "n": 3,
     "t": "Red flags checklist",
     "x": "&bull; The tip came to you unsolicited (a message, email, text, or chat group)<br>&bull; Urgency: buy tonight, before the news<br>&bull; Guaranteed or huge returns<br>&bull; No recent SEC filings, or no real revenue<br>&bull; Volume spikes with no real news from the company<br>&bull; The promoter does not say who paid them, or says it is secret<br>&bull; Press releases full of vague partnerships and buzzwords<br><br>One flag is a reason to slow down. Several together is a reason to walk away."
    },
    {
     "n": 4,
     "t": "The I-will-get-out-in-time trap",
     "x": "Many people think they can buy the pump and sell before the dump. But the people running it usually sell first and sell more, and prices can fall 50% or more in minutes. In a thin stock there may be no buyers at your price. You are betting your speed against people who planned the exit."
    },
    {
     "n": 5,
     "t": "What to do instead",
     "x": "If someone mentions a stock, do not buy it the same day. Find it yourself on SEC EDGAR (sec.gov/edgar), read the latest filings, and ask who benefits from the hype. If you believe you have seen a scheme, you can report it through the SEC's tips and complaints page at sec.gov."
    },
    {
     "n": 6,
     "t": "Educational only",
     "x": "This is educational content, not financial advice. Low-priced stocks can lose most or all of their value quickly. Only risk money you can afford to lose completely."
    }
   ],
   "analogy": "A pump-and-dump is like a game of musical chairs where the organizers are allowed to leave before the music stops. Each round the crowd grows and the chairs disappear, and the organizers already took theirs.",
   "quiz": {
    "q": "A stranger in a chat group posts: XYZ at $0.03 is about to 10x, big news tomorrow, get in tonight. There are no recent SEC filings and volume jumped 20x today. What is the best response?",
    "choices": [
     "Buy a small position tonight so you do not miss out if it runs",
     "Buy at the open and plan to sell within an hour, before the crowd does",
     "Treat it as a red flag and do not trade on the tip. If curious, look the company up on SEC EDGAR on your own later",
     "Ask the poster to explain the news, and buy if the explanation sounds believable"
    ],
    "correct": 2,
    "explain": "An unsolicited tip, urgency, a tiny price, a huge volume spike, and no filings are all classic pump signs. A small position still pays for someone else's exit, and planning to sell first is a bet against people who planned the timing. Asking the promoter for details does not help, because they have an incentive to sell you the story.",
    "lesson": "Never trade on a tip you did not find yourself. If a promoter found you, you may be the exit."
   }
  },
  {
   "id": "penny-4",
   "title": "Dilution, Filings & Going Concern Risk",
   "sub": "How small companies fund themselves, often at your expense, and where to check",
   "terms": [
    {
     "w": "Dilution",
     "d": "When a company issues new shares, each existing share becomes a smaller slice of the company. Your shares are worth less unless the company grows enough to offset it.",
     "x": "A company has 10 million shares and you own 100,000 (1%). It issues 10 million more. You now own 0.5%."
    },
    {
     "w": "Outstanding vs. Authorized",
     "d": "Outstanding shares are the ones that exist. Authorized shares are the most the company is allowed to issue, and it can often raise that limit with shareholder approval.",
     "x": "A company with 50 million outstanding and 500 million authorized has room to create 450 million more shares."
    },
    {
     "w": "Reverse Split",
     "d": "The company combines shares into fewer, higher-priced shares, for example 1-for-10. It does not change what the company is worth. It is often used to meet exchange price minimums.",
     "x": "In a 1-for-10 reverse split, 1,000 shares at $0.20 ($200) become 100 shares at $2.00 ($200)."
    },
    {
     "w": "Going Concern Warning",
     "d": "A note from the company's auditor saying there is substantial doubt the company can keep operating without new funding.",
     "x": "Found in the annual report. A going concern note on a company with little cash is a serious warning sign."
    },
    {
     "w": "Convertible Note",
     "d": "A loan that can be repaid in shares, sometimes at a discount to the market price. When the lender converts and sells, new shares reach the market, which can push the price down and dilute everyone else.",
     "x": "A note converts at a 30% discount to the market price. The lender gets cheap shares and has a reason to sell them quickly."
    },
    {
     "w": "Cash Runway",
     "d": "How many months a company can operate on its current cash at its current rate of spending (burn). Cash divided by monthly burn.",
     "x": "$600,000 in cash with $200,000 spent per month is 3 months of runway."
    }
   ],
   "teach": [
    {
     "n": 1,
     "t": "Small companies need cash, and shareholders often pay for it",
     "x": "Many penny stock companies lose money. To keep going they raise cash by selling new shares or by borrowing in ways that can turn into new shares. Each new share makes yours a smaller slice. A stock can fall even if the business is doing okay, simply because the share count keeps growing."
    },
    {
     "n": 2,
     "t": "Where to look: SEC EDGAR (sec.gov/edgar), free",
     "x": "Search the company name or ticker. Key filings: <strong>10-K</strong> (annual report), <strong>10-Q</strong> (quarterly report), <strong>8-K</strong> (major events such as financings or executive changes), and <strong>S-1 or 424B</strong> (offerings of new shares). If a company has no recent 10-K or 10-Q, treat that as a serious warning. Some OTC companies publish reports on OTC Markets instead of filing with the SEC, so check there too."
    },
    {
     "n": 3,
     "t": "Three numbers to find",
     "x": "<strong>1. Cash</strong> on the balance sheet.<br><strong>2. Burn:</strong> how much cash the company used last quarter (see operating cash flow).<br><strong>3. Shares outstanding</strong> now compared with a year ago.<br><br>Cash divided by monthly burn gives runway. Short runway plus a rising share count is a classic dilution setup."
    },
    {
     "n": 4,
     "t": "Warning signs of heavy dilution",
     "x": "Convertible notes with discounts to market price. A share count that jumps every quarter. At-the-market offerings, where the company sells new shares into the open market as the stock trades. A going concern warning. Repeated reverse splits. None of these automatically means failure, but together they mean you are competing with a seller that can create new shares."
    },
    {
     "n": 5,
     "t": "A reverse split is a clue, not a bargain",
     "x": "A reverse split makes the price look higher but changes nothing about value. Stocks that need one have often already fallen a long way, and many drift lower again afterward. Treat it as a signal to read the filings, not as a buying signal."
    },
    {
     "n": 6,
     "t": "Educational only",
     "x": "This is educational content, not financial advice. Low-priced stocks can lose most or all of their value quickly. Only risk money you can afford to lose completely."
    }
   ],
   "analogy": "Dilution is like a pizza that keeps getting cut into more slices. If the money the company raises makes the pizza bigger, your smaller slice might still be fine. If the pizza stays the same size, your slice just got smaller.",
   "quiz": {
    "q": "A tiny company reports $400,000 in cash and spent about $350,000 last quarter. Its auditor warns of substantial doubt about continuing as a going concern. What is the most likely near-term risk for shareholders?",
    "choices": [
     "The company will probably need new funding soon, likely by issuing new shares, which would dilute current holders",
     "The stock is likely to rise because cash on the balance sheet means the company is safe",
     "There is little risk because the company still has money in the bank",
     "The company will probably announce a stock buyback to reward shareholders"
    ],
    "correct": 0,
    "explain": "With about one quarter of cash left ($400,000 against $350,000 spent per quarter) and an auditor warning, the company will likely need funding soon. For companies like this that usually means selling new shares or convertible notes, which dilutes existing shareholders.",
    "lesson": "Before buying any small company, find cash, burn, and share count. A short runway plus a going concern note means dilution risk is high."
   }
  },
  {
   "id": "penny-5",
   "title": "Finding & Screening Candidates",
   "sub": "A repeatable process instead of chasing whatever is trending",
   "terms": [
    {
     "w": "Screener",
     "d": "A tool that filters thousands of stocks by criteria you choose: price, volume, market cap, exchange, and more. Many brokers include one, and free versions exist online.",
     "x": "Filter for stocks between $0.50 and $5 on an exchange with average volume over 500,000 shares."
    },
    {
     "w": "Relative Volume (RVOL)",
     "d": "Today's volume compared with the stock's normal volume for the same time. RVOL of 3 means three times normal.",
     "x": "A stock normally trades 100,000 shares by midday. Today it has traded 350,000. RVOL is 3.5."
    },
    {
     "w": "Catalyst",
     "d": "A specific, verifiable event that could move the price: earnings, a signed contract, an approval, an acquisition. Buzz is not a catalyst.",
     "x": "An 8-K announcing a signed contract with named terms is a catalyst. A post saying big news soon is not."
    },
    {
     "w": "Float",
     "d": "The shares actually available for public trading, excluding shares held by insiders and restricted holders. A small float can mean bigger and faster price swings.",
     "x": "50 million shares outstanding but only 8 million in the float. A few trades can move the price a lot."
    },
    {
     "w": "Watchlist",
     "d": "A short list of stocks you have already researched and are waiting to trade at your levels, instead of reacting to whatever is moving right now.",
     "x": "Three stocks, each with a written entry, stop, and target, and nothing bought until price reaches the plan."
    }
   ],
   "teach": [
    {
     "n": 1,
     "t": "Start with rules, not with what is moving",
     "x": "A screener turns what is trending into what meets my minimum standards. Example filters: Nasdaq, NYSE American, or the upper OTC tiers only; price between $0.50 and $5; average volume above 500,000 shares; dollar volume large enough that you can exit your position; and rising relative volume. These are examples, not recommendations. The point is that you decide the rules ahead of time, so excitement does not choose for you."
    },
    {
     "n": 2,
     "t": "Disqualify first",
     "x": "Remove names that fail basic safety checks: no recent SEC filings, the lowest OTC tiers, a going concern warning with a short cash runway, repeated reverse splits, or a spread wider than your plan can afford. Most stocks on a screen should be eliminated. A short list is a good sign."
    },
    {
     "n": 3,
     "t": "Verify the catalyst",
     "x": "Ask: what happened, and where is the proof (an SEC filing or an official company release)? Is it already in the price? A stock up 80% on a real contract may have priced it in already. A big move with no real news is a warning, not an opportunity."
    },
    {
     "n": 4,
     "t": "Relative volume and float",
     "x": "Rising volume shows real interest, which makes a move more reliable than a drift on a few thin trades. But very small floats can spike and crash fast because a few trades move them. Use RVOL to see whether interest is real, and float to understand how violent the moves can be."
    },
    {
     "n": 5,
     "t": "Build a watchlist and wait for your level",
     "x": "Pick three to five candidates that passed your checks. Mark support and resistance using the chart lessons from earlier in this course, write your planned entry, stop, and target, and wait. If price never reaches your level, you do not trade. Missing a move costs nothing. Chasing one often does."
    },
    {
     "n": 6,
     "t": "Educational only",
     "x": "This is educational content, not financial advice. Low-priced stocks can lose most or all of their value quickly. Only risk money you can afford to lose completely."
    }
   ],
   "analogy": "Screening is like shopping with a list. Without one, you grab whatever looks exciting near the checkout. With one, you leave with only what you came for and walk past everything else.",
   "quiz": {
    "q": "A stock averages 40,000 shares a day and trades around $0.90 (about $36,000 of dollar volume per day). You plan to buy 8,000 shares ($7,200). What is the biggest problem with this plan?",
    "choices": [
     "There is no problem, because $7,200 is a small amount of money",
     "The stock is too cheap per share to trade safely",
     "The volume is too high for a beginner to handle",
     "Your order would be about 20% of a typical day's volume, so exiting could move the price against you"
    ],
    "correct": 3,
    "explain": "8,000 shares is 20% of a typical 40,000-share day. In a market that thin, selling your position could push the price down, and you may not find buyers near your price. Many traders keep their size to a small fraction of average volume for exactly this reason.",
    "lesson": "Size your position to the stock's liquidity, not just to your account. If you cannot exit easily, the trade is riskier than the chart suggests."
   }
  },
  {
   "id": "penny-6",
   "title": "Risk Management for Speculative Stocks",
   "sub": "Sizing positions so one bad trade cannot hurt you",
   "terms": [
    {
     "w": "Speculation Bucket",
     "d": "A small, fixed slice of your investable money set aside for high-risk trades. You treat it as money you can lose completely without changing your life.",
     "x": "Decide the number before any trade. When the bucket is gone, you stop and review before adding more."
    },
    {
     "w": "Position Size",
     "d": "How many shares you buy. It should come from the risk you decided on, not from how confident you feel.",
     "x": "Risking $30 with a $0.15 stop distance means 200 shares, no matter how good the story sounds."
    },
    {
     "w": "Gap Risk",
     "d": "The risk that a stock opens far above or below its previous close, skipping over your stop price.",
     "x": "Close $1.50. Bad news overnight. It opens at $1.00. A $1.35 stop does not protect you from the gap."
    },
    {
     "w": "Stop-Limit Order",
     "d": "A stop that becomes a limit order, not a market order, when triggered. It avoids a terrible fill but may not fill at all, leaving you in the trade.",
     "x": "A stop-limit can protect you from a wild fill, but in a fast drop it may leave you holding."
    },
    {
     "w": "Averaging Down",
     "d": "Buying more of a losing position to lower your average price. In a falling penny stock it often turns a small loss into a large one.",
     "x": "Buy 100 at $1.00, buy 200 more at $0.70, and the stock falls to $0.30. The loss is far bigger than the original plan."
    }
   ],
   "teach": [
    {
     "n": 1,
     "t": "Decide your bucket first",
     "x": "Before any trade, decide the total you can put into speculative stocks and treat as a possible total loss. Common guidelines keep this to a small slice of investable money. It is a guideline, not a rule that fits everyone. Keep the rest in the long-term plan from the ETF and wealth lessons."
    },
    {
     "n": 2,
     "t": "Use the position sizing formula with a tighter number",
     "x": "From the earlier risk lessons: max shares = (account x risk %) divided by (entry minus stop). In penny stocks many traders use 0.5% to 1%. Example: $3,000 account, 1% risk = $30. Entry $1.50, stop $1.35, risk per share $0.15. Max shares = $30 divided by $0.15 = <strong>200 shares</strong>, a $300 position."
    },
    {
     "n": 3,
     "t": "Gap risk: a stop is not a guarantee",
     "x": "Now imagine bad news overnight and the stock opens at $1.00. Your 200 shares lose $100 instead of $30, more than three times your planned risk. Gaps are common in small stocks. That is why you size conservatively and never rely on a stop alone."
    },
    {
     "n": 4,
     "t": "No averaging down, no revenge trades, no chasing",
     "x": "Three habits that destroy accounts: buying more as a trade falls, trading to win back a loss, and buying a stock because it already jumped 100% today. Each one throws out your plan and replaces it with emotion."
    },
    {
     "n": 5,
     "t": "Journal and paper trade first",
     "x": "Write down every trade: why you entered, your stop, your target, what happened, and what you would change. Run your plan on a simulator for at least 30 days of trades and compare the results to your rules. One caution: simulators often fill you at better prices than a thin real market would, so assume real results will be worse than paper results."
    },
    {
     "n": 6,
     "t": "Educational only",
     "x": "This is educational content, not financial advice. Low-priced stocks can lose most or all of their value quickly. Only risk money you can afford to lose completely."
    }
   ],
   "analogy": "Position sizing is like a speed limiter on a car. You can still go fast, but the car will not let you go fast enough to wreck it on one bad turn.",
   "quiz": {
    "q": "Your account is $3,000 and you risk 1% per trade. You plan to enter at $1.50 with a stop at $1.35. What is the maximum position size under the 1% rule?",
    "choices": [
     "20 shares",
     "200 shares",
     "2,000 shares",
     "300 shares"
    ],
    "correct": 1,
    "explain": "1% of $3,000 is $30. The risk per share is $1.50 - $1.35 = $0.15. $30 divided by $0.15 is 200 shares. A gap through your stop can still cost more than $30, which is why many traders size even smaller in penny stocks.",
    "lesson": "Size from your risk, not your confidence. Then remember that a stop is not a guarantee."
   }
  },
  {
   "id": "penny-7",
   "title": "Your Penny Stock Checklist & Practice Plan",
   "sub": "A final filter before any real money goes in",
   "terms": [],
   "teach": [
    {
     "n": 1,
     "t": "The pre-trade checklist",
     "x": "1. Did I find this stock myself, or did a promoter find me?<br>2. Does it have recent SEC filings (or full OTC disclosure)?<br>3. What exchange or OTC tier is it on? Is there a going concern note or short cash runway?<br>4. Is dilution a risk (convertible notes, rising share count)?<br>5. Is there a verifiable catalyst, and is it already priced in?<br>6. Can I exit? Check average daily volume against my size, and the spread.<br>7. Are entry, stop, and target set in advance, with at least 1:2 risk to reward?<br>8. Is my risk 1% or less of the account, and inside my speculation bucket?<br>9. Have I practiced this setup on a simulator?<br><br>If any answer is no, do not trade."
    },
    {
     "n": 2,
     "t": "The no list",
     "x": "Do not trade a stock if: you found it through a tip, there are no filings, your order would be a large share of daily volume, you cannot say where your stop goes, or you feel you have to catch it right now."
    },
    {
     "n": 3,
     "t": "Your practice plan",
     "x": "<strong>Weeks 1 and 2:</strong> Study only. Look up 10 penny stocks on EDGAR and fill out the checklist for each. No trading.<br><br><strong>Weeks 3 to 6:</strong> Paper trade only the stocks that pass. Journal every trade.<br><br><strong>Weeks 7 and 8:</strong> Review your journal: win rate, average win compared with average loss, and how often you broke your own rules. Only consider real money if the journal shows you can follow the plan, and start with positions small enough that losing all of them would not hurt."
    },
    {
     "n": 4,
     "t": "What to remember",
     "x": "Most penny stocks do not make money for most people. The goal is to learn how to avoid traps, size risk, and practice before you spend. If the best thing you take from this module is how to say no to a bad trade, it did its job."
    },
    {
     "n": 5,
     "t": "Educational only",
     "x": "This is educational content, not financial advice. Low-priced stocks can lose most or all of their value quickly. Only risk money you can afford to lose completely."
    }
   ],
   "analogy": "A pilot does not trust memory. They use a checklist every flight, no matter how many hours they have flown. Your checklist is what keeps a good day from turning into a disaster.",
   "quiz": {
    "q": "Which situation best passes the checklist?",
    "choices": [
     "A ticker is trending on social media with huge volume and a popular account says it is going to run",
     "A chat group admin messages you the ticker and says to buy before the news drops tomorrow",
     "You found it on your own screener, read its latest 10-Q for cash and share count, confirmed volume can absorb your small position, set entry, stop, and target in advance with 1% risk, and tested the setup on a simulator",
     "The price is under $0.10 so it has the most room to grow"
    ],
    "correct": 2,
    "explain": "Only the third scenario starts with your own research and ends with a defined risk. The first two begin with hype or a tip, which is how people become exit liquidity. A very low price per share says nothing about value or room to grow.",
    "lesson": "The checklist is the product. A stock that passes it is worth watching. A stock that fails it is not worth the risk, however exciting the chart looks."
   }
  }
 ]
};

    var maxNum = t.modules.reduce(function (a, m) { return Math.max(a, m.num); }, 0);
    var lessons = data.lessons.map(function (l) {
      return {
        id: l.id, title: l.title, sub: l.sub, schema: 'kings',
        terms: l.terms, teach: l.teach, analogy: l.analogy, quiz: l.quiz
      };
    });
    t.modules.push({ num: maxNum + 1, title: data.title, desc: data.desc, lessons: lessons });

    // Rebuild the flat lesson list (same shape the main script builds)
    t.flat = [];
    t.modules.forEach(function (m) {
      m.lessons.forEach(function (l) {
        t.flat.push(Object.assign({ moduleNum: m.num, moduleTitle: m.title }, l));
      });
    });

    if (typeof renderDashboard === 'function') { renderDashboard(); }
  } catch (e) {
    console.error('penny-stocks.js failed to load', e);
  }
})();
