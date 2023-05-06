import { SectionSquares } from "@/components/sectionSquares/SectionSquares";
import { SquareTrial } from "@/components/sectionSquares/SquareTrial";
import {
	BannerLocation,
	Burgers,
	MobileApp,
	News,
	Slider1,
	Slider2,
	Slider3,
	Slider4,
	Slider5,
	Work,
} from "../../public/images";
import { MAIN_ROUTES } from "@/core/routes";
import { SquareDual } from "@/components/sectionSquares/SquareDual";
import { SectionHeadBanner } from "@/components/sectionHeadBanner/SectionHeadBanner";
import { ISbStoryData, getStoryblokApi } from "@storyblok/react";
import { SectionLocations } from "@/components/sectionLocations/SectionLocations";
import { SectionCarousel } from "@/components/sectionCarousel/SectionCarousel";

type LocationsType = {
	locations: ISbStoryData[];
};

export default function location({ locations }: LocationsType) {
	return (
		<>
			<SectionHeadBanner title={"Location"} image={BannerLocation} />

			<SectionLocations locations={locations} />
			<SectionCarousel />

			<SectionSquares>
				<SquareDual title="¿QUIERES UNIRTE A NUESTRA FAMILIA?" image={Work} href="#" titleHref="Enviar solicitud" />
				<SquareDual title="DESCARGA NUESTRA APP" image={MobileApp} href="#" titleHref="Descargar" />
			</SectionSquares>

			<SectionSquares>
				<SquareTrial title="NEWS" image={News} href={MAIN_ROUTES.news} />
				<SquareTrial title="HOME" image={Burgers} href={MAIN_ROUTES.home} />
				<SquareTrial title="ABOUT" image={Burgers} href={MAIN_ROUTES.about} />
			</SectionSquares>
		</>
	);
}

export async function getStaticProps() {
	const { data } = await getStoryblokApi().get(`cdn/stories/`, {
		version: "published",
		cv: Date.now(),
		starts_with: "locations",
	});

	return {
		props: {
			locations: data ? data.stories : false,
		},
		revalidate: 3600,
	};
}
