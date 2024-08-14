import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export default function WhyChooseUs() {
	return (
		<section className="mt-10">
			<CardTitle className="text-center mb-10">Porque Elegirnos</CardTitle>
			<div className="grid grid-cols-2 gap-5 m-5">
				<Card className="p-7">
					<CardDescription>
						Creamos sitios web únicos y adaptados a tus necesidades
					</CardDescription>
				</Card>
				<Card className="p-7">
					<CardDescription>
						Páginas web rápidas y optimizadas para un rendimiento superior
					</CardDescription>
				</Card>
				<Card className="p-7">
					<CardDescription>
						Estamos aquí para ayudarte en cada paso, desde el diseño hasta el
						lanzamiento.
					</CardDescription>
				</Card>
				<Card className="p-7">
					<CardDescription>
						Utilizamos las últimas herramientas y tendencias para mantenerte a
						la vanguardia
					</CardDescription>
				</Card>
			</div>
		</section>
	);
}
