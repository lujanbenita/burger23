//import { thirsty } from "@/styles/typography";
import { ISbStoryData } from "@storyblok/react";
import { FC } from "react";

type BurgersType = {
	burgers: ISbStoryData[];
};

export const SectionMenuBurgers: FC<BurgersType> = ({ burgers }) => {
	return (
		<section className="burgers">
			{burgers.map(burger => (
				<div className="burgers__item" key={burger.uuid}>
					<img src={burger.content.image.filename} alt={burger.content.name} />

					<h3>{burger.content.name}</h3>
				</div>
			))}
		</section>
	);
};
