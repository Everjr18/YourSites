import { useTranslations } from "next-intl";
import { Card } from "../ui/card";

// Define plan IDs for type safety
const PLAN_IDS = ['basic', 'professional', 'enterprise'] as const;
type PlanId = typeof PLAN_IDS[number];

interface PricingPlan {
  id: PlanId;
  isPopular?: boolean;
}

const plans: PricingPlan[] = [
  { id: 'basic' },
  { id: 'professional', isPopular: true },
  { id: 'enterprise' }
];

export default function PricingPlans() {
  const t = useTranslations("PricingPlans");

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t("title")}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => {
            const features = t.raw(`plans.${plan.id}.features`) as string[];
            
            return (
              <Card
                key={plan.id}
                className={`p-6 relative ${
                  plan.isPopular ? 'border-2 border-blue-500' : ''
                }`}
              >
                {plan.isPopular && (
                  <span className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 text-sm rounded-bl">
                    {t("popularBadge")}
                  </span>
                )}
                <h3 className="text-xl font-bold mb-2">
                  {t(`plans.${plan.id}.name`)}
                </h3>
                <div className="text-3xl font-bold mb-4">
                  {t(`plans.${plan.id}.price`)}
                </div>
                <p className="text-muted-foreground mb-6">
                  {t(`plans.${plan.id}.description`)}
                </p>
                <ul className="space-y-3 mb-6">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  {t("getStarted")}
                </button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
} 