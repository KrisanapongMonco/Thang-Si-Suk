import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import { BlurView } from "expo-blur";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabBarBackground() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  if (Platform.OS === "ios") {
    return (
      <BlurView
        tint={isDark ? "dark" : "light"}
        intensity={80}
        style={StyleSheet.absoluteFill}
      />
    );
  }

  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        {
          backgroundColor: isDark ? "#1c1c1e" : "#f2f2f7",
          borderTopWidth: StyleSheet.hairlineWidth,
          borderTopColor: isDark ? "#38383A" : "#D1D1D6",
        },
      ]}
    />
  );
}
