import { render, screen } from "@testing-library/react";
import { Nav } from "@/components/nav/Nav";
import "@testing-library/jest-dom";

describe("Footer", () => {
	it("should render Nav", () => {
		render(<Nav />);
		expect(screen.getByText("ABOUT"));
	});

	it("should have all anchors", () => {
		render(<Nav />);
		expect(screen.getByRole("link", { name: "ABOUT" })).toHaveAttribute("href", "/about");
		expect(screen.getByRole("link", { name: "LOCATION" })).toHaveAttribute("href", "/location");
		expect(screen.getByRole("link", { name: "CONTACT" })).toHaveAttribute("href", "/contact");
		expect(screen.getByRole("link", { name: "NEWS" })).toHaveAttribute("href", "/news");
	});
});
