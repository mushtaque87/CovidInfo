import React from "react";
import {
  GestureResponderEvent,
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedbackProps
} from "react-native";

type ITouchableProps = TouchableWithoutFeedbackProps;

class Touchable extends React.Component<ITouchableProps> {
  public render() {
    const { onPress, ...restProps } = this.props;
    if (Platform.OS === "android") {
      return <TouchableNativeFeedback onPress={this.onPress} {...restProps} />;
    } else {
      return <TouchableOpacity onPress={this.onPress} {...restProps} />;
    }
  }

  private onPress = (event: GestureResponderEvent) => {
    requestAnimationFrame(() => {
      if (this.props.onPress) {
        this.props.onPress(event);
      }
    });
  };
}

export default Touchable;
