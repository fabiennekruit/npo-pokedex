import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BackLink } from "./back-link";

describe("BackLink", () => {
  it("should render the BackLink component correctly", () => {
    render(<BackLink />);

    const backLink = screen.getByText("Back to all Pokemon");
    expect(backLink).toBeVisible();
  });
  it("should render the BackLink component with correct href", () => {
    render(<BackLink />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/");
  });
});
