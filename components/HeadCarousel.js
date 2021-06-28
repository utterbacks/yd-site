export default function HeadCarousel(props) {
	const desktopIMG = "images/desktop_header.jpg";
	const mobileIMG = "images/mobile_header.jpg";
	const isMobile = props.windowSize.width < 768;
	// props.images.desktopImage.formats.large.url;
	// props.images.mobileImage.formats.large.url;

	return (
		<section
			className="head"
			style={{
				backgroundImage: isMobile ? `url(${mobileIMG})` : `url(${desktopIMG})`,
			}}
		></section>
	);
}
