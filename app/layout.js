import MainHeader from '@/components/main-header/main-header';
import './globals.css';
// import { NavigationEvents, RouteChangeListener } from '@/components/route-change';
import { Suspense } from 'react';
import Script from 'next/script';

export const metadata = {
	title: 'NextLevel Food',
	description: 'Delicious meals, shared by a food-loving community.'
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<MainHeader />
				<Script src='http://localhost:8080/target/target-script-min.js#anonymous' />
				<Suspense fallback={null}>{/* <NavigationEvents /> */}</Suspense>

				{children}
			</body>
		</html>
	);
}
