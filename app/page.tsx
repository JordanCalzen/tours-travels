import Hero from "@/components/frontend/hrero";
import MainNav from "@/components/frontend/main-nav";
import TopNav from "@/components/frontend/top-nav";
import TrustedPartner from "@/components/frontend/trusted-sec";
import Image from "next/image";
import React from "react";

export default function Home() {
	return (
		<>
			<div className="min-h-screen flex flex-col">
				<section>
					<div className="absolute inset-0">
						<Image
							src="/banner-three.png"
							alt="Travel background"
							fill
							className="object-cover"
							priority
						/>
						{/* <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-purple-500/50"></div> */}
					</div>
					<div className="fixed w-full top-0 z-50">
						<TopNav />
						<MainNav />
					</div>

					<Hero />
				</section>
			</div>
			<TrustedPartner />
		</>
	);
}
