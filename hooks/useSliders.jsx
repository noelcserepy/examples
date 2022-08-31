import useSliderVal from "./useSliderVal";

export default function useSliders() {
	const stiffness = 1000;
	const damping = 50;

	const width = useSliderVal(
		"Width",
		60,
		0,
		100,
		stiffness,
		damping,
		true,
		[0, 200],
		[0, 200]
	);

	const height = useSliderVal(
		"Height",
		60,
		0,
		100,
		stiffness,
		damping,
		true,
		[0, 200],
		[0, 200]
	);

	const vbX = useSliderVal("X", 0, -100, 100, stiffness, damping);

	const vbY = useSliderVal("Y", 0, -100, 100, stiffness, damping);

	const vbW = useSliderVal(
		"Width",
		100,
		0,
		150,
		stiffness,
		damping,
		true,
		[0, 200],
		[0, 200]
	);

	const vbH = useSliderVal(
		"Height",
		100,
		0,
		150,
		stiffness,
		damping,
		true,
		[0, 200],
		[0, 200]
	);

	return {
		width,
		height,
		vbX,
		vbY,
		vbW,
		vbH,
	};
}
