// import MediaQuery from react-responsive;

export default function HeadCarousel(props) {

  const desktopIMG = props.images[0].desktopImage.formats.large.url
  const mobileIMG = props.images[0].mobileImage.formats.large.url
  const isMobile = props.windowSize.width < 768
  
  return (
    <section className='head' style={{backgroundImage: (isMobile ? `url(${mobileIMG})` : `url(${desktopIMG})`)}}></section>
  )
}
