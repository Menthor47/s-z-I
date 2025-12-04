import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { User } from "lucide-react";
import { QuoteFormData } from "@/lib/validations";

export function ContactInfo() {
    const { register, formState: { errors } } = useFormContext<QuoteFormData>();

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="flex items-center space-x-3 mb-6">
                <User className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold">Contact Information</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="text-sm font-medium mb-2 block">Full Name *</label>
                    <Input
                        placeholder="John Doe"
                        {...register("contactName")}
                        aria-invalid={Boolean(errors.contactName)}
                    />
                    {errors.contactName && (
                        <p className="text-sm text-destructive mt-1">{errors.contactName.message}</p>
                    )}
                </div>

                <div>
                    <label className="text-sm font-medium mb-2 block">Company Name</label>
                    <Input
                        placeholder="Company Ltd"
                        {...register("companyName")}
                    />
                </div>
                <div>
                    <label className="text-sm font-medium mb-2 block">Email Address *</label>
                    <Input
                        type="email"
                        placeholder="john@company.com"
                        {...register("email")}
                        aria-invalid={Boolean(errors.email)}
                    />
                    {errors.email && (
                        <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                    )}
                </div>
                <div>
                    <label className="text-sm font-medium mb-2 block">Phone Number *</label>
                    <Input
                        type="tel"
                        placeholder="+34 600 123 456"
                        {...register("phone")}
                        aria-invalid={Boolean(errors.phone)}
                    />
                    {errors.phone && (
                        <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
                    )}
                </div>
            </div>
        </div>
    );
}
