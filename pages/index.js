import Head from "next/head";
import Image from "next/image";

import axios from "axios";
import apiUrl from "../utils/apiUrl";

import HeadCarousel from "../components/HeadCarousel";
import About from "../components/About";
import Shows from "../components/Shows";
import Listen from "../components/Listen";

export default function Home(props) {
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

			<Listen />

			<section className="merch">
				<div>Merch is coming soon, so stay tuned!</div>
				<h1>Merch</h1>
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
