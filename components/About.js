export default function About() {
  return (
    <section className="about">
      <h1>Who We Are</h1>
      <div className="carousel" aria-label="Gallery">
        <ol className="carousel__viewport">
          <li id="carousel__slide1" className="carousel__slide">
            <div className="carousel__snapper"></div>
            <h4>Christopher</h4>
            <p>Guitar/Vocals</p>
          </li>
          <li id="carousel__slide2" className="carousel__slide">
            <div className="carousel__snapper"></div>
            <h4>Stephen</h4>
            <p>Drums/Vocals</p>
          </li>
          <li id="carousel__slide3" className="carousel__slide">
            <div className="carousel__snapper"></div>
            <h4>Ben</h4>
            <p>Guitar</p>
          </li>
          <li id="carousel__slide4" className="carousel__slide">
            <div className="carousel__snapper"></div>
            <h4>Bart</h4>
            <p>Bass</p>
          </li>
        </ol>
      </div>
    </section>
  )
}
