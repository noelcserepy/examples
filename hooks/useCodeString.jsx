import { useEffect, useState } from "react";

export default function useCodeString({ sliders, rect, showRectangle }) {
	const { width, height, vbX, vbY, vbWH } = sliders;
	const { rectX, rectY, rectWH } = rect;

	const [codeString, setCodestring] = useState(
		`<svg width="${width.sliderProps.initial}" ` +
			`height="${height.sliderProps.initial}"` +
			`viewbox="${vbX.sliderProps.initial} ` +
			`${vbY.sliderProps.initial} ` +
			`${vbWH.sliderProps.initial} ` +
			`${vbWH.sliderProps.initial}">\n` +
			`    <rect x="${rectX.sliderProps.initial}" ` +
			`y="${rectY.sliderProps.initial}" ` +
			`width="${rectWH.sliderProps.initial}" ` +
			`height="${rectWH.sliderProps.initial}">\n` +
			`</svg>`
	);
	useEffect(() => {
		function updateText() {
			setCodestring(
				`<svg width="${width.sliderProps.mVal.get()}" ` +
					`height="${height.sliderProps.mVal.get()}"` +
					`viewbox="${vbX.sliderProps.mVal.get()} ` +
					`${vbY.sliderProps.mVal.get()} ` +
					`${vbWH.sliderProps.mVal.get()} ` +
					`${vbWH.sliderProps.mVal.get()}">\n` +
					`    <rect x="${rectX.sliderProps.mVal.get()}" ` +
					`y="${rectY.sliderProps.mVal.get()}" ` +
					`width="${rectWH.sliderProps.mVal.get()}" ` +
					`height="${rectWH.sliderProps.mVal.get()}">\n` +
					`</svg>`
			);
		}

		const unsubscribeWidth = width.sliderProps.mVal.onChange(updateText);
		const unsubscribeHeight = height.sliderProps.mVal.onChange(updateText);
		const unsubscribeVbX = vbX.sliderProps.mVal.onChange(updateText);
		const unsubscribeVbY = vbY.sliderProps.mVal.onChange(updateText);
		const unsubscribeVbWH = vbWH.sliderProps.mVal.onChange(updateText);
		const unsubscribeRectX = rectX.sliderProps.mVal.onChange(updateText);
		const unsubscribeRectY = rectY.sliderProps.mVal.onChange(updateText);
		const unsubscribeRectWH = rectWH.sliderProps.mVal.onChange(updateText);

		return () => {
			unsubscribeWidth();
			unsubscribeHeight();
			unsubscribeVbX();
			unsubscribeVbY();
			unsubscribeVbWH();
			unsubscribeRectX();
			unsubscribeRectY();
			unsubscribeRectWH();
		};
	}, [showRectangle]);

	return codeString;
}
