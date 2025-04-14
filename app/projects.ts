const wasset = "images/wasset.png";
const youbu = "images/portfolio6.png";
const ancestry = "images/ancestry.png";
const crisper = "images/crisper.jpg";
const portfolio4 = "images/portfolio4.jpg";
const moneyManagement = "images/money-management.png";
const portfolio3 = "images/portfolio3.jpg";
const portfolio5 = "images/portfolio5.jpeg";
const portfolio7 = "images/portfolio7.png";
const portfolio8 = "images/portfolio8.png";
const portfolio9 = "images/portfolio9.png";
const gamehub = "images/gamehub.png";

const projects = [
	{
		image: portfolio7,
		title: "Homely Design",
		description: "Website and dashboard for company offers online landscape design services. full control of the content through the dashboard. Built with Laravel.",
		url: "https://homelydesign.ca/",
	},
	{
		image: wasset,
		title: "منصة وسيط للأعمال المستقلة",
		isArabic: true,
		description:
			"Al Waseet is an Arab platform that helps business owners to access the best professional freelance workers to contract with them to do business and projects online.",
		url: "https://wasset-demo.ghaithatfeh.online/",
	},
	{
		image: youbu,
		title: "YouBeeU",
		description: "A social media platform. The platform is available on the web, iPhone, and Android devices. My main task was to build the APIs for everything related to feeds, using the Laravel framework.",
		url: "https://youbeeu.com.au/feed/all/",
	},
	{
		image: ancestry,
		title: "Ancestry App",
		description: "A web application for mobiles and tablets built for an art event in Canada to view paintings and scan them to convert them to 3D objects. I built it from scratch using Vue.js and Onirix, then deployed to AWS.",
		url: "https://historyrevealed.ghaithatfeh.online/",
	},
	{
		image: crisper,
		title: "Crisper Restaurant",
		description: "I developed this website for restaurant in KSA, Technologies used: HTML, CSS, Bootstrap 5, JavaScript and Jquery in Frontend, PHP and mySQL in Backend.",
		url: "https://ghaithatfeh.github.io/crisper/",
	},
	{
		image: portfolio4,
		title: "جمعية الصداقة العراقية الصينية",
		isArabic: true,
		description: "IQCH It is a website with full control over the content through the dashboard, I developed the front end and participated in the development of the back end.",
		url: "https://iqch.org/",
	},
	{
		image: moneyManagement,
		title: "Money Management System",
		description: "Light accounting web application for recording financial transactions (incoming - outcoming) and giving chart reports, supports both English and Arabic languages, developed using Yii2 Framework.",
		url: "https://money-management.ghaithatfeh.online/",
	},
	{
		image: portfolio3,
		title: "Morsbach Maschinenbau GmbH",
		description: "Website for a mechanical company, full control of the content through the dashboard, displaying products and send orders, I designed and developed for the frontend and backend.",
		url: "http://mmb-demo.ghaithatfeh.online/",
	},
	{
		image: portfolio5,
		title: "Offers Dashboard",
		description: "This project involved creating a dashboard to manage and provide a RESTful API for a mobile application. It supports multiple roles and languages. developed using Laravel Framework.",
		url: "https://offers-demo.ghaithatfeh.online/",
	},
	{
		image: portfolio8,
		title: "News Articles",
		description: "Web application allows users to create news articles with styleable text and GIFs. I built it with Laravel, Node.js, and Vue.js.",
		url: "https://github.com/ghaithatfeh/news_articles/",
	},
	// {
	// 	image: portfolio10,
	// 	title: "Abba Medix",
	// 	description: "An e-commerce platform in Canada, built with Shopify, Node.js, Strapi, PostgreSQL, and hosted on AWS. I implemented numerous improvements in both the frontend and backend of this project.",
	// 	url: "https://abbamedix.com/",
	// },
	{
		image: gamehub,
		title: "GameHub",
		description: "A video game discovery web app that helps you find new and interesting games to play. With GameHub, you can search for games by platform, genre, and more. Built with ReactJS, Chakra UI, React Query, and Zustand.",
		url: "https://gamehub.ghaithatfeh.online/",
	},
	{
		image: portfolio9,
		title: "ArtGate",
		description: "CMS and RESTful API for VR meta verse art gallery. managing arts media, e-payment. Built with Laravel, Repository Service Pattern, Stripe for payment, AWS EC2 for deployment.",
		url: "https://cms.artgatevr.com/",
	},
];

export default projects;
