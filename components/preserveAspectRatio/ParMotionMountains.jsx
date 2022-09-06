import { motion } from "framer-motion";
import MountainPaths from "../common/mountainPaths";

export default function ParMotionMountains({ preserveAspectRatio, children }) {
	return (
		<motion.svg
			viewBox="0 0 1000 666"
			preserveAspectRatio={preserveAspectRatio}>
			<MountainPaths />
			{children}
		</motion.svg>
	);
}
