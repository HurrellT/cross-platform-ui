import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Button } from "./button";


describe("Button", () => {
  it("renders correctly", () => {
    const { root } = render(<Button text="Click me" />);
    expect(root).toBeTruthy();
  });

  it("contains the correct text", () => {
    const { root } = render(<Button text="Click me" />);
    expect(root.props.children.props.children).toContain("Click me");
  });

  it("contains className classes", () => {
    const { root } = render(
      <Button text="Click me" testID="button" />
    );
    expect(root.props.className).toContain("css-view");
  });

  it("calls onPress when pressed", () => {
    const mockOnPress = jest.fn();
    const { root } = render(
      <Button text="Click me" onPress={mockOnPress} />
    );
    fireEvent.press(root);
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
