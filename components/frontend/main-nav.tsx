"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, UserCircle2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
	Sheet,
	SheetContent,
	SheetTrigger,
	SheetClose,
} from "@/components/ui/sheet";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { useScroll } from "@/hooks/drop-use-hook";

// Sample data for dropdown menus
const categories = [
	{
		title: "Tours",
		href: "/categories/tours",
		description: "Explore our wide range of guided tours around the world.",
	},
	{
		title: "Destinations",
		href: "/categories/destinations",
		description: "Discover popular and exotic destinations for your next trip.",
	},
	{
		title: "Activities",
		href: "/categories/activities",
		description: "Find exciting activities and adventures for your vacation.",
	},
	{
		title: "Accommodations",
		href: "/categories/accommodations",
		description: "Browse through our selection of hotels and resorts.",
	},
];

const pages = [
	{
		title: "About Us",
		href: "/about",
		description: "Learn more about our company and mission.",
	},
	{
		title: "Services",
		href: "/services",
		description:
			"Explore the services we offer to make your travel experience better.",
	},
	{
		title: "FAQ",
		href: "/faq",
		description: "Find answers to frequently asked questions.",
	},
	{
		title: "Terms & Conditions",
		href: "/terms",
		description: "Read our terms and conditions for using our services.",
	},
];

const dashboardItems = [
	{
		title: "My Bookings",
		href: "/dashboard/bookings",
		description: "View and manage your current and past bookings.",
	},
	{
		title: "Profile",
		href: "/dashboard/profile",
		description: "Update your personal information and preferences.",
	},
	{
		title: "Wishlist",
		href: "/dashboard/wishlist",
		description: "See the destinations and tours you've saved for later.",
	},
	{
		title: "Settings",
		href: "/dashboard/settings",
		description: "Manage your account settings and notifications.",
	},
];

const newsItems = [
	{
		title: "Travel Updates",
		href: "/news/updates",
		description: "Stay informed with the latest travel news and updates.",
	},
	{
		title: "Blog",
		href: "/news/blog",
		description: "Read our travel blog for inspiration and tips.",
	},
	{
		title: "Press Releases",
		href: "/news/press",
		description: "Check out our recent press releases and media coverage.",
	},
	{
		title: "Events",
		href: "/news/events",
		description: "Find out about upcoming travel events and exhibitions.",
	},
];

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";

export default function MainNav() {
	const scrolled = useScroll(10);
	const [isOpen, setIsOpen] = React.useState(false);

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

				{/* Desktop Menu with shadcn/ui NavigationMenu */}
				<div className="hidden md:block">
					<NavigationMenu className="text-white">
						<NavigationMenuList className="flex items-center gap-6">
							<NavigationMenuItem>
								<Link
									href="/"
									className="hover:text-purple-300 transition-colors"
								>
									Home
								</Link>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<NavigationMenuTrigger className="hover:text-purple-300 transition-colors bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
									<span className="flex items-center gap-1">Categories</span>
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
										{categories.map((item) => (
											<ListItem
												key={item.title}
												title={item.title}
												href={item.href}
											>
												{item.description}
											</ListItem>
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<NavigationMenuTrigger className="hover:text-purple-300 transition-colors bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
									<span className="flex items-center gap-1">Pages</span>
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
										{pages.map((item) => (
											<ListItem
												key={item.title}
												title={item.title}
												href={item.href}
											>
												{item.description}
											</ListItem>
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<NavigationMenuTrigger className="hover:text-purple-300 transition-colors bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
									<span className="flex items-center gap-1">Dashboard</span>
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
										{dashboardItems.map((item) => (
											<ListItem
												key={item.title}
												title={item.title}
												href={item.href}
											>
												{item.description}
											</ListItem>
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<NavigationMenuTrigger className="hover:text-purple-300 transition-colors bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
									<span className="flex items-center gap-1">News</span>
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
										{newsItems.map((item) => (
											<ListItem
												key={item.title}
												title={item.title}
												href={item.href}
											>
												{item.description}
											</ListItem>
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<Link
									href="/contact"
									className="hover:text-purple-300 transition-colors"
								>
									Contact
								</Link>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</div>

				<div className="flex items-center gap-4">
					<Button
						variant="ghost"
						size="icon"
						className="text-white md:hidden"
						onClick={() => setIsOpen(true)}
					>
						<UserCircle2 className="w-5 h-5" />
						<span className="sr-only">User menu</span>
					</Button>
					<Button
						className={cn(
							"bg-[#8C52FF] hover:bg-[#7B3FFF] hidden md:flex transition-colors",
							scrolled && "bg-purple-600 hover:bg-purple-700"
						)}
					>
						Become a partner
					</Button>
					<Button
						variant="ghost"
						className="hidden md:inline-flex text-white hover:text-purple-300 transition-colors"
					>
						Login
					</Button>
					<Button
						variant="ghost"
						className="hidden md:inline-flex text-white hover:text-purple-300 transition-colors"
					>
						Sign Up
					</Button>

					{/* Mobile Menu */}
					<Sheet open={isOpen} onOpenChange={setIsOpen}>
						<SheetTrigger asChild>
							<Button
								variant="ghost"
								size="icon"
								className="md:hidden text-white"
							>
								<Menu className="w-6 h-6" />
								<span className="sr-only">Toggle menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side="right" className="w-[85%] sm:w-[350px] p-0">
							<div
								className={cn("flex flex-col h-full bg-purple-600 text-white")}
							>
								<div className="flex items-center justify-between p-4 border-b border-white/10">
									<Link
										href="/"
										className="flex items-center gap-2"
										onClick={() => setIsOpen(false)}
									>
										<Image
											src="/logo_black.png"
											alt="Travel background"
											width={150}
											height={150}
											className="object-cover w-32"
										/>
									</Link>
									<SheetClose asChild>
										<Button variant="ghost" size="icon" className="text-white">
											<span className="sr-only">Close menu</span>
										</Button>
									</SheetClose>
								</div>

								<div className="flex-1 overflow-auto py-2">
									<div className="px-4 py-2">
										<Link
											href="/"
											className="block py-3 text-lg font-medium hover:text-purple-300 transition-colors"
											onClick={() => setIsOpen(false)}
										>
											Home
										</Link>

										<Accordion type="single" collapsible className="w-full">
											<AccordionItem
												value="categories"
												className="border-b border-white/10"
											>
												<AccordionTrigger className="py-3 text-lg font-medium hover:text-purple-300 transition-colors">
													<span className="flex items-center">Categories</span>
												</AccordionTrigger>
												<AccordionContent>
													<div className="pl-4 space-y-3">
														{categories.map((item) => (
															<Link
																key={item.title}
																href={item.href}
																className="block py-2 hover:text-purple-300 transition-colors"
																onClick={() => setIsOpen(false)}
															>
																{item.title}
															</Link>
														))}
													</div>
												</AccordionContent>
											</AccordionItem>

											<AccordionItem
												value="pages"
												className="border-b border-white/10"
											>
												<AccordionTrigger className="py-3 text-lg font-medium hover:text-purple-300 transition-colors">
													<span className="flex items-center">Pages</span>
												</AccordionTrigger>
												<AccordionContent>
													<div className="pl-4 space-y-3">
														{pages.map((item) => (
															<Link
																key={item.title}
																href={item.href}
																className="block py-2 hover:text-purple-300 transition-colors"
																onClick={() => setIsOpen(false)}
															>
																{item.title}
															</Link>
														))}
													</div>
												</AccordionContent>
											</AccordionItem>

											<AccordionItem
												value="dashboard"
												className="border-b border-white/10"
											>
												<AccordionTrigger className="py-3 text-lg font-medium hover:text-purple-300 transition-colors">
													<span className="flex items-center">Dashboard</span>
												</AccordionTrigger>
												<AccordionContent>
													<div className="pl-4 space-y-3">
														{dashboardItems.map((item) => (
															<Link
																key={item.title}
																href={item.href}
																className="block py-2 hover:text-purple-300 transition-colors"
																onClick={() => setIsOpen(false)}
															>
																{item.title}
															</Link>
														))}
													</div>
												</AccordionContent>
											</AccordionItem>

											<AccordionItem
												value="news"
												className="border-b border-white/10"
											>
												<AccordionTrigger className="py-3 text-lg font-medium hover:text-purple-300 transition-colors">
													<span className="flex items-center">News</span>
												</AccordionTrigger>
												<AccordionContent>
													<div className="pl-4 space-y-3">
														{newsItems.map((item) => (
															<Link
																key={item.title}
																href={item.href}
																className="block py-2 hover:text-purple-300 transition-colors"
																onClick={() => setIsOpen(false)}
															>
																{item.title}
															</Link>
														))}
													</div>
												</AccordionContent>
											</AccordionItem>
										</Accordion>

										<Link
											href="/contact"
											className="block py-3 text-lg font-medium hover:text-purple-300 transition-colors border-b border-white/10"
											onClick={() => setIsOpen(false)}
										>
											Contact
										</Link>
										<div className="flex flex-col gap-2 mb-4">
											<Button
												variant="ghost"
												className="w-full justify-center text-white hover:text-purple-300 transition-colors"
												onClick={() => setIsOpen(false)}
											>
												Login
											</Button>
											<Button
												variant="ghost"
												className="w-full justify-center text-white hover:text-purple-300 transition-colors"
												onClick={() => setIsOpen(false)}
											>
												Sign Up
											</Button>
										</div>
									</div>
								</div>

								<div className="p-4 mt-auto border-t border-white/10">
									<Button
										className="w-full bg-[#8C52FF] hover:bg-[#7B3FFF] transition-colors"
										onClick={() => setIsOpen(false)}
									>
										Become a partner
									</Button>
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</nav>
	);
}
