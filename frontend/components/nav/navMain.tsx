import Link from "next/link";
import { Nav } from "./nav";
import NavMobile from "./navMobile";
import Image from "next/image";

export default function NavMain() {
	return (
		<section className="flex flex-row justify-between items-center border-b-2  p-5">
			<Link href="/">
				{/* <h1 className="font-bold text-[#216140] text-2xl">YourSites</h1> */}

				<Image src="/YourSite.png" alt="logo" width={170} height={170} />
			</Link>
			<Nav />
			<NavMobile />
		</section>
	);
}
