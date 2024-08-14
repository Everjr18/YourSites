import Hero from "@/components/hero/hero";
import MadeOnYourSite from "@/components/madeonyoursite/madeOnYourSite";
import PopularService from "@/components/popularservice/popularService";

export default function Home() {
	return (
		<main className="">
			<Hero />
			<MadeOnYourSite />
			<PopularService />
		</main>
	);
}
