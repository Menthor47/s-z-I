import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface PrivacyPolicyDialogProps {
  readonly className?: string;
}

export function PrivacyPolicyDialog({ className }: PrivacyPolicyDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className={cn(
            "text-sm text-muted-foreground hover:text-primary transition-colors underline-offset-2 hover:underline",
            className,
          )}
        >
          Privacy Policy
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Privacy Policy</DialogTitle>
        </DialogHeader>
        <ScrollArea className="mt-2 max-h-[60vh] pr-4">
          <div className="space-y-4 text-sm text-muted-foreground">
            <p>
              This Privacy Policy explains how S&amp;Z Trading International S.C.A. (&quot;S&amp;Z Trading International&quot;, &quot;we&quot;,
              &quot;us&quot; or &quot;our&quot;) collects, uses and protects your personal data when you interact with us, including via our
              website and logistics/relocation services.
            </p>
            <p>
              By using our website or services, you acknowledge that you have read this Privacy Policy.
            </p>

            <h3 className="font-semibold text-foreground">1. Data Controller</h3>
            <p>The data controller responsible for your personal data is:</p>
            <p>
              S&amp;Z Trading International S.C.A.
              <br />
              [insert full registered address in Spain]
              <br />
              [insert Spanish tax ID / CIF]
              <br />
              Spain
            </p>
            <p>Contact: [insert contact email]</p>

            <h3 className="font-semibold text-foreground">2. What Data We Collect</h3>
            <p>Depending on how you interact with us, we may collect:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <span className="font-medium text-foreground">Identification and contact data:</span> name, email, phone,
                company name, address.
              </li>
              <li>
                <span className="font-medium text-foreground">Service-related data:</span> shipment details,
                pick-up/delivery locations, goods description (only as needed), communication history.
              </li>
              <li>
                <span className="font-medium text-foreground">Website usage data:</span> IP address, browser type, pages
                visited (via cookies or similar).
              </li>
              <li>
                <span className="font-medium text-foreground">Marketing preferences:</span> your choices about receiving
                updates or offers.
              </li>
            </ul>
            <p>
              We do not intentionally collect special categories of data (health, religious beliefs, etc.). If such data is
              ever provided, it will be deleted where possible.
            </p>

            <h3 className="font-semibold text-foreground">3. How and Why We Use Your Data (Legal Bases)</h3>
            <p>
              We process personal data only where a legal basis exists under GDPR and Spanish data protection law
              (LOPDGDD):
            </p>
            <p className="font-medium text-foreground">To provide our services and respond to inquiries</p>
            <p>
              To answer questions, provide quotes, manage shipments, handle contracts and customer support.
              <br />
              <span className="font-medium text-foreground">Legal basis:</span> performance of a contract or steps prior to
              entering into a contract.
            </p>
            <p className="font-medium text-foreground">To operate and improve our website and services</p>
            <p>
              To ensure security, prevent abuse, analyze traffic and improve user experience.
              <br />
              <span className="font-medium text-foreground">Legal basis:</span> our legitimate interest in running and
              improving our business.
            </p>
            <p className="font-medium text-foreground">For legal and compliance purposes</p>
            <p>
              To comply with legal obligations (tax, accounting, transport regulations, customs, etc.) and to establish,
              exercise or defend legal claims.
              <br />
              <span className="font-medium text-foreground">Legal basis:</span> compliance with legal obligations and our
              legitimate interests.
            </p>
            <p className="font-medium text-foreground">For marketing (where allowed)</p>
            <p>
              To send updates or offers about our services, only in accordance with law and your preferences.
              <br />
              <span className="font-medium text-foreground">Legal basis:</span> your consent or our legitimate interest, as
              permitted by law. You can opt out at any time.
            </p>
            <p>We do not sell your personal data.</p>

            <h3 className="font-semibold text-foreground">4. How Long We Keep Your Data</h3>
            <p>We keep personal data only for as long as necessary:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <span className="font-medium text-foreground">Contract and shipment data:</span> kept for the duration of
                the relationship and for the period required by law (for example, for tax and accounting retention
                periods).
              </li>
              <li>
                <span className="font-medium text-foreground">Communication data (emails, contact forms):</span> kept for a
                reasonable period to manage inquiries and prove communications.
              </li>
              <li>
                <span className="font-medium text-foreground">Marketing data:</span> kept until you withdraw consent or
                object, or until we no longer use it.
              </li>
            </ul>
            <p>When data is no longer needed, it is securely deleted or anonymized.</p>

            <h3 className="font-semibold text-foreground">5. Who We Share Your Data With</h3>
            <p>We may share your data with:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <span className="font-medium text-foreground">Service providers / processors:</span> IT hosting, email
                services, CRM systems and other tools that help us operate. They process data only on our instructions and
                under confidentiality obligations.
              </li>
              <li>
                <span className="font-medium text-foreground">Logistics and business partners:</span> carriers, agents,
                customs brokers or other partners when required to perform your requested services.
              </li>
              <li>
                <span className="font-medium text-foreground">Authorities or third parties:</span> when required by law, to
                protect our rights, or to comply with legal procedures.
              </li>
            </ul>
            <p>We do not allow our service providers to use your data for their own marketing.</p>

            <h3 className="font-semibold text-foreground">6. Your Rights</h3>
            <p>
              Under GDPR and Spanish data protection law (LOPDGDD), you may have the right to:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Access your personal data and obtain a copy.</li>
              <li>Rectify inaccurate or incomplete data.</li>
              <li>Erase your data in certain circumstances (&quot;right to be forgotten&quot;).</li>
              <li>Restrict the processing of your data in specific situations.</li>
              <li>Object to processing based on legitimate interests or direct marketing.</li>
              <li>Data portability, where applicable.</li>
              <li>Withdraw consent at any time where processing is based on consent.</li>
            </ul>
            <p>
              You also have the right to lodge a complaint with the Spanish Data Protection Agency (AEPD) if you believe
              your rights have been violated.
            </p>
            <p>To exercise your rights, contact us at: [insert contact email].</p>

            <h3 className="font-semibold text-foreground">7. Security</h3>
            <p>
              We take appropriate technical and organizational measures to protect your personal data against unauthorized
              access, loss, alteration or disclosure. However, no system is completely secure.
            </p>

            <h3 className="font-semibold text-foreground">8. Cookies and Similar Technologies</h3>
            <p>Our website may use cookies and similar technologies to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Enable core site functionality.</li>
              <li>Analyze traffic and usage.</li>
              <li>Remember your preferences.</li>
            </ul>
            <p>
              Where required by law, you will be asked to consent to non-essential cookies. You can change your preferences
              at any time via your browser settings.
            </p>

            <h3 className="font-semibold text-foreground">9. Changes to This Policy</h3>
            <p>
              We may update this Privacy Policy from time to time. When we do, the &quot;Last updated&quot; date will be
              changed.
            </p>
            <p>Last updated: [insert date]</p>

            <h3 className="font-semibold text-foreground">10. How to Contact Us</h3>
            <p>For any questions or requests about this Privacy Policy or your personal data, please contact:</p>
            <p>
              S&amp;Z Trading International S.C.A.
              <br />
              [insert full registered address in Spain]
              <br />
              Email: [insert contact email]
            </p>
            <p className="pt-2">
              For the full detailed Privacy Notice, you can also view our
              {" "}
              <a
                href="/privacy.html"
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline"
              >
                complete privacy policy page
              </a>
              .
            </p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
