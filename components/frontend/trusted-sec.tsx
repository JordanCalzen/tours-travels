import Image from "next/image";
import { Play } from "lucide-react";

export default function TrustedPartner() {
	return (
		<div className="container mx-auto px-4 py-12">
			<div className="grid lg:grid-cols-2 gap-8 items-center">
				{/* Left column with image */}
				<div className="relative">
					<div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
						<Image
							src="/about-three.png"
							alt="Scenic landscape with mountain and lake"
							fill
							className="object-cover"
							priority
						/>
						{/* Play button overlay */}
						<div className="absolute inset-0 flex items-center justify-center">
							<button className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
								<Play className="w-8 h-8 text-purple-600 ml-1" />
							</button>
						</div>
						{/* Verified badge */}
						<div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 flex items-center gap-2">
							<div className="bg-purple-600 text-white p-2 rounded-full">
								<svg
									className="w-4 h-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M5 13l4 4L19 7"
									/>
								</svg>
							</div>
							<div>
								<div className="text-2xl font-bold">100%</div>
								<div className="text-gray-600 text-sm">Verified</div>
							</div>
						</div>
					</div>
				</div>

				{/* Right column with content */}
				<div className="space-y-6">
					<div className="text-purple-600 font-medium">Trusted partner</div>
					<h2 className="text-3xl md:text-4xl font-bold">
						With our experience we will serve you the best
					</h2>
					<div className="space-y-4 text-gray-600">
						<p>
							Sint est eu sit ipsum enim amet esse sunt incididunt. Occaecat
							aliquip commodo ipsum officia in Lorem commodo aliquip dolore.
							Nisi domip excepteur commodo ea nostrud mollit.
						</p>
						<p>
							Sint est eu sit ipsum enim amet esse sunt incididunt. Occaecat
							aliquip commodo ipsum officia in commodo dolore.
						</p>
						<p>
							Aliqua aute aliqua reprehenderit sunt minim ullamco duis. Lorem
							pariatur cillum labore reprehenderit ex velit ex enim deserunt ea
							proiden t et dolore do. In pariatur ea sint elit magna.
						</p>
					</div>

					{/* Stats */}
					<div className="grid grid-cols-3 gap-4 pt-6">
						<div className="text-center">
							<div className="text-3xl md:text-4xl font-bold">12K</div>
							<div className="text-gray-600 text-sm mt-1">Happy Clients</div>
						</div>
						<div className="text-center">
							<div className="text-3xl md:text-4xl font-bold">750+</div>
							<div className="text-gray-600 text-sm mt-1">Projects Done</div>
						</div>
						<div className="text-center">
							<div className="text-3xl md:text-4xl font-bold">100%</div>
							<div className="text-gray-600 text-sm mt-1">Success Rate</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
