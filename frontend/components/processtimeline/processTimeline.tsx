import { useTranslations } from "next-intl";

// Define step IDs for type safety
const STEP_IDS = ['discovery', 'planning', 'development', 'deployment', 'maintenance'] as const;
type StepId = typeof STEP_IDS[number];

interface ProcessStep {
  id: StepId;
}

const steps: ProcessStep[] = STEP_IDS.map(id => ({ id }));

export default function ProcessTimeline() {
  const t = useTranslations('ProcessTimeline');

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t('title')}
        </h2>
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.id} className="flex mb-8 last:mb-0">
              <div className="flex flex-col items-center mr-4">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-500 rounded-full text-white text-2xl">
                  {t(`steps.${step.id}.icon`)}
                </div>
                {index !== steps.length - 1 && (
                  <div className="w-1 h-full bg-blue-200 my-2" />
                )}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">
                  {t(`steps.${step.id}.title`)}
                </h3>
                <p className="text-gray-600 mb-2">
                  {t(`steps.${step.id}.description`)}
                </p>
                <span className="text-sm text-blue-600">
                  {t(`steps.${step.id}.duration`)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 