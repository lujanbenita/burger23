import { render, screen } from "@testing-library/react";
import { YoutubeIcon } from "../../../../public/images/index";
import { FollowOur } from "@/components/followOurChannel/FollowOur";
import "@testing-library/jest-dom";

const TITLE = "channel";
const HREF = "https://testing-library.com/";

describe("FollowOur", () => {
	it("should render FollowOur", () => {
		render(<FollowOur title={TITLE} icon={YoutubeIcon} href={HREF} />);
		expect(screen.getByText(`Follow our ${TITLE}`));
		expect(screen.getByRole("link")).toHaveAttribute("href", HREF);
		expect(screen.getByAltText(`Icono de ${TITLE}`));
	});
});
