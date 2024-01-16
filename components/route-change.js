'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function NavigationEvents() {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		const url = `${pathname}?${searchParams}`;
		const handlePopState = (event) => {
			console.log('Back navigation detected:', event.state);
			alert('Back navigation detected!');
			event.stopPropagation();
			// Additional logic if needed
		};

		window.addEventListener('popstate', handlePopState);

		return () => {
			window.removeEventListener('popstate', handlePopState);
		};
		// You can now use the current URL
		// ...
	}, [pathname, searchParams]);

	return null;
}
