import useSliderVal from "./useSliderVal";

export default function useSliders() {
	const stiffness = 1000;
	const damping = 50;

	const width = useSliderVal("Width", 60, 0, 100, stiffness, damping, true);
	const height = useSliderVal("Height", 60, 0, 100, stiffness, damping, true);
	const vbX = useSliderVal("X", 0, -100, 1100, stiffness, damping);
	const vbY = useSliderVal("Y", 0, -100, 1100, stiffness, damping);
	const vbWH = useSliderVal(
		"Width & Height",
		231,
		0,
		1000,
		stiffness,
		damping,
		true
	);

	return {
		width,
		height,
		vbX,
		vbY,
		vbWH,
	};
}
