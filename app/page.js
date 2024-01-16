'use client';

import Link from 'next/link';
import styles from './page.module.css';
import ImageSlideshow from '@/components/images/image-slideshow';
import { useEffect, useRef } from 'react';

export default function Home() {
	useEffect(() => {
		// Set up a global event listener
		const handleEvent = () => {
			document.body.style.opacity = 0;
		};
		window.addEventListener('pagehide', handleEvent);
		console.log('jtzm');
		return () => {
			window.removeEventListener('pagehide', handleEvent);
		};
	}, []);

	// const alternator = useRef(0);
	// // Scroll slightly and alternate between pages to always invalidate image snapshot.
	// // See {redacted} for explanation on this effect and the previous
	// useEffect(() => {
	// 	const slightScroll = () => {
	// 		if (IOS()) {
	// 			window.scrollTo({ left: 0, top: alternator.current });
	// 			alternator.current = Number(!alternator.current);
	// 		}
	// 	};
	// 	console.log('jtzm');
	// 	router.events.on('routeChangeComplete', slightScroll);

	// 	return () => router.events.off('routeChangeComplete', slightScroll);
	// }, []);

	return (
		<>
			<header className={styles.header}>
				<div className={styles.slideshow}>
					<ImageSlideshow />
				</div>
				<div>
					<div className={styles.hero}>
						<h1>NextLevel Food for NextLevel Foodies</h1>
						<p>Taste & share food from all over the world.</p>
					</div>
					<div className={styles.cta}>
						<Link href='/community'>Join the community</Link>
						<Link href='/meals'>Explore Meals</Link>
					</div>
				</div>
			</header>
			<main>
				<section className={styles.section}>
					<h2>How it works</h2>
					<p>NextLevel Food is a platform for foodies to share their favorite recipes with the world. It&apos;s a place to discover new dishes, and to connect with other food lovers.</p>
					<p>NextLevel Food is a place to discover new dishes, and to connect with other food lovers.</p>
				</section>

				<section className={styles.section}>
					<h2>Why NextLevel Food?</h2>
					<p>NextLevel Food is a platform for foodies to share their favorite recipes with the world. It&apos;s a place to discover new dishes, and to connect with other food lovers.</p>
					<p>NextLevel Food is a place to discover new dishes, and to connect with other food lovers.</p>
				</section>
			</main>
		</>
	);
}
