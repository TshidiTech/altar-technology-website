import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQChatbot } from "@/components/FAQChatbot";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Search, Paintbrush, RefreshCw, Rocket } from "lucide-react";
import tshidiMoepi from "@/assets/team/Confident_elegance_in_monochrome_fashion.png.asset.json";
import dingaanManjate from "@/assets/team/157629.jpg.asset.json";
import boitumeloLatola from "@/assets/team/157634.jpg.asset.json";
import kutlwanoTake from "@/assets/team/157633.jpg.asset.json";
import zusipheMvovo from "@/assets/team/157632.png.asset.json";
import katlegoMalaka from "@/assets/team/157631.png.asset.json";
import milaniSani from "@/assets/team/157630.jpg.asset.json";
import tshepoHanyane from "@/assets/team/117340.jpg.asset.json";

const team = [
  { name: "Tshidi Moepi", role: "CEO / AI Workflow Engineer", img: tshidiMoepi.url },
  { name: "Dingaan Manjate", role: "CTO", img: dingaanManjate.url },
  { name: "Boitumelo Latola", role: "Operations Manager", img: boitumeloLatola.url },
  { name: "Kutlwano Take", role: "Senior Developer", img: kutlwanoTake.url },
  { name: "Zusiphe Mvovo", role: "Project Delivery Lead", img: zusipheMvovo.url },
  { name: "Katlego Malaka", role: "Software Developer", img: katlegoMalaka.url },
  { name: "Milani Sani", role: "Software Developer", img: milaniSani.url },
  { name: "Tshepo Hanyane", role: "Software Developer", img: tshepoHanyane.url },
];

const steps = [
  { icon: Search, title: "Problem & Research", desc: "We start with the problem, not the technology — mapping the business context, people and data before anything is built." },
  { icon: Paintbrush, title: "Design & Prototype", desc: "We design the solution and prototype it quickly so decisions are made against something real." },
  { icon: RefreshCw, title: "Build & Launch", desc: "We engineer the platform with clean architecture, test it thoroughly and launch with your teams ready." },
  { icon: Rocket, title: "Improve", desc: "We measure, optimise and extend the solution as your organisation grows." },
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
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Altar Technology</span>
          </h1>
          <p className="mx-auto max-w-2xl text-base text-dark-foreground/80 sm:text-xl">
            A South African technology company building AI, data, cloud and software solutions that make organisations work better.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid items-center gap-8 md:grid-cols-[0.9fr_1.1fr]">
            <div className="relative border-2 border-border bg-background p-2 shadow-brutal-xl">
              <img
                src={tshidiMoepi.url}
                alt="Tshidi Moepi, CEO and AI Workflow Engineer at Altar Technology"
                className="aspect-[4/5] w-full object-cover object-top"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                width={1024}
                height={1280}
              />
              <div className="absolute -bottom-4 left-4 border-2 border-border bg-primary px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary-foreground shadow-card sm:left-6">
                Tshidi Moepi — CEO
              </div>
            </div>
            <div className="prose prose-lg max-w-none">
              <div className="mb-4 inline-flex border-2 border-border bg-accent px-3 py-2 text-xs font-bold uppercase tracking-widest shadow-card">
                Technology / Training / Staffing
              </div>
            <p className="mb-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Altar Technology is a technology company built around one belief: technology should solve real business problems. We deliver artificial intelligence, data, cloud and custom software for organisations that need systems they can trust.
            </p>
            <p className="mb-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Our new era goes beyond building systems. We provide the technology, the training and the staffing for IT support and customer service — purpose-built for call centre and BPO operations that need to serve better at scale.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              We start with the problem. Not the technology. Every engagement moves through research, design, prototyping, engineering and continuous improvement — so what we build fits the way your business actually runs.
            </p>
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
