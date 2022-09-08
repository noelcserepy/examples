export default function Checkbox({ checked, onChange, label }) {
	return (
		<label className="flex justify-start cursor-pointer">
			<span className="text-sm font-normal mr-4">{label}</span>
			<input
				type="checkbox"
				className="toggle toggle-accent toggle-sm "
				checked={checked}
				onChange={onChange}
			/>
		</label>
	);
}
