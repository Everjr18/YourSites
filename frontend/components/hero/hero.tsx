import Image from "next/image";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";
export default function Hero() {
	const t = useTranslations("HomePageHero");
	return (
		<Card className="flex flex-col md:flex-row items-center   p-10 m-5  bg-[#ecf8e5] gap-10 md:gap-32">
			<div className="flex flex-col md:flex-row items-center ">
				<div className="flex flex-col">
					<CardTitle className="mb-5 text-[#347571] text-4xl">
						{t("title")}
					</CardTitle>
					<CardDescription className="max-w-[600px] text-lg">
						{t("content")}
					</CardDescription>
				</div>
			</div>

			<Image src="./heropicture.svg" alt="hero" width={600} height={338} />
		</Card>
	);
}
