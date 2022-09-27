import _ from "lodash";
import useShake from "./useShake";

export default function useShaker({ preset = "default" } = {}) {
	const presets = {
		default: {
			layers: [
				createLayer(4, 0.001, 0.006, 0.002),
				createLayer(1, 0.001, 0.2, 0.02, 10, 10),
			],
		},
	};

	const x = useShake(x);
	const y = useShake(x);
	const rot = useShake(x);

	return { x, y, rot };
}
