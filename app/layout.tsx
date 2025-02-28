import type React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link
					href="https://fonts.googleapis.com/css2?family=Pacifico&display=optional"
					rel="stylesheet"
				/>
			</head>
			<body className={inter.className}>
				<Toaster position="top-center" reverseOrder={false} />
				{children}
			</body>
		</html>
	);
}
