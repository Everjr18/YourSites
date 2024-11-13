import { useTranslations } from "next-intl";

// Define FAQ IDs for type safety
const FAQ_IDS = ['technologies', 'security', 'process', 'support'] as const;
type FaqId = typeof FAQ_IDS[number];

interface FAQ {
  id: FaqId;
}

const faqs: FAQ[] = FAQ_IDS.map(id => ({ id }));

export default function FAQSection() {
  const t = useTranslations('FAQSection');

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t('title')}
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq) => (
            <div key={faq.id} className="mb-6">
              <h3 className="text-xl font-bold mb-2">
                {t(`faqs.${faq.id}.question`)}
              </h3>
              <p className="text-gray-600">
                {t(`faqs.${faq.id}.answer`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 