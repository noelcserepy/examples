import { useEffect, useState } from "react";

export default function useCodeString({ width, height, vbX, vbY, vbWH }) {
	const [codeString, setCodestring] = useState(
		'<svg width="0" height="0" viewbox="0 0 0 0" >'
	);
	useEffect(() => {
		function updateText() {
			setCodestring(
				`<svg width="${width.sliderProps.mVal.get()}" height="${height.sliderProps.mVal.get()}" viewbox="${vbX.sliderProps.mVal.get()} ${vbY.sliderProps.mVal.get()} ${vbWH.sliderProps.mVal.get()} ${vbWH.sliderProps.mVal.get()}" >`
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
