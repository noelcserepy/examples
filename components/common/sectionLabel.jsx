export default function SectionLabel({ children }) {
	return (
		<label className="flex items-start justify-center text-center">
			<span className="text-base sm:text-lg font-bold">{children}</span>
		</label>
	);
}
