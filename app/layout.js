import MainHeader from '@/components/main-header/main-header';
import './globals.css';

import { Suspense } from 'react';
import NavigationEvents from './NavigationEvents';

export const metadata = {
	title: 'NextLevel Food',
	description: 'Delicious meals, shared by a food-loving community.'
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<MainHeader />
				<Suspense fallback={null}>
					<NavigationEvents />
				</Suspense>

				{children}
			</body>
		</html>
	);
}
