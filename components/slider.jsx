import { useEffect, useState } from "react";

export default function Slider({ label, initial, min, max, mVal }) {
	const [value, setValue] = useState(Math.round(mVal.get()));

	useEffect(() => {
		mVal.set(value);
	}, [value]);

	return (
		<div className="flex flex-col w-full mb-2">
			<label className="text-slate-700 text-sm font-normal">{label}</label>
			<div className="flex justify-between">
				<input
					className="cursor-pointer w-full"
					name={label}
					type="range"
					value={value}
					min={min}
					max={max}
					step={1}
					onChange={e => setValue(e.target.value)}
					onDoubleClick={e => setValue(initial)}
				/>
				<p className="w-1/6 text-right text-sm">{value}</p>
			</div>
		</div>
	);
}
