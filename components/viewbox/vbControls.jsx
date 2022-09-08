import Checkbox from "../common/checkbox";
import ControlsWrapper from "../common/controlsWrapper";
import Section from "../common/section";
import SectionLabel from "../common/sectionLabel";
import Slider from "../common/slider";
import VbCodeBlock from "./vbCodeBlock";

export default function VbControls({ sliders, combineWH, setCombineWH }) {
	const { vbX, vbY, vbW, vbH, rectX, rectY, rectW, rectH } = sliders;

	function handleCombine() {
		vbH.animVal.set(vbW.animVal.get());
		setCombineWH();
		console.log(vbH.animVal.get());
	}

	return (
		<ControlsWrapper>
			<Section label={"viewBox"}>
				<Slider {...vbX.sliderProps} />
				<Slider {...vbY.sliderProps} />

				<Slider {...vbW.sliderProps} disabled={combineWH} />
				<Slider {...vbH.sliderProps} disabled={combineWH} />

				<Slider
					{...vbW.sliderProps}
					label="width & height"
					disabled={!combineWH}
				/>

				<Checkbox
					label="link width & height"
					checked={combineWH}
					onChange={handleCombine}
				/>
			</Section>

			<Section label="<rect>">
				<Slider {...rectX.sliderProps} />
				<Slider {...rectY.sliderProps} />
				<Slider {...rectW.sliderProps} />
				<Slider {...rectH.sliderProps} />
			</Section>

			<p className="text-slate-700 text-xs font-normal">
				(Double click sliders to reset)
			</p>
			<div className="h-1/3 bg-[#1e1e1e]">
				<VbCodeBlock sliders={sliders} combineWH={combineWH} />
			</div>
		</ControlsWrapper>
	);
}
