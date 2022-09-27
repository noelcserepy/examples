import { motion } from "framer-motion";
import useShake from "../../hooks/useShake";

export default function Shake() {
	const x = useShake();
	const y = useShake();

	return (
		<div className="flex justify-center items-center w-screen h-screen">
			<div className="w-16 h-16">
				<motion.svg
					style={{ x: x, y: y }}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 14 14">
					<g>
						<path
							d="M12.5,10.5a1,1,0,0,0,1-1v-2a1,1,0,0,0-1-1H11l-.77-2.32a1,1,0,0,0-1-.68H5.22a1,1,0,0,0-1,.68L3.5,6.5h-2a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1"
							fill="none"
							stroke="#000000"
							strokeLinecap="round"
							strokeLinejoin="round"></path>
						<circle
							cx="3.5"
							cy="10.5"
							r="2"
							fill="none"
							stroke="#000000"
							strokeLinecap="round"
							strokeLinejoin="round"></circle>
						<circle
							cx="10.5"
							cy="10.5"
							r="2"
							fill="none"
							stroke="#000000"
							strokeLinecap="round"
							strokeLinejoin="round"></circle>
						<line
							x1="5.5"
							y1="10.5"
							x2="8.5"
							y2="10.5"
							fill="none"
							stroke="#000000"
							strokeLinecap="round"
							strokeLinejoin="round"></line>
						<line
							x1="7"
							y1="3.5"
							x2="7"
							y2="1.5"
							fill="none"
							stroke="#000000"
							strokeLinecap="round"
							strokeLinejoin="round"></line>
					</g>
				</motion.svg>
			</div>
		</div>
	);
}
