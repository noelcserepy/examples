import { useState } from "react";
import ParCanvas from "../../components/preserveAspectRatio/ParCanvas";
import ParControls from "../../components/preserveAspectRatio/ParControls";
import useParSliders from "../../hooks/useParSliders";

export default function PreserveAspectRatio() {
	const [meet, setMeet] = useState("meet");
	const [align, setAlign] = useState("xMidYMid");
	const [vpAxes, setVpAxes] = useState(false);
	const [vbAxes, setVbAxes] = useState(false);

	const sliders = useParSliders();

	return (
		<div className="h-screen w-screen flex justify-between bg-background text-primary font-example font-semibold text-base overflow-clip">
			<ParCanvas
				sliders={sliders}
				align={align}
				meet={meet}
				vpAxes={vpAxes}
				vbAxes={vbAxes}
			/>
			<ParControls
				sliders={sliders}
				meet={meet}
				setMeet={val => setMeet(val)}
				align={align}
				setAlign={val => setAlign(val)}
				vpAxes={vpAxes}
				setVpAxes={() => setVpAxes(!vpAxes)}
				vbAxes={vbAxes}
				setVbAxes={() => setVbAxes(!vbAxes)}
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
