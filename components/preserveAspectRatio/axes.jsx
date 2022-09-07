export default function Axes({ strokeWidth, children }) {
	return (
		<svg width="100%" height="100%" preserveAspectRatio="none">
			<line
				x1="0%"
				y1="0%"
				x2="100%"
				y2="0%"
				stroke="#1864ab"
				strokeWidth={`${strokeWidth}%`}
			/>
			<line
				x1="0%"
				y1="50%"
				x2="100%"
				y2="50%"
				stroke="#1864ab"
				strokeWidth={`${0.5 * strokeWidth}%`}
			/>
			<line
				x1="0%"
				y1="100%"
				x2="100%"
				y2="100%"
				stroke="#1864ab"
				strokeWidth={`${strokeWidth}%`}
			/>

			<line
				x1="0%"
				y1="0%"
				x2="0%"
				y2="100%"
				stroke="#c92a2a"
				strokeWidth={`${strokeWidth}%`}
			/>
			<line
				x1="50%"
				y1="0%"
				x2="50%"
				y2="100%"
				stroke="#c92a2a"
				strokeWidth={`${0.5 * strokeWidth}%`}
			/>
			<line
				x1="100%"
				y1="0%"
				x2="100%"
				y2="100%"
				stroke="#c92a2a"
				strokeWidth={`${strokeWidth}%`}
			/>
			<rect
				x="0"
				y="0"
				width="100%"
				height="100%"
				stroke="#0D1823"
				strokeWidth="1%"
				fill="none"
			/>
			{children}
		</svg>
	);
}
