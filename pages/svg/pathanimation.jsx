import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const pathVariants = {
	0: {
		strokeWidth: 0,
		strokeDasharray: "1 0",
	},

	1: {
		strokeWidth: 4,
		strokeDasharray: "100 0",
		transition: {
			duration: 1,
			ease: "easeInOut",
		},
	},

	2: {
		strokeWidth: 4,
		strokeDasharray: "50 50",
		transition: {
			duration: 1,
			ease: "easeInOut",
		},
	},

	3: {
		strokeWidth: 4,
		strokeDasharray: "50 50",
		strokeDashoffset: [0, 100],

		transition: {
			strokeDashoffset: { repeat: Infinity, repeatType: "loop" },
			duration: 1,
			repeat: 0,
			duration: 1,
		},
	},

	4: {
		strokeWidth: 4,
		strokeDasharray: [null, "100 0", "400, 0", "200 200"],
		strokeDashoffset: [0, 400],

		transition: {
			strokeDasharray: {
				duration: 2,
				times: [0, 0.5, 0.6, 1],
			},
			strokeDashoffset: {
				repeat: Infinity,
				repeatType: "loop",
				duration: 2,
			},
			duration: 1,
			repeat: 0,
			duration: 1,
		},
	},

	5: {
		strokeWidth: 4,
		strokeDasharray: [null, "1300 0", "1300 1300"],
		strokeDashoffset: 1300,

		transition: {
			strokeDasharray: {
				duration: 5,
			},
			strokeDashoffset: {
				duration: 4,
			},
			duration: 1,
			repeat: 0,
			duration: 1,
		},
	},

	6: {
		strokeWidth: 4,
		strokeDasharray: "1300 1300",
		strokeDashoffset: [1300, 0],

		transition: {
			strokeDashoffset: {
				repeat: Infinity,
				repeatType: "mirror",
				duration: 3,
			},
			duration: 1,
			repeat: 0,
			duration: 1,
		},
	},
};

export default function pathAnimation() {
	const [stage, setStage] = useState(0);

	const handleBack = () => {
		if (stage === 0) return;
		setStage(stage - 1);
	};
	const handleForward = () => {
		if (stage === 6) return;
		setStage(stage + 1);
	};

	const texts = [
		"...",
		"Let's start with a path.",
		"It can be dashed with <path-dasharray>.",
		"Use <path-dashoffset> to move the dashes.",
		"Use <path-dasharray> to change the dash size and the gaps between.",
		"Hide the path by making the dash and gap the same size as the whole path length.",
		"Using <path-dashoffset> now looks like it draws the path.",
	];

	return (
		<div className="w-screen h-screen bg-primary relative flex flex-col font-example font-semibold text-base justify-center p-4 items-center overflow-hidden select-none">
			<p className="text-3xl text-center text-background mb-4">
				{texts[stage]}
			</p>
			<div className="w-full h-[80%] flex justify-between items-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 14 14"
					className={`w-1/12 h-min ${
						stage === 0
							? "stroke-primary cursor-default"
							: "stroke-orange cursor-pointer"
					}`}
					onClick={handleBack}>
					<g>
						<path
							d="M7.54.5,1.4,6.65a.48.48,0,0,0,0,.7L7.54,13.5"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"></path>
						<path
							d="M12.75.5,6.6,6.65a.5.5,0,0,0,0,.7l6.15,6.15"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"></path>
					</g>
				</svg>

				<motion.svg
					viewBox="0 0 480 480"
					xmlns="http://www.w3.org/2000/svg"
					className="w-full h-full stroke-orange">
					<motion.path
						variants={pathVariants}
						initial="0"
						animate={`${stage}`}
						fill="none"
						strokeDasharray="1 0"
						strokeWidth={0}
						d="M415,275Q422,310,417.5,354Q413,398,378,423Q343,448,299,423Q255,398,227.5,389.5Q200,381,151,401.5Q102,422,86,383.5Q70,345,65,309.5Q60,274,78.5,243.5Q97,213,87.5,176.5Q78,140,107.5,122Q137,104,160.5,74Q184,44,222,33Q260,22,293.5,43.5Q327,65,362,81Q397,97,386,142.5Q375,188,391.5,214Q408,240,415,275Z"
					/>
				</motion.svg>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 14 14"
					className={`w-1/12 h-min ${
						stage === 6
							? "stroke-primary cursor-default"
							: "stroke-orange cursor-pointer"
					}`}
					onClick={handleForward}>
					<g>
						<path
							d="M6.46.5,12.6,6.65a.48.48,0,0,1,0,.7L6.46,13.5"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"></path>
						<path
							d="M1.25.5,7.4,6.65a.5.5,0,0,1,0,.7L1.25,13.5"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"></path>
					</g>
				</svg>
			</div>
		</div>
	);
}
