import "aos/dist/aos.css";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Features from "./component/Features";
import Services from "./component/Services";
import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import PageLoading from "./component/PageLoading";
import Portfolio from "./component/Portfolio";
import MyClientComponent from "./component/MyClientComponent";
import MyServerComponent from "./component/MyServerComponent";

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
