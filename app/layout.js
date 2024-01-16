import MainHeader from '@/components/main-header/main-header';
import './globals.css';
import { RouteChangeListener } from '@/components/route-change';

export const metadata = {
	title: 'NextLevel Food',
	description: 'Delicious meals, shared by a food-loving community.'
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<MainHeader />
				<RouteChangeListener />
				{children}
			</body>
		</html>
	);
}
