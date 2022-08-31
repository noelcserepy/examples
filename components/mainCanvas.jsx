import { motion, useMotionTemplate } from "framer-motion";
import Beach from "../public/beach-background.svg";

export default function MainCanvas({ width, height, vbX, vbY, vbW, vbH }) {
	const vbTemplate = useMotionTemplate`${vbX} ${vbY} ${vbW} ${vbH}`;
	const svgWidth = useMotionTemplate`${width}%`;
	const svgHeight = useMotionTemplate`${height}%`;

	return (
		<motion.div className="w-full h-full flex flex-col justify-center items-center bg-primary border-primary relative">
			<div className="absolute top-1 left-1/2 -translate-x-1/2 text-white">
				Window
			</div>

			<div className="text-orange">{`<svg>`}</div>
			<motion.svg
				viewBox={vbTemplate}
				width={svgWidth}
				height={svgHeight}
				xmlns="http://www.w3.org/2000/svg"
				className="fill-orange border-4 border-orange ">
				<Beach />
			</motion.svg>
		</motion.div>
	);
}
