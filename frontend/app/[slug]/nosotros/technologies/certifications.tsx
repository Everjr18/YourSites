import useIntersection from "../useIntersection";
interface Item {
	type: string;
	id: number;
	name: string;
	icon: JSX.Element;
}
export default function Certificactions({ data }: { data: Item[] }) {
	const [intersection, refElement] = useIntersection({ threshold: 1 });
	return (
		<div className="flex justify-center gap-x-5">
			{data.map(
				(item) =>
					item.type === "certification" && (
						<div
							key={item.id}
							ref={refElement}
							className={`${
								intersection
									? "animate-fadedown opacity-100"
									: "opacity-0 animate-fadeRight"
							} transition-opacity duration-300  `}
						>
							<span>{item.icon}</span>
						</div>
					),
			)}
		</div>
	);
}
