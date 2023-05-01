import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { SquareProps } from "./square.types";

export const SquareTrial: FC<SquareProps> = ({ image, title, href }) => {
	return (
		<div className="square-trial">
			<div className="square-trial__img">
				<Image src={image} width={640} height={640} alt="image" />
			</div>

			<h2>
				<Link href={href} legacyBehavior>
					<a>{title}</a>
				</Link>
			</h2>
		</div>
	);
};
