import { Map, Compass, Headphones } from "lucide-react";
import FeatureCard from "./feature-card";

const features = [
	{
		title: "550+ destinations",
		description:
			"Nostrud aliqua ipsum dolore velit labore nulla fugiat nulla irure nostrud.",
		Icon: Map,
		isPurpleIcon: false,
	},
	{
		title: "Best price guarantee",
		description:
			"Nostrud aliqua ipsum dolore velit labore nulla fugiat nulla irure nostrud.",
		Icon: Compass,
		isPurpleIcon: true,
	},
	{
		title: "Top quality customer support",
		description:
			"Nostrud aliqua ipsum dolore velit labore nulla fugiat nulla irure nostrud.",
		Icon: Headphones,
		isPurpleIcon: true,
	},
];

export default function FeaturesSection() {
	return (
		<section className="py-16 px-4 md:px-6 lg:px-8 bg-[#F3F6FD]">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
					{features.map((feature, index) => (
						<FeatureCard
							key={index}
							title={feature.title}
							description={feature.description}
							Icon={feature.Icon}
							isPurpleIcon={feature.isPurpleIcon}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
