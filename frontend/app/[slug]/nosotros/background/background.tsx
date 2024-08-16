"use client";
import { useState, useEffect, type ReactElement } from "react";
import Light from "../background/light";
import Star from "../background/star";
import useHasMounted from "@/hook/useHasMounted";
import { useTheme } from "next-themes";

// Número de estrellas
const NUM_STARS = 5;
const NUM_LIGHTS = 5;
const MARGIN_X = 150;
const MARGIN_Y = 150;

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

export default function Background() {
	const hasMounted = useHasMounted();
	const [position, setPosition] = useState({ top: 0, right: 0 });
	const [angle, setAngle] = useState(0);
	const [starPositions, setStarPositions] = useState<
		{ top: number; right: number; angle: number }[]
	>([]);
	const [screenWidth, setScreenWidth] = useState<number | undefined>(undefined);
	const [screenHeight, setScreenHeight] = useState<number | undefined>(
		undefined,
	);

	// Actualizar el ancho y alto de la pantalla
	useEffect(() => {
		const handleResize = () => {
			setScreenWidth(window.innerWidth);
			setScreenHeight(window.innerHeight);
			setStarPositions(
				generateInitialPositions(window.innerWidth, window.innerHeight),
			);
		};
		window.addEventListener("resize", handleResize);
		handleResize(); // Llamar a la función al montar el componente
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	const { theme } = useTheme();

	const calculateColor = (angle: number) => {
		const r = Math.floor(127 * (1 + Math.sin(angle)));
		const g = Math.floor(127 * (1 + Math.sin(angle + Math.PI / 3)));
		const b = Math.floor(127 * (1 + Math.sin(angle + (2 * Math.PI) / 3)));
		return `rgb(${r}, ${g}, ${b})`;
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const interval = setInterval(() => {
			setPosition((prevPosition) => {
				const newAngle = angle + 1; // Incrementa el ángulo
				const newTop = 10 * Math.sin(newAngle) + 200; // Movimiento sinusoidal en el eje Y

				let newRight = prevPosition.right + 2; // Movimiento lineal en el eje X
				if (newRight > window.innerWidth - MARGIN_X)
					newRight = window.innerWidth - MARGIN_X;
				if (newRight < MARGIN_X) newRight = MARGIN_X;
				return {
					top: newTop,
					right: newRight,
					angle: 0,
				};
			});
			setStarPositions((prevPositions) => {
				return prevPositions.map((pos) => {
					const newAngle = pos.angle + 0.1; // Incrementa el ángulo
					const newTop = pos.top - 2; // Movimiento lineal hacia arriba en el eje Y
					let newRight = pos.right + 10 * Math.sin(newAngle); // Movimiento sinusoidal en el eje X
					if (newRight > window.innerWidth - MARGIN_X)
						newRight = window.innerWidth - MARGIN_X;
					if (newRight < MARGIN_X) newRight = MARGIN_X;

					// Reinicia la posición si se sale de la pantalla
					if (newTop < 0) {
						let r = Math.random() * window.innerWidth - MARGIN_X;
						if (r < MARGIN_X) r = MARGIN_X;
						return {
							top: window.innerHeight,
							right: r,
							angle: Math.random() * Math.PI * 2,
						};
					}
					return {
						top: newTop,
						right: newRight,
						angle: newAngle,
					};
				});
			});
			setAngle((prevAngle) => prevAngle + 0.1); // Actualiza el ángulo
		}, 50); // Cambia la posición cada 100 ms
		return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
	}, []);

	const color1 = calculateColor(angle);
	const color2 = calculateColor(angle + Math.PI / 2);

	return (
		<section className="hidden sm:block pb-20 pt-8 mt-6">
			{hasMounted && theme === "dark" && (
				<>
					<Light
						top={position.top}
						left={position.right}
						color1={color1}
						color2="green"
						blurClass="blur-2xl"
					/>
					<Light
						left={position.top}
						top={position.right}
						color1={color1}
						color2="blue"
						blurClass="blur-3xl"
					/>
					<Light
						left={position.top}
						bottom={position.right}
						color1={color1}
						color2="red"
						blurClass="blur-3xl"
						zIndexClass="-z-5"
					/>
					<Light
						bottom={position.top}
						right={position.right}
						color1={color2}
						color2="blue"
						blurClass="blur-3xl"
						zIndexClass="z-50"
					/>
					<Light
						right={position.top}
						top={position.right}
						color1={color2}
						color2="green"
						blurClass="blur-3xl"
						zIndexClass="z-50"
					/>
					<Light
						right={position.top}
						bottom={position.right}
						color1={color2}
						color2="red"
						blurClass="blur-2xl"
						zIndexClass="z-50"
					/>
					<div>
						{starPositions.map((pos, index) => (
							<Star
								key={index.toString()}
								top={pos.top}
								left={pos.right}
								color1={color1}
								color2="green"
								blurClass="blur-md"
							/>
						))}
					</div>
				</>
			)}
			{/* {hasMounted && message && message === 'light' && (
        <>
          <div className="hidden sm:block md:opacity-50 absolute opacity-15 z-0">
            <PalmIcon
              width="150px"
              height="150px"
              transform="scale(-1, 1) translate(-180, 0)"
            />
          </div>
          <div className="hidden sm:block md:opacity-50  absolute opacity-15 z-0">
            <PalmIcon
              width="150px"
              height="150px"
              transform="scale(-1, 1) translate(-108, 64)"
            />
          </div>
          <div className="hidden sm:block md:opacity-50 absolute opacity-15 top-24 z-0 left-20 ">
            <SunIcon width="150px" height="150px" />
          </div>
          <div className="hidden sm:block md:opacity-50 absolute opacity-15 top-96 right-36 rotate-x-10 z-0">
            <PalmIcon width="150px" height="150px" />
          </div>
          <div className="hidden sm:block md:opacity-50 absolute opacity-15 top-80 right-16 rotate-x-10 z-0">
            <PalmIcon width="150px" height="150px" />
          </div>
          <div className="hidden sm:block md:opacity-50 bottom-24 right-0 absolute opacity-15 z-0">
            <PalmIcon
              width="150px"
              height="150px"
              transform="scale(1, 1) translate(-180, 0)"
            />
          </div>
          <div className="hidden sm:block md:opacity-50 bottom-24 right-0 absolute opacity-15 z-0">
            <PalmIcon
              width="150px"
              height="150px"
              transform="scale(1, 1) translate(-108, 64)"
            />
          </div>
        </>
      )} */}
		</section>
	);
}
