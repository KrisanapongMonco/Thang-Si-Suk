import React from "react";
import { View, ViewProps, StyleSheet } from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme";

export interface ThemedViewProps extends ViewProps {
  lightBackgroundColor?: string;
  darkBackgroundColor?: string;
}

export function ThemedView(props: ThemedViewProps) {
  const { style, lightBackgroundColor, darkBackgroundColor, ...otherProps } =
    props;
  const colorScheme = useColorScheme();

  const backgroundColor =
    colorScheme === "light"
      ? lightBackgroundColor || "#fff"
      : darkBackgroundColor || "#1c1c1e";

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
