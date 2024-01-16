const { default: Home } = require('./page');

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		// Set up a global event listener
		const handleEvent = () => {
			document.body.style.opacity = 0;
		};
		window.addEventListener('pagehide', handleEvent);

		return () => {
			window.removeEventListener('pagehide', handleEvent);
		};
	}, []);

	return <Home {...pageProps} />;
}
