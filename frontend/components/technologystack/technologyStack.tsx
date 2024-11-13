import { useTranslations } from "next-intl";
import { Card, CardTitle } from "../ui/card";
import { IconMysql, IconNextjs, IconNodejs, IconTailwind, IconTypescript } from "./iconsSvg";

interface Technology {
  name: string;
  icon: React.ReactNode;
  category: 'frontend' | 'backend' | 'mobile' | 'database';
}

const technologies: Technology[] = [
  { name: 'Next.js', icon: <IconNextjs/>, category: 'frontend' },
  { name: 'Typescript', icon: <IconTypescript/>, category: 'frontend' },
  { name: 'TailwindCSS', icon: <IconTailwind/>, category: 'frontend' },
  { name: 'Node.js', icon: <IconNodejs/>, category: 'backend' },
  { name: 'MySQL', icon: <IconMysql/>, category: 'database' },

  // Add more technologies
];

export default function TechnologyStack() {
    const t = useTranslations("TechnologyStack")
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t("title")}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {technologies.map((tech) => (
            <Card key={tech.name} className="flex flex-col items-center p-4 ">
              <span>{tech.icon}</span>
              <CardTitle className="text-lg font-medium">{tech.name}</CardTitle>
              <span className="text-sm text-muted-foreground">{tech.category}</span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 