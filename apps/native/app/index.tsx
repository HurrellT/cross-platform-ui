import { Button } from "@hurrellt/ui";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import "../global.css";

export default function Native() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="font-bold text-4xl">Native</Text>
      <Button
        onClick={() => {
          console.log("Pressed!");
          alert("Pressed!");
        }}
        text="Boop"
      />
      <StatusBar style="auto" />
    </View>
  );
}
