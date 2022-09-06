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
			<div className="text-white text-xs font-light absolute bottom-2 left-2">
				<span>
					Created by <a href="https://www.noelcserepy.com/">Noël Cserépy</a>{" "}
				</span>
				<span>
					- Image by{" "}
					<a href="https://www.freepik.com/free-vector/gradient-mountain-landscape_20008477.htm#query=mountain&position=23&from_view=keyword#position=23&query=mountain">
						Freepik
					</a>
				</span>
			</div>
		</div>
	);
}
