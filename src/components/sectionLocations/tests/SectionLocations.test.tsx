import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SectionLocations } from "../SectionLocations";
import { LocationDataMock } from "./locationDataMock";

describe("SectionLocations", () => {
	it("should render SectionLocations", () => {
		render(<SectionLocations locations={LocationDataMock} />);
		expect(screen.getByText("Valencia"));
		expect(screen.getByAltText("Valencia"));
	});
});
