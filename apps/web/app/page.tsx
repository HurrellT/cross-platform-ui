"use client";

import { Button } from "@hurrellt/ui";

export default function Web() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Web</h1>
      <Button
        onPress={() => {
          console.log("Pressed!");
          alert("Pressed!");
        }}
        text="Boop"
      />
    </div>
  );
}
