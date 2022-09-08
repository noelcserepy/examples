import SectionLabel from "./sectionLabel";

export default function Section({ label, children }) {
	return (
		<div className="flex flex-col mb-2">
			<SectionLabel>{label}</SectionLabel>
			<div className="sm:space-y-2">{children}</div>
		</div>
	);
}
