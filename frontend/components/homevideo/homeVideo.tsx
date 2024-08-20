export default function HomeVideo() {
	return (
		<video autoPlay loop muted playsInline>
			<source src="/homevideo.mp4" type="video/mp4" />
			Your browser does not support the video tag.
		</video>
	);
}
