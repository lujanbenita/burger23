import { render, screen } from "@testing-library/react";
import { SectionHistory } from "@/components/sectionHistory/SectionHistory";
import "@testing-library/jest-dom";

describe("SectionHistory", () => {
	it("should render SectionHistory", () => {
		render(<SectionHistory />);
		expect(screen.getByText("OUR STORY"));
	});
});
