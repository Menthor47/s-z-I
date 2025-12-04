import { CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

export function QuoteSummary() {
    return (
        <div className="text-center space-y-6 py-8 animate-in zoom-in-95 duration-500">
            <div className="flex justify-center">
                <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="h-12 w-12 text-primary" />
                </div>
            </div>
            <h3 className="text-3xl font-bold">Quote Request Submitted!</h3>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
                Thank you for choosing S&Z Trading. Our logistics team will review your request and send you a detailed formal quote within 2 business hours.
            </p>
            <div className="bg-muted/30 p-6 rounded-lg max-w-md mx-auto">
                <p className="font-medium mb-2">What happens next?</p>
                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                    <li>✓ You'll hear from us within the next 2 business hours.</li>
                    <li>✓ Our team reviews your requirements</li>
                    <li>✓ You'll receive a formal quote within 2 hours</li>
                    <li className="text-base">
                        ✓ Questions? Call us at{" "}
                        <a
                            href={`tel:${BUSINESS_INFO.phoneRaw}`}
                            className="font-semibold hover:text-primary transition-colors"
                        >
                            {BUSINESS_INFO.phone}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
