import { useTranslations } from "next-intl";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";

// Define testimonial IDs for type safety
const TESTIMONIAL_IDS = ['john'] as const;
type TestimonialId = typeof TESTIMONIAL_IDS[number];

interface TestimonialImage {
  id: TestimonialId;
  image: string;
}

// Keep images separate from translations
const TESTIMONIAL_IMAGES: TestimonialImage[] = [
  {
    id: 'john',
    image: '/images/DiegoFoto.jpg',
  },
];

export default function TestimonialsSection() {
  const t = useTranslations("TestimonialsSection");

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t("title")}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIAL_IDS.map((testimonialId) => {
            const testimonialImage = TESTIMONIAL_IMAGES.find(t => t.id === testimonialId)?.image;
            const rating = t.raw(`testimonials.${testimonialId}.rating`) as number;
            
            return (
              <Card key={testimonialId}>
                <div className="flex items-center mb-4">
                  <Image 
                    src={testimonialImage || '/images/defaultavatar.webp'}
                    alt={t(`testimonials.${testimonialId}.name`)} 
                    className="w-12 h-12 rounded-full ml-6" 
                    width={48}
                    height={48}
                  />
                  <div>
                    <CardHeader>
                      <CardTitle className="font-bold">
                        {t(`testimonials.${testimonialId}.name`)}
                      </CardTitle>
                      <CardDescription className="text-sm text-muted-foreground">
                        {t(`testimonials.${testimonialId}.role`)} 
                      </CardDescription>
                    </CardHeader>
                  </div>
                </div>
                <CardContent className="text-muted-foreground mb-4">
                  {t(`testimonials.${testimonialId}.content`)}
                </CardContent>
                <div className="flex text-yellow-400 p-6">
                  {[...Array(rating)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
} 