"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

import projects from "../projects";
import ProjectCard from "./ProjectCard";

export default function Portfolio() {
	return (
		<section className="portfolio" id="portfolio">
			<div className="container">
				<h2 className="special-heading" data-aos="fade-up">
					Portfolio
				</h2>
				<p
					data-aos="fade-up"
					data-aos-delay="300"
					style={{ marginBottom: "90px" }}
				>
					If you do it right, it will last forever.
				</p>

				<div data-aos="zoom-in">
					<Swiper
						slidesPerView={1}
						spaceBetween={15}
						initialSlide={1}
						loop
						pagination
						modules={[Autoplay, Pagination]}
						autoplay={{
							delay: 2000,
							pauseOnMouseEnter: true,
						}}
						breakpoints={{
							776: {
								slidesPerView: 2,
							},
							992: {
								slidesPerView: 3,
							},
						}}
					>
						{projects.map((project) => (
							<SwiperSlide key={project.title}>
								<ProjectCard project={project} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
}
