import Slider from "../../components/slider";
import CodeBlock from "./vpCodeBlock";

export default function VpControls({
	sliders,
	showInnerSvg,
	setShowInnerSvg,
	showSecondSvg,
	setShowSecondSvg,
}) {
	const { width, height, innerW, innerH, secondW, secondH } = sliders;

	return (
		<div className="flex flex-col h-full w-2/5 overflow-y-scroll overflow-x-hidden p-2 py-1">
			<div className="flex flex-col h-full justify-between">
				<div className="flex flex-col sm:space-y-2">
					<label className="flex items-center justify-between cursor-pointer">
						<span className="text-sm">SVG Viewport</span>
					</label>

					<Slider {...width.sliderProps} />
					<Slider {...height.sliderProps} />
				</div>

				<div className="flex flex-col sm:space-y-2">
					<label className="flex items-center justify-between cursor-pointer">
						<span className="text-sm">Second SVG Viewport</span>
						<input
							type="checkbox"
							className="toggle toggle-accent"
							checked={showSecondSvg}
							onChange={setShowSecondSvg}
						/>
					</label>

					<Slider disabled={!showSecondSvg} {...secondW.sliderProps} />
					<Slider disabled={!showSecondSvg} {...secondH.sliderProps} />
				</div>

				<div className="flex flex-col sm:space-y-2">
					<label className="flex items-center justify-between cursor-pointer">
						<span className="text-sm">Inner SVG Viewport</span>
						<input
							type="checkbox"
							className="toggle toggle-accent"
							checked={showInnerSvg}
							onChange={setShowInnerSvg}
						/>
					</label>

					<Slider disabled={!showInnerSvg} {...innerW.sliderProps} />
					<Slider disabled={!showInnerSvg} {...innerH.sliderProps} />
				</div>
				<p className="text-slate-700 text-xs font-normal">
					(Double click sliders to reset)
				</p>
			</div>
			<div className="h-1/3 bg-[#1e1e1e]">
				<CodeBlock
					sliders={sliders}
					showInnerSvg={showInnerSvg}
					showSecondSvg={showSecondSvg}
				/>
			</div>
		</div>
	);
}
