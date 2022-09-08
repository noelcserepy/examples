import { motion, useMotionTemplate } from "framer-motion";
import Grid from "./grid";

export default function VbCanvas({ sliders, combineWH }) {
	const { vbX, vbY, vbW, vbH, rectX, rectY, rectW, rectH } = sliders;

	const vbTemplate = useMotionTemplate`${vbX.animVal} ${vbY.animVal} ${vbW.animVal} ${vbH.animVal}`;
	const combineTemplate = useMotionTemplate`${vbX.animVal} ${vbY.animVal} ${vbW.animVal} ${vbW.animVal}`;

	return (
		<div className="w-full h-full bg-primary relative flex flex-col justify-center items-center">
			<span className="text-orange">SVG Viewport</span>
			<motion.svg
				viewBox={combineWH ? combineTemplate : vbTemplate}
				preserveAspectRatio="xMidYMid meet"
				xmlns="http://www.w3.org/2000/svg"
				className="border-4 border-orange w-[90%] h-[90%]">
				<Grid vbX={vbX} vbY={vbY} vbW={vbW} vbH={combineWH ? vbW : vbH} />

				<motion.rect
					x={rectX.animVal}
					y={rectY.animVal}
					width={rectW.animVal}
					height={rectH.animVal}
					stroke="#b8336a"
					strokeWidth="1"
					fill="none"
				/>
			</motion.svg>
		</div>
	);
}
