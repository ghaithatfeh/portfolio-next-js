import Animation from "../assets/lotties/Animation2.json";
import LottieWrapper from "./LottieWrapper";

const About = () => {
	return (
		<section className="about" id="about">
			<div className="container">
				<div className="special-heading" data-aos="fade-up">
					About
				</div>
				<p data-aos="fade-up" data-aos-delay="300">
					Less is more work
				</p>
				<div className="about-container">
					<div className="image" data-aos="zoom-out">
						<LottieWrapper animationData={Animation} height="350px" width="350px"/>
					</div>
					<div className="text">
						<p data-aos="fade-up">
							An ambitious person with high organizational abilities, a
							passionate Full-Stack Developer with a Bachelor&rsquo;s degree in
							Computer Science and 4 years of experience in web development, I
							possess strong skills in <b>Laravel, React.js, and Next.js</b>.
						</p>
						<hr data-aos="fade-left" />
						<p data-aos="fade-up">
							I graduated from Damascus University in the field of Computer
							Science, and I gained good experience while working on college
							projects, Now I work as Full Stack Developer, I possess excellent
							skills in Laravel, Yii2, Vue.js, React.js, Node.js, Strapi, MySQL,
							Bootstrap, Git, AWS, jQuery, SASS, CSS, and HTML. I am also
							familiar with Livewire, Agile methodology, Jira, Stripe, MongoDB,
							Node.js, Express.js. Shopify, and WordPress.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
