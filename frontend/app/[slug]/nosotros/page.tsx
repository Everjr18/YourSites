import Card from "./card";
import Technologies from "./technologies/technologies";
import Background from "./background/background";
export default function NosotrosPage() {
	return (
		<div className="relative">
			<Card />
			<Background />
			<Technologies />
		</div>
	);
}
export const metadata = {
	title: "Nosotros",
	description:
		"Somos un equipo de desarrolladores apasionados por la educación médica. Hemos creado esta plataforma para ayudar a los futuros residentes médicos a prepararse para sus exámenes. Nuestro equipo está compuesto por profesionales con experiencia en la educación, la tecnología y la medicina, comprometidos con ofrecer los mejores recursos de estudio disponibles.",
};
