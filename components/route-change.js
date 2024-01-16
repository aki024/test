'use client';

import { usePathname } from 'next/navigation';
import { Router, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export function RouteChangeListener() {
	const pathname = usePathname();
	const [changes, setChanges] = useState(0);
	const router = useRouter();
	console.log(router.events);
	const alternator = React.useRef(0);
	// Scroll slightly and alternate between pages to always invalidate image snapshot.
	// See {redacted} for explanation on this effect and the previous
	React.useEffect(() => {
		const slightScroll = () => {
			console.log('jtzm');
		};
		alert('test');
		router.events && router.events.on('routeChangeComplete', slightScroll);

		return () => router.events && router?.events.off('routeChangeComplete', slightScroll);
	}, []);

	useEffect(() => {
		console.log(`Route changed to: ${pathname}`);
		setChanges((prev) => prev + 1);
		window.addEventListener('pageshow', function (evt) {
			console.log('pageShowEVent');
		});
	}, [pathname]);

	// useEffect(() => {
	// 	const handleRouteChange = (url) => {
	// 		console.log('Navigating to:', url);
	// 		// Additional logic for route change
	// 	};

	// 	Router.events.on('routeChangeStart', handleRouteChange);

	// 	return () => {
	// 		Router.events.off('routeChangeStart', handleRouteChange);
	// 	};
	// }, []);

	return <></>;
}
