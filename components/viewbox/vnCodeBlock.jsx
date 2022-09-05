import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function VbCodeBlock({ sliders, combineWH }) {
	const { vbX, vbY, vbW, vbH, rectX, rectY, rectW, rectH } = sliders;
	function makeString(vbX, vbY, vbW, vbH, rectX, rectY, rectW, rectH) {
		const codeStr = `<svg viewBox="${vbX} ${vbY} ${vbW} ${
			combineWH ? vbW : vbH
		}">
	<rect x="${rectX}" y="${rectY}" \n    width="${rectW}" height="${rectH}" />
</svg>`;

		return codeStr;
	}

	const [codeString, setCodestring] = useState(
		makeString(
			vbX.sliderProps.initial,
			vbY.sliderProps.initial,
			vbW.sliderProps.initial,
			vbH.sliderProps.initial,
			rectX.sliderProps.initial,
			rectY.sliderProps.initial,
			rectW.sliderProps.initial,
			rectH.sliderProps.initial
		)
	);

	useEffect(() => {
		function updateText() {
			setCodestring(
				makeString(
					vbX.sliderProps.mVal.get(),
					vbY.sliderProps.mVal.get(),
					vbW.sliderProps.mVal.get(),
					vbH.sliderProps.mVal.get(),
					rectX.sliderProps.mVal.get(),
					rectY.sliderProps.mVal.get(),
					rectW.sliderProps.mVal.get(),
					rectH.sliderProps.mVal.get()
				)
			);
		}
		updateText();

		const unsubscribeVbX = vbX.sliderProps.mVal.onChange(updateText);
		const unsubscribeVbY = vbY.sliderProps.mVal.onChange(updateText);
		const unsubscribeVbW = vbW.sliderProps.mVal.onChange(updateText);
		const unsubscribeVbH = vbH.sliderProps.mVal.onChange(updateText);
		const unsubscribeRectX = rectX.sliderProps.mVal.onChange(updateText);
		const unsubscribeRectY = rectY.sliderProps.mVal.onChange(updateText);
		const unsubscribeRectW = rectW.sliderProps.mVal.onChange(updateText);
		const unsubscribeRectH = rectH.sliderProps.mVal.onChange(updateText);

		return () => {
			unsubscribeVbX();
			unsubscribeVbY();
			unsubscribeVbW();
			unsubscribeVbH();
			unsubscribeRectX();
			unsubscribeRectY();
			unsubscribeRectW();
			unsubscribeRectH();
		};
	}, [combineWH]);

	return (
		<SyntaxHighlighter language="html" style={vscDarkPlus}>
			{codeString}
		</SyntaxHighlighter>
	);
}
