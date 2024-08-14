import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { useTranslations } from "next-intl";
import Image from "next/image";
export default function PopularService() {
	const t = useTranslations("HomePagePopularService");
	const data = [
		{
			id: "1",
			title: t("cardtitle"),
			cardstyle: "bg-[#750414]",
			roundedstyle: "bg-[#F0C8C9]",
			image: "/websitedevelopment.webp",
			imagestyle: "bg-[#07391f]",
		},
		{
			id: "2",
			title: t("cardtitle1"),
			cardstyle: "bg-[#045111]",
			roundedstyle: "bg-[#BCFCC7]",
			image: "/payment.svg",
			imagestyle: "bg-[#910E20]",
		},
	];
	return (
		<section>
			<CardTitle className="p-6 mt-5">{t("title")}</CardTitle>
			<div className="flex items-center justify-center flex-col">
				<Carousel className="w-full max-w-sm">
					<CarouselContent className="-ml-1">
						{data.map((item) => (
							<CarouselItem key={item.id} className="pl-1 ">
								<div className="p-1">
									<Card className={item.cardstyle}>
										<CardContent>
											<h5 className="font-bold text-white text-left text-2xl p-5">
												{item.title}
											</h5>

											<div
												className={`${item.roundedstyle} min-h-[300px] flex justify-center items-center rounded-lg`}
											>
												<Image
													src={item.image}
													alt="web development"
													width={250}
													height={200}
													className="rounded-lg"
												/>
											</div>
										</CardContent>
									</Card>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
		</section>
	);
}
