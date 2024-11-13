import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function ContactCTA() {
    const t = useTranslations("ContactCTA")
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
            <CardHeader>
          <CardTitle className=""> {t("title")} </CardTitle>
          <CardDescription className="">{t("description")}</CardDescription>
            </CardHeader>
          <form className="max-w-xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <Input
                type="text"
                placeholder={t("name")}
              />
              <Input
                type="email"
                placeholder={t("email")}
                
              />
            </div>
            <Textarea
              placeholder={t("projectDetails")}
             
              rows={4}
            />
            <Button
              type="submit"
              className="mt-4"
            
            >
              {t("submitButton")}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
} 