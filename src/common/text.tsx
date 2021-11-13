import React from "react";
import { 
  PixelRatio, 
  RegisteredStyle, 
  StyleProp, StyleSheet, 
  Text as TextImpl, 
  TextProps, 
  TextStyle 
} from "react-native";

type ITextProps = TextProps;

class Text extends React.Component<ITextProps> {
  public render() {
    const { style, ...restProps } = this.props;
    const fontSizeScaleStyle = this.getFontSizeScaleStyle(style);
    return <TextImpl style={[styles.txt, style, fontSizeScaleStyle]} {...restProps} />;
  }

  private getFontSizeScaleStyle(style?: StyleProp<TextStyle>) {
    if (style && !Array.isArray(style)) {
      const BASE_PIXEL_RATIO = 2.2
      const fontSize = StyleSheet.flatten<TextStyle>(style as RegisteredStyle<TextStyle>).fontSize;

      return {
        fontSize: PixelRatio.get() < BASE_PIXEL_RATIO && fontSize
          ? fontSize * (PixelRatio.get() / BASE_PIXEL_RATIO) 
          : fontSize
      }
    }

    return {};
  }
}

const styles = StyleSheet.create({
  txt: {}
});

export default Text;
