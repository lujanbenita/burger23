import { FC } from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import Image from "next/image";
import { Slider1, Slider2, Slider3, Slider4, Slider5 } from "../../../public/images";

export const SectionCarousel: FC = () => {
	return (
		<section className="carousel">
			<Carousel show={1} slide={1} swiping transition={0.5} className="slider" responsive>
				<Image src={Slider1} width={1920} height={1000} alt="" />
				<Image src={Slider2} width={1920} height={1000} alt="" />
				<Image src={Slider3} width={1920} height={1000} alt="" />
				<Image src={Slider4} width={1920} height={1000} alt="" />
				<Image src={Slider5} width={1920} height={1000} alt="" />
			</Carousel>
		</section>
	);
};
