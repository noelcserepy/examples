import Slider from "../common/slider";
import VbCodeBlock from "./vnCodeBlock";

export default function VbControls({ sliders, combineWH, setCombineWH }) {
	const { vbX, vbY, vbW, vbH, rectX, rectY, rectW, rectH } = sliders;

	return (
		<div className="flex flex-col h-full w-2/5 overflow-y-scroll overflow-x-hidden p-2 py-1">
			<div className="flex flex-col h-full justify-between">
				<div className="flex flex-col sm:space-y-2">
					<label className="flex items-center justify-between cursor-pointer">
						<span className="text-sm">viewBox</span>
					</label>

					<Slider {...vbX.sliderProps} />
					<Slider {...vbY.sliderProps} />

					{combineWH ? (
						<Slider {...vbW.sliderProps} label="Width & Height" />
					) : (
						<>
							<Slider {...vbW.sliderProps} />
							<Slider {...vbH.sliderProps} />
						</>
					)}

					<label className="flex items-center justify-between cursor-pointer">
						<span className="text-sm font-normal">Link Width & Height</span>
						<input
							type="checkbox"
							className="toggle toggle-accent"
							checked={combineWH}
							onChange={setCombineWH}
						/>
					</label>
				</div>

				<div className="flex flex-col sm:space-y-2">
					<label className="flex items-center justify-between cursor-pointer">
						<span className="text-sm">rect</span>
					</label>
					<Slider {...rectX.sliderProps} />
					<Slider {...rectY.sliderProps} />
					<Slider {...rectW.sliderProps} />
					<Slider {...rectH.sliderProps} />
				</div>

				<p className="text-slate-700 text-xs font-normal">
					(Double click sliders to reset)
				</p>
			</div>
			<div className="h-1/3 bg-[#1e1e1e]">
				<VbCodeBlock sliders={sliders} combineWH={combineWH} />
			</div>
		</div>
	);
}
