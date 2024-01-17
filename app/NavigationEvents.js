'use client';

import { useEffect } from 'react';

export default function NavigationEvents() {
	useEffect(() => {
		function checkDirection() {
			if (touchendX < touchstartX) alert('swiped left!');
			if (touchendX > touchstartX) alert('swiped right!');
		}

		document.addEventListener('touchstart', (e) => {
			touchstartX = e.changedTouches[0].screenX;
		});

		document.addEventListener('touchend', (e) => {
			touchendX = e.changedTouches[0].screenX;
			checkDirection();
		});
		return () => {
			document.removeEventListener('touchstart', checkDirection);
			document.removeEventListener('touchend', checkDirection);
		};
	}, []);
	return <></>;
}
