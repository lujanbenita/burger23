import { render, screen } from "@testing-library/react";
import { Footer } from "@/components/footer/Footer";
import "@testing-library/jest-dom";

describe("Footer", () => {
	it("should render Footer", () => {
		render(<Footer />);
		expect(screen.getByText("Todos los derechos reservados."));
	});

	it("should have all anchors", () => {
		render(<Footer />);
		expect(screen.getByRole("link", { name: "ABOUT" })).toHaveAttribute("href", "/about");
		expect(screen.getByRole("link", { name: "LOCATION" })).toHaveAttribute("href", "/location");
		expect(screen.getByRole("link", { name: "CONTACT" })).toHaveAttribute("href", "/contact");
		expect(screen.getByRole("link", { name: "NEWS" })).toHaveAttribute("href", "/news");
		expect(screen.getByRole("link", { name: "BURGER TOWN" })).toHaveAttribute("href", "/");
	});
});
