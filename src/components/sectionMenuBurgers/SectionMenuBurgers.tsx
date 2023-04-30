import { thirsty } from "@/styles/typography";
import { ISbStoryData } from "@storyblok/react";
import { FC } from "react";

type BurgersType = {
	burgers: ISbStoryData[];
};

export const SectionMenuBurgers: FC<BurgersType> = ({ burgers }) => {
	return (
		<section className="burgers">
			{burgers.map(burger => (
				<div className="burgers__item">
					<img src={burger.content.image.filename} alt={burger.content.name} />

					<h3 className={thirsty.variable}>{burger.content.name}</h3>
				</div>
			))}
		</section>
	);
};
