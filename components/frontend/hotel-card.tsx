import { MapPin } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface HotelCardProps {
	image: string;
	location: string;
	name: string;
	rating: number;
	reviews: number;
	price: number;
	discount?: number;
}

export default function HotelCard({
	image,
	location,
	name,
	rating,
	reviews,
	price,
	discount,
}: HotelCardProps) {
	return (
		<div className="relative bg-white rounded-lg overflow-hidden shadow-md">
			{/* Image Container */}
			<div className="relative h-48 md:h-64 overflow-hidden">
				<Image
					src={image || "/placeholder.svg"}
					alt={name}
					fill
					className="object-cover"
				/>
				{/* Location Badge */}
				<div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full flex items-center gap-1">
					<MapPin className="w-4 h-4" />
					<span className="text-sm">{location}</span>
				</div>
				{/* Discount Badge */}
				{discount && (
					<Badge className="absolute top-4 right-4 bg-purple-600">
						{discount}% OFF
					</Badge>
				)}
			</div>

			{/* Content */}
			<div className="p-4">
				<h3 className="text-lg font-semibold mb-2">{name}</h3>

				{/* Rating */}
				<div className="flex items-center gap-2 mb-3">
					<span className="text-purple-600 font-medium">
						{rating}/5 Excellent
					</span>
					<span className="text-gray-500 text-sm">({reviews} reviewes)</span>
				</div>

				{/* Price */}
				<div className="flex items-baseline gap-1">
					<span className="text-2xl font-bold">${price.toFixed(2)}</span>
					<span className="text-gray-500 text-sm">Price starts from</span>
				</div>
			</div>
		</div>
	);
}
