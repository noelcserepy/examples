import useSliderVal from "./useSliderVal";

export default function useParSliders() {
	const stiffness = 1000;
	const damping = 50;

	const width = useSliderVal({
		label: "width",
		bigLabel: false,
		initial: 80,
		min: 0,
		max: 100,
		stiffness: stiffness,
		damping: damping,
		clamp: true,
	});
	const height = useSliderVal({
		label: "height",
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
	};
}
