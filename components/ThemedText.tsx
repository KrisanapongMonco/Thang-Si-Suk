import React from "react";
import { Text, TextProps, StyleSheet } from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme";

type TextType = "default" | "title" | "subtitle" | "link" | "small";

export interface ThemedTextProps extends TextProps {
  type?: TextType;
  lightColor?: string;
  darkColor?: string;
}

export function ThemedText(props: ThemedTextProps) {
  const {
    style,
    lightColor,
    darkColor,
    type = "default",
    ...otherProps
  } = props;
  const colorScheme = useColorScheme();
  const color =
    colorScheme === "light" ? lightColor || "#000" : darkColor || "#fff";

  let textStyle;
  switch (type) {
    case "title":
      textStyle = styles.title;
      break;
    case "subtitle":
      textStyle = styles.subtitle;
      break;
    case "link":
      textStyle = styles.link;
      break;
    case "small":
      textStyle = styles.small;
      break;
    default:
      textStyle = styles.default;
  }

  return <Text style={[textStyle, { color }, style]} {...otherProps} />;
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
  },
  link: {
    fontSize: 16,
    color: "#2e78b7",
  },
  small: {
    fontSize: 14,
  },
});
