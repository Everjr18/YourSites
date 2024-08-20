import Hero from "@/components/hero/hero";
import HomeVideo from "@/components/homevideo/homeVideo";
import MadeOnYourSite from "@/components/madeonyoursite/madeOnYourSite";
import PopularService from "@/components/popularservice/popularService";

export default function Home() {
	return (
		<main className="">
			<HomeVideo />
			<MadeOnYourSite />
			<Hero />
			<PopularService />
		</main>
	);
}
