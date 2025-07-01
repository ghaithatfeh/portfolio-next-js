import Image from "next/image";
import personBlue from "../../public/images/person-blue-shirt.webp";

const Contact = () => {
	return (
		<section className="contact" id="contact">
			<div className="container">
				<div className="special-heading" data-aos="fade-up">
					Contact
				</div>
				<p data-aos="fade-up" data-aos-delay="300">
					We are born to create
				</p>
				<div className="contact-container" data-aos="zoom-in">
					<div className="main">
						<Image src={personBlue} alt="." />
						<div>
							<h1>Ghaith Atfeh</h1>
							<p>Full Stack Developer</p>
						</div>
						<hr />
						<a href="https://www.facebook.com/ghaithatfeh0" target="blank">
							<p>Facebook</p>
							<p>ghaithatfeh0</p>
						</a>
						<a href="https://www.linkedin.com/in/ghaithatfeh/" target="blank">
							<p>Linkedin</p>
							<p>ghaithatfeh</p>
						</a>
						<a href="mailto:a89ghaith@gmail.com">
							<p>Gmail</p>
							<p>a89ghaith</p>
						</a>
						<a href="https://github.com/ghaithatfeh" target="_blank">
							<p>GitHub</p>
							<p>ghaithatfeh</p>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
