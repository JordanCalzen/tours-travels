"use client";
import { ChevronDown, Facebook, Globe, Twitter } from "lucide-react";
import Link from "next/link";
import { Separator } from "../ui/separator";
// import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-hook";

export default function TopNav() {
	const scrolled = useScroll(10);

	return (
		<>
			<div
				className={cn(
					"hidden md:block text-white py-3 transition-all duration-300",
					scrolled ? "bg-purple-600 backdrop-blur-sm" : "bg-transparent"
				)}
			>
				<div className="container mx-auto flex justify-between items-center text-sm">
					<div className="flex items-center gap-4">
						<div className="flex gap-2">
							<Link
								href="#"
								className="hover:text-purple-300 transition-colors"
							>
								<Facebook className="w-4 h-4" />
							</Link>
							<Link
								href="#"
								className="hover:text-purple-300 transition-colors"
							>
								<Twitter className="w-4 h-4" />
							</Link>
							<Link
								href="#"
								className="hover:text-purple-300 transition-colors"
							>
								<Globe className="w-4 h-4" />
							</Link>
							<Separator orientation="vertical" className="h-5 bg-white/40" />
						</div>
						<div className="flex gap-6">
							<Link
								href="tel:+011234567890"
								className="hover:text-purple-300 transition-colors"
							>
								+011 234 567 89
							</Link>
							<Separator orientation="vertical" className="h-5 bg-white/40" />
							<Link
								href="mailto:contact@domain.com"
								className="hover:text-purple-300 transition-colors"
							>
								contact@domain.com
							</Link>
						</div>
					</div>
					<div className="flex items-center gap-4">
						<div className="flex gap-4">
							<Link
								href="/login"
								className="hover:text-purple-300 transition-colors"
							>
								Login
							</Link>
							<Separator orientation="vertical" className="h-5 bg-white/40" />
							<Link
								href="/signup"
								className="hover:text-purple-300 transition-colors"
							>
								Sign up
							</Link>
							<Separator orientation="vertical" className="h-5 bg-white/40" />
						</div>
						<div className="flex items-center gap-4">
							<button className="flex items-center gap-1 hover:text-purple-300 transition-colors">
								English <ChevronDown className="w-4 h-4" />
							</button>
							<Separator orientation="vertical" className="h-5 bg-white/40" />
							<button className="flex items-center gap-1 hover:text-purple-300 transition-colors">
								USD <ChevronDown className="w-4 h-4" />
							</button>
						</div>
					</div>
				</div>
			</div>
			<Separator className="bg-white/40" />
		</>
	);
}
