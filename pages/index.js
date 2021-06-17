import axios from "axios";
import apiUrl from "../utils/apiUrl";

import HeadCarousel from "../components/HeadCarousel";
import About from "../components/About";
import Shows from "../components/Shows";

export default function Home(props) {
	console.log(props);

	return (
		<div className="wrapper">
			<HeadCarousel
				windowSize={props.windowSize}
				images={props.index.headerImage}
			/>

			<About members={props.index.Members} />

			<Shows
				heading={props.index.showsHeading}
				shows={props.index.SingleShows}
			/>

			{/* 
			<section className="shows">
			<h1>Where To See Us</h1>
				<div>
					<li>
						<li>Here</li>
						<li>There</li>
						<li>Anywhere</li>
						<li>Ah fuck,</li>
						<li>Dr. Suess got cancelled.</li>
						<li>I'm out of the band.</li>
					</ul>
				</div>
			</section> */}

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
				<h1>Merch</h1>
				<div>Merch is coming soon, so stay tuned!</div>
			</section>
		</div>
	);
}

Home.getInitialProps = async (ctx) => {
	try {
		const res = await axios.get(apiUrl("yd-backend"));
		const index = res.data;
		return { index };
	} catch (error) {
		return { error };
	}
};
