export default function ControlsWrapper({ children }) {
	return (
		<div className="flex flex-col h-full w-1/2 sm:w-2/5 overflow-y-scroll overflow-x-hidden p-2 py-1">
			<div className="flex flex-col h-full justify-between">{children}</div>
		</div>
	);
}
