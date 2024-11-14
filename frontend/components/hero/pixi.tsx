import { useState } from "react";
import { useTick, Sprite, Stage } from "@pixi/react";

export function TriangleMove() {
	const centerX = 300; // Center of the circular path (half of width)
	const centerY = 150; // Fixed Y-coordinate
	const radius = 200; // Radius of the circular path
	const speed = 0.001; // Adjust speed as needed

	const [angle, setAngle] = useState(0);

	useTick((delta) => {
		setAngle((prevAngle) => (prevAngle + speed * delta) % (2 * Math.PI));
	});

	const getPosition = (index: number) => {
		// Calculate the angle for each image
		const angleOffset = index * ((2 * Math.PI) / 5) + angle;
		const x = centerX + radius * Math.cos(angleOffset);
		const y = centerY + (radius * Math.sin(angleOffset)) / 5;
		const scale = 0.5 + (0.1 * (1 + Math.cos(angleOffset))) / 2;
		return { x, y, scale };
	};

	const images = [0, 1, 2, 3, 4];

	return (
		<>
			{images.map((index) => {
				const { x, y, scale } = getPosition(index);
				return (
					<Sprite
						key={index}
						image={`/websitedesign${index + 1}.png`}
						x={x}
						y={y}
						anchor={0.5}
						zIndex={scale}
						scale={{ x: scale, y: scale }}
					/>
				);
			})}
		</>
	);
}

export default function Pixi() {
	return (
		<Stage width={600} height={300} options={{ backgroundAlpha: 0 }}>
			<TriangleMove />
		</Stage>
	);
}
