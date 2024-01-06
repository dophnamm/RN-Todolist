import React from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';

import {colors} from '../../utils/colors';
import {fontFamily} from '../../utils/constant';

import {globalStyles} from '../../styles/globalStyles';

type TProps = {
  text: string;
  font?: string;
  size?: number;
  color?: string;
  style?: StyleProp<TextStyle>;
};

const Paragraph = (props: TProps) => {
  const {text, font, size, color, style} = props;

  return (
    <Text
      style={[
        globalStyles.text,
        {
          fontSize: size ?? 14,
          fontFamily: font ?? fontFamily.regular,
          color: color ?? colors.white,
        },
        style,
      ]}>
      {text}
    </Text>
  );
};

export default Paragraph;
