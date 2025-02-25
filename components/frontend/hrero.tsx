import React from "react";

export default function Hero() {
	return (
		<main className="flex-1 relative mt-20">
			<div className="relative container mx-auto px-4 pt-20 md:pt-32">
				<div className="max-w-4xl mx-auto text-center text-white space-y-6">
					<h2 className="text-2xl md:text-3xl font-light">
						Welcome to Andtour
					</h2>
					<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
						Experience the world together
					</h1>
					<p className="text-lg md:text-xl text-gray-200">
						Find awesome flights, hotel, tour, car and packages
					</p>
				</div>
			</div>
		</main>
	);
}
