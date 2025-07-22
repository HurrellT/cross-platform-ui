"use client";

import { Button } from "@hurrellt/ui";
import { View, Text } from "react-native";

export default function Web() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Web</h1>
      <Button onClick={() => console.log("Pressed!")} text="Boop" />
    </div>
  );
}
