"use client";
import { Glow, GlowCapture } from "@codaworks/react-glow";
import {
	IconBxlTailwindCss,
	IconNextjs,
	IconTypescript,
} from "./icons/frontend/icons";
import Frontend from "./frontend";
import { IconMysql, IconNodejs } from "./icons/backend/icons";
import Backend from "./backend";
import useIntersection from "../useIntersection";
import Certificactions from "./certifications";
import { InsigniaMP } from "./icons/insigniaMP";
interface Item {
	type: string;
	id: number;
	name: string;
	icon: JSX.Element;
}

// Número de estrellas
const NUM_STARS = 20;

// Genera una posición inicial aleatoria para cada estrella
const generateInitialPositions = (
	screenWidth: number,
	screenHeight: number,
) => {
	const positions = [];
	for (let i = 0; i < NUM_STARS; i++) {
		positions.push({
			top: Math.random() * screenHeight, // Posición Y aleatoria
			right: Math.random() * screenWidth, // Posición X aleatoria
			angle: Math.random() * Math.PI * 2, // Ángulo inicial aleatorio
		});
	}
	return positions;
};

export default function Technologies() {
	const data: Item[] = [
		{ type: "frontend", id: 1, name: "Next.js", icon: <IconNextjs /> },
		{ type: "frontend", id: 2, name: "Typescript", icon: <IconTypescript /> },
		{ type: "frontend", id: 3, name: "Tailwind", icon: <IconBxlTailwindCss /> },
		{ type: "backend", id: 4, name: "Nodejs", icon: <IconNodejs /> },
		{ type: "backend", id: 5, name: "Nextjs", icon: <IconNextjs /> },
		{ type: "backend", id: 6, name: "MySQL", icon: <IconMysql /> },
		{ type: "certification", id: 7, name: "Mercadopago", icon: <InsigniaMP /> },
	];
	const [intersection, refElement] = useIntersection({ threshold: 0.5 });

	return (
		<section className="pb-20 pt-8 mt-6">
			<GlowCapture>
				<Glow color="red">
					<h3 className="text-center font-bold md:text-3xl glow:text-accent">
						Tecnologías usadas
					</h3>
					<h4
						ref={refElement}
						className={`${
							intersection
								? "animate-fadedown opacity-100"
								: "opacity-0 animate-fadeleft"
						} text-center font-bold md:text-2xl my-5 glow:text-accent transition-opacity duration-1000`}
					>
						Frontend
					</h4>
				</Glow>
			</GlowCapture>
			<Frontend data={data} />
			<h4 className="text-center font-bold md:text-2xl my-5 glow:text-accent">
				Backend
			</h4>
			<Backend data={data} />
			<h3 className="text-center font-bold md:text-3xl glow:text-accent mt-8">
				Certificaciones
			</h3>
			<div className="flex justify-center gap-x-5 pt-4">
				<Certificactions data={data} />
			</div>
		</section>
	);
}
