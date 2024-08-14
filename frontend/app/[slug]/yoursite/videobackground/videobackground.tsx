export default function VideoBackground() {
	return (
		<video className="border-b-4" autoPlay loop muted playsInline>
			<source src="/videobackground.mp4" type="video/mp4" />
			Your browser does not support the video tag.
		</video>
	);
}
