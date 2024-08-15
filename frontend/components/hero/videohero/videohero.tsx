export default function VideoHero() {
	return (
		<video autoPlay loop muted playsInline>
			<source src="/videohero.mp4" type="video/mp4" />
			Your browser does not support the video tag.
		</video>
	);
}
