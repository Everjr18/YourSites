import Link from "next/link";
import { Nav } from "./nav";
import NavMobile from "./navMobile";

export default function NavMain() {
	return (
		<section className="flex flex-row justify-between items-center mb-8  border-b-2 border-[05562C] p-5">
			<Link href="/">
				<h1 className="font-bold text-[#216140] text-2xl">YourSites</h1>
			</Link>
			<Nav />
			<NavMobile />
		</section>
	);
}
