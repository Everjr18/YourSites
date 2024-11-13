import Hero from "@/components/hero/hero";
import HomeVideo from "@/components/homevideo/homeVideo";
import TechnologyStack from "@/components/technologystack/technologyStack";
import ProjectShowcase from "@/components/projectshowcase/projectShowcase";
import TestimonialsSection from "@/components/testimonialssection/testimonialsSection";
import PricingPlans from "@/components/pricingplans/pricingPlans";
import ProcessTimeline from "@/components/processtimeline/processTimeline";
import FAQSection from "@/components/faqsection/faqSection";
import ContactCTA from "@/components/contactcta/contactCTA";
import ServiceCategories from "@/components/servicecategories/serviceCategories";

export default function Home() {
	return (
		<main className="max-w-max">
			<HomeVideo />
			<Hero />
			<TechnologyStack />
			<ServiceCategories />
			<ProjectShowcase />
			<TestimonialsSection />
			<PricingPlans />
			<ProcessTimeline />
			<FAQSection />
			<ContactCTA />
		</main>
	);
}
