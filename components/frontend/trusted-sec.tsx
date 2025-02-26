import { Separator } from "../ui/separator";
import VideoPreview from "./video-preview";
import { Card } from "../ui/card";

export default function TrustedPartner() {
	return (
		<div className="container mx-auto px-4 py-12">
			<div className="grid lg:grid-cols-2 gap-8 items-center">
				{/* Left column with image */}
				<VideoPreview />

				{/* Right column with content */}
				<div className="space-y-6">
					<div className="flex items-center justify-start gap-4">
						<div className="text-xl text-purple-600 font-medium">
							Trusted partner
						</div>
						<Separator className="w-14  bg-purple-600" />
					</div>
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
						<Card className="text-center">
							<div className="text-3xl md:text-4xl font-bold">12K</div>
							<div className="text-purple-600 text-sm mt-1">Happy Clients</div>
						</Card>
						<Card className="text-center">
							<div className="text-3xl md:text-4xl font-bold">750+</div>
							<div className="text-purple-600 text-sm mt-1">Projects Done</div>
						</Card>
						<Card className="text-center p-2">
							<div className="text-3xl md:text-4xl font-bold">100%</div>
							<div className="text-purple-600 text-sm mt-1">Success Rate</div>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
}
