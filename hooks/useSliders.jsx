import useSliderVal from "./useSliderVal";

export default function useSliders() {
	const stiffness = 1000;
	const damping = 50;

	const width = useSliderVal({
		label: "Width",
		bigLabel: true,
		initial: 80,
		min: 0,
		max: 100,
		stiffness: stiffness,
		damping: damping,
		clamp: true,
	});
	const height = useSliderVal({
		label: "Height",
		bigLabel: true,
		initial: 80,
		min: 0,
		max: 100,
		stiffness: stiffness,
		damping: damping,
		clamp: true,
	});
	const vbX = useSliderVal({
		label: "X",
		initial: 0,
		min: -100,
		max: 1100,
		stiffness: stiffness,
		damping: damping,
	});
	const vbY = useSliderVal({
		label: "Y",
		initial: 0,
		min: -100,
		max: 1100,
		stiffness: stiffness,
		damping: damping,
	});
	const vbWH = useSliderVal({
		label: "Width & Height",
		initial: 231,
		min: 1,
		max: 1000,
		stiffness: stiffness,
		damping: damping,
		clamp: true,
	});

	return {
		width,
		height,
		vbX,
		vbY,
		vbWH,
	};
}
