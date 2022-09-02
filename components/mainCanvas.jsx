import { motion, useMotionTemplate } from "framer-motion";
import Grid from "./grid";
import MountainPaths from "./mountainPaths";

export default function MainCanvas({
	width,
	height,
	vbX,
	vbY,
	vbWH,
	showGrid,
}) {
	const vbTemplate = useMotionTemplate`${vbX} ${vbY} ${vbWH} ${vbWH}`;
	const svgWidth = useMotionTemplate`${width}%`;
	const svgHeight = useMotionTemplate`${height}%`;

	return (
		<motion.div className="w-full h-full flex flex-col justify-center items-center bg-primary border-primary relative">
			<div className="absolute top-1 left-1/2 -translate-x-1/2 text-white">
				window viewport
			</div>

			<div className="text-orange">{`<svg> viewport`}</div>
			<motion.svg
				width={svgWidth}
				height={svgHeight}
				viewBox={vbTemplate}
				xmlns="http://www.w3.org/2000/svg"
				className={`border-4 border-orange`}>
				<MountainPaths />
				{showGrid && <Grid />}
			</motion.svg>
		</motion.div>
	);
}
