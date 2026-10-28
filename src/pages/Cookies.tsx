import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Cookies() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-28 pb-16 sm:pt-32 sm:pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="mb-8 text-4xl font-black sm:text-5xl md:text-6xl">
            Cookie Policy
          </h1>
          
          <div className="prose max-w-none space-y-8 sm:prose-lg">
            <section>
              <h2 className="mb-4 text-2xl font-bold sm:text-3xl">1. What Are Cookies?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies are small text files stored on your device (computer, tablet, or mobile) when you visit websites. 
                They help websites remember your preferences, analyze traffic, and provide a better user experience.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">2. How We Use Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Altar Technology uses cookies to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Remember your preferences and settings</li>
                <li>Understand how you use our website</li>
                <li>Improve website performance and user experience</li>
                <li>Provide relevant content and marketing</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Enable social media features</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">3. Types of Cookies We Use</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Essential Cookies</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Required for the website to function properly. These cookies enable basic features like page navigation, 
                    form submissions, and access to secure areas. The website cannot function properly without these cookies.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Analytics Cookies</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Help us understand how visitors interact with our website by collecting and reporting anonymous information. 
                    We use tools like Google Analytics to track page views, bounce rates, traffic sources, and user behavior.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Marketing Cookies</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Used to deliver relevant ads and track marketing campaign effectiveness. These cookies track your browsing 
                    activity across websites and may be set by our advertising partners like Facebook, Google Ads, or LinkedIn.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Functionality Cookies</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Remember your preferences and choices (e.g., language, region, theme) to provide enhanced, personalized features. 
                    Without these cookies, some functionality may be limited.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">4. Third-Party Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                We use third-party services that may set their own cookies:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Google Analytics:</strong> Tracks website usage and visitor behavior</li>
                <li><strong className="text-foreground">Facebook Pixel:</strong> Measures ad effectiveness and retargeting</li>
                <li><strong className="text-foreground">LinkedIn Insight Tag:</strong> Tracks conversions and website demographics</li>
                <li><strong className="text-foreground">Google Ads:</strong> Delivers targeted advertising</li>
                <li><strong className="text-foreground">Social Media Platforms:</strong> Enables social sharing buttons</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                These third parties have their own privacy policies, and we have no control over their cookies.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">5. Session vs. Persistent Cookies</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Session Cookies</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Temporary cookies that expire when you close your browser. They help maintain your session as you navigate 
                    between pages.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Persistent Cookies</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Remain on your device for a set period or until you delete them. They remember your preferences and 
                    recognize you when you return to our site.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">6. How to Control Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have the right to accept or reject cookies. Here's how:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Browser Settings</h3>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    Most browsers allow you to control cookies through their settings:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li><strong className="text-foreground">Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                    <li><strong className="text-foreground">Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                    <li><strong className="text-foreground">Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                    <li><strong className="text-foreground">Edge:</strong> Settings → Cookies and site permissions</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Opt-Out Tools</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You can opt out of targeted advertising through:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-2">
                    <li>Google Ads Settings: <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">adssettings.google.com</a></li>
                    <li>Facebook Ad Preferences: Settings → Ads</li>
                    <li>Network Advertising Initiative: <a href="https://optout.networkadvertising.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">optout.networkadvertising.org</a></li>
                  </ul>
                </div>

                <div className="bg-accent/30 border-l-4 border-primary p-6 rounded-lg">
                  <p className="text-foreground font-semibold mb-2">
                    Important Note:
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Disabling cookies may affect website functionality and your user experience. Some features may not work properly 
                    if you block or delete cookies.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">7. Cookie Consent</h2>
              <p className="text-muted-foreground leading-relaxed">
                When you first visit our website, you'll see a cookie consent banner. By clicking "Accept" or continuing to 
                browse, you consent to our use of cookies as described in this policy. You can withdraw consent at any time 
                by adjusting your browser settings or contacting us.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">8. Updates to This Cookie Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Cookie Policy periodically to reflect changes in our practices or legal requirements. 
                Please review this page regularly to stay informed about how we use cookies.
              </p>
            </section>

            <section className="border-t pt-8 mt-12">
              <h2 className="text-3xl font-bold mb-4">Questions About Cookies?</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>If you have questions about our use of cookies, please contact us:</p>
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
