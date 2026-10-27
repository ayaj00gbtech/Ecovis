/** Exact reference content. Edit copy and data here. */
export const L4 = ["A","B","C","D","E","F"];

export const STATUS = ["Critical","Developing","Established","Institutional"];

export const GOV_M = [
    {id:"doa", n:"Decision rights", m:"Design DOA", q:"Walk us through how a large purchase gets approved today. Who signs off, and up to what amount?", ph:"For example: anything over ₹5 lakh comes to me, smaller amounts go to…",
     f:["Material decisions route through the founder. This is the biggest brake on growth, and the first thing an investor will notice.","Approval habits exist but live in people’s heads, so decisions slow down when those people are away and are hard to audit.","There are written limits, but they need regular review as the business grows.","Decision rights are documented and work without the founder."],
     act:"Map every recurring decision and set a written delegation of authority with approval limits."},
    {id:"risk", n:"Risk visibility", m:"Identify risks", q:"What could seriously hurt the business in the next 12 months, and who is watching for it?", ph:"Think customers, people, cash, regulation, suppliers…",
     f:["Risks are handled as they surface, so exposures show up only after they cost money.","The big risks are known, but nobody formally owns or watches them.","Risks are tracked. Owners and a review rhythm would keep the picture current.","Risks are mapped, owned and reviewed."],
     act:"Build a risk map with named owners, including key-person dependency, and review it monthly."},
    {id:"controls", n:"Internal controls", m:"Build controls", q:"Describe what happens between a supplier’s invoice arriving and the money leaving your account.", ph:"Who checks it, who approves it, who releases the payment…",
     f:["One person can take a payment from start to finish, the classic opening for error and fraud.","A second check exists only sometimes. Smaller payments bypass it.","Most payments pass two people. Building that check into the system is the next step.","Maker-checker is built into the systems."],
     act:"Introduce maker-checker on payments, purchasing and payroll, and separate who records from who approves."},
    {id:"compliance", n:"Compliance", m:"Automate compliance", q:"How do you make sure no tax or statutory deadline is ever missed? Who owns that?", ph:"GST, TDS, ROC filings, labour law…",
     f:["Deadlines depend on memory or an outside reminder, so penalties are a matter of time.","Deadlines are tracked manually, which works until the person who tracks them is busy or leaves.","Deadlines have owners. Automated alerts and escalation would remove the remaining risk.","Compliance is automated with alerts and escalation."],
     act:"Set up an automated compliance calendar with owners, alerts and escalation for every filing."},
    {id:"sops", n:"Institutional knowledge", m:"Define SOPs", q:"If your most important manager left tomorrow, what would break, and how much of their work is written down?", ph:"Be honest. Nobody sees this but you.",
     f:["How the business runs lives in a few heads. Losing one person would mean losing that knowledge.","Some know-how is captured, but not in a form a new person could follow.","Main processes are documented. Keeping them current and training on them is next.","Know-how is documented and outlives individuals."],
     act:"Turn the founder’s and key people’s know-how into SOPs for the ten processes that matter most."},
    {id:"reporting", n:"Reporting and analytics", m:"Reporting and analytics", q:"Which numbers do you review every month, and how soon after month-end do you see them?", ph:"Sales, margins, cash, receivables…",
     f:["Numbers arrive late or not at all, so decisions run on instinct.","Numbers exist but arrive too late or too manually to steer by.","A regular MIS. Early-warning signals would let you act before problems reach the results.","Live dashboards with early-warning signals."],
     act:"Agree a monthly MIS pack within ten days of month-end, then add dashboards with early-warning signals."}
  ];

export const DEP = [
    /\b(nothing|not|never|no)\s+(is\s+|are\s+)?(written|documented|tracked|formal|recorded)( down)?\b/gi,
    /\b(me|myself|personally)\b/gi, /\bi (approve|sign|decide|check|handle|look|review|release|do|take care|manage|track|remember)\w*/gi,
    /\b(founder|promoter|owner|my (father|brother|son|daughter|wife|husband|partner|uncle))\b/gi,
    /\b(only|always|everything|all)\b/gi, /\bin (my|his|her|their) (head|mind)\b/gi,
    /\b(no ?one|nobody|nothing|none|not (written|documented|tracked|sure)|no (system|process|policy|record|sop|documentation|register|dashboard|limit)s?)\b/gi,
    /\b(remember\w*|memory|reminds?|whatsapp|verbal\w*|informal\w*|ad[- ]hoc|as and when|when needed|depends|trust)\b/gi,
    /\b(late|delay\w*|months? later|year[- ]end|once a year|quarter later|annual\w*)\b/gi
  ];

export const MAT = [
    /\b(written|documented|documentation|polic(y|ies)|sops?|procedures?|manuals?|playbooks?|checklists?)\b/gi,
    /\b(systems?|software|erp|tally|sap|zoho|oracle|crm|automat\w*|alerts?|workflows?|portal|tools?)\b/gi,
    /\b(committee|board|cfo|finance (team|head|controller)|controller|compliance (officer|team|head)|internal audit\w*|auditors?|team)\b/gi,
    /\b(limits?|thresholds?|matrix|delegat\w*|approval levels?)\b/gi,
    /\b(maker|checker|dual|two (people|signator\w*|approvals?)|segregat\w*|second (person|approval|signature|check))\b/gi,
    /\b(review\w*|monthly|weekly|daily|register|tracker|calendar|dashboards?|mis|owners?|assigned|responsible)\b/gi,
    /(₹\s?\d[\d,.]*\s?(lakh|crore|k)?|\b\d+\s?(lakh|crore|days?|working days)\b)/gi
  ];

export const GOV_DEMO = {company:"Sample Industries Pvt Ltd (demo)",
    doa:"Honestly, anything above two lakh comes to me. My brother handles small purchases but there is nothing written.",
    risk:"Losing our top two customers, they are 40% of revenue. I keep an eye on it personally.",
    controls:"Accounts enters the invoice in Tally, my CFO reviews it and I release the payment from the bank portal.",
    compliance:"Our CA reminds us of GST and TDS dates. Sometimes we pay late fees.",
    sops:"Production would struggle, it is all in our plant head's mind. We have a few checklists.",
    reporting:"Monthly MIS from Tally, usually 20 to 25 days after month end.",
    fix:"Stop every approval coming to me so I can spend time on new markets."};

export const INV_D = [
    {id:"model", ph:"f", n:"Business model", o:"Know where you make and lose money", q:"Can you explain in one line how the business makes money, and which part makes most of it?", opts:["Not in one line","Roughly","Yes, for the business overall","Yes, down to each product and customer segment"],
     ask:"How exactly do you make money, and what drives the margin?", f:["The business model cannot yet be stated simply, so investors will struggle to value it.","The model is understood intuitively but not shown with numbers.","The model is clear at company level. Segment economics would strengthen the story.","A clear model with economics by product and segment."]},
    {id:"clarity", ph:"f", n:"Where money is made", o:"Know where you make and lose money", q:"Do you know which products, customers or locations make money, and which lose it?", opts:["Not really","We have a feel for it","For most of the business","Yes, with unit economics for each"],
     ask:"Which parts of the business lose money, and why are you still in them?", f:["Profit is visible only for the company as a whole, so losing lines hide behind good ones.","Leadership has a sense of what earns money, but no numbers an investor could test.","Most of the business has clear economics, with a few gaps.","Unit economics are clear everywhere."]},
    {id:"leaks", ph:"f", n:"Cash slipping away", o:"Keep cash flowing", q:"When did you last look for money leaking: discounts, receivables, inventory, pricing?", opts:["We haven’t looked","We know there are leaks, not where","We found some and are fixing them","We review leakage every quarter"],
     ask:"Where is cash leaking, and why hasn’t it been fixed?", f:["Nobody has looked for leaks, so some of any new capital would simply fill holes.","Leaks are suspected but not located.","Leaks are being fixed. A quarterly review would stop new ones.","Leakage is reviewed every quarter."]},
    {id:"cash", ph:"f", n:"Cash visibility", o:"Keep cash flowing", q:"How many months of cash runway could you state with confidence today?", opts:["Couldn’t say","Roughly","Yes, from a monthly cash forecast","Yes, from a rolling 13-week cash forecast"],
     ask:"How long can you run without new money, and how sure are you?", f:["Cash runway is unknown, which is a red flag for any investor or lender.","Runway is an estimate, not a forecast.","A monthly cash forecast exists. A rolling 13-week view would sharpen it.","A rolling 13-week cash forecast."]},
    {id:"books", ph:"f", n:"Books investors can check", o:"Books you can stand behind", q:"Would your books pass an investor’s due diligence today?", opts:["They would need a major clean-up","After a few weeks of work","Mostly, with minor questions","Yes, audited and reconciled"],
     ask:"Can we rely on these numbers without a clean-up?", f:["The books would need a major clean-up before anyone could rely on them.","A few weeks of work would be needed, which delays any deal.","Records mostly stand up. A pre-diligence review would close the gaps.","Audited and reconciled."]},
    {id:"pivot", ph:"i", n:"Ready for market shifts", o:"Be ready when your market shifts", q:"If your main market slowed tomorrow, do you know where you would pivot?", opts:["No idea yet","We have thoughts","We know the options, untested","Yes, tested with customers and numbers"],
     ask:"What happens to this business if your main market slows?", f:["There is no answer yet to the question every investor asks about downside.","Ideas exist, but none are tested.","Options are known. Testing them would turn them into a credible plan B.","A tested pivot path."]},
    {id:"plan", ph:"i", n:"A plan that holds", o:"A plan that holds", q:"How well do the assumptions behind your growth plan hold up?", opts:["There is no written plan","A plan, assumptions untested","Key assumptions tested","Every assumption tested, with sensitivities"],
     ask:"Which assumptions does your plan depend on, and what if they are wrong?", f:["Without a written plan there is nothing for an investor to back.","The plan rests on untested assumptions.","Key assumptions are tested. Sensitivities would show investors the range.","A plan with tested assumptions and sensitivities."]},
    {id:"forecast", ph:"i", n:"Three-year forecast", o:"See the next three years", q:"If an investor asked for a three-year forecast this week, what could you show?", opts:["Nothing ready","A revenue target","A forecast with one scenario","Base, upside and downside cases"],
     ask:"Show me the next three years, and what happens if things go worse.", f:["No forecast is ready, which ends most investor conversations early.","A target, but not a forecast of how you get there.","One scenario. Investors will ask for upside and downside.","Base, upside and downside cases."]},
    {id:"pricing", ph:"i", n:"Pricing", o:"Charge for the value you deliver", q:"How do you set your prices?", opts:["Cost plus a margin","We match competitors","Partly on value to the customer","On value, reviewed with data on wins and margins"],
     ask:"Why do customers pay this price, and could you charge more?", f:["Cost-plus pricing leaves money on the table and signals weak positioning.","Matching competitors makes margin someone else’s decision.","Value plays a part. Data on wins and margins would make pricing a lever.","Value-based pricing reviewed with data."]},
    {id:"capital", ph:"r", n:"Capital readiness", o:"Scale readiness", q:"Do you know how much capital you need, for what, and on what terms?", opts:["Not yet","A rough amount","An amount and use of funds","Amount, use of funds, structure and a valuation view"],
     ask:"How much do you need, what will it do, and what are you offering?", f:["The capital need is not defined, so conversations with investors stay vague.","An amount without a use of funds reads as a wish, not a plan.","Amount and use of funds are clear. Structure and valuation complete the case.","A complete capital case."]}
  ];

export const PHASES = {f:"Help build basics", i:"Overcome challenges", r:"Build the roadmap"};

export const INV_DEMO = {company:"Sample Industries Pvt Ltd (demo)", model:2, clarity:1, leaks:1, cash:1, books:2, pivot:1, plan:1, forecast:1, pricing:0, capital:1};

export const QD_CH = [
    {id:"decide", o:"g", t:"Every decision still comes back to me.", help:"Written approval limits and clear decision rights, so the business moves without you."},
    {id:"penalty", o:"g", t:"We lose money to penalties, missed filings or audit surprises.", help:"A compliance calendar with owners and alerts, and controls that catch mistakes early."},
    {id:"cash", o:"i", t:"Cash is always tight, even when sales are good.", help:"A clear view of where money is made and lost, and where cash slips away."},
    {id:"funds", o:"i", t:"Banks and investors are hard to convince.", help:"Books, a plan and a forecast that a lender or investor can trust."},
    {id:"team", o:"s", t:"My team is not pulling in the same direction.", help:"Clear roles, shared goals and reviews that turn into action."},
    {id:"fire", o:"s", t:"We spend our days firefighting instead of growing.", help:"Steady routines for execution and the right people in the right roles."}
  ];

export const QD_OFF = {
    g:{n:"Governance, Risk and Compliance", why:"Your top challenges come from decisions, risks and compliance that still depend on people. Fixing these first makes everything else easier.", href:"#institutionalise", cta:"Explore Governance, Risk and Compliance", act:["#grc-diagnostic","Take the governance diagnostic"]},
    i:{n:"Investability", why:"Your top challenges are about cash and the trust of lenders and investors. Clear numbers and a tested plan come first.", href:"#investable", cta:"Explore Investability", act:["#investability-report","Get your detailed report"]},
    s:{n:"Scale", why:"Your top challenges are about the team and how work gets done. Execution and people engagement are where growth is stuck.", href:"#scale", cta:"Explore Scale", act:["#book","Book a session"]}
  };

export const GRC_Q = [
    {id:"approve", c:"control", q:"Do people know exactly what they can approve without you?"},
    {id:"penalty", c:"control", q:"Have you gone the last year without penalties or losses from missed compliance?"},
    {id:"audit", c:"control", q:"Do your audits come back with few surprises?"},
    {id:"cash", c:"money", q:"Is your cash flow steady from month to month?"},
    {id:"margin", c:"money", q:"Are you happy with your profit margins?"},
    {id:"funds", c:"money", q:"Could you raise funds quickly if you needed to?"},
    {id:"aligned", c:"people", q:"Is your leadership team aligned on the same priorities?"},
    {id:"fit", c:"people", q:"Do you have the right people in the right roles?"},
    {id:"competent", c:"people", q:"Could your team run the business day to day without you?"},
    {id:"review", c:"perf", q:"Do you review performance against clear targets every month?"},
    {id:"consistent", c:"perf", q:"Are your results consistent from month to month?"},
    {id:"fire", c:"perf", q:"Is most of your week spent on planned work rather than firefighting?"},
    {id:"plan", c:"growth", q:"Do you have a written growth plan that you trust?"},
    {id:"speed", c:"growth", q:"Is the business growing as fast as you want it to?"}
  ];

export const GRC_C = {control:"Control and compliance", money:"Cash and profit", people:"People", perf:"Performance", growth:"Growth plan"};

export const GRC_R = {
    ok:{t:"In control", h:"Your business runs on systems, not on you.", p:"Decisions, money and people mostly work without you in the room. The job now is to keep it that way as you grow.", m:["Put risks, approvals and compliance on one Governance dashboard you check monthly.","Review approval limits once a year as the business grows.","Use the head room: plan the next phase of growth with Scale."], go:["#scale","Explore Scale"]},
    control:{t:"Exposed", h:"Too much still depends on people remembering.", p:"Approvals, filings and checks run on habit rather than systems. One missed deadline or unchecked payment can cost far more than fixing it now.", m:["Write down who can approve what, and up to what amount.","Set up a compliance calendar with owners and alerts.","Add a second check on every payment."], go:["#institutionalise","Explore Governance, Risk and Compliance"]},
    money:{t:"Cash-stretched", h:"Growth is real, but cash and margins are not keeping up.", p:"Sales may be fine, yet cash is tight and lenders or investors are hard to convince. Clear numbers come before more growth.", m:["Find where you make and lose money, by product and customer.","Track cash weekly and chase slow payers.","Get the books ready for a lender or investor to check."], go:["#investable","Explore Investability"]},
    people:{t:"Firefighting", h:"The team waits for you, and your weeks go to crises.", p:"The business still runs through you. Until people own decisions and results, growth will be capped by your time.", m:["Give every senior role clear responsibilities and limits.","Set a few goals per team, each with an owner.","Hold one monthly review that ends in decisions, not updates."], go:["#scale","Explore Scale"]},
    growth:{t:"Steady but stuck", h:"The business runs well, but growth has no clear plan.", p:"The basics hold. What is missing is a plan for where the next phase of growth will come from, and the people and money to back it.", m:["Write a growth plan with owners, budget and milestones.","Test the assumptions behind it before you commit.","Line up the funding the plan needs."], go:["#investable","Explore Investability"]}
  };
