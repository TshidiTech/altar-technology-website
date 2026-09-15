import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQChatbot } from "@/components/FAQChatbot";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Search, Paintbrush, RefreshCw, Rocket } from "lucide-react";
import tshidiMoepi from "@/assets/team/tshidi-moepi.png.asset.json";
import kutlwanoTake from "@/assets/team/kutlwano-take.jpg.asset.json";
import dingaanManjate from "@/assets/team/dingaan-manjate.jpg.asset.json";
import zusipheMvovo from "@/assets/team/zusiphe-mvovo.jpg.asset.json";
import katlegoMalaka from "@/assets/team/katlego-malaka.png.asset.json";
import milaniSani from "@/assets/team/milani-sani.jpg.asset.json";
import boitumeloLatola from "@/assets/team/boitumelo-latola.jpg.asset.json";
import tshepoMasinge from "@/assets/team/tshepo-masinge.png.asset.json";

const steps = [
  { icon: Search, title: "Discovery & Planning", desc: "We dive deep into your business, goals, audience, and challenges to define a clear project roadmap." },
  { icon: Paintbrush, title: "Design & Development", desc: "Our team designs and builds your solution with modern tools, clean architecture, and pixel-perfect UI." },
  { icon: RefreshCw, title: "Review & Refine", desc: "We iterate based on your feedback, test thoroughly, and optimize for performance and usability." },
  { icon: Rocket, title: "Launch & Training", desc: "We deploy your solution, provide hands-on training, and offer ongoing support to ensure success." },
];

const team = [
  { name: "Tshidi Moepi", role: "CEO / AI Workflow Engineer", image: tshidiMoepi.url },
  { name: "Dingaan Manjate", role: "CTO", image: dingaanManjate.url },
  { name: "Boitumelo Latola", role: "Operations Manager", image: boitumeloLatola.url },
  { name: "Kutlwano Take", role: "Senior Developer", image: kutlwanoTake.url },
  { name: "Zusiphe Mvovo", role: "Intern", image: zusipheMvovo.url },
  { name: "Katlego Malaka", role: "Intern", image: katlegoMalaka.url },
  { name: "Milani Sani", role: "Intern", image: milaniSani.url },
  { name: "Tshepo Masinge", role: "Intern", image: tshepoMasinge.url },
];


export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FAQChatbot />
      <WhatsAppButton />

      <section className="pt-28 pb-12 bg-dark text-dark-foreground sm:pt-32 sm:pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-black sm:text-5xl md:text-7xl">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Brand Hype</span>
          </h1>
          <p className="mx-auto max-w-2xl text-base text-dark-foreground/80 sm:text-xl">
            A scalable digital solutions company building the future, one project at a time.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid items-center gap-8 md:grid-cols-[0.9fr_1.1fr]">
            <div className="relative border-2 border-border bg-background p-2 shadow-brutal-xl">
              <img
                src={tshidiMoepi.url}
                alt="Tshidi Moepi, CEO and AI Workflow Engineer at Brand Hype"
                className="aspect-[4/5] w-full object-cover object-[62%_42%]"
                loading="lazy"
                width={1280}
                height={1600}
              />
              <div className="absolute -bottom-4 left-4 border-2 border-border bg-primary px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary-foreground shadow-card sm:left-6">
                Tshidi Moepi
              </div>
            </div>
            <div className="prose prose-lg max-w-none">
              <div className="mb-4 inline-flex border-2 border-border bg-accent px-3 py-2 text-xs font-bold uppercase tracking-widest shadow-card">
                CEO / AI Workflow Engineer
              </div>
            <p className="mb-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Brand Hype started as a social media marketing agency and has evolved into a full-service digital solutions company. We build custom websites, mobile apps, enterprise systems, AI-powered tools, and marketing campaigns that help businesses grow and scale.
            </p>
            <p className="mb-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Our team combines strategic thinking with technical execution. Whether you're a startup launching your first MVP or an enterprise needing complex automation, we deliver solutions that are modern, intelligent, and built to scale.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              We work with ambitious clients across industries — from BPO and logistics to beauty, education, and finance. Our approach is simple: understand the problem, design the solution, build it right, and support it long-term.
            </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-border bg-accent py-12 sm:py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mb-10 max-w-2xl sm:mb-12">
            <div className="mb-3 inline-flex border-2 border-border bg-primary px-3 py-2 text-xs font-bold uppercase tracking-widest text-primary-foreground shadow-card">
              The People Behind The Work
            </div>
            <h2 className="text-3xl font-black sm:text-4xl">Meet Our Team</h2>
          </div>

          <div className="mb-12">
            <h3 className="mb-5 border-b-2 border-border pb-3 text-sm font-black uppercase tracking-widest">Leadership</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {leadership.map((member, index) => (
                <article key={member.name} className="border-2 border-border bg-background p-2 shadow-brutal">
                  <div className="relative overflow-hidden border-2 border-border bg-muted">
                    <img
                      src={member.image}
                      alt={`${member.name}, ${member.role} at Brand Hype`}
                      className={`aspect-[4/5] w-full object-cover ${member.position}`}
                      loading="lazy"
                      width={600}
                      height={750}
                    />
                    <span className="absolute left-3 top-3 border-2 border-border bg-secondary px-2 py-1 text-xs font-black text-secondary-foreground">
                      0{index + 2}
                    </span>
                  </div>
                  <div className="px-2 pb-3 pt-4">
                    <h4 className="text-xl font-black">{member.name}</h4>
                    <p className="mt-1 text-sm font-bold uppercase tracking-widest text-primary">{member.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 border-b-2 border-border pb-3 text-sm font-black uppercase tracking-widest">Emerging Talent</h3>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
              {interns.map((member) => (
                <article key={member.name} className="border-2 border-border bg-background p-2 shadow-brutal-sm">
                  <img
                    src={member.image}
                    alt={`${member.name}, Intern at Brand Hype`}
                    className={`aspect-[4/5] w-full border-2 border-border bg-muted object-cover ${member.position}`}
                    loading="lazy"
                    width={500}
                    height={625}
                  />
                  <div className="px-1 pb-2 pt-3">
                    <h4 className="text-base font-black sm:text-lg">{member.name}</h4>
                    <p className="mt-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">Intern</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/30 sm:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="mb-10 text-center text-3xl font-black sm:mb-16 sm:text-4xl">
            How We <span className="bg-gradient-primary bg-clip-text text-transparent">Work</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <Card key={i} className="p-6 text-center border-2 border-border hover:border-primary/20 transition-all">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-sm font-bold text-primary mb-2">Step {i + 1}</div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark text-dark-foreground sm:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-black sm:text-4xl">Let's Build <span className="bg-gradient-primary bg-clip-text text-transparent">Together</span></h2>
          <p className="mb-8 text-base text-dark-foreground/80 sm:text-xl">Ready to start your next project?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/lead-capture" className="w-full sm:w-auto">
              <Button size="lg" className="w-full bg-gradient-primary hover:shadow-glow rounded-sm text-base gap-2 sm:text-lg">
                Start Project <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <a href="https://calendar.app.google/pkkvMSJBS3DQLPSW8" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full rounded-sm text-base sm:text-lg">
                Schedule a Call
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
