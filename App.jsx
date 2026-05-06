/*
  Interia — Launch Ready Version
  The Operating System for Interior Firm Growth
  Powered by Rootify
*/

import { useMemo, useState } from "react";

const slotsOpen = 7;
const paymentMessage = "One all-inclusive monthly subscription. Ad spend included. No separate invoices.";
const UPI_ID = "saikirankasula.kiran@okicici";
const UPI_NAME = "Interia";

const opportunityFeed = [
  { score: 96, type: "Villa Interior", area: "Sarjapur Road", budget: "₹20L+", stage: "Decision window open" },
  { score: 91, type: "3BHK Apartment", area: "Whitefield", budget: "₹10L–₹16L", stage: "Site visit requested" },
  { score: 84, type: "Premium Renovation", area: "HSR Layout", budget: "₹7L–₹12L", stage: "Owner callback ready" },
  { score: 78, type: "2BHK Apartment", area: "Electronic City", budget: "₹5L–₹9L", stage: "New homeowner enquiry" },
];

const plans = [
  {
    name: "Starter",
    price: 149000,
    displayPrice: "₹1,49,000",
    adSpend: "₹50,000 ad spend included",
    subtitle: "Prove the machine.",
    ideal: "For interior firms that want a serious pipeline without hiring a marketing team.",
    output: "30–45 qualified opportunities/month",
    speed: "48-hour launch window",
    channels: "Meta only",
    review: "Monthly report",
    features: [
      "₹50,000 monthly ad budget included",
      "Meta campaigns: Facebook + Instagram",
      "Qualification funnel",
      "Budget, area and timeline capture",
      "WhatsApp + live sheet delivery",
      "Weekly signal cleanup",
      "Monthly acquisition report",
    ],
  },
  {
    name: "Growth",
    price: 225000,
    displayPrice: "₹2,25,000",
    adSpend: "₹75,000 ad spend included",
    subtitle: "The rational choice for consistent pipeline.",
    ideal: "For firms that want predictable weekly consultations and sharper lead quality.",
    output: "50–80 qualified opportunities/month",
    speed: "Priority 24-hour launch build",
    channels: "Meta only",
    review: "Monthly review + optimization support",
    recommended: true,
    features: [
      "₹75,000 monthly ad budget included",
      "Meta campaigns: Facebook + Instagram",
      "High-intent landing flow",
      "Lead scoring and filtering",
      "Budget, area, project type and timeline qualification",
      "WhatsApp + CRM-ready delivery",
      "Monthly performance review",
      "Optimization support",
      "Junk-lead handling support",
    ],
  },
  {
    name: "Dominance",
    price: 349000,
    displayPrice: "₹3,49,000",
    adSpend: "₹1,20,000 ad spend included",
    subtitle: "Own the demand layer.",
    ideal: "For established firms targeting villas, premium apartments and high-value renovations.",
    output: "70–110 qualified opportunities/month",
    speed: "Fastest execution queue",
    channels: "Meta + Google + Retargeting",
    review: "Monthly review + optimization support",
    features: [
      "₹1,20,000 monthly ad budget included",
      "Meta + Google + Retargeting",
      "Premium funnel architecture",
      "Location and budget segmentation",
      "Advanced lead scoring",
      "CRM-ready sales handoff",
      "Monthly performance review",
      "Optimization support",
      "Priority market protection",
    ],
  },
];

const comparisonRows = [
  ["All-inclusive subscription", "₹1,49,000", "₹2,25,000", "₹3,49,000"],
  ["Ad spend included", "₹50,000", "₹75,000", "₹1,20,000"],
  ["Channels", "Meta", "Meta", "Meta + Google + Retargeting"],
  ["Qualified opportunities", "30–45", "50–80", "70–110"],
  ["Lead scoring", "Basic", "Yes", "Advanced"],
  ["Monthly review", "Report", "Included", "Included"],
  ["Optimization support", "Weekly cleanup", "Included", "Included"],
  ["Launch speed", "48 hrs", "Priority 24 hrs", "Fastest queue"],
];

const principles = [
  ["01", "Opportunity quality over volume", "Firms do not suffer from too few leads. They suffer from too many bad ones. Every unqualified enquiry costs a salesperson 45 minutes they cannot recover."],
  ["02", "Speed of learning compounds", "A campaign that launches fast and iterates weekly beats one that launches perfectly in 8 weeks. Fast feedback loops are the core product."],
  ["03", "One number to track", "Qualified opportunities delivered per month. Not impressions, not clicks, not CPL. One number that ties directly to your sales calendar."],
];

const timeline = [
  ["Day 1", "Payment & onboarding", "Subscription confirmed. Onboarding form opens. Clean inputs collected from your team."],
  ["Day 2", "Build begins", "Campaigns, creatives and qualification logic built in parallel. Growth plan gets priority queue."],
  ["Day 3", "First opportunities arrive", "Qualified leads begin flowing to WhatsApp and your live sheet. No junk. Scored and filtered."],
  ["Day 30", "Performance review", "First monthly report delivered. Guarantee checkpoint. Optimization inputs fed in for cycle two."],
];

function formatINR(value) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value);
}

function makeUpiLink(plan) {
  const amount = plan.price.toFixed(2);
  const note = encodeURIComponent(`Interia ${plan.name} Subscription`);
  const name = encodeURIComponent(UPI_NAME);
  return `upi://pay?pa=${UPI_ID}&pn=${name}&am=${amount}&cu=INR&tn=${note}`;
}

function Check({ dark = false }) {
  return <span className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${dark ? "bg-black text-white" : "bg-white text-black"}`}>✓</span>;
}

function PaymentNote({ dark = false }) {
  return <p className={`mt-3 text-xs leading-5 ${dark ? "text-white/45" : "text-neutral-500"}`}>{paymentMessage}</p>;
}

function UpiPaymentModal({ plan, onClose }) {
  const upiLink = makeUpiLink(plan);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-md rounded-[2rem] bg-white p-8 shadow-2xl text-center">
        <button onClick={onClose} className="absolute right-5 top-5 text-neutral-400 hover:text-black text-xl leading-none">✕</button>
        <div className="mb-2 inline-flex rounded-full bg-neutral-100 px-4 py-1.5 text-xs font-semibold text-neutral-600 uppercase tracking-widest">{plan.name} Plan</div>
        <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">Pay {plan.displayPrice}</h3>
        <p className="mt-2 text-sm text-neutral-500">Scan with any UPI app or tap to pay</p>

        <div className="mt-6 flex justify-center">
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiLink)}`}
            alt="UPI QR Code"
            className="rounded-2xl border border-black/10 shadow-sm"
            width={200}
            height={200}
          />
        </div>

        <div className="mt-5 rounded-2xl bg-neutral-50 border border-black/08 px-5 py-4 text-left">
          <div className="text-xs text-neutral-400 mb-1 uppercase tracking-widest font-medium">UPI ID</div>
          <div className="font-semibold text-neutral-800 text-sm select-all">{UPI_ID}</div>
        </div>

        <a
          href={upiLink}
          className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-black px-5 py-4 font-semibold text-white text-sm"
        >
          Open UPI App →
        </a>

        <p className="mt-4 text-xs text-neutral-400 leading-5">After payment, WhatsApp us your screenshot to confirm your slot.</p>
      </div>
    </div>
  );
}

function RoiCalculator() {
  const [projectValue, setProjectValue] = useState(1200000);
  const [closedProjects, setClosedProjects] = useState(1);
  const [planFee, setPlanFee] = useState(225000);

  const math = useMemo(() => {
    const revenue = projectValue * closedProjects;
    const profit = revenue - planFee;
    const breakEven = planFee / projectValue;
    return { revenue, profit, breakEven };
  }, [projectValue, closedProjects, planFee]);

  return (
    <div className="mt-14 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7">
        <div className="text-sm font-semibold uppercase tracking-[0.22em] text-white/45">Run the machine</div>

        <label className="mt-8 block">
          <div className="mb-3 flex items-center justify-between text-sm"><span>Average project value</span><strong>{formatINR(projectValue)}</strong></div>
          <input type="range" min="500000" max="3000000" step="50000" value={projectValue} onChange={(event) => setProjectValue(Number(event.target.value))} className="w-full accent-white" />
        </label>

        <label className="mt-8 block">
          <div className="mb-3 flex items-center justify-between text-sm"><span>Projects closed from Interia/month</span><strong>{closedProjects}</strong></div>
          <input type="range" min="1" max="8" step="1" value={closedProjects} onChange={(event) => setClosedProjects(Number(event.target.value))} className="w-full accent-white" />
        </label>

        <label className="mt-8 block">
          <div className="mb-3 flex items-center justify-between text-sm"><span>Subscription</span><strong>{formatINR(planFee)}</strong></div>
          <select value={planFee} onChange={(event) => setPlanFee(Number(event.target.value))} className="w-full rounded-2xl border border-white/10 bg-black px-4 py-4 text-white outline-none">
            {plans.map((plan) => <option key={plan.name} value={plan.price}>{plan.name} — {plan.displayPrice}</option>)}
          </select>
          <p className="mt-3 text-xs leading-5 text-white/45">Includes system, creatives, qualification, reporting, optimization and ad spend.</p>
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-[2rem] bg-white p-7 text-black">
          <div className="text-sm text-neutral-500">Subscription</div>
          <div className="mt-4 text-5xl font-semibold tracking-[-0.06em]">{formatINR(planFee)}</div>
          <p className="mt-4 leading-7 text-neutral-600">One price. System and media spend included.</p>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7">
          <div className="text-sm text-white/45">Break-even</div>
          <div className="mt-4 text-5xl font-semibold tracking-[-0.06em]">{math.breakEven.toFixed(2)}</div>
          <p className="mt-4 leading-7 text-white/55">Deals needed to cover the subscription.</p>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7">
          <div className="text-sm text-white/45">Revenue created</div>
          <div className="mt-4 text-5xl font-semibold tracking-[-0.06em]">{formatINR(math.revenue)}</div>
          <p className="mt-4 leading-7 text-white/55">Potential monthly project value.</p>
        </div>
        <div className="rounded-[2rem] bg-emerald-300 p-7 text-black">
          <div className="text-sm text-black/60">After Interia</div>
          <div className="mt-4 text-5xl font-semibold tracking-[-0.06em]">{formatINR(math.profit)}</div>
          <p className="mt-4 leading-7 text-black/65">Before fulfilment, vendor and operating costs.</p>
        </div>
      </div>
    </div>
  );
}

function PlanCard({ plan }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && <UpiPaymentModal plan={plan} onClose={() => setShowModal(false)} />}
      <div className={`relative flex h-full flex-col rounded-[2rem] border p-7 ${plan.recommended ? "z-10 scale-[1.045] border-white bg-white text-black shadow-[0_0_110px_rgba(255,255,255,0.28)] lg:-translate-y-8" : "border-white/10 bg-white/[0.035] text-white"}`}>
        {plan.recommended && <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-black px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white">Recommended</div>}
        <div className={`mb-5 inline-flex w-fit rounded-full px-3 py-1 text-xs font-medium ${plan.recommended ? "bg-black text-white" : "bg-white/10 text-white/70"}`}>{plan.name}</div>
        <h3 className="text-3xl font-semibold tracking-[-0.04em]">{plan.subtitle}</h3>
        <p className={`mt-4 min-h-[72px] leading-7 ${plan.recommended ? "text-neutral-600" : "text-white/60"}`}>{plan.ideal}</p>
        <div className="mt-8 flex items-end gap-2">
          <div className="text-5xl font-semibold tracking-[-0.06em]">{plan.displayPrice}</div>
          <div className={plan.recommended ? "mb-2 text-neutral-500" : "mb-2 text-white/40"}>/month</div>
        </div>
        <p className={`mt-2 text-sm font-semibold ${plan.recommended ? "text-neutral-800" : "text-white/75"}`}>{plan.adSpend}</p>
        <p className={`mt-2 text-sm ${plan.recommended ? "text-neutral-500" : "text-white/40"}`}>All-inclusive. No separate agency fee.</p>

        <div className={`mt-6 space-y-3 rounded-3xl p-4 ${plan.recommended ? "bg-neutral-100" : "bg-white/10"}`}>
          <div className="flex justify-between gap-4 text-sm"><span className={plan.recommended ? "text-neutral-500" : "text-white/50"}>Target</span><strong className="text-right">{plan.output}</strong></div>
          <div className="flex justify-between gap-4 text-sm"><span className={plan.recommended ? "text-neutral-500" : "text-white/50"}>Channels</span><strong className="text-right">{plan.channels}</strong></div>
          <div className="flex justify-between gap-4 text-sm"><span className={plan.recommended ? "text-neutral-500" : "text-white/50"}>Speed</span><strong className="text-right">{plan.speed}</strong></div>
          <div className="flex justify-between gap-4 text-sm"><span className={plan.recommended ? "text-neutral-500" : "text-white/50"}>Review</span><strong className="text-right">{plan.review}</strong></div>
        </div>

        <ul className="mt-7 space-y-3">
          {plan.features.map((feature) => (
            <li key={feature} className="flex gap-3 text-sm leading-6">
              <Check dark={plan.recommended} />
              <span className={plan.recommended ? "text-neutral-700" : "text-white/70"}>{feature}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setShowModal(true)}
          className={`mt-8 inline-flex w-full items-center justify-center rounded-2xl px-5 py-4 font-semibold transition ${plan.recommended ? "bg-black text-white hover:scale-[1.01]" : "bg-white text-black hover:bg-neutral-100"}`}
        >
          Subscribe to {plan.name}
        </button>
        <PaymentNote dark={!plan.recommended} />
      </div>
    </>
  );
}

export default function Interia() {
  const [checkoutPlan, setCheckoutPlan] = useState(null);

  return (
    <div className="min-h-screen bg-[#f7f7f2] text-neutral-950 font-sans selection:bg-black selection:text-white">
      {checkoutPlan && <UpiPaymentModal plan={checkoutPlan} onClose={() => setCheckoutPlan(null)} />}

      <div className="fixed bottom-5 left-1/2 z-50 w-[92%] max-w-xl -translate-x-1/2 rounded-full border border-black/10 bg-white/90 p-2 shadow-2xl shadow-black/10 backdrop-blur-xl md:hidden">
        <a href="#packages" className="flex items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-semibold text-white">See Plans →</a>
      </div>

      <header className="sticky top-0 z-40 border-b border-black/5 bg-[#f7f7f2]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">I</div>
            <div>
              <div className="text-xl font-semibold tracking-[-0.04em]">Interia</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-neutral-500">Growth Operating System</div>
            </div>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-neutral-600 md:flex">
            <a href="#principles" className="hover:text-black">Principles</a>
            <a href="#roi" className="hover:text-black">ROI</a>
            <a href="#guarantee" className="hover:text-black">Guarantee</a>
            <a href="#packages" className="hover:text-black">Pricing</a>
          </nav>
          <a href="#packages" className="hidden rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:scale-[1.02] md:inline-flex">Reserve Slot</a>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden">
          <div className="absolute left-1/2 top-[-12rem] -z-10 h-[54rem] w-[54rem] -translate-x-1/2 rounded-full bg-white blur-3xl" />
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 md:grid-cols-[1.08fr_0.92fr] md:px-8 md:py-28 lg:py-32">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-neutral-700 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-red-500" /> Only {slotsOpen} Bengaluru firms accepted this month
              </div>
              <h1 className="max-w-5xl text-6xl font-semibold tracking-[-0.078em] md:text-8xl lg:text-9xl">
                One subscription. Predictable growth.
              </h1>
              <p className="mt-8 max-w-2xl text-xl leading-9 text-neutral-600">
                Interia is the operating system that delivers predictable, qualified homeowner opportunities to interior firms every month. One subscription. Clear targets. Transparent performance. Built to compound.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a href="#packages" className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-base font-semibold text-white shadow-xl shadow-black/10 transition hover:scale-[1.015]">Choose Your System →</a>
                <a href="#roi" className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-8 py-4 text-base font-semibold text-black transition hover:border-black/30">Run the Math</a>
              </div>
              <PaymentNote />
              <div className="mt-8 grid gap-3 text-sm text-neutral-600 sm:grid-cols-3">
                <div>Meta for Starter and Growth</div>
                <div>Google added in Dominance</div>
                <div>80% target guarantee</div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-5 rounded-[2.5rem] bg-black blur-3xl opacity-[0.08]" />
              <div className="relative rounded-[2.25rem] border border-black/10 bg-neutral-950 p-5 text-white shadow-2xl shadow-black/20">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <div className="text-sm text-white/45">Interia opportunity stream</div>
                    <div className="text-2xl font-semibold tracking-[-0.04em]">Qualified. Scored. Delivered.</div>
                  </div>
                  <div className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-black">Live OS</div>
                </div>
                <div className="grid grid-cols-3 gap-3 border-b border-white/10 py-5">
                  <div><div className="text-3xl font-semibold">₹75k</div><div className="mt-1 text-xs text-white/40">Growth Ad Spend</div></div>
                  <div><div className="text-3xl font-semibold">24h</div><div className="mt-1 text-xs text-white/40">Build Start</div></div>
                  <div><div className="text-3xl font-semibold">80%</div><div className="mt-1 text-xs text-white/40">Target Guarantee</div></div>
                </div>
                <div className="mt-5 space-y-3">
                  {opportunityFeed.map((lead) => (
                    <div key={lead.area} className="rounded-3xl border border-white/10 bg-white/[0.06] p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="font-semibold">{lead.type}</div>
                          <div className="mt-1 text-sm text-white/45">{lead.area} • {lead.budget}</div>
                        </div>
                        <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-300">Score {lead.score}</div>
                      </div>
                      <div className="mt-3 text-sm text-white/65">{lead.stage}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-black/5 bg-white/60">
          <div className="mx-auto grid max-w-7xl gap-5 px-5 py-7 text-sm font-medium text-neutral-700 md:grid-cols-4 md:px-8">
            <div>One subscription</div>
            <div>Ad spend included</div>
            <div>Qualified opportunity targets</div>
            <div>Transparent monthly performance</div>
          </div>
        </section>

        <section id="principles" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
          <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-start">
            <div className="md:sticky md:top-28">
              <div className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-neutral-500">First principles</div>
              <h2 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl">If it does not create pipeline, delete it.</h2>
              <p className="mt-6 text-lg leading-8 text-neutral-600">Interior growth is not complicated. The market is noisy because agencies sell activity. Interia sells an operating layer with clear inputs, clear outputs and faster learning cycles.</p>
            </div>
            <div className="grid gap-4">
              {principles.map(([num, title, text]) => (
                <div key={title} className="rounded-[2rem] border border-black/10 bg-white p-7 shadow-sm">
                  <div className="mb-6 text-sm font-semibold text-neutral-400">{num}</div>
                  <h3 className="text-2xl font-semibold tracking-[-0.04em]">{title}</h3>
                  <p className="mt-3 leading-7 text-neutral-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="roi" className="bg-neutral-950 px-5 py-24 text-white md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-white/45">Interactive ROI calculator</div>
              <h2 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl">One extra project changes the math.</h2>
              <p className="mt-6 text-lg leading-8 text-white/60">High-ticket businesses do not need infinite leads. They need enough qualified opportunities and a sales team that follows up fast.</p>
            </div>
            <RoiCalculator />
          </div>
        </section>

        <section id="guarantee" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
          <div className="rounded-[2.5rem] border border-black/10 bg-white p-8 shadow-sm md:p-14">
            <div className="grid gap-10 md:grid-cols-[1fr_0.8fr] md:items-center">
              <div>
                <div className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-neutral-500">Guarantee</div>
                <h2 className="text-5xl font-semibold tracking-[-0.06em] md:text-6xl">Clear target. Clear consequence.</h2>
                <p className="mt-6 text-lg leading-8 text-neutral-600">If Interia does not hit at least 80% of the qualified opportunity target in the first 30 days, the next month's Interia system fee is waived.</p>
              </div>
              <div className="rounded-[2rem] bg-neutral-950 p-7 text-white">
                <div className="text-sm text-white/45">First 30 days</div>
                <div className="mt-4 text-6xl font-semibold tracking-[-0.07em]">80%</div>
                <ul className="mt-6 space-y-3 text-sm text-white/70">
                  <li>✓ Qualified opportunity definition agreed upfront</li>
                  <li>✓ Applies to the first paid campaign cycle</li>
                  <li>✓ Next month system fee waived if target is missed</li>
                  <li>✓ Ad spend remains part of the active monthly package</li>
                  <li>✓ Sales closure depends on your follow-up and pricing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="packages" className="bg-neutral-950 px-5 py-24 text-white md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-white/45">Premium subscription</div>
              <h2 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl">Pick the pipeline size.</h2>
              <p className="mt-6 text-lg leading-8 text-white/60">One subscription includes system, creatives, qualification, reporting, optimization and media spend.</p>
            </div>
            <div className="mt-16 grid gap-8 lg:grid-cols-3">
              {plans.map((plan) => <PlanCard key={plan.name} plan={plan} />)}
            </div>
            <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-white/10 bg-white/[0.06] p-6 text-center">
              <p className="text-sm leading-6 text-white/60">Limited onboarding capacity. We accept only {slotsOpen} Bengaluru firms this month because the system needs fast setup, clean inputs and optimization bandwidth.</p>
            </div>
            <div className="mt-16 overflow-x-auto rounded-[2rem] border border-white/10">
              <div className="min-w-[760px]">
                <div className="grid grid-cols-4 bg-white/10 px-5 py-4 text-sm font-semibold text-white">
                  <div>Capability</div><div>Starter</div><div>Growth</div><div>Dominance</div>
                </div>
                {comparisonRows.map((row) => (
                  <div key={row[0]} className="grid grid-cols-4 border-t border-white/10 px-5 py-4 text-sm text-white/70">
                    {row.map((cell, index) => <div key={index} className={index === 0 ? "font-medium text-white" : ""}>{cell}</div>)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-neutral-500">Cycle time</div>
              <h2 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl">Subscribe. Launch. Learn. Compound.</h2>
              <p className="mt-6 text-lg leading-8 text-neutral-600">The goal is not a perfect launch. The goal is a fast launch with clean feedback loops.</p>
            </div>
            <div className="space-y-4">
              {timeline.map(([time, title, text]) => (
                <div key={title} className="grid grid-cols-[5rem_1fr] gap-4 rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm">
                  <div className="text-2xl font-semibold tracking-[-0.05em] text-neutral-400">{time}</div>
                  <div><h3 className="text-xl font-semibold">{title}</h3><p className="mt-2 leading-7 text-neutral-600">{text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="checkout" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
          <div className="rounded-[3rem] bg-black p-8 text-center text-white md:p-20">
            <div className="mx-auto max-w-4xl">
              <div className="mb-5 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm text-white/70">Bengaluru launch capacity is limited</div>
              <h2 className="text-6xl font-semibold tracking-[-0.07em] md:text-8xl">Reserve the operating system.</h2>
              <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/60">Payment confirms your slot. Onboarding opens after payment so the build process starts with commitment and clean inputs.</p>
              <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
                <a href="#packages" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 font-semibold text-black">Reserve Your Plan</a>
                <a href="#roi" className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 font-semibold text-white">Calculate Before Buying</a>
              </div>
              <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-white/50">{paymentMessage}</p>
              <p className="mt-4 text-sm text-white/40">Only {slotsOpen} onboarding slots open this month.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 bg-[#f7f7f2]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-5 py-8 text-sm text-neutral-500 md:flex-row md:px-8">
          <div>© Interia. Growth Operating System for Interior Firms.</div>
          <div className="flex items-center gap-2">
            Powered by <span className="font-semibold text-neutral-800">Rootify</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Onboarding Page (simplified & clean)
export function InteriaOnboarding() {
  return (
    <div className="min-h-screen bg-[#f7f7f2] text-neutral-950 font-sans">
      <div className="mx-auto max-w-4xl px-5 py-10 md:px-8">
        <div className="mb-10 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">I</div>
          <div>
            <div className="text-xl font-semibold tracking-[-0.04em]">Interia</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-neutral-500">Onboarding</div>
          </div>
        </div>

        <div className="rounded-[3rem] border border-black/10 bg-white p-8 shadow-sm md:p-12">
          <div className="mb-10">
            <div className="mb-4 inline-flex rounded-full bg-neutral-100 px-4 py-2 text-sm text-neutral-600">Build Inputs</div>
            <h1 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl">Give the system clean inputs.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">This takes 8–10 minutes. Share accurate details so we can launch fast and filter the right homeowners.</p>
          </div>

          <form className="grid gap-8">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block"><span className="mb-2 block text-sm font-medium">Firm Name</span><input type="text" placeholder="Ex: Aura Interiors" className="w-full rounded-2xl border border-black/10 bg-white px-4 py-4" /></label>
              <label className="block"><span className="mb-2 block text-sm font-medium">Owner Name</span><input type="text" placeholder="Full name" className="w-full rounded-2xl border border-black/10 bg-white px-4 py-4" /></label>
              <label className="block"><span className="mb-2 block text-sm font-medium">Phone Number</span><input type="tel" placeholder="+91" className="w-full rounded-2xl border border-black/10 bg-white px-4 py-4" /></label>
              <label className="block"><span className="mb-2 block text-sm font-medium">Email</span><input type="email" placeholder="you@firm.com" className="w-full rounded-2xl border border-black/10 bg-white px-4 py-4" /></label>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <label className="block"><span className="mb-2 block text-sm font-medium">Service Areas</span><input type="text" placeholder="Whitefield, HSR, Sarjapur..." className="w-full rounded-2xl border border-black/10 bg-white px-4 py-4" /></label>
              <label className="block"><span className="mb-2 block text-sm font-medium">Average Project Value</span><input type="text" placeholder="Ex: ₹10L–₹18L" className="w-full rounded-2xl border border-black/10 bg-white px-4 py-4" /></label>
            </div>

            <button type="button" className="mt-6 w-full rounded-full bg-black py-4 text-base font-semibold text-white">Submit & Start Build</button>
          </form>
        </div>
      </div>
    </div>
  );
}

// Thank You Page
export function InteriaThankYou() {
  return (
    <div className="min-h-screen bg-[#f7f7f2] text-neutral-950 font-sans">
      <div className="mx-auto flex min-h-screen max-w-5xl items-center px-5 py-16 md:px-8">
        <div className="w-full rounded-[3rem] border border-black/10 bg-white p-8 text-center shadow-sm md:p-16">
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-black text-3xl font-semibold text-white">✓</div>
          <div className="mb-5 inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm text-emerald-800">Payment Confirmed</div>
          <h1 className="mx-auto max-w-3xl text-5xl font-semibold tracking-[-0.06em] md:text-7xl">Your Interia system is now active.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600">Thank you. Your monthly subscription is confirmed. Onboarding is now open.</p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] bg-[#f7f7f2] p-6 text-left">
              <div className="text-2xl font-semibold text-black">01</div>
              <h3 className="mt-4 font-semibold">Submit Onboarding</h3>
              <p className="mt-3 text-sm text-neutral-600">Provide firm details and preferences.</p>
            </div>
            <div className="rounded-[2rem] bg-[#f7f7f2] p-6 text-left">
              <div className="text-2xl font-semibold text-black">02</div>
              <h3 className="mt-4 font-semibold">System Build</h3>
              <p className="mt-3 text-sm text-neutral-600">We prepare campaigns and qualification logic.</p>
            </div>
            <div className="rounded-[2rem] bg-[#f7f7f2] p-6 text-left">
              <div className="text-2xl font-semibold text-black">03</div>
              <h3 className="mt-4 font-semibold">Launch</h3>
              <p className="mt-3 text-sm text-neutral-600">Qualified opportunities begin flowing to your team.</p>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a href="/onboarding" className="rounded-full bg-black px-8 py-4 font-semibold text-white">Go to Onboarding</a>
            <a href="/" className="rounded-full border border-black/10 px-8 py-4 font-semibold text-black">Back to Home</a>
          </div>
        </div>
      </div>
    </div>
  );
}
