import { useEffect, useState } from "react";

export default function Slider({
	disabled,
	label,
	bigLabel,
	initial,
	min,
	max,
	mVal,
}) {
	const [value, setValue] = useState(Math.round(mVal.get()));

	useEffect(() => {
		mVal.set(value);
	}, [value, mVal]);

	return (
		<div className={`flex flex-col w-full ${disabled ? "opacity-10" : ""}`}>
			<label
				className={` ${
					bigLabel
						? "text-black text-base "
						: "text-slate-700 text-sm font-normal"
				}`}>
				{label}
			</label>
			<div className="flex justify-between items-center">
				<input
					data-theme="mine"
					disabled={disabled}
					className="range range-xs range-accent w-full h-2 sm:h-full "
					name={label}
					type="range"
					value={value}
					min={min}
					max={max}
					step={1}
					onChange={e => setValue(e.target.value)}
					onDoubleClick={() => setValue(initial)}
				/>
				<p className="w-1/6 text-right text-xs">{value}</p>
			</div>
		</div>
	);
}
