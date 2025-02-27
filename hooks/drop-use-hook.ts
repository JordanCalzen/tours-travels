"use client";

import { useState, useEffect } from "react";

export const useScroll = (threshold: number) => {
	const [downScrolled, setDownScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			window.pageYOffset > threshold
				? setDownScrolled(true)
				: setDownScrolled(false);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [threshold]);

	return downScrolled;
};
