import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import { SquareProps } from "./square.types";

export const SquareDual: FC<SquareProps> = ({ image, title, href, titleHref }) => {
	return (
		<div className="square-dual__item">
			<div className="square-dual__img">
				<Image src={image} width={960} height={640} alt={`${title}`} />
			</div>
			<div className="square-dual__content">
				<h2> {title}</h2>
				<button>
					<a href={href}>{titleHref}</a>
				</button>
			</div>
		</div>
	);
};
