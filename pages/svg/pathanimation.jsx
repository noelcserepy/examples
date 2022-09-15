import { motion, useAnimationControls } from "framer-motion";
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
			duration: 1.4,
			repeat: 0,
			duration: 1,
		},
	},

	4: {
		strokeWidth: 4,
		strokeDasharray: [null, "200 50"],
		strokeDashoffset: [0, 250],

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
		strokeDasharray: [null, "1300 1300"],
		strokeDashoffset: 0,

		transition: {
			strokeDasharray: {
				duration: 2,
			},
			strokeDashoffset: {
				delay: 2,
				duration: 2,
			},
			duration: 1,
			repeat: 0,
			duration: 1,
		},
	},

	6: {
		strokeWidth: 4,
		strokeDasharray: "1300 1300",
		strokeDashoffset: 1300,

		transition: {
			strokeDashoffset: {
				duration: 2,
			},
			duration: 1,
			repeat: 0,
			duration: 1,
		},
	},

	7: {
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

export default function PathAnimation() {
	const [stage, setStage] = useState(0);
	const pControls = useAnimationControls();
	const texts = [
		"Click the arrow to the right to continue.",
		"Let's start with a path.",
		"It can be dashed with a <path-dasharray> pattern.",
		"Increasing the <path-dashoffset> moves the pattern along the path.",
		"We can control the size of the dashes and gaps using <path-dasharray>.",
		"Set the size of dashes and gaps to the length of the path.",
		"Set <path-dashoffset> to the length of the path to hide the dash.",
		"Controlling <path-dashoffset> now draws the path.",
	];
	const [currentText, setCurrentText] = useState(texts[stage]);

	const handleBack = () => {
		if (stage === 0) return;
		setStage(stage - 1);
	};
	const handleForward = () => {
		if (stage === 7) return;
		setStage(stage + 1);
	};

	useEffect(() => {
		const textSequence = async () => {
			await pControls.start({
				y: 20,
				opacity: 0,
				transition: {
					duration: 0.3,
					ease: "easeOut",
				},
			});
			setCurrentText(texts[stage]);
			pControls.set({
				y: -20,
			});
			await pControls.start({
				y: 0,
				opacity: 1,
				transition: {
					duration: 0.3,
					ease: "easeOut",
				},
			});
		};
		textSequence();
	}, [stage]);

	return (
		<div className="w-screen h-screen bg-primary relative flex flex-col font-example font-semibold text-base justify-center p-4 items-center overflow-hidden select-none">
			<div className="mb-4 h-1/5 flex items-center justify-center">
				<motion.div
					className="text-3xl text-center  text-background "
					animate={pControls}>
					{currentText}
				</motion.div>
			</div>
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
						stage === 7
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
			<div className="text-white text-xs font-light absolute bottom-2 left-2">
				<span>
					Created by <a href="https://www.noelcserepy.com/">Noël Cserépy</a>{" "}
				</span>
			</div>
		</div>
	);
}
