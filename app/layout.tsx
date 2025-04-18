import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "./normalize.css";
import type { Metadata } from "next";
import { almarai, workSans } from "./fonts";

export const metadata: Metadata = {
	title: "Ghaith | Profile",
	description: "Personal portfolio",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${workSans.variable} ${almarai.variable}`}>
				<main className="p-6">{children}</main>
			</body>
		</html>
	);
}
