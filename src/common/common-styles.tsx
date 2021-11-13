// https://material.io/design/color/the-color-system.html
// https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/color/

import {I18nManager, ViewStyle} from 'react-native';

const colors = {
  black: '#000000',
  blue: '#2196f3', // 500
  blueGray: '#78909c', // 400
  blueGrayDark: '#546e7a', // 600
  blueGrayLight: '#eceff1', // 50
  blueGrayLight2: '#cfd8dc', // 100
  blueGrayLight3: '#b0bec5', // 200
  gray: '#bdbdbd', // 400
  gray2: '#828282', // 400
  grayDark: '#757575', // 600
  grayDark2: '#424242', // 800
  grayDark3: '#212121', // 900,
  grayDark4: '#4F4F4F',
  grayLight: '#fafafa', // 50
  grayLight2: '#f5f5f5', // 100
  grayLight3: '#eeeeee', // 200
  green: '#66bb6a', // 400
  greenDark: '#2e7d32', // 800
  red: '#ee385e', // 400
  white: '#ffffff',
  darkRed: '#8b0000',
  amber: '#FFBF00',
  brightGreen: '#32CD32',
  backButton: '#1A98AD',
};

const brandColors = {
  statusGreen: '#60cd84',
  green: '#17ff9f',
  green2: '#12cc7f',
  green3: '#15e68f',
  green4: '#a2ffd9',
  petrol: '#18606B',
  petrol2: '#468089',
  petrol3: '#8cb0b6',
  petrol4: '#d1dfe1',
  petrolBlack: '#0A262C',
  pureWhite: '#FFFFFF',
  red: '#EE385E',
  red2: '#be2e4b',
  red3: '#f1607e',
  red4: '#fac3cf',
  silver: '#9DAFC7',
};

const fontFamily = 'Dubai-Regular';

const h1 = {
  fontFamily,
  fontSize: 30,
  fontStyle: 'normal',
  fontWeight: 'normal',
  letterSpacing: 0,
  lineHeight: 40,
};
const h2 = {
  fontFamily,
  fontSize: 30,
  fontStyle: 'normal',
  fontWeight: 'normal',
  letterSpacing: 0,
  lineHeight: 40,
};
const h3 = {
  fontFamily,
  fontSize: 20,
  fontStyle: 'normal',
  fontWeight: '500',
  letterSpacing: 0,
  lineHeight: 28,
};
const h4 = {
  fontFamily,
  fontSize: 16,
  fontStyle: 'normal',
  fontWeight: '500',
  letterSpacing: 0,
  lineHeight: 24,
};
const body1 = {
  fontFamily,
  fontSize: 16,
  fontStyle: 'normal',
  fontWeight: 'normal',
  letterSpacing: 0,
  lineHeight: 24,
};
const body2 = {
  fontFamily,
  fontSize: 14,
  fontStyle: 'normal',
  fontWeight: 'normal',
  letterSpacing: 0,
  lineHeight: 20,
};
const caption = {
  fontFamily,
  fontSize: 12,
  fontStyle: 'normal',
  fontWeight: 'normal',
  letterSpacing: 0,
  lineHeight: 16,
};
const button = {
  fontFamily,
  fontSize: 16,
  fontStyle: 'normal',
  fontWeight: '500',
  letterSpacing: 0.5,
  lineHeight: 24,
};

const typography = {
  alert: {
    body1: {
      ...body1,
      color: brandColors.red,
    },
    body2: {
      ...body2,
      color: brandColors.red,
    },
    button: {
      ...button,
      color: brandColors.red,
    },
    caption: {
      ...caption,
      color: brandColors.red,
    },
    h1: {
      ...h1,
      color: brandColors.red,
    },
    h2: {
      ...h2,
      color: brandColors.red,
    },
    h3: {
      ...h3,
      color: brandColors.red,
    },
    h4: {
      ...h4,
      color: brandColors.red,
    },
  },
  inverse: {
    body1: {
      ...body1,
      color: brandColors.green,
    },
    body2: {
      ...body2,
      color: brandColors.green,
    },
    button: {
      ...button,
      color: brandColors.green,
    },
    caption: {
      ...caption,
      color: brandColors.green,
    },
    h1: {
      ...h1,
      color: brandColors.green,
    },
    h2: {
      ...h2,
      color: brandColors.green,
    },
    h3: {
      ...h3,
      color: brandColors.green,
    },
    h4: {
      ...h4,
      color: brandColors.green,
    },
  },
  light: {
    body1: {
      ...body1,
      color: brandColors.petrol2,
    },
    body2: {
      ...body2,
      color: brandColors.petrol2,
    },
    button: {
      ...button,
      color: brandColors.petrol2,
    },
    caption: {
      ...caption,
      color: brandColors.petrol2,
    },
    h1: {
      ...h1,
      color: brandColors.petrol2,
    },
    h2: {
      ...h2,
      color: brandColors.petrol2,
    },
    h3: {
      ...h3,
      color: brandColors.petrol2,
    },
    h4: {
      ...h4,
      color: brandColors.petrol2,
    },
  },
  main: {
    body1: {
      ...body1,
      color: brandColors.petrol,
    },
    body2: {
      ...body2,
      color: brandColors.petrol,
    },
    button: {
      ...button,
      color: brandColors.petrol,
    },
    caption: {
      ...caption,
      color: brandColors.petrol,
    },
    h1: {
      ...h1,
      color: brandColors.petrol,
    },
    h2: {
      ...h2,
      color: brandColors.petrol,
    },
    h3: {
      ...h3,
      color: brandColors.petrol,
    },
    h4: {
      ...h4,
      color: brandColors.petrol,
    },
  },
};

const rtlFlipStyle = {
  transform: [
    {
      scaleX: I18nManager.isRTL ? -1 : 1,
    },
  ],
};

const shadowStyle = {};

const severityColors = {
  danger: colors.red,
  danger2: colors.black,
  info: colors.blue,
  success: brandColors.green,
};

const stateColors = {
  active: brandColors.green,
  disabled: brandColors.petrol4,
};

const shadeColors = {
  dark: colors.grayDark,
  dark2: colors.grayDark2,
  light: colors.grayLight,
  light2: colors.grayLight2,
  light3: colors.grayLight3,
  normal: colors.gray,
};

const baseGap = rem(0.8);
const gap = {
  double: baseGap * 2,
  quadruple: baseGap * 4,
  single: baseGap,
  triple: baseGap * 3,
};

const baseBorderRadius = rem(0.4);
const borderRadius = {
  double: baseBorderRadius * 2,
  single: baseBorderRadius,
};

const touchableStyle = {
  minHeight: rem(5.6),
  minWidth: rem(3.6),
};

const pageColor = colors.white;

const headerTitleContainerStyle = {
  width: '100%',
  paddingHorizontal: 75,
};

const pageStyle = {
  backgroundColor: pageColor,
};

const pageContainerStyle: ViewStyle = {
  flex: 1,
  flexDirection: 'column',
  paddingBottom: 12,
  paddingLeft: 24,
  paddingRight: 24,
  paddingTop: 12,
};

const transparentHeaderStyle = {
  backgroundColor: pageColor,
  borderBottomWidth: 0,
  elevation: 0,
  shadowRadius: 0,
};

function rem(value: number) {
  return value * 10;
}

const headerStyle = {
  elevation: 0,
  height: 48,
  maxHeight: 100,
};

const layoutStyle = {
  paddingBottom: 24,
  paddingLeft: 24,
  paddingRight: 24,
  paddingTop: 24,
};

const middleLabelStyle = {
  fontSize: 24,
  fontWeight: '100',
  marginBottom: 32,
};

export {
  rem,
  gap,
  severityColors,
  brandColors,
  rtlFlipStyle,
  colors,
  stateColors,
  touchableStyle,
  borderRadius,
  pageContainerStyle,
  headerTitleContainerStyle,
  pageStyle,
  middleLabelStyle,
  transparentHeaderStyle,
  shadeColors,
  headerStyle,
  typography,
  layoutStyle,
};
