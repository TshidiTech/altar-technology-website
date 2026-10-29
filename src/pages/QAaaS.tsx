import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQChatbot } from "@/components/FAQChatbot";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ClipboardCheck, HeartPulse, LineChart, MessageSquareText, ShieldCheck, Users } from "lucide-react";

const pillars = [
  { icon: ClipboardCheck, title: "Custom QA & Compliance Scorecards", desc: "Threshold and score-based evaluation matrices mapped to your regulatory obligations and brand standards — objective, consistent, auditable." },
  { icon: HeartPulse, title: "Root-Cause & Sentiment Analysis", desc: "Identify recurring friction points, repeat callers and product bottlenecks before they escalate into complaints or churn." },
  { icon: Users, title: "Agent Coaching Roadmaps", desc: "Turn scorecard data into weekly one-on-one coaching templates that lift First Contact Resolution and reduce Average Handling Time." },
  { icon: LineChart, title: "Executive CX Intelligence", desc: "Monthly management reports on operational health, team adherence and CSAT/NPS trajectory — built for leadership, not spreadsheets." },
];

const packages = [
  {
    name: "Contact Centre Readiness Assessment",
    price: "R7,500 – R12,500",
    billing: "One-off, upfront",
    items: ["Audit of workflows, channel volumes & pain points", "QA gap and compliance risk review", "Current reporting effectiveness check", "Executive findings report", "Prioritised implementation plan"],
    link: "/contact-centre-readiness",
    cta: "Start With the Assessment",
  },
  {
    name: "CX & QA Framework Development",
    price: "R12,500 – R25,000",
    billing: "One-off, upfront",
    items: ["Custom quality & compliance scorecards", "Compliance checkpoints (POPIA / TCF / FICA mapped)", "Escalation matrices & SLA definitions", "Full operational playbook", "Evaluation criteria library"],
    link: "/lead-capture",
    cta: "Request a Framework Quote",
  },
  {
    name: "Management Reporting & Improvement Plan",
    price: "R7,500 – R15,000",
    billing: "One-off, upfront",
    items: ["Executive KPI definition", "Leadership dashboard structure", "Review templates & coaching structures", "Baseline measurement standards", "Ongoing coaching guide"],
    link: "/lead-capture",
    cta: "Request Reporting Setup",
  },
  {
    name: "Ongoing QA & CX Insights Retainer",
    price: "R15,000 – R35,000+ / month",
    billing: "Paid monthly in advance",
    items: ["Recurring interaction evaluation", "Trend & sentiment analytics", "Scorecard calibration sessions", "Management briefings", "Volume bands scoped to your operation"],
    link: "/lead-capture",
    cta: "Discuss a Retainer",
    featured: true,
  },
];

export default function QAaaS() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FAQChatbot />
      <WhatsAppButton />

      {/* Hero */}
      <section className="pt-28 pb-14 bg-dark text-dark-foreground sm:pt-32 sm:pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="inline-flex border-2 border-border bg-primary px-3 py-2 text-xs font-bold uppercase tracking-widest text-primary-foreground shadow-card">
            Flagship — Managed Quality Assurance & CX Intelligence
          </div>
          <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            Stop grading 1% of customer interactions on spreadsheets.
          </h1>
          <p className="mt-5 max-w-3xl text-base text-dark-foreground/80 sm:text-lg">
            Altar Technology delivers enterprise Quality Assurance as a Service — combining analytical rigour, tailored compliance scorecards and continuous agent coaching to turn every customer conversation into operational growth.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact-centre-readiness" className="w-full sm:w-auto">
              <Button size="lg" className="w-full bg-primary text-primary-foreground shadow-card hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-glow transition-all rounded-sm uppercase tracking-widest gap-2">
                Book a Readiness Assessment <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <a href="#packages" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full rounded-sm border-2 border-border bg-background uppercase tracking-widest shadow-card">
                View Advisory Packages
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Problem vs solution */}
      <section className="py-14 sm:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">The problem we start with</p>
          <h2 className="mb-10 text-3xl font-black sm:text-4xl">The 1% spreadsheet QA trap</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-2 border-border p-6 sm:p-8">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">Traditional QA</p>
              <ul className="space-y-3 text-sm text-muted-foreground sm:text-base">
                <li>Manual random sampling of 3–5 calls per agent per month</li>
                <li>Subjective scoring that changes from evaluator to evaluator</li>
                <li>Delayed feedback loops — agents hear about issues weeks later</li>
                <li>Compliance exposure across POPIA, TCF and FICA requirements</li>
                <li>Zero visibility into operational trends and root causes</li>
              </ul>
            </Card>
            <Card className="border-2 border-primary bg-primary/5 p-6 shadow-card sm:p-8">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">QAaaS by Altar Technology</p>
              <ul className="space-y-3 text-sm sm:text-base">
                <li>Systematic auditing across voice, WhatsApp, email and chat</li>
                <li>Objective scorecard criteria applied consistently at scale</li>
                <li>Proactive agent coaching benchmarks, delivered weekly</li>
                <li>Real-time sentiment and risk flags before they escalate</li>
                <li>Executive management reporting your leadership can act on</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Core pillars */}
      <section className="py-14 bg-muted/30 sm:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">What you get</p>
          <h2 className="mb-10 text-3xl font-black sm:text-4xl">Core QAaaS deliverables</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <Card key={p.title} className="border-2 border-border p-6 shadow-card">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center border-2 border-border bg-primary shadow-card">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="mb-2 text-lg font-extrabold uppercase">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-14 sm:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">Advisory packages</p>
          <h2 className="mb-10 text-3xl font-black sm:text-4xl">Transparent, staged pricing</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {packages.map((pkg) => (
              <Card key={pkg.name} className={`flex flex-col border-2 p-6 shadow-card sm:p-8 ${pkg.featured ? "border-primary" : "border-border"}`}>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-extrabold uppercase leading-snug">{pkg.name}</h3>
                  {pkg.featured && (
                    <span className="shrink-0 border border-primary bg-primary/10 px-2 py-1 text-[0.6rem] font-bold uppercase tracking-widest text-primary">Most chosen</span>
                  )}
                </div>
                <p className="mt-3 text-2xl font-black text-primary">{pkg.price}</p>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{pkg.billing}</p>
                <ul className="mt-5 flex-1 space-y-2 text-sm text-muted-foreground">
                  {pkg.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {item}
                    </li>
                  ))}
                </ul>
                <Link to={pkg.link} className="mt-6">
                  <Button className="w-full rounded-sm uppercase tracking-widest gap-2">
                    {pkg.cta} <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
          <p className="mt-8 flex items-start gap-2 text-xs text-muted-foreground sm:text-sm">
            <MessageSquareText className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            Illustration only — final pricing is determined during the readiness assessment based on exact scope, agent volume, channels, integrations and SLAs. All prices in ZAR and exclude VAT.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-dark text-dark-foreground sm:py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-black sm:text-4xl">See your contact centre&apos;s <span className="bg-gradient-primary bg-clip-text text-transparent">real quality picture</span></h2>
          <p className="mb-8 text-base text-dark-foreground/80 sm:text-lg">Start with a readiness assessment — a structured, objective review with no commitment beyond Phase 1.</p>
          <Link to="/contact-centre-readiness" className="inline-block w-full sm:w-auto">
            <Button size="lg" className="w-full bg-primary text-primary-foreground rounded-sm uppercase tracking-widest gap-2 sm:w-auto">
              Book the Assessment <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
