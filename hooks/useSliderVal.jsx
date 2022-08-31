import { useMotionValue, useSpring, useTransform } from "framer-motion";

export default function useSliderVal(
	label,
	initial,
	min,
	max,
	stiffness,
	damping,
	clamp = false,
	clampIn = [0, 200],
	clampOut = [0, 200]
) {
	const mVal = useMotionValue(initial);
	const valSpring = useSpring(mVal, { stiffness, damping });
	let valSpringClamped = null;

	if (clamp) {
		valSpringClamped = useTransform(valSpring, clampIn, clampOut);
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
