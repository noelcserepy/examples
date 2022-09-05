import { useState } from "react";
import VbCanvas from "../../components/viewbox/VbCanvas";
import VbControls from "../../components/viewbox/vbControls";
import useViewboxSliders from "../../hooks/useViewboxSliders";

export default function Viewbox() {
	const sliders = useViewboxSliders();
	const [combineWH, setCombineWH] = useState(false);

	return (
		<div className="h-screen w-screen flex justify-between bg-background text-primary font-example font-semibold text-base overflow-clip">
			<VbCanvas
				sliders={sliders}
				combineWH={combineWH}
				setCombineWH={() => setCombineWH(!combineWH)}
			/>
			<VbControls
				sliders={sliders}
				combineWH={combineWH}
				setCombineWH={() => setCombineWH(!combineWH)}
			/>
		</div>
	);
}
