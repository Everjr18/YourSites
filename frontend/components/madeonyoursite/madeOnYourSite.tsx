import Image from "next/image";
import Link from "next/link";
import { Card, CardTitle } from "../ui/card";
import { useTranslations } from "next-intl";

export default function MadeOnYourSite() {
	const t = useTranslations("HomePageMadeOnYourSite");
	return (
		<section className="w-full">
			<CardTitle className="m-6">{t("title")}</CardTitle>
			<Link
				href="https://examenes.com.ar/"
				target="_blank"
				className="group/item flex w-[330px] h-[330px]"
			>
				<Card className="relative m-6 group-hover/item:shadow-lg  group-hover/item:shadow-[#045111]   ">
					<Image
						src="/examenes.svg"
						alt="hecho en your site"
						width={280}
						height={280}
						className="rounded-lg"
					/>
					<span className="absolute bottom-10 left-3 text-white font-semibold invisible w-full  group-hover/item:visible ">
						{t("subtitle")}
					</span>
					<span className="absolute bottom-3 left-3 text-white  font-medium invisible w-full  group-hover/item:visible ">
						{t("subtitle1")}
					</span>
				</Card>
			</Link>
		</section>
	);
}
