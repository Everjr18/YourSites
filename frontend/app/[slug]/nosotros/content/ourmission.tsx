import { Card } from '@/components/ui/card';
import { useTranslations } from 'next-intl';

const OurMission = () => {
  const t = useTranslations('NosotrosPage.OurMission');

  const content = {
    mission: {
      title: t('mission.title'),
      text: t('mission.text')
    },
    vision: {
      title: t('vision.title'),
      text: t('vision.text')
    },
    goals: {
      title: t('goals.title'),
      items: [
        t('goals.item1'),
        t('goals.item2'),
        t('goals.item3')
      ]
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className=" p-8 ">
            <h2 className="text-2xl font-bold mb-4 text-primary">{content.mission.title}</h2>
            <p className="text-muted-foreground">{content.mission.text}</p>
          </Card>
          <Card className=" p-8 ">
            <h2 className="text-2xl font-bold mb-4 text-primary">{content.vision.title}</h2>
            <p className="text-muted-foreground">{content.vision.text}</p>
          </Card>
          <Card className=" p-8 ">
            <h2 className="text-2xl font-bold mb-4 text-primary">{content.goals.title}</h2>
            <ul className="list-disc list-inside text-muted-foreground">
              {content.goals.items.map((goal, index) => (
                <li key={index} className="mb-2">{goal}</li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OurMission; 