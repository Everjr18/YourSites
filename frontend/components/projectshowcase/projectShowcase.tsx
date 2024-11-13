import { useTranslations } from "next-intl";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

// Define project IDs for type safety
const PROJECT_IDS = ['educationalPlatform'] as const;
type ProjectId = typeof PROJECT_IDS[number];

interface ProjectImage {
  id: ProjectId;
  image: string;
}

// Keep images separate from translations
const PROJECT_IMAGES: ProjectImage[] = [
  {
    id: 'educationalPlatform',
    image: './platformEducation.webp',
  },
];

export default function ProjectShowcase() {
  const t = useTranslations("ProjectShowcase");

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t("title")}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {PROJECT_IDS.map((projectId) => {
            const projectImage = PROJECT_IMAGES.find(p => p.id === projectId)?.image;
            const technologies = t.raw(`projects.${projectId}.technologies`) as string[];
            
            return (
              <Card key={projectId} className="overflow-hidden">
                <img 
                  src={projectImage} 
                  alt={t(`projects.${projectId}.title`)} 
                  className="w-full h-48 object-cover" 
                />
                <div>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold mb-3">
                      {t(`projects.${projectId}.title`)}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground mb-4">
                      {t(`projects.${projectId}.description`)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {technologies.map((tech: string) => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {['conversionRate', 'loadTime'].map((metricId) => (
                        <div key={metricId} className="text-center">
                          <div className="text-2xl font-bold text-blue-600">
                            {t(`projects.${projectId}.metrics.${metricId}.value`)}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {t(`projects.${projectId}.metrics.${metricId}.label`)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
} 