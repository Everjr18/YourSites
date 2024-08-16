"use client";
import useHasMounted from "@/hook/useHasMounted";
import classNames from "classnames";

const SinusoidalElement = ({
	top,
	left,
	bottom,
	right,
	color1,
	color2,
	blurClass,
	zIndexClass,
}: {
	top?: number | undefined;
	left?: number | undefined;
	bottom?: number | undefined;
	right?: number | undefined;
	color1: string;
	color2: string;
	blurClass: string;
	zIndexClass?: string | undefined;
}) => {
	const hasMounted = useHasMounted();

	return (
		<>
			{hasMounted && (
				<div
					className={classNames(
						"absolute rotate-90 p-8 w-10 h-10 opacity-50",
						blurClass,
						zIndexClass,
					)}
					style={{
						top: top ? `${top}px` : undefined,
						left: left ? `${left}px` : undefined,
						bottom: bottom ? `${bottom}px` : undefined,
						right: right ? `${right}px` : undefined,
						background: `linear-gradient(to top left, ${color1}, ${color2})`,
					}}
				/>
			)}
		</>
	);
};
export default SinusoidalElement;
