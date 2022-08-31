import { useMotionValue, useSpring, useTransform } from "framer-motion";

export default function useSliderVal(
	label,
	initial,
	min,
	max,
	stiffness,
	damping,
	clamp = false
) {
	const mVal = useMotionValue(initial);
	const valSpring = useSpring(mVal, { stiffness, damping });
	let valSpringClamped = null;

	if (clamp) {
		valSpringClamped = useTransform(valSpring, [min, max], [min, max]);
	}

	const sliderProps = {
		label,
		initial,
		min,
		max,
		mVal,
	};

	return { sliderProps, animVal: clamp ? valSpringClamped : valSpring };
}
