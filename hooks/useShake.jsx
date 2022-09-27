import { useTime, useTransform } from "framer-motion";
import _ from "lodash";

function addSines(t, layers) {
	const moveVal = layers.reduce((total, l) => {
		const variance = _.random(-l.slop, l.slop);
		return total + variance + Math.sin(t * l.frequency) * l.amplitude;
	}, 0);

	return moveVal;
}

const rangeMap = (a, b) => s => {
	const [a1, a2] = a;
	const [b1, b2] = b;
	return ((((b2 - b1) * (s - a1)) / (a2 - a1)) * 10 + 10 * b1) / 10;
};

function createLayer(amplitude = 1, frequency = 1, slop = 0) {
	return {
		amplitude: rangeMap([0, 10], [0, 100])(amplitude),
		frequency: rangeMap([0, 10], [0, 20])(frequency),
		slop: rangeMap([0, 10], [0, 5])(slop),
	};
}

export default function useShake({ preset = "default", ampGain = 1 } = {}) {
	const presets = {
		default: {
			layers: [createLayer(1, 0.01, 0.1), createLayer(0.5, 5, 0)],
		},
	};

	const time = useTime();
	const { layers } = presets[preset];

	const x = useTransform(time, t => {
		return addSines(t, layers) * ampGain;
	});

	return x;
}
