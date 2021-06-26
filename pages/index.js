import Head from "next/head";

import axios from "axios";
import apiUrl from "../utils/apiUrl";

import HeadCarousel from "../components/HeadCarousel";
import About from "../components/About";
import Shows from "../components/Shows";
import Listen from "../components/Listen";

export default function Home(props) {
	// console.log(props);

	return (
		<div className="wrapper">
			<Head>
				{/* This adds links to the head tag of the html. Specifically, this is the font-awesome CDN for social links. */}

				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
					integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
					crossorigin="anonymous"
					referrerpolicy="no-referrer"
				/>
			</Head>
			<HeadCarousel
			windowSize={props.windowSize}
			images={props.index.headerImage}
			/>

			<About
			// members={props.index.Members}
			/>

			<Shows
			// heading={props.index.showsHeading}
			// shows={props.index.SingleShows}
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

			<Listen />

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
