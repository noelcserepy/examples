import ParCodeBlock from "./ParCodeBlock";
import Slider from "../common/slider";
import { useEffect } from "react";

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
		<div className="flex flex-col h-full w-2/5 overflow-y-scroll overflow-x-hidden p-2 py-1">
			<div className="flex flex-col h-full justify-between">
				<div className="flex flex-col sm:space-y-2">
					<label className="flex items-center justify-between cursor-pointer">
						<span className="text-sm">SVG Viewport</span>
					</label>
					<label className="flex items-center justify-between cursor-pointer">
						<span className="text-slate-700 text-sm font-normal">
							Show Viewport Axes
						</span>
						<input
							type="checkbox"
							className="toggle toggle-accent"
							checked={vpAxes}
							onChange={setVpAxes}
						/>
					</label>

					<Slider {...width.sliderProps} />
					<Slider {...height.sliderProps} />
				</div>
				<div className="flex flex-col sm:space-y-2 mt-2">
					<label className="flex items-center justify-between cursor-pointer">
						<span className="text-sm">viewBox</span>
					</label>
					<label className="flex items-center justify-between cursor-pointer">
						<span className="text-slate-700 text-sm font-normal">
							Show viewBox Axes
						</span>
						<input
							type="checkbox"
							className="toggle toggle-accent"
							checked={vbAxes}
							onChange={setVbAxes}
						/>
					</label>
					<label className="flex items-center justify-between cursor-pointer">
						<span className="text-slate-700 text-sm font-normal">align</span>
					</label>
					<select
						className="select select-accent w-full max-w-xs"
						onChange={e => setAlign(e.target.value)}
						value={align}>
						{alignVals.map(val => (
							<option key={val} value={val}>
								{val}
							</option>
						))}
					</select>
				</div>

				<div className="flex flex-col sm:space-y-2">
					<label className="flex items-center justify-between cursor-pointer">
						<span className="text-slate-700 text-sm font-normal">
							meetOrSlice
						</span>
					</label>
					<select
						className="select select-accent w-full max-w-xs"
						onChange={e => setMeet(e.target.value)}
						disabled={align === "none"}
						value={meet}>
						{meetVals.map(val => (
							<option key={val} value={val}>
								{val}
							</option>
						))}
					</select>
				</div>
				<p className="text-slate-700 text-xs font-normal">
					(Double click sliders to reset)
				</p>
			</div>
			<div className="h-1/3 bg-[#1e1e1e]">
				<ParCodeBlock sliders={sliders} meet={meet} align={align} />
			</div>
		</div>
	);
}
