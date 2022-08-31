import { CopyBlock, monokai } from "react-code-blocks";
import MainCanvas from "../components/mainCanvas";
import Slider from "../components/slider";
import SliderContainer from "../components/sliderContainer";
import useSliders from "../hooks/useSliders";

export default function Home() {
	const { width, height, vbX, vbY, vbW, vbH } = useSliders();

	return (
		<div className="h-screen w-screen flex justify-between bg-background text-primary font-example font-semibold text-lg">
			<MainCanvas
				width={width.animVal}
				height={height.animVal}
				vbX={vbX.animVal}
				vbY={vbY.animVal}
				vbW={vbW.animVal}
				vbH={vbH.animVal}
			/>
			<div className="flex flex-col h-full">
				<SliderContainer>
					<h2 className="text-xl mb-4">Element Size</h2>
					<Slider {...width.sliderProps} />
					<Slider {...height.sliderProps} />

					<h2 className="text-xl mb-4">ViewBox</h2>
					<Slider {...vbX.sliderProps} />
					<Slider {...vbY.sliderProps} />
					<Slider {...vbW.sliderProps} />
					<Slider {...vbH.sliderProps} />
				</SliderContainer>
				<CopyBlock
					language={"html"}
					text={"abcabc"}
					showLineNumbers={true}
					wrapLines={true}
					theme={monokai}
					codeBlock
				/>
			</div>
		</div>
	);
}
