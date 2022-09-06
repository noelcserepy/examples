import { motion } from "framer-motion";

export default function Grid({ vbX, vbY, vbW, vbH }) {
	return (
		<>
			<defs>
				<pattern
					id="one"
					x="0"
					y="0"
					width="1"
					height="1"
					patternUnits="userSpaceOnUse">
					<rect
						x="0"
						y="0"
						width="1"
						height="1"
						stroke="white"
						strokeWidth="0.01"
						fill="none"
					/>
				</pattern>

				<pattern
					id="ten"
					x="0"
					y="0"
					width="10"
					height="10"
					patternUnits="userSpaceOnUse">
					<rect
						x="0"
						y="0"
						width="10"
						height="10"
						stroke="white"
						strokeWidth="0.1"
						fill="none"
					/>
				</pattern>

				<pattern
					id="hundred"
					x="0"
					y="0"
					width="100"
					height="100"
					patternUnits="userSpaceOnUse">
					<rect
						x="0"
						y="0"
						width="100"
						height="100"
						stroke="white"
						fill="none"
					/>
				</pattern>
			</defs>

			<motion.rect
				x={vbX.animVal}
				y={vbY.animVal}
				width={vbW.animVal}
				height={vbH.animVal}
				fill="url(#one)"
			/>
			<motion.rect
				x={vbX.animVal}
				y={vbY.animVal}
				width={vbW.animVal}
				height={vbH.animVal}
				fill="url(#ten)"
			/>
			<motion.rect
				x={vbX.animVal}
				y={vbY.animVal}
				width={vbW.animVal}
				height={vbH.animVal}
				fill="url(#hundred)"
			/>
			<circle cx="0" cy="0" r="1" className="fill-orange" />
			<text x="-2" y="-2" className="fill-orange text-[0.1rem]">
				{`(0, 0)`}
			</text>
		</>
	);
}
