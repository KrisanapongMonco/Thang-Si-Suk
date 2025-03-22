import React from "react";
import { Text, StyleSheet } from "react-native";

interface IconSymbolProps {
  name: string;
  size: number;
  color: string;
}

export function IconSymbol({ name, size, color }: IconSymbolProps) {
  // This is a simple icon component that uses the SF Symbols names
  // In a real app, you would use a proper icon library like @expo/vector-icons
  // or create a mapping to actual icon components

  return (
    <Text style={[styles.icon, { fontSize: size, color }]}>
      {name === "house.fill"
        ? "🏠"
        : name === "paperplane.fill"
        ? "✈️"
        : name === "heart.fill"
        ? "❤️"
        : name === "gear"
        ? "⚙️"
        : "📱"}
    </Text>
  );
}

const styles = StyleSheet.create({
  icon: {
    fontWeight: "bold",
  },
});
