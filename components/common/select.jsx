export default function Select({ label, onChange, value, valsArray }) {
	return (
		<>
			<label className="flex items-center justify-between cursor-pointer">
				<span className="text-slate-700 text-sm font-normal">{label}</span>
			</label>
			<select
				className="select select-accent select-sm w-full max-w-xs"
				onChange={onChange}
				value={value}>
				{valsArray.map(val => (
					<option key={val} value={val}>
						{val}
					</option>
				))}
			</select>
		</>
	);
}
