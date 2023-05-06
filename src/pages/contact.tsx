import { SectionSquares } from "@/components/sectionSquares/SectionSquares";
import { SquareTrial } from "@/components/sectionSquares/SquareTrial";
import { BannerContact, Burgers, Location, News, TwitterIcon } from "../../public/images";
import { MAIN_ROUTES, RRSS } from "@/core/routes";
import { SectionHeadBanner } from "@/components/sectionHeadBanner/SectionHeadBanner";
import { SectionContactForm } from "@/components/sectionContactForm/SectionContactForm";
import { FollowOur } from "@/components/followOurChannel/FollowOur";

export default function () {
	return (
		<>
			<SectionHeadBanner title="Contact" image={BannerContact} />

			<SectionContactForm />

			<FollowOur title="twitter" icon={TwitterIcon} href={RRSS.twitter} />

			<SectionSquares>
				<SquareTrial title="Location" image={Location} href={MAIN_ROUTES.news} />
				<SquareTrial title="HOME" image={Burgers} href={MAIN_ROUTES.home} />
				<SquareTrial title="About" image={News} href={MAIN_ROUTES.about} />
			</SectionSquares>
		</>
	);
}
