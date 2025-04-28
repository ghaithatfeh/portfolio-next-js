import "aos/dist/aos.css";
import Hero from "./component/Hero";
import Features from "./component/Features";
import Services from "./component/Services";
import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
// import Header from "./component/Header";
// import PageLoading from "./component/PageLoading";
// import Portfolio from "./component/Portfolio";
import dynamic from "next/dynamic";

const PageLoading = dynamic(() => import("./component/PageLoading"), { ssr: false });
const Header = dynamic(() => import("./component/Header"), { ssr: false });
const Portfolio = dynamic(() => import("./component/Portfolio"), { ssr: false });

export default function Home() {
	return (
		<>
			{/* <MyServerComponent />
			<MyClientComponent /> */}
			<PageLoading />
			<Header />
			<Hero />
			<Features />
			<Services />
			<Portfolio />
			<About />
			<Contact />
			<Footer />
		</>
	);
}
