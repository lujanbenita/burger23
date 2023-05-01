import { render, screen } from "@testing-library/react";
import { SectionJoinUs } from "@/components/sectionJoinUs/SectionJoinUs";
import "@testing-library/jest-dom";

describe("SectionJoinUs", () => {
	it("should render SectionJoinUs", () => {
		render(<SectionJoinUs />);
		expect(screen.getByText("WE ARE FAMILY"));
	});
});
