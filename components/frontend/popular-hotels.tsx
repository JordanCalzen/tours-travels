/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import HotelCard from "./hotel-card";
import { Separator } from "../ui/separator";

const hotels = [
	{
		image: "/london01.avif",
		location: "New beach, Thailand",
		name: "Kantua hotel, Thailand",
		rating: 4.8,
		reviews: 1214,
		price: 99.0,
	},
	{
		image: "/jerusalem01.jpg",
		location: "Indonesia",
		name: "Hotel paradise international",
		rating: 4.8,
		reviews: 1214,
		price: 99.0,
		discount: 50,
	},
	{
		image: "/hongkong01.avif",
		location: "Kualalampur",
		name: "Hotel kualalampur",
		rating: 4.8,
		reviews: 1214,
		price: 99.0,
	},
	{
		image: "/paris01.avif",
		location: "Mariana island",
		name: "Hotel deluxe",
		rating: 4.8,
		reviews: 1214,
		price: 99.0,
		discount: 50,
	},
];

export default function PopularHotels() {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		align: "start",
		loop: true,
		skipSnaps: false,
		dragFree: true,
	});

	const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
	const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

	const scrollPrev = useCallback(
		() => emblaApi && emblaApi.scrollPrev(),
		[emblaApi]
	);
	const scrollNext = useCallback(
		() => emblaApi && emblaApi.scrollNext(),
		[emblaApi]
	);

	const onSelect = useCallback(() => {
		if (!emblaApi) return;
		setPrevBtnEnabled(emblaApi.canScrollPrev());
		setNextBtnEnabled(emblaApi.canScrollNext());
	}, [emblaApi]);

	useEffect(() => {
		if (!emblaApi) return;
		onSelect();
		emblaApi.on("select", onSelect);
	}, [emblaApi, onSelect]);

	return (
		<section className="pt-16 pb-4 px-4 md:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<div className=" text-center  mb-5">
					<h1 className="text-3xl font-bold text-center mb-4">
						Popular Hotels
					</h1>
					<div className="flex items-center justify-center">
						<Separator className="w-[12rem] block text-center bg-purple-600" />
					</div>
				</div>

				<div className="relative">
					{/* Carousel Container */}
					<div className="overflow-hidden" ref={emblaRef}>
						<div className="flex gap-6">
							{hotels.map((hotel, index) => (
								<div
									key={index}
									className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33%] xl:flex-[0_0_25%]"
								>
									<HotelCard {...hotel} />
								</div>
							))}
						</div>
					</div>

					{/* Navigation Buttons */}
					<Button
						variant="secondary"
						size="icon"
						className="absolute -left-[20px] top-1/2 -translate-y-1/2 rounded-full bg-white shadow-lg hover:bg-gray-100"
						onClick={scrollPrev}
					>
						<ChevronLeft className="h-6 w-6" />
					</Button>
					<Button
						variant="secondary"
						size="icon"
						className="absolute -right-[20px] top-1/2 -translate-y-1/2 rounded-full bg-white shadow-lg hover:bg-gray-100"
						onClick={scrollNext}
					>
						<ChevronRight className="h-6 w-6" />
					</Button>
				</div>
			</div>
		</section>
	);
}
