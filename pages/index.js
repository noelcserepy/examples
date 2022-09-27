import Link from "next/link";

export default function Home() {
	return (
		<ul>
			<li>
				<Link href="/svg/viewport">Viewport</Link>
			</li>
			<li>
				<Link href="/svg/viewbox">viewBox</Link>
			</li>
			<li>
				<Link href="/svg/preserveaspectratio">preserveAspectRatio</Link>
			</li>
			<li>
				<Link href="/svg/pathanimation">pathanimation</Link>
			</li>
			<li>
				<Link href="/svg/shake">shake</Link>
			</li>
		</ul>
	);
}
