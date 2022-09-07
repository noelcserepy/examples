import useSliderVal from "./useSliderVal";

export default function useViewportSliders() {
	const stiffness = 1000;
	const damping = 50;

	const vbX = useSliderVal({
		label: "Min-x",
		initial: 0,
		min: -100,
		max: 200,
		stiffness: stiffness,
		damping: damping,
	});
	const vbY = useSliderVal({
		label: "Min-y",
		initial: 0,
		min: -100,
		max: 200,
		stiffness: stiffness,
		damping: damping,
	});
	const vbW = useSliderVal({
		label: "Width",
		initial: 50,
		min: 1,
		max: 300,
		stiffness: stiffness,
		damping: damping,
		clamp: true,
	});
	const vbH = useSliderVal({
		label: "Height",
		initial: 50,
		min: 1,
		max: 300,
		stiffness: stiffness,
		damping: damping,
		clamp: true,
	});

	const rectX = useSliderVal({
		label: "X",
		bigLabel: false,
		initial: 0,
		min: -100,
		max: 200,
		stiffness: stiffness,
		damping: damping,
	});
	const rectY = useSliderVal({
		label: "Y",
		bigLabel: false,
		initial: 0,
		min: -100,
		max: 200,
		stiffness: stiffness,
		damping: damping,
	});
	const rectW = useSliderVal({
		label: "Width",
		bigLabel: false,
		initial: 25,
		min: 1,
		max: 200,
		stiffness: stiffness,
		damping: damping,
		clamp: true,
	});
	const rectH = useSliderVal({
		label: "Height",
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
