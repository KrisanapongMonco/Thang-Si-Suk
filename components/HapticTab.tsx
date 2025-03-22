import React from "react";
import { Pressable, PressableProps, GestureResponderEvent } from "react-native";
import * as Haptics from "expo-haptics";

export function HapticTab(props: PressableProps) {
  const { children, onPress, ...rest } = props;

  const handlePress = React.useCallback(
    (event: GestureResponderEvent) => {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      if (onPress) {
        onPress(event);
      }
    },
    [onPress]
  );

  return (
    <Pressable {...rest} onPress={handlePress}>
      {children}
    </Pressable>
  );
}
