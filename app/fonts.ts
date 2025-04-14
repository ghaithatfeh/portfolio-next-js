import { Work_Sans, Almarai } from "next/font/google";

export const workSans = Work_Sans({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-work-sans",
});

export const almarai = Almarai({
	subsets: ["arabic"],
	weight: ["300", "400", "700", "800"],
	variable: "--font-almarai",
});
