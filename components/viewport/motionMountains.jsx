import { motion } from "framer-motion";
import { useMotionTemplate } from "framer-motion";
import MountainPaths from "./mountainPaths";

export default function MotionMountains({
	width,
	height,
	innerTitle,
	children,
}) {
	const widthTemplate = useMotionTemplate`${width.animVal}%`;
	const heightTemplate = useMotionTemplate`${height.animVal}%`;

	return (
		<motion.svg
			width={widthTemplate}
			height={heightTemplate}
			viewBox="0 0 1000 666"
			xmlns="http://www.w3.org/2000/svg"
			className="border-4 border-orange">
			<MountainPaths />
			{innerTitle && (
				<text x="5" y="5%" className="stroke-orange fill-orange text-4xl">
					{innerTitle}
				</text>
			)}
			{children}
		</motion.svg>
	);
}
