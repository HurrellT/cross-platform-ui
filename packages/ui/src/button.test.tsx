import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Button } from "./button";

describe("Button", () => {
  it("renders correctly", () => {
    const { toJSON } = render(<Button text="Click me" />);
    expect(toJSON()).toBeTruthy();
  });

  it("contains the correct text", () => {
    const button = render(<Button text="Click me" />).toJSON();
    expect(button).toBeTruthy();
  });

  it("calls onClick when pressed", () => {
    const mockOnClick = jest.fn();
    const { root } = render(
      <Button text="Click me" onClick={mockOnClick} />
    );
    fireEvent.press(root);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
