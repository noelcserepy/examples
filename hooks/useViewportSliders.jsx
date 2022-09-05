import useSliderVal from "./useSliderVal";

export default function useViewportSliders() {
	const stiffness = 1000;
	const damping = 50;

	const width = useSliderVal({
		label: "Width",
		bigLabel: false,
		initial: 80,
		min: 0,
		max: 100,
		stiffness: stiffness,
		damping: damping,
		clamp: true,
	});
	const height = useSliderVal({
		label: "Height",
		bigLabel: false,
		initial: 80,
		min: 0,
		max: 100,
		stiffness: stiffness,
		damping: damping,
		clamp: true,
	});

	const innerW = useSliderVal({
		label: "Width",
		bigLabel: false,
		initial: 80,
		min: 0,
		max: 100,
		stiffness: stiffness,
		damping: damping,
		clamp: true,
	});
	const innerH = useSliderVal({
		label: "Height",
		bigLabel: false,
		initial: 80,
		min: 0,
		max: 100,
		stiffness: stiffness,
		damping: damping,
		clamp: true,
	});

	const secondW = useSliderVal({
		label: "Width",
		bigLabel: false,
		initial: 80,
		min: 0,
		max: 100,
		stiffness: stiffness,
		damping: damping,
		clamp: true,
	});
	const secondH = useSliderVal({
		label: "Height",
		bigLabel: false,
		initial: 80,
		min: 0,
		max: 100,
		stiffness: stiffness,
		damping: damping,
		clamp: true,
	});

	return {
		width,
		height,
		innerW,
		innerH,
		secondW,
		secondH,
	};
}
