import Link from "next/link";

export default function Home() {
	return (
		<ul>
			<li>
				<Link href="/svg/viewport">Viewport</Link>
				<Link href="/svg/viewbox">viewBox</Link>
			</li>
		</ul>
	);
}
