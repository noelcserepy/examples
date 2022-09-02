import { motion, useMotionTemplate, useTransform } from "framer-motion";
import Grid from "./grid";
import MountainPaths from "./mountainPaths";

export default function MainCanvas({
	svg,
	rect,
	showGrid,
	showRectangle,
	showMountains,
}) {
	const vbTemplate = useMotionTemplate`${svg.vbX.animVal} ${svg.vbY.animVal} ${svg.vbWH.animVal} ${svg.vbWH.animVal}`;
	const svgWidth = useMotionTemplate`${svg.width.animVal}%`;
	const svgHeight = useMotionTemplate`${svg.height.animVal}%`;

	const rectX = useMotionTemplate`${rect.rectX.animVal}`;
	const rectY = useMotionTemplate`${rect.rectY.animVal}`;
	const rectWH = useMotionTemplate`${rect.rectWH.animVal}`;

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
				preserveAspectRatio="xMinYMin"
				xmlns="http://www.w3.org/2000/svg"
				className={`border-4 border-orange`}>
				{showMountains && <MountainPaths />}

				{showGrid && <Grid />}

				{showRectangle && (
					<motion.rect
						x={rectX}
						y={rectY}
						width={rectWH}
						height={rectWH}
						stroke="#b8336a"
						strokeWidth={2}
						fill="none"
					/>
				)}
			</motion.svg>
		</motion.div>
	);
}
