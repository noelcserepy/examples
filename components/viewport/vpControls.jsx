import Slider from "../common/slider";
import CodeBlock from "./vpCodeBlock";
import ControlsWrapper from "../common/controlsWrapper";
import Section from "../common/section";
import Checkbox from "../common/checkbox";

export default function VpControls({
	sliders,
	showInnerSvg,
	setShowInnerSvg,
	showSecondSvg,
	setShowSecondSvg,
}) {
	const { width, height, innerW, innerH, secondW, secondH } = sliders;

	return (
		<ControlsWrapper>
			<Section label="SVG Viewport">
				<Slider {...width.sliderProps} />
				<Slider {...height.sliderProps} />
			</Section>

			<Section label="SVG Viewport #2">
				<Checkbox
					checked={showSecondSvg}
					onChange={setShowSecondSvg}
					label="show"
				/>
				<Slider disabled={!showSecondSvg} {...secondW.sliderProps} />
				<Slider disabled={!showSecondSvg} {...secondH.sliderProps} />
			</Section>

			<Section label="Inner SVG Viewport">
				<Checkbox
					checked={showInnerSvg}
					onChange={setShowInnerSvg}
					label="show"
				/>
				<Slider disabled={!showInnerSvg} {...innerW.sliderProps} />
				<Slider disabled={!showInnerSvg} {...innerH.sliderProps} />
			</Section>

			<p className="text-slate-700 text-xs font-normal">
				(Double click sliders to reset)
			</p>

			<div className="h-1/3 bg-[#1e1e1e]">
				<CodeBlock
					sliders={sliders}
					showInnerSvg={showInnerSvg}
					showSecondSvg={showSecondSvg}
				/>
			</div>
		</ControlsWrapper>
	);
}
