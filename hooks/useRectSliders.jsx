import useSliderVal from "./useSliderVal";

export default function useRectSliders() {
	const stiffness = 1000;
	const damping = 50;

	const rectX = useSliderVal({
		label: "X",
		bigLabel: true,
		initial: 0,
		min: -100,
		max: 1100,
		stiffness: stiffness,
		damping: damping,
	});
	const rectY = useSliderVal({
		label: "Y",
		bigLabel: true,
		initial: 0,
		min: -100,
		max: 1100,
		stiffness: stiffness,
		damping: damping,
	});
	const rectWH = useSliderVal({
		label: "Width & Height",
		bigLabel: true,
		initial: 150,
		min: 1,
		max: 1000,
		stiffness: stiffness,
		damping: damping,
		clamp: true,
	});

	return {
		rectX,
		rectY,
		rectWH,
	};
}
