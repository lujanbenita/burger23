import { ISbStoryData, getStoryblokApi } from "@storyblok/react";
import { SectionMenuBurgers } from "@/components/sectionMenuBurgers/SectionMenuBurgers";
import { SectionHeadBanner } from "@/components/sectionHeadBanner/SectionHeadBanner";
import { BannerHome, Contact, Location, MobileApp, News, Work, YoutubeIcon } from "../public/images";
import { FollowOur } from "@/components/followOurChannel/FollowOur";
import { SectionSquares } from "@/components/sectionSquares/SectionSquares";
import { SquareDual } from "@/components/sectionSquares/SquareDual";
import { SquareTrial } from "@/components/sectionSquares/SquareTrial";
import { RRSS } from "@/core/routes";

type BurgersType = {
	burgers: ISbStoryData[];
};

export default function Home({ burgers }: BurgersType) {
	return (
		<>
			<SectionHeadBanner title={"Next Burger"} image={BannerHome} />

			<SectionMenuBurgers burgers={burgers} />

			<FollowOur title="channel" icon={YoutubeIcon} href={RRSS.youtube} />

			<SectionSquares>
				<SquareDual title="¿QUIERES UNIRTE A NUESTRA FAMILIA?" image={Work} href="#" titleHref="Enviar solicitud" />
				<SquareDual title="DESCARGA NUESTRA APP" image={MobileApp} href="#" titleHref="Descargar" />
			</SectionSquares>

			<SectionSquares>
				<SquareTrial title="Location" image={Location} href="#" />
				<SquareTrial title="Contact" image={Contact} href="#" />
				<SquareTrial title="News" image={News} href="#" />
			</SectionSquares>
		</>
	);
}

export async function getStaticProps() {
	const { data } = await getStoryblokApi().get(`cdn/stories/`, {
		version: "published",
		cv: Date.now(),
		starts_with: "burgers",
	});

	return {
		props: {
			burgers: data ? data.stories : false,
		},
		revalidate: 3600,
	};
}
