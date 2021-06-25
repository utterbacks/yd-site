export default function HeadCarousel(props) {
	// const desktopIMG = props.images.desktopImage.formats.large.url;
	// const mobileIMG = props.images.mobileImage.formats.large.url;
	// const isMobile = props.windowSize.width < 768;

	return (
		<section
			className="head"
			style={
				{
					// backgroundImage: isMobile ? `url(${mobileIMG})` : `url(${desktopIMG})`,
				}
			}
		></section>
	);
}
