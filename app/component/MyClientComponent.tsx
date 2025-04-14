"use client";
import { useEffect, useState } from "react";

export default function DynamicClient() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return <div>🌟 I only show after hydration</div>;
}