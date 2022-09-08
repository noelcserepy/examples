import ParCodeBlock from "./ParCodeBlock";
import Slider from "../common/slider";
import { useEffect } from "react";
import Section from "../common/section";
import ControlsWrapper from "../common/controlsWrapper";
import Checkbox from "../common/checkbox";
import Select from "../common/select";

export default function ParControls({
	sliders,
	meet,
	setMeet,
	align,
	setAlign,
	vpAxes,
	setVpAxes,
	vbAxes,
	setVbAxes,
}) {
	const { width, height } = sliders;
	const alignVals = [
		"none",
		"xMinYMin",
		"xMidYMin",
		"xMaxYMin",
		"xMinYMid",
		"xMidYMid",
		"xMaxYMid",
		"xMinYMax",
		"xMidYMax",
		"xMaxYMax",
	];
	const meetVals = ["meet", "slice"];

	useEffect(() => {}, [align, meet]);

	return (
		<ControlsWrapper>
			<Section label="SVG Viewport">
				<Slider {...width.sliderProps} />
				<Slider {...height.sliderProps} />
				<Checkbox
					checked={vpAxes}
					onChange={setVpAxes}
					label="show viewport axes"
				/>
			</Section>

			<Section label="viewBox">
				<Checkbox
					checked={vbAxes}
					onChange={setVbAxes}
					label="show viewBox Axes"
				/>
				<Select
					label="align"
					onChange={e => setAlign(e.target.value)}
					value={align}
					valsArray={alignVals}
				/>
				<Select
					label="meetOrSlice"
					onChange={e => setMeet(e.target.value)}
					value={meet}
					valsArray={meetVals}
				/>
			</Section>

			<p className="text-slate-700 text-xs font-normal">
				(Double click sliders to reset)
			</p>
			<div className="h-1/3 bg-[#1e1e1e]">
				<ParCodeBlock sliders={sliders} meet={meet} align={align} />
			</div>
		</ControlsWrapper>
	);
}
