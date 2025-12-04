import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { MapPin } from "lucide-react";
import { QuoteFormData } from "@/lib/validations";

export function RouteDetails() {
    const { register, formState: { errors } } = useFormContext<QuoteFormData>();

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="flex items-center space-x-3 mb-6">
                <MapPin className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold">Route Details</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="text-sm font-medium mb-2 block">Origin City/Location</label>
                    <Input
                        placeholder="e.g., Madrid"
                        {...register("origin")}
                        aria-invalid={Boolean(errors.origin)}
                    />
                    {errors.origin && (
                        <p className="text-sm text-destructive mt-1">{errors.origin.message}</p>
                    )}
                </div>
                <div>
                    <label className="text-sm font-medium mb-2 block">Destination City/Location</label>
                    <Input
                        placeholder="e.g., Paris"
                        {...register("destination")}
                        aria-invalid={Boolean(errors.destination)}
                    />
                    {errors.destination && (
                        <p className="text-sm text-destructive mt-1">{errors.destination.message}</p>
                    )}
                </div>

                <div>
                    <label className="text-sm font-medium mb-2 block">Pickup Date</label>
                    <Input
                        type="date"
                        {...register("pickupDate")}
                    />
                </div>
                <div>
                    <label className="text-sm font-medium mb-2 block">Desired Delivery Date</label>
                    <Input
                        type="date"
                        {...register("deliveryDate")}
                    />
                </div>
            </div>
        </div>
    );
}
