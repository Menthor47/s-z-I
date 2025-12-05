import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Package } from "lucide-react";
import { QuoteFormData } from "@/lib/validations";
import { SPECIAL_REQUIREMENTS } from "@/lib/constants";

export function CargoDetails() {
    const { register, watch, setValue, formState: { errors } } = useFormContext<QuoteFormData>();
    const selectedRequirements = watch("specialRequirements") || [];

    const handleRequirementChange = (checked: boolean | string, option: string) => {
        if (checked) {
            setValue("specialRequirements", [...selectedRequirements, option]);
        } else {
            setValue(
                "specialRequirements",
                selectedRequirements.filter((r) => r !== option)
            );
        }
    };

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="flex items-center space-x-3 mb-6">
                <Package className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold">Cargo Details</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="text-sm font-medium mb-2 block">Weight (kg)</label>
                    <Input
                        type="number"
                        placeholder="1000"
                        {...register("weight")}
                        aria-invalid={Boolean(errors.weight)}
                    />
                    {errors.weight && (
                        <p className="text-sm text-destructive mt-1">{errors.weight.message}</p>
                    )}
                </div>

                <div>
                    <label className="text-sm font-medium mb-2 block">Length (cm)</label>
                    <Input
                        type="number"
                        placeholder="200"
                        {...register("length")}
                    />
                </div>
                <div>
                    <label className="text-sm font-medium mb-2 block">Width (cm)</label>
                    <Input
                        type="number"
                        placeholder="100"
                        {...register("width")}
                    />
                </div>
                <div>
                    <label className="text-sm font-medium mb-2 block">Height (cm)</label>
                    <Input
                        type="number"
                        placeholder="100"
                        {...register("height")}
                    />
                </div>
            </div>
            <div>
                <label className="text-sm font-medium mb-3 block">Special Requirements</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {SPECIAL_REQUIREMENTS.map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                            <Checkbox
                                id={option}
                                checked={selectedRequirements.includes(option)}
                                onCheckedChange={(checked) => handleRequirementChange(checked, option)}
                            />
                            <label htmlFor={option} className="text-sm cursor-pointer">
                                {option}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
