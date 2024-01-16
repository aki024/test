'use client';

export default function MealsErrorPage({ error }) {
	console.log(error);
	return (
		<main className='error'>
			<h1>Something went wrong!</h1>
			<p>{error.msg}</p>
		</main>
	);
}
