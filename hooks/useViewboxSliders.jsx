import useSliderVal from "./useSliderVal";

export default function useViewportSliders() {
	const stiffness = 1000;
	const damping = 50;

	const vbX = useSliderVal({
		label: "min-x",
		initial: 0,
		min: -100,
		max: 200,
		stiffness: stiffness,
		damping: damping,
	});
	const vbY = useSliderVal({
		label: "min-y",
		initial: 0,
		min: -100,
		max: 200,
		stiffness: stiffness,
		damping: damping,
	});
	const vbW = useSliderVal({
		label: "width",
		initial: 50,
		min: 1,
		max: 300,
		stiffness: stiffness,
		damping: damping,
		clamp: true,
	});
	const vbH = useSliderVal({
		label: "height",
		initial: 50,
		min: 1,
		max: 300,
		stiffness: stiffness,
		damping: damping,
		clamp: true,
	});

	const rectX = useSliderVal({
		label: "x",
		bigLabel: false,
		initial: 0,
		min: -100,
		max: 200,
		stiffness: stiffness,
		damping: damping,
	});
	const rectY = useSliderVal({
		label: "y",
		bigLabel: false,
		initial: 0,
		min: -100,
		max: 200,
		stiffness: stiffness,
		damping: damping,
	});
	const rectW = useSliderVal({
		label: "width",
		bigLabel: false,
		initial: 25,
		min: 1,
		max: 200,
		stiffness: stiffness,
		damping: damping,
		clamp: true,
	});
	const rectH = useSliderVal({
		label: "height",
		bigLabel: false,
		initial: 25,
		min: 1,
		max: 200,
		stiffness: stiffness,
		damping: damping,
		clamp: true,
	});

	return {
		vbX,
		vbY,
		vbW,
		vbH,
		rectX,
		rectY,
		rectW,
		rectH,
	};
}
