import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function ParCodeBlock({ sliders, meet, align }) {
	const { width, height } = sliders;
	function makeString(w, h, meet, align) {
		const codeStr = `<svg width="${w}%" height="${h}%"
	preserveAspectRatio="${align === "none" ? align : `${align} ${meet}`}">
</svg>`;

		return codeStr;
	}

	const [codeString, setCodestring] = useState(
		makeString(
			width.sliderProps.initial,
			height.sliderProps.initial,
			meet,
			align
		)
	);

	useEffect(() => {
		function updateText() {
			setCodestring(
				makeString(
					width.sliderProps.mVal.get(),
					height.sliderProps.mVal.get(),
					meet,
					align
				)
			);
		}
		updateText();

		const unsubscribeWidth = width.sliderProps.mVal.onChange(updateText);
		const unsubscribeHeight = height.sliderProps.mVal.onChange(updateText);

		return () => {
			unsubscribeWidth();
			unsubscribeHeight();
		};
	}, [meet, align]);

	return (
		<SyntaxHighlighter language="html" style={vscDarkPlus}>
			{codeString}
		</SyntaxHighlighter>
	);
}
