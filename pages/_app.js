import "../styles/globals.scss";
import { useState, useEffect } from "react";


function MyApp({ Component, pageProps }) {


	function useWindowSize() {
		const [windowSize, setWindowSize] = useState({
			width: 1000
		});
		useEffect(() => {
			function handleResize() {
				setWindowSize({
					width: window.innerWidth
				});
			}
			window.addEventListener('resize', handleResize);
			//calling right away so state gets set on load
			handleResize();

			return () => window.removeEventListener('resize', handleResize);
		}, []);

		return windowSize
	}

	return <Component {...pageProps} windowSize={useWindowSize()} />;
}

export default MyApp;
