import Image from "next/image";
import { Star } from "lucide-react";

interface Destination {
	id: number;
	name: string;
	price: number;
	days: number;
	nights: number;
	image: string;
	rating?: number;
	description?: string;
}

const destinations: Destination[] = [
	{
		id: 1,
		name: "London",
		price: 13500,
		days: 7,
		nights: 6,
		image: "/jerusalem01.jpg",
		rating: 5,
		description:
			"Cupidatat consectetur ea cillum laborum labore veniam proident consectetur excepteur amet pariatur et laboris sint laborum.",
	},
	{
		id: 2,
		name: "Gangtok",
		price: 3500,
		days: 7,
		nights: 6,
		image: "/hongkong01.avif",
		rating: 5,
		description:
			"Cupidatat consectetur ea cillum laborum labore veniam proident consectetur excepteur amet pariatur et laboris sint laborum.",
	},
	{
		id: 3,
		name: "Phuket",
		price: 2500,
		days: 7,
		nights: 6,
		image: "/london01.avif",
		rating: 5,
		description:
			"Cupidatat consectetur ea cillum laborum labore veniam proident consectetur excepteur amet pariatur et laboris sint laborum.",
	},
];

export default function TravelGrid() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{destinations.map((destination) => (
				<div
					key={destination.id}
					className="group h-[400px] [perspective:1000px]"
				>
					<div className="relative h-full w-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
						{/* Front of the card */}
						<div className="absolute inset-0">
							<div className="relative h-full w-full rounded-2xl overflow-hidden">
								<Image
									src={destination.image || "/placeholder.svg"}
									alt={destination.name}
									fill
									className="object-cover"
								/>
								<div className="absolute inset-0 bg-black/25 p-6 flex flex-col justify-end">
									<h2 className="text-2xl font-bold text-white">
										{destination.name} | ${destination.price}
									</h2>
									<p className="text-white">
										{destination.days} days {destination.nights} nights
									</p>
								</div>
							</div>
						</div>

						{/* Back of the card */}
						<div className="absolute inset-0 h-full w-full rounded-2xl bg-purple-600 px-8 py-6 text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
							<div className="flex flex-col h-full">
								<div className="flex items-center gap-1 mb-2">
									{[...Array(5)].map((_, i) => (
										<Star key={i} className="w-5 h-5 fill-white" />
									))}
									<span className="ml-2">5 Out of 5</span>
								</div>

								<h3 className="text-2xl font-bold mb-2">
									{destination.name} | ${destination.price}
								</h3>

								<p className="text-lg mb-2">
									{destination.days} days {destination.nights} nights
								</p>

								<p className="text-sm flex-grow">{destination.description}</p>

								<button className="mt-4 text-white border-b-2 border-white w-fit">
									Tour details
								</button>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
