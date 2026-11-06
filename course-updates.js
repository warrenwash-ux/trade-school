/* =====================================================================
   course-updates.js
   1) Replaces outdated pattern-day-trader (PDT) content in Market Kings
      (the $25,000 rule was eliminated effective June 4, 2026).
   2) Adds a "Start Here" module that teaches chart reading with simple
      line charts and price levels, so candlesticks are optional.
   3) Labels the two candlestick modules as Optional.
   Load AFTER the main script in index.html:
     <script src="course-updates.js"></script>
   Safe to load twice, and safe in any order with penny-stocks.js.
   ===================================================================== */
(function () {
  'use strict';
  try {
    if (typeof TRACKS === 'undefined' || !TRACKS.market) { return; }
    var t = TRACKS.market;
    if (t.__courseUpdates2026) { return; }
    t.__courseUpdates2026 = true;

    var D = {
 "start": {
  "title": "Start Here: Reading Prices Without Candlesticks",
  "desc": "A plain-English start: read a price chart as a simple line, find the levels that matter, and let alerts do the watching. Candlesticks are optional.",
  "lessons": [
   {
    "id": "start-1",
    "title": "A Price Chart Is Just a Line",
    "sub": "Time goes left to right. Price goes up or down. That is the whole chart.",
    "terms": [
     {
      "w": "Price Chart",
      "d": "A picture of a stock's price over time. The left side is the past, the right side is now, and higher on the chart means a higher price.",
      "x": "If the line ends higher than it started, the stock gained over that period."
     },
     {
      "w": "Trend",
      "d": "The general direction the price has been moving: up, down, or sideways.",
      "x": "A stock that keeps making higher peaks and higher dips is in an uptrend."
     },
     {
      "w": "Time Frame",
      "d": "How much time the chart covers: one day, one month, one year, five years. The same stock can look very different on different time frames.",
      "x": "A stock can be up on the 1-day chart and down on the 1-year chart."
     },
     {
      "w": "Line Chart",
      "d": "A chart that connects one price per period, usually the closing price. It is the simplest way to read a stock, and it is all you need to start.",
      "x": "Most broker apps and free chart tools show a line chart by default."
     }
    ],
    "teach": [
     {
      "n": 1,
      "t": "How to read it in five seconds",
      "x": "Look at the far left of the line, then the far right. Is the right side higher or lower? That is how much the price changed over this period. Then look at the shape: climbing, falling, or bouncing back and forth. That is the trend.<svg viewBox=\"0 0 300 130\" role=\"img\" aria-label=\"A line chart rising from left to right\" style=\"width:100%;height:auto;display:block;margin:14px 0\"><rect x=\"0\" y=\"0\" width=\"300\" height=\"130\" rx=\"10\" style=\"fill:var(--surface-2)\"/><polyline points=\"20,95 50,80 75,88 110,60 140,70 175,45 205,52 245,28 280,34\" style=\"fill:none;stroke:var(--brand-deep);stroke-width:2.5;stroke-linejoin:round;stroke-linecap:round\"/><text x=\"12\" y=\"16\" style=\"fill:var(--ink-muted);font-family:var(--font-body);font-size:10px\">price \u2191</text><text x=\"20\" y=\"122\" style=\"fill:var(--ink-muted);font-family:var(--font-body);font-size:10px\">Past</text><text x=\"288\" y=\"122\" text-anchor=\"end\" style=\"fill:var(--ink-muted);font-family:var(--font-body);font-size:10px\">Now \u2192</text></svg>"
     },
     {
      "n": 2,
      "t": "The three trends",
      "x": "<strong>Uptrend:</strong> the peaks and the dips both keep getting higher.<br><strong>Downtrend:</strong> the peaks and the dips both keep getting lower.<br><strong>Sideways:</strong> the line bounces up and down in about the same range.<div style=\"display:flex;gap:10px;flex-wrap:wrap;margin:14px 0 6px\"><figure style=\"margin:0;flex:1 1 90px;text-align:center\"><svg viewBox=\"0 0 100 70\" role=\"img\" aria-label=\"Uptrend\" style=\"width:100%;height:auto;display:block\"><rect x=\"0\" y=\"0\" width=\"100\" height=\"70\" rx=\"8\" style=\"fill:var(--surface-2)\"/><polyline points=\"5,60 25,45 40,52 60,32 75,38 95,15\" style=\"fill:none;stroke:var(--brand-deep);stroke-width:2.2;stroke-linejoin:round;stroke-linecap:round\"/></svg><figcaption style=\"font-size:.8rem;color:var(--ink-muted);margin-top:4px\">Uptrend</figcaption></figure><figure style=\"margin:0;flex:1 1 90px;text-align:center\"><svg viewBox=\"0 0 100 70\" role=\"img\" aria-label=\"Downtrend\" style=\"width:100%;height:auto;display:block\"><rect x=\"0\" y=\"0\" width=\"100\" height=\"70\" rx=\"8\" style=\"fill:var(--surface-2)\"/><polyline points=\"5,12 25,28 40,22 60,42 75,38 95,58\" style=\"fill:none;stroke:var(--brand-deep);stroke-width:2.2;stroke-linejoin:round;stroke-linecap:round\"/></svg><figcaption style=\"font-size:.8rem;color:var(--ink-muted);margin-top:4px\">Downtrend</figcaption></figure><figure style=\"margin:0;flex:1 1 90px;text-align:center\"><svg viewBox=\"0 0 100 70\" role=\"img\" aria-label=\"Sideways\" style=\"width:100%;height:auto;display:block\"><rect x=\"0\" y=\"0\" width=\"100\" height=\"70\" rx=\"8\" style=\"fill:var(--surface-2)\"/><polyline points=\"5,35 25,22 40,46 60,24 80,46 95,32\" style=\"fill:none;stroke:var(--brand-deep);stroke-width:2.2;stroke-linejoin:round;stroke-linecap:round\"/></svg><figcaption style=\"font-size:.8rem;color:var(--ink-muted);margin-top:4px\">Sideways</figcaption></figure></div>"
     },
     {
      "n": 3,
      "t": "Change the time frame to see the real picture",
      "x": "Zoom out to one year to see the big direction. Zoom in to one day to see today's noise. If you are investing for years, the long view matters most. A scary red day often looks like a tiny dip on a 5-year chart."
     },
     {
      "n": 4,
      "t": "What you can skip for now",
      "x": "You do not need candlesticks, indicators, or pattern names to start. A line, a few price levels (next lesson), and a written plan are enough. Candlesticks are explained in about a minute in lesson 3, as an option."
     }
    ],
    "analogy": "A price chart is like the line on a hospital monitor or a fitness tracker. You do not need to know every medical term to see whether the line is rising, falling, or holding steady. That simple read already tells you a lot.",
    "quiz": {
     "q": "You open a stock's 1-year line chart. It starts at $10 on the left, wanders up and down, and ends at $14 on the right, with each peak and dip higher than the one before. What can you say about it?",
     "choices": [
      "It is in a downtrend, because the line moved around a lot",
      "It is sideways, because it went both up and down during the year",
      "It is in an uptrend: it gained from $10 to $14, and the peaks and dips kept getting higher",
      "You cannot say anything about it without candlesticks"
     ],
     "correct": 2,
     "explain": "Comparing the left edge to the right edge shows a gain from $10 to $14. Peaks and dips that keep getting higher are the shape of an uptrend. A simple line chart is enough for this read.",
     "lesson": "Start with the left edge, the right edge, and the shape in between. That tells you the direction before you ever need more detail."
    }
   },
   {
    "id": "start-2",
    "title": "Price Levels: Floors and Ceilings",
    "sub": "The one idea that works on any chart, with or without candlesticks",
    "terms": [
     {
      "w": "Support (the floor)",
      "d": "A price where the stock has stopped falling and bounced back up before. Buyers have shown up there in the past.",
      "x": "A stock bounces off $2.00 three times. $2.00 is a floor many traders are watching."
     },
     {
      "w": "Resistance (the ceiling)",
      "d": "A price where the stock has stopped rising and turned back down before. Sellers have shown up there in the past.",
      "x": "A stock stalls near $3.50 four times. $3.50 is a ceiling."
     },
     {
      "w": "Breakout",
      "d": "When price pushes through a ceiling and stays above it. A move that holds, especially when more people are trading than usual, is more believable than a quick poke through.",
      "x": "The line has been stuck under $3.50. It climbs to $3.80 and holds there for days."
     },
     {
      "w": "Price Alert",
      "d": "A free notification from your broker or chart app that fires when a stock reaches a price you choose.",
      "x": "Set an alert at $2.05 and let your phone tell you, instead of watching the chart."
     }
    ],
    "teach": [
     {
      "n": 1,
      "t": "Look for places where the line turned around",
      "x": "Find spots where the line fell, touched about the same price, and bounced back at least twice. Draw a flat line there. That is a floor. Do the same for tops: that is a ceiling. The more bounces at a level, the more people are watching it.<svg viewBox=\"0 0 300 150\" role=\"img\" aria-label=\"Price bouncing between a floor and a ceiling\" style=\"width:100%;height:auto;display:block;margin:14px 0\"><rect x=\"0\" y=\"0\" width=\"300\" height=\"150\" rx=\"10\" style=\"fill:var(--surface-2)\"/><line x1=\"8\" y1=\"35\" x2=\"292\" y2=\"35\" style=\"stroke:var(--danger);stroke-width:1.5;stroke-dasharray:5 4\"/><line x1=\"8\" y1=\"111\" x2=\"292\" y2=\"111\" style=\"stroke:var(--success);stroke-width:1.5;stroke-dasharray:5 4\"/><polyline points=\"15,100 45,112 70,60 95,36 120,70 150,110 180,66 210,34 240,72 268,110 290,90\" style=\"fill:none;stroke:var(--brand-deep);stroke-width:2.5;stroke-linejoin:round;stroke-linecap:round\"/><text x=\"10\" y=\"26\" style=\"fill:var(--danger);font-family:var(--font-body);font-size:10px\">Ceiling: sellers keep showing up here</text><text x=\"10\" y=\"132\" style=\"fill:var(--success);font-family:var(--font-body);font-size:10px\">Floor: buyers keep showing up here</text></svg>"
     },
     {
      "n": 2,
      "t": "Why levels matter for your trades",
      "x": "Levels give you a plan. If you buy near a floor, you can put your stop just below it, so you risk little if you are wrong. If you buy right under a ceiling, you may be buying where sellers have shown up before. A level shows you where being wrong is cheap."
     },
     {
      "n": 3,
      "t": "When a level breaks",
      "x": "If the price falls through a floor and stays below, that floor often turns into a ceiling. If the price rises through a ceiling and stays above, it often turns into a floor. A move that holds is more convincing than a quick poke through."
     },
     {
      "n": 4,
      "t": "Let alerts do the watching",
      "x": "You do not have to watch charts all day. Pick your level, set a price alert in your broker or chart app, and write down your plan: entry, stop, and target. When the alert fires, check the plan. If the price never gets there, you do not trade."
     }
    ],
    "analogy": "Picture a ball bouncing in a room. The floor and the ceiling are the levels. You do not need to know the ball's brand or color to see where it keeps turning around.",
    "quiz": {
     "q": "A stock has dropped to about $2.00 and bounced back up three times in two months. It is falling toward $2.00 again. What is the most useful thing this tells you?",
     "choices": [
      "It is guaranteed to bounce again, so you can buy without a stop",
      "It is a price to watch: a possible floor where a plan, with a stop just below, can keep your loss small if you are wrong",
      "It proves the stock is a bargain at $2.00",
      "Nothing, because past prices never matter"
     ],
     "correct": 1,
     "explain": "Three bounces make $2.00 a level many traders are watching, so it is a useful place to plan around. It is not a promise. A stop just below the level keeps your loss small if the floor breaks.",
     "lesson": "Levels do not predict the future. They tell you where to plan, and where you would know you were wrong."
    }
   },
   {
    "id": "start-3",
    "title": "Candlesticks in 60 Seconds (Optional)",
    "sub": "If you ever see them, here is all you need. The pattern names can wait.",
    "terms": [
     {
      "w": "Candlestick",
      "d": "One bar on a candlestick chart. It shows where the price opened, where it closed, and how high and how low it went during that time period.",
      "x": "On a daily chart, one candle is one trading day."
     },
     {
      "w": "Green and Red Candles",
      "d": "On most platforms, a green candle closed higher than it opened, and a red candle closed lower than it opened. Some platforms use other colors, so check the legend.",
      "x": "Green: price rose during the period. Red: price fell."
     },
     {
      "w": "Wick",
      "d": "The thin line sticking out of the body. It shows how far price went before it was pushed back.",
      "x": "A long wick on top means price went much higher at some point, then fell back."
     },
     {
      "w": "Pattern",
      "d": "A named shape made by one or more candles, like a hammer or an engulfing candle. Traders use patterns as clues, never as guarantees.",
      "x": "You can invest and trade without memorizing a single pattern name."
     }
    ],
    "teach": [
     {
      "n": 1,
      "t": "A candle is a line chart with more detail",
      "x": "A line chart shows one number per period: the close. A candle shows four: the open, the close, the high, and the low. Same chart, more information. If you can read the line, you can read candles.<svg viewBox=\"0 0 300 165\" role=\"img\" aria-label=\"Anatomy of a green candle and a red candle\" style=\"width:100%;height:auto;display:block;margin:14px 0\"><rect x=\"0\" y=\"0\" width=\"300\" height=\"165\" rx=\"10\" style=\"fill:var(--surface-2)\"/><line x1=\"62\" y1=\"20\" x2=\"62\" y2=\"130\" style=\"stroke:var(--ink-muted);stroke-width:2\"/><rect x=\"49\" y=\"45\" width=\"26\" height=\"55\" rx=\"3\" style=\"fill:var(--success)\"/><line x1=\"78\" y1=\"20\" x2=\"96\" y2=\"20\" style=\"stroke:var(--line-strong);stroke-width:1\"/><text x=\"100\" y=\"23\" style=\"fill:var(--ink-muted);font-family:var(--font-body);font-size:10px\">High</text><line x1=\"78\" y1=\"45\" x2=\"96\" y2=\"45\" style=\"stroke:var(--line-strong);stroke-width:1\"/><text x=\"100\" y=\"48\" style=\"fill:var(--ink-muted);font-family:var(--font-body);font-size:10px\">Close</text><line x1=\"78\" y1=\"100\" x2=\"96\" y2=\"100\" style=\"stroke:var(--line-strong);stroke-width:1\"/><text x=\"100\" y=\"103\" style=\"fill:var(--ink-muted);font-family:var(--font-body);font-size:10px\">Open</text><line x1=\"78\" y1=\"130\" x2=\"96\" y2=\"130\" style=\"stroke:var(--line-strong);stroke-width:1\"/><text x=\"100\" y=\"133\" style=\"fill:var(--ink-muted);font-family:var(--font-body);font-size:10px\">Low</text><line x1=\"206\" y1=\"20\" x2=\"206\" y2=\"130\" style=\"stroke:var(--ink-muted);stroke-width:2\"/><rect x=\"193\" y=\"45\" width=\"26\" height=\"55\" rx=\"3\" style=\"fill:var(--danger)\"/><line x1=\"222\" y1=\"20\" x2=\"240\" y2=\"20\" style=\"stroke:var(--line-strong);stroke-width:1\"/><text x=\"244\" y=\"23\" style=\"fill:var(--ink-muted);font-family:var(--font-body);font-size:10px\">High</text><line x1=\"222\" y1=\"45\" x2=\"240\" y2=\"45\" style=\"stroke:var(--line-strong);stroke-width:1\"/><text x=\"244\" y=\"48\" style=\"fill:var(--ink-muted);font-family:var(--font-body);font-size:10px\">Open</text><line x1=\"222\" y1=\"100\" x2=\"240\" y2=\"100\" style=\"stroke:var(--line-strong);stroke-width:1\"/><text x=\"244\" y=\"103\" style=\"fill:var(--ink-muted);font-family:var(--font-body);font-size:10px\">Close</text><line x1=\"222\" y1=\"130\" x2=\"240\" y2=\"130\" style=\"stroke:var(--line-strong);stroke-width:1\"/><text x=\"244\" y=\"133\" style=\"fill:var(--ink-muted);font-family:var(--font-body);font-size:10px\">Low</text><text x=\"62\" y=\"154\" text-anchor=\"middle\" style=\"fill:var(--ink-muted);font-family:var(--font-body);font-size:10px\">Green: closed higher</text><text x=\"206\" y=\"154\" text-anchor=\"middle\" style=\"fill:var(--ink-muted);font-family:var(--font-body);font-size:10px\">Red: closed lower</text></svg>"
     },
     {
      "n": 2,
      "t": "Three things to notice, nothing more",
      "x": "<strong>Color:</strong> green means price rose, red means it fell (on most platforms).<br><strong>Body size:</strong> a big body means a strong move in that period.<br><strong>Wicks:</strong> long wicks mean price went far and got pushed back."
     },
     {
      "n": 3,
      "t": "You do not need pattern names to trade",
      "x": "Many investors and traders never memorize pattern names. They use price levels, a written plan, and risk rules. If you enjoy patterns, the optional candlestick modules later in this course cover them. If you do not, skip them. The risk lessons and the penny stock module do not require them."
     },
     {
      "n": 4,
      "t": "A fair warning about patterns",
      "x": "No pattern works every time. A pattern in the middle of nowhere means very little. One that appears at a level you already marked, with more trading than usual, means more. This is why levels come first."
     }
    ],
    "analogy": "Candlesticks are like a detailed weather report instead of just the temperature. Helpful if you want the extra detail, but not required to decide whether to bring a coat.",
    "quiz": {
     "q": "On a chart, one candle has a green body and a very long wick on top. What does that tell you?",
     "choices": [
      "Price closed higher than it opened, but it went much higher during the period before being pushed back down",
      "Price closed lower than it opened, and it never moved much during the period",
      "Price did not change at all during the period",
      "A guaranteed reversal is coming, so you should sell immediately"
     ],
     "correct": 0,
     "explain": "Green means it closed higher than it opened. The long upper wick shows buyers pushed the price far up at some point, but sellers pushed it back before the period ended. It is a clue, not a guarantee.",
     "lesson": "Read a candle as open, close, high, and low. Everything else is optional."
    }
   },
   {
    "id": "start-4",
    "title": "Let Tools Do the Heavy Lifting",
    "sub": "Screeners, alerts, and a written plan, so you are not decoding charts all day",
    "terms": [
     {
      "w": "Screener",
      "d": "A tool that shows only the stocks that match rules you set, like price range, size, and volume. Many brokers include one.",
      "x": "You ask for stocks between $1 and $5 that trade at least 500,000 shares a day. It does the filtering."
     },
     {
      "w": "Watchlist",
      "d": "A short list of stocks you have already researched and are waiting to act on at your levels.",
      "x": "Three stocks, each with a written entry, stop, and target."
     },
     {
      "w": "Stop Order",
      "d": "An order that triggers when the price falls to a level you pick, to help limit a loss. If the stock gaps below that level, it can fill at a worse price.",
      "x": "Stop at $1.80. If a stock gaps from $1.90 to $1.50 overnight, you may sell near $1.50."
     },
     {
      "w": "Trading Plan",
      "d": "A few written lines you decide before the trade: why you are buying, where you are wrong, where you take profit, and how much you risk.",
      "x": "Buy near $2.05 because it held the floor. Stop $1.90. Target $2.50. Risk 1% of the account."
     }
    ],
    "teach": [
     {
      "n": 1,
      "t": "Screeners find stocks for you",
      "x": "A screener lets you set the rules (price, size, volume) and shows only the stocks that fit. You do not have to scroll through charts hoping something looks good."
     },
     {
      "n": 2,
      "t": "Alerts watch prices for you",
      "x": "Most broker apps and free chart tools can notify you when a stock reaches a price. Set an alert at your level, close the app, and go live your life."
     },
     {
      "n": 3,
      "t": "Orders do the deciding in advance",
      "x": "A limit order buys or sells only at your price or better. A stop order helps cap a loss, but it can fill below your stop if the price gaps. Entering your plan as orders means you are not deciding in the heat of the moment."
     },
     {
      "n": 4,
      "t": "A written plan beats a perfect chart read",
      "x": "Before any trade, write one line each: why I am buying, where I am wrong (my stop), where I take profit (my target), and how much I risk (1% or less). If you can fill all four, you are trading. If you cannot, wait."
     },
     {
      "n": 5,
      "t": "Where to go next",
      "x": "The risk lessons (position sizing, risk to reward) work with or without candlesticks. The penny stock module is built the same way: filings, liquidity, and risk first, with no chart patterns required. The candlestick modules are there for when you get curious."
     },
     {
      "n": 6,
      "t": "Educational only",
      "x": "This is educational content, not financial advice. Trading and investing involve risk, and you can lose money. Only risk money you can afford to lose."
     }
    ],
    "analogy": "A GPS does not need you to understand how satellites work. Screeners, alerts, and a written plan do the same job for trading: they tell you where you are and when to act.",
    "quiz": {
     "q": "You are busy at work and cannot watch charts. Which approach best matches the beginner-friendly method in this module?",
     "choices": [
      "Check the chart every few minutes and decide on the spot",
      "Buy right now so you do not miss the move, and look at the chart later",
      "Wait until you recognize a candlestick pattern name before doing anything",
      "Pick a level, set a price alert and a written plan (entry, stop, target, 1% risk), and act only if the alert fires"
     ],
     "correct": 3,
     "explain": "A level, an alert, and a written plan let you act calmly and only when your setup appears. Watching constantly leads to emotional decisions, and buying in a hurry skips the plan.",
     "lesson": "You do not need to read charts all day. You need a level, a plan, and a tool that tells you when to look."
    }
   }
  ]
 },
 "m15": {
  "title": "Types of Markets \u2014 Stocks Forex and Crypto Explained",
  "sub": "Understanding every market you can trade and the differences between them",
  "terms": [
   {
    "w": "Stock Market",
    "d": "The market where shares of companies are bought and sold. Open Monday to Friday 9:30am to 4pm Eastern Time.",
    "x": "The New York Stock Exchange and NASDAQ are the main US stock exchanges. Companies like Apple Google and Amazon are traded here."
   },
   {
    "w": "Forex Market",
    "d": "The Foreign Exchange market where currencies of different countries are traded against each other. The largest financial market in the world. Open 24 hours a day 5 days a week.",
    "x": "You trade currency pairs like EUR/USD or GBP/USD. If you think the US dollar will get stronger against the Euro you sell the EUR/USD pair."
   },
   {
    "w": "Cryptocurrency",
    "d": "Digital currencies that exist only online and are not controlled by any government or central bank. Bitcoin and Ethereum are the most well known.",
    "x": "Unlike the dollar which is printed by the US government Bitcoin is created by computer algorithms and its supply is strictly limited. This makes it behave differently from traditional currencies."
   }
  ],
  "teach": [
   {
    "n": 1,
    "t": "The stock market \u2014 what it is best for",
    "x": "The stock market is the most well-known market and the one most people think of when they hear the word investing. It is best for long-term investors who want to build wealth over years or decades. It is also used by day traders who buy and sell within single trading days. The advantage of stocks is that you own real pieces of real businesses. If a company grows and becomes more profitable your stock grows in value."
   },
   {
    "n": 2,
    "t": "A rule change you should know about",
    "x": "For 25 years a rule called the Pattern Day Trader (PDT) rule required $25,000 in a margin account if you made 4 or more day trades in 5 business days. The SEC approved eliminating that rule and the $25,000 minimum, effective <strong>June 4, 2026</strong>. Brokers are switching over in phases through October 2027, and each broker can set its own margin requirements, so ask yours how it applies to your account. <strong>Being allowed to trade often does not mean you should.</strong> More trades means more spreads, more fees, and more chances for emotional mistakes."
   },
   {
    "n": 3,
    "t": "Forex \u2014 the 24-hour market",
    "x": "The Forex market trades currencies. You are essentially betting on whether one country currency will become stronger or weaker compared to another country currency. Forex is attractive to beginners for specific reasons. It is open 24 hours a day giving you flexibility to trade any time. The markets can be highly liquid meaning trades execute quickly. Free demo accounts are widely available for practice. The disadvantage is that currency movements can be subtle requiring larger position sizes and leverage to make meaningful profits which increases risk."
   },
   {
    "n": 4,
    "t": "Cryptocurrency \u2014 the highest risk highest reward market",
    "x": "Cryptocurrency markets operate 24 hours a day 7 days a week including weekends and holidays. Crypto prices can move 10% 20% or even 50% in a single day. This volatility creates opportunities for large gains but also large losses. Bitcoin the largest cryptocurrency has gone from nearly worthless to tens of thousands of dollars per coin and has fallen sharply more than once. Crypto has less regulation than stocks. This is both its appeal and its danger. The same volatility that creates opportunity can wipe out positions very quickly."
   },
   {
    "n": 5,
    "t": "Paper trading \u2014 practice with fake money before real money",
    "x": "Before you ever risk a single real dollar you should paper trade. Paper trading means making trades in a simulated account with fake money. The experience feels similar to real trading but no real money is at stake. Many major brokerages offer free paper trading accounts. The goal is to practice your strategy and learn to control your emotions without financial consequences. You will make mistakes. You will learn from them at zero cost. Set a minimum 60 day paper trading requirement for yourself before touching real money."
   },
   {
    "n": 6,
    "t": "Choosing where to start",
    "x": "Most beginners should start with one market and master it before trying others. If you want to invest long term for retirement or wealth building the stock market with index ETFs is the most proven path. If you want to day trade US stocks, start by asking your broker what account type and minimum it requires: a margin account (commonly a $2,000 minimum, set by each broker) or a cash account, which trades only with settled money. If you want to trade around the clock, Forex may fit. If you enjoy high risk and high volatility and can afford to lose your entire investment, cryptocurrency might appeal to you. The right market is the one you understand best and can trade without emotional chaos."
   },
   {
    "n": 7,
    "t": "The broker \u2014 how you actually buy and sell",
    "x": "A broker is a company that gives you access to the markets. You deposit money with a broker. The broker executes your buy and sell orders on the exchange. You never go to a physical exchange. Everything happens digitally through the broker platform. Many brokers offer commission free trading meaning no fee per trade. Choose a broker based on the features you need. Day traders need fast execution and good charting. Long term investors care more about low fees and investment options."
   }
  ],
  "analogy": "Different markets are like different sports. The stock market is like basketball \u2014 structured season specific rules and trading hours. Forex is like running \u2014 you can do it anytime anywhere in the world at any hour. Crypto is like extreme sports \u2014 the thrills are real the risks are real and you need to know exactly what you are doing before jumping in.",
  "quiz": {
   "q": "A beginner has $3,000 and wants to buy and sell US stocks several times a week. Which statement is most accurate today?",
   "choices": [
    "FINRA's $25,000 pattern day trader minimum still blocks this at every broker",
    "Forex is the only market a small account can day trade",
    "The $25,000 PDT rule was eliminated effective June 4, 2026, but brokers are switching in phases and set their own margin rules, so check yours before assuming",
    "Day trading is now risk-free because the old restriction is gone"
   ],
   "correct": 2,
   "explain": "The SEC approved removing the pattern day trader designation and its $25,000 minimum, effective June 4, 2026. Brokers have until October 2027 to complete the transition, and each sets its own margin and cash-account policies. Fewer restrictions do not mean less risk.",
   "lesson": "The $25,000 PDT minimum is gone under FINRA rules, but your broker's own rules, settlement rules in cash accounts, and the risk of losing money still apply."
  }
 },
 "pdt_title": "Day Trading Rules in 2026",
 "pdt_sub": "4 min read",
 "pdt_html": "<div class=\"lesson-h1\">Day Trading Rules in 2026</div><p class=\"lesson-p\">For 25 years, a rule called the <strong>Pattern Day Trader (PDT) rule</strong> required a $25,000 minimum in a margin account if you made 4 or more day trades in 5 business days. In 2026 that changed.</p><div class=\"callout callout-gold\">\ud83d\udcc5 What changed: the SEC approved FINRA's rule change on April 14, 2026, effective June 4, 2026. The $25,000 minimum and the \"pattern day trader\" label are gone. Brokers are switching in phases through October 2027.</div><div class=\"lesson-h2\">What replaces it</div><p class=\"lesson-p\">Instead of counting your day trades, your broker now watches your margin <strong>in real time during the day</strong>. If your account repeatedly falls short of what it needs to cover the positions you open, the broker can restrict it.</p><div class=\"term-grid\"><div class=\"term-card\"><div class=\"term-word\">Margin Account</div><div class=\"term-def\">An account that lets you borrow from your broker. Standard margin accounts commonly require a $2,000 minimum, but each broker sets its own.</div></div><div class=\"term-card\"><div class=\"term-word\">Cash Account</div><div class=\"term-def\">You trade only with your own settled money, with no borrowing. Using money before a sale settles can cause violations and restrictions.</div></div><div class=\"term-card\"><div class=\"term-word\">Intraday Margin</div><div class=\"term-def\">The check your broker runs during the trading day to make sure you have enough equity for the positions you hold.</div></div><div class=\"term-card\"><div class=\"term-word\">Your Broker's Rules</div><div class=\"term-def\">Brokers are switching at different speeds and can be stricter than the minimum. Always read your own broker's current policy.</div></div></div><div class=\"callout callout-red\">\u26a0\ufe0f The rule going away does not make day trading safer. The old rule limited how often small accounts could trade. Without it you can place more trades, and more trades means more spreads, more fees, and more chances for emotional mistakes. Research on retail day traders keeps finding that most lose money.</div><div class=\"lesson-h2\">How a beginner should think about it</div><div class=\"term-grid\"><div class=\"term-card\"><div class=\"term-word\">Check your broker</div><div class=\"term-def\">Ask what account type you need, the minimum, and how it handles day trading today.</div></div><div class=\"term-card\"><div class=\"term-word\">Start in a simulator</div><div class=\"term-def\">Practice your plan with fake money before real money. The simulator lesson later in this track shows where.</div></div><div class=\"term-card\"><div class=\"term-word\">Keep risk small</div><div class=\"term-def\">The 1% rule still applies. Fewer restrictions are not a reason to trade bigger or more often.</div></div></div><div class=\"callout callout-green\">\u2705 Bottom line: the $25,000 gate is gone, but discipline, risk limits, and your broker's rules still matter.</div><div class=\"quiz-section\"><div class=\"quiz-title\">Quick Check</div><div class=\"quiz-q\">A trader with $3,000 in a margin account makes six day trades in one week at a broker that has already switched to the new rules. What is most likely true?</div><div class=\"quiz-options\"><button class=\"quiz-opt\" onclick=\"checkAnswer(this,false)\">They are flagged as a pattern day trader and frozen for 90 days</button><button class=\"quiz-opt\" onclick=\"checkAnswer(this,true)\">There is no PDT flag, but the broker still checks margin during the day and can restrict the account if it repeatedly falls short</button><button class=\"quiz-opt\" onclick=\"checkAnswer(this,false)\">Day trading rules no longer exist, so the broker cannot restrict the account at all</button></div></div><button class=\"complete-btn\" onclick=\"completeLesson()\">\u2713 Got It \u2014 Next Lesson</button>"
};

    function allLessons() {
      var out = [];
      t.modules.forEach(function (m) { m.lessons.forEach(function (l) { out.push(l); }); });
      return out;
    }
    function warn(msg) { if (window.console) { console.warn('course-updates.js: ' + msg); } }

    // ---- 1a) Market Kings lesson 1-5 (Types of Markets): rewrite PDT content ----
    var l15 = allLessons().filter(function (l) {
      return l.id === '1-5' && /Types of Markets/.test(l.title || '');
    })[0];
    if (l15) {
      l15.title = D.m15.title;
      l15.sub = D.m15.sub;
      l15.terms = D.m15.terms;
      l15.teach = D.m15.teach;
      l15.analogy = D.m15.analogy;
      l15.quiz = D.m15.quiz;
    } else { warn('lesson 1-5 not found'); }

    // ---- 1b) Final certification review (body HTML): fix two PDT lines ----
    var cert = allLessons().filter(function (l) { return l.id === '9-1' && typeof l.raw === 'string'; })[0];
    if (cert) {
      var before = cert.raw;
      cert.raw = cert.raw
        .replace(/\u2705 PDT rule[^<]*<br>/, '\u2705 Day trading margin rules \u2014 the old $25K pattern day trader rule was eliminated effective June 2026. Brokers are switching in phases and set their own margin rules, so check yours.<br>')
        .replace(/no PDT rule, /, '')
        .replace(/always use candlestick charts\./, 'a simple line chart is enough to start, and candlesticks are an optional upgrade.');
      if (cert.raw === before) { warn('certification PDT lines not found'); }
    }

    // ---- 1c) Investiq Day Trading: replace the PDT lesson ----
    var pdt = allLessons().filter(function (l) {
      return l.schema === 'raw' && /The PDT Rule/.test(l.title || '');
    })[0];
    if (pdt) {
      pdt.title = D.pdt_title;
      pdt.sub = D.pdt_sub;
      pdt.raw = D.pdt_html;
    } else { warn('Investiq PDT lesson not found'); }

    // ---- 1d) Investiq Forex intro: remove the "No PDT Rule" advantage card ----
    var fx = allLessons().filter(function (l) {
      return l.schema === 'raw' && typeof l.raw === 'string' && /No PDT Rule/.test(l.raw);
    });
    fx.forEach(function (l) {
      l.raw = l.raw.replace(
        /<div class="term-card"><div class="term-word">No PDT Rule<\/div><div class="term-def">[^<]*<\/div><\/div>/,
        '<div class="term-card"><div class="term-word">Free Practice</div><div class="term-def">Most forex brokers offer free demo accounts, so you can practice with fake money before risking real money.</div></div>'
      );
    });

    // ---- 3) Mark candlestick modules as optional ----
    t.modules.forEach(function (m) {
      if (/Candlestick/.test(m.title) && !/Optional/.test(m.title)) { m.title = m.title + ' (Optional)'; }
    });
    var l12 = allLessons().filter(function (l) { return l.id === '1-2' && /How to Read a Stock Chart/.test(l.title || ''); })[0];
    if (l12) {
      l12.sub = 'Includes candlesticks. Optional if you prefer the simple line-and-levels approach in the Start Here module.';
    }

    // ---- 2) Add the Start Here module at the front ----
    var hasStart = t.modules.some(function (m) { return m.title === D.start.title; });
    if (!hasStart) {
      var lessons = D.start.lessons.map(function (l) {
        return { id: l.id, title: l.title, sub: l.sub, schema: 'kings',
                 terms: l.terms, teach: l.teach, analogy: l.analogy, quiz: l.quiz };
      });
      t.modules.unshift({ num: 0, title: D.start.title, desc: D.start.desc, lessons: lessons });
    }

    // Renumber modules 1..N and rebuild the flat lesson list (same shape the main script builds)
    t.modules.forEach(function (m, i) { m.num = i + 1; });
    t.flat = [];
    t.modules.forEach(function (m) {
      m.lessons.forEach(function (l) {
        t.flat.push(Object.assign({ moduleNum: m.num, moduleTitle: m.title }, l));
      });
    });

    if (typeof renderDashboard === 'function') { renderDashboard(); }
  } catch (e) {
    console.error('course-updates.js failed to load', e);
  }
})();
