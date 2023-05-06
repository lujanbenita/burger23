import { ISbStoryData } from "@storyblok/react";
import Image from "next/image";
import { FC } from "react";

type LocationsType = {
	locations: ISbStoryData[];
};

export const SectionLocations: FC<LocationsType> = ({ locations }) => {
	return (
		<section className="locations">
			{locations.map(item => (
				<div className="location__item" key={item.uuid}>
					<div className="location__img">
						<Image src={item.content.image[0].filename} width={300} height={380} alt={item.content.city} />
					</div>
					<div className="location__content">
						<h3>{item.content.city}</h3>
						<hr className="hr" />
						<p>{item.content.address}</p>
						<p>{item.content.phone}</p>
						<p>{item.content.text}.</p>
						<p>{item.content.schedule}.</p>
					</div>
				</div>
			))}
		</section>
	);
};
