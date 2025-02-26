import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
	title: string;
	description: string;
	Icon: LucideIcon;
}

export default function ServiceCard({
	title,
	description,
	Icon,
}: ServiceCardProps) {
	return (
		<div className="flex flex-col items-center p-6 text-center bg-white rounded-lg shadow-sm h-full">
			<div className="relative">
				<div className="w-16 h-16 bg-purple-500 rounded-[30%] rotate-12" />
				<div className="absolute inset-0 flex items-center justify-center">
					<Icon className="w-8 h-8 text-white" />
				</div>
			</div>
			<h3 className="mt-6 text-xl font-semibold text-gray-900">{title}</h3>
			<p className="mt-2 text-gray-600">{description}</p>
		</div>
	);
}
