import { render, screen } from "@testing-library/react";
import Button from "../components/button/button";

describe("Button Component", () => {
  test("should render correctly", () => {
    render(<Button />);
  });
});
