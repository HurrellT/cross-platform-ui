import { cssInterop } from "nativewind";
import * as React from "react";
import { Pressable, PressableProps, Text } from "react-native";

export interface ButtonProps extends PressableProps {
  text: string;
  testID?: string;
  containerClassName?: string;
  textClassName?: string;
}

const StyledPressable = cssInterop(Pressable, { className: "style" });
const StyledText = cssInterop(Text, { className: "style" });

export function Button({
  text,
  testID = "button",
  containerClassName,
  textClassName,
  ...pressableProps
}: ButtonProps) {
  return (
    <StyledPressable
      className={`bg-blue-500 rounded-lg py-2 px-4 ${containerClassName}`}
      testID={testID}
      {...pressableProps}
    >
      <StyledText
        className={`text-white text-center ${textClassName}`}
        testID={`${testID}-text`}
      >
        {text}
      </StyledText>
    </StyledPressable>
  );
}
