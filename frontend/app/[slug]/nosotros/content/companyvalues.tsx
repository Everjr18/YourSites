import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from 'next-intl';

const CompanyValues = () => {
  const t = useTranslations('NosotrosPage.CompanyValues');

  const values = [
    {
      title: t('values.innovation.title'),
      description: t('values.innovation.description'),
      icon: "💡"
    },
    {
      title: t('values.quality.title'),
      description: t('values.quality.description'),
      icon: "✨"
    },
    {
      title: t('values.commitment.title'),
      description: t('values.commitment.description'),
      icon: "🤝"
    },
    {
      title: t('values.adaptability.title'),
      description: t('values.adaptability.description'),
      icon: "🎯"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          {t('sectionTitle')}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="p-6 text-center">
              <div className="text-4xl mb-4">{value.icon}</div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold mb-3 text-primary">
                  {value.title}
                </CardTitle>
                <CardDescription className="">
                  {value.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyValues; 