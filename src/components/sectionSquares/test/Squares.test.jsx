import { render, screen } from "@testing-library/react";
import { SquareDual } from "@/components/sectionSquares/SquareDual";
import { SquareTrial } from "@/components/sectionSquares/SquareTrial";
import "@testing-library/jest-dom";
import { Work } from "../../../../public/images/index";

const TITLE = "¿QUIERES UNIRTE A NUESTRA FAMILIA?";
const HREF = "https://nextjs.org/";
const TITLE_HREF = "Descargar";

describe("Squares", () => {
	it("should render SquareDual", () => {
		render(<SquareDual title={TITLE} image={Work} href={HREF} titleHref={TITLE_HREF} />);
		expect(screen.getByText(TITLE));
		expect(screen.getByRole("link", { name: TITLE_HREF })).toHaveAttribute("href", HREF);
		expect(screen.getByAltText(TITLE));
	});

	it("should render SquareTrial", () => {
		render(<SquareTrial title={TITLE} image={Work} href={HREF} />);
		expect(screen.getByText(TITLE));
		expect(screen.getByRole("link", { name: TITLE })).toHaveAttribute("href", HREF);
		expect(screen.getByAltText("image"));
	});
});
