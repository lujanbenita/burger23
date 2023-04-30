import { StaticImageData } from "next/image";

export type SquareProps = {
	image: StaticImageData;
	title: string;
	href: string;
	titleHref?: string;
};
