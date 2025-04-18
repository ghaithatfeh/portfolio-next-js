"use client";
import React, { useEffect, useState } from "react";
import Loading from "../loading";
import AOS from "aos";
import $ from "jquery";

declare global {
	interface Window {
		$: typeof $;
		jQuery: typeof $;
	}
}

const PageLoading = () => {
	const [isLoading, setIsLoading] = useState(true);

	const handleLoad = () => {
		setIsLoading(false);
		document.documentElement.style.overflowY = "auto";

		// initial AOS library
		AOS.init({
			delay: 40,
			duration: 1200,
			easing: "ease-in-out",
		});

		// Make jQuery globally available
		window.$ = $;
		window.jQuery = $;
	};

	useEffect(() => {
		// Case 1: Document already loaded
		if (document.readyState === "complete") {
			handleLoad();
		} else {
			// Case 2: Document didn't finish loading
			window.addEventListener("load", handleLoad);
		}
		// Case 3: Full loading failed, so forcing loader off
		const timeout = setTimeout(() => {
			console.warn("Fallback timeout hit, forcing loader off.");
			handleLoad();
		}, 1000);

		return () => {
			clearTimeout(timeout); // cleanup timeout
			window.removeEventListener("load", handleLoad); // cleanup event
		};
	}, []);

	if (isLoading) return <Loading />;
};

export default PageLoading;
