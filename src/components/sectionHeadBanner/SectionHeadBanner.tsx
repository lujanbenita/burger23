import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { Nav } from "../nav/Nav";

type PropsType = {
	title: string;
	image: StaticImageData;
};

export const SectionHeadBanner: FC<PropsType> = ({ image, title }) => {
	return (
		<header className="header">
			<Nav />
			<h1>{title}</h1>
			<Image src={image} width={1920} height={600} alt="Banner" />
		</header>
	);
};
