//import { thirsty } from "@/styles/typography";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";

type FollowOurProps = {
	title: string;
	icon: StaticImageData;
	href: string;
};

export const FollowOur: FC<FollowOurProps> = ({ title, icon, href }) => {
	return (
		<section className="follow">
			{/* <h2 className={thirsty.className}>Follow our {title}</h2> */}
			<span>
				<a href={href} target="_blank" rel="noreferrer">
					<Image src={icon} width={48} height={48} alt={`Icono de ${title}`} />
				</a>
			</span>
		</section>
	);
};
