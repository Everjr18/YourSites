import Image from "next/image";
import {
	Card,
	CardContent,
	CardDescription,
	CardTitle,
} from "@/components/ui/card";
export default function Hero() {
	return (
		<section className="flex items-center justify-center  ">
			<Card className="flex flex-row p-5 bg-[#216140] ">
				<CardContent className="flex flex-col">
					<CardTitle className="mb-5">
						Construye la pagina web de tus sueños
					</CardTitle>
					<CardDescription className="w-96">
						En YourSite, nos especializamos en convertir tus ideas en sitios web
						impresionantes y funcionales. Nuestro equipo de expertos en diseño y
						desarrollo web trabaja contigo para crear soluciones digitales
						personalizadas que no solo se ven geniales, sino que también cumplen
						con tus objetivos de negocio. Ya sea que necesites un sitio web
						corporativo, una tienda en línea o una plataforma personalizada,
						estamos aquí para ayudarte a alcanzar el éxito en línea.
					</CardDescription>
				</CardContent>
				<Image
					className="border rounded-lg "
					src="/hero.webp"
					alt="hero"
					width={200}
					height={200}
				/>
			</Card>
		</section>
	);
}
