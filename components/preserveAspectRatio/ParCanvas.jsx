import { motion, useMotionTemplate } from "framer-motion";
import { useEffect } from "react";
import Axes from "./axes";
import ParMotionMountains from "./ParMotionMountains";

export default function ParCanvas({ sliders, meet, align, vpAxes, vbAxes }) {
	const { width, height } = sliders;

	const widthTemplate = useMotionTemplate`${width.animVal}%`;
	const heightTemplate = useMotionTemplate`${height.animVal}%`;

	useEffect(() => {}, [align, meet]);
	return (
		<div className="w-full h-full bg-primary relative flex flex-col justify-center items-center">
			<span className="text-orange">SVG Viewport</span>
			<motion.svg
				width={widthTemplate}
				height={heightTemplate}
				className="border-4 border-orange">
				{vpAxes && <Axes strokeWidth={3} />}
				<ParMotionMountains preserveAspectRatio={`${align} ${meet}`}>
					{vbAxes && <Axes strokeWidth={3} />}
				</ParMotionMountains>
			</motion.svg>
		</div>
	);
}
