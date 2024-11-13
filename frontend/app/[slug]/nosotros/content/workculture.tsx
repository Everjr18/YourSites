import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useTranslations } from 'next-intl';

const WorkCulture = () => {
  const t = useTranslations('NosotrosPage.WorkCulture');

  const culturePoints = [
    {
      title: t('agile.title'),
      description: t('agile.description'),
      image: "/images/culture/agile-development.webp"
    },
    {
      title: t('innovation.title'),
      description: t('innovation.description'),
      image: "/images/culture/innovation.webp"
    },
    {
      title: t('collaboration.title'),
      description: t('collaboration.description'),
      image: "/images/culture/client-collaboration.webp"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t('sectionTitle')}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {culturePoints.map((point, index) => (
            <Card key={index} className="relative group">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <Image
                  src={point.image}
                  alt={point.title}
                  className="rounded-lg object-cover w-full h-full"
                  width={200}
                  height={200}
                />
              </div>
              <div className="p-6 transform group-hover:-translate-y-2 transition-transform duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold mb-3 text-primary">{point.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{point.description}</CardDescription>
                </CardHeader>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkCulture;


