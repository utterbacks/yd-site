import Head from "next/head";
import Image from "next/image";

import axios from "axios";
import apiUrl from "../utils/apiUrl";

import HeadCarousel from "../components/HeadCarousel";
import About from "../components/About";
import Shows from "../components/Shows";
import Listen from "../components/Listen";
import Merch from "../components/Merch";
import Footer from "../components/Footer";
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
			<Listen />
			<Merch />
			<Footer />
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
