import { FollowOur } from "@/components/followOurChannel/FollowOur";
import { SectionHistory } from "@/components/sectionHistory/SectionHistory";
import { SectionJoinUs } from "@/components/sectionJoinUs/SectionJoinUs";
import { BannerAbout, Burgers, Location, News, SpotifyIcon } from "../../public/images";
import { SectionSquares } from "@/components/sectionSquares/SectionSquares";
import { SquareTrial } from "@/components/sectionSquares/SquareTrial";
import { VimeoAboutUs } from "@/components/sectionVimeo/VimeoAboutUs";
import { SectionHeadBanner } from "@/components/sectionHeadBanner/SectionHeadBanner";

export default function About() {
	return (
		<>
			<SectionHeadBanner title="About" image={BannerAbout} />

			<SectionHistory />

			<VimeoAboutUs />

			<SectionJoinUs />

			<FollowOur title="music" icon={SpotifyIcon} href="https://open.spotify.com/" />

			<SectionSquares>
				<SquareTrial title="Location" image={Location} href="/location" />
				<SquareTrial title="News" image={News} href="/news" />
				<SquareTrial title="Burgers" image={Burgers} href="/" />
			</SectionSquares>
		</>
	);
}
