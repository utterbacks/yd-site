import "../styles/globals.scss";
import { useState, useEffect } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
	function useWindowSize() {
		const [windowSize, setWindowSize] = useState({
			width: 1000,
		});
		useEffect(() => {
			function handleResize() {
				setWindowSize({
					width: window.innerWidth,
				});
			}
			window.addEventListener("resize", handleResize);
			//calling right away so state gets set on load
			handleResize();

			return () => window.removeEventListener("resize", handleResize);
		}, []);

		return windowSize;
	}

	return (
		<>
			<Head>
				<title>Young Detectives</title>

				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
					integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
					crossOrigin="anonymous"
					referrerPolicy="no-referrer"
				/>

				<link rel="icon" type="image/png" href="/favicon.png" />
			</Head>
			<Component {...pageProps} windowSize={useWindowSize()} />
		</>
	);
}

export default MyApp;
