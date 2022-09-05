import MotionMountains from "./motionMountains";

export default function Canvas({ sliders, showInnerSvg, showSecondSvg }) {
	const { width, height, innerW, innerH, secondW, secondH } = sliders;

	return (
		<div className="w-full h-full bg-primary relative flex flex-col justify-center items-center">
			<div className="absolute top-1 left-2 text-white">window viewport</div>

			<span className="text-orange">SVG Viewport</span>
			<MotionMountains width={width} height={height}>
				{showInnerSvg && (
					<MotionMountains
						width={innerW}
						height={innerH}
						innerTitle="Inner SVG Viewport"
					/>
				)}
			</MotionMountains>

			{showSecondSvg && (
				<>
					<span className="text-orange">Second SVG Viewport</span>

					<MotionMountains width={secondW} height={secondH} />
				</>
			)}
		</div>
	);
}
