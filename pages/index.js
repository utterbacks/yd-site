export default function Home() {
	return (
		<div className="wrapper">
			<section className="head"></section>

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

			<section className="shows">
				<div>
					<ul>
						<li>Here</li>
						<li>There</li>
						<li>Anywhere</li>
						<li>Ah fuck,</li>
						<li>Dr. Suess got cancelled.</li>
						<li>I'm out of the band.</li>
					</ul>
				</div>
				<h1>Where To See Us</h1>
			</section>

			<section className="music">
				<h1>Take a Listen</h1>
				{/* eslint-disable-next-line */}
				<iframe
					src="https://open.spotify.com/embed/artist/0v26XwuwtnWuVkTVjbBsvv"
					width="300"
					height="200"
					frameBorder="0"
					allowtransparency="true"
					allow="encrypted-media"
				></iframe>
			</section>

			<section className="merch">
				<div>Buy our shit because no one makes money off of streaming lol</div>
				<h1>Merch</h1>
			</section>
		</div>
	);
}
