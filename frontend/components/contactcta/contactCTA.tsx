"use client"
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { insertConsult } from "./action";
import { useFormState } from "react-dom";
import { toast } from "sonner";
import { useEffect } from "react";

export interface FormState {
  message: string;
  success: boolean;
  errors: {
    fullname?: string;
    email?: string;
    consult?: string;
  }
}

const initialState: FormState = {
  message: "",
  success: false,
  errors: {
    fullname: undefined,
    email: undefined,
    consult: undefined
  }
};

export default function ContactCTA() {
  const t = useTranslations("ContactCTA");
  const [state, formAction] = useFormState(insertConsult, initialState);

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast.success(state.message);
        (document.getElementById("contactForm") as HTMLFormElement)?.reset();
      } else {
        toast.error(state.message);
      }
    }
  }, [state]);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <CardHeader>
            <CardTitle className="">{t("title")}</CardTitle>
            <CardDescription className="">{t("description")}</CardDescription>
          </CardHeader>
          <form 
            id="contactForm"
            action={formAction} 
            className="max-w-xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <Input
                  type="text"
                  placeholder={t("name")}
                  name="fullname"
                  className={state.errors?.fullname ? "border-red-500" : ""}
                />
                {state.errors?.fullname && (
                  <p className="text-red-500 text-sm mt-1">{state.errors.fullname}</p>
                )}
              </div>
              <div>
                <Input
                  type="email"
                  placeholder={t("email")}
                  name="email"
                  className={state.errors?.email ? "border-red-500" : ""}
                />
                {state.errors?.email && (
                  <p className="text-red-500 text-sm mt-1">{state.errors.email}</p>
                )}
              </div>
            </div>
            <div>
              <Textarea
                placeholder={t("projectDetails")}
                name="consult"
                rows={4}
                className={state.errors?.consult ? "border-red-500" : ""}
              />
              {state.errors?.consult && (
                <p className="text-red-500 text-sm mt-1">{state.errors.consult}</p>
              )}
            </div>
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