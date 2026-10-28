import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-28 pb-16 sm:pt-32 sm:pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="mb-8 text-4xl font-black sm:text-5xl md:text-6xl">
            Terms & Conditions
          </h1>
          
          <div className="prose max-w-none space-y-8 sm:prose-lg">
            <section>
              <h2 className="mb-4 text-2xl font-bold sm:text-3xl">1. Services Agreement</h2>
              <p className="text-muted-foreground leading-relaxed">
                By engaging Altar Technology ("the Agency"), you agree to these terms and conditions. 
                All services are provided subject to the scope of work outlined in your signed proposal or agreement.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">2. Payment Terms</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Deposit Requirement:</strong> A non-refundable 50% deposit is required before any work commences. 
                  The remaining 50% is due upon project completion or as outlined in your payment schedule.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Payment Methods:</strong> We accept bank transfers (EFT), credit card payments, and approved payment platforms.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Late Payments:</strong> Invoices not paid within 7 days of the due date may result in 
                  suspension of services and incur additional late payment fees.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">3. No Refund Policy</h2>
                <div className="border-l-4 border-primary bg-accent/30 p-4 sm:p-6">
                <p className="text-foreground font-semibold mb-2">
                  IMPORTANT: All payments are non-refundable.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Once work has commenced, no refunds will be issued for any reason. This includes but is not limited to: 
                  change of mind, dissatisfaction with results, or early termination of services. The 50% deposit is 
                  non-refundable under all circumstances as it covers initial setup, strategy development, and resource allocation.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">4. Project Deliverables & Timeline</h2>
              <p className="text-muted-foreground leading-relaxed">
                Project timelines are estimates and may vary based on client responsiveness, content approval times, 
                and unforeseen circumstances. Delays caused by the client (including late feedback, missing assets, 
                or delayed approvals) may extend the project timeline without additional cost adjustments.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">5. Client Responsibilities</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide timely feedback and approvals within agreed timeframes</li>
                <li>Supply accurate brand assets, access credentials, and necessary information</li>
                <li>Ensure all provided content is legally compliant and properly licensed</li>
                <li>Respond to communications within 3 business days to avoid project delays</li>
                <li>Review and approve all work before publication</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">6. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                Upon full payment, all custom-created content becomes the property of the client. However, the Agency 
                retains the right to showcase work in portfolios and case studies unless otherwise agreed in writing. 
                Stock images, fonts, and third-party assets remain the property of their respective owners.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">7. Campaign Performance</h2>
              <p className="text-muted-foreground leading-relaxed">
                While we strive for optimal results, the Agency cannot guarantee specific outcomes such as follower growth, 
                engagement rates, sales conversions, or ROI. Social media algorithms, market conditions, and audience behavior 
                are beyond our control. We provide strategic expertise and execution based on industry best practices.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">8. Cancellation & Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                Either party may terminate services with 30 days written notice. Upon termination, the client is responsible 
                for payment of all work completed to date. The 50% deposit remains non-refundable. Any unused funds for 
                pre-paid services (beyond completed work) will be refunded within 14 business days.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">9. Confidentiality</h2>
              <p className="text-muted-foreground leading-relaxed">
                Both parties agree to maintain confidentiality of sensitive business information shared during the engagement. 
                This includes but is not limited to: business strategies, financial information, customer data, and proprietary processes.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">10. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Agency's liability is limited to the total amount paid by the client for services rendered. We are not 
                liable for indirect, consequential, or incidental damages including loss of profits, business interruption, 
                or data loss.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">11. Dispute Resolution</h2>
              <p className="text-muted-foreground leading-relaxed">
                Any disputes arising from these terms shall be resolved through good faith negotiation. If resolution cannot 
                be reached, disputes will be handled through mediation or arbitration in South Africa under South African law.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">12. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Agency reserves the right to update these terms at any time. Clients will be notified of material changes. 
                Continued use of services after notification constitutes acceptance of updated terms.
              </p>
            </section>

            <section className="border-t pt-8 mt-12">
              <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
              <div className="space-y-2 text-muted-foreground">
                <p><strong className="text-foreground">Altar Technology</strong></p>
                <p>Email: <a href="mailto:hello@altar.technology" className="text-primary hover:underline">hello@altar.technology</a></p>
                <p>Phone: <a href="tel:+27816617013" className="text-primary hover:underline">081 661 7013</a></p>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                Last updated: {new Date().toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
