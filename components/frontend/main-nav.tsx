"use client";
import { ChevronDown, Search } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
// import { useScroll } from "@/hooks/use-scroll"
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-hook";

export default function MainNav() {
	const scrolled = useScroll(10);

	return (
		<nav
			className={cn(
				"text-white transition-all duration-300",
				scrolled ? "bg-purple-600 backdrop-blur-sm" : "bg-transparent"
			)}
		>
			<div className="container mx-auto flex items-center justify-between py-4 px-4">
				<Link href="/" className="flex items-center gap-2">
					<Image
						src="/logo_black.png"
						alt="Travel background"
						width={200}
						height={200}
						className="object-cover w-40"
					/>
				</Link>

				{/* Desktop Menu */}
				<div className="hidden md:flex items-center gap-6">
					<Link href="/" className="hover:text-purple-300 transition-colors">
						Home
					</Link>
					<div className="relative group">
						<button className="flex items-center gap-1 hover:text-purple-300 transition-colors">
							Categories <ChevronDown className="w-4 h-4" />
						</button>
					</div>
					<div className="relative group">
						<button className="flex items-center gap-1 hover:text-purple-300 transition-colors">
							Pages <ChevronDown className="w-4 h-4" />
						</button>
					</div>
					<div className="relative group">
						<button className="flex items-center gap-1 hover:text-purple-300 transition-colors">
							Dashboard <ChevronDown className="w-4 h-4" />
						</button>
					</div>
					<div className="relative group">
						<button className="flex items-center gap-1 hover:text-purple-300 transition-colors">
							News <ChevronDown className="w-4 h-4" />
						</button>
					</div>
					<Link
						href="/contact"
						className="hover:text-purple-300 transition-colors"
					>
						Contact
					</Link>
				</div>

				<div className="flex items-center gap-4">
					<Button variant="ghost" size="icon" className="text-white">
						<Search className="w-5 h-5" />
					</Button>
					<Button
						className={cn(
							"bg-[#8C52FF] hover:bg-[#7B3FFF] hidden md:flex transition-colors",
							scrolled && "bg-purple-600 hover:bg-purple-700"
						)}
					>
						Become a partner
					</Button>
				</div>
			</div>
		</nav>
	);
}
