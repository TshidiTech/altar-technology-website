import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-28 pb-16 sm:pt-32 sm:pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="mb-8 text-4xl font-black sm:text-5xl md:text-6xl">
            Privacy Policy
          </h1>
          
          <div className="prose max-w-none space-y-8 sm:prose-lg">
            <section>
              <h2 className="mb-4 text-2xl font-bold sm:text-3xl">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Altar Technology ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy 
                explains how we collect, use, disclose, and safeguard your information when you visit our website or 
                use our services.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">2. Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Personal Information</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We may collect personal information that you voluntarily provide when you:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-2">
                    <li>Fill out contact forms or inquiry forms</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Engage our services</li>
                    <li>Communicate with us via email, phone, or social media</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-2">
                    This may include: name, email address, phone number, company name, job title, social media handles, 
                    website URL, and any other information you choose to provide.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Automatically Collected Information</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    When you visit our website, we may automatically collect certain information about your device, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-2">
                    <li>IP address and location data</li>
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>Pages visited and time spent on pages</li>
                    <li>Referring website addresses</li>
                    <li>Device identifiers and mobile network information</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide, operate, and maintain our services</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Process payments and fulfill contracts</li>
                <li>Improve our website and services</li>
                <li>Analyze usage patterns and trends</li>
                <li>Comply with legal obligations</li>
                <li>Prevent fraud and enhance security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">4. How We Share Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Service Providers:</strong> Third-party vendors who assist with website hosting, email delivery, payment processing, analytics, and marketing automation</li>
                <li><strong className="text-foreground">Social Media Platforms:</strong> When managing campaigns on your behalf, we share necessary information with platforms like Instagram, TikTok, Facebook, etc.</li>
                <li><strong className="text-foreground">Legal Requirements:</strong> When required by law, court order, or government request</li>
                <li><strong className="text-foreground">Business Transfers:</strong> In connection with a merger, sale, or acquisition of all or part of our business</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We do not sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">5. Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, 
                and understand user behavior. You can control cookie preferences through your browser settings. However, 
                disabling cookies may limit certain functionality of our website.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">6. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your information from 
                unauthorized access, disclosure, alteration, or destruction. However, no internet transmission is 100% secure, 
                and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">7. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, 
                unless a longer retention period is required by law. Client project data is typically retained for 7 years 
                for legal and accounting purposes.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">8. Your Privacy Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Under South African law (POPIA), you have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Access your personal information we hold</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information (subject to legal requirements)</li>
                <li>Object to processing of your information</li>
                <li>Withdraw consent for marketing communications</li>
                <li>Lodge a complaint with the Information Regulator</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                To exercise these rights, contact us at <a href="mailto:admin@brandhype.co.za" className="text-primary hover:underline">admin@brandhype.co.za</a>.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">9. Third-Party Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices 
                of these external sites. We encourage you to review their privacy policies before providing any information.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">10. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal 
                information from children. If you believe we have collected information from a child, please contact us 
                immediately.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">11. International Data Transfers</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your information may be transferred to and processed in countries other than South Africa. We ensure 
                appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">12. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by 
                posting the new policy on this page and updating the "Last Updated" date. Your continued use of our 
                services after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="border-t pt-8 mt-12">
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <div className="space-y-2 text-muted-foreground">
                <p><strong className="text-foreground">Altar Technology</strong></p>
                <p>Email: <a href="mailto:admin@brandhype.co.za" className="text-primary hover:underline">admin@brandhype.co.za</a></p>
                <p>Phone: <a href="tel:+27816617013" className="text-primary hover:underline">081 661 7013</a></p>
                <p>WhatsApp: <a href="https://wa.me/27816617013" className="text-primary hover:underline">081 661 7013</a></p>
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
