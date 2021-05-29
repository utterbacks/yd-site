// import MediaQuery from react-responsive;

export default function HeadCarousel(props) {


  // const fun = document.innerWidth;
  console.log(props)
  console.log(props.windowSize.width)

  const desktopIMG = props.images[0].desktopImage.formats.large.url
  const mobileIMG = props.images[0].mobileImage.formats.large.url
  const isMobile = props.windowSize.width < 768

  console.log(isMobile)
  

  return (

    <section className='head' style={{backgroundImage: (isMobile ? `url(${mobileIMG})` : `url(${desktopIMG})`)}}>
      <div ></div>
      
    {/* <MediaQuery maxWidth={650} >

    <section className='head' style={{ }}>
      
    </section>
    </MediaQuery> */}
    </section>

  )
}
