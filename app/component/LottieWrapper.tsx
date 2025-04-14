"use client";
import Lottie from "lottie-react";

interface Props {
	animationData: any;
	height: string;
	width: string;
}

const LottieWrapper = ({ animationData, height, width }: Props) => {
	return (
		<Lottie
			animationData={animationData}
			rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
			loop
			autoplay
			style={{
				height,
				width,
			}}
		/>
	);
};

export default LottieWrapper;
