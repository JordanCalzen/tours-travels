/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import { Play, Verified } from "lucide-react";

interface VideoPreviewProps {
	imageUrl?: string;
	verified?: boolean;
}

export default function VideoPreview({
	imageUrl = "/about-three.png",
	verified = true,
}: VideoPreviewProps) {
	return (
		<div className="relative w-full max-w-2xl mx-auto">
			<div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
				<Image
					src={imageUrl || "/placeholder.svg"}
					alt="Scenic landscape with mountain and lake"
					fill
					className="object-contain"
					priority
				/>

				{/* Play Button Overlay */}
				<div className="absolute inset-0 flex items-center justify-center">
					<div className="rounded-full bg-white/30 p-4 backdrop-blur-sm transition-transform hover:scale-110">
						<Play className="h-8 w-8 text-white" fill="white" />
					</div>
				</div>

				{/* Verification Badge */}
				{verified && (
					<div className="absolute w-[40vw] h-[40vh] max-w-[10rem] max-h-[10rem] bottom-4 right-1 flex  flex-col items-center justify-center  gap-2 border-t-l border-b-r bg-white/20 px-4 py-2 backdrop-blur-sm shadow-md">
						<Verified
							className="h-[3rem] w-[3rem] text-purple-600"
							fill="white"
						/>
						<div className="flex flex-col">
							<span className="text-2xl font-bold leading-none">100%</span>
							<span className="text-xl text-gray-600">Verified</span>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
