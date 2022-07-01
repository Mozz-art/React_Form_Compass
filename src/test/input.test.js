import { render, screen } from "@testing-library/react";
import Input from "../components/input/input";

describe("Button Component", () => {
  test("should render correctly", () => {
    render(<Input />);
  });
});
