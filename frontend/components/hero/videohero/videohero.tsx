import Image from "next/image";
export default function VideoHero() {
	return (
		<Image
			src="/hero.gif"
			width={600}
			height={300}
			alt="hero gif"
			unoptimized
		/>
	);
}
