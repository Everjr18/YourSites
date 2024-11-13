import { useTranslations } from "next-intl";
import { Card, CardDescription, CardTitle } from "../ui/card";

// Define service IDs for type safety
const SERVICE_IDS = ['webDev', 'aiIntegration', 'apiDev'] as const;
type ServiceId = typeof SERVICE_IDS[number];

export default function ServiceCategories() {
  const t = useTranslations("ServiceCategories");

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t("title")}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICE_IDS.map((serviceId) => (
            <Card key={serviceId} className="p-4">
              <div className="text-4xl mb-4">
                {t(`services.${serviceId}.icon`)}
              </div>
              <CardTitle className="text-xl font-bold mb-3">
                {t(`services.${serviceId}.title`)}
              </CardTitle>
              <CardDescription className="text-muted-foreground mb-4">
                {t(`services.${serviceId}.description`)}
              </CardDescription>
              <ul className="space-y-2">
                {/* Using Array.from because we can't map directly over translation arrays */}
                {Array.from({ length: 4 }).map((_, index) => {
                  // Try to get the benefit translation, return null if it doesn't exist
                  try {
                    const benefit = t(`services.${serviceId}.benefits.${index}`);
                    return (
                      <li key={index} className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        {benefit}
                      </li>
                    );
                  } catch {
                    return null;
                  }
                }).filter(Boolean)}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 