export default function Grid() {
	return (
		<>
			<defs>
				<pattern
					id="one"
					x="0"
					y="0"
					width="1"
					height="1"
					patternUnits="userSpaceOnUse"
					fill="none">
					<rect
						x="0"
						y="0"
						width="1"
						height="1"
						stroke="white"
						strokeWidth="0.01"
					/>
				</pattern>

				<pattern
					id="ten"
					x="0"
					y="0"
					width="10"
					height="10"
					patternUnits="userSpaceOnUse"
					fill="none">
					<rect
						x="0"
						y="0"
						width="10"
						height="10"
						stroke="white"
						strokeWidth="0.1"
					/>
				</pattern>

				<pattern
					id="hundred"
					x="0"
					y="0"
					width="100"
					height="100"
					patternUnits="userSpaceOnUse"
					fill="none">
					<rect x="0" y="0" width="100" height="100" stroke="white" />
				</pattern>
			</defs>

			<rect x="-500%" y="-500%" width="1000%" height="1000%" fill="url(#one)" />
			<rect x="-500%" y="-500%" width="1000%" height="1000%" fill="url(#ten)" />
			<rect
				x="-500%"
				y="-500%"
				width="1000%"
				height="1000%"
				fill="url(#hundred)"
			/>

			<circle cx="0" cy="0" r="7" className="fill-orange" />
			<text x="-14" y="-20" className="fill-orange">
				{`(0, 0)`}
			</text>
		</>
	);
}
