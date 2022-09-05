import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function CodeBlock({ sliders, showInnerSvg, showSecondSvg }) {
	const { width, height, innerW, innerH, secondW, secondH } = sliders;
	function makeString(w, h, iw, ih, sw, sh) {
		const codeStr = `<svg width="${w}%" height="${h}%">
${showInnerSvg ? `    <svg width="${iw}%" height="${ih}%">\n    </svg>` : ""}
</svg>

${showSecondSvg ? `<svg width="${sw}%" height="${sh}%">\n</svg>` : ""}`;

		return codeStr;
	}

	const [codeString, setCodestring] = useState(
		makeString(
			width.sliderProps.initial,
			height.sliderProps.initial,
			innerW.sliderProps.initial,
			innerH.sliderProps.initial,
			secondW.sliderProps.initial,
			secondH.sliderProps.initial
		)
	);

	useEffect(() => {
		function updateText() {
			setCodestring(
				makeString(
					width.sliderProps.mVal.get(),
					height.sliderProps.mVal.get(),
					innerW.sliderProps.mVal.get(),
					innerH.sliderProps.mVal.get(),
					secondW.sliderProps.mVal.get(),
					secondH.sliderProps.mVal.get()
				)
			);
		}
		updateText();

		const unsubscribeWidth = width.sliderProps.mVal.onChange(updateText);
		const unsubscribeHeight = height.sliderProps.mVal.onChange(updateText);
		const unsubscribeInnerW = innerW.sliderProps.mVal.onChange(updateText);
		const unsubscribeInnerH = innerH.sliderProps.mVal.onChange(updateText);
		const unsubscribeSecondW = secondW.sliderProps.mVal.onChange(updateText);
		const unsubscribeSecondH = secondH.sliderProps.mVal.onChange(updateText);

		return () => {
			unsubscribeWidth();
			unsubscribeHeight();
			unsubscribeInnerW();
			unsubscribeInnerH();
			unsubscribeSecondW();
			unsubscribeSecondH();
		};
	}, [showInnerSvg, showSecondSvg]);

	return (
		<SyntaxHighlighter language="html" style={vscDarkPlus}>
			{codeString}
		</SyntaxHighlighter>
	);
}
