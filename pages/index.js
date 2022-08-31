import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import MainCanvas from "../components/mainCanvas";
import Slider from "../components/slider";
import SliderContainer from "../components/sliderContainer";
import useCodeString from "../hooks/useCodeString";
import useSliders from "../hooks/useSliders";

export default function Home() {
	const sliders = useSliders();
	const codeString = useCodeString(sliders);
	const { width, height, vbX, vbY, vbWH } = sliders;

	return (
		<div className="h-screen w-screen flex justify-between bg-background text-primary font-example font-semibold text-lg">
			<MainCanvas
				width={width.animVal}
				height={height.animVal}
				vbX={vbX.animVal}
				vbY={vbY.animVal}
				vbWH={vbWH.animVal}
			/>
			<div className="flex flex-col h-full w-1/3">
				<SliderContainer>
					<h2 className="text-xl mb-4">Element Size</h2>
					<Slider {...width.sliderProps} />
					<Slider {...height.sliderProps} />

					<h2 className="text-xl mb-4">ViewBox</h2>
					<Slider {...vbX.sliderProps} />
					<Slider {...vbY.sliderProps} />
					<Slider {...vbWH.sliderProps} />
				</SliderContainer>
				<div className="w-full text-xs">
					<SyntaxHighlighter
						language="javascript"
						style={vscDarkPlus}
						wrapLongLines={true}>
						{codeString}
					</SyntaxHighlighter>
				</div>
			</div>
		</div>
	);
}
