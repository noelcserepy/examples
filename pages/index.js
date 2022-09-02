import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import MainCanvas from "../components/mainCanvas";
import Slider from "../components/slider";
import useCodeString from "../hooks/useCodeString";
import useRectSliders from "../hooks/useRectSliders";
import useSvgSliders from "../hooks/useSvgSliders";

export default function Home() {
	const [showGrid, setShowGrid] = useState(true);
	const [showRectangle, setShowRectangle] = useState(false);
	const [showMountains, setShowMountains] = useState(false);
	const svg = useSvgSliders();
	const rect = useRectSliders();
	const codeString = useCodeString({ sliders: svg, rect, showRectangle });
	const { width, height, vbX, vbY, vbWH } = svg;
	const { rectX, rectY, rectWH } = rect;

	return (
		<div className="h-screen w-screen flex justify-between bg-background text-primary font-example font-semibold text-base overflow-clip">
			<MainCanvas
				svg={svg}
				rect={rect}
				showGrid={showGrid}
				showRectangle={showRectangle}
				showMountains={showMountains}
			/>
			<div className="flex flex-col h-full w-1/2 overflow-y-scroll">
				<div className="w-full text-xs bg-[#1e1e1e] h-max flex justify-start items-center">
					<SyntaxHighlighter
						language="javascript"
						style={vscDarkPlus}
						wrapLongLines={true}>
						{codeString}
					</SyntaxHighlighter>
				</div>
				<div className="p-4 flex flex-col space-y-2 ">
					<div className="flex text-xs flex-wrap">
						<button
							className="text-[#0075ff] border border-[#b2b2b2] rounded-md w-min p-1 whitespace-nowrap m-1"
							onClick={() => setShowGrid(!showGrid)}>
							Toggle Grid
						</button>
						<button
							className="text-[#0075ff] border border-[#b2b2b2] rounded-md w-min p-1 whitespace-nowrap m-1"
							onClick={() => setShowMountains(!showMountains)}>
							Toggle Image
						</button>
						<button
							className="text-[#0075ff] border border-[#b2b2b2] rounded-md w-min p-1 whitespace-nowrap m-1"
							onClick={() => setShowRectangle(!showRectangle)}>
							Toggle Rectangle
						</button>
					</div>
					<p className="text-slate-700 text-xs font-normal">
						(Double click sliders to reset)
					</p>
					<h2 className="text-2xl mt-2 text-orange">{`<svg> Element`}</h2>
					<Slider {...width.sliderProps} />
					<Slider {...height.sliderProps} />

					<h2 className="text-base mt-2">ViewBox</h2>
					<Slider {...vbX.sliderProps} />
					<Slider {...vbY.sliderProps} />
					<Slider {...vbWH.sliderProps} />

					<h2 className="text-2xl mt-4 text-maroon">Rectangle</h2>
					<Slider {...rectX.sliderProps} />
					<Slider {...rectY.sliderProps} />
					<Slider {...rectWH.sliderProps} />
				</div>
			</div>
		</div>
	);
}
