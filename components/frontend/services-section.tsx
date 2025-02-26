"use client";

import {
	Heart,
	Users,
	Users2,
	Cake,
	ChevronLeft,
	ChevronRight,
} from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import ServiceCard from "./service-card";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const services = [
	{
		title: "Honeymoon tour",
		description:
			"Dolore ullamco voluptate duis est volupt exercitation officia ad qui nostrud adipisicing non.",
		Icon: Heart,
	},
	{
		title: "Group tour",
		description:
			"Dolore ullamco voluptate duis est volupt exercitation officia ad qui nostrud adipisicing non.",
		Icon: Users,
	},
	{
		title: "Family tour",
		description:
			"Dolore ullamco voluptate duis est volupt exercitation officia ad qui nostrud adipisicing non.",
		Icon: Users2,
	},
	{
		title: "Wedding destinations",
		description:
			"Dolore ullamco voluptate duis est volupt exercitation officia ad qui nostrud adipisicing non.",
		Icon: Cake,
	},
];

export default function ServicesSection() {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
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
		<section className="py-16 px-4 md:px-6 lg:px-8 bg-purple-50">
			<div className="relative max-w-7xl mx-auto">
				<div className="relative flex justify-between items-start mb-12">
					<div className="max-w-2xl pb-16">
						<h2 className="text-purple-600 font-medium mb-4">What we offer</h2>
						<h3 className="text-3xl md:text-4xl font-bold mb-4">
							Discover all the destinations with us!
						</h3>
						<p className="text-gray-600">
							Sint est eu sit ipsum enim amet esse sunt incididunt. Occaecat
							aliquip commodo ipsum officia in mollit.
						</p>
					</div>

					<div className="absolute top-[20rem] screen-below320 screen-below438 screen-below598 md:top-[10rem] lg:top-[10rem] right-0 flex items-center gap-2">
						<Button
							variant="outline"
							size="icon"
							className="rounded-full"
							onClick={scrollPrev}
							disabled={!prevBtnEnabled}
						>
							<span className="sr-only">Previous page</span>
							<ChevronLeft className="h-4 w-4" />
						</Button>
						<Button
							variant="outline"
							size="icon"
							className="rounded-full"
							onClick={scrollNext}
							disabled={!nextBtnEnabled}
						>
							<span className="sr-only">Next page</span>
							<ChevronRight className="h-4 w-4" />
						</Button>
					</div>
				</div>

				<div className="overflow-hidden" ref={emblaRef}>
					<div className="flex">
						{services.map((service, index) => (
							<div
								key={index}
								className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_25%] pl-4 first:pl-0"
							>
								<ServiceCard
									title={service.title}
									description={service.description}
									Icon={service.Icon}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
