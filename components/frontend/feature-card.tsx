import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
	title: string;
	description: string;
	Icon: LucideIcon;
	isPurpleIcon?: boolean;
}

export default function FeatureCard({
	title,
	description,
	Icon,
	isPurpleIcon = false,
}: FeatureCardProps) {
	return (
		<div className="flex flex-col blob items-start sm:items-center sm:text-center">
			<div
				className={`mb-4 ${
					isPurpleIcon ? "bg-purple-600 p-4 rounded-full" : ""
				}`}
			>
				<Icon
					className={`h-8 w-8 ${isPurpleIcon ? "text-white" : "text-gray-900"}`}
				/>
			</div>
			<h3 className="text-xl font-semibold mb-2">{title}</h3>
			<p className="text-gray-600 leading-relaxed">{description}</p>
		</div>
	);
}
