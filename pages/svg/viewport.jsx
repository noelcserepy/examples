import { useState } from "react";
import useViewportSliders from "../../hooks/useViewportSliders";
import VpCanvas from "../../components/viewport/vpCanvas";
import VpControls from "../../components/viewport/vpControls";

export default function Viewport() {
	const [showInnerSvg, setShowInnerSvg] = useState(false);
	const [showSecondSvg, setShowSecondSvg] = useState(false);
	const sliders = useViewportSliders();

	return (
		<div className="h-screen w-screen flex justify-between bg-background text-primary font-example font-semibold text-base overflow-clip">
			<VpCanvas
				sliders={sliders}
				showInnerSvg={showInnerSvg}
				showSecondSvg={showSecondSvg}
			/>
			<VpControls
				sliders={sliders}
				showInnerSvg={showInnerSvg}
				setShowInnerSvg={() => setShowInnerSvg(!showInnerSvg)}
				showSecondSvg={showSecondSvg}
				setShowSecondSvg={() => setShowSecondSvg(!showSecondSvg)}
			/>
		</div>
	);
}
