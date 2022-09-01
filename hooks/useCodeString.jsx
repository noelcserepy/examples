import { useEffect, useState } from "react";

export default function useCodeString({ width, height, vbX, vbY, vbWH }) {
	const [codeString, setCodestring] = useState(
		`<svg width="${width.sliderProps.initial}" height="${
			height.sliderProps.initial
		}" viewbox="${vbX.sliderProps.initial} ${vbY.sliderProps.initial} ${
			vbWH.sliderProps.initial
		} ${vbWH.sliderProps.mVal.get()}">`
	);
	useEffect(() => {
		function updateText() {
			setCodestring(
				`<svg width="${width.sliderProps.mVal.get()}" height="${height.sliderProps.mVal.get()}" viewbox="${vbX.sliderProps.mVal.get()} ${vbY.sliderProps.mVal.get()} ${vbWH.sliderProps.mVal.get()} ${vbWH.sliderProps.mVal.get()}">`
			);
		}

		const unsubscribeWidth = width.sliderProps.mVal.onChange(updateText);
		const unsubscribeHeight = height.sliderProps.mVal.onChange(updateText);
		const unsubscribeVbX = vbX.sliderProps.mVal.onChange(updateText);
		const unsubscribeVbY = vbY.sliderProps.mVal.onChange(updateText);
		const unsubscribeVbWH = vbWH.sliderProps.mVal.onChange(updateText);

		return () => {
			unsubscribeWidth();
			unsubscribeHeight();
			unsubscribeVbX();
			unsubscribeVbY();
			unsubscribeVbWH();
		};
	}, []);

	return codeString;
}
