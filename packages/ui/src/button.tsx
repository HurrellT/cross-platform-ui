import * as React from "react";
import { GestureResponderEvent, Pressable, Text } from "react-native";
import { cssInterop } from "nativewind";

export interface ButtonProps {
  text: string;
  onClick?: (event: GestureResponderEvent) => void;
}

const StyledPressable = cssInterop(Pressable, { className: "style" });
const StyledText = cssInterop(Text, { className: "style" });

export function Button({ text, onClick }: ButtonProps) {
  return (
    <StyledPressable
      className="bg-blue-500 rounded-lg py-2 px-4"
      onPress={onClick}
    >
      <StyledText className="text-white text-center">{text}</StyledText>
    </StyledPressable>
  );
}
